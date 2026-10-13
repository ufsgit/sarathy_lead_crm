import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student_Service } from '../../../services/Student.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student } from '../../../models/Student';
import { Branch } from '../../../models/Branch';
import { User_Details } from '../../../models/User_Details';
import { Department } from '../../../models/Department';
import { Department_Status } from '../../../models/Department_Status';
import { Gender } from '../../../models/Gender';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

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
    selector: 'app-Dashboard',
    templateUrl: './Dashboard.component.html',
    styleUrls: ['./Dashboard.component.css'],
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
    // standalone: true,
    // imports: [MatRadioModule],
})
export class DashboardComponent implements OnInit {
    Dashboard_Edit: boolean;
    Dashboard_Save: boolean;
    Dashboard_Delete: boolean;

    missedfollowup_count: number = 1;

    followup_count: number = 1;
    Search_FromDate: Date = new Date();
    Search_ToDate: Date = new Date();
    Look_In_Date: Boolean = true;
    if_total: number = 1;
    if_complete: number = 2;
    If_Today: Boolean = false;
    If_Week: Boolean = false;
    If_Month: Boolean = false;


    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    myInnerHeight: number;
    issLoading: boolean;

    Login_User: string = "0";
    Menu_Id: number = 9;

    myTotalHeight: number;

    Dashboard_Count: number;
    Dashboard_Count1: number;
    Dashboard_Count2: number;
    Dashboard_Count3: number;
    Dashboard_Count4: number;
    Dashboard_Count5: number;
    Dashboard_Count6: number;
    Dashboard_Count7: number;
    Dashboard_Count8: number;
    Dashboard_Count9: number;
    Dashboard_Count10: number;
    Dashboard_Count11: number;
    Dashboard_Count12: number;
    Dashboard_Count13: number;
    Dashboard_Count14: number;
    Dashboard_Count15: number;
    Dashboard_Count16: number;
    uname: string
    Users_Data: User_Details[];
    Users_Temp: User_Details = new User_Details();
    User_Search: User_Details = new User_Details();

    User_Type: number;


    Edit_Page_Permission: any;


    Graph_Button: boolean = false;

    Enquiry_Source_title = '';
    Enquiry_Source_type = 'PieChart';
    Enquiry_Source_data = [

    ];
    Enquiry_Source_columnNames = [];
    Enquiry_Source_options = {
        is3D: true,
    };
    width = 550;
    height = 400;




    Title_Bar = '';
    Type_Bar = 'BarChart';
    Data_Bar = [

    ];
    columnNames_Bar = ['Source', 'Count'];
    options_Bar = {
        is3D: true,
    };

    Permissions: any;

    constructor(public Student_Service_: Student_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }

    ngOnInit() {
        this.Login_User = localStorage.getItem("Login_User");
        this.uname = localStorage.getItem("uname");
        this.User_Type = Number(localStorage.getItem("User_Type"));
        // this.Permissions = Get_Page_Permission(9);
        // if(this.Permissions==undefined || this.Permissions==null)
        // {
        // localStorage.removeItem('token');
        // this.router.navigateByUrl('Home_Page');
        // }
        // else
        {
            // this.Dashboard_Edit=this.Permissions.Edit;
            // this.Dashboard_Save=this.Permissions.Save;
            // this.Dashboard_Delete=this.Permissions.Delete;
            if (Number(this.Login_User) > 0)
                this.Page_Load()
        }
    }

    Page_Load() {
        this.myInnerHeight = (window.innerHeight);
        this.myTotalHeight = this.myInnerHeight
        this.myTotalHeight = this.myTotalHeight - 40;
        this.myInnerHeight = this.myInnerHeight - 100;
        this.Get_Menu_Status(9, this.Login_User);

        this.Get_Dashboard_Count();
        this.Get_Lead_Load_Data_ByUser();


    }

