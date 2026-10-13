import {
  Component,
  OnInit,
  Input,
  Injectable,
  ErrorHandler,
  ChangeDetectorRef,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of as observableOf, merge, throwError } from "rxjs";
import { Department_Status_Service } from "../../../services/Department_Status.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Department_Status } from "../../../models/Department_Status";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from "@angular/material";
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/output_ast";
import { getParseErrors, syntaxError } from "@angular/compiler";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
//import { ConsoleReporter } from 'jasmine';
import { error } from "@angular/compiler/src/util";
import { Sub_Status } from "app/models/Sub_Status";
import { Status_Type } from "app/models/Status_Type";
import { Department } from "app/models/Department";
import { User_Details_Service } from "../../../services/User_Details.Service";
import { Class } from "app/models/Class";
import { Student_Service } from "app/services/Student.Service";
import { Department_Service } from "../../../services/Department.Service";

@Component({
  selector: "app-Department_Status",
  templateUrl: "./Department_Status.component.html",
  styleUrls: ["./Department_Status.component.css"],
})
export class Department_StatusComponent implements OnInit {
  Department_Status_Data: Department_Status[];
  Department_Status_: Department_Status = new Department_Status();
  Department_Status_Name_Search: string;
  Entry_View: boolean = true;
  Sub_Status_View: boolean = true;
  Status_View: boolean = true;
  EditIndex: number;
  Menu_Id: number = 16;
  color = "primary";
  mode = "indeterminate";
  value = 50;
  Total_Entries: Number;
  issLoading: boolean;
  Department_Status_Edit: boolean;
  Department_Status_Save: boolean;
  Department_Status_Delete: boolean;
  array: any;
  myInnerHeight: number;
  myTotalHeight: number;
  Login_User: string = "0";
  Permissions: any;
  Department_Status_Data1: Department_Status[];

  Sub_Status_Data: Sub_Status[];
  Sub_Status_: Sub_Status = new Sub_Status();
  Sub_Status_Search: string;

  // Status_Type_:number=0;
  Automatic_Department_Data: Department[];
  Automatic_Department_Data_Temp: Department = new Department();
  Automatic_Department_: Department = new Department();
  Notification_Department_: Department = new Department();

  Status_Type_: Status_Type = new Status_Type();
  Status_Type_Mode_: Status_Type = new Status_Type();
  Status_Type_Mode_Temp: Status_Type = new Status_Type();
  Status_Type_Mode_Data: Status_Type[];

  Class_: Class = new Class();
  Class_Mode_: Class = new Class();
  Class_Mode_Temp: Class = new Class();
  Class_Data: Class[];

  Status_Followup: number = 1;

  Display_In: number = 1;

  Enable_Registration_Checkbox: boolean = true;
  Enable_Checkbox: number;
  Enable_Transfer_Status: number;
  Email_Template_List: any[] = []; // Array to store email templates
  Selected_Option_Student: string; // Selected option for "Send Student Mail"
  Selected_Option_Staff: string;
  Department_Name_Search: any;
  Department_Data: Department[];
  Selected_Department: string;

  constructor(
    public Department_Status_Service_: Department_Status_Service,
    public Department_Service_: Department_Service,
    public Student_Service_: Student_Service,
    public User_Details_Service_: User_Details_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");

    // this.array=Get_Page_Permission(this.Menu_Id);
    // if(this.array==undefined || this.array==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('/auth/login');
    // }
    // else
    {
      // this.Department_Status_Edit= this.array.Edit;
      // this.Department_Status_Save= this.array.Save;
      // this.Department_Status_Delete= this.array.Delete;
      this.Page_Load();
    }
    this.Fetch_Email_Template_List();
    this.Search_Department();
  }
  Page_Load() {
    this.Get_Menu_Status(16, this.Login_User);
    this.myInnerHeight = window.innerHeight;
    this.myTotalHeight = this.myInnerHeight;
    this.myTotalHeight = this.myTotalHeight - 90;
    this.myInnerHeight = this.myInnerHeight - 230;
    // this.myInnerHeight = (window.innerHeight);
    // this.myInnerHeight = this.myInnerHeight - 250;
    this.Load_StatusType();
    this.Clr_Department_Status();
    this.Search_Department_Status();
    this.Load_Automatic_Departments();
    this.Get_Student_PageLoadData_Dropdowns();

    // this.myInnerHeight = (window.innerHeight);
    // this.myTotalHeight=this.myInnerHeight - 180;
    // this.myTotalHeight=this.myTotalHeight-40;
    // this.myInnerHeight = this.myInnerHeight - 250;

    this.Entry_View = false;
    this.Status_View = true;
    this.Sub_Status_View = true;
  }

