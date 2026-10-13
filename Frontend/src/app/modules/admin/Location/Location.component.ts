import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';

import { Department_Service } from '../../../services/Department.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Department } from '../../../models/Department';
import { Branch } from '../../../models/Branch';
import { DSE } from '../../../models/DSE';
import { User_Details } from '../../../models/User_Details';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Location_Service } from '../../../services/Location.Service';
import { Model } from 'aws-sdk/clients/apigateway';
import { Location } from '../../../models/Location';
import { Country_Service } from '../../../services/Country.Service';
import { Student_Service } from '../../../services/Student.Service';
@Component({
  selector: 'app-Location',
  templateUrl: './Location.component.html',
  styleUrls: ['./Location.component.css']
})
export class LocationComponent implements OnInit {
  Location_Data: Location[];
  Location_: Location = new Location();
  Location_Name_Search: string;

  Department_Data: Department[];
  Department_: Department = new Department();
  Department_Temp: Department = new Department();
  Search_Department_: Department = new Department();

  Branch_: Branch = new Branch();
  Branch_Temp: Branch = new Branch();
  Branch_Data: Branch[];
  Search_Barnch_: Branch = new Branch();
  Search_Depaertment_: Department = new Department();

  FollowUp_Branch_: Branch = new Branch();
  FollowUp_Branch_1: Branch = new Branch();
  FollowUp_Branch_Task_: Branch = new Branch();
  Followup_Branch_Data: Branch[];
  Followup_Branch_Data_Filter: Branch[];
  Followup_Branch_Temp: Branch = new Branch();

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
  Location_Edit: boolean;
  Location_Save: boolean;
  Location_Delete: boolean;
  Login_User: string = "0";
  Permissions: any;


