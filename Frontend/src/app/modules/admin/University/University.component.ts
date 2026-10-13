import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { University_Service } from "../../../services/University.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { University } from "../../../models/University";
import { Status } from "../../../models/Status";
import { University_Document } from "../../../models/University_Document";
import { MatDialog } from "@angular/material";
import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import { Country_Service } from "app/services/Country.Service";
import { Country } from "app/models/Country";
import { Document } from "app/models/Document";
import { Files_Upload_Service } from "app/services/Files_Upload.Service";
@Component({
  selector: "app-University",
  templateUrl: "./University.component.html",
  styleUrls: ["./University.component.css"],
})
export class UniversityComponent implements OnInit {
  University_Data: University[];
  University_Document_Data: University_Document[];
  University_: University = new University();
  University_Search: University = new University();

  University_Name_Search: string;
  Documents_Data: Document[];
  Entry_View: boolean = true;
  Document_View: boolean = true;
  profile_View: boolean = true;
  application_View: boolean = true;
  University_Documents_: any = {
    University_Document_Id: 0,
    University_Id: 0,
    File_Name: '',
    Description: '',
    Document_Id: 0,
    Document_Name: ''
  };
  DocumentFile: FileList | null = null;
  Document_File_Array: any[] = [];
  EditIndex: number;
  Total_Entries: number;
  color = "primary";
  mode = "indeterminate";
  value = 50;
  issLoading: boolean;
  Permissions: any;
  myInnerHeight: number;
  Country_Data: Country[];

  Country_Data_Filter: Country[];
  Country_Temp: Country = new Country();


  Image_Photo: string = '';
  If_file_changed: boolean = false;
  Save_Call_Status: boolean = false;
  Documents_Tab_Save: boolean = true;

  University_Edit: boolean;
  University_Save: boolean;
  University_Delete: boolean;

  Status_: Status = new Status();
  Status_Data: Status[];
  Status_Search: Status = new Status();

  Search_Country_: Country = new Country();

  Country_: Country = new Country();

  ImageFile: any;
  File: string;

  University_File: string;
  University_Image: any;
  University_Photo = [];
  Login_User: string = "0";
  Selected_University: any;


  // Properties for document handling
  Initial_Deposit: string;
  Campus_Location: string;
  Living_Expense: string;
  Description: string;
  Part_Time_Availability: string;
  Documents: File[] = []; // Array to store uploaded documents
  Documents_: Document;

