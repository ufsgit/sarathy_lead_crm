import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Department_Service } from '../../../services/Department.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Department } from '../../../models/Department';
import { Branch } from '../../../models/Branch';
import { User_Target } from '../../../models/User_Target';
import { user_month } from '../../../models/user_month';
import { User_Details } from '../../../models/User_Details';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { User_Target_Service } from '../../../services/User_Target.Service';
import { Model } from 'aws-sdk/clients/apigateway';
import { Country_Service } from '../../../services/Country.Service';
import { Student_Service } from '../../../services/Student.Service';
@Component({
  selector: 'app-User_Target',
  templateUrl: './User_Target.component.html',
  styleUrls: ['./User_Target.component.css']
})
export class User_TargetComponent implements OnInit {
  User_Target_Data: User_Target[];
  User_Target_: User_Target = new User_Target();
  User_Taget_No_Search: Number;

  User_Month_: user_month = new user_month();
  Search_User_Month_: user_month = new user_month();
  user_month_Temp_: user_month = new user_month();
  user_month_Data: user_month[];

  User_Details_: User_Details = new User_Details();
  User_Details_Data: User_Details[];
  User_Details_Temp: User_Details = new User_Details();
  Search_User_Details_: User_Details = new User_Details();

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
  User_Target_Id_temp: number;

  constructor(public User_Target_Service_: User_Target_Service, public Student_Service_: Student_Service, public Country_Service_: Country_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }
  ngOnInit() {
    this.Login_User = localStorage.getItem(("Login_User"));
    //this.array = Get_Page_Permission(this.Menu_Id);
    // debugger;
    this.Page_Load();
    // debugger;  
  }

  Page_Load() {
    this.Get_Menu_Status(166, this.Login_User);
    this.myInnerHeight = (window.innerHeight);
    this.myInnerHeight = this.myInnerHeight - 210;
    this.Clr_User_Target();
    this.Load_User_Month();
    this.Load_User_Details();
    this.Search_User_Target();
    this.Entry_View = false;
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight = this.myInnerHeight - 100;
    this.myTotalHeight = this.myTotalHeight - 60;
    this.myInnerHeight = this.myInnerHeight - 230;
  }

