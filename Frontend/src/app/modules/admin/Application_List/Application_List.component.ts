import { Component, OnInit, Input, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of as observableOf, merge } from "rxjs";
import { Student_Service } from "../../../services/Student.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Student } from "../../../models/Student";
import { Branch } from "../../../models/Branch";
import { User_Details } from "../../../models/User_Details";
import { Department } from "../../../models/Department";
import { Department_Status } from "../../../models/Department_Status";
import { Gender } from "../../../models/Gender";
import { Agent } from "../../../models/Agent";
import { ApplicationStatus } from "../../../models/ApplicationStatus";
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
import { Intake } from "../../../models/Intake";
import { Country_Service } from "../../../services/Country.Service";
import { Country } from "../../../models/Country";
import { University_Service } from "../../../services/University.service";
import { University } from "../../../models/University";
import { Intake_Year } from "../../../models/Intake_Year";
import { Applicationdetails } from "../../../models/Applicationdetails";
import { Bph_Status } from "../../../models/Bph_Status";
import { Offerletter_Type } from "../../../models/Offerletter_Type";
import { Application_Status_Service } from "../../../services/Application_status.service";
import { Conditions } from "../../../models/Conditions";
//import { debug } from 'console';

import { environment } from "../../../../environments/environment.js";

import * as io from "socket.io-client";
import { Status_Change_Data } from "app/models/Status_Change_Data";
import { Department_Service } from "../../../services/Department.Service";
import { Course } from "app/models/Course";
import { Course_Service } from "app/services/Course.service";
import { Applicationdocument } from "app/models/Applicationdocument";
import { ApplicationdetailsHistory } from "app/models/ApplicationdetailsHistory";
import { EmailTemplateDialogComponent } from "app/components/email-template-dialog.component";
import { Student_FollowUp } from "app/models/Student_FollowUp";
import { Tagged_User } from "app/models/Tagged_User";
import { Chats } from "app/models/Chats";
import { Chat_Window_Service } from "app/services/Chat_Window.Service";

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
	selector: "app-Application_List",
	templateUrl: "./Application_List.component.html",
	styleUrls: ["./Application_List.component.css"],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	],
})
export class Application_ListComponent implements OnInit {
	url = environment.NotificationPath; //'http://regnewapi.trackbox.co.in:3646/'
	private socket;
	Status_Search: Department_Status = new Department_Status();
	User_Search: User_Details = new User_Details();
	Search_Name = "";
	Department_Search: Department = new Department();
	Search_Branch: Branch = new Branch();
	Search_FromDate: Date = new Date();
	Search_ToDate: Date = new Date();
	Look_In_Date: Boolean = false;
	Active_In: Boolean = true;
	More_Search_Options: boolean = true;
	Today_Click_Flag: number = 0;
	taskCreationData = null;

	Department_Status_Mode_Data1: Department_Status[];
	Department_Status_Mode_Data1_Filter: Department_Status[];
	Department_Status_Mode1_: Department_Status = new Department_Status();
	Login_User_Name: string;

	TodaysApplication: boolean = false;
	PendingApplication: boolean = false;

	tagged_users: Tagged_User[];
	Users: User_Details[];
	messageText: string = "";
	ImageFile_Doc: any;
	ImageFile_: any;
	Display_File_: string; User_Details_Data: User_Details[];
	User_Div: boolean = false;
	Application_fees_paid: string;

	selectedApplicationsIdDetails = {
		University_Id: null,
		Country_Id: null,
		Course_Id: null,
		Application_status_Id: null,

	};
	Student_Id_Search: string = '';
	Department_Data: Department[];
	Users_Data: User_Details[];
	Branch_Data: Branch[];
	Status_Data: Department_Status[];
	Gender_Data: Gender[];
	Branch_Temp1: Branch = new Branch();
	Users_Temp: User_Details = new User_Details();
	Department_Temp: Department = new Department();
	Status_Temp: Department_Status = new Department_Status();
	missedfollowup_count: number = 1;
	followup_count: number = 1;


	Application_Status_Mode_Search_: ApplicationStatus = new ApplicationStatus;
	Application_Status_Mode_Search_Temp: ApplicationStatus = new ApplicationStatus;
	Application_Status_Mode_Search_Data: ApplicationStatus[]


	Intake_Mode_: Intake = new Intake();
	Intake_Mode_Temp: Intake = new Intake();
	Intake_Mode_Data: Intake[];
	Intake_Search: Intake = new Intake();
	group_restriction: number;

	Intake_Year_: Intake_Year = new Intake_Year();
	Intake_Year_Temp: Intake_Year = new Intake_Year();
	Intake_Year_Data: Intake_Year[];
	Intake_Year_Search: Intake_Year = new Intake_Year();

	Lead_Data: Student[];
	Student_Data_Search: Student[];
	Lead_: Student = new Student();
	Search_Div: boolean = false;
	array: any;
	color = "primary";
	mode = "indeterminate";
	value = 50;
	myInnerHeight: number;
	myInnerHeightTwo: number;
	myInnerHeightThree: number;
	myInnerHeightFour: number;
	myTotalHeight: number;
	myHeight: number;
	issLoading: boolean;
	Search_Student_Name = "";

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
	Agent_Id: number;
	Application_status_Id: number;
	Menu_Id: number = 66;


	id_num: any;

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
	Total_Entries: number = 0;
	Total_Data: number = 0;
	Agent_Permissions: any;
	WorkSummary_Div: boolean = false;
	User_Details_Id: number;

	Agent_View: boolean;
	Export_Permission: any;
	Export_View: boolean = false;

	Graph: boolean = false;
	Summary_Sub: boolean = true;

	Agent_Mode_: Agent = new Agent();
	Agent_Mode_Temp: Agent = new Agent();
	Agent_Mode_Data: Agent[];

	Comment_Data: Chats[];

	Application_Status_Mode_: ApplicationStatus = new ApplicationStatus();
	Application_Status_Mode_Temp: ApplicationStatus = new ApplicationStatus();
	Application_Status_Mode_Data: ApplicationStatus[];
	Application_Status_Mode_Data_Temp: ApplicationStatus[];
	Course_Data: Course[];

	Department_Status_Dropdown_: Department_Status = new Department_Status();
	Department_Status_Dropdown_Temp: Department_Status = new Department_Status();
	Department_Status_Dropdown_Data: Department_Status[];

	Department_Status_Mode_: Department_Status = new Department_Status();
	Department_Status_Mode_Temp: Department_Status = new Department_Status();
	Department_Status_Mode_Data: Department_Status[];
	Department_Status_Mode_Data_Temp: Department_Status[];

	Course_Link_Button: boolean = false;
	Country_Temp: Country = new Country();
	University_Temp: University = new University();
	Course_Temp: Course = new Course();
	Department_Status_Mode_Temp1: Department_Status = new Department_Status();





	Course_: Course = new Course();
	Select_TaggedUser: boolean = false;

	Comments_View: boolean = false;
	Application_Country_: Country = new Country();

	Intake_Year_Mode_: Intake_Year = new Intake_Year();
	Intake_Year_Mode_Temp: Intake_Year = new Intake_Year();
	Intake_Year_Mode_Data: Intake_Year[];

	Agent_Search: Agent = new Agent();
	Country_Data: Country[];
	Country_Data_Filter: Country[];
	University_Data_Filter_2: University[];

	Duration_Id: number = 0;
	Edit_save_button_view: boolean = true;

	University_Data: University[];
	Profile_Country_: Country = new Country();
	University_1: University = new University();
	University_Data_Filter: University[];
	Enquiry_Source_title = "";
	Enquiry_Source_type = "BarChart";
	Type_PIe = "PieChart";
	Branchwise_data = [];
	Data_Bar = [];
	Branchwise_columnNames = ["User_Detils_Name", "Data_Count"];
	Enquiry_Source_options = {
		is3D: true,
	};
	width = 550;
	height = 400;
	Permissions: any;
	Is_Status: any;
	Application_status_Id_: number = 0;
	ApplicationDetails_Data: Applicationdetails[];
	Change_Status_Button_View: boolean;
	Change_Status_Button_Permission: any;
	Bph_Status_: Bph_Status = new Bph_Status();
	Bph_Status_Temp: Bph_Status = new Bph_Status();
	Bph_Status_Data: Bph_Status[];
	Application_Status_Edit: string;
	application_details_View: boolean = false;
	Applicationmodal_View: boolean = true;
	Change_Status_View: boolean = false;
	App_List_Student_Name: string;
	To_user_list = "";

	Document_File_Array: any[];
	Offtertype_View: boolean = false;

	ApplicationDetails_: Applicationdetails = new Applicationdetails();
	// Application_Status_:number;
	FollowUp_Branch_1: Branch = new Branch();
	FollowUp_Branch_Task_: Branch = new Branch();
	Followup_Branch_Data: Branch[];
	Followup_Branch_Data_Filter: Branch[];
	Automatic_Department_Data: Department[];
	Automatic_Department_Data_Temp: Department = new Department();
	Automatic_Department_: Department = new Department();
	Notification_Department_: Department = new Department();
	Application_Status_: ApplicationStatus = new ApplicationStatus();
	Student_Id_Transfer: number;
	Status_Id_Transfer: number;
	Save_Student_Approved_Status: number;
	User_Details_Filter: User_Details[];

	Application_Id_Log: number;
	conditions_appid: number;
	ApplicationStatus_Id_Log: number;
	ApplicationStatus_Name_Log: string;
	History_View: boolean = false;
	FeesId_History: number;
	Followup_Users_List_: User_Details = new User_Details();

	ApplicationdetailsHistory_Data: ApplicationdetailsHistory[];
	Bph_Approved_Status: number;
	Old_Application_Status_Id: number;

	Application_Lodgement_permission: any;
	Lodgement_section_View: boolean = false;

	Application_Offerchasing_permission: any;
	Offerchasing_section_View: boolean = false;

	Agent_Applicationlist_Permission: any;
	Agent_Applicationlist_View: boolean = false;

	Application_No_Permission: any;
	Application_No_View: boolean = false;

	Offerletter_Type_: Offerletter_Type = new Offerletter_Type();
	Offerletter_Type_Data: Offerletter_Type[];
	Offerletter_Type_Temp: Offerletter_Type = new Offerletter_Type();

	Conditions_Sub: Conditions = new Conditions();
	Conditions_Sub_Data: Conditions[];
	Conditions_Search_Data: Conditions[];
	Save_Call_Status: boolean = false;
	Tagged_Ids: any;

	ApplicationDocument_Description: string;
	ApplicationDocument_File_Array: any[];
	ApplicationDocument_Array: Applicationdocument[];
	ImageFile_Application: any;
	ApplicationDisplay_File_Name_: string;


	Conditions_Sub_Index: number = -1;

	University_Temp_Data_: University = new University();
	University_Temp_Array: University[];

	Course_Temp_Data_: Course = new Course();

	Country_Temp_Data_: Country = new Country();
	Country_Temp_Array: Country[];

	Chats_: Chats = new Chats();

	Course_Temp_Array: Course[];
	Application_Id_Temp_: number;
	FollowUp_: Student_FollowUp = new Student_FollowUp();
	Course_Data_Filter: Course[];
	FollowUp_Department_Temp: Department = new Department();
	FollowUp_Department_1: Department = new Department();
	Followup_Department_Temp: Department = new Department();
	Transfer_app_Status_Id: number;
	Transfer_app_Student_Id: number;
	Transfer_app_Department_Id: number;
	Transfer_app_Status_Name: string;
	Application_Id_Ref_: number = 0;
	Viewconditions_View: boolean = false;
	condition_viewId: number;
	Enrolled_Application_Only_View_Permission: any;
	Login_Department_Name_: string = "";
	Status_Change_Data_: Status_Change_Data = new Status_Change_Data();
	Pointer_Start_: number;
	Pointer_Stop_: number;
	Total_List_Rows: number = 0;
	Applicatin_View_Permission: any
	View_Permission: any
	Followup_Status_Temp: Department_Status = new Department_Status();
	FollowUp_Status_: Department_Status = new Department_Status();
	Followup_Users_temp: User_Details = new User_Details();
	Followup_sub_b: string;
	Followup_Status_Data: Department_Status[];

	Followup_Users_Data: User_Details[];
	Followup_Users_Data_t: User_Details[];
	Followup_Users_Data_t_Filter: User_Details[];


	Followup_Department_Data: Department[];
	Followup_Department_Data_T: Department[];
	Followup_Department_Data_Check: Department[];

	FollowUp_Department_Task_: Department = new Department();
	FollowUp_Department_T: Department = new Department();

	Login_User_Id: number;
	Followup_Users_: User_Details = new User_Details();
	Followup_Users_Task_: User_Details = new User_Details();
	Is_Follow_: number;


