
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
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { User_Details_Service } from '../../../services/User_Details.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { Company } from '../../../models/Company';
import { Company_Service } from '../../../services/Company.Service';
import { Application_Settings } from '../../../models/Application_Settings';
import { Applicationdetails } from 'app/models/Applicationdetails';
import { Status_Change_Data } from 'app/models/Status_Change_Data';
import { Offerletter_Type } from 'app/models/Offerletter_Type';
import { Conditions } from 'app/models/Conditions';
import { Country_Service } from 'app/services/Country.Service';
import { ApplicationStatus } from 'app/models/ApplicationStatus';

// import { Company_Service } from '../../../services/Company.service';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
parse: {
dateInput: 'DD/MM/YYYY',
},
display: {
dateInput: 'DD/MM/YYYY',monthYearLabel: 'MMM YYYY',dateA11yLabel: 'DD/MM/YYYY',monthYearA11yLabel: 'MMMM YYYY',
},
};

@Component({
selector: 'app-Change_Status',
templateUrl: './Change_Status.component.html',
styleUrls: ['./Change_Status.component.css'],
providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
    })

export class Change_StatusComponent implements OnInit {
   
    Application_Div: boolean = false;

    array: any;
    color = 'primary';
    mode = 'indeterminate';

    issLoading: boolean;

    Login_User: string = "0";
    Menu_Id: number = 55;


    private socket;
    year: any;
	month: any;
	day: any;
	date: any;
	Hours: any;
	Minutes: any;
	Seconds: any;
    
	Application_Id_Log: number;
    Application_Settings_:Application_Settings = new Application_Settings()

    Application_Settings_Data:Application_Settings []
    ImageFile: any;
    File: string;
    file:File;
    companyfile:string;
    Permissions: any;
    ApplicationStatus_Id_Log: number;
	ApplicationStatus_Name_Log: string;
    selectedApplicationsIdDetails = {
		University_Id: null,
		Country_Id: null,
		Course_Id: null,
		Application_status_Id : null,
	  };


    Student_Id_Transfer: number;
        Conditions_Sub: Conditions = new Conditions();
        Conditions_Sub_Data: Conditions[];
        Conditions_Search_Data: Conditions[];
            ApplicationDetails_Data: Applicationdetails[];
    Application_Status_: ApplicationStatus = new ApplicationStatus();
    Registration_by:number;
    Transfer_app_Status_Id: number;
	Transfer_app_Student_Id: number;
	Transfer_app_Department_Id: number;
	Transfer_app_Status_Name: string;
        Offerletter_Type_: Offerletter_Type = new Offerletter_Type();
        Offerletter_Type_Data: Offerletter_Type[];
        Offerletter_Type_Temp: Offerletter_Type = new Offerletter_Type();
        Status_Change_Data_: Status_Change_Data = new Status_Change_Data();
    Department_Status_Mode_: Department_Status = new Department_Status();
    Department_Status_Mode1_: Department_Status = new Department_Status();
    Department_Status_Mode_Temp: Department_Status = new Department_Status();
    Department_Status_Mode_Temp1: Department_Status = new Department_Status();
    Department_Status_Mode_Data: Department_Status[];
    Department_Status_Mode_Data1: Department_Status[];

    App_List_Student_Name:string;

    
	Student_Id_Edit: number;
    Department_Status_Mode_Data1_Filter: Department_Status[];
    Department_Status_Mode_Data_Temp: Department_Status[];
    Application_Id_Ref_: number = 0;
    ApplicationDetails_Temp: Applicationdetails = new Applicationdetails();
        ApplicationDetails_Search_Temp: Applicationdetails = new Applicationdetails();
    
