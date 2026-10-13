import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User_Details_Service } from '../../../services/User_Details.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { User_Details } from '../../../models/User_Details';
import { User_Menu_Selection } from '../../../models/User_Menu_Selection';
import { User_Type } from '../../../models/User_Type';
import { User_Status } from '../../../models/User_Status';
import { User_Department } from '../../../models/User_Department';
import { Branch } from '../../../models/Branch';
import { User_Role } from '../../../models/User_Role';
import { ApplicationStatus } from '../../../models/ApplicationStatus';
import { Application_Group } from '../../../models/Application_Group';
import { MatDialog } from '@angular/material'; import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { Department } from '../../../models/Department';
import { Location } from '../../../models/Location';
import * as io from "socket.io-client";
import { environment } from "../../../../environments/environment.js";
import { Country } from '../../../models/Country';
import { Course } from '../../../models/Course';
@Component({
    selector: 'app-User_Details',
    templateUrl: './User_Details.component.html',
    styleUrls: ['./User_Details.component.css']
})
export class User_DetailsComponent implements OnInit {
    User_Details_Data: User_Details[]
    Search_User_Name_: string;
    url = environment.NotificationPath;//'http://regnewapi.trackbox.co.in:3646/'
    private socket;

    Search_Branch_: Branch = new Branch();

    User_Menu_Selection_Data_Temp: User_Menu_Selection[] = [];
    User_Menu_Selection_Data: User_Menu_Selection[]
    User_Menu_Selection_: User_Menu_Selection = new User_Menu_Selection();
    User_Details_: User_Details = new User_Details();
    User_Type_: User_Type = new User_Type();
    User_Type_Temp: User_Type = new User_Type();
    User_Type_Data: User_Type[]
    User_Id: number = 0;
    User_Details_Name_Search: string;

    User_Role_Temp: User_Role = new User_Role();
    User_Role_Data: User_Role[];
    User_Role_: User_Role = new User_Role();

    Department_Selection_Data_Temp: User_Department[] = [];

    User_Department_: User_Department = new User_Department();
    User_Department_Temp: User_Department = new User_Department();
    User_Department_Data: User_Department[];

    User_Profile_Department_: Department = new Department();
    Search_User_Profile_Department_: Department = new Department();
    User_Profile_Department_Temp: Department = new Department();
    User_Profile_Department_Data: Department[];
    Department_Data: Department[];
    AlltimeDepts_Temp: Department[];
    Department_Temp: Department = new Department();

    User_Profile_Location_: Location = new Location();
    User_Profile_Location_Data: Location[];
    User_Profile_Location_Temp_: Location = new Location();

    User_Status_Data: User_Status[]
    User_Status_Temp: User_Status = new User_Status();
    User_Status_: User_Status = new User_Status();
    Search_User_Status_: User_Status = new User_Status();
    Branch_Data: Branch[]
    Branch_: Branch = new Branch();

    Backup_User_: User_Details = new User_Details;
    Backup_User_Temp: User_Details = new User_Details;
    Backup_User_Data: User_Details[];
    Backup_User_Data_Filter: User_Details[]
    User_Profile_Location_Data_Check: Location[] = [];

    Entry_View: boolean = true;
    subusers_view: boolean = false;
    myInnerHeight: number;
    myTotalHeight: number;
    EditIndex: number;
    Total_Entries: number = 0;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    issLoading: boolean;
    Permissions: any;

    // Registration_Target:number;
    // FollowUp_Target:number

    User_Details_Edit: boolean;
    Select_View: boolean = false;
    Select_View_Department: boolean = false;

    Select_All_timeView_Department: boolean = false;
    Select_User_Country: boolean = false;
    Select_User_Course: boolean = false;


    Select_View_All_Department: boolean = false;
    Select_Transfer_All_Department: boolean = false
    Select_Save: boolean = false;
    Select_Edit: boolean = false;
    Select_Delete: boolean = false;
    User_Details_Save: boolean;
    User_Details_Delete: boolean;

    View_Password: string;
    Branch_Temp: Branch = new Branch();

    Login_User: string = "0";

    Application_Status_: ApplicationStatus = new ApplicationStatus()

    Application_Status_Temp: ApplicationStatus = new ApplicationStatus();
    Application_Status_Data: ApplicationStatus[];

    Application_Status_Data_Temp: ApplicationStatus[];

    Default_Application_Status_Data: ApplicationStatus[];
    Default_Application_Status_Temp: ApplicationStatus = new ApplicationStatus();
    Default_Application_Status_: ApplicationStatus = new ApplicationStatus()

    Application_Group_: Application_Group = new Application_Group()
    Application_Group_Temp: Application_Group = new Application_Group();
    Application_Group_Data: Application_Group[];
    Application_Group_Data_Temp: Application_Group[];
    Application_View: Boolean = false;
    All_time_view: Boolean = false;
    Lead_Assigned: Boolean = false;
    User_Details_Id_temp_: number;
    tab_view: boolean = true;
    profile_View: boolean = true;
    Application_Tab_View: boolean = false;
    Select_View_Application_Group: boolean = false;
    Select_View_Application_Status: boolean = false;
    Enable_Call_Button: boolean = true;
    Enable_Call: number;

    /** Added on 03-12-2024 */

    Country_: Country = new Country();
    Country_Temp: Country = new Country();
    Country_Data: Country[];

    Course_: Course = new Course();
    Course_Temp: Course = new Course();
    Course_Data: Course[];

    User_Country_Temp: Country[];
    User_Course_Temp: Course[];


    constructor(public User_Details_Service_: User_Details_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) {
        this.socket = io(this.url, { transports: ["websocket"] });
        this.socket = io(this.url);
    }
    ngOnInit() {
        this.Login_User = localStorage.getItem(("Login_User"));

        this.Permissions = Get_Page_Permission(1);
        if (this.Permissions == undefined || this.Permissions == null) {
            localStorage.removeItem('token');
            this.router.navigateByUrl('Home_Page');
        }
        else {
            this.User_Details_Edit = this.Permissions.Edit;
            this.User_Details_Save = this.Permissions.Save;
            this.User_Details_Delete = this.Permissions.Delete;
            this.Page_Load()

        }
    }
    Page_Load() {

        this.myInnerHeight = (window.innerHeight);
        // this.myInnerHeight = this.myInnerHeight - 200;   
        this.myInnerHeight = this.myInnerHeight - 230;
        this.Search_User_Role();
        this.Load_Dropdowns();
        this.Load_Country();
        this.Load_Course();
        this.Search_User_Details();
        this.Entry_View = false;
        this.subusers_view = false;
        this.Get_Menu_Status(1, this.Login_User);
        // this.myInnerHeight = (window.innerHeight);
        // this.myTotalHeight=this.myInnerHeight - 100;
        // this.myTotalHeight=this.myTotalHeight-0;
        // this.myInnerHeight = this.myInnerHeight - 250;   

        // this.myInnerHeight = (window.innerHeight);
        // this.myTotalHeight=this.myInnerHeight -100;
        // this.myTotalHeight=this.myTotalHeight-0;
        // this.myInnerHeight = this.myInnerHeight - 250;
        this.myInnerHeight = (window.innerHeight);
        this.myTotalHeight = this.myInnerHeight - 230;
        this.myTotalHeight = this.myTotalHeight - -130;
        this.myInnerHeight = this.myInnerHeight - 230;
    }


