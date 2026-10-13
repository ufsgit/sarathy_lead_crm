import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Student_Service } from '../../../services/Student.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student } from '../../../models/Student';
import { Branch } from '../../../models/Branch';
import { User_Details } from '../../../models/User_Details';
import { user_month } from '../../../models/user_month';
import { Department } from '../../../models/Department';
import { Gender } from '../../../models/Gender';
import { Department_Status } from '../../../models/Department_Status';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
// import { Remarks } from 'app/models/Remarks';
// import { Student_FollowUp } from 'app/models/Student_FollowUp';
import { User_Target_Service } from '../../../services/User_Target.Service';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY', monthYearLabel: 'MMM YYYY', dateA11yLabel: 'DD/MM/YYYY', monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
    selector: 'app-Staff_Target_Report',
    templateUrl: './Staff_Target_Report.component.html',
    styleUrls: ['./Staff_Target_Report.component.css'],
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
})

export class Staff_Target_ReportComponent implements OnInit {
    Status_Search: Department_Status = new Department_Status();
    User_Search: User_Details = new User_Details();
    Search_Name = "";
    Department_Search: Department = new Department()
    Search_Branch: Branch = new Branch();
    Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;
    More_Search_Options: boolean = true;
    User_Month_: user_month = new user_month();
    Search_User_Month_: user_month = new user_month();
    user_month_Temp_: user_month = new user_month();
    user_month_Data: user_month[];
    //Search_Remark:Remarks=new Remarks();
    Department_Data: Department[]
    Users_Data: User_Details[]
    Branch_Data: Branch[]
    Status_Data: Department_Status[]
    Gender_Data: Gender[]
    Branch_Temp1: Branch = new Branch();
    Branch_Temp: Branch = new Branch();
    Department_Temp: Department = new Department();
    To_User_Search: User_Details = new User_Details();
    Users_Temp: User_Details = new User_Details();
    Permissions: any;
    Status_Temp: Department_Status = new Department_Status();
    missedfollowup_count: number = 1;
    followup_count: number = 1;
    // FollowUp_:Student_FollowUp=new Student_FollowUp();
    Lead_Data: Student[]
    Student_Data_Search: Student[]
    Student_Data: Student[]
    Student_Data_Item: Student = new Student()
    Lead_: Student = new Student();
    Search_Div: boolean = false;
    array: any;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    Total_Data: number = 0;
    myInnerHeight: number;
    issLoading: boolean;
    Show_FollowUp: boolean = false
    main_View: boolean = false
    Student_Selected_Data: Student[];
    Black: boolean = false;
    Red: boolean = false;
    pagePointer: number = 0;
    pageindex2: number = 0;
    pageindex: number = 0;
    Total_Rows: number = 0;
    isLoading = false;
    Search_By_: any;
    Search_Year: any;
    Registered_By_: any;
    year: any;
    month: any;
    day: any;
    date: any;
    Login_User: string = "0";
    Menu_Id: number = 17;
    Select_Student: boolean = false;
    Select_View: boolean = false;
    Student_Id: number = 0;
    Student_: Student = new Student();
    RowCount: number = 0;
    RowCount2: number = 0;
    nextflag: number = -1;
    Page_Length_: number = 10;
    firstnum: number = 0;
    lastnum: number = 1;
    shownext: boolean = false;
    showprev: boolean = false;
    Black_Start: number = 1;
    Black_Stop: number = 0;
    Red_Start: number = 1;
    Red_Stop: number = 0;
    points25: boolean = false;
    Edit_Page_Permission: any;
    Followup_Users_Data: User_Details[]
    Followup_Users_: User_Details = new User_Details();
    Student_Selection_Data_Temp: Student[];
    FollowUp_Status_: Department_Status = new Department_Status();
    Followup_Status_Data: Department_Status[]
    FollowUp_Department_: Department = new Department();
    Followup_Department_Data: Department[]
    Followup_Department_Data_Check: Department[]
    FollowUp_Branch_: Branch = new Branch();
    Followup_Branch_Data: Branch[];
    Date_checks_Create: Boolean = false;