        ApplicationDetails_: Applicationdetails = new Applicationdetails();
    User_Profile_Department_:Department=new Department();
    User_Profile_Department_Temp:Department=new Department();
    User_Profile_Department_Data: Department[];
    Reg_Transfer_Status:boolean=false;
    Users_:User_Details=new User_Details();
    Users_Temp:User_Details=new User_Details();
    Users_Data: User_Details[];
    Document_Process_Users_:User_Details=new User_Details();
constructor(public User_Details_Service_:User_Details_Service,public Country_Service_: Country_Service,public Student_Service_: Student_Service,public Company_Service_:Company_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) 
{   }
ngOnInit() 
{
    this.Login_User = localStorage.getItem("Login_User");    
    this.Page_Load()   
}
Page_Load()
{
    this.Get_Menu_Status(55,this.Login_User); 
    this.Application_Div=true 
 
    this.Load_Dropdowns();
    this.Get_Student_PageLoadData_Dropdowns();
    
}
Get_Menu_Status(Menu_id, Login_user_id)
{    
this.issLoading = false;
this.Company_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==105)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {      
        if(Menu_id==105)
        {
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }  
        }
    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}
Save_Application_Setitngs()
{
    
    this.Application_Settings_.Department_Id=this.User_Profile_Department_.Department_Id;
    if (this.Application_Settings_.Settings_Value== undefined || this.Application_Settings_.Settings_Value == null  ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Call Status Value', Type: "3" } });
        return;
    }

    this.Application_Settings_.Receipt_Notification_User=this.Users_.User_Details_Id;
    this.Application_Settings_.Registration_By=this.Registration_by

    
    if(this.Application_Settings_.Register_Transfer_Status== true){
        if (
            this.User_Profile_Department_.Department_Id == undefined ||
            this.User_Profile_Department_.Department_Id == null ||
            this.User_Profile_Department_.Department_Id == 0
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Select Department", Type: "3" },
            });
            return;
        }
    }
    this.issLoading = true;
    
    this.Company_Service_.Save_Application_Settings(this.Application_Settings_).subscribe(Save_status => {
            
            this.issLoading=false;
        if(Number(Save_status[0].Application_Settings_Id_)>0)
        { 
            // this.Application_Settings_.Application_Settings_Id=Save_status[0].Application_Settings_Id_
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    //    this.Clr_Application_Settings();
    
    }
     
        
        this.issLoading=false;
        },
        Rows => { 
            
        this.issLoading=false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 
    });
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

// clr_Chat_Window() {
//     ;
//     this.tagged_users = [];
//     this.Users = [];
//     this.messageText = "";
//     this.ImageFile_ = [];
//     this.Display_File_ = "";
//     this.User_Details_Data = [];
//     this.User_Div=false;
// }

// Add_Comment(application_details_u: any, i) { 
    
// this.clr_Chat_Window();
// // Save required variable for fetching department statuses to selectedApplicationsIdDetails
// this.selectedApplicationsIdDetails.Country_Id =
//   application_details_u.Country_Id;
// this.selectedApplicationsIdDetails.Course_Id =
//   application_details_u.Course_Id;
// this.selectedApplicationsIdDetails.University_Id =
//   application_details_u.University_Id;
  
//   this.selectedApplicationsIdDetails.Application_status_Id= application_details_u.Application_status_Id


//     this.Department_Status_Mode_Data1=[];
//     this.Department_Status_Mode_Data1_Filter=[];
//     this.Department_Status_Mode1_=null;

//     //         this.application_details_View = false;
//     // this.Applicationmodal_View = false;
//     // this.Change_Status_View = false;
//     // this.list_view=false;
//     // this.Add_Comment_View=true;
//     // this.Search_Div=false
//     //   this.Application_Status_Edit=application_details_u.;
//     this.App_List_Student_Name = application_details_u.Student_Name;
    
//     this.Student_Id_Transfer = application_details_u.Student_Id;
//     this.Application_Status_.Remark = application_details_u.Remark;
//     this.Application_Id_Log = application_details_u.Application_details_Id;
//     this.ApplicationStatus_Id_Log = application_details_u.Application_status_Id;
//     this.Application_fees_paid = application_details_u.Application_Fees_Paid;
//     this.ApplicationStatus_Name_Log =
//         application_details_u.Application_Status_Name;

//     this.group_restriction = application_details_u.Group_Restriction;