	constructor(
		public Department_Service_: Department_Service,
		public Student_Service_: Student_Service,
		public Country_Service_: Country_Service,
		public University_Service_: University_Service,
		public Chat_Window_Service_: Chat_Window_Service,
		public Course_Service_: Course_Service,
		public Application_Status_Service_: Application_Status_Service,
		private route: ActivatedRoute,
		private router: Router,
		public dialogBox: MatDialog
	) {
		this.socket = io(this.url, { transports: ["websocket"] });
		this.socket = io(this.url);
	}
	ngOnInit() {
		this.Login_User = localStorage.getItem("Login_User");

		this.Login_User_Id = Number(this.Login_User)

		this.Login_User_Name = localStorage.getItem("uname");
		this.Application_status_Id_ = Number(
			localStorage.getItem("Application_status_Id")
		);
		this.Application_Lodgement_permission = Get_Page_Permission(107);
		this.Application_Offerchasing_permission = Get_Page_Permission(108);

		this.Agent_Applicationlist_Permission = Get_Page_Permission(121);
		this.Application_No_Permission = Get_Page_Permission(122);

		this.View_Permission = Get_Page_Permission(113);
		this.Enrolled_Application_Only_View_Permission = Get_Page_Permission(110);
		// if(this.View_Permission.view== 1) this.View_Permission=1;
		// if(this.Enrolled_Application_Only_View_Permission.view== 1) this.Enrolled_Application_Only_View_Permission=1;

		// this.Enrolled_Application_Only_View_Permission = Number(
		// 	localStorage.getItem("Enrolled_Application")
		// );
		// this.View_Permission = Number(
		// 	localStorage.getItem("View_Permission")
		// );
		this.Login_Department_Name_ = localStorage.getItem("Login_Department_Name");
		localStorage.setItem("Application_status_Id", "0");
		{
			this.Page_Load();
		}

		if (
			this.Application_Lodgement_permission != undefined &&
			this.Application_Lodgement_permission != null
		) {
			this.Lodgement_section_View = this.Application_Lodgement_permission.View;
		}

		if (
			this.Application_Offerchasing_permission != undefined &&
			this.Application_Offerchasing_permission != null
		) {
			this.Offerchasing_section_View =
				this.Application_Offerchasing_permission.View;
		}

		if (
			this.Agent_Applicationlist_Permission != undefined &&
			this.Agent_Applicationlist_Permission != null
		) {
			this.Agent_Applicationlist_View =
				this.Agent_Applicationlist_Permission.View;
		}


		if (
			this.Application_No_Permission != undefined &&
			this.Application_No_Permission != null
		) {
			this.Application_No_View =
				this.Application_No_Permission.View;
		}


	}
	Page_Load() {
		this.myInnerHeight = (window.innerHeight);
		this.myInnerHeight = this.myInnerHeight - 230;
		this.Pointer_Start_ = 1;
		this.Pointer_Stop_ = this.Page_Length_;
		this.Search_Div = true;
		this.Search_By_ = 1;
		this.Applicationmodal_View = false;
		this.Registered_By_ = 1;
		this.Is_Status = 1;
		var my_date = new Date();
		this.Search_FromDate = new Date();
		this.Search_FromDate = new Date(
			my_date.getFullYear(),
			my_date.getMonth(),
			1
		);
		this.Search_ToDate = new Date();
		this.Search_ToDate = this.New_Date(this.Search_ToDate);
		// // this.Get_Lead_Load_Data();
		// this.Get_Menu_Status(66, this.Login_User);
		// this.Get_Menu_Status(38,this.Login_User);
		this.Get_Menu_Status(104, this.Login_User);
		this.Get_Menu_Status(75, this.Login_User);
		//this.Get_Menu_Status(113, this.Login_User);
		// this.Load_application_status();
		this.Load_Agents();
		this.Load_OfferLetter_Type();
		this.Load_Application_status_forchangestatus();
		this.Get_Student_PageLoadData_Dropdowns();
		this.Load_Automatic_Departments();
		this.Load_Status_Dropdown();
		// this.Search_Lead_button();
		this.myInnerHeight = window.innerHeight;
		this.myTotalHeight = this.myInnerHeight;
		this.myTotalHeight = this.myTotalHeight - 250;
		this.myInnerHeight = this.myInnerHeight - 50;
		this.myInnerHeightTwo = this.myInnerHeight;
		this.myInnerHeightThree = this.myInnerHeight;
		this.myInnerHeightFour = this.myTotalHeight - 50;
		this.Agent_View = false;
		this.Active_In = false;
		this.myHeight = this.myHeight - 400;
	}

