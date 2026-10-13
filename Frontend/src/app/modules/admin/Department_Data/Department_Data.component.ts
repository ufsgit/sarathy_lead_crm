import { Component, OnInit,Input,Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Student_Service } from '../../../services/Student.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student } from '../../../models/Student';
import { Branch } from '../../../models/Branch';
import { User_Details } from '../../../models/User_Details';
import { Department } from '../../../models/Department';
import { Department_Status } from '../../../models/Department_Status';
import { Gender } from '../../../models/Gender';
import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
// import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import {Followup_History} from '../../../models/Followup_History';
import { Remarks } from "../../../models/Remarks";
import { Enquiry_Source } from "../../../models/Enquiry_Source";
import { Student_FollowUp } from "../../../models/Student_FollowUp";
const moment = _rollupMoment || _moment;
import { FormControl } from '@angular/forms';
export const MY_FORMATS = {
parse: {
dateInput: 'DD/MM/YYYY',
},
display: {
dateInput: 'DD/MM/YYYY',monthYearLabel: 'MMM YYYY',dateA11yLabel: 'DD/MM/YYYY',monthYearA11yLabel: 'MMMM YYYY',
},
};

@Component({
selector: 'app-Department_Data',
templateUrl: './Department_Data.component.html',
styleUrls: ['./Department_Data.component.css'],
providers: [
{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
],
})

export class Department_DataComponent implements OnInit {
    Status_Search: Department_Status = new Department_Status();
	User_Search=new FormControl();
	ToUser_Search=new FormControl();
	To_Staff_Search=new FormControl();
	By_Staff_Search=new FormControl();
	To_Staff_Temp:any
	By_Staff_Temp:any
	Search_Name = "";
	Department_Search: Department = new Department();
	Search_Branch: Branch = new Branch();
	Search_Remark: Remarks = new Remarks();
	Search_FromDate: Date = new Date();
	Search_ToDate: Date = new Date();
	Look_In_Date: Boolean = true;

	Remove_Old_Datas: Boolean = false;

	More_Search_Options: boolean = true;

	Department_Data: Department[];
	Users_Data: User_Details[];
	Branch_Data: Branch[];


	Searchdate_By_:any;
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
    Student_Data_Temp: Student[];
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

	Search_Status: Department_Status = new Department_Status();

	Is_Registered: any;
	Report:boolean = true;

	Followp_History_Data: Followup_History[];
	StudentName:string=""
	Show_Followup_History: boolean = true;
	constructor(
		public Student_Service_: Student_Service,
		private route: ActivatedRoute,
		private router: Router,
		public dialogBox: MatDialog
	) {}
	ngOnInit() {
		this.Login_User = localStorage.getItem("Login_User");
		this.Login_User_Name = localStorage.getItem("uname");
		// this.array = Get_Page_Permission(this.Menu_Id);
		// this.Export_Permission=Get_Page_Permission(38);

		// if (this.array == undefined || this.array == null)
		// {
		//     localStorage.removeItem('token');
		//     this.router.navigateByUrl('/auth/login');
		// }
		// else
		{
			this.Page_Load();

			// if (this.Export_Permission != undefined && this.Export_Permission != null)
			//     this.Export_View=this.Export_Permission.Edit
		}
	}
	Page_Load() {
		this.myInnerHeight = window.innerHeight;
		this.myInnerHeight = this.myInnerHeight - 420;
		this.Black_Stop = this.Page_Length_;
		this.Red_Stop = this.Page_Length_;
		this.main_View = true;
		this.Search_Student_Report();
		this.Show_FollowUp = false;
		this.Search_By_ = 0;
		this.Registered_By_ = 1;
		this.Is_Registered = 1;
		this.Searchdate_By_ = 1;
		// this.Get_Lead_Load_Data();
		this.Get_Lead_Load_Data_ByUser(this.Login_User);
		this.Get_Menu_Status(128, this.Login_User);
		this.Get_Menu_Status(38, this.Login_User);
		this.Search_FromDate = this.New_Date(this.Search_FromDate);
		this.Search_ToDate = this.New_Date(this.Search_ToDate);
		this.Student_.Transferto=false;

		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date);
	}

	Get_Menu_Status(Menu_id, Login_user_id) {
		this.issLoading = false;
		this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
			(Rows) => {
				if (Rows[0][0] == undefined) {
					if (Menu_id == 17) {
						localStorage.removeItem("token");
						this.router.navigateByUrl("Home_Page");
					}
				} else if (Rows[0][0].View > 0) {
					if (Menu_id == 17) {
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
	Edit_Lead(Lead_Id, i) {
		localStorage.setItem("Lead_Id", Lead_Id);

		this.Edit_Page_Permission = Get_Page_Permission(1);
		if (this.Edit_Page_Permission == undefined) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		} else if (this.Edit_Page_Permission.View == true)
			this.router.navigateByUrl("/Leads");
		else {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "No permission to view", Type: "2" },
			});
		}
	}

	Student_View_Click() {
		for (var i = 0; i < this.Student_Data_Search.length; i++) {
			if (this.Select_Student == false)
				this.Student_Data_Search[i].Check_Box_View = true;
			else this.Student_Data_Search[i].Check_Box_View = false;
		}
	}
	New_Followup() {
		var Status = false;
		for (var m = 0; m < this.Student_Data_Search.length; m++) {
			if (Boolean(this.Student_Data_Search[m].Check_Box_View) == true)
				Status = true;
		}
		if (Status == false) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Student to Transfer", Type: "3" },
			});
			return;
		}
		this.Show_FollowUp = true;
		this.main_View = false;
		// this.FollowUp_.Next_FollowUp_Date=new Date();
		// this.FollowUp_.Next_FollowUp_Date=this.New_Date( this.FollowUp_.Next_FollowUp_Date);
	}
	Search_Lead_button() {
		this.Black_Start = 1;
		this.Black_Stop = this.Page_Length_;
		this.Red_Start = 1;
		this.Total_Rows = 0;
		this.Red_Stop = this.Page_Length_;
		this.Search_Student_Report();
	}
	Search_More_Options() {
		if (this.More_Search_Options == true) this.More_Search_Options = false;
		else this.More_Search_Options = true;
	}
	Export() {
		this.Student_Service_.exportExcel(
			this.Student_Data_Temp,
			"Department Data"
		);
	}
	Branch_Change() {
		this.FollowUp_Department_ = null;
		this.Followup_Users_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Department_Data = [];
		this.Followup_Department_Data_Check = [];
		this.Followup_Users_Data = [];
		this.Followup_Status_Data = [];
	}
	Focus_It() {
		setTimeout("$('[name=Followup_Status]').focus();", 0);
	}
	Department_Change() {
		//  document.getElementById("Followup_Status").focus();
		$("[name=Followup_Status]").focus();
		this.Focus_It();
		this.Followup_Users_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Users_Data = [];
		this.Followup_Status_Data = [];
		this.Followup_Department_Data = [];
		// if(this.FollowUp_Department_.Department_FollowUp==true)
		// this.Next_FollowUp_Date_Visible=false;
		// else
		// this.Next_FollowUp_Date_Visible=true;
		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date
		);
	}
	Search_Student_Report() {
		var dept_id = 0,
			enquiry_source_id = 0,
			User_Id = 0,			
			look_In_Date_Value = 0,			
			branch_id = 0,
			remarks_Id = 0,			
			Register_Value = 1,
			Department_Status_Id = 0,
			ByStaff_Selection="",
			ToStaff_Selection = ""
		if (this.Look_In_Date == true) look_In_Date_Value = 1;

		// if (this.User_Search != undefined && this.User_Search != null)
		// 	if (
		// 		this.User_Search.User_Details_Id != undefined &&
		// 		this.User_Search.User_Details_Id != null
		// 	)
		// 		User_Id = this.User_Search.User_Details_Id;

		// if (this.To_User_Search != undefined && this.To_User_Search != null)
		// 	if (
		// 		this.To_User_Search.User_Details_Id != undefined &&
		// 		this.To_User_Search.User_Details_Id != null
		// 	)
		// 		To_User_Id = this.To_User_Search.User_Details_Id;

		if (this.By_Staff_Search.value != undefined) {
			for (var i = 0; i < this.By_Staff_Search.value.length; i++) {
				ByStaff_Selection =
					ByStaff_Selection +
					this.By_Staff_Search.value[i].User_Details_Id.toString() +
					",";
			}
			if (ByStaff_Selection.length > 0)
				ByStaff_Selection = ByStaff_Selection.substring(
					0,
					ByStaff_Selection.length - 1
				);
		}
		if (this.ToUser_Search.value != undefined) {
			for (var i = 0; i < this.ToUser_Search.value.length; i++) {
				ToStaff_Selection =
					ToStaff_Selection +
					this.ToUser_Search.value[i].User_Details_Id.toString() +
					",";
			}
			if (ToStaff_Selection.length > 0)
				ToStaff_Selection = ToStaff_Selection.substring(
					0,
					ToStaff_Selection.length - 1
				);
		}
		if (this.Department_Search != undefined && this.Department_Search != null)
			if (
				this.Department_Search.Department_Id != undefined &&
				this.Department_Search.Department_Id != null
			)
				dept_id = this.Department_Search.Department_Id;

		if (
			this.Enquiry_Source_Search != undefined &&
			this.Enquiry_Source_Search != null
		)
			if (
				this.Enquiry_Source_Search.Enquiry_Source_Id != undefined &&
				this.Enquiry_Source_Search.Enquiry_Source_Id != null
			)
				enquiry_source_id = this.Enquiry_Source_Search.Enquiry_Source_Id;

		if (this.Search_Branch != undefined && this.Search_Branch != null)
			if (
				this.Search_Branch.Branch_Id != undefined &&
				this.Search_Branch.Branch_Id != null
			)
				branch_id = this.Search_Branch.Branch_Id;

		if (this.Search_Remark != undefined && this.Search_Remark != null)
			if (
				this.Search_Remark.Remarks_Id != undefined &&
				this.Search_Remark.Remarks_Id != null
			)
				remarks_Id = this.Search_Remark.Remarks_Id;

		if (this.Is_Registered != undefined && this.Is_Registered != null)
			if (
				this.Is_Registered != undefined &&
				this.Is_Registered != null &&
				this.Is_Registered != ""
			)
				Register_Value = this.Is_Registered;

		if (this.Search_Status != undefined && this.Search_Status != null)
			if (
				this.Search_Status.Department_Status_Id != undefined &&
				this.Search_Status.Department_Status_Id != null
			)
				Department_Status_Id = this.Search_Status.Department_Status_Id;

		this.issLoading = true;

		this.Student_Service_.Search_Student_Department_Report(
			moment(this.Search_FromDate).format("YYYY-MM-DD"),
			moment(this.Search_ToDate).format("YYYY-MM-DD"),			
			dept_id,
			branch_id,
			ToStaff_Selection,
			ByStaff_Selection,
			look_In_Date_Value,
			this.Black_Start,
			this.Black_Stop,
			this.Login_User,
			this.Red_Start,
			this.Red_Stop
		).subscribe(
			(Rows) => {
				
				// log(Rows)
				this.Student_Data_Search = Rows.returnvalue.Leads;
				this.Total_Data = 0;
				this.missedfollowup_count = 0;
				this.followup_count = 0;
                this.Student_Data_Temp = [];

				var Student_Id_Temp = 0;
				
				
				for (var i = 0; i < this.Student_Data_Search.length; i++) {     
			
					if (
						this.Student_Data_Search[i].Student_Id !=
						Student_Id_Temp
					) {
						
						
						this.Student_Data_Temp.push(
							Object.assign({}, this.Student_Data_Search[i])
						);           
					}
					Student_Id_Temp = this.Student_Data_Search[i].Student_Id;        
				}

                this.Student_Data_Temp.sort((a, b) => {
                    const dateA = new Date(a.Entry_On);
                    const dateB = new Date(b.Entry_On);
                    return dateA.getTime() - dateB.getTime();
                  });
				if (this.Student_Data_Search.length > 0)
					this.Total_Data = this.Student_Data_Temp.length;
				this.issLoading = false;
				if (this.Student_Data_Search.length == 0) {
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "No Details Found", Type: "3" },
					});
				}
			},
			(Rows) => {
				// log(Rows)
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
					this.Status_Data = Rows.returnvalue.Department_Status;
					this.Remarks_Data = Rows.returnvalue.Remark;

					this.Department_Temp.Department_Id = 0;
					this.Department_Temp.Department_Name = "All";
					this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
					this.Department_Search = this.Department_Data[0];

					// this.Users_Temp.User_Details_Id = 0;
					// this.Users_Temp.User_Details_Name = "All";
					// this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
					// // this.User_Search = this.Users_Data[0];
					this.Branch_Temp1.Branch_Id = 0;

					this.Branch_Temp1.Branch_Name = "All";
					this.Branch_Data.unshift(this.Branch_Temp1);
					this.Search_Branch = this.Branch_Data[0];

					this.Status_Temp.Department_Status_Id = 0;
					this.Status_Temp.Department_Status_Name = "All";
					this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
					this.Status_Search = this.Status_Data[0];

					this.Remarks_Temp.Remarks_Id = 0;
					this.Remarks_Temp.Remarks_Name = "All";
					this.Remarks_Data.unshift(Object.assign({}, this.Remarks_Temp));
					this.Search_Remark = this.Remarks_Data[0];
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
				// this.Users_Temp.User_Details_Id = 0;
				// this.Users_Temp.User_Details_Name = "All";
				// this.Users_Data.unshift(this.Users_Temp);
				// this.User_Search = this.Users_Data[0];
				// this.ToUser_Search = this.Users_Data[0];

				this.Branch_Data = Rows[2].slice();
				this.Branch_Temp1.Branch_Id = 0;
				this.Branch_Temp1.Branch_Name = "All";
				this.Branch_Data.unshift(this.Branch_Temp1);
				this.Search_Branch = this.Branch_Data[0];

				this.Status_Data = Rows[5].slice();
				this.Status_Temp.Department_Status_Id = 0;
				this.Status_Temp.Department_Status_Name = "All";
				this.Status_Data.unshift(this.Status_Temp);
				this.Status_Search = this.Status_Data[0];

				this.Remarks_Data = Rows[4].slice();
				this.Remarks_Temp.Remarks_Id = 0;
				this.Remarks_Temp.Remarks_Name = "All";
				this.Remarks_Data.unshift(this.Remarks_Temp);
				this.Search_Remark = this.Remarks_Data[0];

				this.Enquiry_Source_Data = Rows[6].slice();
				this.Enquiry_Source_Temp1.Enquiry_Source_Id = 0;
				this.Enquiry_Source_Temp1.Enquiry_Source_Name = "All";
				this.Enquiry_Source_Data.unshift(this.Enquiry_Source_Temp1);
				this.Enquiry_Source_Search = this.Enquiry_Source_Data[0];

				this.Status_Data = Rows[5].slice();
				this.Status_Temp.Department_Status_Id = 0;
				this.Status_Temp.Department_Status_Name = "All";
				//this.Status_Data.unshift(this.Status_Temp);
				this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
				this.Search_Status = this.Status_Data[0];
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
				this.Search_Student_Report();
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
			this.Search_Student_Report();
		}
	}

	Search_Branch_User_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.FollowUp_Branch_ == null ||
			this.FollowUp_Branch_.Branch_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Branch", Type: "3" },
			});
		} else {
			if (
				this.Followup_Users_Data == undefined ||
				this.Followup_Users_Data.length == 0
			) {
				this.issLoading = true;
				this.Student_Service_.Search_Branch_User_Typeahead(
					this.FollowUp_Branch_.Branch_Id,
					""
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							// if(Rows.code!=undefined)
							// {
							//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.Code,Type:"false"}});
							// }
							this.Followup_Branch_User_Data = Rows[0];
							// this.Followup_Department_Data_Check = Rows[0];
							this.issLoading = false;
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
		}
	}
	display_User(User_: User_Details) {
		if (User_) {
			return User_.User_Details_Name;
		}
	}
	Search_Branch_Typeahead(event: any) {
		var Value = "";
		if (this.Followup_Branch_Data == undefined) this.Followup_Branch_Data = [];
		if (this.Followup_Branch_Data.length == 0) {
			if (event.target.value == "") Value = undefined;
			else Value = event.target.value;

			if (
				this.Followup_Branch_Data == undefined ||
				this.Followup_Branch_Data.length == 0
			) {
				this.issLoading = true;
				this.Student_Service_.Search_Branch_Typeahead("").subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Followup_Branch_Data = Rows[0];
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
	display_Branch(Branch_: Branch) {
		if (Branch_) {
			return Branch_.Branch_Name;
		}
	}
	Search_Branch_Department_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.FollowUp_Branch_ == null ||
			this.FollowUp_Branch_.Branch_Id == undefined
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
				if (
					this.Followup_Department_Data_Check == undefined ||
					this.Followup_Department_Data_Check.length == 0
				) {
					this.issLoading = true;
					this.Student_Service_.Search_Branch_Department_Typeahead(
						this.FollowUp_Branch_.Branch_Id,
						""
					).subscribe(
						(Rows) => {
							if (Rows != null) {
								// if(Rows.code!=undefined)
								// {
								//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.Code,Type:"false"}});
								// }
								this.Followup_Department_Data = Rows[0];
								this.Followup_Department_Data_Check = Rows[0];
								this.issLoading = false;
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
					this.Followup_Department_Data = this.Followup_Department_Data_Check;
				}
			}
		}
	}
	display_Department(Department_: Department) {
		if (Department_) {
			return Department_.Department_Name;
		}
	}

	Search_Department_Status_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		if (
			this.FollowUp_Department_ == null ||
			this.FollowUp_Department_.Department_Id == undefined
		) {
			const dialogRef = this.dialogBox.open(DialogBox_Component, {
				panelClass: "Dialogbox-Class",
				data: { Message: "Select Department", Type: "3" },
			});
		} else {
			if (
				this.Followup_Status_Data == undefined ||
				this.Followup_Status_Data.length == 0
			) {
				this.issLoading = true;
				this.Student_Service_.Search_Department_Status_Typeahead(
					this.FollowUp_Department_.Department_Id,
					""
				).subscribe(
					(Rows) => {
						if (Rows != null) {
							this.Followup_Status_Data = Rows[0];
							this.issLoading = false;
						}
					},
					(Rows) => {
						this.issLoading = false;
					}
				);
			}
		}
	}
	display_Followup_Status(Status_: Department_Status) {
		if (Status_) {
			return Status_.Department_Status_Name;
		}
	}

	Search_Department_User_Typeahead(event: any) {
		var Value = "";
		if (event.target.value == "") Value = undefined;
		else Value = event.target.value;

		// if(this.FollowUp_Department_==null||this.FollowUp_Department_.Department_Id==undefined)
		// {
		//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class', data:{Message:'Select Status',Type:"3"}});

		// }
		// else
		// {
		if (
			this.Followup_Users_Data == undefined ||
			this.Followup_Users_Data.length == 0
		) {
			this.issLoading = true;
			this.Student_Service_.Search_Department_User_Typeahead(
				this.FollowUp_Branch_.Branch_Id,
				this.FollowUp_Department_.Department_Id,
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
		//}
	}
	display_Followup_Users(Users_: User_Details) {
		if (Users_) {
			return Users_.User_Details_Name;
		}
	}
	

	

	Close_Click() {
		this.Show_FollowUp = false;
		this.main_View = true;
		this.Select_Student = false;
		this.Select_View = false;
		this.FollowUp_Branch_ = null;
		this.FollowUp_Department_ = null;
		this.FollowUp_Status_ = null;
		this.Followup_Users_ = null;
		this.Remarks_ = null;
		this.Student_.Next_FollowUp_Date = null;
		this.Student_.Check_Box_View = false;
		this.Select_Student = false;
		this.Student_.Transferto=false;

		this.FollowUp_.Next_FollowUp_Date = new Date();
		this.FollowUp_.Next_FollowUp_Date = this.New_Date(
			this.FollowUp_.Next_FollowUp_Date);

		
	}


	Followup_History(Student_Id,Student) {
		
		this.StudentName = Student
			
		//  this.Student_Id=this.Student_Data[this.Lead_EditIndex].Student_Id;
		let top = document.getElementById("Bottomdiv");
		if (top !== null) {
			top.scrollIntoView();
			top = null;
		}
		// this.Report = false
		if (this.Show_Followup_History == true) {
			this.Show_Followup_History = false;
			this.issLoading = true;
			
			this.Student_Service_.Followup_History(Student_Id).subscribe(
				(Rows) => {
						
					this.issLoading = false;
					if (Rows.returnvalue.FollowUp.length > 0)
						this.Followp_History_Data = Rows.returnvalue.FollowUp;
				},
				(Rows) => {
					this.issLoading = false;
					const dialogRef = this.dialogBox.open(DialogBox_Component, {
						panelClass: "Dialogbox-Class",
						data: { Message: "Error Occured", Type: "2" },
					});
				}
			);
		} else this.Show_Followup_History = true;
	}
	
Close_Click1()
{
    
// this.Entry_View = true;
this.Show_Followup_History=true;
this.Report = true;

}
	
}