//     if (this.group_restriction > 0) {
//         this.Load_Application_status_forchangestatus_restriction(
//             this.group_restriction
//         );
//     } else {
//         this.Application_Status_Mode_Data =
//             this.Application_Status_Mode_Data_Temp;
//     }

//     this.Application_Id_Temp_ = application_details_u.Application_details_Id;
//     // this.Change_Status_View = true;

//     this.ApplicationDetails_.Followup_Date = new Date();
//     this.ApplicationDetails_.Followup_Date = this.New_Date(
//         new Date(moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD"))
//     );
//     this.ApplicationDetails_.Deadline_Date = new Date();
//     this.ApplicationDetails_.Deadline_Date = this.New_Date(
//         new Date(moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD"))
//     );



//     ;
//     this.ApplicationDetails_.Application_No=application_details_u.Application_No;
//     ;
// for(var n=0;n<this.Department_Status_Mode_Data.length;n++)
// {
// if(application_details_u.Department_Status_Id==this.Department_Status_Mode_Data[n].Department_Status_Id)
// this.Department_Status_Mode_=this.Department_Status_Mode_Data[n];
// }
// ;
// for(var m=0;m<this.Agent_Mode_Data.length;m++)
// {
// if(application_details_u.Agent_Id==this.Agent_Mode_Data[m].Agent_Id)
// this.Agent_Mode_=this.Agent_Mode_Data[m];
// }
//     for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
//         if (
//             application_details_u.Transfer_Department_Id ==
//             this.Automatic_Department_Data[j].Department_Id
//         )
//             this.Automatic_Department_ = this.Automatic_Department_Data[j];
//     }
//     this.Offerletter_Type_.Offerletter_Type_Id=1;
//     //     if (this.Application_Status_.Notification_Status.toString() == "1")
//     //     this.Application_Status_.Notification_Status = true;
//     //    else this.Application_Status_.Notification_Status = false;

//     for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
//         if (
//             application_details_u.Notification_Department_Id ==
//             this.Automatic_Department_Data[k].Department_Id
//         )
//             this.Notification_Department_ = this.Automatic_Department_Data[k];
//     }


//     // Save all required data to this.taskCreationData to create task when changing status
// this.taskCreationData = application_details_u;
// this.taskCreationData.Student_Task_Id = 0;
// this.taskCreationData.Department_Id = this.Department_Data;
// this.taskCreationData.By_User_Id = this.Login_User_Id;
// this.taskCreationData.By_User_Name = localStorage.getItem("uname");
// this.taskCreationData.Department_Name = localStorage.getItem(
// "Login_Department_Name"
// );
// this.taskCreationData.Department_Id =
// localStorage.getItem("Login_Department");
// this.taskCreationData.Task_Group_Id = 4;
// this.taskCreationData.To_User = 0;
// this.taskCreationData.To_User_Name = "";
// this.taskCreationData.Followup_Date = this.findNewDate();
// this.taskCreationData.Remark = "";

//     this.Load_Conditions_Subdata_Edit(this.Application_Id_Log);

//     this.Get_Comments(this.Application_Id_Log)