  Get_Menu_Status(Menu_id, Login_user_id) {
    this.issLoading = false;
    this.User_Target_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(Rows => {
      if (Rows[0][0] == undefined) {
        if (Menu_id == 166) {
          localStorage.removeItem('token');
          this.router.navigateByUrl('Home_Page');
        }
      }
      else
        if (Rows[0][0].View > 0) {
          if (Menu_id == 166) {
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

    this.Clr_User_Target();
  }

  Close_Click() {
    this.Entry_View = false;
  }

  trackByFn(index, item) {
    return index;
  }

  Clr_User_Target() {
    this.User_Target_.User_Target_Id = 0;
    this.User_Target_.User_Taget_No = "";
    this.User_Target_.User_Target_Year = "";
    if (this.user_month_Data != null && this.user_month_Data != undefined)
      this.User_Month_ = this.user_month_Data[0];
    if (this.User_Details_Data != null && this.User_Details_Data != undefined)
      this.User_Details_ = this.User_Details_Data[0];
    // this.user_month_Data = null;
    // this.User_Details_Data=null;
  }

  show_Loader() {
  }

  hide_Loader() {
  }

  Search_User_Target() {
    // debugger;
    let user_month_Id = 0, User_Id = 0;
    if (this.Search_User_Month_ && this.Search_User_Month_.User_Month_Id) {
      user_month_Id = this.Search_User_Month_.User_Month_Id;
    }

    if (this.Search_User_Details_ && this.Search_User_Details_.User_Details_Id) {
      User_Id = this.Search_User_Details_.User_Details_Id;
    }

    // debugger;
    this.issLoading = true;
    this.User_Target_Service_.Search_User_Target(this.User_Taget_No_Search, user_month_Id, User_Id).subscribe(Rows => {
      // debugger;
      this.issLoading = false;
      this.User_Target_Data = Rows[0];
      this.Total_Entries = this.User_Target_Data.length;
      if (this.User_Target_Data.length == 0) {
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

  Delete_User_Target(User_Target_, index) {
    const dialogRef = this.dialogBox.open
      (DialogBox_Component, {
        panelClass: 'Dialogbox-Class'
        , data: { Message: 'Do you want to delete ?', Type: "true", Heading: 'Confirm' }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'Yes') {
        this.issLoading = true;
        this.User_Target_Service_.Delete_User_Target(User_Target_.User_Target_Id).subscribe(Delete_status => {
          //log(Delete_status)
          // debugger
          if (Number(Delete_status[0][0].User_Target_Id_) > 0) {
            this.User_Target_Data.splice(this.EditIndex, 1);
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Deleted', Type: "false" } });
            this.Entry_View = false
            this.Save_User_Target()
          }
          else if (Number(Delete_status[0][0].User_Target_Id_) == -2) {
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

  Save_User_Target() {

    if (this.User_Target_.User_Taget_No == undefined || this.User_Target_.User_Taget_No == null || this.User_Target_.User_Taget_No == "") {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter The Target No', Type: "3" } });
    }

    if (this.user_month_Data == null || this.user_month_Data == undefined) {
      if (this.User_Month_.User_Month_Id == null || this.User_Month_.User_Month_Id == undefined) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Selecty Target Month', Type: "3" } });
      }
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Target Month', Type: "3" } });
    }

    if (this.User_Details_Data == null || this.User_Details_Data == undefined) {
      if (this.User_Details_.User_Details_Id == null || this.User_Details_.User_Details_Id == undefined) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Name', Type: "3" } });
      }
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Name', Type: "3" } });
    }

    if (this.User_Target_.User_Target_Year == undefined || this.User_Target_.User_Target_Year == null || this.User_Target_.User_Target_Year == "") {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter The Target Year', Type: "3" } });
    }
    else {
      document.getElementById("Save_Button").hidden = true;
      this.issLoading = true;
      this.User_Target_.User_Month_Id = this.User_Month_.User_Month_Id;
      this.User_Target_.User_Month_Name = this.User_Month_.User_Month_Name;
      this.User_Target_.User_Id = this.User_Details_.User_Details_Id;
      this.User_Target_.User_Name = this.User_Details_.User_Details_Name;
      // debugger

      this.User_Target_Service_.Save_User_Target(this.User_Target_).subscribe(Save_status => {
        // debugger
        console.log(Save_status, 'Save_status')
        if (Number(Save_status[0][0].User_Target_Id_) > 0) {

          const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
          document.getElementById("Save_Button").hidden = false;
          this.Clr_User_Target();
          this.Search_User_Target();
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

  Edit_User_Target(Location_e: User_Target, index) {
    this.Entry_View = true;
    this.User_Target_Id_temp = Location_e.User_Target_Id;
    this.User_Target_ = Object.assign({}, Location_e);

    this.User_Target_.User_Taget_No = Location_e.User_Taget_No;
    this.User_Target_.User_Target_Year = Location_e.User_Target_Year;

    for (var j = 0; j < this.user_month_Data.length; j++)
      if (this.User_Target_.User_Month_Id == this.user_month_Data[j].User_Month_Id)
        this.User_Month_ = this.user_month_Data[j];

    for (var i = 0; i < this.User_Details_Data.length; i++)
      if (this.User_Target_.User_Id == this.User_Details_Data[i].User_Details_Id)
        this.User_Details_ = this.User_Details_Data[i];

  }


  Load_User_Month() {
    this.issLoading = true;
    // debugger
    this.User_Target_Service_.Load_User_Month().subscribe(
      (Rows) => {
        // debugger
        if (Rows != null) {
          // debugger
          this.user_month_Data = Rows[0].slice();
          this.user_month_Temp_.User_Month_Id = 0;
          this.user_month_Temp_.User_Month_Name = "Select";
          this.user_month_Data.unshift(this.user_month_Temp_);
          this.User_Month_ = Object.assign({}, this.user_month_Temp_);
          this.User_Month_ = this.user_month_Data[0];
          this.Search_User_Month_ = this.user_month_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Load_User_Details() {
    this.issLoading = true;
    // debugger
    this.User_Target_Service_.Load_User_Details().subscribe(
      (Rows) => {
        // debugger
        if (Rows != null) {
          // debugger
          this.User_Details_Data = Rows[0].slice();
          this.User_Details_Temp.User_Details_Id = 0;
          this.User_Details_Temp.User_Details_Name = "Select";
          this.User_Details_Data.unshift(this.User_Details_Temp);
          this.User_Details_ = this.User_Details_Data[0];
          this.Search_User_Details_ = this.User_Details_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

}