	Get_Menu_Status(Menu_id, Login_user_id) {
		this.issLoading = false;
		this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
			(Rows) => {
				if (Rows[0][0] == undefined) {
					if (Menu_id == 104) {
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				}

				if (Rows[0][0].View > 0) {

					if (Menu_id == 104) {
						this.Permissions = Rows[0][0];
						if (this.Permissions == undefined || this.Permissions == null) {
							localStorage.removeItem("token");
							this.router.navigateByUrl("Home_Page");
						}
					} else if (Menu_id == 75) {
						this.Change_Status_Button_Permission = Rows[0][0];

						if (this.Change_Status_Button_Permission.View == true)
							this.Change_Status_Button_View = true;
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

	// Load_application_status()
	// {
	//     this.issLoading = true;
	//     this.Student_Service_.Load_Application_status_for_user(Number(this.Login_User)).subscribe(Rows => {

	//         if (Rows != null) {
	//             this.Application_Status_Mode_Data = Rows[0];
	//             this.Application_Status_Mode_Temp.Application_status_Id = 0;
	//             this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
	//             this.Application_Status_Mode_Data.unshift(this.Application_Status_Mode_Temp);
	//             this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
	//             this.issLoading = false;
	//         }
	//     },
	//         Rows => {

	//             this.issLoading = false;
	//         });
	// }

	Load_Application_status_forchangestatus() {
		this.issLoading = true;

		this.Student_Service_.Load_Application_status_forchangestatus(
			this.Login_User
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Department_Status_Mode_Data = Rows[0];
					this.Department_Status_Mode_Temp.Department_Status_Id = 0;
					this.Department_Status_Mode_Temp.Department_Status_Name = "Select";
					this.Department_Status_Mode_Data.unshift(
						this.Department_Status_Mode_Temp
					);
					this.Department_Status_Mode_Data_Temp =
						this.Department_Status_Mode_Data;
					this.Department_Status_Mode_ = this.Department_Status_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}



	Close_Click() { }
	Close_Comment() {
		this.Comments_View = false;
		this.Search_Div = true;
		this.Search_Application_List();
		this.clr_Chat_Window(); // Add this to clear tagged users
		// this.Clr_ApplicationDetails();
	}
	Next_Click() {

		if (this.ApplicationDetails_Data.length == this.Page_Length_) {
			this.Pointer_Start_ = this.Pointer_Start_ + this.Page_Length_;
			this.Pointer_Stop_ = this.Pointer_Stop_ + this.Page_Length_;
			this.nextflag = 1;
			if (this.ApplicationDetails_Data.length > 0) {
				this.Search_Application_List();
			}
		} else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No Other Details", Type: "3" },
			});
		}
	}

	previous_Click() {

		if (this.Pointer_Start_ > 1) {
			this.Pointer_Start_ = this.Pointer_Start_ - this.Page_Length_;
			this.Pointer_Stop_ = this.Pointer_Stop_ - this.Page_Length_;
		}
		this.Total_List_Rows =
			this.Total_List_Rows - this.ApplicationDetails_Data.length - this.Page_Length_;
		if (this.Total_List_Rows < 0) {
			this.Total_List_Rows = 0;
		}
		this.Search_Application_List();
	}
	Search_Lead_button() {
		this.Pointer_Start_ = 1;
		this.Pointer_Stop_ = this.Page_Length_;
		this.Total_List_Rows = 0;
		// this.Search_Student_Report();
		this.Search_Application_List();
	}

	Search_More_Options() {
		if (this.More_Search_Options == true) {
			this.More_Search_Options = false;
		} else {
			this.More_Search_Options = true;
		}
	}

	Filter_Todays_Application() {
		this.TodaysApplication = true;
		this.PendingApplication = false;
		this.Search_Application_List();
	}

	Filter_Pending_Application() {
		this.TodaysApplication = false;
		this.PendingApplication = true;
		this.Search_Application_List();
	}
	Search_Application_List() {
		this.issLoading = true;

		var Is_View_, Enrolled_Application_View_, Department_Status_Id_ = 0, search_name_ = '', Agent_Id_ = 0, User_Id = 0, Student_Id = '0',
			look_In_Date_Value = 0, Application_Country_Id_ = 0;

		if (this.Look_In_Date == true) look_In_Date_Value = 1;
		if (this.Department_Status_Dropdown_ != undefined && this.Department_Status_Dropdown_ != null)
			if (
				this.Department_Status_Dropdown_.Department_Status_Id != undefined &&
				this.Department_Status_Dropdown_.Department_Status_Id != null
			)
				Department_Status_Id_ = this.Department_Status_Dropdown_.Department_Status_Id;

		if (
			this.Search_Student_Name != undefined &&
			this.Search_Student_Name != null &&
			this.Search_Student_Name != ""
		)
			search_name_ = this.Search_Student_Name;

		if (this.Agent_Mode_ != undefined && this.Agent_Mode_ != null)
			if (
				this.Agent_Mode_.Agent_Id != undefined &&
				this.Agent_Mode_.Agent_Id != null
			)
				Agent_Id_ = this.Agent_Mode_.Agent_Id;


		if (this.Application_Country_ != undefined && this.Application_Country_ != null)
			if (
				this.Application_Country_.Country_Id != undefined &&
				this.Application_Country_.Country_Id != null
			)
				Application_Country_Id_ = this.Application_Country_.Country_Id;

		if (this.User_Search != undefined && this.User_Search != null)
			if (
				this.User_Search.User_Details_Id != undefined &&
				this.User_Search.User_Details_Id != null
			)
				User_Id = this.User_Search.User_Details_Id;
		console.log('this.User_Search.User_Details_Id: ', this.User_Search.User_Details_Id);

		console.log("serach user id", User_Id);

		if (this.Student_Id_Search != undefined && this.Student_Id_Search != null)
			Student_Id = this.Student_Id_Search;
		if (this.Student_Id_Search == '')
			Student_Id = '0'

		// if(this.View_Permission!=undefined)
		// {
		// 	if(this.View_Permission.View==undefined)
		// {
		// 	Is_View_=0
		// }
		// }
		// else(Is_View_=0);



		// 
		// if(this.Enrolled_Application_Only_View_Permission!=undefined)
		// {
		// 	if(this.Enrolled_Application_Only_View_Permission.View==undefined)
		// {
		// 	Enrolled_Application_View_=0
		// }
		// }
		// else(Enrolled_Application_View_=0);



		if (this.Enrolled_Application_Only_View_Permission == undefined) {

			Enrolled_Application_View_ = 0

		}
		else (Enrolled_Application_View_ = 1);


		if (this.View_Permission == undefined) {

			Is_View_ = 0

		}
		else (Is_View_ = 1);


		if (this.TodaysApplication) {
			this.Today_Click_Flag = 1; // Today clicked
		} else if (this.PendingApplication) {
			this.Today_Click_Flag = 2; // Pending clicked
		} else {
			this.Today_Click_Flag = 0; // None clicked
		}

		console.log('this.Today_Click_Flag : ', this.Today_Click_Flag);
		//console.log(this.View_Permission)

		this.Student_Service_.Search_Application_List(
			this.Login_User,
			Enrolled_Application_View_, this.Pointer_Start_,
			this.Pointer_Stop_,
			this.Page_Length_, Is_View_, Department_Status_Id_, search_name_, Agent_Id_, User_Id,
			Student_Id, this.Today_Click_Flag,
			moment(this.Search_FromDate).format("YYYY-MM-DD"),
			moment(this.Search_ToDate).format("YYYY-MM-DD"),
			look_In_Date_Value, Application_Country_Id_
		).subscribe(
			(Rows) => {

				this.ApplicationDetails_Data = Rows[0];
				// this.Total_Data = this.ApplicationDetails_Data[this.ApplicationDetails_Data.length - 1].Application_details_Id;
				// this.ApplicationDetails_Data.pop();
				this.missedfollowup_count = 0;
				this.followup_count = 0;



				// for (var i = 0; i < this.ApplicationDetails_Data.length; i++) {

				// 	this.ApplicationDetails_Data[i].RowNo_sort = i + 1 + this.Total_List_Rows;
				// }
				// this.ApplicationDetails_Data = this.ApplicationDetails_Data.sort(
				// 	(a, b) => b.RowNo_sort - a.RowNo_sort
				// );
				this.TodaysApplication = false;
				this.PendingApplication = false;
				if (this.ApplicationDetails_Data.length > 0)
					this.Total_List_Rows =
						this.Total_List_Rows + this.ApplicationDetails_Data.length;
				this.issLoading = false;
				if (this.ApplicationDetails_Data.length == 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "No Details Found", Type: "3" },
					});
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
	//   Change_Bph_Status(application_details_u:any,i)
	//   {
	//

	//   this.Student_Id_Transfer=application_details_u.Student_Id;
	//   this.Application_Status_.Remark=application_details_u.Remark;
	//   this.Application_Id_Log=application_details_u.Application_details_Id;
	//   this.ApplicationStatus_Id_Log=application_details_u.Application_status_Id;
	//   this.ApplicationStatus_Name_Log=application_details_u.Application_Status_Name;
	//   this.Application_Id_Temp_ = application_details_u.Application_details_Id
	//       this.Change_Status_View=true;
	//       if(this.Offerchasing_section_View==true)
	//       {
	//         this.Offtertype_View=true;
	//       }

	//       this.Search_Div = false;

	//       for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
	//         if (
	//             application_details_u.Transfer_Department_Id ==
	//             this.Automatic_Department_Data[j].Department_Id
	//         )
	//             this.Automatic_Department_ = this.Automatic_Department_Data[j];
	//     }

	// for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
	//         if (
	//             application_details_u.Notification_Department_Id ==
	//             this.Automatic_Department_Data[k].Department_Id
	//         )
	//             this.Notification_Department_ = this.Automatic_Department_Data[k];
	//     }

	//   }

	Change_Bph_Status(application_details_u: any, i) {

		// debugger;
		this.Department_Status_Mode_Data1 = [];
		this.Department_Status_Mode_Data1_Filter = [];
		//this.Department_Status_Mode1_=null;

		this.Department_Status_Mode1_.Department_Status_Id = application_details_u.Department_Status_Id;
		this.Department_Status_Mode1_.Department_Status_Name = application_details_u.Department_Status_Name;

		this.FollowUp_Branch_1.Branch_Id = application_details_u.Branch_Id;
		this.FollowUp_Branch_1.Branch_Name = application_details_u.Branch_Name;

		this.FollowUp_Department_1.Department_Id = application_details_u.Department_Id;
		this.FollowUp_Department_1.Department_Name = application_details_u.Department_Name;

		this.Followup_Users_List_.User_Details_Id = application_details_u.To_User_Id;
		this.Followup_Users_List_.User_Details_Name = application_details_u.To_Staff_Name;

		this.App_List_Student_Name = application_details_u.Student_Name;
		this.ApplicationDetails_.Next_FollowUp_Date = new Date();
		this.ApplicationDetails_.Next_FollowUp_Date = this.New_Date(
			this.ApplicationDetails_.Next_FollowUp_Date
		);

		//   this.Application_Status_Edit=application_details_u.;
		this.Student_Id_Transfer = application_details_u.Student_Id;
		this.Application_Status_.Remark = application_details_u.Remark;
		this.Application_Id_Log = application_details_u.Application_details_Id;
		this.ApplicationStatus_Id_Log = application_details_u.Application_status_Id;
		this.ApplicationStatus_Name_Log =
			application_details_u.Application_Status_Name;

		this.group_restriction = application_details_u.Group_Restriction;

		if (this.group_restriction > 0) {
			this.Load_Application_status_forchangestatus_restriction(
				this.group_restriction
			);
		} else {
			this.Application_Status_Mode_Data =
				this.Application_Status_Mode_Data_Temp;
		}

		this.Application_Id_Temp_ = application_details_u.Application_details_Id;
		this.Change_Status_View = true;

		if (this.Offerchasing_section_View == true) {
			this.Offtertype_View = true;
		}


		this.Search_Div = false;

		//   for (var h = 0; h < this.Application_Status_Mode_Data.length; h++) {
		//     if (
		//         application_details_u.Application_status_Id ==
		//         this.Application_Status_Mode_Data[h].Application_status_Id
		//     )
		//         this.Application_Status_Mode_ = this.Application_Status_Mode_Data[h];
		// }

		// 	if (this.Application_Status_.Transfer_Status.toString() == "1")
		//     this.Application_Status_.Transfer_Status = true;
		//    else this.Application_Status_.Transfer_Status = false;
		;
		this.ApplicationDetails_.Application_No = application_details_u.Application_No;
		;


		// this.Department_Status_Mode_Temp1.Department_Status_Id = application_details_u.Department_Status_Id;
		// this.Department_Status_Mode_Temp1.Department_Status_Name = application_details_u.Department_Status_Name;
		// this.Department_Status_Mode1_ = Object.assign({}, this.Department_Status_Mode_Temp1);

		for (var n = 0; n < this.Department_Status_Mode_Data.length; n++) {
			if (application_details_u.Department_Status_Id == this.Department_Status_Mode_Data[n].Department_Status_Id)
				this.Department_Status_Mode_ = this.Department_Status_Mode_Data[n];
		}
		;
		for (var m = 0; m < this.Agent_Mode_Data.length; m++) {
			if (application_details_u.Agent_Id == this.Agent_Mode_Data[m].Agent_Id)
				this.Agent_Mode_ = this.Agent_Mode_Data[m];
		}
		for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
			if (
				application_details_u.Transfer_Department_Id ==
				this.Automatic_Department_Data[j].Department_Id
			)
				this.Automatic_Department_ = this.Automatic_Department_Data[j];
		}
		this.Offerletter_Type_.Offerletter_Type_Id = 1;
		//     if (this.Application_Status_.Notification_Status.toString() == "1")
		//     this.Application_Status_.Notification_Status = true;
		//    else this.Application_Status_.Notification_Status = false;

		for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
			if (
				application_details_u.Notification_Department_Id ==
				this.Automatic_Department_Data[k].Department_Id
			)
				this.Notification_Department_ = this.Automatic_Department_Data[k];
		}

		this.Load_Conditions_Subdata_Edit(this.Application_Id_Log);


	}
	Load_Conditions_Subdata_Edit(Application_details_Id_) {
		;
		this.Student_Service_.Load_Conditions_Subdata_Edit(Application_details_Id_).subscribe(
			(Rows) => {
				;
				if (Rows != null) {
					this.Conditions_Sub_Data = Rows[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);

	}



	Load_Application_status_forchangestatus_restriction(Group_Restriction_) {
		this.issLoading = true;

		this.Student_Service_.Load_Application_status_forchangestatus_restriction(
			Group_Restriction_
		).subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Application_Status_Mode_Data = Rows[0];

					this.Application_Status_Mode_Temp.Application_status_Id = 0;
					this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
					this.Application_Status_Mode_Data.unshift(
						this.Application_Status_Mode_Temp
					);
					//this.Application_Status_Mode_Data_Temp=this.Application_Status_Mode_Data
					this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Clr_Bph_Status() {
		if (
			this.Application_Status_Mode_Data != null &&
			this.Application_Status_Mode_Data != undefined
		)
			this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];

		this.Application_Status_.Remark = "";
		this.ApplicationDetails_.Application_No = ''
		this.Application_Status_.Notification_Status = false;
		this.Application_Status_.Transfer_Status = false;
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
	}

	//   Save_Application_Status() {
	//       if (
	//           this.Application_Status_Mode_ == undefined ||
	//           this.Application_Status_Mode_ == null ||
	//           this.Application_Status_Mode_.Application_status_Id == undefined ||
	//           this.Application_Status_Mode_.Application_status_Id == 0
	//       ) {
	//           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//               panelClass: "Dialogbox-Class",
	//               data: { Message: "Select Application_Status", Type: "3" },
	//           });
	//           return;
	//       }

	//       if (
	//           this.ApplicationDetails_.Bph_Remark == undefined ||
	//           this.ApplicationDetails_.Bph_Remark == null ||
	//           this.ApplicationDetails_.Bph_Remark == ""
	//       ) {
	//           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//               panelClass: "Dialogbox-Class",
	//               data: { Message: "Enter Remark", Type: "3" },
	//           });
	//           return;
	//       }
	//       // this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;

	//       const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//           panelClass: "Dialogbox-Class",
	//           data: {
	//               Message: "Do you want to Change Status?",
	//               Type: true,
	//               Heading: "Confirm",
	//           },
	//       });

	//       dialogRef.afterClosed().subscribe((result) => {
	//           this.Application_Status_ = this.Application_Status_Mode_.Application_status_Id;
	//           if (result == "Yes") {
	//               this.issLoading = true;

	//               this.Student_Service_.Save_Application_Status(
	//                   this.Application_Status_Edit,
	//                   this.Login_User,
	//                   this.Application_Status_,
	//                   this.ApplicationDetails_.Bph_Remark
	//               ).subscribe(
	//                   (Save_status) => {
	//                       if (Number(Save_status[0][0].Application_details_Id_) == -2) {
	//                           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                               panelClass: "Dialogbox-Class",
	//                               data: { Message: "Counsellor User not found", Type: "2" },
	//                           });

	//                       }

	//                       else if (Number(Save_status[0][0].Application_details_Id_) > 0) {
	//                         //   this.Remove_Activte_Visiblility = false;
	//                         //   this.Activte_Visiblility = false;

	//                           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                               panelClass: "Dialogbox-Class",
	//                               data: { Message: "Saved", Type: "false" },
	//                           });

	//                           this.Search_Application_List();
	//                           this.Clr_Bph_Status();
	//                       } else {
	//                           const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                               panelClass: "Dialogbox-Class",
	//                               data: { Message: "Error Occured", Type: "2" },
	//                           });
	//                       }
	//                       this.issLoading = false;
	//                   },
	//                   (Rows) => {
	//                       this.issLoading = false;
	//                       const dialogRef = this.dialogBox.open(DialogBox_Component, {
	//                           panelClass: "Dialogbox-Class",
	//                           data: { Message: "Error Occured", Type: "2" },
	//                       });
	//                   }
	//               );
	//           }
	//       });
	//   }
	Close_Click_Change_Status() {
		this.Change_Status_View = false;
		this.Offtertype_View = false;
		this.Viewconditions_View = false;
		this.Search_Div = true;
		this.Is_Follow_ = 0;
		this.Search_Application_List();
		this.Clr_Change_Status()
	}
	Clr_Change_Status() {
		if (
			this.Agent_Mode_Data != null &&
			this.Agent_Mode_Data != undefined
		)
			this.Agent_Mode_ = this.Agent_Mode_Data[0];
		if (
			this.Application_Status_Mode_Data != null &&
			this.Application_Status_Mode_Data != undefined
		)
			this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
		this.ApplicationDetails_.Application_No = ''

		this.ApplicationDetails_.Remark = "";
		this.FollowUp_Branch_1 = new Branch();;
		this.FollowUp_Department_1 = new Department();
		this.Followup_Users_List_ = new User_Details();
		// this.ApplicationDetails_.Remark=''
	}

	Load_Automatic_Departments() {
		this.issLoading = true;
		this.Student_Service_.Load_Automatic_Departments().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Automatic_Department_Data = Rows[0].slice();
					this.Automatic_Department_Data_Temp.Department_Id = 0;
					this.Automatic_Department_Data_Temp.Department_Name = "Select";
					this.Automatic_Department_Data.unshift(
						Object.assign({}, this.Automatic_Department_Data_Temp)
					);
					this.Automatic_Department_ = this.Automatic_Department_Data[0];
					this.Notification_Department_ = this.Automatic_Department_Data[0];

					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Save_ApplicationStatusforstatuschange() {
		if (
			this.Application_Status_Mode_ == undefined ||
			this.Application_Status_Mode_ == null ||
			this.Application_Status_Mode_.Application_status_Id == undefined ||
			this.Application_Status_Mode_.Application_status_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Application_Status", Type: "3" },
			});
			return;
		}

		this.Application_Status_.Application_status_Id =
			this.Application_Status_Mode_.Application_status_Id;
		this.Application_Status_.Application_Status_Name =
			this.Application_Status_Mode_.Application_Status_Name;

		this.Application_Status_.Transfer_Department_Id =
			this.Automatic_Department_.Department_Id;
		this.Application_Status_.Transfer_Department_Name =
			this.Automatic_Department_.Department_Name;

		this.Application_Status_.Notification_Department_Id =
			this.Notification_Department_.Department_Id;
		this.Application_Status_.Notification_Department_Name =
			this.Notification_Department_.Department_Name;

		this.issLoading = true;
		this.Application_Status_Service_.Save_ApplicationStatusforstatuschange(
			this.Application_Status_
		).subscribe(
			(Save_status) => {
				Save_status = Save_status[0];
				if (Number(Save_status[0].Application_status_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					//   this.Search_Application_Status();
					this.Clr_Bph_Status();
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
					data: { Message: Rows.error, Type: "2" },
				});
			}
		);
	}


	Add_Comment(application_details_u: any, i) {

		this.clr_Chat_Window();
		// Save required variable for fetching department statuses to selectedApplicationsIdDetails
		this.selectedApplicationsIdDetails.Country_Id =
			application_details_u.Country_Id;
		this.selectedApplicationsIdDetails.Course_Id =
			application_details_u.Course_Id;
		this.selectedApplicationsIdDetails.University_Id =
			application_details_u.University_Id;

		this.selectedApplicationsIdDetails.Application_status_Id = application_details_u.Application_status_Id


		this.Department_Status_Mode_Data1 = [];
		this.Department_Status_Mode_Data1_Filter = [];
		this.Department_Status_Mode1_ = null;

		this.application_details_View = false;
		this.application_details_View = false;
		this.Change_Status_View = false;
		// this.list_view=false;
		this.Comments_View = true;
		this.Search_Div = false
		//   this.Application_Status_Edit=application_details_u.;
		this.App_List_Student_Name = application_details_u.Student_Name;

		this.Student_Id_Transfer = application_details_u.Student_Id;
		this.Application_Status_.Remark = application_details_u.Remark;
		this.Application_Id_Log = application_details_u.Application_details_Id;
		this.ApplicationStatus_Id_Log = application_details_u.Application_status_Id;
		this.Application_fees_paid = application_details_u.Application_Fees_Paid;
		this.ApplicationStatus_Name_Log =
			application_details_u.Application_Status_Name;

		this.group_restriction = application_details_u.Group_Restriction;

		if (this.group_restriction > 0) {
			this.Load_Application_status_forchangestatus_restriction(
				this.group_restriction
			);
		} else {
			this.Application_Status_Mode_Data =
				this.Application_Status_Mode_Data_Temp;
		}

		this.Application_Id_Temp_ = application_details_u.Application_details_Id;
		// this.Change_Status_View = true;

		this.ApplicationDetails_.Followup_Date = new Date();
		this.ApplicationDetails_.Followup_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
		);
		this.ApplicationDetails_.Deadline_Date = new Date();
		this.ApplicationDetails_.Deadline_Date = this.New_Date(
			new Date(moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
		);



		;
		this.ApplicationDetails_.Application_No = application_details_u.Application_No;
		;
		for (var n = 0; n < this.Department_Status_Mode_Data.length; n++) {
			if (application_details_u.Department_Status_Id == this.Department_Status_Mode_Data[n].Department_Status_Id)
				this.Department_Status_Mode_ = this.Department_Status_Mode_Data[n];
		}
		;
		for (var m = 0; m < this.Agent_Mode_Data.length; m++) {
			if (application_details_u.Agent_Id == this.Agent_Mode_Data[m].Agent_Id)
				this.Agent_Mode_ = this.Agent_Mode_Data[m];
		}
		for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
			if (
				application_details_u.Transfer_Department_Id ==
				this.Automatic_Department_Data[j].Department_Id
			)
				this.Automatic_Department_ = this.Automatic_Department_Data[j];
		}
		this.Offerletter_Type_.Offerletter_Type_Id = 1;
		//     if (this.Application_Status_.Notification_Status.toString() == "1")
		//     this.Application_Status_.Notification_Status = true;
		//    else this.Application_Status_.Notification_Status = false;

		for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
			if (
				application_details_u.Notification_Department_Id ==
				this.Automatic_Department_Data[k].Department_Id
			)
				this.Notification_Department_ = this.Automatic_Department_Data[k];
		}


		// Save all required data to this.taskCreationData to create task when changing status
		this.taskCreationData = application_details_u;
		this.taskCreationData.Student_Task_Id = 0;
		this.taskCreationData.Department_Id = this.Department_Data;
		this.taskCreationData.By_User_Id = this.Login_User_Id;
		this.taskCreationData.By_User_Name = localStorage.getItem("uname");
		this.taskCreationData.Department_Name = localStorage.getItem(
			"Login_Department_Name"
		);
		this.taskCreationData.Department_Id =
			localStorage.getItem("Login_Department");
		this.taskCreationData.Task_Group_Id = 4;
		this.taskCreationData.To_User = 0;
		this.taskCreationData.To_User_Name = "";
		this.taskCreationData.Followup_Date = this.findNewDate();
		this.taskCreationData.Remark = "";

		this.Load_Conditions_Subdata_Edit(this.Application_Id_Log);

		this.Get_Comments(this.Application_Id_Log)


	}

	findNewDate() {
		;
		const date = new Date();
		const nowDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		return nowDate;
	}

	clr_Chat_Window() {
		;
		this.tagged_users = [];
		this.Users = [];
		this.messageText = "";
		this.ImageFile_ = [];
		this.Display_File_ = "";
		this.User_Details_Data = [];
		this.User_Div = false;
	}


	Get_Comments(Application_Id_Log) {
		//  this.Clr_ApplicationDetails();
		this.issLoading = true;
		// debugger
		this.Student_Service_.Get_Comments(Application_Id_Log).subscribe(
			(Rows) => {
				// debugger
				// console.log('Rows: ', Rows);
				// console.log('Rows[0]: ', Rows[0]);
				this.Comment_Data = Rows[0];
				// console.log('this.Comment_Data: ', this.Comment_Data);
				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}
	Save_Lodgemet() {

		// if (
		// 	this.Application_Offerchasing_permission != undefined &&
		// 	this.Application_Offerchasing_permission != null
		// ) {
		// 	if (
		// 		this.Offerletter_Type_.Offerletter_Type_Id == undefined ||
		// 		this.Offerletter_Type_.Offerletter_Type_Id == null ||
		// 		this.Offerletter_Type_.Offerletter_Type_Id == 0
		// 	) {
		// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 			panelClass: "Dialogbox-Class",
		// 			data: { Message: "Select Offer Type", Type: "3" },
		// 		});
		// 		return;
		// 	}
		// }
		if (
			this.Department_Status_Mode1_ == undefined ||
			this.Department_Status_Mode1_ == null ||
			this.Department_Status_Mode1_.Department_Status_Id == null ||
			this.Department_Status_Mode1_.Department_Status_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Status", Type: "3" },
			});
			return;
		}

		if (this.Department_Status_Mode1_.FollowUp) {
			if (this.ApplicationDetails_.Next_FollowUp_Date == null) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Choose Follow Up on", Type: "3" },
				});
				return;
			}
		} else {
			this.ApplicationDetails_.Next_FollowUp_Date = new Date();
			this.ApplicationDetails_.Next_FollowUp_Date = this.New_Date(
				this.ApplicationDetails_.Next_FollowUp_Date
			);
		}