  constructor(
    public University_Service_: University_Service,
    public Country_Service_: Country_Service,
    private Files_Upload_Service_: Files_Upload_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog
  ) { }
  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");
    this.issLoading = true;
    this.Page_Load();
  }
  Page_Load() {
    this.myInnerHeight = window.innerHeight;
    this.myInnerHeight = this.myInnerHeight - 230;
    this.Get_Menu_Status(7, this.Login_User);
    this.Clr_University();
    this.Search_University();
    this.Get_All_DocumentNames();

    this.Entry_View = false;
    this.Document_View = false; // Ensure document view is hidden by default
    this.profile_View = true;
    this.application_View = true;
  }
  Get_Menu_Status(Menu_id, Login_user_id) {
    this.issLoading = false;
    this.University_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
      (Rows) => {
        if (Rows[0][0] == undefined) {
          if (Menu_id == 7) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (Rows[0][0].View > 0) {
          if (Menu_id == 7) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("Home_Page");
            }

            this.University_Edit = this.Permissions.Edit;
            this.University_Save = this.Permissions.Save;
            this.University_Delete = this.Permissions.Delete;
          }
        }
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Search_Country_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    if (this.Country_Data == undefined || this.Country_Data.length == 0) {
      this.issLoading = true;

      this.Country_Service_.Search_Country_Typeahead(Value).subscribe(
        (Rows) => {
          // debugger;
          if (Rows != null) {
            this.Country_Data = Rows[0];
            console.log("this.Country_Data: ", this.Country_Data);
            this.Country_Data_Filter = [];
            for (var i = 0; i < this.Country_Data.length; i++) {
              if (
                this.Country_Data[i].Country_Name.toLowerCase().includes(Value)
              )
                this.Country_Data_Filter.push(this.Country_Data[i]);
            }
          }
          this.issLoading = false;
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    } else {
      this.Country_Data_Filter = [];
      for (var i = 0; i < this.Country_Data.length; i++) {
        if (this.Country_Data[i].Country_Name.toLowerCase().includes(Value))
          this.Country_Data_Filter.push(this.Country_Data[i]);
      }
    }
  }
  display_Country_(Country_e: Country) {
    if (Country_e) {
      return Country_e.Country_Name;
    }
  }

  Create_New() {
    this.Entry_View = true;
    this.Document_View = false; // Ensure document view is hidden
    this.Clr_University();
    this.profile_View = true;
    this.application_View = false;
  }
  Close_Click() {
    this.Entry_View = false;
    this.Document_View = false; // Ensure document view is hidden
  }
  trackByFn(index, item) {
    return index;
  }
  Clr_University() {
    this.University_.University_Id = 0;
    this.University_.University_Name = "";
    this.University_.Country_Id = 0;
    this.Country_ = null;
  }

  Get_All_DocumentNames() {
    console.log("Fetching all document names...");
    this.issLoading = true;
    this.University_Service_.Get_All_DocumentNames().subscribe(
      (Rows) => {
        console.log("Document names fetched successfully:", Rows);
        this.Documents_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        console.error("Error fetching document names:", Rows);
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Search_University() {
    var Search_Country_temp = 0;
    if (this.Search_Country_ == undefined || this.Search_Country_ == null)
      Search_Country_temp = 0;
    else if (
      this.Search_Country_.Country_Id == undefined ||
      this.Search_Country_.Country_Id == null
    )
      Search_Country_temp = 0;
    else Search_Country_temp = this.Search_Country_.Country_Id;

    console.log(
      "Searching universities with name:",
      this.University_Name_Search
    );
    this.issLoading = true;
    this.University_Service_.Search_University(
      this.University_Name_Search, Search_Country_temp
    ).subscribe(
      (Rows) => {
        console.log("Universities fetched successfully:", Rows);
        this.University_Data = Rows[0];
        this.Total_Entries = this.University_Data.length;
        if (this.University_Data.length == 0) {
          console.warn("No universities found.");
          this.issLoading = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: "3" },
          });
        }
        this.issLoading = false;
      },
      (Rows) => {
        console.error("Error fetching universities:", Rows);
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Get_University_Documents(University_Id_) {
    this.issLoading = true;
    this.University_Service_.Get_University_Documents(University_Id_).subscribe(
      (Rows) => {
        this.University_Document_Data = Rows[0];

        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Delete_University(University_Id, index) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to delete ?",
        Type: true,
        Heading: "Confirm",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.University_Service_.Delete_University(University_Id).subscribe(
          (Delete_status) => {
            if (Delete_status[0][0].University_Id_ > 0) {
              this.University_Data.splice(this.EditIndex, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Search_University();
            } else if (Number(Delete_status[0][0].University_Id_) == -2) {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: {
                  Message: "Already in Use, Cannot be Deleted!",
                  Type: "2",
                },
              });
            } else {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
              });
            }
            this.issLoading = false;
          },
          (Rows) => {
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }
  Save_University() {
    console.log("Saving university:", this.University_);
    if (
      !this.University_.University_Name ||
      this.University_.University_Name.trim() === ""
    ) {
      console.warn("University name is missing.");
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Final Update Name", Type: "3" },
      });
      return;
    }

    // if (
    //   !this.Country_ ||
    //   !this.Country_.Country_Id ||
    //   this.Country_.Country_Id === 0
    // ) {
    //   console.warn("Country is not selected.");
    //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Please Select Country", Type: "3" },
    //   });
    //   return;
    // }

    this.issLoading = true;
    this.University_.Country_Id = 0;// this.Country_.Country_Id;
    this.University_.Country_Name = "";//this.Country_.Country_Name;
    this.University_.Initial_Deposit = "";// this.University_.Initial_Deposit || "";
    this.University_.Campus_Location = "";// this.University_.Campus_Location || "";
    this.University_.Living_Expense = "";// this.University_.Living_Expense || "";
    this.University_.Description = "";//this.University_.Description || "";
    this.University_.Part_Time_Availability = "";//his.University_.Part_Time_Availability || "";

    console.log("Final university data to save:", this.University_);
    this.University_Service_.Save_University(this.University_).subscribe(
      (Save_status) => {
        console.log("Save response:", Save_status);
        Save_status = Save_status[0];
        if (Number(Save_status[0].University_Id_) > 0) {
          console.log("University saved successfully.");
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved Successfully", Type: "false" },
          });
          this.Search_University();
          this.Clr_University();
        } else {
          console.error("Error saving.");
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Error Occurred", Type: "2" },
          });
        }
        this.issLoading = false;
      },
      (error) => {
        console.error("Error during save operation:", error);
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: error.error.error, Type: "2" },
        });
      }
    );
  }
  Edit_University(University_e: University, index) {
    console.log("Editing university at index:", index, "Data:", University_e);
    this.Entry_View = true;
    this.University_ = Object.assign({}, University_e);
    console.log("Updated university object for editing:", this.University_);
    this.Country_Temp.Country_Id = this.University_.Country_Id;
    this.Country_Temp.Country_Name = this.University_.Country_Name;
    this.Country_ = Object.assign({}, this.Country_Temp);
  }

  Load_Documents(University_e: University, index: number) {
    console.log(
      "Loading documents for university at index:",
      index,
      "Data:",
      University_e
    );
    this.Entry_View = false; // Hide the entry view
    this.Document_View = true; // Show the document view
    this.Selected_University = Object.assign({}, University_e); // Set the selected university
    console.log("Selected university for documents:", this.Selected_University);
  }

  // File change handler for university documents
  // onDocumentsChange(event: Event) {
  //   this.If_file_changed = true;
  //   const target = event.target as HTMLInputElement;
  //   const files = target.files;
  //   this.DocumentFile = files;

  //   if (this.DocumentFile && this.DocumentFile.length > 0) {
  //     this.Image_Photo = this.DocumentFile[0].name;
  //   }
  // }

  Save_University_Document() {
    // Validation checks
    if (this.Documents_ == undefined || this.Documents_ == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Document", Type: "3" },
      });
      return;
    }

    if (
      this.Documents_.Document_Id == undefined ||
      this.Documents_.Document_Id == null ||
      this.Documents_.Document_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Document", Type: "3" },
      });
      return;
    }

    if (
      this.Image_Photo == null ||
      this.Image_Photo == undefined ||
      this.Image_Photo == ""
    ) {
      this.Image_Photo = "";
      this.DocumentFile = null; // Set to null, not empty array

      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose a File", Type: "3" },
      });
      return;
    }

    // Set university document properties
    this.University_Documents_.University_Id = this.Selected_University.University_Id;
    this.University_Documents_.File_Name = this.Image_Photo;
    this.University_Documents_.Document_Id = this.Documents_.Document_Id;
    this.University_Documents_.Document_Name = this.Documents_.Document_Name;

    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;

    this.issLoading = true;

    // Upload to AWS first, then save to database
    this.upload(this.DocumentFile, this.Selected_University.University_Id)
      .then((key) => {
        // If a key was returned, update the file name
        if (typeof key === "string") {
          this.University_Documents_.File_Name = key;
        }

        // Now save the document details
        return this.Files_Upload_Service_.Save_University_Document(
          this.University_Documents_,
          this.DocumentFile,
          this.Document_File_Array
        ).toPromise();
      })
      .then(
        (Save_status) => {
          // debugger;

          if (Number(Save_status[0][0].University_Id_) > 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Saved", Type: "false" },
            });
            this.Save_Call_Status = false;
            // this.Get_University_Document(this.Selected_University.University_Id);
            this.Clr_University_Document();
          } else {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Error Occurred", Type: "2" },
            });
          }
          this.issLoading = false;
        },
        (error) => {
          this.issLoading = false;
          this.Save_Call_Status = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: error.error.error || "Error occurred while saving", Type: "2" },
          });
        }
      )
      .catch((error) => {
        this.issLoading = false;
        this.Save_Call_Status = false;
        console.error("Error in Save_University_Document:", error);
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error occurred while uploading file", Type: "2" },
        });
      });
  }
  Clr_University_Document() {
    this.University_Documents_ = {
      University_Document_Id: 0,
      University_Id: 0,
      File_Name: '',
      Description: '',
      Document_Id: 0,
      Document_Name: ''
    };
    this.Documents_ = null;
    this.Image_Photo = '';
    this.DocumentFile = null; // Set to null, not empty array
    this.If_file_changed = false;
  }
  onDocumentsChange(event: Event) {
    this.If_file_changed = true;
    const target = event.target as HTMLInputElement;
    const files = target.files; // This is FileList | null
    this.DocumentFile = files;

    if (this.DocumentFile && this.DocumentFile.length > 0) {
      this.Image_Photo = this.DocumentFile[0].name;
    }
  }

  // FIXED UPLOAD METHOD (No changes needed - already correct)
  upload(doc: FileList | null, University_Id: number): Promise<string | void> {
    return new Promise<string | void>((resolve, reject) => {
      if (this.If_file_changed && doc) {
        const file = doc.item(0); // FileList has .item() method
        if (file) {
          this.Files_Upload_Service_.uploadFileUniversity(file, University_Id)
            .then((key) => {
              resolve(key);
            })
            .catch((error) => reject(error));
        } else {
          reject(new Error("No file found"));
        }
      } else {
        resolve();
      }
    });
  }

  // FIXED SERVICE METHOD - Convert FileList to File[] for FormData


  // Save_Documents() {
  //   console.log("Saving documents for university:", this.Selected_University);
  //   const documentData = {
  //     Documents: this.Documents,
  //     Document_Name: this.Documents_ ? this.Documents_.Document_Name : null,
  //   };

  //   console.log("Document data to save:", documentData);
  //   this.University_Service_.Save_Documents(
  //     this.Selected_University.University_Id,
  //     1,
  //     documentData
  //   ).subscribe(
  //     (response) => {
  //       console.log("Documents saved successfully:", response);
  //       const dialogRef = this.dialogBox.open(DialogBox_Component, {
  //         panelClass: "Dialogbox-Class",
  //         data: { Message: "Documents Saved Successfully", Type: "false" },
  //       });
  //       this.Close_Documents(); // Close the document view after saving
  //     },
  //     (error) => {
  //       console.error("Error saving documents:", error);
  //       const dialogRef = this.dialogBox.open(DialogBox_Component, {
  //         panelClass: "Dialogbox-Class",
  //         data: { Message: "Error Saving Documents", Type: "2" },
  //       });
  //     }
  //   );
  // }

  Close_Documents() {
    console.log("Closing document view.");
    this.Document_View = false; // Hide the document view
    this.Entry_View = false; // Ensure the entry view is hidden
    console.log("Document view closed, returning to default state.");
  }
}