    Get_Menu_Status(Menu_id, Login_user_id) {

        this.issLoading = false;
        this.User_Details_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(Rows => {
            if (Rows[0][0] == undefined) {
                if (Menu_id == 1) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
            }
            else
                if (Rows[0][0].View > 0) {

                    if (Menu_id == 1) {



                        this.Permissions = Rows[0][0];
                        if (this.Permissions == undefined || this.Permissions == null) {
                            localStorage.removeItem('token');
                            this.router.navigateByUrl('Home_Page');
                        }

                        this.User_Details_Edit = this.Permissions.Edit;
                        this.User_Details_Save = this.Permissions.Save;
                        this.User_Details_Delete = this.Permissions.Delete;
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
        this.subusers_view = false;
        this.profile_View = true;
        this.Application_Tab_View = false
        this.Clr_User_Details();
    }
    Close_Click() {
        this.Clr_User_Details();
        this.subusers_view = false;
        this.Entry_View = false;
        this.profile_View = true;
        this.Application_Tab_View = false
    }
    Password_View_Click() {
        this.View_Password = this.User_Details_.Password;


    }
    trackByFn(index, item) {
        return index;
    }
    Clr_User_Details() {

        this.Select_View = false;
        this.Select_View_Department = false;
        this.Select_All_timeView_Department = false;
        this.Select_User_Country = false;
        this.Select_User_Course = false;
        this.Select_View_All_Department = false;
        this.Select_Transfer_All_Department = false;
        this.Select_View_Application_Group = false;
        this.Select_View_Application_Status = false;
        this.Select_Edit = false;
        this.Select_Save = false;
        this.Select_Delete = false;
        this.View_Password = "";
        this.User_Details_.User_Details_Id = 0;
        this.User_Details_.User_Details_Name = "";
        this.User_Details_.Password = "";
        this.User_Details_.Working_Status = 0;
        this.User_Details_.User_Type = 0;
        this.User_Details_.Role_Id = 0;
        this.User_Details_.Address1 = "";
        this.User_Details_.Address2 = "";
        this.User_Details_.Address3 = "";
        this.User_Details_.Address4 = "";
        this.User_Details_.Pincode = "";
        this.User_Details_.Mobile = "";
        this.User_Details_.Email = "";
        this.User_Details_.Registration_Target = null
        this.User_Details_.FollowUp_Target = null


        if (this.User_Type_Data != null && this.User_Type_Data != undefined)
            this.User_Type_ = this.User_Type_Data[0];

        if (this.User_Status_Data != null && this.User_Status_Data != undefined)
            this.User_Status_ = this.User_Status_Data[0];

        if (this.User_Role_Data != null && this.User_Role_Data != undefined)
            this.User_Role_ = this.User_Role_Data[0];

        if (this.Branch_Data != null && this.Branch_Data != undefined)
            this.Branch_ = this.Branch_Data[0];

        if (this.Default_Application_Status_Data != null && this.Default_Application_Status_Data != undefined)
            this.Default_Application_Status_ = this.Default_Application_Status_Data[0];

        if (this.User_Profile_Department_Data != null && this.User_Profile_Department_Data != undefined)
            this.User_Profile_Department_ = this.User_Profile_Department_Data[0];

        // for (var m = 0; m < this.User_Department_Data.length; m++) {
        //     this.User_Department_Data[m].Check_Box_VIew_All = false;
        //     this.User_Department_Data[m].Check_Box_View = false;
        // }
        for (var m = 0; m < this.User_Department_Data.length; m++) {
            this.User_Department_Data[m].Transfer_Box_VIew_All = false;
        }

        if (this.User_Menu_Selection_Data != undefined)//&& this.User_Menu_Selection_Data!=null&&this.User_Menu_Selection_Data!=""
        {
            for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
                this.User_Menu_Selection_Data[i].IsDelete = false;
                this.User_Menu_Selection_Data[i].IsEdit = false;
                this.User_Menu_Selection_Data[i].IsSave = false;
                this.User_Menu_Selection_Data[i].IsView = false;
            }
        }
        if (this.Application_Group_Data != undefined) {
            for (var n = 0; n < this.Application_Group_Data.length; n++) {
                this.Application_Group_Data[n].View = false;
                this.Application_Group_Data[n].View = false;
            }
        }
        if (this.Application_Status_Data != undefined) {
            for (var q = 0; q < this.Application_Status_Data.length; q++) {
                this.Application_Status_Data[q].View = false;
                this.Application_Status_Data[q].View = false;
            }
        }
        if (this.Department_Data != undefined) {
            for (var r = 0; r < this.Department_Data.length; r++) {
                this.Department_Data[r].checkbox_view = false;
                this.Department_Data[r].checkbox_view = false;
            }
        }

        if (this.Country_Data != undefined) {
            for (var r = 0; r < this.Country_Data.length; r++) {
                this.Country_Data[r].country_checkbox_view = false;
                this.Country_Data[r].country_checkbox_view = false;
            }
        }



        if (this.Course_Data != undefined) {
            for (var r = 0; r < this.Course_Data.length; r++) {
                this.Course_Data[r].course_checkbox_view = false;
                this.Course_Data[r].course_checkbox_view = false;
            }
        }
        this.Application_View = false
        this.All_time_view = false
    }
    View_Click() {

        for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
            if (this.Select_View == false)
                this.User_Menu_Selection_Data[i].IsView = true;
            else
                this.User_Menu_Selection_Data[i].IsView = false;
        }
    }
    Department_View_Click() {
        for (var i = 0; i < this.User_Department_Data.length; i++) {
            if (this.Select_View_Department == false)
                this.User_Department_Data[i].Check_Box_View = true;
            else
                this.User_Department_Data[i].Check_Box_View = false;
        }
    }
    Department_All_TimeView_Click() {
        for (var i = 0; i < this.Department_Data.length; i++) {
            if (this.Select_All_timeView_Department == false)
                this.Department_Data[i].checkbox_view = true;
            else
                this.Department_Data[i].checkbox_view = false;
        }
    }

    User_Country_Click() {
        // debugger
        for (var i = 0; i < this.Country_Data.length; i++) {
            if (this.Select_User_Country == false)
                this.Country_Data[i].country_checkbox_view = true;
            else
                this.Country_Data[i].country_checkbox_view = false;
        }
    }


    User_Course_Click() {
        // debugger
        for (var i = 0; i < this.Course_Data.length; i++) {
            if (this.Select_User_Course == false)
                this.Course_Data[i].course_checkbox_view = true;
            else
                this.Course_Data[i].course_checkbox_view = false;
        }
    }

    Department_Transfer_All_Click() {

        for (var i = 0; i < this.User_Department_Data.length; i++) {
            if (this.Select_Transfer_All_Department == false)
                this.User_Department_Data[i].Transfer_Box_VIew_All = true;
            else
                this.User_Department_Data[i].Transfer_Box_VIew_All = false;
        }
    }
    Department_View_All_Click() {

        for (var i = 0; i < this.User_Department_Data.length; i++) {
            if (this.Select_View_All_Department == false)
                this.User_Department_Data[i].Check_Box_VIew_All = true;
            else
                this.User_Department_Data[i].Check_Box_VIew_All = false;
        }
    }
    Application_Group_View_Click() {
        for (var i = 0; i < this.Application_Group_Data.length; i++) {
            if (this.Select_View_Application_Group == false)
                this.Application_Group_Data[i].View = true;
            else
                this.Application_Group_Data[i].View = false;
        }
    }
    Application_Status_View_Click() {
        for (var i = 0; i < this.Application_Status_Data.length; i++) {
            if (this.Select_View_Application_Status == false)
                this.Application_Status_Data[i].View = true;
            else
                this.Application_Status_Data[i].View = false;
        }
    }
    Save_Click() {

        for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
            if (this.Select_Save == false)
                this.User_Menu_Selection_Data[i].IsSave = true;
            else
                this.User_Menu_Selection_Data[i].IsSave = false;
        }
    }
    Edit_Click() {

        for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
            if (this.Select_Edit == false)
                this.User_Menu_Selection_Data[i].IsEdit = true;
            else
                this.User_Menu_Selection_Data[i].IsEdit = false;
        }
    }
    Delete_Click() {

        for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
            if (this.Select_Delete == false)
                this.User_Menu_Selection_Data[i].IsDelete = true;
            else
                this.User_Menu_Selection_Data[i].IsDelete = false;
        }
    }
    Search_User_Role() {
        this.User_Details_Service_.Search_User_Role('').subscribe(Rows => {
            this.User_Role_Data = Rows[0];
            this.User_Role_Temp.User_Role_Id = 0;
            this.User_Role_Temp.User_Role_Name = "Select";
            this.User_Role_Data.unshift(this.User_Role_Temp);
            this.User_Role_ = this.User_Role_Data[0];

        },
            Rows => {
                //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
            });
    }
    Load_Dropdowns() {

        this.User_Details_Service_.Get_Users_Load_Data().subscribe(Rows => {

            this.User_Type_Data = Rows.User_Type;
            this.User_Menu_Selection_Data = Rows.User_Menu_Selection;
            this.User_Status_Data = Rows.User_Status;
            this.Branch_Data = Rows.Branch;
            this.User_Department_Data = Rows.User_Department;
            this.User_Profile_Department_Data = Rows.Profile_Department;
            this.Department_Data = [...Rows.Profile_Department];
            this.Application_Group_Data = Rows.Application_Groups;
            this.Default_Application_Status_Data = [...Rows.Application_Statuses];
            this.Application_Status_Data = [...Rows.Application_Statuses];
            // this.User_Profile_Location_Data = Rows.Profile_Location;

            this.Enable_Call = Number(Rows.Call_Status[0].Settings_Value);
            if (this.Enable_Call == 1) this.Enable_Call_Button = true;
            else this.Enable_Call_Button = false;

            this.User_Profile_Department_Temp.Department_Id = 0;
            this.User_Profile_Department_Temp.Department_Name = "Select";
            this.User_Profile_Department_Data.unshift(this.User_Profile_Department_Temp);
            this.User_Profile_Department_ = this.User_Profile_Department_Data[0];
            this.Search_User_Profile_Department_ = this.User_Profile_Department_Data[0];

            this.User_Type_Temp.User_Type_Id = 0;
            this.User_Type_Temp.User_Type_Name = "Select";
            this.User_Type_Data.unshift(this.User_Type_Temp);
            this.User_Type_ = this.User_Type_Data[0];

            this.Default_Application_Status_Temp.Application_status_Id = 0;
            this.Default_Application_Status_Temp.Application_Status_Name = "Select";
            this.Default_Application_Status_Data.unshift(Object.assign({}, this.Default_Application_Status_Temp));
            this.Default_Application_Status_ = Object.assign({}, this.Default_Application_Status_Data[0]);



            this.Branch_Temp.Branch_Id = 0;
            this.Branch_Temp.Branch_Name = "Select";
            this.Branch_Data.unshift(this.Branch_Temp);
            this.Branch_ = this.Branch_Data[0];

            this.Search_Branch_ = this.Branch_Data[0];

            this.User_Status_Temp.User_Status_Id = 0;
            this.User_Status_Temp.User_Status_Name = "Select";
            this.User_Status_Data.unshift(this.User_Status_Temp);
            this.User_Status_ = this.User_Status_Data[0];
            this.Search_User_Status_ = this.User_Status_Data[0];

            //    this.Application_Group_Temp.Application_Group_Id=0;
            //    this.Application_Group_Temp.Application_Group_Name="Select";
            //    this.Application_Group_Data.unshift(this.Application_Group_Temp);
            //    this.Application_Group_ = this.Application_Group_Data[0];

            //    this.Application_Status_Temp.Application_status_Id=0;
            //    this.Application_Status_Temp.Application_Status_Name="Select";
            //    this.Application_Status_Data.unshift(this.Application_Status_Temp);
            //    this.Application_Status_ = this.Application_Status_Data[0];
        },
            Rows => {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }

    Load_Location() {
        // debugger;
        this.User_Details_Service_.Get_Location_Load_Data(this.Branch_.Branch_Id, this.User_Profile_Department_.Department_Id, '').
            subscribe(Rows => {
                if (Rows != null) {
                    // debugger;
                    this.User_Profile_Location_Data = Rows[0];
                    this.User_Profile_Location_Temp_.Location_Id = 0;
                    this.User_Profile_Location_Temp_.Location_Name = "select";
                    this.User_Profile_Location_Data.unshift(this.User_Profile_Location_Temp_);
                    this.User_Profile_Location_ = this.User_Profile_Location_Data[0];
                }
            },
                Rows => {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
                });

        //     for (var i = 0; i < this.User_Profile_Location_Data.length; i++) {
        //     if (this.User_Details_.Location_Id == this.User_Profile_Location_Data[i].Location_Id)
        //         this.User_Profile_Location_ = this.User_Profile_Location_Data[i];
        // }
    }


    Search_Location_Typeahead(event: any, source: number) {

        var branchid = 0, depid = 0;
        if (this.Branch_.Branch_Id == 0)
            branchid = 0;
        else
            branchid = this.Branch_.Branch_Id;

        if (this.User_Profile_Department_.Department_Id == 0)
            depid = 0;
        else
            depid = this.User_Profile_Department_.Department_Id;
        var Value = "";
        if (event.target.value == "") Value = undefined;
        else Value = event.target.value.toLowerCase();
        // debugger;
        // if (this.DSE_Data == undefined || this.DSE_Data.length == 0) {

        this.issLoading = true;
        this.User_Details_Service_.Get_Location_Load_Data(branchid, depid, Value)
            .subscribe(res => {
                // debugger;
                this.User_Profile_Location_Data = res[0];
                this.User_Profile_Location_Data_Check = [];
                this.issLoading = false;

                if (source == 1 && Value != undefined) {
                    for (var i = 0; i < this.User_Profile_Location_Data.length; i++) {
                        if (this.User_Profile_Location_Data[i].Location_Name.toLowerCase().includes(Value)) {
                            this.User_Profile_Location_Data_Check.push(this.User_Profile_Location_Data[i]);
                        }
                    }
                } else {
                    this.User_Profile_Location_Data_Check = this.User_Profile_Location_Data;
                }
            });
        // } else {

        //   this.DSE_Data_Check = [];
        //   for (var i = 0; i < this.DSE_Data.length; i++) {
        //     if (Value == undefined ||
        //       this.DSE_Data[i].DSE_Name.toLowerCase().includes(Value)) {
        //       this.DSE_Data_Check.push(this.DSE_Data[i]);
        //     }
        //   }
        // }
    }

    display_Location(Location: any) {
        return Location ? Location.Location_Name : '';
    }

    Search_User_Details() {

        var Search_Branch_Id = 0, Search_User_Status_Id = 0, Search_Department_Id = 0;

        this.issLoading = true;
        if (this.Search_User_Name_ == undefined)
            this.Search_User_Name_ = "";
        if (this.Search_Branch_ != undefined && this.Search_Branch_ != null)
            Search_Branch_Id = this.Search_Branch_.Branch_Id;
        if (this.Search_User_Profile_Department_ != undefined && this.Search_User_Profile_Department_ != null)
            Search_Department_Id = this.Search_User_Profile_Department_.Department_Id;
        if (this.Search_User_Status_ != undefined && this.Search_User_Status_ != null)
            Search_User_Status_Id = this.Search_User_Status_.User_Status_Id;

        this.User_Details_Service_.Search_User_Details(this.Search_User_Name_, Search_Branch_Id, Search_Department_Id, Search_User_Status_Id).subscribe(Rows => {

            this.User_Details_Data = Rows.returnvalue.Leads;
            this.Total_Entries = this.User_Details_Data.length;
            if (this.User_Details_Data.length == 0) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No Details Found', Type: "3" } });
            }
            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });


    }
    View_User_Details(User_Details_Id, index) {
        this.Entry_View = false;
        this.subusers_view = true;

    }


    Delete_User_Details(User_Details_Id, index) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Do you want to delete ?', Type: "true", Heading: 'Confirm' } });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'Yes') {
                this.issLoading = true;

                this.User_Details_Service_.Delete_User_Details(User_Details_Id).subscribe(Delete_status => {

                    if (Delete_status[0][0].User_Details_Id_ > 0) {
                        this.User_Details_Data.splice(index, 1);
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Deleted', Type: "false" } });
                    }
                    else if (Delete_status[0][0].User_Details_Id_ == -2) {
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Cannot be deleted,the user is used with FollowUp', Type: "2" } });
                    }
                    else {
                        //this.User_Details_Data.splice(index, 1);
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
    Save_Duplicate_User_Details() {

        // this.duplicate_user = true;
        this.User_Details_.User_Details_Id = 0;
        this.User_Details_.User_Details_Name = null;
        this.User_Details_.Password = null;
        //this.Save_User_Details();
    }
    Save_User_Details() {
        var Menu_Status = false;

        // Only check menu selection if Lead_Assigned is false
        // if (this.Lead_Assigned !== true) {
        for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
            if (this.User_Menu_Selection_Data[i].IsView == true)
                Menu_Status = true
        }
        // }

        var Department_Status = false;

        // Only check department selection if Lead_Assigned is false
        // if (this.Lead_Assigned !== true) {
        for (var m = 0; m < this.User_Department_Data.length; m++) {
            if (this.User_Department_Data[m].Check_Box_View == true)
                Department_Status = true
        }
        // }

        var Default_Status = false, application_status_tick = false;

        // this.Lead_Assigned !== true && MValidate menu selection only if Lead_Assigned is false
        if (Menu_Status == false) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: 'Dialogbox-Class',
                data: { Message: 'Select Atleast One Menu', Type: "3" }
            });
            return;
        }

        // this.Lead_Assigned !== true && Validate department selection only if Lead_Assigned is false
        if (Department_Status == false) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: 'Dialogbox-Class',
                data: { Message: 'Select Atleast One Department', Type: "3" }
            });
            return;
        }

        if (this.User_Details_.User_Details_Name == undefined || this.User_Details_.User_Details_Name == null || this.User_Details_.User_Details_Name == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the User Name', Type: "3" } });
            return;
        }
        else if (this.User_Details_.Password == undefined || this.User_Details_.Password == null || this.User_Details_.Password == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the Password', Type: "3" } });
            return;
        }
        else if (this.User_Details_.Email == undefined || this.User_Details_.Email == null || this.User_Details_.Email == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Email', Type: "3" } });
            return;
        }
        else if (this.User_Details_.Mobile == undefined || this.User_Details_.Mobile == null || this.User_Details_.Mobile == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the Mobile Number', Type: "3" } });
            return;
        }
        else if (this.User_Type_ == undefined || this.User_Type_ == null || this.User_Type_.User_Type_Id == undefined || this.User_Type_.User_Type_Id == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Type', Type: "3" } });
            return;
        }
        else if (this.User_Status_ == undefined || this.User_Status_ == null || this.User_Status_.User_Status_Id == undefined || this.User_Status_.User_Status_Id == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Status', Type: "3" } });
            return;
        }
        else if (this.Branch_ == undefined || this.Branch_ == null || this.Branch_.Branch_Id == undefined || this.Branch_.Branch_Id == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Branch', Type: "3" } });
            return;
        }
        else if (this.User_Role_ == undefined || this.User_Role_ == null || this.User_Role_.User_Role_Id == undefined || this.User_Role_.User_Role_Id == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Role', Type: "3" } });
            return;
        }
        else if (this.User_Profile_Department_ == undefined || this.User_Profile_Department_ == null || this.User_Profile_Department_.Department_Id == undefined || this.User_Profile_Department_.Department_Id == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Department', Type: "3" } });
            return;
        }
        else if (this.User_Profile_Location_ == undefined || this.User_Profile_Location_ == null || this.User_Profile_Location_.Location_Id == undefined || this.User_Profile_Location_.Location_Id == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Location', Type: "3" } });
            return;
        }

        if (this.User_Status_.User_Status_Id == 2 || this.User_Status_.User_Status_Id == 3) {
            if (this.Backup_User_.User_Details_Id == undefined || this.Backup_User_.User_Details_Id == null || this.Backup_User_.User_Details_Id == 0 || this.Backup_User_ == null || this.Backup_User_ == undefined) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Backup User', Type: "3" } });
                return;
            }
        }

        if (this.Enable_Call_Button == true) {
            if (this.User_Details_.FollowUp_Target == undefined || this.User_Details_.FollowUp_Target == null || this.User_Details_.FollowUp_Target == 0) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Extension', Type: "3" } });
                return;
            }
        }

        if (this.User_Details_.Mobile.toString().length != 10) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter valid Phone', Type: "3" } });
            return;
        }
        else {
            var Appln_view = false, alltime_view = false;
            this.User_Details_.User_Type = this.User_Type_.User_Type_Id;
            this.User_Details_.Working_Status = this.User_Status_.User_Status_Id;
            this.User_Details_.User_Type = this.User_Type_.User_Type_Id;
            this.User_Details_.Branch_Id = this.Branch_.Branch_Id;
            this.User_Details_.Role_Id = this.User_Role_.User_Role_Id;
            this.User_Details_.Department_Id = this.User_Profile_Department_.Department_Id;
            this.User_Details_.Department_Name = this.User_Profile_Department_.Department_Name;
            this.User_Details_.Backup_User_Id = this.Backup_User_.User_Details_Id;
            this.User_Details_.Backup_User_Name = this.Backup_User_.User_Details_Name;
            this.User_Details_.Location_Id = this.User_Profile_Location_.Location_Id;
            this.User_Details_.Location_Name = this.User_Profile_Location_.Location_Name;

            this.User_Details_.Default_Application_Status_Id = this.Default_Application_Status_.Application_status_Id;
            this.User_Details_.Default_Application_Status_Name = this.Default_Application_Status_.Application_Status_Name;

            this.User_Menu_Selection_Data_Temp = [];

            if (this.Application_View == true) Appln_view = true;
            if (this.All_time_view == true) alltime_view = true;
            this.User_Details_.Application_View = Appln_view;

            if (this.Lead_Assigned == true)
                this.User_Details_.Lead_Assigned = true;
            else
                this.User_Details_.Lead_Assigned = false;

            this.User_Details_.All_Time_Department_View = alltime_view;

            // If Lead_Assigned is true, pass empty arrays for menu and department
            // if (this.Lead_Assigned == true) {
            //     this.User_Details_.User_Menu_Selection_Data = [];
            //     this.User_Details_.User_Department_Data = [];
            // } else {
            // Process menu selections only if Lead_Assigned is false
            for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
                if (Boolean(this.User_Menu_Selection_Data[i].IsView) == true ||
                    Boolean(this.User_Menu_Selection_Data[i].IsSave) == true ||
                    Boolean(this.User_Menu_Selection_Data[i].IsEdit) == true ||
                    Boolean(this.User_Menu_Selection_Data[i].IsDelete) == true) {
                    this.User_Menu_Selection_Data_Temp.push(this.User_Menu_Selection_Data[i]);
                }
            }
            this.User_Details_.User_Menu_Selection_Data = this.User_Menu_Selection_Data_Temp;

            // Process department selections only if Lead_Assigned is false
            this.Department_Selection_Data_Temp = [];
            for (var m = 0; m < this.User_Department_Data.length; m++) {
                if (Boolean(this.User_Department_Data[m].Check_Box_VIew_All) == true ||
                    Boolean(this.User_Department_Data[m].Check_Box_View) == true ||
                    Boolean(this.User_Department_Data[m].Transfer_Box_VIew_All) == true) {
                    this.Department_Selection_Data_Temp.push(this.User_Department_Data[m]);
                }
            }
            this.User_Details_.User_Department_Data = this.Department_Selection_Data_Temp;
            //}

            this.Application_Group_Data_Temp = [];
            for (var i = 0; i < this.Application_Group_Data.length; i++) {
                if (Boolean(this.Application_Group_Data[i].View) == true) {
                    this.Application_Group_Data_Temp.push(this.Application_Group_Data[i]);
                }
            }
            this.User_Details_.User_Application_Group = this.Application_Group_Data_Temp;

            this.Application_Status_Data_Temp = [];
            for (var i = 0; i < this.Application_Status_Data.length; i++) {
                if (Boolean(this.Application_Status_Data[i].View) == true) {
                    this.Application_Status_Data_Temp.push(this.Application_Status_Data[i]);
                }
            }
            this.User_Details_.User_Application_Status = this.Application_Status_Data_Temp;

            this.AlltimeDepts_Temp = [];
            this.User_Country_Temp = [];
            this.User_Course_Temp = [];

            for (var i = 0; i < this.Department_Data.length; i++) {
                if (Boolean(this.Department_Data[i].checkbox_view) == true) {
                    this.AlltimeDepts_Temp.push(this.Department_Data[i]);
                }
            }

            for (var i = 0; i < this.Country_Data.length; i++) {
                if (Boolean(this.Country_Data[i].country_checkbox_view) == true) {
                    this.User_Country_Temp.push(this.Country_Data[i]);
                }
            }

            for (var i = 0; i < this.Course_Data.length; i++) {
                if (Boolean(this.Course_Data[i].course_checkbox_view) == true) {
                    this.User_Course_Temp.push(this.Course_Data[i]);
                }
            }

            this.User_Details_.All_Time_Departments = this.AlltimeDepts_Temp;
            this.User_Details_.User_Country = this.User_Country_Temp;
            this.User_Details_.User_Course = this.User_Course_Temp;

            this.issLoading = true;

            this.User_Details_Service_.Save_User_Details(this.User_Details_).subscribe(Save_status => {
                if (Number(Save_status[0].User_Details_Id_) > 0) {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: 'Dialogbox-Class',
                        data: { Message: 'Saved', Type: "false" }
                    });
                    this.Search_User_Details();

                    // Notification emits
                    var message = {
                        Notification_Type_Name: Save_status[0].Notification_Type_Name_,
                        To_User: Save_status[0].User_Details_Id_
                    };
                    this.socket.emit("new-message", message);
                }
                else if (Number(Save_status[0].User_Details_Id_) == -1) {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: 'Dialogbox-Class',
                        data: { Message: 'User Limit Exceeded', Type: "2" }
                    });
                }
                else {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: 'Dialogbox-Class',
                        data: { Message: 'Error Occured', Type: "2" }
                    });
                }
                this.issLoading = false;
            },
                Rows => {
                    this.issLoading = false;
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: 'Dialogbox-Class',
                        data: { Message: 'Error Occured', Type: "2" }
                    });
                });
            this.Clr_User_Details();
        }
    }
    // Save_User_Details() {

    //     var Menu_Status = false;
    //     for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
    //         if (this.User_Menu_Selection_Data[i].IsView == true)
    //             Menu_Status = true
    //     }
    //     var Department_Status = false;
    //     for (var m = 0; m < this.User_Department_Data.length; m++) {
    //         if (this.User_Department_Data[m].Check_Box_View == true)
    //             Department_Status = true
    //     }


    //     var Default_Status = false, application_status_tick = false;
    //     // if(this.Application_View == true){    
    //     //     for (var k = 0; k < this.Application_Status_Data.length; k++)
    //     //     {
    //     //       if(this.Application_Status_Data[k].View== true){
    //     //         application_status_tick = true
    //     //         if(this.Default_Application_Status_.Application_status_Id == this.Application_Status_Data[k].Application_status_Id )
    //     //         {    
    //     //           Default_Status=true
    //     //         }  
    //     //     }   
    //     //     }
    //     // }


    //     if (Menu_Status == false) {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One Menu', Type: "3" } });
    //         return;
    //     }


    //     //    else if (this.Application_View == true && application_status_tick==false)
    //     //    {
    //     //        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast one Application Status' , Type: "3" } });
    //     //        return;
    //     //    }
    //     //    else if (this.Application_View == true && Default_Status==false)
    //     //    {
    //     //        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Same Application Status from Default status that selected in Application Status' , Type: "3" } });
    //     //        return;
    //     //    }


    //     else if (Department_Status == false) {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Atleast One Department', Type: "3" } });
    //         return;
    //     }
    //     else if (this.User_Details_.User_Details_Name == undefined || this.User_Details_.User_Details_Name == null || this.User_Details_.User_Details_Name == "") {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the User Name', Type: "3" } });
    //         return;
    //     }
    //     else if (this.User_Details_.Password == undefined || this.User_Details_.Password == null || this.User_Details_.Password == "") {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the Password', Type: "3" } });
    //         return;
    //     }
    //     else if (this.User_Details_.Email == undefined || this.User_Details_.Email == null || this.User_Details_.Email == "") {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Email', Type: "3" } });
    //         return;
    //     }
    //     else if (this.User_Details_.Mobile == undefined || this.User_Details_.Mobile == null || this.User_Details_.Mobile == "") {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter the Mobile Number', Type: "3" } });
    //         return;
    //     }
    //     else if (this.User_Type_ == undefined || this.User_Type_ == null || this.User_Type_.User_Type_Id == undefined || this.User_Type_.User_Type_Id == 0) {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Type', Type: "3" } });
    //         return;
    //     }
    //     else if (this.User_Status_ == undefined || this.User_Status_ == null || this.User_Status_.User_Status_Id == undefined || this.User_Status_.User_Status_Id == 0) {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Status', Type: "3" } });
    //         return;
    //     }
    //     else if (this.Branch_ == undefined || this.Branch_ == null || this.Branch_.Branch_Id == undefined || this.Branch_.Branch_Id == 0) {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Branch', Type: "3" } });
    //         return;
    //     }
    //     else if (this.User_Role_ == undefined || this.User_Role_ == null || this.User_Role_.User_Role_Id == undefined || this.User_Role_.User_Role_Id == 0) {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User Role', Type: "3" } });
    //         return;
    //     }

    //     else if (this.User_Profile_Department_ == undefined || this.User_Profile_Department_ == null || this.User_Profile_Department_.Department_Id == undefined || this.User_Profile_Department_.Department_Id == 0) {

    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Department', Type: "3" } });
    //         return;
    //     }

    //         else if (this.User_Profile_Location_ == undefined || this.User_Profile_Location_ == null || this.User_Profile_Location_.Location_Id == undefined || this.User_Profile_Location_.Location_Id == 0) {

    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Location', Type: "3" } });
    //         return;
    //     }

    //     if (this.User_Status_.User_Status_Id == 2 || this.User_Status_.User_Status_Id == 3) {
    //         if (this.Backup_User_.User_Details_Id == undefined || this.Backup_User_.User_Details_Id == null || this.Backup_User_.User_Details_Id == 0 || this.Backup_User_ == null || this.Backup_User_ == undefined) {
    //             const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Backup User', Type: "3" } });
    //             return;
    //         }
    //     }

    //     if (this.Enable_Call_Button == true) {
    //         if (this.User_Details_.FollowUp_Target == undefined || this.User_Details_.FollowUp_Target == null || this.User_Details_.FollowUp_Target == 0) {
    //             const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Extension', Type: "3" } });
    //             return;
    //         }
    //     }


    //     // if(this.User_Details_.Mobile!=''&&this.User_Details_.Mobile!=null&&this.User_Details_.Mobile!=undefined)
    //     // {
    //     //     if(this.User_Details_.Mobile.toString().length!=10 )
    //     //     {
    //     //         const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class'  ,data:{Message:'Enter valid Mobile',Type:"3"}});
    //     //         return
    //     //     }
    //     // } 



    //     if (this.User_Details_.Mobile.toString().length != 10) {
    //         const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter valid Phone', Type: "3" } });
    //         return;

    //     }

    //     else {

    //         var Appln_view = false, alltime_view = false;
    //         this.User_Details_.User_Type = this.User_Type_.User_Type_Id;
    //         this.User_Details_.Working_Status = this.User_Status_.User_Status_Id;
    //         this.User_Details_.User_Type = this.User_Type_.User_Type_Id;
    //         this.User_Details_.Branch_Id = this.Branch_.Branch_Id;
    //         this.User_Details_.Role_Id = this.User_Role_.User_Role_Id;
    //         this.User_Details_.Department_Id = this.User_Profile_Department_.Department_Id;
    //         this.User_Details_.Department_Name = this.User_Profile_Department_.Department_Name;
    //         this.User_Details_.Backup_User_Id = this.Backup_User_.User_Details_Id;
    //         this.User_Details_.Backup_User_Name = this.Backup_User_.User_Details_Name;
    //         this.User_Details_.Location_Id=this.User_Profile_Location_.Location_Id;
    //         this.User_Details_.Location_Name=this.User_Profile_Location_.Location_Name;

    //         this.User_Details_.Default_Application_Status_Id = this.Default_Application_Status_.Application_status_Id;
    //         this.User_Details_.Default_Application_Status_Name = this.Default_Application_Status_.Application_Status_Name;
    //         this.User_Menu_Selection_Data_Temp = [];
    //         if (this.Application_View == true) Appln_view = true;
    //         if (this.All_time_view == true) alltime_view = true;
    //         this.User_Details_.Application_View = Appln_view;

    //         if (this.Lead_Assigned == true)
    //             this.User_Details_.Lead_Assigned = true;
    //         else
    //             this.User_Details_.Lead_Assigned = false;





    //         this.User_Details_.All_Time_Department_View = alltime_view;
    //         for (var i = 0; i < this.User_Menu_Selection_Data.length; i++) {
    //             if (Boolean(this.User_Menu_Selection_Data[i].IsView) == true || Boolean(this.User_Menu_Selection_Data[i].IsSave) == true
    //                 || Boolean(this.User_Menu_Selection_Data[i].IsEdit) == true || Boolean(this.User_Menu_Selection_Data[i].IsDelete) == true) {
    //                 this.User_Menu_Selection_Data_Temp.push(this.User_Menu_Selection_Data[i]);
    //             }
    //         }
    //         this.User_Details_.User_Menu_Selection_Data = this.User_Menu_Selection_Data_Temp;


    //         this.Department_Selection_Data_Temp = [];
    //         for (var m = 0; m < this.User_Department_Data.length; m++) {
    //             if (Boolean(this.User_Department_Data[m].Check_Box_VIew_All) == true 
    //             || Boolean(this.User_Department_Data[m].Check_Box_View) == true
    //             || Boolean(this.User_Department_Data[m].Transfer_Box_VIew_All) == true
    //         ) {
    //                 this.Department_Selection_Data_Temp.push(this.User_Department_Data[m]);
    //             }
    //         }
    //         // for (var m = 0; m < this.User_Department_Data.length; m++) {
    //         //     if (Boolean(this.User_Department_Data[m].Transfer_Box_VIew_All) == true || Boolean(this.User_Department_Data[m].Check_Box_View) == true) {
    //         //         this.Department_Selection_Data_Temp.push(this.User_Department_Data[m]);
    //         //     }
    //         // }
    //         this.User_Details_.User_Department_Data = this.Department_Selection_Data_Temp;
    //         this.Application_Group_Data_Temp = [];
    //         for (var i = 0; i < this.Application_Group_Data.length; i++) {
    //             if (Boolean(this.Application_Group_Data[i].View) == true) {
    //                 this.Application_Group_Data_Temp.push(this.Application_Group_Data[i]);
    //             }
    //         }
    //         this.User_Details_.User_Application_Group = this.Application_Group_Data_Temp;
    //         this.Application_Status_Data_Temp = [];
    //         for (var i = 0; i < this.Application_Status_Data.length; i++) {
    //             if (Boolean(this.Application_Status_Data[i].View) == true) {
    //                 this.Application_Status_Data_Temp.push(this.Application_Status_Data[i]);
    //             }
    //         }
    //         this.User_Details_.User_Application_Status = this.Application_Status_Data_Temp;
    //         this.AlltimeDepts_Temp = [];
    //         this.User_Country_Temp = [];
    //         this.User_Course_Temp = [];



    //         for (var i = 0; i < this.Department_Data.length; i++) {
    //             if (Boolean(this.Department_Data[i].checkbox_view) == true) {
    //                 this.AlltimeDepts_Temp.push(this.Department_Data[i]);
    //             }
    //         }

    //         for (var i = 0; i < this.Country_Data.length; i++) {
    //             if (Boolean(this.Country_Data[i].country_checkbox_view) == true) {
    //                 this.User_Country_Temp.push(this.Country_Data[i]);
    //             }
    //         }

    //         for (var i = 0; i < this.Course_Data.length; i++) {
    //             if (Boolean(this.Course_Data[i].course_checkbox_view) == true) {
    //                 this.User_Course_Temp.push(this.Course_Data[i]);
    //             }
    //         }


    //         this.User_Details_.All_Time_Departments = this.AlltimeDepts_Temp;
    //         this.User_Details_.User_Country = this.User_Country_Temp;
    //         this.User_Details_.User_Course = this.User_Course_Temp;



    //         this.issLoading = true;

    //         this.User_Details_Service_.Save_User_Details(this.User_Details_).subscribe(Save_status => {


    //             if (Number(Save_status[0].User_Details_Id_) > 0) {
    //                 const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
    //                 this.Search_User_Details();
    //                 //notification emits
    //                 var message = {
    //                     Notification_Type_Name: Save_status[0].Notification_Type_Name_,
    //                     To_User: Save_status[0].User_Details_Id_

    //                 };
    //                 this.socket.emit("new-message", message);
    //             }
    //             else if (Number(Save_status[0].User_Details_Id_) == -1) {
    //                 const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'User Limit Exceeded', Type: "2" } });
    //             }
    //             else {
    //                 const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
    //             }
    //             this.issLoading = false;
    //         },
    //             Rows => {
    //                 this.issLoading = false;
    //                 const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
    //             });
    //         this.Clr_User_Details();
    //     }
    // }
    Get_User_Details_Edit(User_Details_Id) {

        this.issLoading = true;
        this.User_Details_Service_.Get_User_Details_Edit(User_Details_Id).subscribe(Rows => {

            this.User_Menu_Selection_Data = Rows[0].Menu;
            for (var j = 0; j < this.User_Menu_Selection_Data.length; j++) {
                if (this.User_Menu_Selection_Data[j].IsView.toString() == '1')
                    this.User_Menu_Selection_Data[j].IsView = true;
                else
                    this.User_Menu_Selection_Data[j].IsView = false;
                if (this.User_Menu_Selection_Data[j].IsEdit.toString() == '1')
                    this.User_Menu_Selection_Data[j].IsEdit = true;
                else
                    this.User_Menu_Selection_Data[j].IsEdit = false;
                if (this.User_Menu_Selection_Data[j].IsSave.toString() == '1')
                    this.User_Menu_Selection_Data[j].IsSave = true;
                else
                    this.User_Menu_Selection_Data[j].IsSave = false;
                if (this.User_Menu_Selection_Data[j].IsDelete.toString() == '1')
                    this.User_Menu_Selection_Data[j].IsDelete = true;
                else
                    this.User_Menu_Selection_Data[j].IsDelete = false;
            }

            this.User_Department_Data = Rows[0].Department;
            for (var i = 0; i < this.User_Department_Data.length; i++) {
                if (this.User_Department_Data[i].Check_Box_VIew_All.toString() == '1') {
                    this.User_Department_Data[i].Check_Box_VIew_All = true
                }
                else {
                    this.User_Department_Data[i].Check_Box_VIew_All = false
                }
                if (this.User_Department_Data[i].Check_Box_View.toString() == '1') {

                    this.User_Department_Data[i].Check_Box_View = true
                }
                else {
                    this.User_Department_Data[i].Check_Box_View = false
                }
                if (this.User_Department_Data[i].Transfer_Box_VIew_All.toString() == '1') {
                    this.User_Department_Data[i].Transfer_Box_VIew_All = true
                }
                else {
                    this.User_Department_Data[i].Transfer_Box_VIew_All = false
                }
            }
            // this.Application_Group_Data = Rows[0].Applic_Group;
            // for (var i = 0; i < this.Application_Group_Data.length; i++) {

            //     if (this.Application_Group_Data[i].View.toString() == '1') {
            //         this.Application_Group_Data[i].View = true
            //     }
            //     else {
            //         this.Application_Group_Data[i].View = false
            //     }
            // }
            // this.Application_Status_Data = Rows[0].Applic_Status;
            // for (var i = 0; i < this.Application_Status_Data.length; i++) {
            //     if (this.Application_Status_Data[i].View.toString() == '1') {
            //         this.Application_Status_Data[i].View = true
            //     }
            //     else {
            //         this.Application_Status_Data[i].View = false
            //     }
            // }

            // this.Department_Data = Rows[0].All_time_dept
            // for (var k = 0; k < this.Department_Data.length; k++) {
            //     if (this.Department_Data[k].checkbox_view.toString() == '1') {
            //         this.Department_Data[k].checkbox_view = true
            //     }
            //     else {
            //         this.Department_Data[k].checkbox_view = false
            //     }
            // }


            // this.Country_Data = Rows[0].User_Country
            // for (var k = 0; k < this.Country_Data.length; k++) {
            //     if (this.Country_Data[k].country_checkbox_view.toString() == '1') {
            //         this.Country_Data[k].country_checkbox_view = true
            //     }
            //     else {
            //         this.Country_Data[k].country_checkbox_view = false
            //     }
            // }



            // this.Course_Data = Rows[0].User_Course
            // for (var k = 0; k < this.Course_Data.length; k++) {
            //     if (this.Course_Data[k].course_checkbox_view.toString() == '1') {
            //         this.Course_Data[k].course_checkbox_view = true
            //     }
            //     else {
            //         this.Course_Data[k].course_checkbox_view = false
            //     }
            // }


            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });

    }
    Edit_User_Details(User_Details_e: User_Details, index) {
        // debugger;
        this.Entry_View = true;
        this.profile_View = true;
        this.Application_Tab_View = false
        this.User_Details_ = User_Details_e;
        this.User_Id = User_Details_e.User_Details_Id;
        this.User_Details_Id_temp_ = User_Details_e.User_Details_Id;
        this.User_Details_ = Object.assign({}, User_Details_e);

        // if (this.User_Details_.Application_View == true)
        //     this.Application_View = true;
        // else 
        this.Application_View = false;

        if (this.User_Details_.Lead_Assigned == true)
            this.Lead_Assigned = true;
        else
            this.Lead_Assigned = false;

        // if (this.User_Details_.All_Time_Department_View == true)
        //     this.All_time_view = true;
        // else 
        this.All_time_view = false;
        // debugger;
        this.Get_User_Details_Edit(this.User_Details_.User_Details_Id);
        // debugger;
        for (var i = 0; i < this.Branch_Data.length; i++) {
            if (this.User_Details_.Branch_Id == this.Branch_Data[i].Branch_Id)
                this.Branch_ = this.Branch_Data[i];
        }
        // debugger;
        for (var i = 0; i < this.User_Type_Data.length; i++) {
            if (this.User_Details_.User_Type == this.User_Type_Data[i].User_Type_Id)
                this.User_Type_ = this.User_Type_Data[i];
        }
        // debugger;
        for (var i = 0; i < this.User_Status_Data.length; i++) {
            if (this.User_Details_.Working_Status == this.User_Status_Data[i].User_Status_Id)
                this.User_Status_ = this.User_Status_Data[i];
        }
        // debugger;
        // for (var i = 0; i < this.Default_Application_Status_Data.length; i++) {
        //     if (this.User_Details_.Default_Application_Status_Id == this.Default_Application_Status_Data[i].Application_status_Id)
        //         this.Default_Application_Status_ = this.Default_Application_Status_Data[i];
        // }
        for (var i = 0; i < this.User_Role_Data.length; i++) {
            if (this.User_Details_.Role_Id == this.User_Role_Data[i].User_Role_Id)
                this.User_Role_ = this.User_Role_Data[i];
        }
        // debugger;
        for (var i = 0; i < this.User_Profile_Department_Data.length; i++) {
            if (this.User_Details_.Department_Id == this.User_Profile_Department_Data[i].Department_Id)
                this.User_Profile_Department_ = this.User_Profile_Department_Data[i];
        }
        // debugger;
        this.User_Profile_Location_Temp_.Location_Id = this.User_Details_.Location_Id;
        this.User_Profile_Location_Temp_.Location_Name = this.User_Details_.Location_Name;
        this.User_Profile_Location_ = Object.assign({}, this.User_Profile_Location_Temp_);

        //  this.Load_Location();       

        this.Backup_User_Temp.User_Details_Id = this.User_Details_.Backup_User_Id
        this.Backup_User_Temp.User_Details_Name = this.User_Details_.Backup_User_Name
        this.Backup_User_ = Object.assign(this.Backup_User_Temp)
    }

    Search_Backup_User_Typeahead(event: any) {
        var Value = "";
        if (event.target.value == "")
            Value = "";
        else
            Value = event.target.value;
        if (this.Backup_User_Data == undefined || this.Backup_User_Data.length == 0) {
            this.issLoading = true;

            this.User_Details_Service_.Search_Backup_User_Typeahead('').subscribe(Rows => {

                if (Rows != null) {
                    this.Backup_User_Data = Rows[0];
                    this.issLoading = false;
                    this.Backup_User_Data_Filter = [];

                    for (var i = 0; i < this.Backup_User_Data.length; i++) {
                        if (this.Backup_User_Data[i].User_Details_Name.toLowerCase().includes(Value))
                            this.Backup_User_Data_Filter.push(this.Backup_User_Data[i])
                    }

                }
            },
                Rows => {
                    this.issLoading = false;
                });
        }

        else {

            this.Backup_User_Data_Filter = [];
            for (var i = 0; i < this.Backup_User_Data.length; i++) {
                if (this.Backup_User_Data[i].User_Details_Name.toLowerCase().includes(Value))
                    this.Backup_User_Data_Filter.push(this.Backup_User_Data[i])
            }
        }


    }
    display_Backup_User(Backup_User_: User_Details) {
        if (Backup_User_) { return Backup_User_.User_Details_Name; }
    }
    Tab_Click(Current_tab) {

        this.profile_View = false;
        this.Application_Tab_View = false
        if (Current_tab == 1) {
            this.profile_View = true;
        } else if (Current_tab == 2) {
            this.Application_Tab_View = true
            this.profile_View = false
        }
    }

    Load_Country() {

        this.User_Details_Service_.Load_Country().subscribe(Rows => {
            this.Country_Data = Rows[0];
        },
            Rows => {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }

    Load_Course() {

        this.User_Details_Service_.Load_Course().subscribe(Rows => {
            // debugger
            this.Course_Data = Rows[0];
        },
            Rows => {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }
}