		if (
			this.ApplicationDetails_.Remark == undefined ||
			this.ApplicationDetails_.Remark == null ||
			this.ApplicationDetails_.Remark == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Remark", Type: "3" },
			});
			return;
		}



		if (this.Offerletter_Type_.Offerletter_Type_Id == 1) {
			if (this.Conditions_Sub_Data == null || this.Conditions_Sub_Data == undefined) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Add atleast one condition", Type: "3" },
				});
				return;
			}
		}
		if (
			this.FollowUp_Branch_1 == null ||
			this.FollowUp_Branch_1 == undefined ||
			this.FollowUp_Branch_1.Branch_Id == undefined ||
			this.FollowUp_Branch_1.Branch_Id == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "select Branch", Type: "3" },
			});
			return;
		}


		if (
			this.FollowUp_Department_1 == null ||
			this.FollowUp_Department_1 == undefined ||
			this.FollowUp_Department_1.Department_Id == undefined ||
			this.FollowUp_Department_1.Department_Id == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
			return;
		}

		if (
			this.Followup_Users_List_ == null ||
			this.Followup_Users_List_ == undefined ||
			this.Followup_Users_List_.User_Details_Id == undefined ||
			this.Followup_Users_List_.User_Details_Id == null
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select To User", Type: "3" },
			});
			return;
		}

		this.Status_Change_Data_.Application_details_Id = this.Application_Id_Log;
		this.Status_Change_Data_.LoginUser = Number(this.Login_User);
		this.Status_Change_Data_.Application_status_Id =
			this.Department_Status_Mode1_.Department_Status_Id;
		this.Status_Change_Data_.Application_Status_Name =
			this.Department_Status_Mode1_.Department_Status_Name;

		this.Status_Change_Data_.Class_Id =
			this.Department_Status_Mode1_.Class_Id;
		this.Status_Change_Data_.Class_Name =
			this.Department_Status_Mode1_.Class_Name;
		this.Status_Change_Data_.Class_Order =
			this.Department_Status_Mode1_.Class_Order;
		this.Status_Change_Data_.FollowUp = this.Department_Status_Mode1_.FollowUp;



		this.Status_Change_Data_.Agent_Id = this.Agent_Mode_.Agent_Id;
		this.Status_Change_Data_.Application_No =
			this.ApplicationDetails_.Application_No;
		this.Status_Change_Data_.Agent_Name = this.Agent_Mode_.Agent_Name;
		this.Status_Change_Data_.Offerletter_Type_Id =
			this.Offerletter_Type_.Offerletter_Type_Id;
		this.Status_Change_Data_.Offerletter_Type_Name =
			this.Offerletter_Type_.Offerletter_Type_Name;
		this.Status_Change_Data_.Remark =
			this.ApplicationDetails_.Remark;
		this.Status_Change_Data_.Next_FollowUp_Date = this.New_Date(
			new Date(this.ApplicationDetails_.Next_FollowUp_Date)
		);
		// this.Status_Change_Data_.Next_FollowUp_Date = this.ApplicationDetails_.Next_FollowUp_Date;

		this.Status_Change_Data_.Department_Id = this.FollowUp_Department_1.Department_Id;
		this.Status_Change_Data_.Department_Name = this.FollowUp_Department_1.Department_Name;
		this.Status_Change_Data_.Branch_Id = this.FollowUp_Branch_1.Branch_Id;
		this.Status_Change_Data_.Branch_Name = this.FollowUp_Branch_1.Branch_Name;

		this.Status_Change_Data_.To_User_Id = this.Followup_Users_List_.User_Details_Id;
		this.Status_Change_Data_.To_User_Name = this.Followup_Users_List_.User_Details_Name;


		this.Status_Change_Data_.Conditions_Array = this.Conditions_Sub_Data;
		this.issLoading = true;
		this.Student_Service_.Save_Lodgemet(this.Status_Change_Data_).subscribe(
			(Save_status) => {



				// this.Student_Service_.Save_Lodgemet_Mail(Save_status,this.Status_Change_Data_).subscribe(
				// 	  (Save_status2) => {

				// 	   },
				// 	  (Rows2) => {
				// 		this.issLoading = false;
				// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
				// 		  panelClass: "Dialogbox-Class",
				// 		  data: { Message: "Mail Error Occured", Type: "2" },
				// 		});
				// 	  }
				// 	);

				if (Number(Save_status[0].Application_details_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
				}

				else if (Number(Save_status[0].Application_details_Id_) == -1) {

					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: {
							Message:
								" Selected status only used with Enrolled Student",
							Type: "3",
						},
					});
					this.issLoading = false;
					return;
				}
				// this.Total_Rows = this.Total_Rows - this.Student_Data.length;
				// this.Search_Student();
				this.Conditions_Sub_Data = [];
				this.ApplicationDetails_.Remark = "";
				this.Department_Status_Mode1_ = null
				this.Close_Click_Change_Status();


				// this.Get_ApplicationDetails();
				// this.Clr_Bph_Status();
				// this.Search_Student();
				// this.Search_Lead_button();
				this.Transfer_app_Status_Id = Save_status[0].Application_Status_Id_;
				this.Transfer_app_Student_Id = Save_status[0].Student_Id_;
				this.Transfer_app_Department_Id = Save_status[0].Transfer_department_;
				this.Transfer_app_Status_Name = Save_status[0].Application_Status_Name_;
				this.Application_Id_Ref_ = Save_status[0].Application_details_Id_;

				if (Save_status[0].Transferdept_Tik_ == 1) {
					this.Transfer_Cofirmation("");
				} else if (Save_status[0].Notification_Tik_ == 1) {
					if (Number(this.Login_User) != Save_status[0].To_User_Id_) {
						var message = {
							Student_Name: Save_status[0].Student_Name_,
							From_User_Name: Save_status[0].From_User_Name_,
							Notification_Type_Name: Save_status[0].Notification_Type_Name_,
							Entry_Type: Save_status[0].Entry_Type_,
							To_User: Save_status[0].To_User_Id_,
							Notification_Id: Save_status[0].Notification_Id_,
							Student_Id: Save_status[0].Student_Id_,
						};
						this.socket.emit("new-message", message);
					}
				}
				this.Search_Application_List();
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

	Load_OfferLetter_Type() {
		this.issLoading = true;
		this.Student_Service_.Load_OfferLetter_Type().subscribe(
			(Rows) => {
				if (Rows != null) {
					this.Offerletter_Type_Data = Rows[0].slice();
					this.Offerletter_Type_Temp.Offerletter_Type_Id = 0;
					this.Offerletter_Type_Temp.Offerletter_Type_Name = "Select";
					this.Offerletter_Type_Data.unshift(
						Object.assign({}, this.Offerletter_Type_Temp)
					);
					this.Offerletter_Type_ = this.Offerletter_Type_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Load_Agents() {
		this.issLoading = true;
		this.Student_Service_.Load_Agents().subscribe(
			(Rows) => {
				// debugger

				if (Rows != null) {
					this.Agent_Mode_Data = Rows[0].slice();
					this.Agent_Mode_Temp.Agent_Id = 0;
					this.Agent_Mode_Temp.Agent_Name = "Select";
					this.Agent_Mode_Data.unshift(Object.assign({}, this.Agent_Mode_Temp));
					this.Agent_Mode_ = this.Agent_Mode_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}

	Clr_conditionssub() {
		this.Conditions_Sub.Conditions_Id = 0;

		if (
			this.Offerletter_Type_Data != undefined &&
			this.Offerletter_Type_Data != null
		)
			this.Offerletter_Type_ = this.Offerletter_Type_Data[0];
	}

	Delete_Conditionssub(Conditions_Sub: Conditions, index) {
		this.Conditions_Sub_Data.splice(index, 1);
		this.Clr_conditionssub();
	}

	Edit_Conditins_Sub(Conditions_e: Conditions, index) {
		this.Conditions_Sub_Index = index;
		this.Conditions_Sub = Object.assign({}, Conditions_e);

		for (var i = 0; i < this.Offerletter_Type_Data.length; i++) {
			if (
				this.Offerletter_Type_Data[i].Offerletter_Type_Id ==
				this.ApplicationDetails_.Offerletter_Type_Id
			) {
				this.Offerletter_Type_ = this.Offerletter_Type_Data[i];
			}
		}
	}

	Plus_Conditions(event) {
		if (
			this.Application_Offerchasing_permission != undefined &&
			this.Application_Offerchasing_permission != null
		) {
			if (
				this.Offerletter_Type_.Offerletter_Type_Id == undefined ||
				this.Offerletter_Type_.Offerletter_Type_Id == null ||
				this.Offerletter_Type_.Offerletter_Type_Id == 0
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Select Offer Type", Type: "3" },
				});
				return;
			}
		}
		if (
			this.Offerletter_Type_.Offerletter_Type_Id != undefined ||
			this.Offerletter_Type_.Offerletter_Type_Id != null ||
			this.Offerletter_Type_.Offerletter_Type_Id != 0
		) {

			if (this.Conditions_Sub.Conditions_Name == undefined || this.Conditions_Sub.Conditions_Name == null || this.Conditions_Sub.Conditions_Name == '') {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Conditions", Type: "3" },
				});
				return;
			}

		}
		this.ApplicationDetails_.Offerletter_Type_Id =
			this.Offerletter_Type_.Offerletter_Type_Id;
		this.ApplicationDetails_.Offerletter_Type_Name =
			this.Offerletter_Type_.Offerletter_Type_Name;
		if (this.Conditions_Sub_Data == undefined) this.Conditions_Sub_Data = [];

		if (this.Conditions_Sub_Index >= 0) {
			this.Conditions_Sub_Data[this.Conditions_Sub_Index] = Object.assign(
				{},
				this.Conditions_Sub
			);
		} else {
			this.Conditions_Sub_Data.push(Object.assign({}, this.Conditions_Sub));
		}
		this.Conditions_Sub_Index = -1;

		this.Conditions_Sub.Conditions_Name = null

	}

	Save_Offerchasingdetails() {
		this.issLoading = true;

		this.ApplicationDetails_.Conditions = this.Conditions_Sub_Data;

		this.ApplicationDetails_.User_Id = Number(this.Login_User);

		this.Student_Service_.Save_Offerchasingdetails(
			this.ApplicationDetails_
		).subscribe(
			(Save_status) => {
				// Save_status=Save_status[0];
				if (Number(Save_status[0][0].Application_details_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});
					// this.Close_Click();
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
					data: { Message: Rows.error.error, Type: "2" },
				});
			}
		);
	}

	Transfer_Cofirmation(Transfer_Source) {

		this.issLoading = true;

		this.Student_Service_.Transfer_Cofirmation(
			this.Transfer_app_Student_Id,
			"undefined",
			this.Login_User,
			this.Transfer_app_Department_Id,
			"undefined",
			this.Transfer_app_Status_Id,
			this.Transfer_app_Status_Name,
			0,
			"undefined",
			this.Application_Id_Ref_
		).subscribe(
			(Save_status) => {

				if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
					var message = {
						Student_Name: Save_status[0][0].Student_Name_,
						From_User_Name: Save_status[0][0].From_User_Name_,
						Notification_Type_Name: Save_status[0][0].Notification_Type_Name_,
						Entry_Type: Save_status[0][0].Entry_Type_,
						To_User: Save_status[0][0].User_Id_,
						Notification_Id: Save_status[0][0].Notification_Id_,
						Student_Id: Save_status[0][0].Student_Id_,
					};
					this.socket.emit("new-message", message);
				}
				this.Search_Application_List();
				if (Save_status[0][0].Student_Id_ == -1) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "User Not Found", Type: "3" },
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

	View_Conditions(application_details_u: any, i) {

		this.conditions_appid = application_details_u.Application_details_Id;
		this.Viewconditions_View = true;
		this.Offtertype_View = false;
		this.Change_Status_View = false;
		this.Search_Div = false;




		this.Search_Conditions();
	}

	Search_Conditions() {
		this.issLoading = true;

		this.Student_Service_.Search_Conditions(this.conditions_appid).subscribe(
			(Rows) => {

				this.Conditions_Search_Data = Rows[0];


				for (var j = 0; j < this.Conditions_Search_Data.length; j++) {
					if (this.Conditions_Search_Data[j].Completed == true)
						this.Conditions_Search_Data[j].Completed = true;
					else
						this.Conditions_Search_Data[j].Completed = false;
				}




				// this.condition_viewId=this.Conditions_Search_Data [0].Conditions_Id
				this.Total_Data = this.Conditions_Search_Data.length;

				this.issLoading = false;
				if (this.Conditions_Search_Data.length == 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "No Details Found", Type: "3" },
					});
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

	Save_Viewconditions() {
		this.issLoading = true;



		for (var j = 0; j < this.Conditions_Search_Data.length; j++) {
			if (this.Conditions_Search_Data[j].Condition_Remark == null || this.Conditions_Search_Data[j].Condition_Remark == undefined) {
				this.Conditions_Search_Data[j].Condition_Remark = "";
			}
		}


		this.Student_Service_.Save_Viewconditions(
			this.Conditions_Search_Data
		).subscribe(

			(Save_status) => {

				Save_status = Save_status[0];

				if (Number(Save_status[0].Conditions_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
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
					data: { Message: Rows.error.error, Type: "2" },
				});
			}
		);
	}

	Create_New_Company() {
		this.router.navigateByUrl('Employer_Details');
	}


	Edit_Student_Notification(Student_Id, i) {

		localStorage.setItem("Student_Id", Student_Id);
		console.log(Student_Id);
		this.Edit_Page_Permission = Get_Page_Permission(5);
		if (this.Edit_Page_Permission == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		} else if (this.Edit_Page_Permission.View == true)
			this.router.navigateByUrl('/Student');
		// window.open('/Student')
		//this.goToLink();
		else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
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


	// Load_Status_Dropdown() {
	// 	this.issLoading = true;
	// 	this.Department_Service_.Load_Status_Dropdown().subscribe(
	// 	  (Rows) => {
	// 		if (Rows != null) {
	// 			
	// 		  this.Department_Status_Dropdown_Data = Rows[0];
	// 		  this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
	// 		  this.Department_Status_Dropdown_Temp.Department_Status_Name = "Select";
	// 		  this.Department_Status_Dropdown_Data.unshift(this.Department_Status_Dropdown_Temp);

	// 		  this.Department_Status_Dropdown_ = this.Department_Status_Dropdown_Data[0];
	// 		  this.issLoading = false;
	// 		}
	// 	  },
	// 	  (Rows) => {
	// 		this.issLoading = false;
	// 	  }
	// 	);
	//   }



	Load_Status_Dropdown() {
		this.issLoading = true;
		this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead('', this.Login_User).subscribe(
			(Rows) => {
				if (Rows != null) {

					this.Department_Status_Dropdown_Data = Rows[0];
					this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
					this.Department_Status_Dropdown_Temp.Department_Status_Name = "Select";
					this.Department_Status_Dropdown_Data.unshift(this.Department_Status_Dropdown_Temp);

					this.Department_Status_Dropdown_ = this.Department_Status_Dropdown_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}



	Load_User_Dropdown() {
		this.issLoading = true;
		this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead('', this.Login_User).subscribe(
			(Rows) => {
				if (Rows != null) {

					this.Department_Status_Dropdown_Data = Rows[0];
					this.Department_Status_Dropdown_Temp.Department_Status_Id = 0;
					this.Department_Status_Dropdown_Temp.Department_Status_Name = "Select";
					this.Department_Status_Dropdown_Data.unshift(this.Department_Status_Dropdown_Temp);

					this.Department_Status_Dropdown_ = this.Department_Status_Dropdown_Data[0];
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}


	Create_Application() {
		this.Applicationmodal_View = true;
		this.Search_Div = false;
		this.ApplicationDetails_.Offer_Received = false;
		this.ApplicationDetails_.Feespaymentcheck = false;

		this.ApplicationDetails_.Duration_Id = 0;
		// this.closei();
	}


	Edit_ApplicationDetails(Applicationdetails_e: any, index) {


		let top = document.getElementById("Topdiv");
		if (top !== null) {
			top.scrollIntoView();
			top = null;
		}
		this.Create_Application();



		// this.Clr_ApplicationDetails();
		// this.ApplicationDetails_=Applicationdetails_e
		// this.ApplicationDetails_ = Object.assign({},Applicationdetails_e);

		// this.Student_Service_.Get_ApplicationDetails(this.Student_.Student_Id).subscribe(Rows =>{
		//  this.ApplicationDetails_= Object.assign({},Rows[0][0]);

		this.ApplicationDetails_ = Applicationdetails_e;

		this.ApplicationDetails_ = Object.assign({}, Applicationdetails_e);
		this.Save_Student_Approved_Status =
			Applicationdetails_e.Student_Approved_Status;
		this.Bph_Approved_Status = Applicationdetails_e.Bph_Approved_Status;
		this.Old_Application_Status_Id =
			this.ApplicationDetails_.Application_status_Id;

		if (this.ApplicationDetails_.To_User_Id != this.Login_User_Id) {
			this.Edit_save_button_view = false;
		}

		if (
			this.ApplicationDetails_.Duration_Id == 0 ||
			this.ApplicationDetails_.Duration_Id == null
		) {
			this.Duration_Id = 0;
		} else this.Duration_Id = this.ApplicationDetails_.Duration_Id;



		if (this.ApplicationDetails_.Course_Link != "" && this.ApplicationDetails_.Course_Link != null && this.ApplicationDetails_.Course_Link != undefined) {
			this.Course_Link_Button = true;
		}

		if (this.ApplicationDetails_.Application_Source == 0) {
			this.ApplicationDetails_.Course_Id = 0;
			this.ApplicationDetails_.University_Id = 0;
		}

		if (this.ApplicationDetails_.Feespaymentcheck.toString() == "1")
			this.ApplicationDetails_.Feespaymentcheck = true;
		else this.ApplicationDetails_.Feespaymentcheck = false;
		if (this.ApplicationDetails_.Fees_Payment_Last_Date == null) {
			this.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
			this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				this.ApplicationDetails_.Fees_Payment_Last_Date
			);
		} else
			this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				new Date(
					moment(this.ApplicationDetails_.Fees_Payment_Last_Date).format(
						"YYYY-MM-DD"
					)
				)
			);

		if (this.ApplicationDetails_.Offer_Received.toString() == "1")
			this.ApplicationDetails_.Offer_Received = true;
		else this.ApplicationDetails_.Offer_Received = false;

		if (this.ApplicationDetails_.Date_Of_Applying == null) {
			this.ApplicationDetails_.Date_Of_Applying = new Date();
			this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
				this.ApplicationDetails_.Date_Of_Applying
			);
		} else
			this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
				new Date(
					moment(this.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
				)
			);

		if (this.ApplicationDetails_.Fees_Payment_Last_Date == null) {
			this.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
			this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				this.ApplicationDetails_.Fees_Payment_Last_Date
			);
		} else
			this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
				new Date(
					moment(this.ApplicationDetails_.Fees_Payment_Last_Date).format(
						"YYYY-MM-DD"
					)
				)
			);

		for (var i = 0; i < this.Agent_Mode_Data.length; i++) {
			if (this.ApplicationDetails_.Agent_Id == this.Agent_Mode_Data[i].Agent_Id)
				this.Agent_Mode_ = this.Agent_Mode_Data[i];
		}

		this.Country_Temp.Country_Id = this.ApplicationDetails_.Country_Id;
		this.Country_Temp.Country_Name = this.ApplicationDetails_.Country_Name;
		this.Application_Country_ = Object.assign({}, this.Country_Temp);

		// for (var i = 0; i < this.Application_Status_Mode_Data.length; i++) {
		// 	if (
		// 		this.ApplicationDetails_.Application_status_Id ==
		// 		this.Application_Status_Mode_Data[i].Application_status_Id
		// 	)
		// 		this.Application_Status_Mode_ = this.Application_Status_Mode_Data[i];
		// }
		for (var i = 0; i < this.Intake_Mode_Data.length; i++) {
			if (
				this.ApplicationDetails_.intake_Id == this.Intake_Mode_Data[i].Intake_Id
			)
				this.Intake_Mode_ = this.Intake_Mode_Data[i];
		}

		// for (var i = 0; i < this.Intake_Mode_Data.length; i++) {
		// 	if (
		// 		this.ApplicationDetails_.intake_Id == this.Intake_Mode_Data[i].Intake_Id
		// 	)
		// 		this.Intake_Mode_ = this.Intake_Mode_Data[i];
		// }
		for (var i = 0; i < this.Intake_Year_Mode_Data.length; i++) {
			if (
				this.ApplicationDetails_.Intake_Year_Id ==
				this.Intake_Year_Mode_Data[i].Intake_Year_Id
			)
				this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[i];
		}





		this.University_Temp.University_Id = this.ApplicationDetails_.University_Id;
		this.University_Temp.University_Name =
			this.ApplicationDetails_.University_Name;
		this.University_1 = Object.assign({}, this.University_Temp);

		this.Course_Temp.Course_Id = this.ApplicationDetails_.Course_Id;
		this.Course_Temp.Course_Name = this.ApplicationDetails_.Course_Name;
		this.Course_ = Object.assign({}, this.Course_Temp);

		//
		// this.Document_Array= Rows[1];
		// this.Document_File_Array=[];
		// for(var i=0;i<this.Document_Array.length;i++)
		// this.Document_File_Array.push('')

		// this.Get_Application_DocumentList(
		// 	this.ApplicationDetails_.Application_details_Id
		// );

		// this.Activte_Visiblility = false;
		// this.Remove_Activte_Visiblility = false;

		// if (this.ApplicationDetails_.Activation_Status == true) {
		// 	if (
		// 		this.Remove_Activity_Permissions != undefined &&
		// 		this.Remove_Activity_Permissions != null
		// 	)
		// 		if (this.Remove_Activity_Permissions.View == true)
		// 			this.Remove_Activte_Visiblility = true;
		// } else {
		// 	if (
		// 		this.Activity_Permissions != undefined &&
		// 		this.Activity_Permissions != null
		// 	)
		// 		if (this.Activity_Permissions.View == true)
		// 			this.Activte_Visiblility = true;
		// }

		// this.issLoading = false;
		// } ,
		// Rows => {
		// this.issLoading = false;
		// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
		// });
		//  this.Get_ApplicationDetails();

		// this.Get_ApplicationDetailswise_History(this.ApplicationDetails_.Application_details_Id);
	}


	Close_Application() {
		this.Applicationmodal_View = false;
		this.Edit_save_button_view = true
		this.Search_Div = true;
		this.Clr_ApplicationDetails();
	}

	Clr_ApplicationDetails() {
		this.ApplicationDetails_.User_Id = 0;
		this.ApplicationDetails_.Student_Id = 0;
		this.ApplicationDetails_.Application_details_Id = 0;
		this.ApplicationDetails_.Date_Of_Applying = new Date();
		this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
			this.ApplicationDetails_.Date_Of_Applying
		);
		this.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
		this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
			this.ApplicationDetails_.Fees_Payment_Last_Date
		);
		this.ApplicationDetails_.Remark = "";
		this.ApplicationDetails_.Course_Link = "";
		this.Course_Link_Button = false;

		this.ApplicationDetails_.Living_Expense = "";
		this.ApplicationDetails_.Preference = "";
		this.ApplicationDetails_.Course_Fee = "";
		this.Save_Student_Approved_Status = 0;
		this.Bph_Approved_Status = 1;

		this.ApplicationDetails_.Feespaymentcheck = false;
		this.ApplicationDetails_.Offer_Received = false;
		this.ApplicationDetails_.Portal_User_Name = "";
		this.ApplicationDetails_.Password = "";
		this.Duration_Id = 0;

		this.ApplicationDetails_.Offer_Student_Id = "";

		this.ApplicationDetails_.Application_No = "";
		this.ApplicationDetails_.Student_Reference_Id = "";
		// this.ApplicationDocument_Array = [];
		// this.ImageFile_Application = [];
		// this.ApplicationDocument_File_Array = [];
		this.Application_Country_ = null;
		this.University_1 = null;
		this.Course_ = null;
		if (this.Intake_Mode_Data != null && this.Intake_Mode_Data != undefined)
			this.Intake_Mode_ = this.Intake_Mode_Data[0];

		if (this.Users_Data != null && this.Users_Data != undefined)
			this.Users_Temp = this.Users_Data[0];

		if (
			this.Intake_Year_Mode_Data != null &&
			this.Intake_Year_Mode_Data != undefined
		)
			this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];
		if (this.Agent_Mode_Data != null && this.Agent_Mode_Data != undefined)
			this.Agent_Mode_ = this.Agent_Mode_Data[0];
		if (
			this.Application_Status_Mode_Data != null &&
			this.Application_Status_Mode_Data != undefined
		)

			this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
		// this.ApplicationDocument_Description = "";
		// this.Display_ApplicationFile_ = "";
	}
	Search_University_Typeahead_Country(event: any) {
		// debugger

		if (
			this.Application_Country_ == undefined ||
			this.Application_Country_ == null ||
			this.Application_Country_.Country_Id == undefined ||
			this.Application_Country_.Country_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Country", Type: "3" },
			});
			return;
		}

		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.University_Data == undefined || this.University_Data.length == 0) {
			this.issLoading = true;
			// debugger
			this.University_Service_.Search_University_Typeahead_Country(Value, this.Application_Country_.Country_Id).subscribe(
				(Rows) => {
					// debugger
					if (Rows != null) {
						this.University_Data = Rows[0];
						this.University_Data_Filter_2 = [];
						for (var i = 0; i < this.University_Data.length; i++) {
							if (
								this.University_Data[i].University_Name.toLowerCase().includes(
									Value
								)
							)
								this.University_Data_Filter_2.push(this.University_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.University_Data_Filter_2 = [];
			for (var i = 0; i < this.University_Data.length; i++) {
				if (
					this.University_Data[i].University_Name.toLowerCase().includes(Value)
				)
					this.University_Data_Filter_2.push(this.University_Data[i]);
			}
		}
	}
	display_University_12(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}
	onUniversityChange() {

		this.Course_ = null;
		this.Course_Data = [];
		this.Course_Data_Filter = [];
		// this.Intake_Mode_Data_Filter = []; 
	}
	Country_Change1() {
		// Reset values
		this.University_1 = null;
		this.University_Data = [];
		this.University_Data_Filter_2 = [];
	}
	Search_Courses_Typeahead_tempp(event: any) {

		var Value = "";
		// debugger
		if (this.University_1 == undefined || this.University_1 == null || this.University_1.University_Id == undefined ||
			this.University_1.University_Id == 0) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select University", Type: "3" },
			});
			return;
		}
		// debugger
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		if (this.Course_Data == undefined || this.Course_Data.length == 0) {
			this.issLoading = true;
			// debugger
			this.Course_Service_.Search_Courses_Typeahead_tempp(Value, this.University_1.University_Id).subscribe(
				(Rows) => {
					// debugger
					console.log(this.Course_, "this.course");

					if (Rows != null) {
						this.Course_Data = Rows[0];
						this.Course_Data_Filter = [];
						for (var i = 0; i < this.Course_Data.length; i++) {
							if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
								this.Course_Data_Filter.push(this.Course_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Course_Data_Filter = [];
			for (var i = 0; i < this.Course_Data.length; i++) {
				if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
					this.Course_Data_Filter.push(this.Course_Data[i]);
			}
		}
	}

	Search_Country_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.Country_Data == undefined || this.Country_Data.length == 0) {
			this.issLoading = true;

			this.Country_Service_.Search_Country_Typeahead(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Country_Data = Rows[0];
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

	display_Country(Country_e: Country) {
		if (Country_e) {
			return Country_e.Country_Name;
		}
	}



	Search_University_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.University_Data == undefined || this.University_Data.length == 0) {
			this.issLoading = true;
			this.University_Service_.Search_University_Typeahead(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.University_Data = Rows[0];
						this.University_Data_Filter_2 = [];
						for (var i = 0; i < this.University_Data.length; i++) {
							if (
								this.University_Data[i].University_Name.toLowerCase().includes(
									Value
								)
							)
								this.University_Data_Filter_2.push(this.University_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.University_Data_Filter_2 = [];
			for (var i = 0; i < this.University_Data.length; i++) {
				if (
					this.University_Data[i].University_Name.toLowerCase().includes(Value)
				)
					this.University_Data_Filter_2.push(this.University_Data[i]);
			}
		}
	}
	display_University_1(University_e: University) {
		if (University_e) {
			return University_e.University_Name;
		}
	}



	Search_Courses_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();
		if (this.Course_Data == undefined || this.Course_Data.length == 0) {
			this.issLoading = true;

			this.Course_Service_.Search_Courses_Typeahead(Value).subscribe(
				(Rows) => {
					if (Rows != null) {
						this.Course_Data = Rows[0];
						this.Course_Data_Filter = [];
						for (var i = 0; i < this.Course_Data.length; i++) {
							if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
								this.Course_Data_Filter.push(this.Course_Data[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Course_Data_Filter = [];
			for (var i = 0; i < this.Course_Data.length; i++) {
				if (this.Course_Data[i].Course_Name.toLowerCase().includes(Value))
					this.Course_Data_Filter.push(this.Course_Data[i]);
			}
		}
	}
	display_Course_1(Course_e: Course) {
		if (Course_e) {
			return Course_e.Course_Name;
		}
	}



	Get_Student_PageLoadData_Dropdowns() {

		this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
			(Rows) => {

				this.Intake_Mode_Data = Rows[2].slice();
				this.Intake_Mode_Temp.Intake_Id = 0;
				this.Intake_Mode_Temp.Intake_Name = "Select";
				this.Intake_Mode_Data.unshift(Object.assign({}, this.Intake_Mode_Temp));
				this.Intake_Mode_ = this.Intake_Mode_Data[0];
				this.Intake_Search = this.Intake_Mode_Data[0];

				this.Intake_Year_Mode_Data = Rows[5].slice();
				this.Intake_Year_Mode_Temp.Intake_Year_Id = 0;
				this.Intake_Year_Mode_Temp.Intake_Year_Name = "Select";
				this.Intake_Year_Mode_Data.unshift(
					Object.assign({}, this.Intake_Year_Mode_Temp)
				);
				this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];
				this.Intake_Year_Search = this.Intake_Year_Mode_Data[0];

				this.Users_Data = Rows[18].slice();
				console.log('Users_Data.1: ', this.Users_Data);
				this.Users_Temp.User_Details_Id = 0;
				console.log('Users_Temp: ', this.Users_Temp);
				this.Users_Temp.User_Details_Name = "All";
				this.Users_Data.unshift(this.Users_Temp);
				this.User_Search = Object.assign({}, this.Users_Temp);


				if (Number(this.Login_User) > 0) {
					for (var i = 0; i < this.Users_Data.length; i++) {
						if (Number(this.Login_User) == this.Users_Data[i].User_Details_Id)
							this.User_Search = this.Users_Data[i];

					}
				} else this.User_Search = this.Users_Data[18];

				this.Search_Lead_button();



				// this.User_Search = Object.assign({}, this.Users_Temp);

				// if (Number(this.Login_User) > 0) {
				//     for (var i = 0; i < this.Users_Data.length; i++) {
				//         if (Number(this.Login_User) == this.Users_Data[i].User_Details_Id)
				//             this.User_Search = this.Users_Data[i];
				//     }
				// } else this.User_Search = this.Users_Data[0];



			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
			}
		);
	}


	Save_ApplicationDetails_Datas() {

		if (
			this.Application_Country_ == undefined ||
			this.Application_Country_ == null ||
			this.Application_Country_.Country_Name == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select  Country", Type: "3" },
			});
			return;
		}
		if (this.University_1 == undefined || this.University_1 == null || this.University_1.University_Name == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select University", Type: "3" },
			});
			return;
		}
		if (this.Course_ == undefined || this.Course_ == null || this.Course_.Course_Name == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Course", Type: "3" },
			});
			return;
		}
		// if (this.Agent_View == true) {
		// 	if (
		// 		this.Agent_Mode_ == undefined ||
		// 		this.Agent_Mode_ == null ||
		// 		this.Agent_Mode_.Agent_Id == undefined ||
		// 		this.Agent_Mode_.Agent_Id == 0
		// 	) {
		// 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 			panelClass: "Dialogbox-Class",
		// 			data: { Message: "Select  Agent", Type: "3" },
		// 		});
		// 		return;
		// 	}
		// }
		if (
			this.Intake_Mode_ == undefined ||
			this.Intake_Mode_ == null ||
			this.Intake_Mode_.Intake_Id == undefined ||
			this.Intake_Mode_.Intake_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Intake", Type: "3" },
			});
			return;
		}

		if (
			this.Intake_Year_Mode_ == undefined ||
			this.Intake_Year_Mode_ == null ||
			this.Intake_Year_Mode_.Intake_Year_Id == undefined ||
			this.Intake_Year_Mode_.Intake_Year_Id == 0
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Year", Type: "3" },
			});
			return;
		}


		var application_date_ = this.ApplicationDetails_.Date_Of_Applying
		if (
			this.ApplicationDetails_.Date_Of_Applying == undefined ||
			this.ApplicationDetails_.Date_Of_Applying == null ||
			this.ApplicationDetails_.Date_Of_Applying.toString() == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Choose Date", Type: "3" },
			});
			return;
		}

		// if (
		// 	this.Application_Status_Mode_ == undefined ||
		// 	this.Application_Status_Mode_ == null ||
		// 	this.Application_Status_Mode_.Application_status_Id == undefined ||
		// 	this.Application_Status_Mode_.Application_status_Id == 0
		// ) {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select Status", Type: "3" },
		// 	});
		// 	return;
		// }

		// if (this.Duration_Id == undefined ||this.Duration_Id == null ||this.Duration_Id == 0)
		//  {
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {panelClass: "Dialogbox-Class",data: { Message: "Select Duration", Type: "3" },});
		// 	return;
		// }

		if (
			this.Old_Application_Status_Id !=
			this.Application_Status_Mode_.Application_status_Id &&
			(this.Application_Status_Mode_.Application_status_Id == 9 ||
				this.Application_Status_Mode_.Application_status_Id == 10)
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select not allowed", Type: "3" },
			});

			return;
		}
		if (this.ApplicationDetails_.Offer_Received == true) {
			if (
				this.ApplicationDetails_.Portal_User_Name == undefined ||
				this.ApplicationDetails_.Portal_User_Name == null ||
				this.ApplicationDetails_.Portal_User_Name == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Portal User Name", Type: "3" },
				});
				return;
			}

			if (
				this.ApplicationDetails_.Password == undefined ||
				this.ApplicationDetails_.Password == null ||
				this.ApplicationDetails_.Password == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Password", Type: "3" },
				});
				return;
			}

			if (
				this.ApplicationDetails_.Offer_Student_Id == undefined ||
				this.ApplicationDetails_.Offer_Student_Id == null ||
				this.ApplicationDetails_.Offer_Student_Id == ""
			) {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Enter Student Id", Type: "3" },
				});
				return;
			}
		}

		var Main_Array = {
			Application: this.Fill_Applicationdetails(),
		};
		// if (Main_Array.Application == null )
		// {
		//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
		//     return;
		// }
		if (this.Save_Call_Status == true) return;
		else this.Save_Call_Status = true;
		this.issLoading = true;

		this.Student_Service_.Save_ApplicationDetails_Datas(
			Main_Array,
			this.ApplicationDocument_File_Array,
			this.ApplicationDocument_Array,
			this.ApplicationDocument_Description,
			this.ImageFile_Application,
			this.ApplicationDisplay_File_Name_
		).subscribe(
			(Save_status) => {

				// Save_status=Save_status[0];
				this.Save_Call_Status = false;
				if (Number(Save_status[0][0].Application_details_Id_) > 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Saved", Type: "false" },
					});

					if (
						this.ApplicationDetails_.Course_Name !=
						Save_status[0][0].Course_Name_Old_
					) {
						if (
							this.Course_.Course_Id == undefined ||
							this.Course_.Course_Id == null
						) {
							this.Course_Temp_Array = [];
							var Array_Course = [];
							this.Course_Temp_Data_.Course_Id = Save_status[0][0].Course_Id_;
							this.Course_Temp_Data_.Course_Temp = String(this.Course_);
							this.Course_Temp_Array.push(this.Course_Temp_Data_);
							Array_Course.push({
								Course_Id: this.Course_Temp_Array[0].Course_Id,
								Course_Name: this.Course_Temp_Array[0].Course_Temp,
							});
							this.Course_Data.push(Array_Course[0]);
						}
					}

					if (
						this.ApplicationDetails_.Country_Name !=
						Save_status[0][0].Country_Name_Old_
					) {
						if (
							this.Application_Country_.Country_Id == undefined ||
							this.Application_Country_.Country_Id == null
						) {
							this.Country_Temp_Array = [];
							var Array_Country = [];
							this.Country_Temp_Data_.Country_Id =
								Save_status[0][0].Country_Id_;
							this.Country_Temp_Data_.Country_Temp = String(
								this.Application_Country_
							);
							this.Country_Temp_Array.push(this.Country_Temp_Data_);
							Array_Country.push({
								Country_Id: this.Country_Temp_Array[0].Country_Id,
								Country_Name: this.Country_Temp_Array[0].Country_Temp,
							});
							this.Country_Data.push(Array_Country[0]);
						}
					}
					if (
						this.ApplicationDetails_.University_Name !=
						Save_status[0][0].University_Name_Old_
					) {
						if (
							this.University_1.University_Id == undefined ||
							this.University_1.University_Id == null
						) {
							this.University_Temp_Array = [];
							var Array_University = [];
							this.University_Temp_Data_.University_Id =
								Save_status[0][0].University_Id_;
							this.University_Temp_Data_.Univerity_Temp = String(
								this.University_1
							);
							this.University_Temp_Array.push(this.University_Temp_Data_);
							Array_University.push({
								University_Id: this.University_Temp_Array[0].University_Id,
								University_Name: this.University_Temp_Array[0].Univerity_Temp,
							});
							this.University_Data.push(Array_University[0]);
						}
					}
					this.Clr_ApplicationDetails();
					this.Search_Application_List();
					this.Close_Application();
					if (Number(this.Login_User) != Save_status[0][0].To_User_) {
						var message = {
							Student_Name: Save_status[0][0].Student_Name_,
							From_User_Name: Save_status[0][0].From_User_Name_,
							Notification_Type_Name: Save_status[0][0].Notification_Type_Name_,
							Entry_Type: Save_status[0][0].Entry_Type_,
							To_User: Save_status[0][0].To_User_,
							Notification_Id: Save_status[0][0].Notification_Id_,
							Student_Id: Save_status[0][0].Student_Id_,
						};
						this.socket.emit("new-message", message);
					}
				}
			},
			(Rows) => {
				const dialogRef = this.dialogBox.open(DialogBox_Component, {
					panelClass: "Dialogbox-Class",
					data: { Message: "Error Occured", Type: "2" },
				});
				return;
			}
		);
		this.Save_Call_Status = false;
	}


	Fill_Applicationdetails() {

		//this.History_View = false;
		//    this.Historydata_View=false;

		this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
			new Date(
				moment(this.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
			)
		);

		this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
			new Date(
				moment(this.ApplicationDetails_.Fees_Payment_Last_Date).format(
					"YYYY-MM-DD"
				)
			)
		);

		this.ApplicationDetails_.Intake_Year_Id =
			this.Intake_Year_Mode_.Intake_Year_Id;
		this.ApplicationDetails_.Intake_Year_Name =
			this.Intake_Year_Mode_.Intake_Year_Name;
		this.ApplicationDetails_.intake_Name = this.Intake_Mode_.Intake_Name;
		this.ApplicationDetails_.intake_Id = this.Intake_Mode_.Intake_Id;
		this.ApplicationDetails_.User_Id = Number(this.Login_User);
		//   this.ApplicationDetails_.Agent_Name=this.Agent_Mode_.Agent_Name;
		this.ApplicationDetails_.Application_Status_Name =
			this.ApplicationDetails_.Department_Status_Name;
		this.ApplicationDetails_.Application_status_Id =
			this.ApplicationDetails_.Department_Status_Id;
		this.ApplicationDetails_.Student_Id = this.ApplicationDetails_.Student_Id;
		this.ApplicationDetails_.Student_Approved_Status =
			this.Save_Student_Approved_Status;
		this.ApplicationDetails_.Bph_Approved_Status = this.Bph_Approved_Status;
		this.ApplicationDetails_.Duration_Id = Number(this.Duration_Id);

		// if (
		// 	this.Old_Application_Status_Id != this.Application_Status_Mode_.Application_status_Id &&
		// 	(this.Application_Status_Mode_.Application_status_Id==9 ||this.Application_Status_Mode_.Application_status_Id==10 ))
		// 	{
		// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
		// 		panelClass: "Dialogbox-Class",
		// 		data: { Message: "Select not allowed", Type: "3" },
		// 	});
		// 	this.issLoading=false;
		// 	return;
		// }
		if (this.ApplicationDetails_.Course_Link == null || this.ApplicationDetails_.Course_Link == undefined) {
			this.ApplicationDetails_.Course_Link = "";

		}

		if (this.ApplicationDetails_.Remark == null || this.ApplicationDetails_.Remark == undefined) {
			this.ApplicationDetails_.Remark = "";

		}


		if (
			this.University_1.University_Id == undefined ||
			this.University_1.University_Id == null
		) {
			this.ApplicationDetails_.University_Id = 0;
			this.ApplicationDetails_.University_Name = String(this.University_1);
		} else {
			this.ApplicationDetails_.University_Name =
				this.University_1.University_Name;
			this.ApplicationDetails_.University_Id = this.University_1.University_Id;
		}

		if (this.Course_.Course_Id == undefined || this.Course_.Course_Id == null) {
			this.ApplicationDetails_.Course_Id = 0;
			this.ApplicationDetails_.Course_Name = String(this.Course_);
		} else {
			this.ApplicationDetails_.Course_Name = this.Course_.Course_Name;
			this.ApplicationDetails_.Course_Id = this.Course_.Course_Id;
		}
		if (
			this.Application_Country_.Country_Id == undefined ||
			this.Application_Country_.Country_Id == null
		) {
			this.ApplicationDetails_.Country_Id = 0;
			this.ApplicationDetails_.Country_Name = String(this.Application_Country_);
		} else {
			this.ApplicationDetails_.Country_Id =
				this.Application_Country_.Country_Id;
			this.ApplicationDetails_.Country_Name =
				this.Application_Country_.Country_Name;
		}
		if (this.Agent_View == false) this.ApplicationDetails_.Agent_Id = 0;
		else this.ApplicationDetails_.Agent_Id = this.Agent_Mode_.Agent_Id;

		if (this.Agent_View == false) this.ApplicationDetails_.Agent_Name = "";
		else this.ApplicationDetails_.Agent_Name = this.Agent_Mode_.Agent_Name;

		return this.ApplicationDetails_;
	}

	CourseLInk() {


		var Course_link_ = this.ApplicationDetails_.Course_Link;
		var temp = Course_link_
		window.open(temp)

	}

	Get_ApplicationDetailswise_History(application_details_id_, feesdetails_id_) {
		this.History_View = true;
		this.Search_Div = false;
		this.Applicationmodal_View = false;

		this.FeesId_History = feesdetails_id_;
		this.Clr_ApplicationDetails();
		this.issLoading = true;

		this.Student_Service_.Get_ApplicationDetailswise_History(
			application_details_id_,
			feesdetails_id_
		).subscribe(
			(Rows) => {

				// const dialogRef = this.dialogBox.open( StudentComponent);

				this.ApplicationdetailsHistory_Data = Rows[0];

				this.issLoading = false;
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}


	Close_Click_History() {
		this.History_View = false;
		this.Search_Div = true;
	}


	Delete_Application_History(Application_details_history_Id, index) {
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

				this.Student_Service_.Delete_Application_History(
					Application_details_history_Id
				).subscribe(
					(Delete_status) => {
						Delete_status = Delete_status[0];
						Delete_status = Delete_status[0].DeleteStatus_;
						if (Delete_status == 1) {
							this.ApplicationdetailsHistory_Data.splice(index, 1);
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Deleted", Type: false },
							});

							//this.Get_ApplicationDetailswise_History(this.ApplicationDetails_.Application_details_Id);
							// this.Search_ApplicationDetails();
						} else {
							this.issLoading = false;
							const dialogRef = this.dialogBox.open(DialogBox_Component, {
								panelClass: "Dialogbox-Class",
								data: { Message: "Error Occured", Type: 2 },
							});
						}
						this.issLoading = false;
					},
					(Rows) => {
						this.issLoading = false;
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: 2 },
						});
					}
				);
			}
		});
	}




	Search_Application_StatusforChangeStatus_Typeahead(event: any) {

		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (this.Department_Status_Mode_Data1 == undefined || this.Department_Status_Mode_Data1.length == 0) {
			this.issLoading = true;

			this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead(Value, this.Login_User).subscribe(
				(Rows) => {

					if (Rows != null) {
						this.Department_Status_Mode_Data1 = Rows[0];
						this.Department_Status_Mode_Data1_Filter = [];
						for (var i = 0; i < this.Department_Status_Mode_Data1.length; i++) {
							if (
								this.Department_Status_Mode_Data1[i].Department_Status_Name.toLowerCase().includes(Value)
							)
								this.Department_Status_Mode_Data1_Filter.push(this.Department_Status_Mode_Data1[i]);
						}
					}
					this.issLoading = false;
				},
				(Rows) => {
					this.issLoading = false;
				}
			);
		} else {
			this.Department_Status_Mode_Data1_Filter = [];
			for (var i = 0; i < this.Department_Status_Mode_Data1.length; i++) {
				if (this.Department_Status_Mode_Data1[i].Department_Status_Name.toLowerCase().includes(Value))
					this.Department_Status_Mode_Data1_Filter.push(this.Department_Status_Mode_Data1[i]);
			}
		}
	}

	Status_Change() {

		if (this.Department_Status_Mode1_ != null || this.Department_Status_Mode1_ != undefined) {
			if (this.Department_Status_Mode1_.FollowUp == true) this.Is_Follow_ = 1;
			else this.Is_Follow_ = 0;
		} else {
			this.Is_Follow_ = 0;
		}
	}

	display_Application_Status(Application_Status_e: Department_Status) {
		if (Application_Status_e) {
			return Application_Status_e.Department_Status_Name;
		}
	}



	SendMailTemplate(application_details_) {
		const dialogRef = this.dialogBox.open(EmailTemplateDialogComponent, {
			width: '600px',
			data: {

			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.issLoading = true;
				const payload = {
					Application_details_Id: application_details_.Application_details_Id,
					Template_Id: result.templateId,
					Student_Id: application_details_.Student_Id,
					Template_Body: result.templateBody,
					subject: result.templateSubject,
					Login_User: Number(this.Login_User)
				}
				this.Student_Service_.Send_Email_Template(payload).subscribe(
					(response) => {
						this.issLoading = false;
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Email Sent Successfully", Type: "false" }
						});
					},
					(error) => {
						this.issLoading = false;
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Sending Email", Type: "2" }
						});
					}
				);
			}
		});
	}


	Search_Branch_Typeahead(event: any, source: number) {
		// if (this.Followup_Branch_Data == undefined)
		// this.Followup_Branch_Data = [];
		// if (this.Followup_Branch_Data.length == 0) {
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
						this.Followup_Branch_Data_Filter = []
						if (source == 1) {
							for (var i = 0; i < this.Followup_Branch_Data.length; i++) {
								if (
									this.Followup_Branch_Data[i].Branch_Name.toLowerCase().includes(
										Value
									)
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
						this.Followup_Branch_Data[i].Branch_Name.toLowerCase().includes(Value)
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
		// console.log('Branch_T: ', Branch_T);
		this.FollowUp_Department_Temp.Department_Id =
			Branch_T.Default_Department_Id;
		this.FollowUp_Department_Temp.Department_Name =
			Branch_T.Default_Department_Name;
		this.FollowUp_Department_1 = Object.assign(
			{},
			this.FollowUp_Department_Temp
		);
		// console.log('this.FollowUp_Department_1: ', this.FollowUp_Department_1);

		if (Branch_T.Default_User_Id != 0 || Branch_T.Default_User_Name != "") {

			this.Followup_Users_temp.User_Details_Id = Branch_T.Default_User_Id;
			this.Followup_Users_temp.User_Details_Name = Branch_T.Default_User_Name;
			this.Followup_Users_List_ = Object.assign({}, this.Followup_Users_temp);

		}
		else {
			this.Followup_Users_List_ = null
		}


		if (Branch_T.Default_User_Id != 0 || Branch_T.Default_User_Name != "") {

			this.Followup_Users_temp.User_Details_Id = Branch_T.Default_User_Id;
			this.Followup_Users_temp.User_Details_Name = Branch_T.Default_User_Name;
			this.Followup_Users_ = Object.assign({}, this.Followup_Users_temp);

		}
		else {
			this.Followup_Users_ = null
			this.Followup_Users_Task_ = null
			this.FollowUp_Department_Task_ = null
		}



		this.Followup_Status_Temp.Department_Status_Id = Branch_T.Default_Status_Id;
		this.Followup_Status_Temp.Department_Status_Name =
			Branch_T.Default_Status_Name;
		this.FollowUp_Status_ = Object.assign({}, this.Followup_Status_Temp);

		this.Followup_sub_b = Branch_T.Is_FollowUp;

		// this.Duration=Branch_T.Duration;

		// this.Followup_Sub_Status_Temp.Sub_Status_Id = Branch_T.Default_Status_Id;
		// this.Followup_Sub_Status_Temp.Sub_Status_Name = Branch_T.Default_Status_Name;
		// this.FollowUp_Sub_Status_ = Object.assign({}, this.Followup_Sub_Status_Temp);

		//return
		// this.FollowUp_Department_ = null;
		// this.Followup_Users_ = null;
		// this.FollowUp_Status_ = null;
		// this.Followup_Department_Data = [];
		// this.Followup_Department_Data_Check = [];
		// this.Followup_Users_Data = [];
		// this.Followup_Status_Data = [];
		//this.DefaultDept_Data = [];

	}

	Search_Branch_Department_Typeahead_application(event: any, source: number) {

		var Value = "";
		if (event.target.value == "") Value = "";
		else Value = event.target.value.toLowerCase();

		if (
			this.FollowUp_Branch_1 == null ||
			this.FollowUp_Branch_1.Branch_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Branch", Type: "3" },
			});
		} else {
			if (
				this.Followup_Department_Data == undefined ||
				this.Followup_Department_Data.length == 0
			) {
				// if (
				// 	this.Followup_Department_Data_Check == undefined ||
				// 	this.Followup_Department_Data_Check.length == 0
				// ) {
				this.issLoading = true;
				this.Student_Service_.Search_Branch_Department_Typeahead(
					this.FollowUp_Branch_1.Branch_Id,
					""
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							// if(Rows.code!=undefined)
							// {
							//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.Code,Type:"false"}});
							// }
							this.Followup_Department_Data = Rows[0];
							this.Followup_Department_Data_Check = [];
							this.issLoading = false;
							if (source == 1) {
								for (var i = 0; i < this.Followup_Department_Data.length; i++) {
									if (
										this.Followup_Department_Data[i].Department_Name.toLowerCase().includes(
											Value
										)
									)
										this.Followup_Department_Data_Check.push(
											this.Followup_Department_Data[i]
										);
								}
							}
							else {
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
				// } else {
				// 	this.Followup_Department_Data = this.Followup_Department_Data_Check;
				// }
			}
			else {
				if (source == 1) {
					this.Followup_Department_Data_Check = [];
					for (var i = 0; i < this.Followup_Department_Data.length; i++) {
						if (
							this.Followup_Department_Data[i].Department_Name.toLowerCase().includes(Value)
						)
							this.Followup_Department_Data_Check.push(this.Followup_Department_Data[i]);
					}
				} else {
					this.Followup_Department_Data_Check = [];
					for (var i = 0; i < this.Followup_Department_Data.length; i++) {
						this.Followup_Department_Data_Check.push(this.Followup_Department_Data[i]);
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

	Department_Change() {
		//  document.getElementById("Followup_Status").focus();
		// $("[name=Followup_Status]").focus();
		// this.Focus_It();
		this.Followup_Users_ = null;
		this.Followup_Users_Task_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Users_Data = [];
		this.Followup_Users_Data_t = []
		this.Followup_Status_Data = [];
		this.Followup_Department_Data = [];
		this.Followup_Users_List_ = null;
		this.Followup_Users_Data = [];
		// if (this.FollowUp_Department_.Department_FollowUp == true)
		// 	this.Is_Follow_ = 1;
		// else this.Is_Follow_ = 0;
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);
	}

	Search_Department_User_Typeahead_application(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;
		if (
			this.FollowUp_Department_1 == null ||
			this.FollowUp_Department_1.Department_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
		} else {
			if (
				this.Followup_Users_Data == undefined ||
				this.Followup_Users_Data.length == 0
			) {
				this.issLoading = true;
				var uname = undefined;

				this.Student_Service_.Search_Department_User_Typeahead(
					this.FollowUp_Branch_1.Branch_Id,
					this.FollowUp_Department_1.Department_Id,
					""
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Followup_Users_Data = Rows[0];
							this.issLoading = false;
						}
					},
					(Rows) => {
						this.issLoading = false;
						// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
					}
				);
			}
		}
	}
	display_Followup_Users(Users_: User_Details) {
		if (Users_) {
			return Users_.User_Details_Name;
		}
	}


	// 3. Improved Select_All_TaggedUser() function
	Select_All_TaggedUser() {
		if (this.Users == undefined) this.Users = [];

		// Clear the Users array before adding new selections
		this.Users = [];

		// Set all checkboxes based on Select_TaggedUser state
		const checkState = !this.Select_TaggedUser;

		for (var i = 0; i < this.User_Details_Data.length; i++) {
			this.User_Details_Data[i].Check_Box = checkState;

			// If checked, add to Users array
			if (checkState) {
				this.Users.push(this.User_Details_Data[i]);
			}
		}

		// Toggle the select all state
		this.Select_TaggedUser = checkState;

		// Update tagged_users array with selected users
		if (this.Users.length > 0) {
			const uniqueUsers = this.Users.filter(
				(user, index, self) =>
					index === self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
			);

			// Extract the name property values into an array and use join() to concatenate them into a single string
			const namesString = uniqueUsers
				.map((obj) => `@${obj.User_Details_Name}`)
				.join(", ");
			const id_num = uniqueUsers.map((obj) => obj.User_Details_Id).join(", ");

			// Create an object with the concatenated namesString as the value of the name property
			this.tagged_users = [
				{ User_Id: id_num, User_Details_Name: namesString, User_Details_Id: 0 },
			];
		} else {
			// Clear tagged_users when no users are selected
			this.tagged_users = [];
		}
	}
	selectOnlyOne(selectedUser: any, selectedIndex: number): void {
		let wasAlreadyChecked = selectedUser.Check_Box;

		// Set only one checkbox as true
		this.User_Details_Filter.forEach((user, index) => {
			user.Check_Box = index === selectedIndex && !wasAlreadyChecked;
		});

		// If it was already checked, it is now being unchecked
		this.Tagged_Users(selectedUser, !wasAlreadyChecked);
	}

	// Select_All_TaggedUser() {
	// 	if (this.Users == undefined) this.Users = [];
	// 	for (var i = 0; i < this.User_Details_Data.length; i++) {
	// 		if (this.Select_TaggedUser == false)
	// 			this.User_Details_Data[i].Check_Box = true;
	// 		else this.User_Details_Data[i].Check_Box = false;
	// 	}
	// 	for (var m = 0; m < this.User_Details_Data.length; m++) {
	// 		if (Boolean(this.User_Details_Data[m].Check_Box) == true) {
	// 			this.Users.push(this.User_Details_Data[m]);
	// 		} else {
	// 			this.Users = [];
	// 		}
	// 	}
	// 	;
	// 	const uniqueUsers = this.Users.filter(
	// 		(user, index, self) =>
	// 			index ===
	// 			self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
	// 	);


	// 	const namesString = uniqueUsers
	// 		.map((obj) => `@${obj.User_Details_Name}`)
	// 		.join(", ");
	// 	const id_num = uniqueUsers.map((obj) => obj.User_Details_Id).join(", ");
	// 	const id = parseInt(id_num);

	// 	this.tagged_users = [
	// 		{ User_Id: id_num, User_Details_Name: namesString, User_Details_Id: 0 },
	// 	];
	// }
	Load_User_Details(event: any) {
		;
		var Value = "";
		// if (event== undefined) Value = ""
		if (event.target.value == "") Value = "undefined";
		else if (event.target.value == undefined) Value = "undefined";
		else Value = event.target.value.toLowerCase();
		this.issLoading = true;// debugger
		this.Student_Service_.Load_ChatUser_Details_comment(
			Value,
			Number(this.Login_User), this.Application_Id_Log


		).subscribe(
			(Rows) => {
				;// debugger
				if (Value == "undefined") {
					Value = "";
				}
				if (Rows != null) {
					this.User_Details_Data = Rows[0];
					console.log('User_Details_Data: ', this.User_Details_Data);

					this.User_Details_Filter = [];

					for (var i = 0; i < this.User_Details_Data.length; i++) {
						if (
							this.User_Details_Data[
								i
							].User_Details_Name.toLowerCase().includes(Value)
						)
							this.User_Details_Filter.push(this.User_Details_Data[i]);
					}
					this.issLoading = false;
				}
			},
			(Rows) => {
				this.issLoading = false;
			}
		);
	}



	User_Click() {
		this.User_Div = true;
		this.tagged_users = []; // Clear previously tagged users
		this.Users = []; // Clear selected users array

		// Reset all checkboxes
		for (var m = 0; m < this.User_Details_Data.length; m++) {
			this.User_Details_Data[m].Check_Box = false;
		}

		// Reset the "Select All" checkbox
		this.Select_TaggedUser = false;

		// Reload fresh user data
		this.Load_User_Details({ target: { value: "" } });
	}
	// User_Click() {
	// 	this.User_Div = true;
	// 	for (var m = 0; m < this.User_Details_Data.length; m++) {
	// 		this.User_Details_Data[m].Check_Box = false;
	// 	}
	// }	
	sendMessage1(message: string): void {


		if (
			this.messageText == undefined ||
			this.messageText == null ||
			this.messageText == ""
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Enter Comment", Type: "3" },
			});
			return;
		}

		const trimmedString = this.messageText.trim();
		if (trimmedString != "" || this.Display_File_ != "") {
			this.Chats_.Chats = this.messageText;
			this.Chats_.From_User = Number(this.Login_User);
			this.Chats_.From_User_Name = this.Login_User_Name;
			this.Chats_.Display_File = this.Display_File_;
			// debugger
			this.Chats_.Tagged_User = this.tagged_users;
			console.log('this.tagged_users: ', this.tagged_users);
			this.Chats_.Student_Id = this.Student_Id_Transfer;
			this.Chats_.Application_Details_Id = this.Application_Id_Log;
			// debugger

			// this.Chats_.Application_Details_Id = this.Application_Id_Log;
			this.Chats_.Channel_Id = 0;
			// if (this.Save_Call_Status == true) return;
			// else this.Save_Call_Status = true;
			this.issLoading = true;
			// debugger;
			this.Chat_Window_Service_.Save_Comments(
				this.Chats_,
				this.ImageFile_,
				this.Document_File_Array
			).subscribe(
				(Save_status) => {
					// debugger
					this.issLoading = false;
					let index = 0;



					this.Chat_Window_Service_.Save_Comments(
						this.Chats_,
						this.ImageFile_,
						this.Document_File_Array).subscribe(
							(Save_status2) => {

							}
							//    ,
							//   (Rows2) => {
							//     this.issLoading = false;
							//     const dialogRef = this.dialogBox.open(DialogBox_Component, {
							//       panelClass: "Dialogbox-Class",
							//       data: { Message: "Mail Error Occured", Type: "2" },
							//     });
							//   }
						);


					if (Number(Save_status[0][0].Chat_Id_) > 0) {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Saved", Type: "false" },
						});

					}


					if (Save_status[1][0].TaggedIn_ != null) {
						while (index < Save_status[1][0].TaggedIn_.length) {
							const element = Save_status[1][0].TaggedIn_[index];

							// Emit the socket event with the element as data
							var msg2 = {
								Notification_Type_Name: "Tagged Comment",
								Entry_Type: 18,
								From_User_Name: "",
								To_User: element,
								Student_Name: Save_status[0][0].messages_,

								// Open_Channel_Id:this.OpenChannel_Id
							};

							this.socket.emit("new-message", msg2);

							index++;
						}
					}

					// Added: Send notification to BDM department user
					// The notification to BDM is already handled in the database procedure
					// Just need to emit the socket event for real-time notification
					console.log('Save_status[0][0].From_UserName: ', Save_status[0][0].From_UserName);
					var bdmMsg = {
						Notification_Type_Name: "New Comment",
						Entry_Type: 18,
						From_User_Name: Save_status[0][0].From_UserName,

						To_User: "184", // BDM user ID
						Student_Name: Save_status[0][0].messages_,
						// Open_Channel_Id:this.OpenChannel_Id
					};
					this.socket.emit("new-message", bdmMsg);


					Save_status = Save_status[0];
					if (Save_status != undefined) {
						if (Number(Save_status[0].Chat_Id_) > 0) {
							var msg = {
								Notification_Type_Name: "Chat",
								From_User_Name: Save_status[0].From_User_Name_,
								From_User: Save_status[0].From_user_,
								Chats: Save_status[0].messages_,
								Date: Save_status[0].Date_,
								Tagged_Users_List: Save_status[0].User_Details_Name_,
								To_User_List: this.To_user_list,
								File_Name: Save_status[0].File_,
								Display_File: Save_status[0].File_Name_,
								Channel_Id: Save_status[0].Channel_Id_,
								// Open_Channel_Id:this.OpenChannel_Id
							};

							this.socket.emit("new-message", msg);

							;
							//this.messages.push(message);

							// setTimeout(() => {
							// 	this.scrollToBottom();
							// }, 100);
							this.Get_Comments(this.Application_Id_Log);
							this.clr_Chat_Window();
						}
					} else {
						const dialogRef = this.dialogBox.open(DialogBox_Component, {
							panelClass: "Dialogbox-Class",
							data: { Message: "Error Occured", Type: "2" },
						});
						document.getElementById("Save_Button").hidden = false;
					}
					this.issLoading = false;
					this.Save_Call_Status = false;
				},
				(Rows) => {
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
					document.getElementById("Save_Button").hidden = false;
				}
			);
		}
	}

	Tagged_Users(User_D_e: User_Details, IsChecked: boolean) {
		if (!this.Users) this.Users = [];

		if (!IsChecked) {
			// Uncheck case - remove everything
			this.Users = [];
			this.tagged_users = [];
			this.Tagged_Ids = [];
			this.id_num = '';
		} else {
			// Check case - single user
			this.Users = [User_D_e];
			this.id_num = `${User_D_e.User_Details_Id}`;
			this.Tagged_Ids = [User_D_e.User_Details_Id];
			this.tagged_users = [
				{
					User_Id: this.id_num,
					User_Details_Name: `@${User_D_e.User_Details_Name}`,
					User_Details_Id: 0,
				},
			];
		}
	}



}