// }


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
        this.Department_Status_Mode1_.Department_Status_Id== null ||
        this.Department_Status_Mode1_.Department_Status_Id== undefined
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Select Status", Type: "3" },
        });
        return;
    }

    if (
        this.ApplicationDetails_.Bph_Remark == undefined ||
        this.ApplicationDetails_.Bph_Remark == null ||
        this.ApplicationDetails_.Bph_Remark == "" 
    ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Enter Remark", Type: "3" },
        });
        return;
    }



        
    // 	if (this.Offerletter_Type_.Offerletter_Type_Id==1) {
    // 	if (this.Conditions_Sub_Data==null||this.Conditions_Sub_Data==undefined) {
    // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 			panelClass: "Dialogbox-Class",
    // 			data: { Message: "Add atleast one condition", Type: "3" },
    // 		});
    // 		return;
    // 	}
    // }

    this.Status_Change_Data_.Application_details_Id = this.Application_Id_Log;
    this.Status_Change_Data_.LoginUser = Number(this.Login_User);
    this.Status_Change_Data_.Application_status_Id =
        this.Department_Status_Mode1_.Department_Status_Id;
    this.Status_Change_Data_.Application_Status_Name =
        this.Department_Status_Mode1_.Department_Status_Name;
    // this.Status_Change_Data_.Agent_Id = this.Agent_Mode_.Agent_Id;
    this.Status_Change_Data_.Application_No =
        this.ApplicationDetails_.Application_No;
    // this.Status_Change_Data_.Agent_Name = this.Agent_Mode_.Agent_Name;
    this.Status_Change_Data_.Offerletter_Type_Id =
        this.Offerletter_Type_.Offerletter_Type_Id;
    this.Status_Change_Data_.Offerletter_Type_Name =
        this.Offerletter_Type_.Offerletter_Type_Name;

        this.Status_Change_Data_.Remark =
        this.ApplicationDetails_.Bph_Remark

        this.Status_Change_Data_.Class_Id =
        this.Department_Status_Mode1_.Class_Id;
        this.Status_Change_Data_.Class_Name =
        this.Department_Status_Mode1_.Class_Name;
        this.Status_Change_Data_.Class_Order =
        this.Department_Status_Mode1_.Class_Order;

        ;
    this.Status_Change_Data_.Conditions_Array = this.Conditions_Sub_Data;
    this.issLoading = true;
    this.Student_Service_.Save_Lodgemet(this.Status_Change_Data_).subscribe(
        (Save_status) => {
            
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
                            " Selected status only used with Registered Student",
                        Type: "3",
                    },
                });
                this.issLoading = false;
                return;
            } 


            // this.Total_Rows = this.Total_Rows - this.Student_Data.length;
            // this.Search_Student();
            this.Conditions_Sub_Data=[];
            // this.Get_ApplicationDetails();
            // this.Clr_Bph_Status();
            this.Get_ApplicationDetails();
            this.Clr_Bph_Status();
            this.Close_Click();
            // this.Search_Student();
            // this.Search_Lead_button();
            this.Transfer_app_Status_Id = Save_status[0].Application_Status_Id_;
            this.Transfer_app_Student_Id = Save_status[0].Student_Id_;
            this.Transfer_app_Department_Id = Save_status[0].Transfer_department_;
            this.Transfer_app_Status_Name = Save_status[0].Application_Status_Name_;
            this.Application_Id_Ref_ = Save_status[0].Application_details_Id_;

            if (Save_status[0].Transferdept_Tik_ == 1) {
                this.Transfer_Cofirmation_Application("");
            } else if (Save_status[0].Notification_Tik_ == 1) {
                if (Number(this.Login_User != Save_status[0].To_User_)) {
                    var message = {
                        Student_Name: Save_status[0].Student_Name_,
                        From_User_Name: Save_status[0].From_User_Name_,
                        Notification_Type_Name: Save_status[0].Notification_Type_Name_,
                        Entry_Type: Save_status[0].Entry_Type_,
                        To_User: Save_status[0].To_User_,
                        Notification_Id: Save_status[0].Notification_Id_,
                        Student_Id: Save_status[0].Student_Id_,
                    };
                    this.socket.emit("new-message", message);
                }
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



    Search_Application_StatusforChangeStatus_Typeahead(event: any) {
        
        var Value = "";
        if (event.target.value == "") Value = "";
        else Value = event.target.value.toLowerCase();

        if (this.Department_Status_Mode_Data1 == undefined || this.Department_Status_Mode_Data1.length == 0) {
            this.issLoading = true;

            this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead(Value,this.Login_User).subscribe(
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
    display_Application_Status(Application_Status_e: Department_Status) {
        if (Application_Status_e) {
            return Application_Status_e.Department_Status_Name;
        }
    }

Transfer_Cofirmation_Application(Transfer_Source) {
        
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
                // this.Search_Lead_button();
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
Close_Click() {
    let top = document.getElementById("Topdiv");
    if (top !== null) {
        top.scrollIntoView();
        top = null;
    }
    // this.Visa_Tab_View=false;

  
    //this.clr_FollowUp();
}
Clr_Bph_Status() {
    // if (this.Department_Status_Mode_Data != null && this.Department_Status_Mode_Data != undefined)
    // 	this.Department_Status_Mode_ = this.Department_Status_Mode_Data[0];
    this.Department_Status_Mode1_=null

    this.ApplicationDetails_.Bph_Remark = "";
}
Get_ApplicationDetails() {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;
    this.ApplicationDetails_.Date_Of_Applying = new Date();
    this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
        this.ApplicationDetails_.Date_Of_Applying
    );
    this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
        new Date(
            moment(this.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
        )
    );

    this.ApplicationDetails_.Fees_Payment_Last_Date = new Date();
    this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
        this.ApplicationDetails_.Fees_Payment_Last_Date
    );
    this.ApplicationDetails_.Fees_Payment_Last_Date = this.New_Date(
        new Date(
            moment(this.ApplicationDetails_.Fees_Payment_Last_Date).format(
                "YYYY-MM-DD"
            )
        )
    );
    
    this.Student_Service_.Get_ApplicationDetails(
        this.Student_Id_Edit
    ).subscribe(
        (Rows) => {
            
            this.ApplicationDetails_Data = Rows[0];
            this.issLoading = false;
        },
        (Rows) => {
            this.issLoading = false;
        }
    );
}

Get_Application_Settings()
{  
    this.Company_Service_.Get_Application_Settings().subscribe(Rows =>
        {
       
            
            this.Application_Settings_Data =Rows['Settings_Data']

            if(this.Application_Settings_Data[0]!=undefined){
                this.Application_Settings_=this.Application_Settings_Data[0];
            }

            if(this.Application_Settings_Data[0].Registration_By==1){
                this.Registration_by=1
            }
            else
            this.Registration_by=2

            
            for (var i = 0; i < this.User_Profile_Department_Data.length; i++) {
                if (this.Application_Settings_.Department_Id == this.User_Profile_Department_Data[i].Department_Id)
                this.User_Profile_Department_ = this.User_Profile_Department_Data[i];
                }

                for (var i = 0; i < this.Users_Data.length; i++) {
                    if (this.Application_Settings_.Receipt_Notification_User == this.Users_Data[i].User_Details_Id)
                    this.Users_ = this.Users_Data[i];
                    }


                //    else{
        //     this.Application_Settings_.Application_Settings_Id=0;
        //    }
            this.issLoading=false;
        },
        Rows => { 
            
        this.issLoading=false;
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}})
    })
}


Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
        (Rows) => {

            
            this.Users_Data = Rows[18];
            this.Users_Temp.User_Details_Id =0;
            this.Users_Temp.User_Details_Name ="Select";
            this.Users_Data.unshift(Object.assign({},this.Users_Temp));      
            this.Users_ = this.Users_Data[0];
           // this.Document_Process_Users_ = this.Users_Data[0];

        },
        (Rows) => {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Error Occured", Type: "2" },
            });
        }
    );
}


