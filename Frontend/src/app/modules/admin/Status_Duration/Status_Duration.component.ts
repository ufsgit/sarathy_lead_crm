import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Department_Service } from '../../../services/Department.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Department } from '../../../models/Department';
import { Department_Status } from '../../../models/Department_Status';
import { DSE } from '../../../models/DSE';
import { User_Details } from '../../../models/User_Details';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Status_Duration_Service } from '../../../services/Status_Duration.Service';
import { Location_Service } from '../../../services/Location.Service';
import { Model } from 'aws-sdk/clients/apigateway';
import { Status_Duration } from '../../../models/Status_Duration';
import { Country_Service } from '../../../services/Country.Service';
import { Student_Service } from '../../../services/Student.Service';
@Component({
  selector: 'app-Status_Duration',
  templateUrl: './Status_Duration.component.html',
  styleUrls: ['./Status_Duration.component.css']
})
export class Status_DurationComponent implements OnInit {

  Status_Duration_Data: Status_Duration[];
  Status_Duration_: Status_Duration = new Status_Duration();
  Duration_Count_Search: string;

  Department_Data: Department[];
  Department_: Department = new Department();
  Department_Temp: Department = new Department();
  Search_Department_: Department = new Department();

  Department_Status_: Department_Status = new Department_Status();
  Department_Status_Temp: Department_Status = new Department_Status();
  Department_Status_Data: Department_Status[];
  Search_Department_Status_: Department_Status = new Department_Status();
  Search_Depaertment_: Department = new Department();

  FollowUp_Department_Status_: Department_Status = new Department_Status();
  FollowUp_Department_Status_1: Department_Status = new Department_Status();
  FollowUp_Department_Status_Task_: Department_Status = new Department_Status();
  Followup_Department_Status_Data: Department_Status[];
  Followup_Department_Status_Data_Filter: Department_Status[];
  Followup_Department_Status_Temp: Department_Status = new Department_Status();

  FollowUp_Department_Temp: Department = new Department();
  Followup_Department_Data: Department[];
  Followup_Department_Data_T: Department[];
  Followup_Department_Data_Check: Department[];
  FollowUp_Department_1: Department = new Department();

  FollowUp_Department_: Department = new Department();

  Entry_View: boolean = true;
  EditIndex: number;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  myInnerHeight: number;
  myTotalHeight: number;
  issLoading: boolean;
  Menu_Id: number = 15;
  array: any;
  Total_Entries: number;
  Status_Duration_Edit: boolean;
  Status_Duration_Save: boolean;
  Status_Duration_Delete: boolean;
  Login_User: string = "0";
  Permissions: any;


  Status_Duration_Id_temp: number;
  constructor(public Status_Duration_Service_: Status_Duration_Service, public Location_Service_: Location_Service, public Student_Service_: Student_Service, public Country_Service_: Country_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }
  ngOnInit() {
    this.Login_User = localStorage.getItem(("Login_User"));

    this.array = Get_Page_Permission(this.Menu_Id);
    // if(this.array==undefined || this.array==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('/auth/login');
    // }
    // else 
    {
      // this.DSE_Edit= this.array.Edit;
      // this.DSE_Save= this.array.Save;
      // this.DSE_Delete= this.array.Delete;

      this.Page_Load()
    }
  }

  Page_Load() {
    this.Get_Menu_Status(163, this.Login_User);

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 210;
    this.Clr_Status_Duration();
    this.Load_DepartmentStatus();
    this.Load_Department();
    this.Search_Status_Duration();


    this.Entry_View = false;

    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight = this.myInnerHeight - 100;
    this.myTotalHeight = this.myTotalHeight - 60;
    this.myInnerHeight = this.myInnerHeight - 230;

  }

