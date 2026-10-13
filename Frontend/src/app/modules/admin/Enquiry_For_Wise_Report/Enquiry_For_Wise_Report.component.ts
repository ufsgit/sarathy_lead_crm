import { Component, OnInit, Input, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of as observableOf, merge } from "rxjs";
import { Student_Service } from "../../../services/Student.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Student } from "../../../models/Student";
import { Branch } from "../../../models/Branch";
import { Course_Service } from "../../../services/Course.Service";
import { User_Details } from "../../../models/User_Details";
import { EmailTemplateService } from "../../../services/email-template.service";
import { Department } from "../../../models/Department";
import { Department_Status } from "../../../models/Department_Status";
import { Enquiry_For } from "../../../models/Enquiry_For";
import { Gender } from "../../../models/Gender";
import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from "@angular/material";
import { FormControl } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import { Remarks } from "../../../models/Remarks";
import { Enquiry_Source } from "../../../models/Enquiry_Source";
import { Student_FollowUp } from "../../../models/Student_FollowUp";
import { sum } from "chartist";
import { Country } from "../../../models/Country";
import { Course } from "../../../models/Course";
import { debug } from "console";

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY",
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "DD/MM/YYYY",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

@Component({
  selector: "app-Enquiry_For_Wise_Report",
  templateUrl: "./Enquiry_For_Wise_Report.component.html",
  styleUrls: ["./Enquiry_For_Wise_Report.component.css"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class Enquiry_For_Wise_ReportComponent implements OnInit {
  Status_Search: Department_Status = new Department_Status();
  User_Search: User_Details = new User_Details();
  To_User_Search: User_Details = new User_Details();
  Search_Name = "";
  Department_Search: Department = new Department();
  Search_Branch: Branch = new Branch();
  Search_Remark: Remarks = new Remarks();
  Search_FromDate: Date = new Date();
  Search_ToDate: Date = new Date();
  Look_In_Date: Boolean = true;
  Date_checks_Create: Boolean = false;

  Remove_Old_Datas: Boolean = false;
  Remove_Old_User_Details: Boolean = false;

  More_Search_Options: boolean = true;

  Enquiry_For_Search: Enquiry_For = new Enquiry_For();
  Enquiry_For_: Enquiry_For = new Enquiry_For();
  Enquiry_For_Temp: Enquiry_For = new Enquiry_For();
  Enquiry_For_Data: Enquiry_For[];

  Program_Course_search: Course = new Course();
  Course_Data_Filter: Course[];
  Course_Data: Course[];

  Department_Data: Department[];
  Users_Data: User_Details[];
  Branch_Data: Branch[];

  Touser_Branch_Data: Branch[];
  Touser_Branch_Id: number;
  Touser_Branch_name: string;

  Enquiry_Source_Data: Enquiry_Source[];
  Enquiry_Source_Temp1: Enquiry_Source = new Enquiry_Source();
  Enquiry_Source_Search: Enquiry_Source = new Enquiry_Source();

  Status_Data: Department_Status[];
  Gender_Data: Gender[];
  Branch_Temp1: Branch = new Branch();
  Users_Temp: User_Details = new User_Details();
  Department_Temp: Department = new Department();
  Status_Temp: Department_Status = new Department_Status();
  missedfollowup_count: number = 1;
  followup_count: number = 1;
  FollowUp_: Student_FollowUp = new Student_FollowUp();

  Lead_Data: Student[];
  Student_Data_Search: Student[];
  Student_Data: Student[];
  Student_Data_Item: Student = new Student();
  Lead_: Student = new Student();
  Search_Div: boolean = false;
  array: any;
  color = "primary";
  mode = "indeterminate";
  value = 50;
  myInnerHeight: number;
  issLoading: boolean;

  columns: any[] = [];

  Login_Department: number;

  Show_FollowUp: boolean = false;
  main_View: boolean = false;
  Student_Selected_Data: Student[];

  Black: boolean = false;
  Red: boolean = false;
  pagePointer: number = 0;
  pageindex2: number = 0;
  pageindex: number = 0;
  Total_Rows: number = 0;
  isLoading = false;
  Search_By_: any;
  Registered_By_: any;
  year: any;
  month: any;
  day: any;
  date: any;
  Login_User: string = "0";
  Menu_Id: number = 163;

  Select_Student: boolean = false;
  Select_View: boolean = false;
  Student_Id: number = 0;
  Student_: Student = new Student();
  count_change: number;

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
  Total_Selected: number;
  Balance_Selected: number = 0;

  Followup_Users_Data: User_Details[];
  Followup_Branch_User_Data: User_Details[];
  Followup_Users_: User_Details = new User_Details();

  Student_Selection_Data_Temp: Student[];

  FollowUp_Status_: Department_Status = new Department_Status();

  Followup_Status_Data: Department_Status[];

  FollowUp_Department_: Department = new Department();
  Followup_Department_Data: Department[];
  Followup_Department_Data_Check: Department[];

  FollowUp_Branch_: Branch = new Branch();
  Followup_Branch_Data: Branch[];
  Branch_Temp: Branch = new Branch();

  Remarks_: Remarks = new Remarks();
  Remarks_Data: Remarks[];
  Remarks_Temp: Remarks = new Remarks();
  Login_Id: number;
  Export_Permission: any;
  Export_View: boolean = false;
  Total_Data: number = 0;
  Permissions: any;
  Login_User_Name: string;
  Login_User_Id: number;
  User_Role: number;
  Usertype: number;

  Search_Status: Department_Status = new Department_Status();

  Is_Registered: any;

  Followup_Date: boolean = false;
  ToStaff_Student_Data: User_Details[];
  Followup_Date_Change: Date;
  Data_Giving: number;

  myInnerHeighttemp: number;
  myTotalHeight: number;

  Country_Data: Country[];
  Country_Temp: Country = new Country();
  Country_Search: Country = new Country();

  Course_Search: Course = new Course();
  Course_Temp: Course = new Course();

  emailTemplates: any[] = [];
  selectedTemplate: any = null;
  selectedStudentsForMail: any[] = [];
  fileSizeError: string;
  dialogRef: any;
  data: any;
  dialog: any;
  Send_Mail_View: boolean = false;
  Show_Send_Mail: boolean = false;
  selectedTemplateId: string = "";
  attachments: File[] = [];
  showError: boolean = false;
  isEditing: any;

  profile_View: boolean = true;
  More_Search_Options_Profile: boolean = true;
  More_Button_view = true;
  Searchdate_By_: any;
  constructor(
    public Student_Service_: Student_Service,
    public Course_Service_: Course_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog,
    public emailTemplateService: EmailTemplateService
  ) { }
  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");
    this.Login_User_Id = Number(this.Login_User);
    this.Login_User_Name = localStorage.getItem("uname");
    this.User_Role = Number(localStorage.getItem("User_Role"));
    this.Login_Department = Number(localStorage.getItem("Login_Department"));
    this.Usertype = Number(localStorage.getItem("User_Type"));
    this.Page_Load();
    if (this.Export_Permission != undefined && this.Export_Permission != null)
      this.Export_View = this.Export_Permission.Edit;
  }

  Page_Load() {
    this.myInnerHeight = window.innerHeight;
    this.myInnerHeight = this.myInnerHeight - 250;
    this.myTotalHeight = this.myInnerHeight;
    this.myTotalHeight = this.myTotalHeight - 40;
    this.myInnerHeighttemp = this.myInnerHeight;
    this.Searchdate_By_ = 1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Stop = this.Page_Length_;
    this.main_View = true;
    this.Search_Enquiryfor_Wise_Report();
    this.Get_Student_PageLoadData_Dropdowns();
    this.Get_Lead_Load_Data_ByUser(this.Login_User);
    this.Get_Menu_Status(168, this.Login_User);
    this.Get_Menu_Status(38, this.Login_User);
    this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
    this.More_Button_view = true;
  }

  Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
      (Rows) => {
        // debugger;

        this.Enquiry_For_Data = Rows[3].slice();
        this.Enquiry_For_Temp.Enquiryfor_Id = 0;
        this.Enquiry_For_Temp.Enquirfor_Name = "All";
        this.Enquiry_For_Data.unshift(Object.assign({}, this.Enquiry_For_Temp));
        this.Enquiry_For_ = this.Enquiry_For_Data[0];
        this.Enquiry_For_Search = this.Enquiry_For_Data[0];
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
          if (Menu_id == 168) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (Rows[0][0].View > 0) {
          if (Menu_id == 168) {
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

  Search_Lead_button() {
    this.Black_Start = 1;
    this.Black_Stop = this.Page_Length_;
    this.Red_Start = 1;
    this.Total_Rows = 0;
    this.Red_Stop = this.Page_Length_;
    this.Search_Enquiryfor_Wise_Report();
  }

  Export() {
    this.Student_Service_.exportExcel(
      this.Student_Data_Search,
      "Status Wise Report"
    );
  }

  Focus_It() {
    setTimeout("$('[name=Followup_Status]').focus();", 0);
  }

  Search_Enquiryfor_Wise_Report() {
    var value = 1,
      dept_id = 0,
      branch_id = 0,
      To_User_Id = 0,
      Enquiryfor_Id = 0,
      look_In_Date_Value = 0,
      Inc_Create_Date;

    if (this.Look_In_Date == true)
      look_In_Date_Value = 1;

    if (this.Date_checks_Create == true)
      Inc_Create_Date = 1;
    else
      Inc_Create_Date = 0;

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

    if (this.Enquiry_For_Search != undefined && this.Enquiry_For_Search != null)
      if (
        this.Enquiry_For_Search.Enquiryfor_Id != undefined &&
        this.Enquiry_For_Search.Enquiryfor_Id != null
      )
        Enquiryfor_Id = this.Enquiry_For_Search.Enquiryfor_Id;

    this.issLoading = true;
    // debugger
    this.Student_Service_.Search_Enquiryfor_Wise_Report(
      this.Login_User_Id,
      look_In_Date_Value,
      moment(this.Search_FromDate).format("YYYY-MM-DD"),
      moment(this.Search_ToDate).format("YYYY-MM-DD"),
      To_User_Id,
      branch_id,
      dept_id,
      Enquiryfor_Id,
      Inc_Create_Date
    ).subscribe(
      (Rows) => {
        this.issLoading = false;
        // debugger
        if (Rows != null) {
          this.Student_Data_Search = Rows.returnvalue.Leads;
          this.Total_Data = this.Student_Data_Search.length;
          if (this.Student_Data_Search.length > 0) {
            this.columns = Object.keys(this.Student_Data_Search[0]);
          }
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

        this.Touser_Branch_Data = Rows[9].slice();
        this.Touser_Branch_Id = this.Touser_Branch_Data[0].Branch_Id;
        this.Touser_Branch_name = this.Touser_Branch_Data[0].Branch_Name;
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Next_Click() {
    if (this.Student_Data_Search.length == this.Page_Length_) {
      this.Black_Start = this.Black_Start + this.Page_Length_;
      this.Black_Stop = this.Black_Stop + this.Page_Length_;
      if (this.missedfollowup_count > 0) {
        this.Red_Start = this.Red_Start + this.missedfollowup_count;
        this.Red_Stop = this.Red_Start + this.Page_Length_;
      }
      this.nextflag = 1;
      if (this.Student_Data_Search.length > 0) {
        this.Search_Enquiryfor_Wise_Report();
      }
    }
  }

  previous_Click() {
    if (this.Black_Start > 1) {
      {
        this.Black_Start = this.Black_Start - this.Page_Length_;
        this.Black_Stop = this.Black_Stop - this.Page_Length_;
      }
      if (this.missedfollowup_count > 0 || this.Red_Start > 1) {
        this.Red_Start = this.Red_Start - this.Page_Length_;
        if (this.Red_Start <= 0) this.Red_Start = 1;
        this.Red_Stop = this.Red_Start + this.Page_Length_;
      }
      this.Total_Rows =
        this.Total_Rows - this.Student_Data_Search.length - this.Page_Length_;
      this.Search_Enquiryfor_Wise_Report();
    }
  }

  goToLink() {
    return;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(["/Student"])
    );
    // window.open('/Student');
    window.open(url, "_blank");
  }

  Date_Change() {
    this.Followup_Date_Change = this.New_Date(
      new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
    );
    // this.Get_ToStaff_Student_DataCount();
  }
}