  Get_Menu_Status(Menu_id, Login_user_id) {
    this.issLoading = false;
    this.Department_Status_Service_.Get_Menu_Status(
      Menu_id,
      Login_user_id
    ).subscribe(
      (Rows) => {
        if (Rows[0][0] == undefined) {
          if (Menu_id == 16) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (Rows[0][0].View > 0) {
          if (Menu_id == 16) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("Home_Page");
            }

            this.Department_Status_Edit = this.Permissions.Edit;
            this.Department_Status_Save = this.Permissions.Save;
            this.Department_Status_Delete = this.Permissions.Delete;
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

  Create_New_Department_Status() {
    this.Entry_View = true;
    this.Status_View = false;
    this.Sub_Status_View = true;
    this.Clr_Forms();
    this.Clr_Department_Status();

    setTimeout(() => {
      const checkbox = document.getElementById(
        "registrationMandatoryCheckbox"
      ) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = false;
      }
    }, 0);
  }

  Load_Automatic_Departments() {
    this.issLoading = true;
    this.User_Details_Service_.Get_Users_Load_Data().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Automatic_Department_Data = Rows.Profile_Department;

          this.Automatic_Department_Data_Temp.Department_Id = 0;
          this.Automatic_Department_Data_Temp.Department_Name = "Select";
          this.Automatic_Department_Data.unshift(
            this.Automatic_Department_Data_Temp
          );
          this.Notification_Department_ = this.Automatic_Department_Data[0];
          this.Automatic_Department_ = this.Automatic_Department_Data[1];

          // this.Automatic_Department_Data = Rows[0].slice();
          // this.Automatic_Department_Data_Temp.Department_Id = 0;
          // this.Automatic_Department_Data_Temp.Department_Name = "Select";
          // this.Automatic_Department_Data.unshift(Object.assign({}, this.Automatic_Department_Data_Temp));
          // this.Automatic_Department_ = this.Automatic_Department_Data[0];
          // this.Notification_Department_ = this.Automatic_Department_Data[0];
          // this.Notification_Department_ = Object.assign({}, this.Automatic_Department_Data[0])
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Close_Click() {
    this.Entry_View = false;
    this.Status_View = true;
    this.Sub_Status_View = true;
    this.Clr_Sub_Status();
    this.Clr_Department_Status();
    // this.Status_Type_=0;
  }
  trackByFn(index, item) {
    return index;
  }

  Clr_Forms() {
    this.Email_Template_List = [];
    this.Selected_Option_Student = "";
    this.Selected_Option_Staff = "";
    this.Selected_Department = "";
  }

  Clr_Department_Status() {
    this.Department_Status_.Department_Status_Id = 0;
    this.Department_Status_.Department_Status_Name = "";
    this.Department_Status_.Status_Order = 0;
    this.Department_Status_.Editable = false;
    this.Department_Status_.Color = "";
    this.Department_Status_.Transfer_Status = false;
    this.Department_Status_.Notification_Status = false;
    this.Department_Status_.Registration = false;
    this.Department_Status_.Registration_Mandatory = false;
    this.Department_Status_.Update_in_Profile = false;
    this.Department_Status_.FollowUp = true;
    this.Department_Status_.Send_Student_Mail = false;
    this.Department_Status_.Send_Staff_Mail = false;
    this.Department_Status_.Send_BDM_Mail = false;
    this.Department_Status_.Send_Branch_Head_Mail = false;
    this.Department_Status_.Student_Email_Template_Id = 0;
    this.Department_Status_.Student_Email_Template_Name = "";
    this.Department_Status_.Staff_Email_Template_Id = 0;
    this.Department_Status_.Staff_Email_Template_Name = "";
    this.Status_Followup = 1;
    this.Display_In = 0;
    this.Department_Status_.Duration = false;

    if (
      this.Automatic_Department_Data != null &&
      this.Automatic_Department_Data != undefined
    )
      this.Notification_Department_ = this.Automatic_Department_Data[0];

    if (
      this.Automatic_Department_Data != null &&
      this.Automatic_Department_Data != undefined
    )
      this.Automatic_Department_ = this.Automatic_Department_Data[0];

    if (
      this.Status_Type_Mode_Data != null &&
      this.Status_Type_Mode_Data != undefined
    )
      this.Status_Type_ = this.Status_Type_Mode_Data[0];

    if (this.Class_Data != null && this.Class_Data != undefined)
      this.Class_Mode_ = this.Class_Data[0];
    // this.Department_Status_.Status_Type_Id =0;
    // this.Status_Type_ =0;
  }
  show_Loader() { }
  hide_Loader() { }
  Search_Department_Status() {
    this.issLoading = true;

    this.Department_Status_Service_.Search_Department_Status(
      this.Department_Status_Name_Search
    ).subscribe(
      (Rows) => {
        this.Department_Status_Data = Rows[0];
        this.Total_Entries = this.Department_Status_Data.length;

        if (this.Department_Status_Data.length == 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: "3" },
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

  Delete_Department_Status(Department_Status_Id, index) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to delete ?",
        Type: "true",
        Heading: "Confirm",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Department_Status_Service_.Delete_Department_Status(
          Department_Status_Id
        ).subscribe(
          (Delete_status) => {
            if (Number(Delete_status[0][0].Department_Status_Id_) > 0) {
              this.Department_Status_Data.splice(this.EditIndex, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Search_Department_Status();
            } else if (
              Number(Delete_status[0][0].Department_Status_Id_) == -2
            ) {
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

  Search_Department() {
    this.issLoading = true;
    this.Department_Service_.Search_Department(this.Department_Name_Search).subscribe(
      (Rows) => {
        this.issLoading = false;
        console.log("Search_Department Response this is the response for departments:", Rows);

        if (Rows && Rows.length > 0) {
          this.Department_Data = Rows[0].map((item) => ({
            Department_Id: item.Department_Id,
            Department_Name: item.Department_Name,
          }));
        } else {
          this.Department_Data = [];
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: false },
          });
        }

        console.log("Department_Data:", this.Department_Data);
      },
      (error) => {
        this.issLoading = false;
        this.Department_Data = [];
        console.error("Error in Search_Department:", error);
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occurred", Type: "2" },
        });
      }
    );
  }

  Save_Department_Status() {
    // Set Status Type details
    this.Department_Status_.Status_Type_Id = this.Status_Type_.Status_Type_Id;
    this.Department_Status_.Status_Type_Name =
      this.Status_Type_.Status_Type_Name;

    // Map Selected_Department to its corresponding Department_Id
    const selectedDepartment = this.Department_Data.find(
      (department) => department.Department_Name === this.Selected_Department
    );
    if (selectedDepartment) {
      this.Department_Status_.Department_Id = selectedDepartment.Department_Id;
    } else {
      console.error("Department is not selected for saving");
      // const dialogRef = this.dialogBox.open(DialogBox_Component, {
      //     panelClass: "Dialogbox-Class",
      //     data: { Message: "Invalid Department Selected", Type: "3" },
      // });
      // return;
    }
    // console.log("Selected Departmentss:", this.Selected_Department);
    // console.log(
    //   "Selected Department_Id:",
    //   this.Department_Status_.Department_Id
    // );

    // Validate Department Status Name
    if (
      this.Department_Status_.Department_Status_Name == undefined ||
      this.Department_Status_.Department_Status_Name == null ||
      this.Department_Status_.Department_Status_Name.trim() === ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Channel Status", Type: "3" },
      });
      return;
    }

    // Validate Status Order
    // if (
    //   this.Department_Status_.Status_Order == undefined ||
    //   this.Department_Status_.Status_Order == null ||
    //   this.Department_Status_.Status_Order <= 0
    // ) {
    //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Enter Duration", Type: "3" },
    //   });
    //   return;
    // }

    // Validate Transfer Department if Transfer Status is enabled
    // if (this.Department_Status_.Transfer_Status == true) {
    //   if (
    //     this.Automatic_Department_.Department_Id == undefined ||
    //     this.Automatic_Department_.Department_Id == null ||
    //     this.Automatic_Department_.Department_Id == 0
    //   ) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //       panelClass: "Dialogbox-Class",
    //       data: { Message: "Select Transfer Department", Type: "3" },
    //     });
    //     return;
    //   }
    // }

    // Set FollowUp status
    this.Department_Status_.FollowUp = this.Status_Followup == 1;

    // Set Transfer and Notification Department details
    this.Department_Status_.Transfer_Department_Id =
      this.Automatic_Department_.Department_Id;
    this.Department_Status_.Transfer_Department_Name =
      this.Automatic_Department_.Department_Name;

    this.Department_Status_.Notification_Department_Id =
      this.Notification_Department_.Department_Id;
    this.Department_Status_.Notification_Department_Name =
      this.Notification_Department_.Department_Name;

    // Set Display and Class details
    this.Department_Status_.Display_In = this.Display_In;
    this.Department_Status_.Class_Id = this.Class_Mode_.Class_Id;
    this.Department_Status_.Class_Name = this.Class_Mode_.Class_Name;
    this.Department_Status_.Class_Order = this.Class_Mode_.Class_Order;

    // Set Update_in_Profile flag
    if (
      this.Department_Status_.Display_In == 2 ||
      this.Department_Status_.Display_In == 0
    ) {
      this.Department_Status_.Update_in_Profile = true;
    }

    // Log the selected options for debugging
    console.log(
      "Selected Option for Student Mail:",
      this.Selected_Option_Student
    );
    console.log("Selected Option for Staff Mail:", this.Selected_Option_Staff);

    // Add email template details for student mail
    if (this.Selected_Option_Student) {
      const selectedStudentTemplate = this.Email_Template_List.find(
        (template) => template.Option_Name === this.Selected_Option_Student
      );
      if (selectedStudentTemplate) {
        this.Department_Status_.Student_Email_Template_Id =
          selectedStudentTemplate.Option_Id;
        this.Department_Status_.Student_Email_Template_Name =
          selectedStudentTemplate.Option_Name;
        console.log("Selected Student Template:", selectedStudentTemplate);
      } else {
        console.log(
          "No matching student template found for:",
          this.Selected_Option_Student
        );
      }
    } else {
      console.log("No student template selected.");
    }

    // Add email template details for staff mail
    if (this.Selected_Option_Staff) {
      const selectedStaffTemplate = this.Email_Template_List.find(
        (template) => template.Option_Name === this.Selected_Option_Staff
      );
      if (selectedStaffTemplate) {
        this.Department_Status_.Staff_Email_Template_Id =
          selectedStaffTemplate.Option_Id;
        this.Department_Status_.Staff_Email_Template_Name =
          selectedStaffTemplate.Option_Name;
        console.log("Selected Staff Template:", selectedStaffTemplate);
      } else {
        console.log(
          "No matching staff template found for:",
          this.Selected_Option_Staff
        );
      }
    } else {
      console.log("No staff template selected.");
    }

    // Log the final payload for debugging
    console.log("Final Payload to Backend:", this.Department_Status_);

    // Set Send_Mail, Send_Student_Mail, and Send_Staff_Mail flags
    this.Department_Status_.Send_Student_Mail =
      !!this.Department_Status_.Send_Student_Mail;
    this.Department_Status_.Send_Staff_Mail =
      !!this.Department_Status_.Send_Staff_Mail;

    this.Department_Status_.Send_Mail =
      this.Department_Status_.Send_Student_Mail ||
      this.Department_Status_.Send_Staff_Mail ||
      this.Department_Status_.Send_BDM_Mail ||
      this.Department_Status_.Send_Branch_Head_Mail;
    this.issLoading = true;

    // Call the service to save the department status
    this.Department_Status_Service_.Save_Department_Status(
      this.Department_Status_
    ).subscribe(
      (Save_status) => {
        this.issLoading = false;
        Save_status = Save_status[0];
        console.log("Save_status: ", Save_status);
        console.log(
          "Send email checkbox value:",
          this.Department_Status_.Send_Mail
        );

        if (Save_status != undefined) {
          if (Number(Save_status[0].Department_Status_Id_) > 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Saved", Type: "false" },
            });
            document.getElementById("Save_Button").hidden = false;
            this.Search_Department_Status();
          }
        } else {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Error Occurred", Type: "2" },
          });
          document.getElementById("Save_Button").hidden = false;
        }
      },
      (error) => {
        this.issLoading = false;
        console.error("Error during save operation:", error);
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occurred", Type: "2" },
        });
        document.getElementById("Save_Button").hidden = false;
      }
    );
  }

  Edit_Department_Status(Department_Status_e: Department_Status, index) {
    this.Entry_View = true;
    this.Status_View = false;
    this.Sub_Status_View = true;
    this.Department_Status_ = Department_Status_e;
    this.Department_Status_ = Object.assign({}, Department_Status_e);
    console.log("this.Department_Status_: ", this.Department_Status_);

    // Debug log for Department_Id
    console.log("Department_Status_.Department_Id:", this.Department_Status_.Selected_Department_Id);

    //selected department name for the selected department status
    const selectedDepartment = this.Department_Data.find(
      (department) =>
        department.Department_Id === this.Department_Status_.Selected_Department_Id
    );
    console.log("Selected Department from Department_Data:", selectedDepartment);
    if (selectedDepartment) {
      this.Selected_Department = selectedDepartment.Department_Name;
      console.log("Selected_Department set to:", this.Selected_Department);
    } else {
      console.log("No matching department found for Department_Id:", this.Department_Status_.Selected_Department_Id);
    }

    // Debug log for Department_Data
    console.log("Department_Data:", this.Department_Data);

    if (this.Department_Status_.FollowUp == true) {
      this.Status_Followup = 1;
    } else {
      this.Status_Followup = 0;
    }

    if (this.Department_Status_.Display_In == 1) {
      this.Display_In = 1;
    } else if (this.Department_Status_.Display_In == 2) {
      this.Display_In = 2;
    } else this.Display_In = 0;

    this.Department_Status_.FollowUp = true;

    for (var i = 0; i < this.Status_Type_Mode_Data.length; i++) {
      if (
        this.Department_Status_.Status_Type_Id ==
        this.Status_Type_Mode_Data[i].Status_Type_Id
      )
        this.Status_Type_ = this.Status_Type_Mode_Data[i];
    }

    for (var i = 0; i < this.Class_Data.length; i++) {
      if (this.Department_Status_.Class_Id == this.Class_Data[i].Class_Id)
        this.Class_Mode_ = this.Class_Data[i];
    }

    for (var i = 0; i < this.Automatic_Department_Data.length; i++) {
      if (
        this.Department_Status_.Transfer_Department_Id ==
        this.Automatic_Department_Data[i].Department_Id
      )
        this.Automatic_Department_ = this.Automatic_Department_Data[i];
    }

    for (var i = 0; i < this.Automatic_Department_Data.length; i++) {
      if (
        this.Department_Status_.Notification_Department_Id ==
        this.Automatic_Department_Data[i].Department_Id
      )
        this.Notification_Department_ = this.Automatic_Department_Data[i];
    }

    // Set the checkbox states and selected templates for email options
    // For Student Mail
    if (this.Department_Status_.Send_Student_Mail) {
      // Set the checkbox to checked
      this.Department_Status_.Send_Student_Mail = true;

      // Set the selected template if it exists
      if (this.Department_Status_.Student_Email_Template_Name) {
        this.Selected_Option_Student = this.Department_Status_.Student_Email_Template_Name;
        console.log(
          "Loaded Student Email Template:",
          this.Selected_Option_Student
        );
      } else {
        this.Selected_Option_Student = ""; // Reset if no template or checkbox is false
      }
    } else {
      this.Selected_Option_Student = "";
    }

    // For Staff Mail
    if (this.Department_Status_.Send_Staff_Mail) {
      // Set the checkbox to checked
      this.Department_Status_.Send_Staff_Mail = true;

      // Set the selected template if it exists
      if (this.Department_Status_.Staff_Email_Template_Name) {
        this.Selected_Option_Staff =
          this.Department_Status_.Staff_Email_Template_Name;
        console.log("Loaded Staff Email Template:", this.Selected_Option_Staff);
      } else {
        this.Selected_Option_Staff = "";
      }
    }
    if (this.Email_Template_List.length === 0) {
      this.Fetch_Email_Template_List();
    }
    // if(this.Department_Status_.Status_Type_Id==1){this.Status_Type_ =1}
    // if(this.Department_Status_.Status_Type_Id==2){this.Status_Type_ =2}
    // if(this.Department_Status_.Status_Type_Id==0){this.Status_Type_ =0}
  }

  Clr_Sub_Status() {
    this.Sub_Status_.Sub_Status_Id = 0;
    this.Sub_Status_.Sub_Status_Name = "";
    this.Sub_Status_.Duration = 0;
    this.Sub_Status_.FollowUp = "";
  }

  Add_Sub_Status(Department_Status_e: Department_Status, index) {
    this.Entry_View = true;
    this.Status_View = true;
    this.Sub_Status_View = false;
    this.Department_Status_ = Department_Status_e;
    this.Department_Status_ = Object.assign({}, Department_Status_e);
    this.Get_Sub_Status(this.Department_Status_.Department_Status_Id);
  }

  Get_Sub_Status(Department_Status_Id) {
    this.issLoading = true;

    this.Department_Status_Service_.Get_Sub_Status(
      Department_Status_Id
    ).subscribe(
      (Rows) => {
        this.issLoading = false;
        this.Department_Status_Data1 = Rows[0];
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: false },
        });
      }
    );
  }

  // Save_Sub_Status()
  // {

  //     if(this.Sub_Status_.Sub_Status_Name===undefined || this.Sub_Status_.Sub_Status_Name==null || this.Sub_Status_.Sub_Status_Name=="")
  //     {
  //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter Sub Status ',Type: "3" }});
  //     return
  //     }
  //     else if(this.Sub_Status_.FollowUp===undefined || this.Sub_Status_.FollowUp==null || this.Sub_Status_.FollowUp=="")
  //     {
  //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Select Followup',Type: "3" }});
  //     return
  //     }
  //     else if(this.Sub_Status_.Duration===undefined || this.Sub_Status_.Duration==null )
  //     {
  //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter Duration ',Type: "3" }});
  //     return
  //     }

  //      this.issLoading=true;

  //     this.Sub_Status_.Status_Id=this.Department_Status_.Department_Status_Id;

  //     this.Department_Status_Service_.Save_Sub_Status(this.Sub_Status_).subscribe(Save_status => {

  //     Save_status=Save_status[0];
  //     if(Number(Save_status[0].Sub_Status_Id_)>0)
  //     {
  //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
  //     this.Clr_Sub_Status();
  //     this.Get_Sub_Status(this.Department_Status_.Department_Status_Id)
  //     //this.Close_Click();
  //     }
  //     else{
  //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  //     }
  //     this.issLoading=false;
  //     },
  //     Rows => {
  //     this.issLoading=false;
  //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
  //     });
  // }

  Edit_Sub_Status(Sub_Status_e: Sub_Status, index) {
    this.Sub_Status_ = Sub_Status_e;
    this.Sub_Status_ = Object.assign({}, Sub_Status_e);
  }

  Delete_Sub_Status(Sub_Status_Id, index) {
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

        this.Department_Status_Service_.Delete_Sub_Status(
          Sub_Status_Id
        ).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_;
            this.Department_Status_Data1.splice(index, 1);
            if (Delete_status == 1) {
              this.Department_Status_Data1.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Get_Sub_Status(this.Department_Status_.Department_Status_Id);
            } else {
              this.issLoading = false;
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Cannot be Deleted", Type: "2" },
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
  Load_StatusType() {
    this.issLoading = true;
    this.Department_Status_Service_.Load_StatusType().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Status_Type_Mode_Data = Rows[0];
          this.Enable_Checkbox = Rows[1][0].Registration_By;
          this.Enable_Transfer_Status = Rows[1][0].Round_Robin;
          if (this.Enable_Checkbox == 2)
            this.Enable_Registration_Checkbox = true;
          else this.Enable_Registration_Checkbox = false;

          this.Status_Type_Mode_Temp.Status_Type_Id = 0;
          this.Status_Type_Mode_Temp.Status_Type_Name = "Select";
          this.Status_Type_Mode_Data.unshift(this.Status_Type_Mode_Temp);

          this.Status_Type_ = this.Status_Type_Mode_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
      (Rows) => {
        this.Class_Data = Rows[14].slice();
        this.Class_Mode_Temp.Class_Id = 0;
        this.Class_Mode_Temp.Class_Name = "Select";
        this.Class_Data.unshift(Object.assign({}, this.Class_Mode_Temp));
        this.Class_Mode_ = this.Class_Data[0];
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }
  Click_Status(Transfer_Status_e) {
    if (Transfer_Status_e == false) {
      if (
        this.Automatic_Department_Data != null &&
        this.Automatic_Department_Data != undefined
      )
        this.Automatic_Department_ = this.Automatic_Department_Data[0];
    }
  }

  // Handle "Send Student Mail" checkbox change
  onSendStudentMailChange(isChecked: boolean) {
    if (isChecked) {
      this.Fetch_Email_Template_List(); // Fetch email templates when checkbox is checked
    } else {
      this.Email_Template_List = []; // Clear the dropdown when unchecked
      this.Selected_Option_Student = ""; // Reset the selected option
    }
  }

  // Handle "Send Staff Mail" checkbox change
  onSendStaffMailChange(isChecked: boolean) {
    if (isChecked) {
      this.Fetch_Email_Template_List(); // Fetch email templates when checkbox is checked
    }
  }

  // Fetch email template list
  Fetch_Email_Template_List() {
    this.issLoading = true; // Show loader while fetching data

    this.Department_Status_Service_.Get_Email_Template_List().subscribe(
      (response) => {
        console.log("Email Template List (Raw):", response);

        // Extract the first element of the response array and map the data
        if (response && response.length > 0 && Array.isArray(response[0])) {
          this.Email_Template_List = response[0].map((item: any) => ({
            Option_Id: item.id, // Assuming 'id' is the field containing the template ID
            Option_Name: item.name, // Assuming 'name' is the field containing the template name
          }));
        } else {
          this.Email_Template_List = []; // Handle case where data is not in expected format
        }

        console.log(
          "Email Template List (Processed):",
          this.Email_Template_List
        );

        this.issLoading = false; // Hide loader after fetching data
      },
      (error) => {
        console.error("Error fetching email template list:", error);
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: {
            Message: "Error Occurred While Fetching Email Templates",
            Type: "2",
          },
        });
        this.issLoading = false; // Hide loader in case of error
      }
    );
  }


}