  Get_Menu_Status(Menu_id, Login_user_id) {

    this.issLoading = false;
    this.Location_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(Rows => {


      if (Rows[0][0] == undefined) {
        if (Menu_id == 163) {
          localStorage.removeItem('token');
          this.router.navigateByUrl('Home_Page');
        }
      }
      else
        if (Rows[0][0].View > 0) {


          if (Menu_id == 163) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem('token');
              this.router.navigateByUrl('Home_Page');
            }

            this.Status_Duration_Edit = this.Permissions.Edit;
            this.Status_Duration_Save = this.Permissions.Save;
            this.Status_Duration_Delete = this.Permissions.Delete;
          }

        }
    },
      Rows => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
      });
  }

  Create_New() {
    this.Entry_View = true;

    this.Clr_Status_Duration();
  }

  Close_Click() {
    this.Entry_View = false;
  }

  trackByFn(index, item) {
    return index;
  }

  Clr_Status_Duration() {
    this.Status_Duration_.Department_Status_Duration_Id = 0;
    this.Status_Duration_.Duration_Count = 0;
    //this.Entry_View = false;
    // Clear Branch autocomplete
    this.Department_Status_ = null;
    this.Followup_Department_Status_Data_Filter = [];

    // Clear Channel / Department autocomplete
    this.FollowUp_Department_ = null;
    this.Followup_Department_Data_Check = [];

  }

  show_Loader() {
  }

  hide_Loader() {
  }

  Search_Status_Duration() {
    let Status_Id = 0, Department_Id = 0, status_count = 0;
    if (this.Search_Department_Status_ && this.Search_Department_Status_.Department_Status_Id) {
      Status_Id = this.Search_Department_Status_.Department_Status_Id;
    }

    if (this.Search_Depaertment_ && this.Search_Depaertment_.Department_Id) {
      Department_Id = this.Search_Depaertment_.Department_Id;
    }
    if (this.Duration_Count_Search != undefined || this.Duration_Count_Search != null)
      status_count = Number(this.Duration_Count_Search);

    this.issLoading = true;
    this.Status_Duration_Service_.Search_Department_Status_Duration(Department_Id, Status_Id, status_count).subscribe(Rows => {
      this.issLoading = false;
      this.Status_Duration_Data = Rows[0];
      this.Total_Entries = this.Status_Duration_Data.length;
      if (this.Status_Duration_Data.length == 0) {
        const dialogRef = this.dialogBox.open
          (DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No Details Found', Type: "3" } });
      }
      this.issLoading = false;
    },
      Rows => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
      });
  }


  Search_Default_Department_Typeahead(event: any, source: number) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();

    // if (
    //   this.FollowUp_Branch_ == null ||
    //   this.FollowUp_Branch_.Branch_Id == undefined
    // ) {
    //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Select Branch", Type: "3" },
    //   });
    // } else {
    // debugger;
    if (
      this.Followup_Department_Data == undefined ||
      this.Followup_Department_Data.length == 0
    ) {
      this.issLoading = true;
      this.Student_Service_.Search_Default_Department_Typeahead(Value
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            // debugger;
            this.Followup_Department_Data = Rows[0];
            this.Followup_Department_Data_Check = [];
            this.issLoading = false;
            if (source == 1) {
              for (var i = 0; i < this.Followup_Department_Data.length; i++) {
                if (
                  this.Followup_Department_Data[
                    i
                  ].Department_Name.toLowerCase().includes(Value)
                )
                  this.Followup_Department_Data_Check.push(
                    this.Followup_Department_Data[i]
                  );
              }
            } else {
              this.Followup_Department_Data_Check = Rows[0];
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
    } else {
      if (source == 1) {
        this.Followup_Department_Data_Check = [];
        for (var i = 0; i < this.Followup_Department_Data.length; i++) {
          if (
            this.Followup_Department_Data[
              i
            ].Department_Name.toLowerCase().includes(Value)
          )
            this.Followup_Department_Data_Check.push(
              this.Followup_Department_Data[i]
            );
        }
      } else {
        this.Followup_Department_Data_Check = [];
        for (var i = 0; i < this.Followup_Department_Data.length; i++) {
          this.Followup_Department_Data_Check.push(
            this.Followup_Department_Data[i]
          );
        }
      }
    }
    // }
  }

  Search_Department_Status_Typeahead(event: any, source: number) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();
    if (
      this.Followup_Department_Status_Data == undefined ||
      this.Followup_Department_Status_Data.length == 0
    ) {
      this.issLoading = true;

      this.Student_Service_.Search_Department_Status_Typeahead(
        this.FollowUp_Department_.Department_Id,
        Value
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.Followup_Department_Status_Data = Rows[0];
            this.Followup_Department_Status_Data_Filter = [];
            this.issLoading = false;
            if (source == 1) {
              for (var i = 0; i < this.Followup_Department_Status_Data.length; i++) {
                if (
                  this.Followup_Department_Status_Data[
                    i
                  ].Department_Status_Name.toLowerCase().includes(Value)
                )
                  this.Followup_Department_Status_Data_Filter.push(
                    this.Followup_Department_Status_Data[i]
                  );
              }
            } else {
              this.Followup_Department_Status_Data_Filter = Rows[0];
            }
          }
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    } else {
      if (source == 1) {
        this.Followup_Department_Status_Data_Filter = [];
        for (var i = 0; i < this.Followup_Department_Status_Data.length; i++) {
          if (
            this.Followup_Department_Status_Data[
              i
            ].Department_Status_Name.toLowerCase().includes(Value)
          )
            this.Followup_Department_Status_Data_Filter.push(this.Followup_Department_Status_Data[i]);
        }
      } else {
        this.Followup_Department_Status_Data_Filter = [];
        for (var i = 0; i < this.Followup_Department_Status_Data.length; i++) {
          this.Followup_Department_Status_Data_Filter.push(this.Followup_Department_Status_Data[i]);
        }
      }
    }
    //}
  }

  display_Followup_Status(Status_t: Department_Status) {
    if (Status_t) {
      return Status_t.Department_Status_Name;
    }
  }

  display_Department(Department_: Department) {
    if (Department_) {
      return Department_.Department_Name;
    }
  }

  Delete_Status_Duration(Status_Duration_, index) {
    const dialogRef = this.dialogBox.open
      (DialogBox_Component, {
        panelClass: 'Dialogbox-Class'
        , data: { Message: 'Do you want to delete ?', Type: "true", Heading: 'Confirm' }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'Yes') {
        this.issLoading = true;
        this.Status_Duration_Service_.Delete_Department_Status_Duration(this.Status_Duration_.Department_Status_Duration_Id).subscribe(Delete_status => {
          //log(Delete_status)
          // debugger
          if (Number(Delete_status[0][0].Department_Status_Duration_Id_) > 0) {
            this.Status_Duration_Data.splice(this.EditIndex, 1);
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Deleted', Type: "false" } });
            this.Entry_View = false
            this.Search_Status_Duration()
          }
          else if (Number(Delete_status[0][0].Department_Status_Duration_Id_) == -2) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Already in Use, Cannot be Deleted!', Type: "2" } });
          } else {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
          }
          this.issLoading = false;
        },
          Rows => {
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
          });

      }
    });
  }

  Save_Status_Duration() {
    if (this.Status_Duration_.Duration_Count == undefined || this.Status_Duration_.Duration_Count == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter The Duration Count', Type: "3" } });
    }

    else {
      document.getElementById("Save_Button").hidden = true;
      this.issLoading = true;
      this.Status_Duration_.Department_Status_Id = this.Department_Status_.Department_Status_Id;
      this.Status_Duration_.Department_Status_Name = this.Department_Status_.Department_Status_Name;
      this.Status_Duration_.Department_Id = this.FollowUp_Department_.Department_Id;
      this.Status_Duration_.Department_Name = this.FollowUp_Department_.Department_Name;
      // debugger

      this.Status_Duration_Service_.Save_Department_Status_Duration(this.Status_Duration_).subscribe(Save_status => {
        // debugger
        console.log(Save_status, 'Save_status')
        if (Number(Save_status[0][0].Department_Status_Duration_Id_) > 0) {

          const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
          document.getElementById("Save_Button").hidden = false;
          this.Clr_Status_Duration();
          this.Search_Status_Duration();
        }
        else {
          const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
          document.getElementById("Save_Button").hidden = false;
        }
        this.issLoading = false;
      },
        Rows => {
          this.issLoading = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
          document.getElementById("Save_Button").hidden = false;
        });

    }
  }

  Edit_Status_Duration(Status_Duration_e: Status_Duration, index) {
    this.Entry_View = true;
    this.Status_Duration_Id_temp = Status_Duration_e.Department_Status_Duration_Id;
    this.Status_Duration_ = Object.assign({}, Status_Duration_e);
    this.Status_Duration_.Duration_Count = Status_Duration_e.Duration_Count;

    this.Department_Status_Temp.Department_Status_Id = Status_Duration_e.Department_Status_Id;
    this.Department_Status_Temp.Department_Status_Name = Status_Duration_e.Department_Status_Name;
    this.Department_Status_ = Object.assign({}, this.Department_Status_Temp);

    this.FollowUp_Department_Temp.Department_Id = Status_Duration_e.Department_Id;
    this.FollowUp_Department_Temp.Department_Name = Status_Duration_e.Department_Name;
    this.FollowUp_Department_ = Object.assign({}, this.FollowUp_Department_Temp);
  }

  Load_DepartmentStatus() {
    this.issLoading = true;
    // debugger
    this.Location_Service_.Load_DepartmentStatus().subscribe(
      (Rows) => {
        // debugger
        if (Rows != null) {
          // debugger
          this.Department_Status_Data = Rows[0];
          this.Department_Status_Temp.Department_Status_Id = 0;
          this.Department_Status_Temp.Department_Status_Name = "All";
          this.Department_Status_Data.unshift(this.Department_Status_Temp);
          this.Department_Status_ = Object.assign({}, this.Department_Status_Temp);
          this.Department_Status_ = this.Department_Status_Data[0];
          this.Search_Department_Status_ = this.Department_Status_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Load_Department() {
    this.issLoading = true;
    // debugger
    this.Location_Service_.Load_Department().subscribe(
      (Rows) => {
        // debugger

        if (Rows != null) {
          // debugger

          this.Department_Data = Rows[0];
          this.Department_Temp.Department_Id = 0;
          this.Department_Temp.Department_Name = "All";
          this.Department_Data.unshift(this.Department_Temp);
          this.Department_ = Object.assign({}, this.Department_Temp);
          this.Department_ = this.Department_Data[0];
          this.Search_Depaertment_ = this.Department_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  //   Search_DefultUser_Typeahead1(event: any) {
  // 	
  // 	var Value = "";
  // 	if (event.target.value == "") Value = undefined;
  // 	else Value = event.target.value;


  // 		if (
  // 			this.DefaultUsers_Data == undefined ||
  // 			this.DefaultUsers_Data.length == 0
  // 		) {
  // 			this.issLoading = true;
  // 			
  // 			this.Department_Service_.Search_DefultUser_Typeahead().subscribe(
  // 				(Rows) => {
  // 					if (Rows != null) {
  // 							
  // 						this.DefaultUsers_Data = Rows[0];
  // 						this.issLoading = false;
  // 					}
  // 				},
  // 				(Rows) => {
  // 					this.issLoading = false;
  // 				}
  // 			);
  // 		}

  // }






  // Search_DefultUser_Typeahead(event: any) {
  //     var Value = "";
  //     
  //     if (event.target.value == "") Value = "";
  //     else Value = event.target.value.toLowerCase();
  //     if (
  //         this.DefaultUsers_Data == undefined ||
  //         this.DefaultUsers_Data.length == 0
  //     ) 

  //     {


  //         this.issLoading = true;
  // 
  //         this.Department_Service_.Search_DefultUser_Typeahead(
  //             this.DSE_Id_temp

  //         ).subscribe(
  //             (Rows) => {
  //                 
  //                 if (Rows != null) {
  //                     this.DefaultUsers_Data = Rows[0];
  //                     this.issLoading = false;
  //                     this.DefaultUsers_Data_Filter = [];
  //                     for (var i = 0; i < this.DefaultUsers_Data.length; i++) {
  //                         if (
  //                             this.DefaultUsers_Data[i].User_Details_Name.toLowerCase().includes(
  //                                 Value
  //                             )
  //                         )
  //                             this.DefaultUsers_Data_Filter.push(this.DefaultUsers_Data[i]);
  //                     }
  //                 }
  //             },
  //             (Rows) => {
  //                 this.issLoading = false;
  //             }
  //         );
  //     } 

  //     else {
  //         this.DefaultUsers_Data_Filter = [];
  //         for (var i = 0; i < this.DefaultUsers_Data.length; i++) {
  //             if (
  //                 this.DefaultUsers_Data[i].User_Details_Name.toLowerCase().includes(Value)
  //             )
  //                 this.DefaultUsers_Data_Filter.push(this.DefaultUsers_Data[i]);
  //         }
  //     }
  // }

  display_Defultusers(defaultuser: User_Details) {

    if (defaultuser) {

      return defaultuser.User_Details_Name;
    }
  }

}