    Get_Menu_Status(Menu_id, Login_user_id) {

        this.issLoading = false;
        this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(Rows => {

            if (Rows[0][0] == undefined) {
                if (Menu_id == 9) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
            }

            if (Rows[0][0].View > 0) {
                if (Menu_id == 9) {
                    this.Permissions = Rows[0][0];
                    if (this.Permissions == undefined || this.Permissions == null) {
                        localStorage.removeItem('token');
                        this.router.navigateByUrl('Home_Page');
                    }

                    this.Dashboard_Edit = this.Permissions.Edit;
                    this.Dashboard_Save = this.Permissions.Save;
                    this.Dashboard_Delete = this.Permissions.Delete;
                }

            }
            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }


    Date_Type(i) {
        // debugger;
        var curr = new Date();
        var curr_temp = new Date();
        var curr_temp1 = new Date()

        if (i == 1) {

            this.Search_FromDate = new Date();
            this.Search_ToDate = new Date();
        }

        if (i == 2) {
            // debugger;

            var first = curr_temp1.getDate() - curr_temp1.getDay() + 1; // First day is the day of the month - the day of the week
            var last = curr_temp.getDate() - curr_temp.getDay() + 1 + 6; // last day is the first day + 6
            var firstDay = new Date(curr_temp1.setDate(first));
            var lastDay = new Date(curr_temp.setDate(last));
            // var firstDayOfMonth = new Date(curr.getFullYear(), curr.getMonth(), 1);
            // var lastDayOfMonth = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);

            // if (lastDay.getMonth() !== curr.getMonth()) 
            // {
            //     lastDay = new Date(lastDay.setMonth(curr.getMonth())); // Set the last day to the last day of the current month
            // }




            this.Search_FromDate = firstDay;
            this.Search_ToDate = lastDay;





        }

        if (i == 3) {

            var date = new Date();
            this.Search_FromDate = new Date(date.getFullYear(), date.getMonth(), 1);
            this.Search_ToDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        }


    }

    Get_Lead_Load_Data_ByUser() {
        // debugger;
        this.Student_Service_.Get_Lead_Load_Data_ByUser(this.Login_User).subscribe(
            (Rows) => {
                // debugger;
                this.Users_Data = Rows[0].slice();
                this.Users_Temp.User_Details_Id = 0;
                this.Users_Temp.User_Details_Name = "All";
                this.Users_Data.unshift(this.Users_Temp);
                this.User_Search = this.Users_Data[0];

            },
            (Rows) => {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Error Occured", Type: "2" },
                });
            }
        );
    }