    // Remarks_:Remarks= new Remarks
    // Remarks_Data:Remarks[]
    // Remarks_Temp:Remarks= new Remarks();
    Login_Id: number;
    Export_Permission: any
    Export_View: boolean = false;
    Login_User_Id: number;

    constructor(public Student_Service_: Student_Service, public User_Target_Service_: User_Target_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }
    ngOnInit() {
        this.Login_User = localStorage.getItem("Login_User");
        this.Login_User_Id = Number(this.Login_User);
        this.array = Get_Page_Permission(this.Menu_Id);
        this.Export_Permission = Get_Page_Permission(38);
        if (this.array == undefined || this.array == null) {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/auth/login');
        }
        else {
            this.Page_Load()
            if (this.Export_Permission != undefined && this.Export_Permission != null)
                this.Export_View = this.Export_Permission.View
        }
    }

    Page_Load() {
        this.myInnerHeight = (window.innerHeight);
        this.myInnerHeight = this.myInnerHeight - 200;
        this.Show_FollowUp = false
        this.Black_Stop = this.Page_Length_;
        this.Red_Stop = this.Page_Length_;
        this.main_View = true;
        this.Show_FollowUp = false
        this.Search_By_ = 1;
        this.Registered_By_ = 1;
        this.Get_Lead_Load_Data_ByUser(this.Login_User);
        this.Get_Lead_Load_Data();
        this.Load_User_Month();
        this.Get_Menu_Status(169, this.Login_User);
        this.Get_Menu_Status(38, this.Login_User);
        this.Search_FromDate = this.New_Date(this.Search_FromDate);
        this.Search_ToDate = this.New_Date(this.Search_ToDate);
    }