// Clr_Application_Settings()
// {
//     // this.Application_Settings_.Application_Settings_Id=0;
//     // this.Application_Settings_.Settings_Value="";
//     this.Application_Settings_.Register_Transfer_Status="";

    
// if(this.User_Profile_Department_Data!=null && this.User_Profile_Department_Data != undefined)
// this.User_Profile_Department_=this.User_Profile_Department_Data[0];



// }





Load_Dropdowns() 
    {
         
    this.User_Details_Service_.Get_Users_Load_Data().subscribe(Rows =>
    {



this.User_Profile_Department_Data=Rows.Profile_Department;

   this.User_Profile_Department_Temp.Department_Id = 0;
   this.User_Profile_Department_Temp.Department_Name = "Select";
   this.User_Profile_Department_Data.unshift(this.User_Profile_Department_Temp);
   this.User_Profile_Department_ = this.User_Profile_Department_Data[0];
   
    this.Get_Application_Settings();


    },
  Rows => { 
 const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}}); });
}



// Change_Bph_Status(application_details_u: any, i) {
		
//     this.Department_Status_Mode_Data1=[];
//     this.Department_Status_Mode_Data1_Filter=[];
//     this.Department_Status_Mode1_=null;

//             // this.application_details_View = false;
//     // this.Applicationmodal_View = false;
//     // this.Change_Status_View = true;
//     //   this.Application_Status_Edit=application_details_u.;
//     this.App_List_Student_Name = application_details_u.Student_Name;
//     this.Student_Id_Transfer = application_details_u.Student_Id;
//     this.Application_Status_.Remark = application_details_u.Remark;
//     this.Application_Id_Log = application_details_u.Application_details_Id;
//     this.ApplicationStatus_Id_Log = application_details_u.Application_status_Id;
//     this.ApplicationStatus_Name_Log =
//         application_details_u.Application_Status_Name;