    Get_Dashboard_Count() {


        var look_In_Date_Value = 0, User_Id_ = 0, User_Type = 0;
        // debugger;
        if (this.User_Search != undefined && this.User_Search != null)
            if (
                this.User_Search.User_Details_Id != undefined &&
                this.User_Search.User_Details_Id != null
            )
                User_Id_ = this.User_Search.User_Details_Id;
        // debugger;
        if (this.Look_In_Date == true) look_In_Date_Value = 1;

        if (this.User_Type != undefined && this.User_Type != null) {
            User_Type = this.User_Type;
        }



        // debugger;
        this.issLoading = true;

        this.Student_Service_.Get_Dashboard_Count(this.Login_User, moment(this.Search_FromDate).format("YYYY-MM-DD"),
            moment(this.Search_ToDate).format("YYYY-MM-DD"), look_In_Date_Value, User_Id_, User_Type)
            .subscribe(Rows => {
                // debugger;
                //log(Rows)
                this.Dashboard_Count = Rows.returnvalue.Leads[0].Data_Count;
                this.Dashboard_Count1 = Rows.returnvalue.Leads[1].Data_Count;
                this.Dashboard_Count2 = Rows.returnvalue.Leads[2].Data_Count;
                this.Dashboard_Count3 = Rows.returnvalue.Leads[3].Data_Count;
                this.Dashboard_Count4 = Rows.returnvalue.Leads[4].Data_Count;
                this.Dashboard_Count5 = Rows.returnvalue.Leads[5].Data_Count;
                this.Dashboard_Count7 = Rows.returnvalue.Leads[6].Data_Count;
                this.Dashboard_Count8 = Rows.returnvalue.Leads[7].Data_Count;
                this.Dashboard_Count9 = Rows.returnvalue.Leads[8].Data_Count;
                this.Dashboard_Count10 = Rows.returnvalue.Leads[9].Data_Count;

                this.Dashboard_Count11 = Rows.returnvalue.Leads[10].Data_Count;
                this.Dashboard_Count12 = Rows.returnvalue.Leads[11].Data_Count;
                this.Dashboard_Count13 = Rows.returnvalue.Leads[12].Data_Count;
                this.Dashboard_Count14 = Rows.returnvalue.Leads[13].Data_Count;
                this.Dashboard_Count15 = Rows.returnvalue.Leads[14].Data_Count;
                this.Dashboard_Count16 = Rows.returnvalue.Leads[15].Data_Count;

                // debugger;

                // var Enquiry_Source_data_temp=new [];
                //Enquiry_Source_data_temp = Rows.returnvalue.Enquiry_Source_data;            
                var result = [];
                this.Enquiry_Source_columnNames = [];
                for (var i in Rows.returnvalue.Enquiry_Source_data) {
                    result.push([Rows.returnvalue.Enquiry_Source_data[i].Enquiry_Source_Name, Rows.returnvalue.Enquiry_Source_data[i].Data_Count]);

                }
                // var data_temp = new google.visualization.DataTable(result);
                this.Enquiry_Source_columnNames.push('Source')
                this.Enquiry_Source_columnNames.push('Count')
                this.Enquiry_Source_data = result;
                this.Data_Bar = result;
                this.issLoading = false;
            },
                Rows => {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
                    this.issLoading = false;
                });

    }
    Click_No1() {
        var time_change = 1;
        this.router.navigateByUrl('/Enquiry_Source_Summary');
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('Time_Change', time_change.toString());
    }
    Click_No2() {
        var time_change = 1;

        this.router.navigateByUrl('/Registration_Summary');
        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('Time_Change', time_change.toString());
    }
    Click_No3() {

        this.router.navigateByUrl('/Pending_FollowUp');
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());


    }
    Click_No4() {
        var time_change = 1;

        this.router.navigateByUrl('/Receipt_Summary_Report');
        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('Time_Change', time_change.toString());


    }
    Click_No5() {
        var time_change = 1;

        this.router.navigateByUrl('/Enquiry_Source_Summary');
        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('Time_Change', time_change.toString());

    }

    Click_No6() {
        var time_change = 1;

        this.router.navigateByUrl('/Application_Report');
        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('Time_Change', time_change.toString());

    }

    Click_No7() {
        var time_change = 1;
        var date_time = 1;
        this.router.navigateByUrl('/Student_Task');
        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('Time_Change', time_change.toString());
        localStorage.setItem('date_time', date_time.toString());



    }

    Click_No9() {
        var time_change = 1;
        var date_time = 1;

        // debugger;


        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('Time_Change', time_change.toString());
        // debugger;
        localStorage.setItem('if_total', this.if_total.toString());
        localStorage.setItem('date_time', date_time.toString());
        this.router.navigateByUrl('/Student_Task');




    }

    Click_No10() {
        var time_change = 1;
        var date_time = 1;

        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('if_complete', this.if_complete.toString());
        localStorage.setItem('Time_Change', time_change.toString());
        localStorage.setItem('date_time', date_time.toString());
        this.router.navigateByUrl('/Student_Task');



    }


    Click_No11(Status_Type_Dashboard) {
        var time_change = 1;
        var date_time = 1;

        localStorage.setItem('Look_In_', this.Look_In_Date.toString());
        localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
        localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
        localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
        localStorage.setItem('if_complete', this.if_complete.toString());
        localStorage.setItem('Time_Change', time_change.toString());
        localStorage.setItem('date_time', date_time.toString());
        localStorage.setItem('Status_Type_Dashboard', Status_Type_Dashboard.toString());
        this.router.navigateByUrl('/Application_Status_Report');



    }

    Click_No8() {
        this.router.navigateByUrl('/Student');

    }




}