    Get_Lead_Load_Data() {
        this.issLoading = true;
        this.Student_Service_.Get_Lead_Load_Data().subscribe(
            (Rows) => {
                if (Rows != undefined) {
                    this.issLoading = false;
                    this.Department_Data = Rows.returnvalue.Department;
                    this.Users_Data = Rows.returnvalue.Users;
                    this.Branch_Data = Rows.returnvalue.Branch;

                    this.Department_Temp.Department_Id = 0;
                    this.Department_Temp.Department_Name = "All";
                    this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
                    this.Department_Search = this.Department_Data[0];

                    this.Users_Temp.User_Details_Id = 0;
                    this.Users_Temp.User_Details_Name = "All";
                    this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
                    this.User_Search = this.Users_Data[0];

                    this.Branch_Temp1.Branch_Name = "All";
                    this.Branch_Data.unshift(this.Branch_Temp1);
                    this.Search_Branch = this.Branch_Data[0];
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

    Get_Lead_Load_Data_ByUser(Login_User) {
        this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(
            (Rows) => {
                this.Department_Data = Rows[1].slice();
                this.Department_Temp.Department_Id = 0;
                this.Department_Temp.Department_Name = "All";
                this.Department_Data.unshift(this.Department_Temp);
                this.Department_Search = this.Department_Data[0];

                this.Users_Data = Rows[0].slice();
                this.Users_Temp.User_Details_Id = 0;
                this.Users_Temp.User_Details_Name = "All";
                this.Users_Data.unshift(this.Users_Temp);
                this.User_Search = this.Users_Data[0];

                this.Branch_Data = Rows[2].slice();
                this.Branch_Temp1.Branch_Id = 0;
                this.Branch_Temp1.Branch_Name = "All";
                this.Branch_Data.unshift(this.Branch_Temp1);
                this.Search_Branch = this.Branch_Data[0];
            },
            (Rows) => {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Error Occured", Type: "2" },
                });
            }
        );
    }

    Get_Menu_Status(Menu_id, Login_user_id) {
        this.issLoading = false;
        this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
            (Rows) => {
                if (Rows[0][0] == undefined) {
                    if (Menu_id == 169) {
                        localStorage.removeItem("token");
                        this.router.navigateByUrl("Home_Page");
                    }
                } else if (Rows[0][0].View > 0) {
                    if (Menu_id == 169) {
                        this.Permissions = Rows[0][0];
                        if (this.Permissions == undefined || this.Permissions == null) {
                            localStorage.removeItem("token");
                            this.router.navigateByUrl("Home_Page");
                        }
                    }
                }

                if (Menu_id == 38) {
                    this.Export_Permission = Rows[0][0];

                    if (
                        this.Export_Permission != undefined &&
                        this.Export_Permission != null
                    )
                        this.Export_View = this.Export_Permission.View;
                    else this.Export_View = true;
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

    New_Date(Date_) {
        this.date = Date_;
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        if (this.month < 10) {
            this.month = "0" + this.month;
        }
        this.day = this.date.getDate().toString();
        if (Number.parseInt(this.day) < 10) {
            this.day = "0" + this.day;
        }
        this.date = this.year + "-" + this.month + "-" + this.day;
        return this.date;
    }

    trackByFn(index, item) {
        return index;
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

    Search_Lead_button() {
        this.Black_Start = 1;
        this.Black_Stop = this.Page_Length_;
        this.Red_Start = 1;
        this.Total_Rows = 0;
        this.Red_Stop = this.Page_Length_;
        this.Search_User_Target_Retport();
    }

    Search_User_Target_Retport() {
        var value = 1,
            dept_id = 0,
            branch_id = 0,
            To_User_Id = 0,
            User_Month_Id = 0,
            Traget_Year = 0,
            Inc_Create_Date;

        if (this.Date_checks_Create == true)
            Inc_Create_Date = 1;
        else
            Inc_Create_Date = 0;
        if (this.Search_Year == undefined || this.Search_Year == null)
            Traget_Year = 0;
        else
            Traget_Year = this.Search_Year;

        if (this.To_User_Search != undefined && this.To_User_Search != null)
            if (
                this.To_User_Search.User_Details_Id != undefined &&
                this.To_User_Search.User_Details_Id != null
            )
                To_User_Id = this.To_User_Search.User_Details_Id;

        if (this.Department_Search != undefined && this.Department_Search != null)
            if (
                this.Department_Search.Department_Id != undefined &&
                this.Department_Search.Department_Id != null
            )
                dept_id = this.Department_Search.Department_Id;

        if (this.Search_Branch != undefined && this.Search_Branch != null)
            if (
                this.Search_Branch.Branch_Id != undefined &&
                this.Search_Branch.Branch_Id != null
            )
                branch_id = this.Search_Branch.Branch_Id;

        if (this.User_Month_ != undefined && this.User_Month_ != null)
            if (
                this.User_Month_.User_Month_Id != undefined &&
                this.User_Month_.User_Month_Id != null
            )
                User_Month_Id = this.User_Month_.User_Month_Id;

        if (User_Month_Id == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Month', Type: "3" } });
            return;
        }

        this.issLoading = true;
        // debugger
        this.Student_Service_.Search_User_Target_Retport(
            this.Login_User_Id,
            To_User_Id,
            branch_id,
            dept_id,
            User_Month_Id,
            Traget_Year,
            Inc_Create_Date
        ).subscribe(
            (Rows) => {
                this.issLoading = false;
                // debugger
                if (Rows != null) {
                    this.Student_Data_Search = Rows.returnvalue.Leads;
                    this.Total_Data = this.Student_Data_Search.length;
                }
            },
            (Rows) => {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Error Occured", Type: "2" },
                });
                this.issLoading = false;
            }
        );
    }

    Export() {
        this.Student_Service_.exportExcel(this.Student_Data_Search, 'Student_Report');
    }

    Focus_It() {
        setTimeout("$('[name=Followup_Status]').focus();", 0)
    }

}