//     this.group_restriction = application_details_u.Group_Restriction;

//     if (this.group_restriction > 0) {
//         this.Load_Application_status_forchangestatus_restriction(
//             this.group_restriction
//         );
//     } else {
//         this.Application_Status_Mode_Data =
//             this.Application_Status_Mode_Data_Temp;
//     }

//     this.Application_Id_Temp_ = application_details_u.Application_details_Id;
//     this.Change_Status_View = true;

//     // if (this.Offerchasing_section_View == true) {
//     // 	this.Offtertype_View = true;
//     // }


//     // this.Search_Div = false;

//     //   for (var h = 0; h < this.Application_Status_Mode_Data.length; h++) {
//     //     if (
//     //         application_details_u.Application_status_Id ==
//     //         this.Application_Status_Mode_Data[h].Application_status_Id
//     //     )
//     //         this.Application_Status_Mode_ = this.Application_Status_Mode_Data[h];
//     // }

//     // 	if (this.Application_Status_.Transfer_Status.toString() == "1")
//     //     this.Application_Status_.Transfer_Status = true;
//     //    else this.Application_Status_.Transfer_Status = false;


//     // this.Department_Status_Mode_Temp1.Department_Status_Id = application_details_u.Application_status_Id;
//     // this.Department_Status_Mode_Temp1.Department_Status_Name = application_details_u.Application_Status_Name;
//     // this.Department_Status_Mode1_ = Object.assign({}, this.Department_Status_Mode_Temp1);



//     ;
//     this.ApplicationDetails_.Application_No=application_details_u.Application_No;
//     ;
// for(var n=0;n<this.Department_Status_Mode_Data.length;n++)
// {
// if(application_details_u.Department_Status_Id==this.Department_Status_Mode_Data[n].Department_Status_Id)
// this.Department_Status_Mode_=this.Department_Status_Mode_Data[n];
// }
// ;
// for(var m=0;m<this.Agent_Mode_Data.length;m++)
// {
// if(application_details_u.Agent_Id==this.Agent_Mode_Data[m].Agent_Id)
// this.Agent_Mode_=this.Agent_Mode_Data[m];
// }
//     for (var j = 0; j < this.Automatic_Department_Data.length; j++) {
//         if (
//             application_details_u.Transfer_Department_Id ==
//             this.Automatic_Department_Data[j].Department_Id
//         )
//             this.Automatic_Department_ = this.Automatic_Department_Data[j];
//     }
//     this.Offerletter_Type_.Offerletter_Type_Id=1;
//     //     if (this.Application_Status_.Notification_Status.toString() == "1")
//     //     this.Application_Status_.Notification_Status = true;
//     //    else this.Application_Status_.Notification_Status = false;

//     for (var k = 0; k < this.Automatic_Department_Data.length; k++) {
//         if (
//             application_details_u.Notification_Department_Id ==
//             this.Automatic_Department_Data[k].Department_Id
//         )
//             this.Notification_Department_ = this.Automatic_Department_Data[k];
//     }

//     this.Load_Conditions_Subdata_Edit(this.Application_Id_Log);


// }





}