  Location_Id_temp: number;
  constructor(public Location_Service_: Location_Service, public Student_Service_: Student_Service, public Country_Service_: Country_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }
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
    this.Get_Menu_Status(161, this.Login_User);

    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 210;
    this.Clr_Location();
    this.Load_Branch();
    this.Load_Department();
    this.Search_Location();


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
        if (Menu_id == 161) {
          localStorage.removeItem('token');
          this.router.navigateByUrl('Home_Page');
        }
      }
      else
        if (Rows[0][0].View > 0) {


          if (Menu_id == 161) {
            this.Permissions = Rows[0][0];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem('token');
              this.router.navigateByUrl('Home_Page');
            }

            this.Location_Edit = this.Permissions.Edit;
            this.Location_Save = this.Permissions.Save;
            this.Location_Delete = this.Permissions.Delete;
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

    this.Clr_Location();
  }

  Close_Click() {
    this.Entry_View = false;
  }

  trackByFn(index, item) {
    return index;
  }

  Clr_Location() {
    this.Location_.Location_Id = 0;
    this.Location_.Location_Name = "";

    // Clear Branch autocomplete
    this.FollowUp_Branch_ = null;
    this.Followup_Branch_Data_Filter = [];

    // Clear Channel / Department autocomplete
    this.FollowUp_Department_ = null;
    this.Followup_Department_Data_Check = [];

  }
  show_Loader() {
  }
  hide_Loader() {
  }
  Search_Location() {
    let Barcnh_Id = 0, Department_Id = 0;
    if (this.Search_Barnch_ && this.Search_Barnch_.Branch_Id) {
      Barcnh_Id = this.Search_Barnch_.Branch_Id;
    }

    if (this.Search_Depaertment_ && this.Search_Depaertment_.Department_Id) {
      Department_Id = this.Search_Depaertment_.Department_Id;
    }
    console.log(this.Location_Name_Search, Barcnh_Id, Department_Id);
    this.issLoading = true;
    this.Location_Service_.Search_Location(this.Location_Name_Search, Barcnh_Id, Department_Id).subscribe(Rows => {
      this.issLoading = false;
      this.Location_Data = Rows[0];
      this.Total_Entries = this.Location_Data.length;
      if (this.Location_Data.length == 0) {
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

  Search_Branch_Typeahead(event: any, source: number) {

    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    if (
      this.Followup_Branch_Data == undefined ||
      this.Followup_Branch_Data.length == 0
    ) {
      this.issLoading = true;
      this.Student_Service_.Search_Branch_Typeahead("").subscribe(
        (Rows) => {
          if (Rows != null) {
            this.Followup_Branch_Data = Rows[0];
            this.Followup_Branch_Data_Filter = [];
            if (source == 1) {
              for (var i = 0; i < this.Followup_Branch_Data.length; i++) {
                if (
                  this.Followup_Branch_Data[
                    i
                  ].Branch_Name.toLowerCase().includes(Value)
                )
                  this.Followup_Branch_Data_Filter.push(
                    this.Followup_Branch_Data[i]
                  );
              }
            } else {
              this.Followup_Branch_Data_Filter = Rows[0];
            }

            this.issLoading = false;
          }
        },
        (Rows) => {
          this.issLoading = false;
          // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        }
      );
    } else {
      if (source == 1) {
        this.Followup_Branch_Data_Filter = [];
        for (var i = 0; i < this.Followup_Branch_Data.length; i++) {
          if (
            this.Followup_Branch_Data[i].Branch_Name.toLowerCase().includes(
              Value
            )
          )
            this.Followup_Branch_Data_Filter.push(this.Followup_Branch_Data[i]);
        }
      } else {
        this.Followup_Branch_Data_Filter = [];
        for (var i = 0; i < this.Followup_Branch_Data.length; i++) {
          this.Followup_Branch_Data_Filter.push(this.Followup_Branch_Data[i]);
        }
      }
    }
    // }
  }
  display_Branch(Branch_: Branch) {
    if (Branch_) {
      return Branch_.Branch_Name;
    }
  }

  Branch_Change(Branch_T: Branch) {
    this.FollowUp_Department_Temp.Department_Id =
      Branch_T.Default_Department_Id;
    this.FollowUp_Department_Temp.Department_Name =
      Branch_T.Default_Department_Name;
    this.FollowUp_Department_ = Object.assign(
      {},
      this.FollowUp_Department_Temp
    );

    this.FollowUp_Department_1 = Object.assign(
      {},
      this.FollowUp_Department_Temp
    );

    this.FollowUp_Department_ = null;
    this.Followup_Department_Data = [];
    this.Followup_Department_Data_Check = [];
    //this.Department_Change();
  }

  Search_Branch_Department_Typeahead(event: any, source: number) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();

    if (
      this.FollowUp_Branch_ == null ||
      this.FollowUp_Branch_.Branch_Id == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Branch", Type: "3" },
      });
    } else {
      // debugger;
      if (
        this.Followup_Department_Data == undefined ||
        this.Followup_Department_Data.length == 0
      ) {
        this.issLoading = true;
        this.Student_Service_.Search_Branch_Department_Typeahead(
          this.FollowUp_Branch_.Branch_Id, Value
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
    }
  }
  display_Department(Department_: Department) {
    if (Department_) {
      return Department_.Department_Name;
    }
  }
  Delete_Location(Location_, index) {
    const dialogRef = this.dialogBox.open
      (DialogBox_Component, {
        panelClass: 'Dialogbox-Class'
        , data: { Message: 'Do you want to delete ?', Type: "true", Heading: 'Confirm' }
      });
    console.log('Location_', Location_);

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'Yes') {
        this.issLoading = true;
        this.Location_Service_.Delete_Location(Location_.Location_Id).subscribe(Delete_status => {
          //log(Delete_status)
          // debugger
          if (Number(Delete_status[0][0].Location_Id_) > 0) {
            this.Location_Data.splice(this.EditIndex, 1);
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Deleted', Type: "false" } });
            this.Entry_View = false
            this.Search_Location()
          }
          else if (Number(Delete_status[0][0].Location_Id_) == -2) {
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
  Save_Location() {



    if (this.Location_.Location_Name == undefined || this.Location_.Location_Name == null || this.Location_.Location_Name == "") {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter The Location Name', Type: "3" } });
    }

    else {
      document.getElementById("Save_Button").hidden = true;
      this.issLoading = true;
      this.Location_.Branch_Id = this.FollowUp_Branch_.Branch_Id;
      this.Location_.Branch_Name = this.FollowUp_Branch_.Branch_Name;
      this.Location_.Department_Id = this.FollowUp_Department_.Department_Id;
      this.Location_.Department_Name = this.FollowUp_Department_.Department_Name;
      // debugger
      console.log(this.Location_, 'this.Location_')
      console.log(this.Location_.Branch_Id, 'this.FollowUp_Branch_')
      console.log(this.Location_.Department_Id, 'this.FollowUp_Department_')

      this.Location_Service_.Save_Location(this.Location_).subscribe(Save_status => {
        // debugger
        console.log(Save_status, 'Save_status')
        if (Number(Save_status[0][0].Location_Id_) > 0) {

          const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
          document.getElementById("Save_Button").hidden = false;
          this.Clr_Location();
          this.Search_Location();
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
  Edit_Location(Location_e: Location, index) {
    this.Entry_View = true;
    this.Location_Id_temp = Location_e.Location_Id;
    this.Location_ = Object.assign({}, Location_e);
    this.Location_.Location_Name = Location_e.Location_Name;

    this.Followup_Branch_Temp.Branch_Id = Location_e.Branch_Id;
    this.Followup_Branch_Temp.Branch_Name = Location_e.Branch_Name;
    this.FollowUp_Branch_ = Object.assign({}, this.Followup_Branch_Temp);

    this.FollowUp_Department_Temp.Department_Id = Location_e.Department_Id;
    this.FollowUp_Department_Temp.Department_Name = Location_e.Department_Name;
    this.FollowUp_Department_ = Object.assign({}, this.FollowUp_Department_Temp);

  }



  Load_Branch() {
    this.issLoading = true;
    // debugger
    this.Location_Service_.Load_Branch().subscribe(
      (Rows) => {
        // debugger
        console.log(Rows, 'Rowsbranch');

        if (Rows != null) {
          // debugger
          this.Branch_Data = Rows[0].slice();
          this.Branch_Temp.Branch_Id = 0;
          this.Branch_Temp.Branch_Name = "All";
          this.Branch_Data.unshift(this.Branch_Temp);
          this.Branch_ = Object.assign({}, this.Branch_Temp);
          this.Branch_ = this.Branch_Data[0];
          this.Search_Barnch_ = this.Branch_Data[0];
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
        console.log(Rows, 'Rows');

        if (Rows != null) {
          // debugger

          this.Department_Data = Rows[0].slice();
          this.Department_Temp.Department_Id = 0;
          this.Department_Temp.Department_Name = "All";
          this.Department_Data.unshift(this.Department_Temp);
          this.Department_ = Object.assign({}, this.Department_Temp);
          this.Department_ = this.Department_Data[0];
          this.Search_Department_ = this.Department_Data[0];
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

