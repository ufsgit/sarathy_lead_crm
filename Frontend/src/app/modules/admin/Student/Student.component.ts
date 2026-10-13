import { Component, DebugElement, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Student_Service } from "../../../services/Student.Service";
import { Country_Service } from "../../../services/Country.Service";
import { Intake_Service } from "../../../services/Intake.service";
import { University_Service } from "../../../services/University.Service";
import { Subject_Service } from "../../../services/Subject.Service";
import { Document_Service } from "../../../services/Document.Service";
import { Course_Service } from "../../../services/Course.Service";
import { Department_Service } from "../../../services/Department.Service";
import { Student_Message_Service } from "../../../services/Student_Message.Service";
import { Client_Accounts_Service } from "../../../services/Client_Accounts.Service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { Student } from "../../../models/Student";
import { Course } from "../../../models/Course";
import { Gender } from "../../../models/Gender";
import { Passport } from "../../../models/Passport";
import { Resume } from "../../../models/Resume";
import { LOR_1 } from "../../../models/LOR_1";
import { LOR_2 } from "../../../models/LOR_2";
import { MOI } from "../../../models/MOI";
import { SOP } from "../../../models/SOP";
import { Agent } from "../../../models/Agent";
import { ApplicationStatus } from "../../../models/ApplicationStatus";
import { Internship } from "../../../models/Internship";
import { Level_Detail } from "../../../models/Level_Detail";
import { Subject } from "../../../models/Subject";
import { Remarks } from "../../../models/Remarks";
import { feesreceiptdocument } from "../../../models/feesreceiptdocument";
import { Client_Accounts } from "../../../models/Client_Accounts";
import { Duration } from "../../../models/Duration";
import { Country } from "../../../models/Country";
import { University } from "../../../models/University";
import { Document } from "../../../models/Document";
import { Student_Message } from "../../../models/Student_Message";
import { Student_Course_Apply } from "../../../models/Student_Course_Apply";
import { Student_Status } from "../../../models/Student_Status";
import { Enquiry_Source } from "../../../models/Enquiry_Source";
import { User_Details } from "../../../models/User_Details";
import { Department } from "../../../models/Department";
import { Department_Status } from "../../../models/Department_Status";
import { Branch } from "../../../models/Branch";
import { StudentChecklist } from "../../../models/StudentChecklist";
import { Student_FollowUp } from "../../../models/Student_FollowUp";
import { Course_Selection } from "../../../models/Course_Selection";
import { Student_Course_Selection } from "../../../models/Student_Course_Selection";
import { Internship_Service } from "../../../services/Internship.Service";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import {
  ROUTES,
  Get_Page_Permission,
} from "../../../components/sidebar/sidebar.component";
import { MatDialog, MatGridTileHeaderCssMatStyler } from "@angular/material";
import { Student_Document } from "../../../models/Student_Document";
import { Ielts } from "../../../models/Ielts";
import { Intake } from "../../../models/Intake";
import { Intake_Year } from "../../../models/Intake_Year";
import { Course_Apply } from "../../../models/Course_Apply";
import { Applicationdetails } from "../../../models/Applicationdetails";
import { ApplicationdetailsHistory } from "../../../models/ApplicationdetailsHistory";
import { Applicationdocument } from "../../../models/Applicationdocument";
import { FormControl } from "@angular/forms";
import { Fees } from "../../../models/Fees";
import { Fees_Receipt } from "../../../models/Fees_Receipt";
import { Fees_Receipt_Data } from "../../../models/Fees_Receipt_Data";
import { Company_Service } from "../../../services/Company.Service";
import { Company } from "../../../models/Company";
import { Registration_Details } from "../../../models/Registration_Details";
import { Followup_History } from "../../../models/FollowUp_History";
import { environment } from "../../../../environments/environment.js";
import * as JSZip from "jszip";
import { HttpClient } from "@angular/common/http";
import { saveAs } from "file-saver";
import { Sub_Section } from "../../../models/Sub_Section";
import { Sub_Section_Service } from "../../../services/Sub_Section.Service";
import { Send_Welcome_Mail } from "../../../models/Send_Welcome_Mail";
import { Visa } from "../../../models/Visa";
import { Pre_Visa } from "../../../models/Pre_Visa";
import { User_Details_Service } from "../../../services/User_Details.Service.js";
import { Location } from "../../../models/Location.js";
import { Currency } from "../../../models/Currency.js";
import { Review } from "../../../models/Review";
import { Enquiry_For } from "../../../models/Enquiry_For";
import { enquiry_mode } from "../../../models/Enquiry_Mode";

import { Visa_Document } from "../../../models/Visa_Document";
import { Invoice } from "../../../models/Invoice";
import { Marital_Status } from "../../../models/Marital_Status";
import { Visa_Type } from "../../../models/Visa_Type";
import { Invoice_Document } from "../../../models/Invoice_Document";
import { MatTooltipModule } from "@angular/material/tooltip";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Shore } from "../../../models/Shore";
//import { Shore } from "app/models/Shore";
import { Qualification } from "../../../models/Qualification";
import { Work_Experience } from "../../../models/Work_Experience";
import { Refund_Request } from "../../../models/Refund_Request";
import { Ielts_Details } from "../../../models/Ielts_Details";
import { IELTS_Type } from "../../../models/IELTS_Type";
import { Profile } from "../../../models/Profile";
import { Application_List } from "../../../models/Application_List";
import { Application_Transfer } from "../../../models/Application_Transfer";
import { Bph_Status } from "../../../models/Bph_Status";
import { Proceeding_Details } from "../../../models/Proceeding_Details";
import { Application_Course } from "../../../models/Application_Course";
import { Class } from "../../../models/Class";
import { AgmMap } from "@agm/core";
import { Sort_By } from "../../../models/Sort_By";
import { Student_Task } from "../../../models/Student_Task";
import { Task_Status } from "../../../models/Task_Status";
import { Sub_Status } from "../../../models/Sub_Status";
import { Extension_Data } from "../../../models/Extension_Data";
import { Pre_Admission } from "../../../models/Pre_Admission";
import { Task_Item } from "../../../models/Task_Item";
import * as io from "socket.io-client";
import { Transfer } from "../../../models/Transfer";

import { Status_Change_Data } from "../../../models/Status_Change_Data";
import { Offerletter_Type } from "../../../models/Offerletter_Type";
import { Conditions } from "../../../models/Conditions";
import { Department_Status_Service } from "../../../services/Department_Status.Service";
import { Files_Upload_Service } from "../../../services/Files_Upload.Service";
import { country } from "aws-sdk/clients/importexport";
import { Tagged_User } from "../../../models/Tagged_User";
import { Chats } from "../../../models/Chats";
import { Chat_Window_Service } from "../../../services/Chat_Window.Service";
import { Commission } from "../../../models/Commission";
import { EmailTemplateDialogComponent } from "../../../components/email-template-dialog.component";
import { Qualification_Type } from "../../../models/Qualification_Type";
import { Document_Type } from "../../../models/Document_Type";
import { EmailTemplateService } from "../../../services/email-template.service";
import { Number } from "aws-sdk/clients/iot";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { profile } from "console";
import { Brand } from "../../../models/Brand";
import { DSE } from "../../../models/DSE";
// import Quill from 'quill';
// import { AnyTxtRecord } from 'dns';
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
const moment = _rollupMoment || _moment;
@Component({
  selector: "app-Student",
  templateUrl: "./Student.component.html",
  styleUrls: ["./Student.component.css"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class StudentComponent implements OnInit {
  // private url = "http://localhost:3510";
  // private url = 'https://regdemoapi.adat.in/';
  // private url = 'https://regdemoapi.adat.in/';
  url = environment.NotificationPath; // 'http://regnewapi.trackbox.co.in:3646/'

  private socket;
  year: any;
  month: any;
  day: any;
  date: any;
  Hours: any;
  Minutes: any;
  Seconds: any;

  Search_FromDate: Date = new Date();

  Search_ToDate: Date = new Date();
  Fees_Date: Date = new Date();
  zip = new JSZip();
  files = [];

  Registration_Data_: Registration_Details = new Registration_Details();
  Send_Welcome_Mail_Data_: Send_Welcome_Mail = new Send_Welcome_Mail();

  FollowUp_Department_: Department = new Department();
  Student_Id_Edit: number;
  Application_details_Id_History: number;
  Search_Agent: Client_Accounts = new Client_Accounts();
  Save_Agent_: Client_Accounts = new Client_Accounts();
  Student_Message_: Student_Message = new Student_Message();
  Subject_: Subject = new Subject();
  Search_Country: Country = new Country();
  Search_Subject: Subject = new Subject();
  Subject_Id: number;
  Document_Data: Document[];
  tagged_users: Tagged_User[];
  Student_Document_Data: Student_Document[];
  Student_Message_Data: Student_Message[];
  Amount: number;
  Description: string;

  FollowUp_Department_1: Department = new Department();

  Search_Intake_Temp: any;

  Search_Intake_Year_Temp: any;

  Search_Sub_Section_Temp: any;
  Registered_Check: number;

  Missed_Count: number;
  Data_Count: number;
  Save_Student_Approved_Status: number;
  Course_Link_Button: boolean = false;

  Gender_Data: Gender[];
  Gender_: Gender = new Gender();
  Gender_Name_Search: string;
  Bph_Approved_Status: number;
  Old_Application_Status_Id: number;

  Task_Status_Id_: number = 0;
  Task_Item_Id_: number = 0;

  Enquiry_For_: Enquiry_For = new Enquiry_For();
  Enquiry_For_Temp: Enquiry_For = new Enquiry_For();
  Enquiry_For_Data: Enquiry_For[];

  Search_Enquiry_For_Temp: Enquiry_For = new Enquiry_For();
  Search_Enquiry_For_: Enquiry_For = new Enquiry_For();

  enquiry_mode_: enquiry_mode = new enquiry_mode();
  enquiry_mode_Temp: enquiry_mode = new enquiry_mode();
  enquiry_mode_Data: enquiry_mode[];

  Location_: Location = new Location();
  Location_Data: Location[];
  Location_Temp: Location = new Location();

  class_: Class = new Class();
  class_Temp: Class = new Class();
  class_Data: Class[];

  Sort_By_Search: Sort_By = new Sort_By();
  Sort_By_Temp: Sort_By = new Sort_By();
  Sort_By_Data: Sort_By[];

  Shore_: Shore = new Shore();
  Shore_Temp: Shore = new Shore();
  Shore_Data: Shore[];

  Qualification_: Qualification = new Qualification();
  Qualification_Data_: Qualification_Type = new Qualification_Type();
  Qualification_Type_: Qualification_Type = new Qualification_Type();
  Qualification_Type_Temp: Qualification_Type = new Qualification_Type();
  Qualification_Type_Data: Qualification_Type[];

  Ielts_Details_: Ielts_Details = new Ielts_Details();

  Work_experience_: Work_Experience = new Work_Experience();
  Refund_Request_: Refund_Request = new Refund_Request();

  // this.socket = io(this.url, { transports: ["websocket"] });
  // this.socket = io(this.url);

  Intake_Mode_: Intake = new Intake();
  Intake_Mode_Temp: Intake = new Intake();
  Intake_Mode_Data: Intake[];

  Currency_: Currency = new Currency();
  Currency_Temp: Currency = new Currency();
  Currency_Data: Currency[];

  Task_Status_: Task_Status = new Task_Status();
  Task_Status_Temp: Task_Status = new Task_Status();
  Task_Status_Data: Task_Status[];
  Task_Status_Search: Task_Status = new Task_Status();

  Cas_Followup_: Student_Task = new Student_Task();

  Profile_Intake_Mode_: Intake = new Intake();
  Profile_Intake_Mode_Temp: Intake = new Intake();
  Profile_Intake_Mode_Data: Intake[];

  Marital_Status_: Marital_Status = new Marital_Status();
  Marital_Status_Temp: Marital_Status = new Marital_Status();
  Marital_Status_Data: Marital_Status[];

  Visa_Type_: Visa_Type = new Visa_Type();
  Visa_Type_Temp: Visa_Type = new Visa_Type();
  Visa_Type_Data: Visa_Type[];

  IELTS_Type_: IELTS_Type = new IELTS_Type();
  IELTS_Type_Temp: IELTS_Type = new IELTS_Type();
  IELTS_Type_Data: IELTS_Type[];

  //Task_Status_: Task_Status = new Task_Status();

  // ApplicationDetails_:Applicationdetails = new Applicationdetails();
  ApplicationDetails_Data: Applicationdetails[];
  Qualification_Data: Qualification[];

  Previsa_Data: Pre_Visa[];
  Preadmission_Data: Pre_Admission[];

  Refund_Request_Data: Refund_Request[];

  Work_experience_Data: Work_Experience[];

  Student_Checklist_Data: Pre_Visa[];

  Student_Checklist_Preadmission_Data: Pre_Admission[];

  FeesrecepitDetails_Data: Fees[];
  ApplicationdetailsHistory_Data: ApplicationdetailsHistory[];
  Applicationdocument_Data: Applicationdocument[];

  StudentChecklist_Data: StudentChecklist[];

  Intake_Year_Mode_: Intake_Year = new Intake_Year();
  Intake_Year_Mode_Temp: Intake_Year = new Intake_Year();
  Intake_Year_Mode_Data: Intake_Year[];

  Agent_Mode_: Agent = new Agent();
  Agent_Mode_Temp: Agent = new Agent();
  Agent_Mode_Data: Agent[];

  Application_Status_Mode_: ApplicationStatus = new ApplicationStatus();
  Application_Status_Mode_Temp: ApplicationStatus = new ApplicationStatus();
  Application_Status_Mode_Data: ApplicationStatus[];

  Resume_Data: Resume[];
  Resume_: Resume = new Resume();
  Resume_Name_Search: string;

  Resume_Mode_: Resume = new Resume();
  Resume_Mode_Temp: Resume = new Resume();
  Resume_Mode_Data: Resume[];

  Passport_Data: Passport[];
  Passport_: Passport = new Passport();
  Passport_Name_Search: string;

  Passport_Mode_: Passport = new Passport();
  Passport_Mode_Temp: Passport = new Passport();
  Passport_Mode_Data: Passport[];

  Spouse_Visa_: Passport = new Passport();
  Spouse_Visa_Temp: Passport = new Passport();
  Spouse_Visa_Data: Passport[];

  LOR_1_Data: LOR_1[];
  LOR_1_: LOR_1 = new LOR_1();
  LOR_1_Data_Name_Search: string;

  LOR_1_Mode_: LOR_1 = new LOR_1();
  LOR_1_Mode_Temp: LOR_1 = new LOR_1();
  LOR_1_Mode_Data: LOR_1[];

  LOR_2_Data: LOR_2[];
  LOR_2_: LOR_2 = new LOR_2();
  LOR_2_Data_Name_Search: string;

  LOR_2_Mode_: LOR_2 = new LOR_2();
  LOR_2_Mode_Temp: LOR_2 = new LOR_2();
  LOR_2_Mode_Data: LOR_2[];

  MOI_Data: MOI[];
  MOI_: MOI = new MOI();
  MOI_Data_Name_Search: string;

  MOI_Mode_: MOI = new MOI();
  MOI_Mode_Temp: MOI = new MOI();
  MOI_Mode_Data: MOI[];

  SOP_Data: SOP[];
  SOP_: SOP = new SOP();
  SOP_Data_Name_Search: string;

  SOP_Mode_: SOP = new SOP();
  SOP_Mode_Temp: SOP = new SOP();
  SOP_Mode_Data: SOP[];
  srchbtn_click: number;
  Ielts_: Ielts = new Ielts();
  Ielts_Temp: Ielts = new Ielts();
  Ielts_Data: Ielts[];

  Ielts_Mode_: Ielts = new Ielts();
  Ielts_Mode_Temp: Ielts = new Ielts();
  Ielts_Mode_Data: Ielts[];

  Registration_Visiblility: boolean;
  Remove_Registration_Visibility: boolean;

  Activte_Visiblility: boolean;
  Remove_Activte_Visiblility: boolean;

  Agent_View: boolean;
  Change_Status_Button_View: boolean;
  Student_Approve_Button_View: boolean;
  Remove_Approval_Button_View: boolean;
  Application_Active_Button_View: boolean;
  Application_Deactive_Button_View: boolean;
  Move_To_PreApplication_Button_View: boolean;
  Send_To_Bph_Button_View: boolean;
  Visa_Rejection_Button_View: boolean;
  Closed_Button_View: boolean;
  Cas_Transfer_Button_View: boolean;
  Refund_Transfer_Button_View: boolean;
  Counsilor_Transfer_Button_View: boolean;
  Application_Transfer_Button_View: boolean;
  Admission_Transfer_Button_View: boolean;
  PreAdmission_Transfer_Button_View: boolean;
  PreVisa_Transfer_Button_View: boolean;
  Visa_Transfer_Button_View: boolean;
  myInnerHeighttemp: number;

  Offer_Received: Boolean = true;
  Users: User_Details[];

  Page_Length_Course: number = 20;
  missedfollowup_count: number = 0;
  followup_count: number = 0;
  Student_Course_Apply_Data: Student_Course_Apply[];
  Student_Course_Apply_: Student_Course_Apply = new Student_Course_Apply();

  Student_Checklist_Country_Id: number;
  Student_Preadmission_Checklist_Country_Id: number;

  issLoading: boolean = true;
  EditIndex: number;
  Student_Data: Student[];
  Student_: Student = new Student();
  Profile_: Profile = new Profile();
  Student_Name_Search: string;
  Entry_View: boolean = true;
  History_View: boolean = false;
  Refund_View: boolean = true;
  Historydata_View: boolean = true;
  App_View: boolean = true;
  Applicationmodal_View: boolean = true;
  Languagemodal_View: boolean = true;
  Qualificationmodal_View: boolean = true;
  Qualificationnew_View: boolean = true;
  Workexperiencenew_View: boolean = true;

  Applicationlist_View: boolean = true;
  Feesmodal_View: boolean = true;
  Visamodal_View: boolean = true;
  Pre_Visamodal_View: boolean = true;
  Pre_Visachecklistmodal_View: boolean = true;

  Pre_AdmissionModal_View: boolean = true;

  Reviewmodal_View: boolean = true;
  Reviewdetails_View: boolean = true;

  Tasknewmodal_View: boolean = true;

  Invoicemodal_View: boolean = true;
  tab_view: boolean = true;
  profile_View: boolean = true;
  New_view: boolean = true;
  Sms_Button_view = true;
  More_Button_view = true;
  Application_View: boolean = false;
  Checklist_View: boolean = false;
  View_document: boolean = false;
  message_View: boolean = false;
  Course_View: boolean = false;
  course_history_View: boolean = false;
  application_details_View: boolean = false;
  language_details_View: boolean = false;
  Fees_Receipt_Id_temp: number = 0;
  Duration_Id: number = 0;

  Qualification_details_View: boolean = false;
  Fee_Collection_View: boolean = false;
  Commission_Collection_View: boolean = false;
  Commissionmodal_View: boolean = false;

  FollowUp_History_: Followup_History = new Followup_History();

  Total_Receipt: any;

  Advance_Search: boolean = true;
  Index: number;
  Total_Entries: number;
  color = "primary";
  mode = "indeterminate";
  value = 50;
  Permissions: any;
  Registration_Permissions: any;
  Remove_Registration_Permissions: any;

  Activity_Permissions: any;
  Remove_Activity_Permissions: any;
  App_List_Student_Name: string;

  Agent_Permissions: any;
  Change_Status_Button_Permission: any;
  Student_Approve_Button_Permission: any;
  Remove_Approval_Button_Permission: any;
  Application_Active_Button_Permission: any;
  Application_Deactive_Button_Permission: any;
  Move_To_PreApplication_Button_Permission: any;
  Send_To_Bph_Button_Permission: any;
  Visa_Rejection_Button_Permission: any;
  Closed_Button_Permission: any;
  Cas_Transfer_Button_Permission: any;
  Refund_Transfer_Button_Permission: any;
  Counsilor_Transfer_Button_Permission: any;
  Application_Transfer_Button_Permission: any;
  Admission_Transfer_Button_Permission: any;
  PreAdmission_Transfer_Button_Permission: any;
  PreVisa_Transfer_Button_Permission: any;
  Visa_Transfer_Button_Permission: any;

  paidfees: number = 0;
  Fees_Receipt_Id_data: number = 0;
  Student_Edit: boolean;
  Student_Save: boolean;
  Register_Save: boolean;
  Register_Remove: boolean;
  Student_Delete: boolean = false;
  myInnerHeight: number;
  myInnerHeightInner: number;
  myTotalHeight: number;
  myHeight: number;
  myHeightsub: number;
  myHeightsubtwo: number;
  myHeightsubthree: number;
  myHeightsubfour: number;
  Client_Accounts_Data: Client_Accounts[];
  University_Data: University[];
  University_Data_Filter: University[];
  University_: University = new University();
  University_1: University = new University();
  //Profile_University_: University = new University();
  User_Profile_Location_Data: Location[];
  User_Profile_Location_: Location = new Location();
  Search_Location_: Location = new Location();
  User_Profile_Location_Temp_: Location = new Location();

  Profile_University_: Country = new Country();

  Country_Data: Country[];
  DepartmentT_Data: Department[];
  Universitys_Data: Country[];
  Search_Subject_: Subject = new Subject();
  Subject_Data: Subject[];
  Phone_Number_: number;
  refund_message: string;

  Task_Item_: Task_Item = new Task_Item();
  Task_Item_search_: Task_Item = new Task_Item();
  Task_Item_search_Tasknew_: Task_Item = new Task_Item();
  Task_Item_Temp: Task_Item = new Task_Item();
  Task_Item_Data_search: Task_Item[];
  Task_Item_Data_search_Tasknew: Task_Item[];

  Search_University: University = new University();
  Search_Duration: Duration = new Duration();
  Search_Level: Level_Detail = new Level_Detail();
  Search_Internship: Internship = new Internship();
  Save_Document_: Document = new Document();
  Internship_: Internship = new Internship();
  Internship_Data: Internship[];
  Internship_Temp: Internship = new Internship();

  Level_: Level_Detail = new Level_Detail();
  Level_Data: Level_Detail[];
  Level_Temp: Level_Detail = new Level_Detail();

  Duration_: Duration = new Duration();
  Duration_Data: Duration[];
  Duration_Temp: Duration = new Duration();
  ApplicationDisplay_File_Name_: string;
  FeesreceiptDisplay_File_Name_: string;
  Display_File_Name_: string;
  Display_passport_: string;
  Display_Ielts_: string;
  Display_Tenth_: string;
  Display_Photo_: string;
  Display_Experience_: string;
  Display_Resume_: string;
  Display_ApplicationFile_: string;
  Display_FeesrecepitFile_: string;
  Save_Call_Status: boolean = false;

  Student_Status_Search_: Student_Status = new Student_Status();
  Student_Status_: Student_Status = new Student_Status();
  Student_Status_Data: Student_Status[];
  Student_Status_Search_Data: Student_Status[];
  Student_Status_Temp: Student_Status = new Student_Status();
  Student_Status_Search_Temp: Student_Status = new Student_Status();
  Student_Course_Selection_Data: Student_Course_Selection[];

  Enquiry_Source_Search_: Enquiry_Source = new Enquiry_Source();
  Enquiry_Source_: Enquiry_Source = new Enquiry_Source();

  Enquiry_Source_Data: Enquiry_Source[];
  Fees_Data_: Fees = new Fees();
  Fees_Array: Fees[];
  Commission_Array: Commission[];
  Commission_Data_: Commission = new Commission();
  Commission_Temp: Commission = new Commission();
  Receipt_data_: Fees_Receipt = new Fees_Receipt();
  Receipt_data: Fees_Receipt[];
  Commission_data: Fees_Receipt[];

  Enquiry_Source_Search_Data: Enquiry_Source[];
  Enquiry_Source_Temp: Enquiry_Source = new Enquiry_Source();
  Enquiry_Source_Search_Temp: Enquiry_Source = new Enquiry_Source();
  Fees_Temp: Fees = new Fees();
  Fees_Search_Temp: Fees = new Fees();
  Fees_Receipt_: Fees_Receipt = new Fees_Receipt();
  Fees_Receipt_Data: Fees_Receipt[];
  Fees_: Fees = new Fees();

  Commission_Receipt_: Fees_Receipt = new Fees_Receipt();
  Users_Data_Email_Temp: User_Details = new User_Details();
  Application_Fees_Course_: Application_Course = new Application_Course();
  Application_Fees_Course_Temp: Application_Course = new Application_Course();
  Application_Fees_Course_Data: Application_Course[];

  ApplicationDetails_Temp: Applicationdetails = new Applicationdetails();
  ApplicationDetails_Search_Temp: Applicationdetails = new Applicationdetails();

  ApplicationDetails_: Applicationdetails = new Applicationdetails();

  private _: any;
  Pointer_Start_: number;
  Pointer_Stop_: number;
  Pointer_Stop_Course: number;

  nextflag: number;
  Item_Export: boolean;
  Send_Mail_View: boolean = false;
  Show_Send_Mail: boolean = false;
  Show_FollowUp: boolean = true;
  View_History_: boolean = true;
  moredetailsbutton: boolean = true;
  lessdetailsbutton: boolean = true;
  Next_FollowUp_Date_Visible: boolean = true;
  Flag_Followup: number = 0;
  Flag_Student: number = 0;
  Student_Id: number = 0;
  User_Id: number = 0;

  emailTemplates: any[] = [];
  selectedTemplateId: number;
  isLoading = false;
  showError = false;
  selectedTemplate: any;
  isEditing = false;
  attachments: File[] = [];
  maxFileSize = 5 * 1024 * 1024; // 5MB limit per file
  fileSizeError = "";
  IsTransferDate: number = 0;
  Receipt_Voucher: number;
  Receipt_Fees: string;
  Receipt_Student: string;
  Receipt_Date: Date;
  Receipt_Amount: string;
  Followup_sub_b: string;
  Followup_sub: string;
  //Student_Course_Apply_Id:number

  Student_Name: string;
  Country_: Country = new Country();
  Application_Country_: Country = new Country();
  Profile_Country_: Country = new Country();
  Proceeding_Country_: Country = new Country();
  Country_Temp: Country = new Country();
  Country1_Data: Country[];

  University_Temp: University = new University();

  Level_Detail_: Level_Detail = new Level_Detail();
  Level_Detail_Temp: Level_Detail = new Level_Detail();
  Level_Detail_Data: Level_Detail[];

  Intake_: Intake = new Intake();
  Intake_Temp: Intake = new Intake();
  Intake_Data: Intake[];

  Intake_Year_: Intake_Year = new Intake_Year();
  Intake_Year_Temp: Intake_Year = new Intake_Year();
  Intake_Year_Data: Intake_Year[];

  Sub_Section_: Sub_Section = new Sub_Section();
  Sub_Section_Temp: Sub_Section = new Sub_Section();
  Sub_Section_Data: Sub_Section[];

  Duration: number;

  Subject_Temp: Subject = new Subject();

  Search_Intake_ = new FormControl();

  Search_Intake_Year_ = new FormControl();

  Search_Sub_Section_ = new FormControl();

  Followup_Users_Data: User_Details[];
  Followup_Users_Data_t: User_Details[];
  Followup_Users_Data_t_Filter: User_Details[];

  DSE_Users_Data_t_Filter: User_Details[];
  DSE_Users_: User_Details = new User_Details();
  DSE_Users_temp: User_Details = new User_Details();

  DSE_Users_Data_t: User_Details[];
  //DSE_Users_Data_t_Filter: User_Details[];


  Followup_Users_Data_tN: Student_FollowUp[];
  Followup_Users_: User_Details = new User_Details();
  Followup_Users_Task_: User_Details = new User_Details();
  Followup_Users_t: User_Details = new User_Details();
  Followup_Users_temp: User_Details = new User_Details();

  Followup_Users_tN: Student_FollowUp = new Student_FollowUp();
  //Followup_Users_tempN: Student_FollowUp = new Student_FollowUp();

  Followup_Users_tempN: User_Details = new User_Details();

  Followup_Branch_tempN: Branch = new Branch();

  Users_Temp: User_Details = new User_Details();
  Users_Temp_Email: User_Details = new User_Details();
  Users_Temp_c: User_Details = new User_Details();
  Users_Temp1: User_Details = new User_Details();
  selectedPdfIndex: number;

  Followup_Users_Temp: User_Details = new User_Details();
  Select_TaggedUser: boolean = false;
  id_num: any;
  FollowUp_Status_: Department_Status = new Department_Status();
  RoundRobin: boolean = false;
  FollowUp_Status_Task_: Department_Status = new Department_Status();
  Transfer_Status_: Department_Status = new Department_Status();
  Transfer_Status_k: Sub_Status = new Sub_Status();
  Status_Temp: Department_Status = new Department_Status();
  Status_Data_Temp: Department_Status = new Department_Status();
  Followup_Status_Temp: Department_Status = new Department_Status();
  Followup_Status_Data: Department_Status[];
  Followup_Status_Data_filter: Department_Status[];
  Followup_Transfer_Status_Data: Department_Status[];
  Followup_Substatus_Data: Sub_Status[];

  Followup_Substatus_Data_Filter: Sub_Status[];
  Followup_Substatus_Data_Filter_Transfer: Sub_Status[];

  Followup_Sub_Status_Temp: Sub_Status = new Sub_Status();
  Followup_Sub_Status_Data: Sub_Status[];

  Followup_Substatus_Data1: Sub_Status[];

  Status_Change_Data_: Status_Change_Data = new Status_Change_Data();

  Followup_Substatus_Data_Filter1: Sub_Status[];
  Followup_Substatus_Data_Filter_Transfer1: Sub_Status[];

  //Followup_Sub_Status_Temp: Sub_Status = new Sub_Status();
  FollowUp_Sub_Status_: Sub_Status = new Sub_Status();
  FollowUp_Sub_Status_Transfer_: Sub_Status = new Sub_Status();

  Department_Temp: Department = new Department();
  Department_Data_Temp: Department = new Department();
  Followup_Department_Temp: Department = new Department();

  FollowUp_Department_Task_: Department = new Department();
  FollowUp_Department_T: Department = new Department();

  FollowUp_Department_Temp: Department = new Department();
  Followup_Department_Data: Department[];
  Followup_Department_Data_T: Department[];
  Followup_Department_Data_Check: Department[];

  FollowUp_Department_TN: Student_FollowUp = new Student_FollowUp();
  //FollowUp_Department_TempN: Student_FollowUp = new Student_FollowUp();
  FollowUp_Department_TempN: Department = new Department();
  Followup_Department_DataN: Student_FollowUp[];
  Followup_Department_Data_TN: Student_FollowUp[];
  Followup_Department_Data_CheckN: Student_FollowUp[];
  FollowUp_List: Student_FollowUp[];
  FollowUp_Branch_: Branch = new Branch();
  FollowUp_Branch_1: Branch = new Branch();
  FollowUp_Branch_Task_: Branch = new Branch();
  Followup_Branch_Data: Branch[];
  Followup_Branch_Data_Filter: Branch[];
  Branch_Temp: Branch = new Branch();
  Followup_Branch_Temp: Branch = new Branch();

  Remarks_: Remarks = new Remarks();
  Remarks_Data: Remarks[];
  Remarks_Data_Filter: Remarks[];
  Remarks_Temp: Remarks = new Remarks();
  Is_Follow_: number;
  Is_Follow_Application: number;
  Is_Follow_Status_: number;
  Is_Duration_: number;

  feesreceiptdocument_: feesreceiptdocument = new feesreceiptdocument();

  FollowUp_Data: Student_FollowUp[];
  FollowUp_: Student_FollowUp = new Student_FollowUp();
  Login_User: string = "0";

  Transfer_: Transfer = new Transfer();

  Followp_History_Data: Followup_History[];
  Show_Followup_History: boolean = true;
  Transfer_view: boolean = true;
  Lead_EditIndex: number = -1;
  Change_Status_View: boolean = false;
  User_Details_Data: User_Details[];
  User_Div: boolean = false;
  ImageFile_: any;
  Chats_: Chats = new Chats();
  To_user_list = "";
  Display_File_: string;
  messageText: string = "";
  Comment_Data: Chats[];
  Tagged_Ids: any;
  Transfer_app_Status_Id: number;
  Transfer_app_Student_Id: number;
  Transfer_app_Department_Id: number;
  Transfer_app_Status_Name: string;
  Application_Id_Ref_: number = 0;

  Branchprint_Data: Branch[];
  print_Branch_Name: string;
  print_Branch_Address1: string;
  print_Branch_Address2: string;
  print_Branch_Address3: string;
  print_Branch_Address4: string;
  print_Branch_pincode: string;
  print_Branch_Phone: string;
  print_Branch_Mobile: string;
  print_Branch_Email: string;
  print_Branch_Website: string;

  View_Follow_: boolean = true;
  View_Student_: boolean = true;
  Bph_Status: number;

  Course_Data: Course[];
  Course_Data_Typeahead: Course[];
  Course_: Course = new Course();
  Program_Course_: Course = new Course();

  Program_Course_search: Course = new Course();

  Course_Temp: Course = new Course();
  More: boolean = false;

  sub_typeahead: number;

  Course_Name: any;
  Receipt_Details_: Fees_Receipt_Data = new Fees_Receipt_Data();
  Proceeding_: Proceeding_Details = new Proceeding_Details();
  Section_To_Print: boolean = false;

  Page_Start: number = 0;
  Page_End: number = 0;
  Page_Start_Course: number = 0;
  Page_End_Course: number = 0;
  Page_Length: number = 50;

  Black_Start: number = 1;
  Black_Stop: number = 50;
  Red_Start: number = 1;
  Red_Start_Course: number = 1;
  Red_Stop: number = 0;
  Red_Stop_Course: number = 0;
  Total_Rows: number = 0;
  Total_Rows_Course: number = 0;
  Pages: number = 0.0;
  Total_Pages: number = 0;
  Edit_save_button_view: boolean = true;
  selectedDocumentTypeId: number;
  Course_Selection_: Course_Selection = new Course_Selection();
  Course_Selection_Data: Course_Selection[];
  Course_Intake_Data: any;
  Course_Sub_Section_Data: any;

  Passport_Copy_File_Name: string;
  IELTS_File_Name: string;
  Passport_Photo_File_Name: string;
  Tenth_Certificate_File_Name: string;
  Work_experience_File_Name: string;
  Resume_File_Name: string;
  Duration_Difference: number;
  temparray: any;
  welcome_mail_view: boolean = true;

  Course_Apply_Data: Course_Apply[];
  Course_Apply_Data_Temp: Course_Apply = new Course_Apply();

  Department_Status_Mode_: Department_Status = new Department_Status();
  Department_Status_Mode1_: Department_Status = new Department_Status();
  Department_Status_Mode_Temp: Department_Status = new Department_Status();
  Department_Status_Mode_Temp1: Department_Status = new Department_Status();
  Department_Status_Mode_Data: Department_Status[];
  Department_Status_Mode_Data1: Department_Status[];
  Department_Status_Mode_Data1_Filter: Department_Status[];
  Department_Status_Mode_Data_Temp: Department_Status[];

  //Student_Course_Apply_:Student_Course_Apply= new Student_Course_Apply;

  ImageFile: any;
  ApplicationImageFile: any;
  Application_Click_Status: boolean;
  Profile_Click_Status: boolean;
  Document_Click_Status: boolean;
  Message_Click_Status: boolean;
  Course_Click_Status: boolean;
  Fee_Collection_Click_Status: boolean;
  Commission_Collection_Click_Status: boolean;
  Statistics_Click_Status: boolean;
  Checklist_Click_Status: boolean;
  Course_History_Click_Status: boolean;
  Application_Details_Click_Status: boolean;
  Qualification_Details_Click_Status: boolean;
  Language_Details_Click_Status: boolean;

  Document_Array: Document[];

  ApplicationDocument_Array: Applicationdocument[];
  FeesreceiptDocument_Array: feesreceiptdocument[];

  Application_Status_: ApplicationStatus = new ApplicationStatus();

  DataApplicationDocument_Array: feesreceiptdocument[];

  Checklisst_Array: StudentChecklist[];
  Document_File_Array: any[];
  ApplicationDocument_File_Array: any[];
  FeesreceiptDocument_File_Array: any[];

  Document_File: Document = new Document();
  ApplicationDocument_File: Applicationdocument = new Applicationdocument();
  FeesreceiptDocument_File: feesreceiptdocument = new feesreceiptdocument();
  Document_Start: number;
  Document_Description: string;
  ApplicationDocument_Description: string;
  FeesreceiptDocument_Description: string;
  File: string;
  ApplicationFile: String;
  ImageFile_passport: any;
  ImageFile_Ielts: any;
  ImageFile_Tenth: any;
  ImageFile_Photo: any;
  ImageFile_Experience: any;
  ImageFile_Resume: any;
  ImageFile_Application: any;
  ImageFile_Feesreceipt: any;

  Offerletter_Type_: Offerletter_Type = new Offerletter_Type();
  Offerletter_Type_Data: Offerletter_Type[];
  Offerletter_Type_Temp: Offerletter_Type = new Offerletter_Type();

  Tenth_Certificate: string;
  Passport_Copy: string;
  IELTS: string;
  Work_Experience: string;
  Resume: string;
  Passport_Photo: string;

  Subject_1: Subject = new Subject();

  Fees_Collection_Edit: boolean;
  Fees_Collection_Delete: boolean;
  Fees_Receipt_Edit: boolean;
  Fees_Receipt_Save: boolean = false;
  Fees_Receipt_Delete: boolean;
  Fees_Collection_Permission: any;
  Comission_Collection_Permission: any;

  Course_History_Tab_Permission: any;
  Course_History_Tab_View: boolean = false;
  Course_History_Tab_Edit: boolean = false;

  Applications_Tab_Permission: any;
  Applications_Tab_View: boolean = false;
  Applications_Tab_Edit: boolean = false;

  Applications_Details_Tab_Permission: any;
  Applications_Details_Tab_View: boolean = false;
  //Qualification_Details_Tab_View: boolean = false;
  //Language_Details_Tab_View: boolean = false;
  Applications_Details_Tab_Edit: boolean = false;
  Applications_Details_Tab_Delete: boolean = false;
  Applications_Details_Tab_Save: boolean = false;

  Search_Course_Tab_Permission: any;
  Search_Course_Tab_Edit: boolean = false;
  Search_Course_Tab_View: boolean = false;
  Make_Click: boolean;
  Student_Approve_Visibility: string;

  Fees_Collection_Tab_Permission: any;
  Fees_Collection_Tab_Edit: boolean = false;
  Fees_Collection_Tab_View: boolean = false;
  Commission_Collection_Tab_View: boolean = false;
  Fees_Collection_Tab_Delete: boolean = false;

  Checklist_Tab_Permission: any;
  Checklist_Tab_Edit: boolean = false;
  Checklist_Tab_View: boolean = false;

  Conditions_Sub: Conditions = new Conditions();
  Conditions_Sub_Data: Conditions[];
  Conditions_Search_Data: Conditions[];

  Statistics_Tab_View: boolean = false;
  Statistics_View: boolean = false;
  Statistics_Tab_Permission: any;
  Statistics_Tab_Edit: boolean = false;

  Document_View_Status: boolean = false;
  Documewnt_View_Permission: any;
  Document_View_Option: boolean = false;

  More_Search_Options: boolean = true;
  More_Search_Options_Profile: boolean = true;
  App_Search_Options: boolean = true;
  Department_Search: Department = new Department();
  Department_Data: Department[];
  Department_: Department = new Department();

  User_Search: User_Details = new User_Details();
  User_Search_Email: User_Details = new User_Details();
  By_User_Search: User_Details = new User_Details();
  Users_Data: User_Details[];
  Users_Data_Email: User_Details[];
  User: User_Details[];
  Search_Branch: Branch = new Branch();
  Enquiry_For_Search: Enquiry_For = new Enquiry_For();
  Class_Search: Class = new Class();
  Intake_Search: Intake = new Intake();
  Agent_Search: Agent = new Agent();
  Intake_Year_Search: Intake_Year = new Intake_Year();
  Student_Id_Search: string = "";

  Branch_Temp1: Branch = new Branch();
  Branch_Data: Branch[];

  Country_dropdown_Data: Country[];
  Country_dropdown_Temp1: Country = new Country();
  Search_Dropdown_Country: Country = new Country();

  Search_Status: Department_Status = new Department_Status();
  Status_Data: Department_Status[];
  Search_By_: any;

  Is_Registered: any;

  Look_In_Date: boolean = true;
  Expense_Include: boolean = true;
  Search_Name: "";
  Company_: Company = new Company();

  company_data_temp: Company[];
  Courses_Found: number = 0;
  Start: number = 1;
  next_previous: boolean = false;

  Old_search_name: string;
  Old_Department_id: number;
  Old_Branch_id: number;
  Old_Status_id: number;
  Old_Is_Registered: number;
  Old_Search_FromDate: Date;
  Old_Search_ToDate: Date;

  Invoice_Tab_Permission: any;
  Invoice_Tab_View: boolean = false;
  Invoice_Tab_Edit: boolean = false;
  Invoice_View: boolean = false;

  Department_Typeahead_Permission: any;
  Department_Typeahead_View: boolean = false;

  Branch_Typeahead_Permission: any;
  Branch_Typeahead_View: boolean = false;

  Profile_Refund_Permission: any;
  Profile_Refund_View: boolean = false;

  Tostaff_Typeahead_Permission: any;
  Tostaff_Typeahead_View: boolean = false;
  Show_TD_Date: boolean;
  Show_HD_Date: boolean;
  Brand_Temp: Brand = new Brand();
  Model_Temp: Country = new Country();
  DSE_Data_Temp: DSE = new DSE();
  Brand_: Brand = new Brand();
  Search_Brand_: Brand = new Brand();
  Brand_Data: Brand[] = [];
  Brand_Data_Check: Brand[] = [];

  /* ---------------- MODEL ---------------- */
  Model_: Country = new Country();
  Search_Profile_University_: Country = new Country();
  Model_Data: Country[] = [];
  Model_Data_Check: Country[] = [];

  DSE_Data_: DSE = new DSE();
  Search_DSE_Data_: DSE = new DSE();
  DSE_Data: DSE[] = [];
  DSE_Data_Check: DSE[] = [];

  User_Profile_Location_Data_Check: Location[] = [];

  Student_approved_Status_Permission: any;
  Student_approved_Status_View: boolean = false;

  Followup_Users_List_: User_Details = new User_Details();

  Auditor_Status_Permission: any;
  Auditor_Status_View: boolean = false;

  Payment_Status_Permission: any;
  Payment_Status_View: boolean = false;

  Visa_View: boolean = false;
  Cas_Followup_View: boolean = false;
  Cas_FollowupPrevisa_View: boolean = false;
  Cas_FollowupTasknew_View: boolean = false;
  Cas_FollowupPreadmission_View: boolean = false;

  Visa_Tab_Permission: any;
  Visa_Tab_View: boolean = false;
  Visa_Tab_Edit: boolean = false;
  Visa_Tab_Delete: boolean = false;
  Visa_Tab_Save: boolean = false;
  Visa_: Visa = new Visa();
  Visa_Data: Visa[];

  Pre_Visa_View: boolean = false;

  Pre_Visa_Checklist_View: boolean = false;

  Pre_Visa_Tab_Permission: any;

  Pre_Visa_Tab_View: boolean = false;
  Pre_Visa_Tab_Edit: boolean = false;
  Pre_Visa_Tab_Delete: boolean = false;
  Pre_Visa_Tab_Save: boolean = false;
  Previsa_: Pre_Visa = new Pre_Visa();
  Pre_Visa_Data: Pre_Visa[];

  Tasknew_View: boolean = false;
  Tasknew_Tab_Permission: any;
  Tasknew_Tab_View: boolean = false;
  Tasknew_Tab_Edit: boolean = false;
  Tasknew_Tab_Delete: boolean = false;
  Tasknew_Tab_Save: boolean = false;

  Pre_Admission_View: boolean = false;

  Pre_Admission_Tab_Permission: any;
  // Pre_Admission_Tab_Views:boolean =false;
  Pre_Admission_Tab_View: boolean = false;
  Pre_Admission_Tab_Edit: boolean = false;
  Pre_Admission_Tab_Delete: boolean = false;
  Pre_Admission_Tab_Save: boolean = false;

  Qualification_Details_Tab_View: boolean = false;

  Qualification_Tab_Permission: any;
  // Pre_Admission_Tab_Views:boolean =false;
  Qualification_Tab_View: boolean = false;
  Qualification_Tab_Edit: boolean = false;
  Qualification_Tab_Delete: boolean = false;
  Qualification_Tab_Save: boolean = false;

  Language_Details_Tab_View: boolean = false;

  transfer_status_Dept_Id_: number;

  Language_Tab_Permission: any;
  // Pre_Admission_Tab_Views:boolean =false;
  Language_Tab_View: boolean = false;
  Language_Tab_Edit: boolean = false;
  Language_Tab_Delete: boolean = false;
  Language_Tab_Save: boolean = false;

  Admission_Details_Tab_View: boolean = false;

  Admission_Tab_Permission: any;
  Admission_Tab_View: boolean = false;
  Admission_Tab_Edit: boolean = false;
  Admission_Tab_Delete: boolean = false;
  Admission_Tab_Save: boolean = false;

  Preadmission_: Pre_Admission = new Pre_Admission();
  Pre_Admission_Data: Pre_Admission[];
  Save_status_mail = [];
  //Reviewdetails_View: boolean = false;

  Review_Tab_Permission: any;
  Review_Tab_View: boolean = false;
  Review_Tab_Edit: boolean = false;
  Review_Tab_Delete: boolean = false;
  Review_Tab_Save: boolean = false;
  Review_: Review = new Review();
  Review_Data: Review[];

  ImageFile_Visa: any;
  Display_VisaFile_: string;
  Visa_Document_File_Array: any[];
  Visa_Document_File: Visa_Document = new Visa_Document();
  Visa_Document_Array: Visa_Document[];
  Visa_Document_: Visa_Document = new Visa_Document();
  Visa_Document_Description: string;
  Application_Status_Mode_Data_Temp: ApplicationStatus[];

  group_restriction: number;

  Automatic_Department_: Department = new Department();
  Notification_Department_: Department = new Department();

  Application_Id_Temp_: number;

  ApplicationStatus_Id_Log: number;
  ApplicationStatus_Name_Log: string;

  Invoice_: Invoice = new Invoice();
  Invoice_Data: Invoice[];
  ImageFile_Invoice: any;
  Display_InvoiceFile_: string;
  Invoice_Document_File_Array: any[];
  Invoice_Document_File: Invoice_Document = new Invoice_Document();
  Invoice_Document_Array: Invoice_Document[];
  Invoice_Document_: Invoice_Document = new Invoice_Document();
  Invoice_Document_Description: string;

  Application_fees_paid: string;
  taskCreationData = null;

  Invoice_Click_Status: boolean;
  Visa_Click_Status: boolean;

  Pre_Visa_View_Click_Status: boolean;

  Pre_Admission_View_Click_Status: boolean;

  Review_Click_Status: boolean;

  Course_Data_Filter: Course[];
  Country_Data_Filter: Country[];
  DepartmentT_Data_Filter: Department[];
  University_Data_Filter_2: University[];
  Save_button_view: boolean = true;

  Buttonset_view: boolean = true;
  Transfer_Button_view: boolean = true;

  Mail_Data_: Send_Welcome_Mail = new Send_Welcome_Mail();
  Program_Course_Temp: Course = new Course();
  //Profile_University_Temp: University = new University();
  Profile_University_Temp: Country = new Country();
  Profile_Country_Temp: Country = new Country();
  DSE_Users_Temp_Data: User_Details = new User_Details();
  Temp_Date_Followup: Date;
  Course_Temp_Data_: Course = new Course();
  Course_Temp_Array: Course[];
  University_Temp_Data_: University = new University();
  University_Temp_Array: University[];
  Country_Temp_Data_: Country = new Country();
  Country_Temp_Array: Country[];
  Login_User_Name: string;
  Branch_Id: number;
  Usertype: number;
  Login_Department: number;
  Extension: number;
  Application_Status_Edit: string;
  cas_task_id: number;
  Followp_History_Data_Details: Followup_History[];
  transfer_student_id_: Number;

  selectedApplicationsIdDetails = {
    University_Id: null,
    Country_Id: null,
    Course_Id: null,
    Application_status_Id: null,
  };
  transfer_source: string;
  Transfer_department_Id: number;
  Transfer_departmentstatus_Id: number;
  Transfer_departmentstatusname: string;

  print_voucher_no: number;
  print_account_name: string;
  print_Paid_date: Date;
  print_Description: string;
  print_amount: number;
  print_paid: string;
  To_Account_Id: number;

  transfer_typeahead: boolean = false;

  Course_Fees_Index: number = -1;
  Course_Fees: Visa = new Visa();
  Course_Fees_Data: Visa[];
  timeDiff: number;
  Application_Transfer_: Application_Transfer = new Application_Transfer();
  Application_List_: Application_List = new Application_List();
  Application_List_Data: Application_List[];

  Application_Id_Log: number;
  Application_Id_Log1: Number;
  Student_Id_Transfer: number;

  To_Account_: Client_Accounts = new Client_Accounts();
  To_Account_Temp: Client_Accounts = new Client_Accounts();
  To_Account_Data: Client_Accounts[];
  Task_Student_Data: Student_Task[];
  Task_Student_Previsa_Data: Student_Task[];
  Task_Student_Preadmission_Data: Student_Task[];
  Task_Student_Tasknew_Data: Student_Task[];

  Followphistoryview: boolean = false;
  Followupdetailsview: boolean = false;

  Bph_Status_: Bph_Status = new Bph_Status();
  Bph_Status_Temp: Bph_Status = new Bph_Status();
  Bph_Status_Data: Bph_Status[];

  Extension_Data_: Extension_Data = new Extension_Data();

  Fees_Course_: Applicationdetails = new Applicationdetails();
  Fees_Course_Data: Applicationdetails[];
  Course_Fees_Data_Filter: Applicationdetails[];
  Fees_Course_Temp: Applicationdetails = new Applicationdetails();
  Fees_Course_Data_Temp_Array: Applicationdetails[];
  FeesId_History: number;
  Task_Group_Id: number;
  Search_Remark_Name: string = "";

  Student_Id_localStorage: string = "";

  DefaultDept_: Branch = new Branch();
  DefaultDept_Temp: Branch = new Branch();
  DefaultDept_Data: Branch[];

  DefaultUsers_: Branch = new Branch();
  DefaultUsers_Temp: Branch = new Branch();
  DefaultUsers_Data: Branch[];

  DefaultStatus_: Branch = new Branch();
  DefaultStatus_Temp: Branch = new Branch();
  DefaultStatus_Data: Branch[];

  Default_dep_id: number;
  Branch_dep_id: number;
  Martialdetails_view: boolean = true;
  Application_cousellor_permission: any;
  cousellor_section_View: boolean = false;

  Application_Lodgement_permission: any;
  Lodgement_section_View: boolean = false;

  Automatic_Department_Data: Department[];
  Enable_Call_Button: boolean = true;
  Enable_Call: number;
  Documents_View: boolean = false;
  Followup_View: boolean = false;
  Comments_View: boolean = false;

  Documents_Tab_Permission: any;
  Comments_Tab_Permission: any;
  Documents_Tab_View: boolean = false;
  Comments_Tab_View: boolean = false;
  Comments_Tab_Edit: boolean = false;
  Comments_Tab_Delete: boolean = false;
  Comments_Tab_Save: boolean = false;
  Documents_Tab_Edit: boolean = false;
  Documents_Tab_Delete: boolean = false;
  Documents_Tab_Save: boolean = false;
  Documents_: Document = new Document();
  Documents_Temp: Document = new Document();
  Documents_Data: Document[];
  Student_Documents_Data: Student_Document[];
  Student_Documents_: Student_Document = new Student_Document();
  Document_Type_Data: Document_Type[];
  Document_Type_Temp: Document_Type = new Document_Type();
  Image_Photo: any;
  ImageFile_Doc: any;

  Register_Transfer_Department_Id: number;

  Register_Transfer_Status: boolean;
  Task_Date_View: boolean = true;
  Application_History_Delete_Permission: any;
  Application_History_Delete_View: boolean = false;
  Student_Name_t: string;

  student_name: string;
  to_user_name: string;
  Student_Task_Id: number;
  Historydiv: boolean = false;
  Student_Task_Data: Student_Task[];
  // cas_task_id: number;
  cas_task_student_id: number;
  cas_task_item_id: number;
  cas_task_group_id: number;
  Count_Task_: number;
  Login_Department_Name: string;
  Login_User_Id: number;
  Round_Robin_Status: number;
  Typeahead_Department_Id: number;
  If_file_changed: boolean = false;
  from_duplicate_check: number = 0;
  From_Statuswise_Report: number = 0;
  User_Details_Filter: User_Details[];
  Commission_Receipt_Edit: any;
  Commission_Receipt_Delete: any;
  Commission_Receipt_Save: any;
  selectedEmailTemplate: any;
  templateFields: any[];
  Is_HD_Date: boolean = false;
  Is_TD_Date: boolean = false;
  isSending: boolean = false;
  sendSuccess: boolean = false;
  sendError: string = '';
  dialogRef: any;
  selectedPdfPreview: any = '';
  pdfload: boolean = true;
  preview_div: boolean = false;
  User_Role: number;
  selectedUsersForNotifcation: any[] = [];

  isBranchChannelDisabled = false;
  constructor(
    public Sub_Section_Service_: Sub_Section_Service,
    private _http: HttpClient,
    public Company_Service_: Company_Service,
    public Internship_Service_: Internship_Service,
    public Student_Message_Service: Student_Message_Service,
    public Document_Service: Document_Service,
    public Client_Accounts_Service: Client_Accounts_Service,
    public Subject_Service_: Subject_Service,
    public Chat_Window_Service_: Chat_Window_Service,
    public University_Service_: University_Service,
    public User_Details_Service_: User_Details_Service,
    public Country_Service_: Country_Service,
    public Student_Service_: Student_Service,
    public Department_Status_Service_: Department_Status_Service,
    public Course_Service_: Course_Service,
    public Intake_Service_: Intake_Service,
    public Department_Service_: Department_Service,
    private Files_Upload_Service_: Files_Upload_Service,
    private emailTemplateService: EmailTemplateService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog,
    private sanitizer: DomSanitizer,
  ) {
    this.socket = io(this.url, {
      transports: ["websocket"],
      auth: {
        token: localStorage.getItem("token"),
      },
    });
    this.socket = io(this.url);
  }
  ngOnInit() {
    this.Course_Selection_Data = [];
    this.Login_User = localStorage.getItem("Login_User");
    this.Login_User_Id = Number(this.Login_User);
    this.Login_User_Name = localStorage.getItem("uname");
    this.Branch_Id = Number(localStorage.getItem("Branch"));
    console.log(this.Branch_Id, "this.Branch_id");
    this.User_Role = Number(localStorage.getItem("User_Role"));
    this.Login_Department = Number(localStorage.getItem("Login_Department"));
    console.log(this.Login_Department, "this.Branch_id");
    this.Extension = Number(localStorage.getItem("Extension"));
    this.Usertype = Number(localStorage.getItem("User_Type"));
    this.Login_Department_Name = localStorage.getItem("Login_Department_Name");
    // debugger;
    this.Student_Id_localStorage = localStorage.getItem("Student_Id");
    this.Round_Robin_Status = Number(
      localStorage.getItem("Round_Robin_Status")
    );

    this.logStudentId(this.Student_Id_localStorage);

    console.log(
      "The student id that is received in this component is",
      this.Student_Id_localStorage
    );

    this.Application_cousellor_permission = Get_Page_Permission(106);
    this.Application_Lodgement_permission = Get_Page_Permission(107);

    if (this.Student_Id_localStorage > "0") {
      this.Student_Id = Number(this.Student_Id_localStorage);
      this.From_Statuswise_Report = Number(
        localStorage.getItem("From_Statuswise_Report")
      );
      localStorage.setItem("Student_Id", "0");
      localStorage.setItem("From_Statuswise_Report", "0");
    }

    console.log(this.User_Role, 'this.User_Role');

    if (this.User_Role === 45) {
      this.isBranchChannelDisabled = true;
    }
    // this.Permissions = Get_Page_Permission(5);
    // this.Remove_Registration_Permissions = Get_Page_Permission(23);
    // this.Registration_Permissions = Get_Page_Permission(22);
    // this.Fees_Collection_Permission=Get_Page_Permission(31)
    // this.Application_Tab_Permission=Get_Page_Permission(40)
    // this.Search_Course_Tab_Permission=Get_Page_Permission(41)
    // this.Fees_Collection_Tab_Permission=Get_Page_Permission(42)
    // this.Statistics_Tab_Permission=Get_Page_Permission(45)
    // this.Documewnt_View_Permission=Get_Page_Permission(49)
    // this.CheckList_View_Permission=Get_Page_Permission(62);

    // if(this.Permissions==undefined || this.Permissions==null)
    //  {
    //     localStorage.removeItem('token');
    //     this.router.navigateByUrl('Home_Page');
    //  }
    // else
    {
      //this.Search_Lead_button();
      //  this.Fees_Collection_Edit=this.Permissions.Edit;
      //  this.Fees_Collection_Delete=this.Permissions.Delete

      this.Page_Load();
      this.Gender_Data = [];
      this.Gender_Data.push({ Gender_Id: 0, Gender_Name: "Select" });
      this.Gender_Data.push({ Gender_Id: 1, Gender_Name: "Male" });
      this.Gender_Data.push({ Gender_Id: 2, Gender_Name: "Female" });
      this.Application_Click_Status = false;
      this.Message_Click_Status = false;
      this.Document_Click_Status = false;
      this.Course_Click_Status = false;
      this.Fee_Collection_Click_Status = false;
      this.Commission_Collection_Click_Status = false;
      this.Statistics_Click_Status = false;
      this.Profile_.Entry_date = new Date();
      this.Profile_.Entry_date = this.New_Date(this.Profile_.Entry_date);

      //this.Profile_.Transfer_date = new Date();
      //this.Profile_.Transfer_date = this.New_Date(this.Profile_.Transfer_date);

      // this.Resume_Data=[];
      // this.Resume_Data.push({'Resume_Id':0,'Resume_Name':'Select'});
      // this.Resume_Data.push({'Resume_Id':1,'Resume_Name':'Yes'});
      // this.Resume_Data.push({'Resume_Id':2,'Resume_Name':'No'});

      // this.Passport_Data=[];
      // this.Passport_Data.push({'Passport_Id':0,'Passport_Name':'Select'});
      // this.Passport_Data.push({'Passport_Id':1,'Passport_Name':'Yes'});
      // this.Passport_Data.push({'Passport_Id':2,'Passport_Name':'No'});

      // this.LOR_1_Data=[];
      // this.LOR_1_Data.push({'LOR_1_Id':0,'LOR_1_Name':'Select'});
      // this.LOR_1_Data.push({'LOR_1_Id':1,'LOR_1_Name':'Institution'});
      // this.LOR_1_Data.push({'LOR_1_Id':2,'LOR_1_Name':'Employer'});

      // this.LOR_2_Data=[];
      // this.LOR_2_Data.push({'LOR_2_Id':0,'LOR_2_Name':'Select'});
      // this.LOR_2_Data.push({'LOR_2_Id':1,'LOR_2_Name':'Institution'});
      // this.LOR_2_Data.push({'LOR_2_Id':2,'LOR_2_Name':'Employer'});

      // this.Ielts_Data=[];
      // this.Ielts_Data.push({'Ielts_Id':0,'Ielts_Name':'Select'});
      // this.Ielts_Data.push({'Ielts_Id':1,'Ielts_Name':'Yes'});
      // this.Ielts_Data.push({'Ielts_Id':2,'Ielts_Name':'No'});

      // this.MOI_Data=[];
      // this.MOI_Data.push({'MOI_Id':0,'MOI_Name':'Select'});
      // this.MOI_Data.push({'MOI_Id':1,'MOI_Name':'Yes'});
      // this.MOI_Data.push({'MOI_Id':2,'MOI_Name':'No'});

      // this.SOP_Data=[];
      // this.SOP_Data.push({'SOP_Id':0,'SOP_Name':'Select'});
      // this.SOP_Data.push({'SOP_Id':1,'SOP_Name':'Yes'});
      // this.SOP_Data.push({'SOP_Id':2,'SOP_Name':'No'});

      // if (this.Fees_Collection_Tab_Permission != undefined && this.Fees_Collection_Tab_Permission != null)
      // {
      // this.Fees_Collection_Tab_Edit=this.Fees_Collection_Tab_Permission.Edit
      // this.Fees_Collection_Tab_View=this.Fees_Collection_Tab_Permission.View
      // }
      // if (this.Application_Tab_Permission != undefined && this.Application_Tab_Permission != null)
      // {
      // this.Application_Tab_Edit=this.Application_Tab_Permission.Edit;
      // this.Application_Tab_View=this.Application_Tab_Permission.View
      // }
      // if (this.Search_Course_Tab_Permission != undefined && this.Search_Course_Tab_Permission != null)
      // {
      // this.Search_Course_Tab_View=this.Search_Course_Tab_Permission.View
      // this.Search_Course_Tab_Edit=this.Search_Course_Tab_Permission.Edit
      // }
      // if (this.Statistics_Tab_Permission != undefined && this.Statistics_Tab_Permission != null)
      // {
      // this.Statistics_Tab_View=this.Statistics_Tab_Permission.View
      // this.Statistics_Tab_Edit=this.Statistics_Tab_Permission.Edit
      // }
      // if (this.Documewnt_View_Permission != undefined && this.Documewnt_View_Permission != null)
      // {
      // this.Document_View_Status=this.Documewnt_View_Permission.View
      // //this.Statistics_Tab_Edit=this.Statistics_Tab_Permission.Edit
      // }
      // if (this.Fees_Collection_Permission != undefined && this.Fees_Collection_Permission != null)
      // {
      // this.Fees_Receipt_Edit= this.Fees_Collection_Permission.Edit;
      // this.Fees_Receipt_Delete=this.Fees_Collection_Permission.Delete;
      // }

      if (
        this.Application_cousellor_permission != undefined &&
        this.Application_cousellor_permission != null
      ) {
        this.cousellor_section_View =
          this.Application_cousellor_permission.View;
      }

      if (
        this.Application_Lodgement_permission != undefined &&
        this.Application_Lodgement_permission != null
      ) {
        this.Lodgement_section_View =
          this.Application_Lodgement_permission.View;
      }
    }
  }
  onSingleCheck(User_D: any, index: number) {
    if (User_D.Check_Box) {
      // Add to selected users array if checkbox is checked
      this.selectedUsersForNotifcation.push(User_D);

      // Store the selected user data for other operations
      this.Users = [...this.selectedUsersForNotifcation];  // Store selected users in 'Users' array
      this.tagged_users = this.selectedUsersForNotifcation.map(user => ({
        User_Id: user.User_Details_Id.toString(),
        User_Details_Name: `@${user.User_Details_Name}`,
        User_Details_Id: 0,
      }));
      this.id_num = this.selectedUsersForNotifcation.map(user => user.User_Details_Id.toString()).join(", ");  // Join multiple user IDs if more than one selected
      this.Tagged_Ids = this.selectedUsersForNotifcation.map(user => user.User_Details_Id);  // Store all selected user IDs
    } else {
      // Remove from selected users array if checkbox is unchecked
      const userIndex = this.selectedUsersForNotifcation.findIndex((user) => user.User_Details_Id === User_D.User_Details_Id);
      if (userIndex !== -1) {
        this.selectedUsersForNotifcation.splice(userIndex, 1);
      }

      // If no users are selected, clear the other variables
      if (this.selectedUsersForNotifcation.length === 0) {
        this.Users = [];
        this.tagged_users = [];
        this.id_num = "";
        this.Tagged_Ids = [];
      } else {
        // Otherwise, update the variables based on the selected users
        this.Users = [...this.selectedUsersForNotifcation];
        this.tagged_users = this.selectedUsersForNotifcation.map(user => ({
          User_Id: user.User_Details_Id.toString(),
          User_Details_Name: `@${user.User_Details_Name}`,
          User_Details_Id: 0,
        }));
        this.id_num = this.selectedUsersForNotifcation.map(user => user.User_Details_Id.toString()).join(", ");
        this.Tagged_Ids = this.selectedUsersForNotifcation.map(user => user.User_Details_Id);
      }
    }

    // For debugging: log the selected users
    console.log("Selected Users: ", this.selectedUsersForNotifcation);
  }



  // onSingleCheck(selectedUser: any, index: number): void {
  //   this.User_Details_Filter.forEach((user, i) => {
  //     user.Check_Box = i === index;
  //   });
  //   this.Tagged_Users(selectedUser, selectedUser.Check_Box, index);
  // }
  Page_Load() {
    this.myInnerHeight = window.innerHeight;
    this.myTotalHeight = this.myInnerHeight;
    this.myTotalHeight = this.myTotalHeight - 100;
    this.myInnerHeight = this.myInnerHeight - 190;
    this.myHeight = this.myInnerHeight - 150;
    this.myHeightsub = this.myInnerHeight - 330;
    this.myHeightsubtwo = this.myInnerHeight - 100;
    this.myHeightsubthree = this.myInnerHeight - 80;
    this.myHeightsubfour = this.myInnerHeight - 170;
    this.myInnerHeightInner = this.myInnerHeight - 280;
    this.myInnerHeighttemp = this.myInnerHeight;

    this.Entry_View = false;
    this.profile_View = true;
    this.Martialdetails_view = true;
    this.tab_view = true;
    this.Buttonset_view = true;
    this.Transfer_Button_view = false;
    this.Transfer_view = false;
    this.application_details_View = false;
    this.language_details_View = false;
    this.course_history_View = false;
    this.Checklist_View = false;
    this.View_document = false;
    this.Course_View = false;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
    this.Applicationmodal_View = false;

    // this.Qualificationmodal_View = false;
    // this.Qualificationnew_View=true;

    this.Qualificationmodal_View = true;
    this.Qualificationnew_View = false;
    this.Workexperiencenew_View = false;

    //this.Qualificationmodal_View = false;
    this.Feesmodal_View = false;
    this.Visamodal_View = false;
    this.Pre_Visamodal_View = false;
    this.Reviewmodal_View = false;
    this.Reviewdetails_View = false;
    this.Visa_View = false;
    this.Invoice_View = false;
    this.Invoicemodal_View = false;
    this.Visa_Click_Status = false;
    this.History_View = false;
    this.Pre_Visa_View = false;
    this.Tasknew_View = false;
    this.Tasknewmodal_View = false;
    this.Pre_Admission_View = false;
    this.Pre_AdmissionModal_View = false;
    this.Pre_Visa_Checklist_View = false;
    this.Pre_Visachecklistmodal_View = false;
    //this.Review=false;
    this.New_view = true;
    //
    // if(this.Course_Data.length==0)
    // {
    //      this.Start=0;
    // }

    //this.Task_Item_Dropdown();
    this.Load_Automatic_Departments();
    this.Resume_Mode_Dropdown();
    this.Get_Student_PageLoadData_Dropdowns();
    //this.Passport_Mode_Dropdown();
    //this.LOR1_Mode_Dropdown();
    // this.LOR2_Mode_Dropdown();
    //this.MOI_Mode_Dropdown();
    //this.SOP_Mode_Dropdown();
    //this.Load_Application_status_forchangestatus();
    //this.Load_StatusType();
    //this.Qualification_Type_DropDown();
    // this.loadEmailTemplates();
    // this.Load_SendMail_User_Dropdown();
    //this.IELTS_Mode_Dropdown();
    //this.Load_Intake();
    //this.Load_Enquiryfor();
    //this.Load_Shore();
    this.Load_Profile_Intake();

    //this.Load_Intake_year();
    //this.Load_Agents();
    //this.Load_application_status();
    //this.Load_Marital_Status();
    //this.Load_Visa_Type();
    //this.Get_Checklist();
    //this.Get_Last_Followup();
    this.Statistics_View = false;
    this.message_View = false;
    this.Look_In_Date = true;
    this.Search_By_ = 1;
    this.Is_Registered = 1;
    this.clr_receipt();
    this.Clr_Student();
    this.Clr_ApplicationDetails();
    this.clr_Visa_Tab();
    this.clr_Invoice_Tab();
    this.Clr_Pre_Visa();
    this.Clr_Pre_Admission();
    this.Clr_Document();

    //this.Clr_Course()
    //this.Public_Search_Course();

    // this.Get_Menu_Status(5, this.Login_User);
    // this.Get_Menu_Status(23, this.Login_User);
    // this.Get_Menu_Status(22, this.Login_User);
    // this.Get_Menu_Status(31, this.Login_User);
    // this.Get_Menu_Status(40, this.Login_User);
    // this.Get_Menu_Status(41, this.Login_User);
    // this.Get_Menu_Status(42, this.Login_User);
    // this.Get_Menu_Status(45, this.Login_User);

    // this.Get_Menu_Status(60, this.Login_User);
    // this.Get_Menu_Status(61, this.Login_User);
    // this.Get_Menu_Status(63, this.Login_User);
    // this.Get_Menu_Status(64, this.Login_User);
    // this.Get_Menu_Status(65, this.Login_User);
    // this.Get_Menu_Status(68, this.Login_User);
    // this.Get_Menu_Status(69, this.Login_User);

    // this.Get_Menu_Status(72, this.Login_User);

    // this.Get_Menu_Status(73, this.Login_User);
    // this.Get_Menu_Status(75, this.Login_User);
    // this.Get_Menu_Status(76, this.Login_User);
    // this.Get_Menu_Status(77, this.Login_User);
    // this.Get_Menu_Status(78, this.Login_User);
    // this.Get_Menu_Status(79, this.Login_User);
    // this.Get_Menu_Status(80, this.Login_User);
    // this.Get_Menu_Status(81, this.Login_User);
    // this.Get_Menu_Status(82, this.Login_User);
    // this.Get_Menu_Status(83, this.Login_User);
    // this.Get_Menu_Status(84, this.Login_User);
    // this.Get_Menu_Status(85, this.Login_User);
    // this.Get_Menu_Status(86, this.Login_User);
    // this.Get_Menu_Status(87, this.Login_User);
    // this.Get_Menu_Status(88, this.Login_User);
    // this.Get_Menu_Status(89, this.Login_User);
    // this.Get_Menu_Status(90, this.Login_User);
    this.Get_Menu_Status_Multiple(
      "5,23,22,31,40,41,42,45,60,61,63,64,65,68,69,72,73,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,102,103,109,112,114,115,116,117,118,119,125,138,140",
      this.Login_User
    );
    //  this.Get_Menu_Status(66,this.Login_User)

    this.Load_Dropdowns();
    //this.Search_Document();
    // this.Get_Lead_Load_Data();
    this.Get_Lead_Load_Data_ByUser(this.Login_User);
    this.Pointer_Start_ = 1;
    this.Pointer_Stop_Course = this.Page_Length_Course;
    this.Black_Stop = this.Page_Length;
    this.Red_Stop = this.Page_Length;
    // this.Pointer_Stop_Course =this.Page_Length;
    this.Pointer_Stop_ = this.Page_Length;
    this.Black_Stop = this.Page_Length;
    this.Red_Stop_Course = this.Page_Length_Course;
    this.Remove_Registration_Visibility = false;
    this.Registration_Visiblility = false;
    this.Remove_Activte_Visiblility = false;
    this.Activte_Visiblility = false;
    this.Agent_View = false;
  }

  async Get_site_Pageload() {
    const response = await this.Student_Service_.Get_site_Pageload();

    this.Country1_Data = response[0];
    this.Country_Temp.Country_Id = 0;
    this.Country_Temp.Country_Name = "All";
    this.Country1_Data.unshift(Object.assign({}, this.Country_Temp));
    this.Country_ = this.Country1_Data[0];
    //this.Application_Country_ = this.Country1_Data[0];

    this.Ielts_Data = response[1];
    this.Ielts_Temp.Ielts_Id = 0;
    this.Ielts_Temp.Ielts_Name = "All";
    this.Ielts_Data.unshift(Object.assign({}, this.Ielts_Temp));
    this.Ielts_ = this.Ielts_Data[0];

    this.Intake_Data = response[5];
    this.Intake_Year_Data = response[6];
    // this.Intake_Temp.Intake_Id = 0;
    // this.Intake_Temp.Intake_Name = "All";
    // this.Intake_Data.unshift(Object.assign({},this.Intake_Temp));
    // this.Intake_ = this.Intake_Data[0];

    this.Sub_Section_Data = response[9];

    this.Level_Detail_Data = response[4];
    this.Level_Detail_Temp.Level_Detail_Id = 0;
    this.Level_Detail_Temp.Level_Detail_Name = "All";
    this.Level_Detail_Data.unshift(Object.assign({}, this.Level_Detail_Temp));
    this.Level_Detail_ = this.Level_Detail_Data[0];

    // this.University_Data = response[7];
    // this.University_Temp.University_Id = 0;
    // this.University_Temp.University_Name = "All";
    // this.University_Data.unshift(Object.assign({},this.University_Temp));
    // this.University_ = this.University_Data[0];

    this.Duration_Data = response[3];

    this.Subject_Data = response[2];
    // this.Subject_Temp.Subject_Id = 0;
    // this.Subject_Temp.Subject_Name = "All";
    //this.Subject_Data.unshift(this.Subject_Temp);
    // this.Subject_= this.Subject_Data[0];
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
  isDesktopMenu() {
    if ($(window).width() < 991) {
      return false;
    }
    return true;
  }
  Get_Sub_Section_From_Course(Subject_1_temp) {
    this.Subject_ = Subject_1_temp;
    this.issLoading = true;
    this.Sub_Section_Service_.Get_Sub_Section_From_Course(
      Subject_1_temp.Subject_Id
    ).subscribe(
      (Save_status) => {
        this.Sub_Section_Data = Save_status[0];

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

  // Get_Menu_Status(Menu_id, Login_user_id) {
  // 	this.issLoading = true;
  // 	this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(
  // 		(Rows) => {
  // 			if (Menu_id == 5)
  // 				if (Rows[0][0] == undefined) {
  // 					localStorage.removeItem("token");
  // 					this.router.navigateByUrl("Home_Page");
  // 				}

  // 			var a = Rows[0];

  // 			if (Rows[0][0] != undefined)
  // 				if (Rows[0][0].View > 0) {
  // 					if (Menu_id == 5) {
  // 						this.Permissions = Rows[0][0];
  // 						if (this.Permissions == undefined || this.Permissions == null) {
  // 							localStorage.removeItem("token");
  // 							this.router.navigateByUrl("Home_Page");
  // 						}
  // 						this.Student_Edit = this.Permissions.Edit;
  // 						this.Student_Save = this.Permissions.Save;
  // 						this.Student_Delete = this.Permissions.Delete;
  // 					} else if (Menu_id == 23) {
  // 						this.Remove_Registration_Permissions = Rows[0][0];

  // 						if (this.Remove_Registration_Permissions.View == true)
  // 							this.Remove_Registration_Visibility = true;
  // 					} else if (Menu_id == 22) {
  // 						this.Registration_Permissions = Rows[0][0];

  // 						if (this.Registration_Permissions.View == true)
  // 							this.Registration_Visiblility = true;
  // 					} else if (Menu_id == 31) {

  // 						this.Fees_Collection_Permission = Rows[0][0];
  // 						if (
  // 							this.Fees_Collection_Permission != undefined &&
  // 							this.Fees_Collection_Permission != null
  // 						) {

  // 							this.Fees_Receipt_Edit = this.Fees_Collection_Permission.Edit;
  // 							this.Fees_Receipt_Delete =
  // 								this.Fees_Collection_Permission.Delete;
  // 							this.Fees_Receipt_Save = this.Fees_Collection_Permission.Save;
  // 						}
  // 					} else if (Menu_id == 40) {
  // 						this.Course_History_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Course_History_Tab_Permission != undefined &&
  // 							this.Course_History_Tab_Permission != null
  // 						) {
  // 							this.Course_History_Tab_Edit =
  // 								this.Course_History_Tab_Permission.Edit;
  // 							this.Course_History_Tab_View =
  // 								this.Course_History_Tab_Permission.View;
  // 						}
  // 					} else if (Menu_id == 61) {
  // 						this.Checklist_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Checklist_Tab_Permission != undefined &&
  // 							this.Checklist_Tab_Permission != null
  // 						) {
  // 							this.Checklist_Tab_Edit = this.Checklist_Tab_Permission.Edit;
  // 							this.Checklist_Tab_View = this.Checklist_Tab_Permission.View;
  // 						}
  // 					} else if (Menu_id == 60) {
  // 						this.Applications_Details_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Applications_Details_Tab_Permission != undefined &&
  // 							this.Applications_Details_Tab_Permission != null
  // 						) {
  // 							this.Applications_Details_Tab_Edit =
  // 								this.Applications_Details_Tab_Permission.Edit;
  // 							this.Applications_Details_Tab_View =
  // 								this.Applications_Details_Tab_Permission.View;
  // 							this.Applications_Details_Tab_Delete =
  // 								this.Applications_Details_Tab_Permission.Delete;
  // 							this.Applications_Details_Tab_Save =
  // 								this.Applications_Details_Tab_Permission.Save;
  // 							// this.Agent_View=true;
  // 						}
  // 					} else if (Menu_id == 41) {
  // 						this.Search_Course_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Search_Course_Tab_Permission != undefined &&
  // 							this.Search_Course_Tab_Permission != null
  // 						) {
  // 							this.Search_Course_Tab_View =
  // 								this.Search_Course_Tab_Permission.View;
  // 							this.Search_Course_Tab_Edit =
  // 								this.Search_Course_Tab_Permission.Edit;
  // 						}
  // 					} else if (Menu_id == 42) {
  // 						this.Fees_Collection_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Fees_Collection_Tab_Permission != undefined &&
  // 							this.Fees_Collection_Tab_Permission != null
  // 						) {
  // 							this.Fees_Collection_Tab_Edit =
  // 								this.Fees_Collection_Tab_Permission.Edit;
  // 							this.Fees_Collection_Tab_View =
  // 								this.Fees_Collection_Tab_Permission.View;
  // 						}
  // 					} else if (Menu_id == 45) {
  // 						// this.Statistics_Tab_Permission=Rows[0][0];
  // 						// if (this.Statistics_Tab_Permission != undefined && this.Statistics_Tab_Permission != null)
  // 						// {
  // 						//     this.Statistics_Tab_View=this.Statistics_Tab_Permission.View
  // 						//     this.Statistics_Tab_Edit=this.Statistics_Tab_Permission.Edit
  // 						// }
  // 					}
  // 					// else if (Menu_id==49)
  // 					// {

  // 					//     this.Documewnt_View_Permission=Rows[0][0];
  // 					//     if (this.Documewnt_View_Permission != undefined && this.Documewnt_View_Permission != null)
  // 					//     {

  // 					//         this.Document_View_Status=this.Documewnt_View_Permission.View

  // 					//     }

  // 					// }
  // 					else if (Menu_id == 64) {
  // 						this.Remove_Activity_Permissions = Rows[0][0];

  // 						if (this.Remove_Activity_Permissions.View == true)
  // 							this.Remove_Activte_Visiblility = true;
  // 					} else if (Menu_id == 63) {
  // 						this.Activity_Permissions = Rows[0][0];

  // 						if (this.Activity_Permissions.View == true)
  // 							this.Activte_Visiblility = true;
  // 					}
  // 					else if (Menu_id == 65)
  // 					 {
  // 						this.Agent_Permissions = Rows[0][0];

  // 						if (this.Agent_Permissions.View == true)
  // 						 this.Agent_View = true;

  // 					}
  // 					else if (Menu_id == 68) {
  // 						this.Invoice_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Invoice_Tab_Permission != undefined &&
  // 							this.Invoice_Tab_Permission != null
  // 						) {
  // 							this.Invoice_Tab_View = this.Invoice_Tab_Permission.View;
  // 							this.Invoice_Tab_Edit = this.Invoice_Tab_Permission.Edit;
  // 						}
  // 					}
  // 					else if (Menu_id == 69) {
  // 						this.Visa_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Visa_Tab_Permission != undefined &&
  // 							this.Visa_Tab_Permission != null
  // 						)

  // 						 {
  // 							this.Visa_Tab_Edit = this.Visa_Tab_Permission.Edit;
  // 							this.Visa_Tab_View = this.Visa_Tab_Permission.View;
  // 							this.Visa_Tab_Delete = this.Visa_Tab_Permission.Delete;
  // 							this.Visa_Tab_Save = this.Visa_Tab_Permission.Save;
  // 						}
  // 					}

  // 					else if (Menu_id == 97) {
  // 						this.Pre_Admission_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Pre_Admission_Tab_Permission != undefined &&
  // 							this.Pre_Admission_Tab_Permission != null
  // 						)

  // 						 {
  // 							this.Pre_Admission_Tab_Edit = this.Pre_Admission_Tab_Permission.Edit;
  // 							this.Pre_Admission_Tab_View = this.Pre_Admission_Tab_Permission.View;
  // 							this.Pre_Admission_Tab_Delete = this.Pre_Admission_Tab_Permission.Delete;
  // 							this.Pre_Admission_Tab_Save = this.Pre_Admission_Tab_Permission.Save;
  // 						}
  // 					}

  // 					else if (Menu_id == 73) {
  // 						this.Pre_Visa_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Pre_Visa_Tab_Permission != undefined &&
  // 							this.Pre_Visa_Tab_Permission != null
  // 						)

  // 						 {
  // 							this.Pre_Visa_Tab_Edit = this.Pre_Visa_Tab_Permission.Edit;
  // 							this.Pre_Visa_Tab_View = this.Pre_Visa_Tab_Permission.View;
  // 							this.Pre_Visa_Tab_Delete = this.Pre_Visa_Tab_Permission.Delete;
  // 							this.Pre_Visa_Tab_Save = this.Pre_Visa_Tab_Permission.Save;
  // 						}
  // 					}

  // 					else if (Menu_id == 72)
  // 					 {
  // 						this.Review_Tab_Permission = Rows[0][0];
  // 						if (
  // 							this.Review_Tab_Permission != undefined &&
  // 							this.Review_Tab_Permission != null
  // 						)

  // 						 {
  // 							this.Review_Tab_Edit = this.Review_Tab_Permission.Edit;
  // 							this.Review_Tab_View = this.Review_Tab_Permission.View;
  // 							this.Review_Tab_Delete = this.Review_Tab_Permission.Delete;
  // 							this.Review_Tab_Save = this.Review_Tab_Permission.Save;
  // 						}
  // 					}

  // 					else if (Menu_id == 75)
  // 					 {

  // 						this.Change_Status_Button_Permission = Rows[0][0];

  // 						if (this.Change_Status_Button_Permission.View == true)
  // 						 this.Change_Status_Button_View = true;

  // 					}
  // 					else if (Menu_id == 76)
  // 					 {
  // 						this.Student_Approve_Button_Permission = Rows[0][0];

  // 						if (this.Student_Approve_Button_Permission.View == true)
  // 						 this.Student_Approve_Button_View = true;

  // 					}
  // 					else if (Menu_id == 77)
  // 					 {
  // 						this.Remove_Approval_Button_Permission = Rows[0][0];

  // 						if (this.Remove_Approval_Button_Permission.View == true)
  // 						 this.Remove_Approval_Button_View = true;

  // 					}

  // 					else if (Menu_id == 78)
  // 					 {

  // 						this.Application_Active_Button_Permission = Rows[0][0];

  // 						if (this.Application_Active_Button_Permission.View == true)
  // 						 this.Application_Active_Button_View = true;

  // 					}
  // 					else if (Menu_id == 79)
  // 					 {
  // 						this.Application_Deactive_Button_Permission = Rows[0][0];

  // 						if (this.Application_Deactive_Button_Permission.View == true)
  // 						 this.Application_Deactive_Button_View = true;

  // 					}

  // 					else if (Menu_id == 80)
  // 					 {
  // 						this.Move_To_PreApplication_Button_Permission = Rows[0][0];

  // 						if (this.Move_To_PreApplication_Button_Permission.View == true)
  // 						 this.Move_To_PreApplication_Button_View = true;

  // 					}

  // 					else if (Menu_id == 81)
  // 					 {
  // 						this.Send_To_Bph_Button_Permission = Rows[0][0];

  // 						if (this.Send_To_Bph_Button_Permission.View == true)
  // 						 this.Send_To_Bph_Button_View = true;

  // 					}

  // 					else if (Menu_id == 82)
  // 					 {
  // 						this.Visa_Rejection_Button_Permission = Rows[0][0];

  // 						if (this.Visa_Rejection_Button_Permission.View == true)
  // 						 this.Visa_Rejection_Button_View = true;

  // 					}
  // 					else if (Menu_id == 83)
  // 					 {
  // 						this.Cas_Transfer_Button_Permission = Rows[0][0];

  // 						if (this.Cas_Transfer_Button_Permission.View == true)
  // 						 this.Cas_Transfer_Button_View = true;

  // 					}
  // 					else if (Menu_id == 84)
  // 					 {
  // 						this.Refund_Transfer_Button_Permission = Rows[0][0];

  // 						if (this.Refund_Transfer_Button_Permission.View == true)
  // 						 this.Refund_Transfer_Button_View = true;

  // 					}
  // 					else if (Menu_id == 85)
  // 					 {
  // 						this.Counsilor_Transfer_Button_Permission = Rows[0][0];

  // 						if (this.Counsilor_Transfer_Button_Permission.View == true)
  // 						 this.Counsilor_Transfer_Button_View = true;

  // 					}
  // 					else if (Menu_id == 86)
  // 					 {
  // 						this.Application_Transfer_Button_Permission = Rows[0][0];

  // 						if (this.Application_Transfer_Button_Permission.View == true)
  // 						 this.Application_Transfer_Button_View = true;

  // 					}
  // 					else if (Menu_id == 87)
  // 					 {
  // 						this.Admission_Transfer_Button_Permission = Rows[0][0];

  // 						if (this.Admission_Transfer_Button_Permission.View == true)
  // 						 this.Admission_Transfer_Button_View = true;

  // 					}
  // 					else if (Menu_id == 88)
  // 					 {
  // 						this.PreAdmission_Transfer_Button_Permission = Rows[0][0];

  // 						if (this.PreAdmission_Transfer_Button_Permission.View == true)
  // 						 this.PreAdmission_Transfer_Button_View = true;

  // 					}
  // 					else if (Menu_id == 89)
  // 					 {
  // 						this.PreVisa_Transfer_Button_Permission = Rows[0][0];

  // 						if (this.PreVisa_Transfer_Button_Permission.View == true)
  // 						 this.PreVisa_Transfer_Button_View = true;

  // 					}
  // 					else if (Menu_id == 90)
  // 					 {
  // 						this.Visa_Transfer_Button_Permission = Rows[0][0];

  // 						if (this.Visa_Transfer_Button_Permission.View == true)
  // 						 this.Visa_Transfer_Button_View = true;

  // 					}

  // 				}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 				panelClass: "Dialogbox-Class",
  // 				data: { Message: "Error Occured", Type: "2" },
  // 			});
  // 		}
  // 	);
  // }
  User_Click() {
    this.User_Div = true;
    // Clear checkboxes in both data arrays
    this.User_Details_Data.forEach((user) => (user.Check_Box = false));
    this.User_Details_Filter.forEach((user) => (user.Check_Box = false));
    this.User_Details_Data = [];

    for (var m = 0; m < this.User_Details_Data.length; m++) {
      this.User_Details_Data[m].Check_Box = false;
    }
  }
  Load_User_Details(event: any) {
    var Value = "";
    // if (event== undefined) Value = ""
    if (event.target.value == "") Value = "undefined";
    else if (event.target.value == undefined) Value = "undefined";
    else Value = event.target.value.toLowerCase();
    this.issLoading = true;
    // debugger;
    console.log("this.Application_Id_Log: ", this.Application_Id_Log);
    this.Student_Service_.Load_ChatUser_Details_comment(
      Value,
      Number(this.Login_User),
      this.Application_Id_Log
    ).subscribe(
      (Rows) => {
        // debugger;
        if (Value == "undefined") {
          Value = "";
        }
        if (Rows != null) {
          this.User_Details_Data = Rows[0];

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

  clr_Chat_Window() {
    this.tagged_users = [];
    this.Users = [];
    this.messageText = "";
    this.ImageFile_ = [];
    this.Display_File_ = "";
    this.User_Details_Data = [];
    this.User_Div = false;
  }

  Tagged_Users(User_D_e: User_Details, IsChecked: boolean, index: number) {
    if (this.Users == undefined) this.Users = [];
    let userIndex = this.Users.indexOf(User_D_e); // Changed 'index' to 'userIndex'
    // let index = this.Users.indexOf(User_D_e);
    if (!IsChecked) {
      if (userIndex > -1) {
        this.Users.splice(userIndex, 1);
      }
    } else {
      this.Users.push(User_D_e);
    }

    const uniqueUsers = this.Users.filter(
      (user, idx, self) =>
        idx ===
        self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
    );

    // Extract the name property values into an array and use join() to concatenate them into a single string
    const namesString = uniqueUsers
      .map((obj) => `@${obj.User_Details_Name}`)
      .join(", ");
    this.id_num = uniqueUsers.map((obj) => obj.User_Details_Id).join(",");
    const id = parseInt(this.id_num);
    this.Tagged_Ids = this.id_num.split(",").map((id) => parseInt(id));
    // Create an object with the concatenated namesString as the value of the name property
    this.tagged_users = [
      {
        User_Id: this.id_num,
        User_Details_Name: namesString,
        User_Details_Id: 0,
      },
    ];
  }

  Select_All_TaggedUser() {
    if (this.Users == undefined) this.Users = [];
    for (var i = 0; i < this.User_Details_Data.length; i++) {
      if (this.Select_TaggedUser == false)
        this.User_Details_Data[i].Check_Box = true;
      else this.User_Details_Data[i].Check_Box = false;
    }

    this.Users = []; // Always reset before pushing

    for (let m = 0; m < this.User_Details_Data.length; m++) {
      if (this.User_Details_Data[m].Check_Box === true) {
        if (this.Users.length < 2) {
          this.Users.push(this.User_Details_Data[m]);
        } else {
          // Auto uncheck extra users if more than 2
          this.User_Details_Data[m].Check_Box = false;
        }
      }
    }

    const uniqueUsers = this.Users.filter(
      (user, index, self) =>
        index ===
        self.findIndex((u) => u.User_Details_Id === user.User_Details_Id)
    );

    // Extract the name property values into an array and use join() to concatenate them into a single string
    const namesString = uniqueUsers
      .map((obj) => `@${obj.User_Details_Name}`)
      .join(", ");
    const id_num = uniqueUsers.map((obj) => obj.User_Details_Id).join(", ");
    const id = parseInt(id_num);

    // Create an object with the concatenated namesString as the value of the name property
    this.tagged_users = [
      { User_Id: id_num, User_Details_Name: namesString, User_Details_Id: 0 },
    ];
  }
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
      this.Display_File_ = "";
      return;
    }

    const trimmedString = this.messageText.trim();
    if (trimmedString != "" || this.Display_File_ != "") {
      this.Chats_.Chats = this.messageText;
      this.Chats_.From_User = Number(this.Login_User);
      this.Chats_.From_User_Name = this.Login_User_Name;
      this.Chats_.Display_File = this.Display_File_;
      this.Chats_.Tagged_User = this.tagged_users;
      this.Chats_.Student_Id = this.Profile_.Student_Id;
      this.Chats_.Application_Details_Id = this.Application_Id_Log;
      // debugger;

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
          // debugger;
          this.Display_File_ = '';
          this.issLoading = false;
          let index = 0;
          this.selectedUsersForNotifcation = [];
          // debugger;
          // this.Chat_Window_Service_.Save_Comments_Email(this.Chats_

          //         ).subscribe(
          //       (Save_status2) => {

          //        },
          //       (Rows2) => {
          //         this.issLoading = false;
          //         const dialogRef = this.dialogBox.open(DialogBox_Component, {
          //           panelClass: "Dialogbox-Class",
          //           data: { Message: "Mail Error Occured", Type: "2" },
          //         });
          //       }
          //     );






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
          console.log(
            "Save_status[0][0].From_UserName: ",
            Save_status[0][0].From_UserName
          );
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

              //this.messages.push(message);

              // setTimeout(() => {
              // 	this.scrollToBottom();
              // }, 100);
              this.clr_Chat_Window();
              this.Get_Comments(this.Application_Id_Log);

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
  Get_Comments(Application_Id_Log) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;
    // debugger;
    this.Student_Service_.Get_Comments(Application_Id_Log).subscribe(
      (Rows) => {
        // debugger;
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

  Get_Menu_Status_Multiple(Menu_id, Login_user_id) {
    this.issLoading = true;
    // debugger;
    this.Student_Service_.Get_Menu_Status_Multiple(
      Menu_id,
      Login_user_id
    ).subscribe(
      (Rows) => {
        // debugger;
        if (Menu_id == 5)
          if (Rows[0][0] == undefined) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        Rows = Rows[0];
        this.temparray = Rows;

        //if (Rows[0][0] != undefined)
        for (
          var i = 0;
          i < this.temparray.length;
          i++ //if (Rows[i][0].View > 0)
        ) {
          Menu_id = Rows[i]["menu_id"];
          if (Menu_id == 5) {
            this.Permissions = Rows[i];
            if (this.Permissions == undefined || this.Permissions == null) {
              localStorage.removeItem("token");
              this.router.navigateByUrl("Home_Page");
            }
            this.Student_Edit = this.Permissions.Edit;
            this.Student_Save = this.Permissions.Save;
            this.Student_Delete = this.Permissions.Delete;
          } else if (Menu_id == 23) {
            this.Remove_Registration_Permissions = Rows[i];

            if (this.Remove_Registration_Permissions.View == true)
              this.Remove_Registration_Visibility = true;
          } else if (Menu_id == 22) {
            this.Registration_Permissions = Rows[i];

            if (this.Registration_Permissions.View == true)
              this.Registration_Visiblility = true;
          } else if (Menu_id == 31) {
            this.Fees_Collection_Permission = Rows[i];
            if (
              this.Fees_Collection_Permission != undefined &&
              this.Fees_Collection_Permission != null
            ) {
              this.Fees_Receipt_Edit = this.Fees_Collection_Permission.Edit;
              this.Fees_Receipt_Delete = this.Fees_Collection_Permission.Delete;
              this.Fees_Receipt_Save = this.Fees_Collection_Permission.Save;
              this.Fees_Collection_Tab_View =
                this.Fees_Collection_Permission.View;
            }
          } else if (Menu_id == 140) {
            this.Comission_Collection_Permission = Rows[i];
            if (
              this.Comission_Collection_Permission != undefined &&
              this.Comission_Collection_Permission != null
            ) {
              this.Commission_Receipt_Edit =
                this.Comission_Collection_Permission.Edit;
              this.Commission_Receipt_Delete =
                this.Comission_Collection_Permission.Delete;
              this.Commission_Receipt_Save =
                this.Comission_Collection_Permission.Save;
              this.Commission_Collection_Tab_View =
                this.Comission_Collection_Permission.View;
            }
          } else if (Menu_id == 40) {
            this.Course_History_Tab_Permission = Rows[i];
            if (
              this.Course_History_Tab_Permission != undefined &&
              this.Course_History_Tab_Permission != null
            ) {
              this.Course_History_Tab_Edit =
                this.Course_History_Tab_Permission.Edit;
              this.Course_History_Tab_View =
                this.Course_History_Tab_Permission.View;
            }
          } else if (Menu_id == 61) {
            this.Checklist_Tab_Permission = Rows[i];
            if (
              this.Checklist_Tab_Permission != undefined &&
              this.Checklist_Tab_Permission != null
            ) {
              this.Checklist_Tab_Edit = this.Checklist_Tab_Permission.Edit;
              this.Checklist_Tab_View = this.Checklist_Tab_Permission.View;
            }
          } else if (Menu_id == 60) {
            this.Applications_Details_Tab_Permission = Rows[i];
            if (
              this.Applications_Details_Tab_Permission != undefined &&
              this.Applications_Details_Tab_Permission != null
            ) {
              this.Applications_Details_Tab_Edit =
                this.Applications_Details_Tab_Permission.Edit;
              this.Applications_Details_Tab_View =
                this.Applications_Details_Tab_Permission.View;
              this.Applications_Details_Tab_Delete =
                this.Applications_Details_Tab_Permission.Delete;
              this.Applications_Details_Tab_Save =
                this.Applications_Details_Tab_Permission.Save;
              // this.Agent_View=true;
            }
          } else if (Menu_id == 41) {
            this.Search_Course_Tab_Permission = Rows[i];
            if (
              this.Search_Course_Tab_Permission != undefined &&
              this.Search_Course_Tab_Permission != null
            ) {
              this.Search_Course_Tab_View =
                this.Search_Course_Tab_Permission.View;
              this.Search_Course_Tab_Edit =
                this.Search_Course_Tab_Permission.Edit;
            }
          } else if (Menu_id == 42) {
            this.Fees_Collection_Tab_Permission = Rows[i];
            if (
              this.Fees_Collection_Tab_Permission != undefined &&
              this.Fees_Collection_Tab_Permission != null
            ) {
              this.Fees_Collection_Tab_Edit =
                this.Fees_Collection_Tab_Permission.Edit;
              // this.Fees_Collection_Tab_View =
              // 	this.Fees_Collection_Tab_Permission.View;
            }
          } else if (Menu_id == 45) {
            // this.Statistics_Tab_Permission=Rows[0][0];
            // if (this.Statistics_Tab_Permission != undefined && this.Statistics_Tab_Permission != null)
            // {
            //     this.Statistics_Tab_View=this.Statistics_Tab_Permission.View
            //     this.Statistics_Tab_Edit=this.Statistics_Tab_Permission.Edit
            // }
          }
          // else if (Menu_id==49)
          // {

          //     this.Documewnt_View_Permission=Rows[0][0];
          //     if (this.Documewnt_View_Permission != undefined && this.Documewnt_View_Permission != null)
          //     {

          //         this.Document_View_Status=this.Documewnt_View_Permission.View

          //     }

          // }
          else if (Menu_id == 64) {
            this.Remove_Activity_Permissions = Rows[i];

            if (this.Remove_Activity_Permissions.View == true)
              this.Remove_Activte_Visiblility = true;
          } else if (Menu_id == 63) {
            this.Activity_Permissions = Rows[i];

            if (this.Activity_Permissions.View == true)
              this.Activte_Visiblility = true;
          } else if (Menu_id == 65) {
            this.Agent_Permissions = Rows[i];

            if (this.Agent_Permissions.View == true) this.Agent_View = true;
          } else if (Menu_id == 68) {
            this.Invoice_Tab_Permission = Rows[i];
            if (
              this.Invoice_Tab_Permission != undefined &&
              this.Invoice_Tab_Permission != null
            ) {
              this.Invoice_Tab_View = this.Invoice_Tab_Permission.View;
              this.Invoice_Tab_Edit = this.Invoice_Tab_Permission.Edit;
            }
          }

          // else if (Menu_id == 114) {
          // 	this.Department_Typeahead_Permission = Rows[i];
          // 	if (
          // 		this.Department_Typeahead_Permission != undefined &&
          // 		this.Department_Typeahead_Permission != null
          // 	) {
          // 		this.Department_Typeahead_View = this.Department_Typeahead_Permission.View;

          // 	}
          // }

          // else if (Menu_id == 115) {
          // 	this.Branch_Typeahead_Permission = Rows[i];
          // 	if (
          // 		this.Branch_Typeahead_Permission != undefined &&
          // 		this.Branch_Typeahead_Permission != null
          // 	) {
          // 		this.Branch_Typeahead_View = this.Branch_Typeahead_Permission.View;

          // 	}
          // }
          else if (Menu_id == 125) {
            this.Profile_Refund_Permission = Rows[i];
            if (
              this.Profile_Refund_Permission != undefined &&
              this.Profile_Refund_Permission != null
            ) {
              this.Profile_Refund_View = this.Profile_Refund_Permission.View;
            }
          }

          // else if (Menu_id == 116) {
          // 	this.Tostaff_Typeahead_Permission = Rows[i];
          // 	if (
          // 		this.Tostaff_Typeahead_Permission != undefined &&
          // 		this.Tostaff_Typeahead_Permission != null
          // 	) {
          // 		this.Tostaff_Typeahead_View = this.Tostaff_Typeahead_Permission.View;

          // 	}
          // }
          else if (Menu_id == 117) {
            this.Student_approved_Status_Permission = Rows[i];
            if (
              this.Student_approved_Status_Permission != undefined &&
              this.Student_approved_Status_Permission != null
            ) {
              this.Student_approved_Status_View =
                this.Student_approved_Status_Permission.View;
            }
          } else if (Menu_id == 118) {
            this.Auditor_Status_Permission = Rows[i];
            if (
              this.Auditor_Status_Permission != undefined &&
              this.Auditor_Status_Permission != null
            ) {
              this.Auditor_Status_View = this.Auditor_Status_Permission.View;
            }
          } else if (Menu_id == 119) {
            this.Payment_Status_Permission = Rows[i];
            if (
              this.Payment_Status_Permission != undefined &&
              this.Payment_Status_Permission != null
            ) {
              this.Payment_Status_View = this.Payment_Status_Permission.View;
            }
          } else if (Menu_id == 69) {
            this.Visa_Tab_Permission = Rows[i];
            if (
              this.Visa_Tab_Permission != undefined &&
              this.Visa_Tab_Permission != null
            ) {
              this.Visa_Tab_Edit = this.Visa_Tab_Permission.Edit;
              this.Visa_Tab_View = this.Visa_Tab_Permission.View;
              this.Visa_Tab_Delete = this.Visa_Tab_Permission.Delete;
              this.Visa_Tab_Save = this.Visa_Tab_Permission.Save;
            }
          } else if (Menu_id == 97) {
            this.Pre_Admission_Tab_Permission = Rows[i];
            if (
              this.Pre_Admission_Tab_Permission != undefined &&
              this.Pre_Admission_Tab_Permission != null
            ) {
              this.Pre_Admission_Tab_Edit =
                this.Pre_Admission_Tab_Permission.Edit;
              this.Pre_Admission_Tab_View =
                this.Pre_Admission_Tab_Permission.View;
              this.Pre_Admission_Tab_Delete =
                this.Pre_Admission_Tab_Permission.Delete;
              this.Pre_Admission_Tab_Save =
                this.Pre_Admission_Tab_Permission.Save;
            }
          } else if (Menu_id == 73) {
            this.Pre_Visa_Tab_Permission = Rows[i];
            if (
              this.Pre_Visa_Tab_Permission != undefined &&
              this.Pre_Visa_Tab_Permission != null
            ) {
              this.Pre_Visa_Tab_Edit = this.Pre_Visa_Tab_Permission.Edit;
              this.Pre_Visa_Tab_View = this.Pre_Visa_Tab_Permission.View;
              this.Pre_Visa_Tab_Delete = this.Pre_Visa_Tab_Permission.Delete;
              this.Pre_Visa_Tab_Save = this.Pre_Visa_Tab_Permission.Save;
            }
          } else if (Menu_id == 72) {
            this.Review_Tab_Permission = Rows[i];
            if (
              this.Review_Tab_Permission != undefined &&
              this.Review_Tab_Permission != null
            ) {
              this.Review_Tab_Edit = this.Review_Tab_Permission.Edit;
              this.Review_Tab_View = this.Review_Tab_Permission.View;
              this.Review_Tab_Delete = this.Review_Tab_Permission.Delete;
              this.Review_Tab_Save = this.Review_Tab_Permission.Save;
            }
          } else if (Menu_id == 75) {
            this.Change_Status_Button_Permission = Rows[i];

            if (this.Change_Status_Button_Permission.View == true)
              this.Change_Status_Button_View = true;
          } else if (Menu_id == 76) {
            this.Student_Approve_Button_Permission = Rows[i];

            if (this.Student_Approve_Button_Permission.View == true)
              this.Student_Approve_Button_View = true;
          } else if (Menu_id == 77) {
            this.Remove_Approval_Button_Permission = Rows[i];

            if (this.Remove_Approval_Button_Permission.View == true)
              this.Remove_Approval_Button_View = true;
          } else if (Menu_id == 78) {
            this.Application_Active_Button_Permission = Rows[i];

            if (this.Application_Active_Button_Permission.View == true)
              this.Application_Active_Button_View = true;
          } else if (Menu_id == 79) {
            this.Application_Deactive_Button_Permission = Rows[i];

            if (this.Application_Deactive_Button_Permission.View == true)
              this.Application_Deactive_Button_View = true;
          } else if (Menu_id == 80) {
            this.Move_To_PreApplication_Button_Permission = Rows[i];

            if (this.Move_To_PreApplication_Button_Permission.View == true)
              this.Move_To_PreApplication_Button_View = true;
          } else if (Menu_id == 81) {
            this.Send_To_Bph_Button_Permission = Rows[i];

            if (this.Send_To_Bph_Button_Permission.View == true)
              this.Send_To_Bph_Button_View = true;
          } else if (Menu_id == 82) {
            this.Visa_Rejection_Button_Permission = Rows[i];

            if (this.Visa_Rejection_Button_Permission.View == true)
              this.Visa_Rejection_Button_View = true;
          } else if (Menu_id == 102) {
            this.Closed_Button_Permission = Rows[i];

            if (this.Closed_Button_Permission.View == true)
              this.Closed_Button_View = true;
          } else if (Menu_id == 83) {
            this.Cas_Transfer_Button_Permission = Rows[i];

            if (this.Cas_Transfer_Button_Permission.View == true)
              this.Cas_Transfer_Button_View = true;
          } else if (Menu_id == 84) {
            this.Refund_Transfer_Button_Permission = Rows[i];

            if (this.Refund_Transfer_Button_Permission.View == true)
              this.Refund_Transfer_Button_View = true;
          } else if (Menu_id == 85) {
            this.Counsilor_Transfer_Button_Permission = Rows[i];

            if (this.Counsilor_Transfer_Button_Permission.View == true)
              this.Counsilor_Transfer_Button_View = true;
          } else if (Menu_id == 86) {
            this.Application_Transfer_Button_Permission = Rows[i];

            if (this.Application_Transfer_Button_Permission.View == true)
              this.Application_Transfer_Button_View = true;
          } else if (Menu_id == 87) {
            this.Admission_Transfer_Button_Permission = Rows[i];

            if (this.Admission_Transfer_Button_Permission.View == true)
              this.Admission_Transfer_Button_View = true;
          } else if (Menu_id == 88) {
            this.PreAdmission_Transfer_Button_Permission = Rows[i];

            if (this.PreAdmission_Transfer_Button_Permission.View == true)
              this.PreAdmission_Transfer_Button_View = true;
          } else if (Menu_id == 89) {
            this.PreVisa_Transfer_Button_Permission = Rows[i];

            if (this.PreVisa_Transfer_Button_Permission.View == true)
              this.PreVisa_Transfer_Button_View = true;
          } else if (Menu_id == 90) {
            this.Visa_Transfer_Button_Permission = Rows[i];

            if (this.Visa_Transfer_Button_Permission.View == true)
              this.Visa_Transfer_Button_View = true;
          } else if (Menu_id == 99) {
            this.Qualification_Tab_Permission = Rows[i];
            if (
              this.Qualification_Tab_Permission != undefined &&
              this.Qualification_Tab_Permission != null
            ) {
              this.Qualification_Tab_Edit =
                this.Qualification_Tab_Permission.Edit;
              this.Qualification_Tab_View =
                this.Qualification_Tab_Permission.View;
              this.Qualification_Tab_Delete =
                this.Qualification_Tab_Permission.Delete;
              this.Qualification_Tab_Save =
                this.Qualification_Tab_Permission.Save;
            }
          } else if (Menu_id == 98) {
            this.Language_Tab_Permission = Rows[i];
            if (
              this.Language_Tab_Permission != undefined &&
              this.Language_Tab_Permission != null
            ) {
              this.Language_Tab_Edit = this.Language_Tab_Permission.Edit;
              this.Language_Details_Tab_View =
                this.Language_Tab_Permission.View;
              this.Language_Tab_Delete = this.Language_Tab_Permission.Delete;
              this.Language_Tab_Save = this.Language_Tab_Permission.Save;
            }
          } else if (Menu_id == 102) {
            this.Language_Tab_Permission = Rows[i];
            if (
              this.Language_Tab_Permission != undefined &&
              this.Language_Tab_Permission != null
            ) {
              this.Language_Tab_Edit = this.Language_Tab_Permission.Edit;
              this.Language_Details_Tab_View =
                this.Language_Tab_Permission.View;
              this.Language_Tab_Delete = this.Language_Tab_Permission.Delete;
              this.Language_Tab_Save = this.Language_Tab_Permission.Save;
            }
          } else if (Menu_id == 103) {
            this.Tasknew_Tab_Permission = Rows[i];

            if (
              this.Tasknew_Tab_Permission != undefined &&
              this.Tasknew_Tab_Permission != null
            ) {
              this.Tasknew_Tab_Edit = this.Tasknew_Tab_Permission.Edit;
              this.Tasknew_Tab_View = this.Tasknew_Tab_Permission.View;
              this.Tasknew_Tab_Delete = this.Tasknew_Tab_Permission.Delete;
              this.Tasknew_Tab_Save = this.Tasknew_Tab_Permission.Save;
            }
          } else if (Menu_id == 109) {
            this.Documents_Tab_Permission = Rows[i];

            if (
              this.Documents_Tab_Permission != undefined &&
              this.Documents_Tab_Permission != null
            ) {
              this.Documents_Tab_Edit = this.Documents_Tab_Permission.Edit;
              this.Documents_Tab_View = this.Documents_Tab_Permission.View;
              this.Documents_Tab_Delete = this.Documents_Tab_Permission.Delete;
              this.Documents_Tab_Save = this.Documents_Tab_Permission.Save;
            }
          } else if (Menu_id == 112) {
            this.Application_History_Delete_Permission = Rows[i];

            if (
              this.Application_History_Delete_Permission != undefined &&
              this.Application_History_Delete_Permission != null
            ) {
              this.Application_History_Delete_View =
                this.Application_History_Delete_Permission.Delete;
            }
          } else if (Menu_id == 138) {
            // Use a unique Menu_id for Comments Tab
            this.Comments_Tab_Permission = Rows[i];

            if (
              this.Comments_Tab_Permission != undefined &&
              this.Comments_Tab_Permission != null
            ) {
              this.Comments_Tab_Edit = this.Comments_Tab_Permission.Edit;
              this.Comments_Tab_View = this.Comments_Tab_Permission.View;
              this.Comments_Tab_Delete = this.Comments_Tab_Permission.Delete;
              this.Comments_Tab_Save = this.Comments_Tab_Permission.Save;
            }
          }

          //   const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Page Not Available', Type: "2" } });
          // this.router.navigateByUrl('Home_Page');
        } // for
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

  //  Get_Lead_Load_Data()
  // {
  // this.issLoading = true;
  // this.Student_Service_.Get_Lead_Load_Data().subscribe(Rows => {

  //     if (Rows != undefined)
  //     {
  //         this.issLoading = false;
  //         this.Department_Data = Rows.returnvalue.Department;
  //         this.Users_Data = Rows.returnvalue.Users;
  //         this.Branch_Data = Rows.returnvalue.Branch;
  //         this.Status_Data = Rows.returnvalue.Department_Status;

  //         this.Department_Temp.Department_Id = 0;
  //         this.Department_Temp.Department_Name = "All";
  //         this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
  //         this.Department_Search = this.Department_Data[0];

  //         this.Users_Temp.User_Details_Id = 0;
  //         this.Users_Temp.User_Details_Name = "All";
  //         this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
  //         this.User_Search = this.Users_Data[0];

  //         this.Branch_Temp1.Branch_Id = 0;
  //         this.Branch_Temp1.Branch_Name = "All";
  //         this.Branch_Data.unshift(this.Branch_Temp1);
  //         this.Search_Branch = this.Branch_Data[0];

  //         this.Status_Temp.Department_Status_Id = 0;
  //         this.Status_Temp.Department_Status_Name = "All";
  //         this.Status_Data.unshift(Object.assign({},this.Status_Temp));
  //         this.Search_Status = this.Status_Data[0];
  //     }
  // },
  // Rows => {
  //     this.issLoading = false;
  //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
  // });
  // }
  Get_Lead_Load_Data_ByUser(Login_User) {
    this.issLoading = true;
    this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(
      (Rows) => {
        // debugger;
        this.Department_Data = Rows[1].slice();
        this.Department_Data_Temp.Department_Id = 0;
        this.Department_Data_Temp.Department_Name = "All";
        this.Department_Data.unshift(this.Department_Data_Temp);
        // this.Department_Data.unshift(Object.assign({}, this.Department_Temp));
        // this.Department_Search = this.Department_Data[0];
        this.Department_Search = Object.assign({}, this.Department_Data_Temp);
        this.Department_Search = this.Department_Data[0];

        this.Users_Data = Rows[0].slice();
        this.Users_Temp.User_Details_Id = 0;
        this.Users_Temp.User_Details_Name = "All";
        this.Users_Data.unshift(this.Users_Temp);

        // this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
        // this.User_Search = this.Users_Data[0];
        this.User_Search = Object.assign({}, this.Users_Temp);
        console.log("student this.User_Search: ", this.User_Search);

        // this.Users_Data_Email = Rows[0].slice();
        // this.Users_Temp_Email.User_Details_Id = 0;
        // this.Users_Temp_Email.User_Details_Name = "Student";
        // this.Users_Data_Email.unshift(this.Users_Temp_Email);

        // this.Users_Data.unshift(Object.assign({}, this.Users_Temp));
        // this.User_Search = this.Users_Data[0];
        this.User_Search_Email = Object.assign({}, this.Users_Temp_Email);

        if (Number(this.Login_User) > 0) {
          for (var i = 0; i < this.Users_Data.length; i++) {
            if (Number(this.Login_User) == this.Users_Data[i].User_Details_Id)
              this.User_Search = this.Users_Data[i];
          }
        } else this.User_Search = this.Users_Data[0];

        //this.User_Search = this.Users_Data[0];
        this.By_User_Search = Object.assign({}, this.Users_Temp1);
        this.By_User_Search = this.Users_Data[0];

        this.Branch_Data = Rows[2].slice();
        this.Branch_Temp1.Branch_Id = 0;
        this.Branch_Temp1.Branch_Name = "All";
        // this.Branch_Data.unshift(Object.assign({}, this.Branch_Temp1));
        this.Branch_Data.unshift(this.Branch_Temp1);
        this.Search_Branch = Object.assign({}, this.Branch_Temp1);
        this.Search_Branch = this.Branch_Data[0];

        this.Status_Data = Rows[5].slice();
        this.Status_Data_Temp.Department_Status_Id = 0;
        this.Status_Data_Temp.Department_Status_Name = "All";
        //this.Status_Data.unshift(this.Status_Temp);
        // this.Status_Data.unshift(Object.assign({}, this.Status_Temp));
        // this.Search_Status = this.Status_Data[0];
        this.Status_Data.unshift(this.Status_Data_Temp);
        this.Search_Status = Object.assign({}, this.Status_Data_Temp);
        this.Search_Status = this.Status_Data[0];

        this.Search_Lead_button();
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }
  clr_Message() {
    this.Student_Message_.Message_Detail = "";
  }
  Clr_Document() {
    if (this.Documents_Data != null && this.Documents_Data != undefined)
      this.Documents_ = this.Documents_Data[0];
    this.ImageFile_Doc = [];
    this.Image_Photo = "";
    this.Student_Documents_.Description = "";
    this.Student_Documents_.Student_Id = 0;
    this.Student_Documents_.File_Name = "";
    this.Student_Documents_.Student_Document_Id = 0;
    this.If_file_changed = false;
    //this.Student_Documents_.Image= ""
  }
  Addto_My_Selection(Course_Id, Course_Name) {
    var Is_Exist = false;
    //if(this.Course_Selection_Data.length<5)

    for (var i = 0; i < this.Course_Selection_Data.length; i++) {
      if (this.Course_Selection_Data[i].Course_Id == Course_Id) Is_Exist = true;
    }
    if (Is_Exist == false) {
      this.Course_Selection_.Course_Id = Course_Id;
      this.Course_Selection_.Course_Name = Course_Name;
      this.Course_Selection_Data.push(
        Object.assign({}, this.Course_Selection_)
      );

      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    }

    // else{

    // }
  }
  Get_More_Information(Course_Id, index) {
    this.Course_Data[index].More_Information =
      !this.Course_Data[index].More_Information;

    if (this.Course_Data[index].More_Information == true) {
      this.issLoading = true;
      this.Student_Service_.Get_More_Information(Course_Id).subscribe(
        (Rows) => {
          this.issLoading = false;
          this.Course_Data[index].Application_Fees =
            Rows[0][0].Application_Fees;
          this.Course_Data[index].Tution_Fees = Rows[0][0].Tution_Fees;
          this.Course_Data[index].Level_Detail_Name =
            Rows[0][0].Level_Detail_Name;
          this.Course_Data[index].Duration_Name = Rows[0][0].Duration_Name;
          this.Course_Data[index].Subject_Name = Rows[0][0].Subject_Name;
          this.Course_Data[index].Details = Rows[0][0].Details;
          this.Course_Data[index].Ielts_Minimum_Score =
            Rows[0][0].Ielts_Minimum_Score;
          this.Course_Intake_Data = Rows[1];
          // this.Course_Intake_Year_Data=Rows[1]
          this.Course_Sub_Section_Data = Rows[1];

          var Course_Intake_Temp = " ";
          var Course_Sub_Section_Temp = " ";

          for (var i = 0; i < this.Course_Intake_Data.length; i++) {
            Course_Intake_Temp =
              Course_Intake_Temp + this.Course_Intake_Data[i].Intake_Name + ",";
          }

          for (var i = 0; i < this.Course_Sub_Section_Data.length; i++) {
            Course_Sub_Section_Temp =
              Course_Sub_Section_Temp +
              this.Course_Sub_Section_Data[i].Sub_Section_Name +
              ",";
          }

          Course_Intake_Temp = Course_Intake_Temp.substring(
            0,
            Course_Intake_Temp.length - 1
          );
          Course_Sub_Section_Temp = Course_Sub_Section_Temp.substring(
            0,
            Course_Sub_Section_Temp.length - 1
          );

          this.Course_Data[index].Intake_Name = Course_Intake_Temp;
          this.Course_Data[index].Sub_Section_Name = Course_Sub_Section_Temp;
        },
        (Rows) => {
          // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        }
      );
    }
  }

  Apply_Now_Click() {
    this.Course_Apply_Data = [];
    this.Apply_Now_Save(13);
  }
  Apply_Now_Save(Agent_Id_Login) {
    if (
      this.Student_.Email == undefined ||
      this.Student_.Email == null ||
      this.Student_.Email == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Please add mail address", Type: "3" },
      });
      return;
    }
    for (var i = 0; i < this.Course_Selection_Data.length; i++) {
      this.Course_Apply_Data_Temp.Course_Id =
        this.Course_Selection_Data[i].Course_Id;
      this.Course_Apply_Data.push(
        Object.assign({}, this.Course_Apply_Data_Temp)
      );
    }

    this.Student_Course_Apply_.Course_Apply = this.Course_Apply_Data;
    this.Student_Course_Apply_.Student_Id = this.Student_Id;
    this.Student_Course_Apply_.Login_Id = Number(this.Login_User);
    this.Student_Course_Apply_.expense_include = this.Expense_Include;
    if (this.Course_Apply_Data.length == 0) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Please Select Course", Type: "3" },
      });
      return;
    }

    this.issLoading = true;

    this.Student_Service_.Save_Student_Course(
      this.Student_Course_Apply_
    ).subscribe(
      (Save_status) => {
        if (Number(Save_status[0].Student_Course_Apply_Id) > 0) {
          //this.router.navigateByUrl('profile');
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Course Details Sent", Type: "false" },
          });
          this.issLoading = false;

          this.Clr_Course();
        } else {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Error Occured", Type: "2" },
          });
        }
      },
      (Rows) => {
        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
      }
    );
  }
  Delete_Course_Selection(i) {
    //this.Clr_Course()
    this.Course_Selection_Data.splice(i, 1);
  }

  Create_Application() {
    this.Applicationmodal_View = true;
    this.application_details_View = false;
    this.ApplicationDetails_.Offer_Received = false;
    this.ApplicationDetails_.Feespaymentcheck = false;

    this.ApplicationDetails_.Duration_Id = 0;
    // this.closei();
  }

  Create_Language() {
    this.Languagemodal_View = true;
    this.language_details_View = false;
    this.Clr_Ielts_Details();
    // this.closei();
  }

  Create_Newqualification() {
    this.Qualificationnew_View = true;
    this.Qualificationmodal_View = false;
  }

  Close_NewQualification() {
    this.Qualificationnew_View = false;
    this.Qualificationmodal_View = true;
  }

  Create_NewWorkexperience() {
    this.Workexperiencenew_View = true;
    this.Qualificationmodal_View = false;
  }

  Close_NewWorkexperience() {
    this.Workexperiencenew_View = false;
    this.Qualificationmodal_View = true;
  }

  Close_qualificationandWorkexperience() {
    this.Workexperiencenew_View = false;
    this.Qualificationmodal_View = true;
    this.Qualificationnew_View = false;
  }

  Create_Qualification() {
    this.Qualificationmodal_View = true;
    this.Qualification_details_View = true;
    this.Qualificationnew_View = false;
    // this.closei();
  }

  Close_Application() {
    this.Applicationmodal_View = false;
    this.application_details_View = true;
    this.Edit_save_button_view = true;
    this.Clr_ApplicationDetails();
  }

  Close_Language() {
    this.Languagemodal_View = false;
    this.language_details_View = true;
    //this.Clr_ApplicationDetails();
  }

  Close_Comment() {
    this.Comments_View = false;
    this.application_details_View = true;
    //this.Clr_ApplicationDetails();
  }

  Close_Qualification() {
    this.Qualificationmodal_View = false;
    this.Qualification_details_View = true;
    //this.Clr_ApplicationDetails();
  }
  Create_Fees() {
    this.Feesmodal_View = true;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
  }

  Create_Commission() {
    this.Commissionmodal_View = true;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
  }

  Close_Fees() {
    this.Feesmodal_View = false;
    this.Fee_Collection_View = true;
    this.clr_receipt();
    // this.Search_Receipt();
  }

  Close_Commission() {
    this.Commissionmodal_View = false;
    this.Commission_Collection_View = true;
    this.clr_receipt();
  }

  Create_Visa() {
    this.Visamodal_View = true;
    this.Visa_View = false;
    this.Visa_.Visa_Granted = false;
    this.Visa_.Visa_Letter = false;
    this.Visa_.Visa_File = false;
    this.Visa_.Visa_Rejected = false;
    this.Visa_.ATIP_Submitted = false;
    this.Visa_.ATIP_Received = false;
    this.Visa_.Visa_Re_Submitted = false;
  }

  Close_Visa() {
    this.Visamodal_View = false;
    this.Visa_View = true;
    this.clr_Visa_Tab();
    // this.Get_Visa_Details();
  }
  Create_Review() {
    this.Reviewmodal_View = true;
    this.Reviewdetails_View = false;
    this.Clr_Review();
    // this.Visa_View = false;
    // this.Visa_.Visa_Granted = false;
    // this.Visa_.Visa_Letter = false;
    // this.Visa_.Visa_File = false;
  }

  Close_Review() {
    this.Reviewmodal_View = false;
    this.Reviewdetails_View = true;
    // this.Visa_View = true;
    // this.clr_Visa_Tab();
    // this.Get_Visa_Details();
  }
  Create_Pre_Visa() {
    this.Pre_Visachecklistmodal_View = true;
    this.Pre_Visa_Checklist_View = false;
    this.Clr_Pre_Visa();
    this.get_student_checklist(this.Student_Id, 1);
    // this.Visa_.Visa_Granted = false;
    // this.Visa_.Visa_Letter = false;
    // this.Visa_.Visa_File = false;
  }
  Create_Newtask() {
    this.Tasknewmodal_View = true;
    this.Tasknew_View = false;
    this.Clr_Pre_Visa();
    this.get_student_checklist(this.Student_Id, 1);
    // this.Visa_.Visa_Granted = false;
    // this.Visa_.Visa_Letter = false;
    // this.Visa_.Visa_File = false;
  }

  Create_Pre_Admission() {
    this.Pre_AdmissionModal_View = true;
    this.Pre_Admission_View = false;
    this.Clr_Pre_Admission();
    this.get_student_Preadmission_checklist(this.Student_Id, 2);
    // this.Visa_.Visa_Granted = false;
    // this.Visa_.Visa_Letter = false;
    // this.Visa_.Visa_File = false;
  }

  Close_Pre_Visa() {
    this.Pre_Visachecklistmodal_View = false;
    this.Pre_Visa_Checklist_View = true;
    this.clr_Visa_Tab();
    // this.Get_Visa_Details();
  }
  Close_Tasknew() {
    this.Tasknewmodal_View = false;
    this.Tasknew_View = true;
    this.clr_Visa_Tab();
    // this.Get_Visa_Details();
  }

  Close_Pre_Admission() {
    this.Pre_AdmissionModal_View = false;
    this.Pre_Admission_View = true;
    this.clr_Visa_Tab();
    // this.Get_Visa_Details();
  }

  Create_Invoice() {
    this.Invoicemodal_View = true;
    this.Invoice_View = false;
  }

  Close_Invoice() {
    this.Invoicemodal_View = false;
    this.Invoice_View = true;
    this.clr_Invoice_Tab();
    //    this.Get_Invoice_Details();
  }

  Create_New() {
    this.History_View = false;
    this.View_Student_ = true;
    this.Entry_View = true;
    this.profile_View = false;
    this.Martialdetails_view = true;
    this.New_view = true;
    this.Documents_View = false;
    this.Followup_View = false;
    this.Comments_View = false;
    this.Send_Mail_View = false;
    this.Show_Send_Mail = false;
    this.Sms_Button_view = false;
    this.More_Button_view = true;

    this.Show_Followup_History = true;
    this.application_details_View = false;
    this.Qualification_details_View = false;
    this.language_details_View = false;
    this.Languagemodal_View = false;
    this.language_details_View = false;
    this.course_history_View = false;
    this.Checklist_View = false;
    this.View_document = false;
    this.Buttonset_view = true;
    this.Transfer_Button_view = false;
    this.Course_View = false;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
    this.Statistics_View = false;
    this.message_View = false;
    this.Show_FollowUp = false;
    this.Visa_View = false;
    this.Invoice_View = false;
    this.welcome_mail_view = false;
    this.Flag_Followup = 1;
    this.Flag_Student = 1;
    this.View_Follow_ = true;
    this.Applicationmodal_View = false;
    this.Qualificationmodal_View = false;
    this.Visamodal_View = false;
    this.Pre_Visamodal_View = false;
    this.Reviewmodal_View = false;
    this.Reviewdetails_View = false;
    this.Pre_Visa_View = false;
    this.Pre_AdmissionModal_View = false;
    this.Pre_Admission_View = false;
    this.Pre_Visa_Checklist_View = false;
    this.Pre_Visachecklistmodal_View = false;
    this.Transfer_Status_k = null;

    this.Tasknew_View = false;
    this.Tasknewmodal_View = false;

    this.Profile_.Phone_Change = 1;
    this.Profile_.Email_Change = 1;
    this.Profile_.Alternative_Email_Change = 1;
    this.Profile_.Alternative_Phone_Number_Change = 1;
    this.Profile_.Whatsapp_Change = 0;

    this.Followup_Status_Data = [];

    // this.FollowUp_Branch_ = Object.assign({}, this.Branch_Temp);
    // this.FollowUp_Department_ = Object.assign({}, this.Department_Temp);
    // this.FollowUp_Status_ = Object.assign({}, this.Status_Temp);
    // this.Followup_Users_ = Object.assign({}, this.Users_Temp_c);



    // this.FollowUp_Department_T = Object.assign({},    this.Department_Temp);
    this.FollowUp_Sub_Status_ = null;

    this.Visa_.Approved_Date = new Date();
    this.Visa_.Approved_Date = this.New_Date(this.Visa_.Approved_Date);

    this.Visa_.Approved_Date_L = new Date();
    this.Visa_.Approved_Date_L = this.New_Date(this.Visa_.Approved_Date_L);

    this.Visa_.Approved_Date_F = new Date();
    this.Visa_.Approved_Date_F = this.New_Date(this.Visa_.Approved_Date_F);

    this.Invoice_.Entry_Date = new Date();
    this.Invoice_.Entry_Date = this.New_Date(this.Invoice_.Entry_Date);

    this.Visa_.Visa_Rejected_Date = new Date();
    this.Visa_.Visa_Rejected_Date = this.New_Date(
      this.Visa_.Visa_Rejected_Date
    );
    this.Visa_.ATIP_Submitted_Date = new Date();
    this.Visa_.ATIP_Submitted_Date = this.New_Date(
      this.Visa_.ATIP_Submitted_Date
    );
    this.Visa_.ATIP_Received_Date = new Date();
    this.Visa_.ATIP_Received_Date = this.New_Date(
      this.Visa_.ATIP_Received_Date
    );
    this.Visa_.Visa_Re_Submitted_Date = new Date();
    this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
      this.Visa_.Visa_Re_Submitted_Date
    );

    // this.Get_Last_Followup()
    this.Student_Id = 0;
    this.FollowUp_.Remark = "";
    this.FollowUp_.Next_FollowUp_Date = new Date();
    this.FollowUp_.Next_FollowUp_Date = this.New_Date(
      this.FollowUp_.Next_FollowUp_Date
    );

    // this.Profile_.Passport_fromdate = new Date();
    // this.Profile_.Passport_fromdate = this.New_Date(
    // 	this.Profile_.Passport_fromdate
    // );

    // this.Profile_.Passport_Todate = new Date();
    // this.Profile_.Passport_Todate= this.New_Date(
    // 	this.Profile_.Passport_Todate
    // );

    if (this.Document_View_Status == true) this.Document_View_Option = true;
    this.Clr_Student();
    this.Clr_ApplicationDetails();
    // debugger
    this.Set_Default_Branch_Department();
    this.Load_Department_For_Branch();
    this.Load_Default_User();
    this.FollowUp_Status_ = Object.assign({}, this.Status_Temp);
    if (this.FollowUp_Status_.FollowUp == true) {
      this.Is_Follow_ = 1;
    } else this.Is_Follow_ = 0;
    if (this.FollowUp_Status_.Duration == true) this.Is_Duration_ = 1;
    else this.Is_Duration_ = 0;
  }
  // Add this new simple method
  Set_Default_Branch_Department() {
    // debugger
    // Load branches if not already loaded
    if (!this.Followup_Branch_Data || this.Followup_Branch_Data.length === 0) {
      this.Student_Service_.Search_Branch_Typeahead("").subscribe(
        (Rows) => {
          // debugger
          if (Rows != null && Rows[0]) {
            this.Followup_Branch_Data = Rows[0];

            // Set branch based on Branch_Id from localStorage
            this.FollowUp_Branch_ = this.Followup_Branch_Data.find(
              b => b.Branch_Id === this.Branch_Id
            );
            console.log('this.FollowUp_Branch_', this.FollowUp_Branch_);

            // Load departments for this branch
            if (this.FollowUp_Branch_) {
              // debugger
              this.Load_Department_For_Branch();
            }
          }
        }
      );
    } else {
      // Branch data already loaded, just set the values
      this.FollowUp_Branch_ = this.Followup_Branch_Data.find(
        b => b.Branch_Id === this.Branch_Id
      );

      if (this.FollowUp_Branch_) {
        // debugger
        this.Load_Department_For_Branch();
      }
    }
  }




  Load_Department_For_Branch() {
    // debugger
    this.Student_Service_.Search_Chanel_Department_Typeahead(
      this.FollowUp_Branch_.Branch_Id,
      this.Login_User,
      ""
    ).subscribe(
      (Rows) => {

        if (Rows != null && Rows[0]) {
          this.Followup_Department_Data = Rows[0];
          // debugger
          // Set department based on Login_Department from localStorage
          this.FollowUp_Department_ = this.Followup_Department_Data.find(
            d => d.Department_Id === this.Login_Department
          );

          console.log("Default User dept:", this.FollowUp_Department_);
          // After department is set, load and set default user
          if (this.FollowUp_Department_) {
            // debugger
            this.Load_Default_User();
          }
        }
      }
    );
  }

  // Add this new method to load and set default user
  Load_Default_User() {
    // debugger
    this.Student_Service_.Search_Department_User_Typeahead(
      this.FollowUp_Branch_.Branch_Id,
      this.FollowUp_Department_.Department_Id,

      ""
    ).subscribe(
      (Rows) => {
        if (Rows != null && Rows[0]) {
          // debugger
          this.Followup_Users_Data_t = Rows[0];

          //  this.Login_User, Set logged-in user as default
          this.Followup_Users_ = this.Followup_Users_Data_t.find(
            u => u.User_Details_Id === this.Login_User_Id
          );
          // debugger
          console.log("Default User Set:", this.Followup_Users_);
          this.Load_Default_Status();
        }
      }
    );
  }

  // Add this new method
  Load_Default_Status() {
    // debugger
    console.log("FollowUp_Department_:", this.FollowUp_Department_);
    if (!this.FollowUp_Department_ || !this.FollowUp_Department_.Department_Status_Id) {
      return;
    }
    // debugger
    this.Student_Service_.Search_Department_Status_Typeahead(
      this.FollowUp_Department_.Department_Id,
      ""
    ).subscribe(
      (Rows) => {
        if (Rows != null && Rows[0]) {
          this.Followup_Status_Data = Rows[0];
          console.log(this.Followup_Status_Data, ' this.Followup_Status_Data');

          // debugger
          // Set default status based on Department_Status_Id from department
          this.FollowUp_Status_ = this.Followup_Status_Data.find(
            s => s.Department_Status_Id === this.FollowUp_Department_.Department_Status_Id
          );
          // debugger
          console.log("Default Status Set:", this.FollowUp_Status_);

          // Trigger status change if needed
          if (this.FollowUp_Status_) {
            this.Status_Change();
          }
        }
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

    this.ApplicationDetails_Data = [];
    this.Receipt_data = [];
    this.Task_Student_Data = [];
    this.Task_Student_Previsa_Data = [];
    this.Task_Student_Tasknew_Data = [];
    this.Task_Student_Preadmission_Data = [];
    this.FollowUp_List = [];
    this.Visa_Data = [];
    this.Review_Data = [];
    this.Ielts_Data = [];
    this.Qualification_Data = [];
    this.Work_experience_Data = [];

    this.View_Student_ = true;
    this.Lead_EditIndex = -1;
    this.Flag_Followup = 0;
    this.Flag_Student = 0;
    this.Student_Id = 0;
    this.Entry_View = false;
    this.Transfer_view = false;
    this.View_History_ = true;
    this.Show_Followup_History = true;
    this.Change_Status_View = false;
    this.View_Follow_ = true;
    this.Cas_Followup_View = false;
    this.Cas_FollowupPrevisa_View = false;
    this.Cas_FollowupTasknew_View = false;
    this.Documents_View = false;
    this.Followup_View = false;
    this.Comments_View = false;
    this.Send_Mail_View = false;
    this.Show_Send_Mail = false;
    this.Course_Link_Button = false;
    this.Edit_save_button_view = true;

    this.Cas_FollowupPreadmission_View = false;
    this.Remarks_ = null;
    this.Start = 0;
    this.Total_Pages = 0;
    this.Invoice_View = false;
    this.Visa_View = false;
    this.Feesmodal_View = false;
    this.Visa_Click_Status = false;
    this.Applicationmodal_View = false;
    this.Qualificationmodal_View = false;
    this.Qualificationnew_View = false;
    this.Workexperiencenew_View = false;
    this.language_details_View = false;
    this.Languagemodal_View = false;
    this.Pre_Visamodal_View = false;
    this.Pre_Visa_View = false;
    this.Tasknew_View = false;
    this.Tasknewmodal_View = false;
    this.Pre_AdmissionModal_View = false;
    this.Pre_Admission_View = false;
    this.Pre_Visa_Checklist_View = false;
    this.Pre_Visachecklistmodal_View = false;
    this.Reviewmodal_View = false;
    this.Reviewdetails_View = false;
    this.Followup_Substatus_Data = [];
    this.Transfer_Status_ = null;

    this.Followup_Transfer_Status_Data = [];
    this.Transfer_Status_ = null;
    this.Transfer_Status_k = null;
    this.Task_Student_Tasknew_Data = [];
    this.Student_Documents_Data = [];

    this.from_duplicate_check = 0;

    this.Clr_Course();
    this.Clr_Student();
    this.Clr_ApplicationDetails();
    this.Close_Visa();
    this.Close_Click_Change_Status();

    if (this.Student_.Send_Welcome_Mail_Status == 1) {
      this.welcome_mail_view = false;
    } else this.welcome_mail_view = true;

    if (this.From_Statuswise_Report == 1) {
      this.From_Statuswise_Report = 0;
      this.router.navigateByUrl("/Student_Status_Wise_Report");
    }

    //this.clr_FollowUp();
  }
  Close_Click_History() {
    this.History_View = false;
    this.application_details_View = true;
  }

  Close_Click_Change_Status() {
    this.Change_Status_View = false;
    this.application_details_View = true;
    this.Is_Follow_Application = 0;
    this.Clr_Bph_Status();
  }
  Clr_Course() {
    // this.Country_.Country_Name=""
    // this.Level_Detail_.Level_Detail_Name=null;
    // this.Intake_.Intake_Name=null;
    // this.Ielts_.Ielts_Name=null
    // this.Course_Data_Typeahead=null
    this.Course_Selection_Data = [];
    this.Country_Data = null;
    this.Level_.Level_Detail_Id = null;
    this.Course_Name = null;
    this.Course_Data = [];
    //this.Search_Intake_=null;
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

  Get_Time() { }

  trackByFn(index, item) {
    return index;
  }
  Clr_Student() {
    this.Student_Name = "";
    this.Student_Id_Edit = 0;
    this.Profile_.Student_Id = 0;
    this.Profile_.Student_Name = "";
    this.Registered_Check = 0;
    this.Student_.Last_Name = "";
    this.Student_.Gender = "";
    this.Profile_.Address1 = "";
    this.Profile_.Address2 = "";
    this.Student_.Pincode = "";
    this.Profile_.Email = "";
    this.Profile_.Phone_Number = "";
    this.Profile_.Alternative_Phone_Number = "";
    this.Profile_.Alternative_Email = "";
    this.Profile_.Whatsapp = "";
    this.Profile_.Refund_Amount = "";
    this.Profile_.Refund_Description = "";
    this.Student_.Facebook = "";
    this.Student_.Passport_Copy = "";
    this.Student_.Passport_Photo = "";
    this.Student_.Tenth_Certificate = "";
    this.Profile_.Enquiry_No = "";
    this.Student_.IELTS = "";
    this.Student_.Work_Experience = "";
    this.Profile_.Lead_Id = "";
    this.Student_.Resume = "";
    this.View_History_ = true;
    this.Profile_.Reference = "";
    // this.Profile_.Dob = "";
    this.Is_TD_Date = false;
    this.Is_HD_Date = false;

    this.FollowUp_.Is_TD_Date = false;
    this.FollowUp_.TD_Date = null;

    this.FollowUp_.Is_HD_Date = false;
    this.Model_ = null;
    this.Brand_ = null;
    this.DSE_Data_ = null;
    this.Model_Data_Check = [];
    this.Brand_Data_Check = [];
    this.DSE_Data_Check = [];
    this.FollowUp_.HD_Date = null;
    this.Profile_.Date_of_Marriage = "";
    this.Profile_.Previous_Visa_Rejection = "";
    this.Profile_.Dropbox_Link = "";
    this.Profile_.Spouse_Name = "";
    this.Profile_.Spouse_Occupation = "";
    this.Profile_.Spouse_Qualification = "";
    this.Profile_.No_of_Kids_and_Age = "";
    this.Profile_.Guardian_telephone = "";
    this.Profile_.Counsilor_Note = "";
    this.Profile_.BPH_Note = "";
    this.Profile_.Pre_Visa_Note = "";
    this.RoundRobin = false;
    // this.Student_.Dob="";
    this.Student_.Country = undefined;
    this.Profile_.Country_Name = "";
    this.Student_.Promotional_Code = "";
    this.Profile_.Student_Status_Id = undefined;
    this.Profile_.Enquiry_Source_Id = undefined;
    this.Fees_Receipt_.Amount = null;
    this.Fees_Receipt_.Description = "";
    this.Fees_Receipt_.Entry_date = new Date();
    this.Fees_Receipt_.Entry_date = this.New_Date(
      this.Fees_Receipt_.Entry_date
    );

    this.Commission_Receipt_.Entry_date = new Date();
    this.Commission_Receipt_.Entry_date = this.New_Date(
      this.Commission_Receipt_.Entry_date
    );
    this.Fees_Data_ = null;
    this.Transfer_Status_ = null;
    this.Fees_.Fees_Id = undefined;

    this.Profile_.Phone_Change = 1;
    this.Profile_.Email_Change = 1;
    this.Profile_.Alternative_Phone_Number_Change = 1;
    this.Profile_.Alternative_Email_Change = 1;

    this.Profile_.Passport_fromdate = "";
    this.Profile_.Passport_Todate = "";

    this.Student_.Password = "";
    //this.Student_.Dob = "";
    this.Student_.Created_On = new Date();
    this.Student_.Created_On = this.New_Date(this.Student_.Created_On);
    // this.Student_.Dob=this.New_Date(this.Student_.Dob);
    this.Search_FromDate = new Date();
    this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate = new Date();
    this.Search_ToDate = this.New_Date(this.Search_ToDate);

    this.Profile_.Entry_date = new Date();
    this.Profile_.Entry_date = this.New_Date(this.Profile_.Entry_date);

    //this.Profile_.Transfer_date = new Date();
    //this.Profile_.Transfer_date = this.New_Date(this.Profile_.Transfer_date);

    this.Document_Array = [];
    this.Document_File_Array = [];
    this.Tenth_Certificate = null;
    this.Display_Tenth_ = "";
    this.Passport_Copy = null;
    this.Display_passport_ = "";
    this.Passport_Photo = null;
    this.Display_Photo_ = "";
    this.Resume = null;
    this.Display_Resume_ = "";

    this.IELTS = null;
    this.Display_Ielts_ = "";
    this.Work_Experience = null;
    this.Display_Experience_ = "";
    this.Remarks_ = null;
    this.FollowUp_Sub_Status_Transfer_ = null;
    this.Transfer_Status_ = null;
    this.Save_button_view = true;
    // this.Search_Intake_.value=null;

    // this.Resume_.Resume_Name="";
    // this.Passport_.Passport_Name="";
    // this.LOR_1_.LOR_1_Name="";
    // this.LOR_2_.LOR_2_Name="";
    // this.MOI_.MOI_Name="";
    // this.SOP_.SOP_Name="";
    // this.Ielts_.Ielts_Name="";

    // this.Student_.Visa_Submission_Date=this.New_Date(this.Student_.Visa_Submission_Date);
    this.Student_.Visa_Submission_Date = "";
    this.Student_.Course_Link = "";
    this.Student_.Year = "";
    this.Student_.Intake = "";
    this.Student_.Intake_Year = "";
    this.Student_.Reference = "";
    this.Student_.Activity = "";
    this.Student_.College_University = "";
    this.Student_.Programme_Course = "";
    this.Student_.Agent = "";
    this.Student_.Status_Details = "";
    this.Student_.Student_Remark = "";

    this.Profile_.Transfer_Remark = "";

    // this.Student_.sslc_year = "";
    // this.Student_.sslc_institution = "";
    // this.Student_.sslc_markoverall = "";
    // this.Student_.sslc_englishmark = "";
    // this.Student_.plustwo_year = "";
    // this.Student_.plustwo_institution = "";
    // this.Student_.plustwo_markoverall = "";
    // this.Student_.plustwo_englishmark = "";
    // this.Student_.graduation_year = "";
    // this.Student_.graduation_institution = "";
    // this.Student_.graduation_markoverall = "";
    // this.Student_.graduation_englishmark = "";
    // this.Student_.postgraduation_year = "";
    // this.Student_.postgraduation_institution = "";
    // this.Student_.postgraduation_markoverall = "";
    // this.Student_.postgraduation_englishmark = "";
    // this.Student_.other_year = "";
    // this.Student_.other_instituation = "";
    // this.Student_.other_markoverall = "";
    // this.Student_.other_englishmark = "";

    // this.Student_.exp_institution_1 = "";
    // this.Student_.exp_institution_2 = "";
    // this.Student_.exp_institution_3 = "";
    // this.Student_.exp_institution_4 = "";
    // this.Student_.exp_designation_1 = "";
    // this.Student_.exp_designation_2 = "";
    // this.Student_.exp_designation_3 = "";
    // this.Student_.exp_designation_4 = "";

    this.Student_.exp_tenure_from_1 = new Date();
    this.Student_.exp_tenure_from_1 = this.New_Date(
      this.Student_.exp_tenure_from_1
    );
    this.Student_.exp_tenure_from_2 = new Date();
    this.Student_.exp_tenure_from_2 = this.New_Date(
      this.Student_.exp_tenure_from_2
    );
    this.Student_.exp_tenure_from_3 = new Date();
    this.Student_.exp_tenure_from_3 = this.New_Date(
      this.Student_.exp_tenure_from_3
    );
    this.Student_.exp_tenure_from_4 = new Date();
    this.Student_.exp_tenure_from_4 = this.New_Date(
      this.Student_.exp_tenure_from_4
    );
    this.Student_.exp_tenure_to_1 = new Date();
    this.Student_.exp_tenure_to_1 = this.New_Date(
      this.Student_.exp_tenure_to_1
    );
    this.Student_.exp_tenure_to_2 = new Date();
    this.Student_.exp_tenure_to_2 = this.New_Date(
      this.Student_.exp_tenure_to_2
    );
    this.Student_.exp_tenure_to_3 = new Date();
    this.Student_.exp_tenure_to_3 = this.New_Date(
      this.Student_.exp_tenure_to_3
    );
    this.Student_.exp_tenure_to_4 = new Date();
    this.Student_.exp_tenure_to_4 = this.New_Date(
      this.Student_.exp_tenure_to_4
    );
    this.Student_.Passport_fromdate = new Date();
    this.Student_.Passport_fromdate = this.New_Date(
      this.Student_.Passport_fromdate
    );

    this.Student_.Passport_Todate = new Date();
    this.Student_.Passport_Todate = this.New_Date(
      this.Student_.Passport_Todate
    );

    this.Student_.Date_of_Marriage = new Date();
    this.Student_.Date_of_Marriage = this.New_Date(
      this.Student_.Date_of_Marriage
    );

    // this.Profile_.Passport_fromdate = new Date();
    // this.Profile_.Passport_fromdate = this.New_Date(
    // this.Profile_.Passport_fromdate
    // );

    // this.Profile_.Passport_Todate = new Date();
    // this.Profile_.Passport_Todate= this.New_Date(
    // this.Profile_.Passport_Todate
    // );

    this.Student_.IELTS_Overall = "";
    this.Student_.IELTS_Listening = "";
    this.Student_.IELTS_Reading = "";
    this.Student_.IELTS_Writting = "";
    this.Student_.IELTS_Speaking = "";
    this.Student_.Marital_Status_Name = "";

    this.Profile_.Passport_No = "";
    this.Student_.LOR_1_Id = undefined;
    this.Student_.LOR_2_Id = undefined;
    this.Student_.MOI_Id = undefined;
    this.Student_.SOP_Id = undefined;
    this.Student_.Passport_Id = undefined;
    this.Student_.Resume_Id = undefined;

    this.Profile_Country_ = null;
    this.Profile_University_ = null;
    this.Program_Course_ = null;
    // this.Program_Course_.Course_Id=0;

    //
    //this.Search_Intake_=;

    this.Remove_Registration_Visibility = false;
    this.Registration_Visiblility = false;

    // this.Remove_Activte_Visiblility=false;
    // this.Activte_Visiblility=false;

    this.Document_Description = "";
    this.Display_File_Name_ = "";
    this.ImageFile = null;

    if (this.Gender_Data != null && this.Gender_Data != undefined)
      this.Gender_ = this.Gender_Data[0];

    if (
      this.Student_Status_Data != null &&
      this.Student_Status_Data != undefined
    )
      this.Student_Status_ = this.Student_Status_Data[0];

    if (
      this.Student_Status_Search_Data != null &&
      this.Student_Status_Search_Data != undefined
    )
      this.Student_Status_Search_ = this.Student_Status_Search_Data[0];

    if (
      this.Enquiry_Source_Data != null &&
      this.Enquiry_Source_Data != undefined
    )
      this.Enquiry_Source_ = this.Enquiry_Source_Data[0];

    if (this.Shore_Data != null && this.Shore_Data != undefined)
      this.Shore_ = this.Shore_Data[0];

    if (this.Enquiry_For_Data != null && this.Enquiry_For_Data != undefined)
      this.Enquiry_For_ = this.Enquiry_For_Data[0];

    if (this.enquiry_mode_Data != null && this.enquiry_mode_Data != undefined)
      this.enquiry_mode_ = this.enquiry_mode_Data[0];

    if (this.class_Data != null && this.class_Data != undefined)
      this.class_ = this.class_Data[0];

    if (
      this.Enquiry_Source_Search_Data != null &&
      this.Enquiry_Source_Search_Data != undefined
    )
      this.Enquiry_Source_Search_ = this.Enquiry_Source_Search_Data[0];

    if (
      this.Marital_Status_Data != null &&
      this.Marital_Status_Data != undefined
    )
      this.Marital_Status_ = this.Marital_Status_Data[0];

    if (
      this.Profile_Intake_Mode_Data != null &&
      this.Profile_Intake_Mode_Data != undefined
    )
      this.Profile_Intake_Mode_ = this.Profile_Intake_Mode_Data[0];

    // if(this.Fees_Array!=null && this.Fees_Array != undefined)
    // this.Fees_Data_=this.Fees_Data_[0];
    // if (this.To_Account_Data != null && this.To_Account_Data != undefined)
    // 	this.To_Account_ = this.To_Account_Data[0];

    if (this.Resume_Mode_Data != null && this.Resume_Mode_Data != undefined)
      this.Resume_Mode_ = this.Resume_Mode_Data[0];

    if (this.Passport_Mode_Data != null && this.Passport_Mode_Data != undefined)
      this.Passport_Mode_ = this.Passport_Mode_Data[0];

    if (this.Spouse_Visa_Data != null && this.Spouse_Visa_Data != undefined)
      this.Spouse_Visa_ = this.Spouse_Visa_Data[0];

    if (this.LOR_1_Mode_Data != null && this.LOR_1_Mode_Data != undefined)
      this.LOR_1_Mode_ = this.LOR_1_Mode_Data[0];

    if (this.LOR_2_Mode_Data != null && this.LOR_2_Mode_Data != undefined)
      this.LOR_2_Mode_ = this.LOR_2_Mode_Data[0];

    if (this.MOI_Mode_Data != null && this.MOI_Mode_Data != undefined)
      this.MOI_Mode_ = this.MOI_Mode_Data[0];

    if (this.SOP_Mode_Data != null && this.SOP_Mode_Data != undefined)
      this.SOP_Mode_ = this.SOP_Mode_Data[0];

    if (this.Ielts_Mode_Data != null && this.Ielts_Mode_Data != undefined)
      this.Ielts_Mode_ = this.Ielts_Mode_Data[0];

    this.Save_Agent_.Client_Accounts_Name = "";
    this.Save_Agent_.Client_Accounts_Id = undefined;
    this.Save_Agent_ = new Client_Accounts();

    // this.Flag_Followup=1;
    // this.Flag_Student=1;
    // this.View_Follow_=true;
    // this.Show_FollowUp=false;
  }

  Phone_Change() {
    // this.Profile_.Phone_Change=1;
    this.Profile_.Whatsapp = "";
    if (
      this.Profile_.Phone_Number == undefined ||
      this.Profile_.Phone_Number == null ||
      this.Profile_.Phone_Number == ""
    )
      this.Profile_.Whatsapp = "";
    else this.Profile_.Whatsapp = this.Profile_.Phone_Number;
  }
  Email_Change() {
    this.Profile_.Email_Change = 1;
  }
  Alternative_Phone_Number_Change() {
    this.Profile_.Alternative_Phone_Number_Change = 1;
  }
  Alternative_Email_Change() {
    this.Profile_.Alternative_Email_Change = 1;
  }

  Search_Student_Message() {
    this.issLoading = true;
    this.Student_Message_Service.Search_Student_Message(
      this.Student_Id_Edit
    ).subscribe(
      (Rows) => {
        this.Student_Message_Data = Rows[0];
        this.Total_Entries = this.Student_Message_Data.length;
        if (this.Student_Message_Data.length == 0) {
          this.issLoading = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: "3" },
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
  Save_Student_Message() {
    this.Student_Message_.Student_Id = this.Student_Id_Edit;
    this.Student_Message_Service.Save_Student_Message(
      this.Student_Message_
    ).subscribe(
      (Save_status) => {
        Save_status = Save_status[0];
        if (Number(Save_status[0].Student_Message_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Get_Message_Details(this.Student_Id_Edit);
          this.clr_Message();
        }
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }
  Delete_Application_Details(Application_details_Id, index) {
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
        this.Student_Service_.Delete_Application_Details(
          Application_details_Id
        ).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_;
            if (Delete_status == 1) {
              this.ApplicationDetails_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: false },
              });
              this.Clr_ApplicationDetails();
              this.Get_ApplicationDetails();
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

  CourseLInk() {
    var Course_link_ = this.ApplicationDetails_.Course_Link;
    var temp = Course_link_;
    window.open(temp);
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
    this.ApplicationDetails_.University_Name = "";
    this.ApplicationDetails_.Course_Name = "";
    this.Save_Student_Approved_Status = 0;
    this.Bph_Approved_Status = 1;
    this.ApplicationDetails_.Application_Fees = "";

    this.ApplicationDetails_.Feespaymentcheck = false;
    this.ApplicationDetails_.Offer_Received = false;
    this.ApplicationDetails_.Portal_User_Name = "";
    this.ApplicationDetails_.Password = "";
    this.Duration_Id = 0;

    this.ApplicationDetails_.Offer_Student_Id = "";

    this.ApplicationDetails_.Application_No = "";
    this.ApplicationDetails_.Student_Reference_Id = "";
    this.ApplicationDocument_Array = [];
    this.ImageFile_Application = [];
    this.ApplicationDocument_File_Array = [];
    this.Application_Country_ = null;
    this.University_1 = null;
    this.Course_ = null;

    if (this.Intake_Mode_Data != null && this.Intake_Mode_Data != undefined)
      this.Intake_Mode_ = this.Intake_Mode_Data[0];
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
    this.ApplicationDocument_Description = "";
    this.Display_ApplicationFile_ = "";
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

    if (this.ApplicationDetails_.To_User_Id != this.Login_User_Id) {
      this.Edit_save_button_view = false;
    }

    this.ApplicationDetails_ = Object.assign({}, Applicationdetails_e);
    this.Save_Student_Approved_Status =
      Applicationdetails_e.Student_Approved_Status;
    this.Bph_Approved_Status = Applicationdetails_e.Bph_Approved_Status;
    this.Old_Application_Status_Id =
      this.ApplicationDetails_.Application_status_Id;

    if (
      this.ApplicationDetails_.Duration_Id == 0 ||
      this.ApplicationDetails_.Duration_Id == null
    ) {
      this.Duration_Id = 0;
    } else this.Duration_Id = this.ApplicationDetails_.Duration_Id;

    if (
      this.ApplicationDetails_.Course_Link != "" &&
      this.ApplicationDetails_.Course_Link != null &&
      this.ApplicationDetails_.Course_Link != undefined
    ) {
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
    for (var i = 0; i < this.Intake_Year_Mode_Data.length; i++) {
      if (
        this.ApplicationDetails_.Intake_Year_Id ==
        this.Intake_Year_Mode_Data[i].Intake_Year_Id
      )
        this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[i];
    }

    this.Country_Temp.Country_Id = this.ApplicationDetails_.Country_Id;
    this.Country_Temp.Country_Name = this.ApplicationDetails_.Country_Name;
    this.Application_Country_ = Object.assign({}, this.Country_Temp);

    // this.University_Temp.University_Id = this.ApplicationDetails_.University_Id;
    // this.University_Temp.University_Name =
    //   this.ApplicationDetails_.University_Name;
    // this.University_1 = Object.assign({}, this.University_Temp);

    // this.Course_Temp.Course_Id = this.ApplicationDetails_.Course_Id;
    // this.Course_Temp.Course_Name = this.ApplicationDetails_.Course_Name;
    // this.Course_ = Object.assign({}, this.Course_Temp);

    //
    // this.Document_Array= Rows[1];
    // this.Document_File_Array=[];
    // for(var i=0;i<this.Document_Array.length;i++)
    // this.Document_File_Array.push('')

    this.Get_Application_DocumentList(
      this.ApplicationDetails_.Application_details_Id
    );

    this.Activte_Visiblility = false;
    this.Remove_Activte_Visiblility = false;

    if (this.ApplicationDetails_.Activation_Status == true) {
      if (
        this.Remove_Activity_Permissions != undefined &&
        this.Remove_Activity_Permissions != null
      )
        if (this.Remove_Activity_Permissions.View == true)
          this.Remove_Activte_Visiblility = true;
    } else {
      if (
        this.Activity_Permissions != undefined &&
        this.Activity_Permissions != null
      )
        if (this.Activity_Permissions.View == true)
          this.Activte_Visiblility = true;
    }

    // this.issLoading = false;
    // } ,
    // Rows => {
    // this.issLoading = false;
    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    // });
    //  this.Get_ApplicationDetails();

    // this.Get_ApplicationDetailswise_History(this.ApplicationDetails_.Application_details_Id);
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

  Get_QualificationDetails(Student_id_) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_QualificationDetails(Student_id_).subscribe(
      (Rows) => {
        this.Qualification_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Previsa_Details(Student_id_) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_Previsa_Details(Student_id_).subscribe(
      (Rows) => {
        this.Previsa_Data = Rows[0];

        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Preadmission_Details(Student_id_) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_Preadmission_Details(Student_id_).subscribe(
      (Rows) => {
        this.Preadmission_Data = Rows[0];

        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Previsa_Details_Edit(Student_Checklist_Master_Id_) {
    this.issLoading = true;

    this.Student_Service_.Get_Previsa_Details_Edit(
      Student_Checklist_Master_Id_
    ).subscribe(
      (Rows) => {
        this.Student_Checklist_Data = Rows[0];
        //   this.Previsa_=Object.assign({},Rows[0][0]);
        for (var i = 0; i < this.Student_Checklist_Data.length; i++) {
          if (this.Student_Checklist_Data[i].Check_Box.toString() == "1") {
            this.Student_Checklist_Data[i].Check_Box = true;
          } else {
            this.Student_Checklist_Data[i].Check_Box = false;
          }
        }
        if (this.Student_Checklist_Data.length == 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: false },
          });
          this.issLoading = false;
        }
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
    this.issLoading = false;
  }

  Get_Preadmission_Details_Edit(Student_Preadmission_Checklist_Master_Id_) {
    this.issLoading = true;

    this.Student_Service_.Get_Preadmission_Details_Edit(
      Student_Preadmission_Checklist_Master_Id_
    ).subscribe(
      (Rows) => {
        this.Student_Checklist_Preadmission_Data = Rows[0];
        //   this.Previsa_=Object.assign({},Rows[0][0]);
        for (
          var i = 0;
          i < this.Student_Checklist_Preadmission_Data.length;
          i++
        ) {
          if (
            this.Student_Checklist_Preadmission_Data[i].Check_Box.toString() ==
            "1"
          ) {
            this.Student_Checklist_Preadmission_Data[i].Check_Box = true;
          } else {
            this.Student_Checklist_Preadmission_Data[i].Check_Box = false;
          }
        }
        if (this.Student_Checklist_Preadmission_Data.length == 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: false },
          });
          this.issLoading = false;
        }
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
    this.issLoading = false;
  }

  Get_ReviewDetails(Student_id_) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_ReviewDetails(this.Student_Id_Edit).subscribe(
      (Rows) => {
        this.Review_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  Get_WorkexperienceDetails(Student_Id_) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_WorkexperienceDetails(Student_Id_).subscribe(
      (Rows) => {
        this.Work_experience_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Visa_Task(Task_Group_Id) {
    this.issLoading = true;

    this.Student_Service_.Get_Visa_Task(
      this.Profile_.Student_Id,
      Task_Group_Id
    ).subscribe(
      (Rows) => {
        this.Task_Student_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Previsa_Task(Task_Group_Id) {
    this.issLoading = true;

    this.Student_Service_.Get_Previsa_Task(
      this.Profile_.Student_Id,
      Task_Group_Id
    ).subscribe(
      (Rows) => {
        this.Task_Student_Previsa_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  Get_Tasknew_Task(Task_Group_Id) {
    this.issLoading = true;
    this.Count_Task_ = 0;
    this.Student_Service_.Get_Tasknew_Task(
      this.Profile_.Student_Id,
      Task_Group_Id,
      Number(this.Login_User)
    ).subscribe(
      (Rows) => {
        this.Task_Student_Tasknew_Data = Rows[0];
        this.Count_Task_ = Rows[1][0].Student_Task_Count;
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  Get_Preadmission_Task(Task_Group_Id) {
    this.issLoading = true;

    this.Student_Service_.Get_Preadmission_Task(
      this.Profile_.Student_Id,
      Task_Group_Id
    ).subscribe(
      (Rows) => {
        this.Task_Student_Preadmission_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Proceeding_Details() {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_Proceeding_Details(
      this.Student_Id_Edit
    ).subscribe(
      (Rows) => {
        //this.Work_experience_Data = Rows[0];
        this.Proceeding_ = Object.assign({}, Rows[0][0]);

        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Ielts_Details(Student_Id_) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_Ielts_Details(this.Student_Id_Edit).subscribe(
      (Rows) => {
        this.Ielts_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Refundrequestdetails(Student_Id_, Fees_Receipt_Id_temp) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_Refundrequestdetails(
      Student_Id_,
      Fees_Receipt_Id_temp
    ).subscribe(
      (Rows) => {
        this.Refund_Request_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Feesrecepitdetails() {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;
    this.Student_Service_.Get_Feesrecepitdetails(
      this.Student_.Student_Id
    ).subscribe(
      (Rows) => {
        this.FeesrecepitDetails_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Receipt_Sum() {
    this.issLoading = true;
    this.Student_Service_.Get_Receipt_Sum(this.Profile_.Student_Id).subscribe(
      (Rows) => {
        //this.Visa_Data=Rows[0];
        this.paidfees = Rows[0][0].paid_fees;
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Application_DocumentList(application_details_id) {
    //    this.Clr_ApplicationDetails();
    this.issLoading = true;
    this.Student_Service_.Get_Application_DocumentList(
      application_details_id
    ).subscribe(
      (Rows) => {
        this.ApplicationDocument_Array = Rows[0];
        this.ApplicationDocument_File_Array = [];
        for (var i = 0; i < this.ApplicationDocument_Array.length; i++)
          this.ApplicationDocument_File_Array.push("");
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Get_Feesrecepit_DocumentList(feesrecepit_id) {
    //    this.Clr_ApplicationDetails();
    this.issLoading = true;
    this.Student_Service_.Get_Feesrecepit_DocumentList(
      feesrecepit_id
    ).subscribe(
      (Rows) => {
        this.FeesreceiptDocument_Array = Rows[0];
        this.FeesreceiptDocument_File_Array = [];
        for (var i = 0; i < this.FeesreceiptDocument_Array.length; i++)
          this.FeesreceiptDocument_File_Array.push("");
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Search_ApplicationDetails() {
    this.issLoading = true;

    this.Student_Service_.Search_ApplicationDetails(
      this.Application_details_Id_History
    ).subscribe(
      (Rows) => {
        this.ApplicationdetailsHistory_Data = Rows[0];

        if (this.ApplicationdetailsHistory_Data.length == 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: "3" },
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
  Get_Checklist() {
    this.History_View = false;
    //   this.Historydata_View=true;

    //   this.Clr_ApplicationDetails();
    this.issLoading = true;
    this.Student_Service_.Get_Checklist().subscribe(
      (Rows) => {
        this.StudentChecklist_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }


  Get_ApplicationDetails_History() {
    this.History_View = true;
    //   this.Historydata_View=true;

    this.Clr_ApplicationDetails();
    this.issLoading = true;
    this.Student_Service_.Get_ApplicationDetails_History(
      this.Student_.Student_Id
    ).subscribe(
      (Rows) => {
        this.ApplicationdetailsHistory_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  //   openDialog(): void {
  //     const dialogRef = this.dialogBox.open(StudentComponent, {
  //       width: '6000px',

  //     });
  //     var application_details_id_
  // this. Get_ApplicationDetailswise_History(application_details_id_)
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');

  //     });
  //   }

  // Get_ApplicationDetailswise_History(application_details_id_) {
  //
  // 	this.History_View = true;
  // 	this.application_details_View = false;
  // 	this.Qualification_details_View=false;
  // 	this.language_details_View=false;

  // 	this.Clr_ApplicationDetails();
  // 	this.issLoading = true;
  // 	this.Student_Service_.Get_ApplicationDetailswise_History(
  // 		application_details_id_
  // 	).subscribe(
  // 		(Rows) => {
  //
  // 			// const dialogRef = this.dialogBox.open( StudentComponent);

  // 			this.ApplicationdetailsHistory_Data = Rows[0];

  // 			this.issLoading = false;
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }

  Get_ApplicationDetailswise_History(application_details_id_, feesdetails_id_) {
    this.History_View = true;
    this.application_details_View = false;
    this.Qualification_details_View = false;
    this.language_details_View = false;
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

  Save_ApplicationDetails() {
    this.History_View = false;
    // this.Historydata_View=false;

    this.ApplicationDetails_.Country_Id = this.Application_Country_.Country_Id;
    this.ApplicationDetails_.Country_Name =
      this.Application_Country_.Country_Name;
    this.ApplicationDetails_.Date_Of_Applying = this.New_Date(
      new Date(
        moment(this.ApplicationDetails_.Date_Of_Applying).format("YYYY-MM-DD")
      )
    );
    this.ApplicationDetails_.Intake_Year_Id =
      this.Intake_Year_Mode_.Intake_Year_Id;
    this.ApplicationDetails_.Intake_Year_Name =
      this.Intake_Year_Mode_.Intake_Year_Name;
    this.ApplicationDetails_.intake_Name = this.Intake_Mode_.Intake_Name;
    this.ApplicationDetails_.intake_Id = this.Intake_Mode_.Intake_Id;
    this.ApplicationDetails_.University_Name =
      this.University_1.University_Name;
    this.ApplicationDetails_.University_Id = this.University_1.University_Id;
    this.ApplicationDetails_.Course_Name = this.Course_.Course_Name;
    this.ApplicationDetails_.Course_Id = this.Course_.Course_Id;
    this.ApplicationDetails_.Agent_Id = this.Agent_Mode_.Agent_Id;
    this.ApplicationDetails_.Agent_Name = this.Agent_Mode_.Agent_Name;
    this.ApplicationDetails_.Application_Status_Name =
      this.Application_Status_Mode_.Application_Status_Name;
    this.ApplicationDetails_.Application_status_Id =
      this.Application_Status_Mode_.Application_status_Id;
    this.ApplicationDetails_.Student_Id = this.Profile_.Student_Id;

    // if (this.Fees_Data_== undefined || this.Fees_Data_ == null || this.Fees_Data_.Fees_Id == undefined || this.Fees_Data_.Fees_Id==0) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Fees', Type: "3" } });
    //     return;
    // }
    //     if(this.Fees_Receipt_.Amount==null || this.Fees_Receipt_.Amount==undefined){
    //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data: { Message: 'Select Amount', Type: "3" }});
    //     return;
    // }
    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;

    this.Student_Service_.Save_ApplicationDetails(
      this.ApplicationDetails_
    ).subscribe(
      (Save_status) => {
        Save_status = Save_status[0];
        this.Application_Id_Log1 = Save_status[0].Application_details_Id_;
        if (Number(Save_status[0].Application_details_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Save_Call_Status = false;
          this.Clr_ApplicationDetails();
          this.Get_ApplicationDetails();
        }
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
    this.Save_Call_Status = false;
  }

  Save_Receipt() {
    this.Fees_Receipt_.User_Id = Number(this.Login_User);
    this.Fees_Receipt_.Fees_Id = this.Fees_Data_.Fees_Id;
    this.Fees_Receipt_.Entry_date = this.New_Date(
      new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
    );
    this.Fees_Receipt_.Student_Id = this.Student_Id;

    if (
      this.Fees_Data_ == undefined ||
      this.Fees_Data_ == null ||
      this.Fees_Data_.Fees_Id == undefined ||
      this.Fees_Data_.Fees_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Fees", Type: "3" },
      });
      return;
    }

    if (
      this.Fees_Receipt_.Amount == null ||
      this.Fees_Receipt_.Amount == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Amount", Type: "3" },
      });
      return;
    }
    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;
    this.Student_Service_.Save_Receipt(this.Fees_Receipt_).subscribe(
      (Save_status) => {
        Save_status = Save_status[0];
        if (Number(Save_status[0].Fees_Receipt_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Save_Call_Status = false;
          this.clr_receipt();
          this.Search_Receipt();
          // this.clr_receipt();
        }
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
    this.Save_Call_Status = false;
  }
  clr_receipt() {
    this.FeesreceiptDocument_Array = [];
    this.ImageFile_Feesreceipt = [];
    this.FeesreceiptDocument_File_Array = [];
    this.Fees_Receipt_.Fees_Receipt_Id = 0;
    this.Fees_Receipt_.To_Account_Id = null;
    this.Fees_Receipt_.Amount = null;
    this.Fees_Receipt_.Description = "";
    this.FeesreceiptDocument_Description = "";
    this.Fees_Receipt_.Currency = "";
    this.Fees_Receipt_.Fees_Id = null;
    this.FeesreceiptDocument_Array = [];
    this.FeesreceiptDocument_File_Array = [];
    this.Fees_Receipt_.Entry_date = new Date();
    this.Fees_Receipt_.Entry_date = this.New_Date(
      this.Fees_Receipt_.Entry_date
    );
    this.Display_FeesrecepitFile_ = "";

    this.Commission_Receipt_.Fees_Receipt_Id = 0;
    this.Commission_Receipt_.To_Account_Id = null;
    this.Commission_Receipt_.Amount = null;
    this.Commission_Receipt_.Description = "";

    this.Commission_Receipt_.Currency = "";
    this.Commission_Receipt_.Fees_Id = null;

    this.Commission_Receipt_.Entry_date = new Date();
    this.Commission_Receipt_.Entry_date = this.New_Date(
      this.Commission_Receipt_.Entry_date
    );

    if (this.To_Account_Data != null && this.To_Account_Data != undefined)
      this.To_Account_ = this.To_Account_Data[0];

    if (this.Fees_Array != null && this.Fees_Array != undefined)
      this.Fees_Data_ = this.Fees_Array[0];

    if (this.Commission_Array != null && this.Commission_Array != undefined)
      this.Commission_Data_ = this.Commission_Array[0];

    if (this.Currency_Data != null && this.Currency_Data != undefined)
      this.Currency_ = this.Currency_Data[0];
    this.Commission_Receipt_;
    // if(this.Fees_Data_!=null && this.Fees_Data_ != undefined)
    // this.To_Account_=this.Fees_Data_[0];
    // if(this.Fees_Array!=null && this.Fees_Array!= undefined)
    //    this.Fees_Data_=this.Fees_Array[0];
    // this.File='';
    this.Course_Fees_Data_Filter = [];
    this.Fees_Course_ = null;
  }
  Search_Receipt() {
    this.issLoading = true;
    // this.Fees_Receipt_.Entry_Date=this.New_Date(new Date(moment(this.Fees_Receipt_.Entry_Date).format('YYYY-MM-DD')));

    this.Student_Service_.Search_Receipt(this.Student_Id_Edit).subscribe(
      (Rows) => {
        this.Receipt_data = Rows[0];

        this.Fees_Array = Rows[1];
        this.Fees_Temp.Fees_Id = 0;
        this.Fees_Temp.Fees_Name = "Select";
        this.Fees_Array.unshift(this.Fees_Temp);
        this.Fees_Data_ = this.Fees_Array[0];

        // this.Total_Receipt=this.Receipt_data_.length
        // if(this.Student_Message_Data.length==0)
        // {
        // this.issLoading=false;
        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
        // }
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

  Search_Commission() {
    this.issLoading = true;
    // this.Fees_Receipt_.Entry_Date=this.New_Date(new Date(moment(this.Fees_Receipt_.Entry_Date).format('YYYY-MM-DD')));
    // debugger;
    this.Student_Service_.Search_Commission(this.Student_Id_Edit).subscribe(
      (Rows) => {
        // debugger;
        this.Commission_data = Rows[0];

        this.Fees_Array = Rows[1];
        this.Fees_Temp.Fees_Id = 0;
        this.Fees_Temp.Fees_Name = "Select";
        this.Fees_Array.unshift(this.Fees_Temp);
        this.Fees_Data_ = this.Fees_Array[0];

        // this.Total_Receipt=this.Receipt_data_.length
        // if(this.Student_Message_Data.length==0)
        // {
        // this.issLoading=false;
        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
        // }
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

  Tab_Click(Current_tab) {
    this.profile_View = false;
    this.Martialdetails_view = false;
    this.application_details_View = false;
    this.language_details_View = false;
    this.Languagemodal_View = false;
    this.Applicationmodal_View = false;
    this.Qualificationmodal_View = false;
    this.Qualification_details_View = false;
    this.Feesmodal_View = false;
    this.Visamodal_View = false;
    this.Buttonset_view = false;
    this.Change_Status_View = false;
    this.Transfer_Button_view = false;
    this.Invoicemodal_View = false;
    this.Checklist_View = false;
    this.View_document = false;
    this.Course_View = false;
    this.message_View = false;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
    this.Statistics_View = false;
    this.course_history_View = false;
    this.Visa_View = false;
    // this.Pre_Visa_View=false;
    this.Workexperiencenew_View = false;
    this.Qualificationnew_View = false;
    //this.Review=false;
    this.Cas_Followup_View = false;
    this.Cas_FollowupPrevisa_View = false;
    this.Cas_FollowupTasknew_View = false;
    this.Cas_FollowupPreadmission_View = false;
    this.Invoice_View = false;
    this.History_View = false;
    this.New_view = false;
    this.Pre_Visamodal_View = false;
    this.Pre_Visa_View = false;
    this.Tasknew_View = false;
    this.Tasknewmodal_View = false;

    this.Reviewdetails_View = false;
    this.Reviewmodal_View = false;
    this.Show_Followup_History = true;
    this.Workexperiencenew_View = false;
    this.Qualificationnew_View = false;
    this.Pre_AdmissionModal_View = false;
    this.Pre_Admission_View = false;
    this.Pre_Visa_Checklist_View = false;
    this.Pre_Visachecklistmodal_View = false;
    this.Documents_View = false;
    this.Followup_View = false;
    this.Comments_View = false;
    this.Send_Mail_View = false;
    this.Show_Send_Mail = false;

    if (Current_tab == 1) {
      this.profile_View = true;
      // this.Martialdetails_view=true;
      this.Buttonset_view = true;
      this.New_view = true;
    } else if (Current_tab == 2) {
      this.course_history_View = true;

      if (this.Course_History_Click_Status == false) {
        this.Course_History_Click_Status = true;
        this.Get_Student_Course_Apply(this.Student_Id_Edit);
      }
      this.Get_Student_Course_Apply(this.Student_Id_Edit);
    } else if (Current_tab == 3) {
      this.View_document = true;

      if (this.Document_Click_Status == false) {
        this.Document_Click_Status = true;
        this.Get_Student_Document(this.Student_Id_Edit);
      }
    } else if (Current_tab == 4) {
      this.message_View = true;

      if (this.Message_Click_Status == false) {
        this.Message_Click_Status = true;
        this.Get_Message_Details(this.Student_Id_Edit);
      }
    } else if (Current_tab == 5) {
      this.Course_View = true;

      if (this.Course_Click_Status == false) {
        this.Course_Click_Status = true;
        this.Get_site_Pageload();
      }
    } else if (Current_tab == 6) {
      this.Fee_Collection_View = true;
      this.Feesmodal_View = false;

      // this.Fees_Receipt_Save =true;
      this.Show_FollowUp = true;
      if (this.Fee_Collection_Click_Status == false) {
        this.Fee_Collection_Click_Status = true;
        this.Load_fees_tab();
        this.Search_Receipt();
        this.clr_receipt();
        this.Load_Application_Fees_Dropdown();
      }
    } else if (Current_tab == 66) {
      this.Commission_Collection_View = true;
      this.Commissionmodal_View = false;

      this.Show_FollowUp = true;
      if (this.Commission_Collection_Click_Status == false) {
        this.Commission_Collection_Click_Status = true;
        this.Load_fees_tab();
        this.Search_Commission();
        this.clr_receipt();
        this.Load_Application_Fees_Dropdown();
      }
    } else if (Current_tab == 7) {
      this.Statistics_View = true;

      if (this.Statistics_Click_Status == false) {
        this.Statistics_Click_Status = true;
        this.Load_Statistics();
      }
    } else if (Current_tab == 8) {
      this.application_details_View = true;

      // this.History_View=false;
      // this.Applicationmodal_View=false;
      // this.Clr_ApplicationDetails()
      //this.Show_FollowUp = false;
      this.Show_FollowUp = true;
      this.Applicationmodal_View = false;
      if (this.Application_Details_Click_Status == false) {
        this.Application_Details_Click_Status = true;
        //	this.Get_ApplicationDetails();
      }
      this.Get_ApplicationDetails();
      // this.Load_SendMail_User_Dropdown();
      this.Get_Proceeding_Details();
    } else if (Current_tab == 12) {
      this.Qualification_details_View = true;

      // this.History_View=false;
      // this.Applicationmodal_View=false;
      // this.Clr_ApplicationDetails()
      this.Show_FollowUp = true;
      this.Qualificationmodal_View = true;
      if (this.Qualification_Details_Click_Status == false) {
        this.Qualification_Details_Click_Status = true;
        //this.Get_QualificationDetails(this.Student_Id);
      }
      this.Clr_Qualification();
      this.Clr_work_experience();
      this.Get_QualificationDetails(this.Profile_.Student_Id);
      this.Get_WorkexperienceDetails(this.Profile_.Student_Id);
    } else if (Current_tab == 13) {
      this.language_details_View = true;

      // this.History_View=false;
      // this.Applicationmodal_View=false;
      // this.Clr_ApplicationDetails()
      this.Languagemodal_View = false;
      this.Get_Ielts_Details(this.Profile_.Student_Id);
      if (this.Language_Details_Click_Status == false) {
        this.Language_Details_Click_Status = true;
        //this.Get_ApplicationDetails();
      }
      //this.Get_ApplicationDetails();
    } else if (Current_tab == 9) {
      this.Checklist_View = true;

      if (this.Checklist_Click_Status == false) {
        this.Checklist_Click_Status = true;
        this.Get_Checklist();
      }
      this.Get_Checklist();
    } else if (Current_tab == 10) {
      this.Visa_View = true;
      this.Show_FollowUp = true;
      this.Task_Group_Id = 1;
      this.Task_Item_Dropdown(this.Task_Group_Id);
      // this.Close_Visa();
      if (this.Visa_Click_Status == false) {
        this.Visa_Click_Status = true;

        this.Get_Visa_Details();
        this.Get_Receipt_Sum();
        this.Get_Visa_Task(this.Task_Group_Id);
      }
      // else
      // {
      //     if(this.Visa_Data.length==1)
      //  {
      //     this.Edit_Visa(this.Visa_Data[0],0);
      //  }
      // }
      // this.Get_Visa_Details();
      this.Get_Receipt_Sum();
    } else if (Current_tab == 11) {
      this.Pre_Visa_View = true;
      this.Pre_Visamodal_View = false;
      this.Task_Group_Id = 2;
      // this.Workexperiencenew_View=false;
      // this.Qualificationnew_View=false;
      this.Get_Previsa_Details(this.Profile_.Student_Id);
      this.Get_Previsa_Task(this.Task_Group_Id);
      this.Task_Item_Dropdown(this.Task_Group_Id);

      if (this.Pre_Visa_View_Click_Status == false) {
        this.Pre_Visa_View_Click_Status = true;
        //this.Get_Invoice_Details();
      }
      //this.Get_Invoice_Details();
    } else if (Current_tab == 20) {
      this.Pre_Admission_View = true;
      this.Pre_AdmissionModal_View = false;
      this.Task_Group_Id = 3;
      // this.Workexperiencenew_View=false;
      // this.Qualificationnew_View=false;
      // this.Get_Previsa_Details(this.Profile_.Student_Id);
      this.Get_Preadmission_Details(this.Profile_.Student_Id);
      this.Get_Preadmission_Task(this.Task_Group_Id);
      this.Task_Item_Dropdown(this.Task_Group_Id);

      // if (this.Pre_Admission_View_Click_Status == false) {
      // 	this.Pre_Admission_View_Click_Status = true;
      // 	//this.Get_Invoice_Details();
      // }
      //this.Get_Invoice_Details();
    } else if (Current_tab == 14) {
      //this.Review = true;
      this.Reviewdetails_View = true;
      this.Reviewmodal_View = false;
      this.Show_FollowUp = true;
      // this.Workexperiencenew_View=false;
      // this.Qualificationnew_View=false;
      this.Get_ReviewDetails(this.Profile_.Student_Id);

      if (this.Review_Click_Status == false) {
        this.Review_Click_Status = true;
        this.Get_Invoice_Details();
      }
      this.Get_Invoice_Details();
    } else if (Current_tab == 21) {
      this.Tasknew_View = true;
      this.Tasknewmodal_View = false;
      this.Show_FollowUp = true;
      this.Task_Group_Id = 4;
      // this.Workexperiencenew_View=false;
      // this.Qualificationnew_View=false;

      this.Get_Tasknew_Task(this.Task_Group_Id);

      this.Task_Item_Dropdown(this.Task_Group_Id);

      // if (this.Pre_Visa_View_Click_Status == false) {
      // 	this.Pre_Visa_View_Click_Status = true;
      // 	//this.Get_Invoice_Details();
      // }
      //this.Get_Invoice_Details();
    } else if (Current_tab == 22) {
      this.Show_FollowUp = true;
      this.Documents_View = true;
      this.Search_Document();
      this.Document_Type_DropDown();
    } else if (Current_tab == 23) {
      this.Pre_Visa_Checklist_View = true;
      this.Pre_Visachecklistmodal_View = false;
      this.Task_Group_Id = 2;
      // this.Workexperiencenew_View=false;
      // this.Qualificationnew_View=false;
      this.Get_Previsa_Details(this.Profile_.Student_Id);
      // this.Get_Previsa_Task(this.Task_Group_Id);
      // this.Task_Item_Dropdown(this.Task_Group_Id);

      if (this.Pre_Visa_View_Click_Status == false) {
        this.Pre_Visa_View_Click_Status = true;
        //this.Get_Invoice_Details();
      }
      //this.Get_Invoice_Details();
    } else if (Current_tab == 25) {
      this.Show_FollowUp = true;
      this.Comments_View = true;
      this.Close_Click_Comment();
      this.Search_Document();
      this.Document_Type_DropDown();
      this.Get_Comments(this.Profile_.Student_Id);
    } else if (Current_tab == 26) {
      this.Show_FollowUp = true;
      this.Followup_View = true;

      this.Get_FollowUp(this.Profile_.Student_Id); // Fetch Follow-Up data
    } else if (Current_tab == 27) {
      this.Send_Mail_View = true;
      this.Show_Send_Mail = true;
      this.selectedTemplateId = 0;
      this.selectedTemplate = "";
      this.emailTemplateService
        .Get_All_Email_Template_Fields()
        .subscribe((res: any) => {
          this.templateFields = res.map((field) => ({
            label: field.field_name,
            value: `{{${field.column_name}}}`,
          }));
        });
      // this.Load_SendMail_User_Dropdown(); // Load Send Mail User Dropdown
      // Call your method to load Send Mail data or setup
      // this.Prepare_Send_Mail(this.Profile_.Student_Id); // Optional: fetch data if needed
    }
  }

  Get_FollowUp(Student_Id: number) {
    this.issLoading = true;
    // debugger;
    this.Student_Service_.Get_FollowUp(Student_Id).subscribe(
      (Rows) => {
        // debugger;
        console.log("Rows[0]: ", Rows[0]);
        this.FollowUp_List = Rows[0]; // Assuming the first index holds the data

        console.log("this.FollowUp_Data: ", this.FollowUp_List);
        this.issLoading = false;
      },
      (error) => {
        this.issLoading = false;
      }
    );
  }

  Load_Statistics() { }
  Load_fees_tab() {
    this.Search_Receipt();
  }

  Load_Application_Fees_Dropdown() {
    this.issLoading = true;

    this.Student_Service_.Load_Application_Fees_Dropdown(
      this.Profile_.Student_Id
    ).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Application_Fees_Course_Data = Rows[0];
          this.Application_Fees_Course_Temp.Application_details_Id = 0;
          this.Application_Fees_Course_Temp.Course_Name = "Select";
          this.Application_Fees_Course_Data.unshift(
            this.Application_Fees_Course_Temp
          );
          this.Application_Fees_Course_ = this.Application_Fees_Course_Data[0];

          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  // Load_SendMail_User_Dropdown() {
  //   this.issLoading = true;
  //   // debugger
  //   this.Student_Service_.Search_SendMail_User_Typeahead_Fllowup(
  //     this.Profile_.Student_Id
  //   ).subscribe(
  //     (Rows) => {
  //       // debugger
  //       if (Rows != null) {
  //         this.Users_Data_Email = Rows[0];
  //         console.log('Users_Data_Email: ', this.Users_Data_Email);
  //         this.Users_Data_Email_Temp.User_Details_Id = 0;
  //         this.Users_Data_Email_Temp.User_Details_Name = "Student";
  //         this.Users_Data_Email.unshift(
  //           Object.assign({}, this.Users_Data_Email_Temp)
  //         );
  //         this.User_Search_Email = this.Users_Data_Email[0];

  //         this.issLoading = false;
  //       }
  //     },
  //     (Rows) => {
  //       this.issLoading = false;
  //     }
  //   );
  // }
  Load_Dropdowns() {
    this.Internship_Service_.Get_Course_Load_Data().subscribe(
      (Rows) => {
        this.Internship_Data = Rows[0];
        this.Internship_Temp.Internship_Id = 0;
        this.Internship_Temp.Internship_Name = "All";
        this.Internship_Data.unshift(Object.assign({}, this.Internship_Temp));
        this.Internship_ = this.Internship_Data[0];

        this.Duration_Data = Rows[2];
        this.Duration_Temp.Duration_Id = 0;
        this.Duration_Temp.Duration_Name = "All";
        this.Duration_Data.unshift(Object.assign({}, this.Duration_Temp));
        this.Duration_ = this.Duration_Data[0];

        this.Level_Data = Rows[3];
        this.Level_Temp.Level_Detail_Id = 0;
        this.Level_Temp.Level_Detail_Name = "All";
        this.Level_Data.unshift(Object.assign({}, this.Level_Temp));
        this.Level_ = this.Level_Data[0];

        this.Student_Status_Data = Rows[4].slice();
        this.Student_Status_Temp.Student_Status_Id = 0;
        this.Student_Status_Temp.Student_Status_Name = "Select";
        this.Student_Status_Data.unshift(
          Object.assign({}, this.Student_Status_Temp)
        );
        this.Student_Status_ = this.Student_Status_Data[0];

        this.Enquiry_Source_Data = Rows[5].slice();
        this.Enquiry_Source_Temp.Enquiry_Source_Id = 0;
        this.Enquiry_Source_Temp.Enquiry_Source_Name = "Select";
        this.Enquiry_Source_Data.unshift(
          Object.assign({}, this.Enquiry_Source_Temp)
        );
        this.Enquiry_Source_ = this.Enquiry_Source_Data[0];

        this.Enquiry_Source_Search_ = this.Enquiry_Source_Data[0];

        // this.Fees_Array = Rows[6].slice();
        // this.Fees_Temp.Fees_Id = 0;
        // this.Fees_Temp.Fees_Name = "Select";
        // this.Fees_Array.unshift(this.Fees_Temp);
        // this.Fees_Data_ = this.Fees_Array[0];

        this.Student_Status_Search_Data = Rows[4].slice();
        this.Student_Status_Search_Temp.Student_Status_Id = 0;
        this.Student_Status_Search_Temp.Student_Status_Name = "All";
        this.Student_Status_Search_Data.unshift(
          Object.assign({}, this.Student_Status_Search_Temp)
        );
        this.Student_Status_Search_ = this.Student_Status_Search_Data[0];
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
      (Rows) => {
        // debugger;
        this.Passport_Mode_Data = Rows[0].slice();
        this.Passport_Mode_Temp.Passport_Id = 0;
        this.Passport_Mode_Temp.Passport_Name = "Select";
        this.Passport_Mode_Data.unshift(
          Object.assign({}, this.Passport_Mode_Temp)
        );
        this.Passport_Mode_ = this.Passport_Mode_Data[0];

        this.Spouse_Visa_Data = Rows[0].slice();
        this.Spouse_Visa_Temp.Passport_Id = 0;
        this.Spouse_Visa_Temp.Passport_Name = "Select";
        this.Spouse_Visa_Data.unshift(Object.assign({}, this.Spouse_Visa_Temp));
        this.Spouse_Visa_ = this.Spouse_Visa_Data[0];

        this.Ielts_Mode_Data = Rows[1].slice();
        this.Ielts_Mode_Temp.Ielts_Id = 0;
        this.Ielts_Mode_Temp.Ielts_Name = "Select";
        this.Ielts_Mode_Data.unshift(Object.assign({}, this.Ielts_Mode_Temp));
        this.Ielts_Mode_ = this.Ielts_Mode_Data[0];

        this.Intake_Mode_Data = Rows[2].slice();
        this.Intake_Mode_Temp.Intake_Id = 0;
        this.Intake_Mode_Temp.Intake_Name = "Select";
        this.Intake_Mode_Data.unshift(Object.assign({}, this.Intake_Mode_Temp));
        this.Intake_Mode_ = this.Intake_Mode_Data[0];
        this.Intake_Search = this.Intake_Mode_Data[0];
        // debugger
        this.Enquiry_For_Data = Rows[3].slice();
        this.Enquiry_For_Temp.Enquiryfor_Id = 0;
        this.Enquiry_For_Temp.Enquirfor_Name = "Select";
        this.Enquiry_For_Data.unshift(Object.assign({}, this.Enquiry_For_Temp));
        this.Enquiry_For_ = this.Enquiry_For_Data[0];
        this.Enquiry_For_Search = this.Enquiry_For_Data[0];

        this.Shore_Data = Rows[4].slice();
        this.Shore_Temp.Shore_Id = 0;
        this.Shore_Temp.Shore_Name = "Select";
        this.Shore_Data.unshift(Object.assign({}, this.Shore_Temp));
        this.Shore_ = this.Shore_Data[0];

        this.Intake_Year_Mode_Data = Rows[5].slice();
        this.Intake_Year_Mode_Temp.Intake_Year_Id = 0;
        this.Intake_Year_Mode_Temp.Intake_Year_Name = "Select";
        this.Intake_Year_Mode_Data.unshift(
          Object.assign({}, this.Intake_Year_Mode_Temp)
        );
        this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];
        this.Intake_Year_Search = this.Intake_Year_Mode_Data[0];

        this.Agent_Mode_Data = Rows[6].slice();
        this.Agent_Mode_Temp.Agent_Id = 0;
        this.Agent_Mode_Temp.Agent_Name = "Select";
        this.Agent_Mode_Data.unshift(Object.assign({}, this.Agent_Mode_Temp));
        this.Agent_Mode_ = this.Agent_Mode_Data[0];
        this.Agent_Search = this.Agent_Mode_Data[0];

        this.Application_Status_Mode_Data = Rows[7].slice();
        this.Application_Status_Mode_Temp.Application_status_Id = 0;
        this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
        this.Application_Status_Mode_Data.unshift(
          Object.assign({}, this.Application_Status_Mode_Temp)
        );
        this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];

        this.Marital_Status_Data = Rows[8].slice();
        this.Marital_Status_Temp.Marital_Status_Id = 0;
        this.Marital_Status_Temp.Marital_Status_Name = "Select";
        this.Marital_Status_Data.unshift(
          Object.assign({}, this.Marital_Status_Temp)
        );
        this.Marital_Status_ = this.Marital_Status_Data[0];

        this.Visa_Type_Data = Rows[9].slice();
        this.Visa_Type_Temp.Visa_Type_Id = 0;
        this.Visa_Type_Temp.Visa_Type_Name = "Select";
        this.Visa_Type_Data.unshift(Object.assign({}, this.Visa_Type_Temp));
        this.Visa_Type_ = this.Visa_Type_Data[0];

        this.IELTS_Type_Data = Rows[10].slice();
        this.IELTS_Type_Temp.Ielts_Type = 0;
        this.IELTS_Type_Temp.Ielts_Type_Name = "Select";
        this.IELTS_Type_Data.unshift(Object.assign({}, this.IELTS_Type_Temp));
        this.IELTS_Type_ = this.IELTS_Type_Data[0];

        this.enquiry_mode_Data = Rows[11].slice();
        this.enquiry_mode_Temp.Enquiry_Mode_Id = 0;
        this.enquiry_mode_Temp.Enquiry_Mode_Name = "Select";
        this.enquiry_mode_Data.unshift(
          Object.assign({}, this.enquiry_mode_Temp)
        );
        this.enquiry_mode_ = this.enquiry_mode_Data[0];

        this.To_Account_Data = Rows[12].slice();
        this.To_Account_Temp.Client_Accounts_Id = 0;
        this.To_Account_Temp.Client_Accounts_Name = "Select";
        this.To_Account_Data.unshift(Object.assign({}, this.To_Account_Temp));
        this.To_Account_ = this.To_Account_Data[0];

        this.Bph_Status_Data = Rows[13].slice();
        this.Bph_Status_Temp.Bph_Status_Id = 0;
        this.Bph_Status_Temp.Bph_Status_Name = "Select";
        this.Bph_Status_Data.unshift(Object.assign({}, this.Bph_Status_Temp));
        this.Bph_Status_ = this.Bph_Status_Data[0];

        this.class_Data = Rows[14].slice();
        this.class_Temp.Class_Id = 0;
        this.class_Temp.Class_Name = "Select";
        this.class_Data.unshift(Object.assign({}, this.class_Temp));
        this.class_ = this.class_Data[0];
        this.Class_Search = this.class_Data[0];

        this.Sort_By_Data = Rows[15].slice();
        this.Sort_By_Temp.Sort_By_Id = 0;
        this.Sort_By_Temp.Sort_By_Name = "Select";
        this.Sort_By_Data.unshift(Object.assign({}, this.Sort_By_Temp));
        this.Sort_By_Search = this.Sort_By_Data[0];

        this.Task_Status_Data = Rows[16].slice();
        this.Task_Status_Temp.Task_Status_Id = 0;
        this.Task_Status_Temp.Status_Name = "Select";
        this.Task_Status_Data.unshift(Object.assign({}, this.Task_Status_Temp));
        this.Task_Status_ = this.Task_Status_Data[0];

        this.Currency_Data = Rows[17].slice();
        this.Currency_Temp.Currency_Id = 0;
        this.Currency_Temp.Currency_Name = "Select";
        this.Currency_Data.unshift(Object.assign({}, this.Currency_Temp));
        this.Currency_ = this.Currency_Data[0];

        this.Commission_Array = Rows[19];
        this.Commission_Temp.Commission_Id = 0;
        this.Commission_Temp.Commission_Name = "Select";
        this.Commission_Array.unshift(this.Commission_Temp);
        this.Commission_Data_ = this.Commission_Array[0];

        // this.Country_dropdown_Data = Rows[19].slice();
        // this.Country_dropdown_Temp1.Country_Id = 0;
        // this.Country_dropdown_Temp1.Country_Name = "Select";
        // this.Country_dropdown_Data.unshift(Object.assign({}, this.Country_dropdown_Temp1));
        // this.Search_Dropdown_Country = this.Country_dropdown_Data[0];

        if (this.Student_Id_localStorage > "0") {
          this.Edit_Student({ Student_Id: this.Student_Id_localStorage }, 1, 1);
        }
      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Public_Search_Course_Click() {
    this.Page_Start_Course = 0;
    this.Page_End_Course = this.Page_Length_Course;

    this.Pointer_Start_ = 1;
    this.Pointer_Stop_Course = this.Page_Length_Course;
    this.Red_Start_Course = 1;
    this.Total_Rows_Course = 0;
    this.Red_Stop_Course = this.Page_Length_Course;
    this.Public_Search_Course();
  }
  Public_Search_Course() {
    this.Courses_Found = 0;
    // this.Start=1;
    var Level_Detail_Id = 0,
      Country_Id = 0,
      Intake_Id = 0,
      Status_Selection = "",
      Duration_Selection = "",
      Intake_Selection = "",
      Sub_Section_Selection = "",
      Ielts_Id = 0,
      University = 0,
      Subject_1 = 0;
    if (this.Level_Detail_ != undefined && this.Level_Detail_ != null)
      if (
        this.Level_Detail_.Level_Detail_Id != undefined &&
        this.Level_Detail_.Level_Detail_Id != null
      )
        Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

    if (this.Country_ != undefined && this.Country_ != null)
      if (
        this.Country_.Country_Id != undefined &&
        this.Country_.Country_Id != null
      )
        Country_Id = this.Country_.Country_Id;

    this.Search_Intake_Temp = this.Search_Intake_;

    // this.Search_Intake_Year_Temp=this.Search_Intake_Year_;

    if (this.Search_Intake_.value != undefined) {
      for (var i = 0; i < this.Search_Intake_.value.length; i++) {
        Intake_Selection =
          Intake_Selection +
          this.Search_Intake_.value[i].Intake_Id.toString() +
          ",";
      }
      if (Intake_Selection.length > 0)
        Intake_Selection = Intake_Selection.substring(
          0,
          Intake_Selection.length - 1
        );
    }

    // if (this.Search_Intake_Year_.value !=undefined)
    // {
    //     for (var i=0;i<this.Search_Intake_Year_.value.length;i++)
    //     {
    //         Intake_Year_Selection=Intake_Year_Selection + this.Search_Intake_Year_.value[i].Intake_Year_Id.toString() +",";
    //     }
    //     if(Intake_Year_Selection.length>0)
    //     Intake_Year_Selection=Intake_Year_Selection.substring(0,Intake_Year_Selection.length-1)
    // }

    this.Search_Sub_Section_Temp = this.Search_Sub_Section_;

    if (this.Search_Sub_Section_.value != undefined) {
      for (var i = 0; i < this.Search_Sub_Section_.value.length; i++) {
        Sub_Section_Selection =
          Sub_Section_Selection +
          this.Search_Sub_Section_.value[i].Sub_Section_Id.toString() +
          ",";
      }
      if (Sub_Section_Selection.length > 0)
        Sub_Section_Selection = Sub_Section_Selection.substring(
          0,
          Sub_Section_Selection.length - 1
        );
    }

    if (this.Ielts_ != undefined && this.Ielts_ != null)
      if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
        Ielts_Id = this.Ielts_.Ielts_Id;

    if (this.University_ != undefined && this.University_ != null)
      if (
        this.University_.University_Id != undefined &&
        this.University_.University_Id != null
      )
        University = this.University_.University_Id;

    if (this.Subject_ != undefined && this.Subject_ != null)
      if (
        this.Subject_.Subject_Id != undefined &&
        this.Subject_.Subject_Id != null
      )
        Subject_1 = this.Subject_.Subject_Id;

    for (var i = 0; i < this.Subject_Data.length; i++) {
      if (this.Subject_Data[i].Selection == true)
        Status_Selection =
          Status_Selection + this.Subject_Data[i].Subject_Id.toString() + ",";
    }
    if (Status_Selection.length > 0)
      Status_Selection = Status_Selection.substring(
        0,
        Status_Selection.length - 1
      );

    for (var i = 0; i < this.Duration_Data.length; i++) {
      if (this.Duration_Data[i].Selection == true)
        Duration_Selection =
          Duration_Selection +
          this.Duration_Data[i].Duration_Id.toString() +
          ",";
    }

    if (Duration_Selection.length > 0)
      Duration_Selection = Duration_Selection.substring(
        0,
        Duration_Selection.length - 1
      );
    var course_Name_Temp = "";
    if (this.Course_Name != undefined)
      if (this.Course_Name.Course_Name != undefined)
        course_Name_Temp = this.Course_Name.Course_Name;
      else course_Name_Temp = this.Course_Name;

    this.issLoading = true;

    this.Student_Service_.Public_Search_Course(
      Level_Detail_Id,
      Country_Id,
      Intake_Selection,
      Sub_Section_Selection,
      course_Name_Temp,
      Status_Selection,
      Duration_Selection,
      Ielts_Id,
      this.Page_Start_Course,
      this.Page_End_Course,
      this.Page_Length_Course,
      University,
      Subject_1
    ).subscribe(
      (Rows) => {
        this.issLoading = false;
        this.Course_Data = Rows[0];
        if (this.Course_Data.length > 0) {
          this.next_previous = true;
        }
        this.Courses_Found =
          this.Course_Data[this.Course_Data.length - 1].Course_Id;
        this.Course_Data.splice(this.Course_Data.length - 1);
        this.Pages = this.Courses_Found / this.Page_Length_Course;
        this.Total_Pages = Math.trunc(this.Pages);
        if (this.Pages > this.Total_Pages) {
          this.Total_Pages = Number(this.Total_Pages) + 1;
        }
      },
      (Rows) => { }
    );
  }
  Fees_Receipt_Mail(Fees_Receipt_) {
    if (
      this.Student_.Email == undefined ||
      this.Student_.Email == null ||
      this.Student_.Email == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Please add mail address", Type: "3" },
      });
      return;
    }
    this.Receipt_Details_.Receipt_Array = Fees_Receipt_;
    this.Receipt_Details_.Login_Id = Number(this.Login_User);
    this.Receipt_Details_.Student_Name = this.Student_.Student_Name;
    this.Receipt_Details_.Student_Email = this.Student_.Email;
    this.issLoading = true;
    this.Student_Service_.Fees_Receipt_Mail(this.Receipt_Details_).subscribe(
      (Status) => {
        //  log(Graph_Status)

        var mail_Data = Status;

        if (mail_Data == null) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Sent", Type: "false" },
          });
          this.issLoading = false;
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
  // OnPrint(Receipt_data_) {
  //
  //     this.Entry_View=false;
  //     this.Fee_Collection_View=false;
  //     this.Section_To_Print=true;
  //     this.Entry_View=true;
  //     this.Receipt_Date=Receipt_data_.Entry_Date;
  //     this.Receipt_Amount=Receipt_data_.Amount;
  //     this.Receipt_Fees=Receipt_data_.Fees_Name;
  //     this.Receipt_Voucher=Receipt_data_.Voucher_No;
  //     this.Receipt_Student=this.Student_.Student_Name;

  //     window.print();
  //   }

  // Search_Student_Click()
  //     {
  //         this.Pointer_Start_ = 1;
  //         this.Pointer_Stop_ = this.Page_Length_;

  //         this.Black_Start =1;
  //         this.Black_Stop = this.Page_Length_;
  //         this.Red_Start = 1;
  //         this.Total_Rows=0;
  //         this.Red_Stop = this.Page_Length_;

  //         this.Search_Student();
  //     }
  Edit_Student_Message(Student_Message_e: Student_Message, index) {
    this.Entry_View = true;
    this.Student_Message_ = Student_Message_e;
    this.Student_Message_ = Object.assign({}, Student_Message_e);
    //  this.Search_Student_Message();
  }

  Delete_Student_Message() {
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
        this.Student_Message_Service.Delete_Student_Message(
          this.Student_.Student_Id
        ).subscribe(
          (Delete_status) => {
            if (Delete_status[0][0].Student_Message_Id_ > 0) {
              // this.Student_Message_Data.splice(this.EditIndex, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }
  Remove_Registration() {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to Remove Registration ?",
        Type: true,
        Heading: "Confirm",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Student_Service_.Remove_Registration(
          this.Profile_.Student_Id
        ).subscribe(
          (update_status) => {
            if (update_status[0][0].Student_Id_ > 0) {
              // this.Student_Message_Data.splice(this.EditIndex, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Registration Removed", Type: "false" },
              });
              this.Total_Rows = this.Total_Rows - this.Student_Data.length;
              this.Search_Student(1);
              this.Remove_Registration_Visibility = false;
              this.Registration_Visiblility = false;

              if (
                this.Remove_Registration_Permissions != undefined &&
                this.Remove_Registration_Permissions != null
              )
                if (this.Registration_Permissions.View == true)
                  this.Registration_Visiblility = true;
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }
  Register_Candidate() {
    // if (
    // 	this.Student_.Email == undefined ||
    // 	this.Student_.Email == null ||
    // 	this.Student_.Email == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Please add mail address", Type: "3" },
    // 	});
    // 	return;
    // }
    this.Registration_Data_.Student_Id = this.Profile_.Student_Id;
    this.Registration_Data_.Student_Name = this.Profile_.Student_Name;
    this.Registration_Data_.Login_Id = Number(this.Login_User);

    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to Register ?",
        Type: true,
        Heading: "Confirm",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;

        this.Student_Service_.Register_Candidate(
          this.Registration_Data_
        ).subscribe(
          (Save_status) => {
            if (Number(Save_status[0].Student_Id_) > 0) {
              this.Remove_Registration_Visibility = false;
              this.Registration_Visiblility = false;
              if (
                this.Remove_Registration_Permissions != undefined &&
                this.Remove_Registration_Permissions != null
              )
                if (this.Remove_Registration_Permissions.View == true)
                  this.Remove_Registration_Visibility = true;

              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Registered", Type: "false" },
              });
              this.Total_Rows = this.Total_Rows - this.Student_Data.length;
              this.Search_Student(1);
              this.Transfer_department_Id = Save_status[0].Department_Id_Reg_;
              this.Register_Transfer_Status =
                Save_status[0].Register_Transfer_Status_Tik_;
              this.Transfer_departmentstatus_Id = Save_status[0].Status_Id_;
              this.Transfer_departmentstatusname = Save_status[0].Status_Name_;
              if (this.Register_Transfer_Status == true) {
                this.Transfer_Cofirmation_Register("");
              }
              //     this.Clr_Student();
              //     this.Create_New();
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  Send_Welcome_Mail() {
    this.Send_Welcome_Mail_Data_.Student_Id = this.Student_.Student_Id;
    this.Send_Welcome_Mail_Data_.Student_Name = this.Student_.Student_Name;
    this.Send_Welcome_Mail_Data_.Login_Id = Number(this.Login_User);
    this.Send_Welcome_Mail_Data_.Student_Email = this.Student_.Email;
    this.issLoading = true;

    this.Student_Service_.Send_Welcome_Mail(
      this.Send_Welcome_Mail_Data_
    ).subscribe(
      (Status) => {
        this.Total_Rows = this.Total_Rows - this.Student_Data.length;

        //  log(Graph_Status)

        var mail_Data = Status;
        this.issLoading = false;
        if (mail_Data == null) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.issLoading = false;
          this.welcome_mail_view = false;
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

  // Send_Registration_Mail(){

  // }

  File_Change(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile = file;
    this.Display_File_Name_ = this.ImageFile[0].name;
  }
  File_Change_Passport(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_passport = file;
    this.Display_passport_ = this.ImageFile_passport[0].name;
  }
  File_Change_IELTS(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Ielts = file;
    this.Display_Ielts_ = this.ImageFile_Ielts[0].name;
  }
  File_Change_Tenth(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Tenth = file;
    this.Display_Tenth_ = this.ImageFile_Tenth[0].name;
  }
  File_Change_Photo(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Photo = file;
    this.Display_Photo_ = this.ImageFile_Photo[0].name;
  }
  File_Change_Experience(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Experience = file;
    this.Display_Experience_ = this.ImageFile_Experience[0].name;
  }
  File_Change_Resume(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Resume = file;
    this.Display_Resume_ = this.ImageFile_Resume[0].name;
  }
  File_Change_Application(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Application = file;
    this.Display_ApplicationFile_ = this.ImageFile_Application[0].name;
    this.ApplicationDocument_File.ApplicationDocument_Name = "";
    this.ApplicationDocument_File.ApplicationDocument_File_Name = "";
  }
  File_Change_Feesrecepit(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Feesreceipt = file;
    this.Display_FeesrecepitFile_ = this.ImageFile_Feesreceipt[0].name;
    this.FeesreceiptDocument_File.FeesreceiptDocument_Name = "";
    this.FeesreceiptDocument_File.FeesreceiptDocument_File_Name = "";
  }

  Get_Resume_Photo() {
    this.Entry_View = true;
    this.issLoading = true;

    this.Student_Service_.Get_Resume_Photo(this.Student_.Resume).subscribe(
      (Rows) => {
        this.Student_Data = Rows[0];
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
    // this.Store_Document_Service_.Get_Store_Document_Photo(this.Store_Document_Id).subscribe(Rows =>
    //     {
    //         this.Store_Document_Data= Rows[0];
    //         this.issLoading = false;
    //     },
    //      Rows => {
    //             this.issLoading = false;
    //        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    //     });
  }
  Get_MOI_Photo() {
    this.Entry_View = true;
    this.issLoading = true;

    this.Student_Service_.Get_MOI_Photo(this.Student_.Passport_Photo).subscribe(
      (Rows) => {
        this.Student_Data = Rows[0];
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

  Get_SOP_Photo() {
    this.Entry_View = true;
    this.issLoading = true;

    this.Student_Service_.Get_SOP_Photo(this.Student_.Passport_Copy).subscribe(
      (Rows) => {
        this.Student_Data = Rows[0];
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

  Get_IELTS_Photo() {
    this.Entry_View = true;
    this.issLoading = true;

    this.Student_Service_.Get_IELTS_Photo(this.Student_.IELTS).subscribe(
      (Rows) => {
        this.Student_Data = Rows[0];
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
  Download_Photo(Photo) {
    //var bs= 'http://newapi.mik.net.in/uploads/'
    var bs = "http://etalk7526api.trackbox.co.in/Documents/Uploads/";
    // var bs= environment.FilePath+'/uploads/';
    var s = bs + Photo;

    window.open(s, "_blank");
  }
  Download_Student_File(File_Name) {
    var File_Name_Temp;
    if (File_Name == "Passport_Copy")
      File_Name_Temp = this.Student_.Passport_Copy;
    else if (File_Name == "IELTS") File_Name_Temp = this.Student_.IELTS;
    else if (File_Name == "Passport_Photo")
      File_Name_Temp = this.Student_.Passport_Photo;
    else if (File_Name == "Tenth_Certificate")
      File_Name_Temp = this.Student_.Tenth_Certificate;
    else if (File_Name == "Work_Experience")
      File_Name_Temp = this.Student_.Work_Experience;
    else if (File_Name == "Resume") File_Name_Temp = this.Student_.Resume;

    var bs = environment.FilePath + "Uploads/"; //'C:/Teena/Edabroad/Back End/Uploads/'
    var s = bs + File_Name_Temp;

    window.open(s, "_blank");
  }
  Search_More_Options1(Student_Data_d) {
    if (Student_Data_d.more_info == true) Student_Data_d.more_info = false;
    //  this.More_Details_Options = false;
    else Student_Data_d.more_info = true;
    // this.More_Details_Options = true;
  }

  // KeyUpFunction(event: Event) {
  //
  // //    if(even=== 13)
  // }

  // Add_Document() {
  // 	if (this.Document_Array == null || this.Document_Array == undefined)
  // 		this.Document_Array = [];
  // 	if (
  // 		this.Document_File_Array == null ||
  // 		this.Document_File_Array == undefined
  // 	)
  // 		this.Document_File_Array = [];

  // 	// this.Document_Array.push(this.Document_Description)
  // 	this.Document_File.Document_Name = this.Document_Description;
  // 	this.Document_File.Document_File_Name = this.Display_File_Name_;
  // 	this.Document_File.New_Entry = 1;

  // 	if (
  // 		this.ImageFile != null &&
  // 		this.ImageFile != undefined &&
  // 		this.ImageFile != ""
  // 	) {
  // 		this.Document_File.File_Name = this.ImageFile[0].name;
  // 		this.Document_Array.push(Object.assign({}, this.Document_File));
  // 		this.Document_File_Array.push(this.ImageFile[0]);
  // 		this.Document_Description = "";
  // 		this.Display_File_Name_ = "";
  // 		this.ImageFile = null;
  // 	} else {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Select File", Type: "3" },
  // 		});
  // 		return;
  // 	}
  // }
  Add_ApplicationDocument() {
    if (
      this.ApplicationDocument_Array == null ||
      this.ApplicationDocument_Array == undefined
    )
      this.ApplicationDocument_Array = [];
    if (
      this.ApplicationDocument_File_Array == null ||
      this.ApplicationDocument_File_Array == undefined
    )
      this.ApplicationDocument_File_Array = [];

    // this.Document_Array.push(this.Document_Description)
    this.ApplicationDocument_File.ApplicationDocument_Name =
      this.ApplicationDocument_Description;
    this.ApplicationDocument_File.ApplicationDocument_File_Name =
      this.Display_ApplicationFile_;
    this.ApplicationDocument_File.New_Entry = 1;

    if (
      this.ImageFile_Application != null &&
      this.ImageFile_Application != undefined &&
      this.ImageFile_Application != ""
    ) {
      this.ApplicationDocument_File.ApplicationFile_Name =
        this.ImageFile_Application[0].name;
      this.ApplicationDocument_Array.push(
        Object.assign({}, this.ApplicationDocument_File)
      );
      this.ApplicationDocument_File_Array.push(this.ImageFile_Application[0]);
      this.ApplicationDocument_Description = "";
      this.Display_ApplicationFile_ = "";
      this.ImageFile_Application = null;
    } else {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select File", Type: "3" },
      });
      return;
    }
  }
  Add_FeesrecepitDocument() {
    if (
      this.FeesreceiptDocument_Array == null ||
      this.FeesreceiptDocument_Array == undefined
    )
      this.FeesreceiptDocument_Array = [];
    if (
      this.FeesreceiptDocument_File_Array == null ||
      this.FeesreceiptDocument_File_Array == undefined
    )
      this.FeesreceiptDocument_File_Array = [];

    // this.Document_Array.push(this.Document_Description)
    this.FeesreceiptDocument_File.FeesreceiptDocument_Name =
      this.FeesreceiptDocument_Description;
    this.FeesreceiptDocument_File.FeesreceiptDocument_File_Name =
      this.Display_FeesrecepitFile_;
    this.FeesreceiptDocument_File.New_Entry = 1;

    if (
      this.ImageFile_Feesreceipt != null &&
      this.ImageFile_Feesreceipt != undefined &&
      this.ImageFile_Feesreceipt != ""
    ) {
      this.FeesreceiptDocument_File.FeesreceiptFile_Name =
        this.ImageFile_Feesreceipt[0].name;
      this.FeesreceiptDocument_Array.push(
        Object.assign({}, this.FeesreceiptDocument_File)
      );
      this.FeesreceiptDocument_File_Array.push(this.ImageFile_Feesreceipt[0]);
      this.FeesreceiptDocument_Description = "";
      this.Display_FeesrecepitFile_ = "";
      this.ImageFile_Feesreceipt = null;
    } else {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select File", Type: "3" },
      });
      return;
    }
  }

  Delete_Student_File(File_Name) {
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
        this.Delete_Student_File_Function(File_Name);
      }
    });
  }

  Delete_Student_File_Function(File_Name) {
    var is_apicall = 0;
    if (File_Name == "Work_Experience") {
      this.Work_Experience = null;
      this.Display_Experience_ = "";
      if (this.Student_.Work_Experience != "") is_apicall = 1;
    } else if (File_Name == "Passport_Copy") {
      this.Passport_Copy = null;
      this.Display_passport_ = "";
      if (this.Student_.Passport_Copy != "") is_apicall = 1;
    } else if (File_Name == "IELTS") {
      this.IELTS = null;
      this.Display_Ielts_ = "";
      if (this.Student_.IELTS != "") is_apicall = 1;
    } else if (File_Name == "Passport_Photo") {
      this.Passport_Photo = null;
      this.Display_Photo_ = "";
      if (this.Student_.Passport_Photo != "") is_apicall = 1;
    } else if (File_Name == "Tenth_Certificate") {
      this.Tenth_Certificate = null;
      this.Display_Tenth_ = "";
      if (this.Student_.Tenth_Certificate != "") is_apicall = 1;
    } else if (File_Name == "Resume") {
      this.Resume = null;
      this.Display_Resume_ = "";
      this.Resume_File_Name = "";
      if (this.Student_.Resume != "") is_apicall = 1;
    }
    if (is_apicall == 1) {
      this.issLoading = true;
      this.Student_Service_.Delete_Student_File(
        this.Student_.Student_Id,
        File_Name
      ).subscribe((Delete_status) => {
        this.issLoading = false;
        if (Delete_status[0][0].Student_Id_ > 0) {
          if (File_Name == "Work_Experience")
            this.Student_.Work_Experience = "";
          else if (File_Name == "Passport_Copy")
            this.Student_.Passport_Copy = "";
          else if (File_Name == "IELTS") this.Student_.IELTS = "";
          else if (File_Name == "Passport_Photo")
            this.Student_.Passport_Photo = "";
          else if (File_Name == "Tenth_Certificate")
            this.Student_.Tenth_Certificate = "";
          else if (File_Name == "Resume") this.Student_.Resume = "";

          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Deleted", Type: "false" },
          });
        }
      });
    }
  }
  Remove_Document(i) {
    this.Document_Array.splice(i);
    this.Document_File_Array.splice(i);
  }

  Remove_ApplicationDocument(i) {
    this.ApplicationDocument_Array.splice(i);
    this.ApplicationDocument_File_Array.splice(i);
  }
  // Save_Student_Document() {
  // 	//this.issLoading=true;
  // 	if (this.Save_Document_ == undefined || this.Save_Document_ == null) {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Select Document", Type: "3" },
  // 		});
  // 		return;
  // 	}
  // 	if (
  // 		this.Save_Document_.Document_Id == undefined ||
  // 		this.Save_Document_.Document_Id == null
  // 	) {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Select Document", Type: "3" },
  // 		});
  // 		return;
  // 	}

  // 	if (
  // 		this.ImageFile == null ||
  // 		this.ImageFile == undefined ||
  // 		this.ImageFile == ""
  // 	) {
  // 		this.File = "";
  // 		this.ImageFile = [];

  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Choose a File", Type: "3" },
  // 		});
  // 		return;
  // 	}
  // 	if (
  // 		this.Document_Description == null ||
  // 		this.Document_Description == undefined ||
  // 		this.Document_Description == ""
  // 	) {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Enter Document Description", Type: "3" },
  // 		});
  // 		return;
  // 	}
  // 	this.Student_Service_.Save_Student_Document(
  // 		this.Save_Document_.Document_Id,
  // 		this.Student_Id_Edit,
  // 		this.ImageFile
  // 	).subscribe(
  // 		(Save_status) => {
  // 			Save_status = Save_status[0];

  // 			if (Number(Save_status[0].Student_Document_Id_) > 0) {
  // 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 					panelClass: "Dialogbox-Class",
  // 					data: { Message: "Saved", Type: "false" },
  // 				});
  // 				this.Get_Student_Document(this.Student_Id_Edit);
  // 				this.Clr_Document();
  // 			} else {
  // 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 					panelClass: "Dialogbox-Class",
  // 					data: { Message: "Error Occured", Type: "2" },
  // 				});
  // 			}
  // 			this.issLoading = false;
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 				panelClass: "Dialogbox-Class",
  // 				data: { Message: Rows.error.error, Type: "2" },
  // 			});
  // 		}
  // 	);
  // }
  //     Public_Search_Course_Typeahead2()
  //     {

  //     var Level_Detail_Id=0,Country_Id=0,Intake_Id=0, Status_Selection='', Duration_Selection='',Intake_Selection='',Sub_Section_Selection='',Ielts_Id=0,University=0,Subject_1=0;
  //     if (this.Level_Detail_ != undefined && this.Level_Detail_!=null)
  //     if (this.Level_Detail_.Level_Detail_Id != undefined && this.Level_Detail_.Level_Detail_Id != null)
  //     Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

  //     if (this.Country_ != undefined && this.Country_!=null)
  //     if (this.Country_.Country_Id != undefined && this.Country_.Country_Id != null)
  //     Country_Id = this.Country_.Country_Id;

  //     // if (this.Intake_ != undefined && this.Intake_!=null)
  //     // if (this.Intake_.Intake_Id != undefined && this.Intake_.Intake_Id != null)
  //     // Intake_Id = this.Intake_.Intake_Id;
  //
  //     this.Search_Intake_Temp=this.Search_Intake_;
  //    // this.Search_Sub_Section_Temp=this.Search_Sub_Section_;

  //     if (this.Search_Intake_.value !=undefined)
  //     {
  //         for (var i=0;i<this.Search_Intake_.value.length;i++)
  //         {
  //             Intake_Selection=Intake_Selection + this.Search_Intake_.value[i].Intake_Id.toString() +",";
  //         }
  //         if(Intake_Selection.length>0)
  //         Intake_Selection=Intake_Selection.substring(0,Intake_Selection.length-1)
  //     }

  //     if (this.Search_Sub_Section_.value !=undefined)
  //     {
  //         for (var i=0;i<this.Search_Sub_Section_.value.length;i++)
  //         {
  //             Sub_Section_Selection=Sub_Section_Selection + this.Search_Sub_Section_.value[i].Sub_Section_Id.toString() +",";
  //         }
  //         if(Sub_Section_Selection.length>0)
  //         Sub_Section_Selection=Sub_Section_Selection.substring(0,Sub_Section_Selection.length-1)
  //     }

  //     if (this.Ielts_ != undefined && this.Ielts_!=null)
  //     if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
  //     Ielts_Id = this.Ielts_.Ielts_Id;

  //     if (this.University_ != undefined && this.University_!=null)
  //     if (this.University_.University_Id != undefined && this.University_.University_Id!= null)
  //     University = this.University_.University_Id;

  //     if (this.Subject_ != undefined && this.Subject_!=null)
  //     if (this.Subject_.Subject_Id != undefined && this.Subject_.Subject_Id!= null)
  //     Subject_1 = this.Subject_.Subject_Id;

  //     for (var i=0;i<this.Subject_Data.length;i++)
  //     {
  //     if(this.Subject_Data[i].Selection==true)
  //     Status_Selection=Status_Selection + this.Subject_Data[i].Subject_Id.toString() +",";
  //     }
  //     if(Status_Selection.length>0)
  //     Status_Selection=Status_Selection.substring(0,Status_Selection.length-1)

  //     for (var i=0;i<this.Duration_Data.length;i++)
  //     {
  //     if(this.Duration_Data[i].Selection==true)
  //     Duration_Selection=Duration_Selection + this.Duration_Data[i].Duration_Id.toString() +",";
  //     }

  //     if(Duration_Selection.length>0)
  //     Duration_Selection=Duration_Selection.substring(0,Duration_Selection.length-1)
  //
  //     var course_Name_Temp=''
  //     if(this.Course_Name!=undefined)
  //       if(this.Course_Name.Course_Name !=undefined)
  //         course_Name_Temp = this.Course_Name.Course_Name
  //       else
  //         course_Name_Temp = this.Course_Name
  //
  //         this.issLoading=true;
  //       this.Student_Service_.Public_Search_Course(Level_Detail_Id, Country_Id, Intake_Selection,Sub_Section_Selection,
  //          course_Name_Temp,Status_Selection,Duration_Selection,Ielts_Id,this.Page_Start,this.Page_End,this.Page_Length,University,Subject_1).subscribe(Rows => {

  //            this.issLoading=false;
  //         this.Course_Data=Rows[0];

  //     },
  //     Rows => {
  //     });
  //     }


  Load_Location() {
    var loc = "";
    loc = this.User_Profile_Location_.Location_Name;
    this.User_Details_Service_.Get_Location_Load_Data(this.FollowUp_Branch_.Branch_Id, this.FollowUp_Department_.Department_Id, loc).subscribe(Rows => {
      this.User_Profile_Location_Data = Rows[0];
      this.User_Profile_Location_Temp_.Location_Id = 0;
      this.User_Profile_Location_Temp_.Location_Name = "select";
      this.User_Profile_Location_Data.unshift(this.User_Profile_Location_Temp_);
      this.User_Profile_Location_ = this.User_Profile_Location_Data[0];
    },
      Rows => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
      });


  }

  Search_Location_Typeahead(event: any, source: number) {

    // debugger;
    var branchid = 0, depid = 0;
    if (this.FollowUp_Branch_.Branch_Id == 0 || this.FollowUp_Branch_.Branch_Id == undefined)
      branchid = this.Branch_Id;
    else
      branchid = this.FollowUp_Branch_.Branch_Id;

    if (this.FollowUp_Department_.Department_Id == 0 || this.FollowUp_Department_.Department_Id == undefined)
      depid = this.Login_Department;
    else
      depid = this.FollowUp_Department_.Department_Id;
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

        //if (source == 1 && Value != undefined) {
        for (var i = 0; i < this.User_Profile_Location_Data.length; i++) {
          if (this.User_Profile_Location_Data[i].Location_Name.toLowerCase().includes(Value)) {
            this.User_Profile_Location_Data_Check.push(this.User_Profile_Location_Data[i]);
          }
        }
        // } else {
        //   this.User_Profile_Location_Data_Check = this.User_Profile_Location_Data;
        // }
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

  Search_Location_Typeahead_BySearch(event: any) {
    var depid = 0;
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();
    // if (this.Department_Search.Department_Id == 0 || this.Department_Search.Department_Id == undefined)
    //   depid = this.Login_Department;
    // else
    //   depid = this.Department_Search.Department_Id;
    // // debugger
    if (this.User_Profile_Location_Data == undefined || this.User_Profile_Location_Data.length == 0) {
      // debugger
      //console.log('login departemnetee', this.Login_Department)
      this.issLoading = true;
      this.User_Details_Service_.Search_Location_Typeahead_BySearch(Value).subscribe(res => {
        // debugger
        this.User_Profile_Location_Data = res[0];
        this.User_Profile_Location_Data_Check = [];
        this.issLoading = false;
        //if (source == 1 && Value != undefined) {
        for (var i = 0; i < this.User_Profile_Location_Data.length; i++) {
          if (this.User_Profile_Location_Data[i].Location_Name.toLowerCase().includes(Value)) {
            this.User_Profile_Location_Data_Check.push(this.User_Profile_Location_Data[i]);
          }
        }
        //} else {
        // this.DSE_Data_Check = this.Brand_Data;
        // }
      });
    } else {
      this.User_Profile_Location_Data_Check = [];
      for (var i = 0; i < this.User_Profile_Location_Data.length; i++) {
        if (Value == undefined ||
          this.User_Profile_Location_Data[i].Location_Name.toLowerCase().includes(Value)) {
          this.User_Profile_Location_Data_Check.push(this.User_Profile_Location_Data[i]);
        }
      }
    }
  }



  Public_Search_Course_Typeahead() {
    this.issLoading = true;
    var Level_Detail_Id = 0,
      Country_Id = 0,
      Intake_Id = 0,
      Intake_Year_Id = 0,
      Sub_Section_Id = 0,
      Status_Selection = "",
      Duration_Selection = "",
      Intake_Selection = "",
      Sub_Section_Selection = "",
      Ielts_Id = 0,
      University = 0,
      Subject_1 = 0;
    if (this.Level_Detail_ != undefined && this.Level_Detail_ != null)
      if (
        this.Level_Detail_.Level_Detail_Id != undefined &&
        this.Level_Detail_.Level_Detail_Id != null
      )
        Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

    if (this.Country_ != undefined && this.Country_ != null)
      if (
        this.Country_.Country_Id != undefined &&
        this.Country_.Country_Id != null
      )
        Country_Id = this.Country_.Country_Id;

    if (this.Intake_ != undefined && this.Intake_ != null)
      if (this.Intake_.Intake_Id != undefined && this.Intake_.Intake_Id != null)
        Intake_Id = this.Intake_.Intake_Id;

    if (this.Intake_Year_ != undefined && this.Intake_Year_ != null)
      if (
        this.Intake_Year_.Intake_Year_Id != undefined &&
        this.Intake_Year_.Intake_Year_Id != null
      )
        Intake_Year_Id = this.Intake_Year_.Intake_Year_Id;

    if (this.Sub_Section_ != undefined && this.Sub_Section_ != null)
      if (
        this.Sub_Section_.Sub_Section_Id != undefined &&
        this.Sub_Section_.Sub_Section_Id != null
      )
        Sub_Section_Id = this.Sub_Section_.Sub_Section_Id;

    if (this.Search_Intake_.value != undefined) {
      for (var i = 0; i < this.Search_Intake_.value.length; i++) {
        Intake_Selection =
          Intake_Selection +
          this.Search_Intake_.value[i].Intake_Id.toString() +
          ",";
      }
      if (Intake_Selection.length > 0)
        Intake_Selection = Intake_Selection.substring(
          0,
          Intake_Selection.length - 1
        );
    }

    // if (this.Search_Intake_Year_.value !=undefined)
    // {
    //     for (var i=0;i<this.Search_Intake_Year_.value.length;i++)
    //     {
    //         Intake_Year_Selection=Intake_Year_Selection + this.Search_Intake_Year_.value[i].Intake_Year_Id.toString() +",";
    //     }
    //     if(Intake_Year_Selection.length>0)
    //     Intake_Year_Selection=Intake_Year_Selection.substring(0,Intake_Year_Selection.length-1)
    // }

    if (this.Search_Sub_Section_.value != undefined) {
      for (var i = 0; i < this.Search_Sub_Section_.value.length; i++) {
        Sub_Section_Selection =
          Sub_Section_Selection +
          this.Search_Sub_Section_.value[i].Sub_Section_Id.toString() +
          ",";
      }
      if (Sub_Section_Selection.length > 0)
        Sub_Section_Selection = Sub_Section_Selection.substring(
          0,
          Sub_Section_Selection.length - 1
        );
    }

    if (this.Ielts_ != undefined && this.Ielts_ != null)
      if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
        Ielts_Id = this.Ielts_.Ielts_Id;

    if (this.University_ != undefined && this.University_ != null)
      if (
        this.University_.University_Id != undefined &&
        this.University_.University_Id != null
      )
        University = this.University_.University_Id;

    if (this.Subject_ != undefined && this.Subject_ != null)
      if (
        this.Subject_.Subject_Id != undefined &&
        this.Subject_.Subject_Id != null
      )
        Subject_1 = this.Subject_.Subject_Id;

    for (var i = 0; i < this.Subject_Data.length; i++) {
      if (this.Subject_Data[i].Selection == true)
        Status_Selection =
          Status_Selection + this.Subject_Data[i].Subject_Id.toString() + ",";
    }
    if (Status_Selection.length > 0)
      Status_Selection = Status_Selection.substring(
        0,
        Status_Selection.length - 1
      );

    for (var i = 0; i < this.Duration_Data.length; i++) {
      if (this.Duration_Data[i].Selection == true)
        Duration_Selection =
          Duration_Selection +
          this.Duration_Data[i].Duration_Id.toString() +
          ",";
    }
    if (Duration_Selection.length > 0)
      Duration_Selection = Duration_Selection.substring(
        0,
        Duration_Selection.length - 1
      );

    var course_Name_Temp = "";
    if (this.Course_Name != undefined)
      if (this.Course_Name.Course_Name != undefined)
        course_Name_Temp = this.Course_Name.Course_Name;
      else course_Name_Temp = this.Course_Name;

    this.Student_Service_.Public_Search_Course_Typeahead(
      Level_Detail_Id,
      Country_Id,
      Intake_Selection,
      Sub_Section_Selection,
      course_Name_Temp,
      Status_Selection,
      Duration_Selection,
      Ielts_Id,
      this.Page_Start,
      this.Page_End_Course,
      this.Page_Length_Course,
      University,
      Subject_1
    ).subscribe(
      (Rows) => {
        this.issLoading = false;
        this.Course_Data_Typeahead = Rows[0];
      },
      (Rows) => { }
    );
  }
  display_Course(Course_e: Course) {
    if (Course_e) {
      return Course_e.Course_Name;
    }
  }
  // Search_Fees_Typeahead(event: any)
  // {
  //     var Value = "";
  //     if (event.target.value == "")
  //         Value = undefined;
  //     else
  //         Value = event.target.value;
  //
  //         // if(this.Fees_Search_==null||this.Fees_Search_.Fees_Id==undefined)
  //         // {
  //         //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});

  //         // }

  //                this.issLoading = true;
  //     this.Student_Service_.Search_Fees_Typeahead(this.Fees_Search_.Fees_Id,'').subscribe(Rows => {

  //         if (Rows != null) {
  //             this.Fees_Data = Rows[0];
  //             this.issLoading = false;
  //         }
  //     },
  //         Rows => {
  //             this.issLoading = false;
  //            });

  // }
  // display_Fees(Fees_e: Fees)
  // {
  // if (Fees_e) { return Fees_e.Fees_Name; }
  // }

  display_University_(University_e: University) {
    if (University_e) {
      return University_e.University_Name;
    }
  }
  Search_More_Options() {
    if (this.More_Search_Options == true) {
      this.myInnerHeight = this.myInnerHeighttemp - 150;
      this.More_Search_Options = false;
    } else {
      this.More_Search_Options = true;
      this.myInnerHeight = this.myInnerHeighttemp;
    }
  }
  SendLInk() {
    // var str = this.Profile_.Phone_Number;
    var unique_id = this.Profile_.Unique_Id;

    // str = str.replace(/[^0-9+#]/g, "");

    // var char ='+91';
    var Phone_Number;
    // //alert(str.includes(char))
    // if(str.includes(char)==false)
    // {
    // 	Phone_Number =char+this.Profile_.Phone_Number;
    // }
    // else
    //  {
    // 	Phone_Number =str;
    //  }
    //console.log(str.includes(char));

    this.Profile_.Whatsapp = this.Profile_.Whatsapp.replace(/[^0-9+#]/g, "");
    var plus = "+";
    var char = "+91";
    const str = this.Profile_.Whatsapp;

    var first2 = str.substring(0, 2);

    if (this.Profile_.Whatsapp.length > 10 && first2 == "91") {
      Phone_Number = plus + this.Profile_.Whatsapp;
    } else if (
      this.Profile_.Whatsapp.length <= 10 &&
      this.Profile_.Whatsapp.includes(char) == false
    ) {
      Phone_Number = char + this.Profile_.Whatsapp;
    } else {
      Phone_Number = this.Profile_.Whatsapp;
    }

    this.issLoading = true;

    this.Student_Service_.SendLInk(
      this.Profile_.Student_Id,
      this.Login_User
    ).subscribe(
      (Rows) => {
        Rows = Rows[0];
        if (Number(Rows[0].Student_Id_) > 0) {
          var temp =
            "https://wa.me/" +
            Phone_Number +
            "?text=Hai please update your details here   https://metxstudent.trackbox.in/?id=" +
            unique_id;
          window.open(temp);
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Sent", Type: "false" },
          });
        }
        this.issLoading = false;
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

  DropboxLInk() {
    // var str = this.Profile_.Phone_Number;
    var unique_id = this.Profile_.Unique_Id;

    // str = str.replace(/[^0-9+#]/g, "");

    // var char ='+91';
    var Phone_Number;
    // //alert(str.includes(char))
    // if(str.includes(char)==false)
    // {
    //  Phone_Number =char+this.Profile_.Phone_Number;
    // }
    // else
    //  {
    //  Phone_Number =str;
    //  }
    //console.log(str.includes(char));

    this.Profile_.Phone_Number = this.Profile_.Phone_Number.replace(
      /[^0-9+#]/g,
      ""
    );
    var plus = "+";
    var char = "+91";
    const str = this.Profile_.Phone_Number;

    var first2 = str.substring(0, 2);

    if (this.Profile_.Phone_Number.length > 10 && first2 == "91") {
      Phone_Number = plus + this.Profile_.Phone_Number;
    } else if (
      this.Profile_.Phone_Number.length <= 10 &&
      this.Profile_.Phone_Number.includes(char) == false
    ) {
      Phone_Number = char + this.Profile_.Phone_Number;
    } else {
      Phone_Number = this.Profile_.Phone_Number;
    }

    //this.issLoading = true;

    var temp = "https://dropbox.com/";
    window.open(temp);
    // const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Sent", Type: "false" },
    // });
  }
  Search_More_Options_Profile() {
    // if (this.More_Search_Options == true)
    // {
    // 	this.myInnerHeight=this.myInnerHeighttemp-90;
    // 	this.More_Search_Options = false;
    // }

    // else
    // {
    // 	this.More_Search_Options = true;
    // 	this.myInnerHeight=this.myInnerHeighttemp
    // }

    if (this.More_Search_Options_Profile == true)
      this.More_Search_Options_Profile = false;
    else this.More_Search_Options_Profile = true;

    if (this.More_Search_Options_Profile == false) this.profile_View = true;
    this.Martialdetails_view = true;
    this.Buttonset_view = false;
    this.Transfer_Button_view = false;
    //this.Show_FollowUp = true;

    if (this.More_Search_Options_Profile == true) this.profile_View = false;
    this.Martialdetails_view = false;
    this.Buttonset_view = true;
    this.Transfer_Button_view = false;
    //this.Show_FollowUp = false;
  }

  Search_View_Lead_button() {
    this.Black_Start = 1;
    this.Black_Stop = this.Page_Length;
    this.Red_Start = 1;
    this.Total_Rows = 0;
    this.Red_Stop = this.Page_Length;
    this.missedfollowup_count = 0;
    var Followup_Count = 0;
    this.srchbtn_click = 0;
    this.Search_Student(Followup_Count);
  }

  Search_Lead_button() {
    this.Black_Start = 1;
    this.Black_Stop = this.Page_Length;
    this.Red_Start = 1;
    this.Total_Rows = 0;
    this.Red_Stop = this.Page_Length;
    this.missedfollowup_count = 0;
    var Followup_Count = 1;
    this.srchbtn_click = 1;
    this.Search_Student(Followup_Count);
  }
  Search_Student(Followup_Count) {
    var value = 1,
      Register_Value = 1,
      dept_id = 0,
      User_Id = 0,
      By_User_Id = 0,
      Search_value_ = "",
      search_name_ = "",
      look_In_Date_Value = 0,
      branch_id = 0,
      Enquiry_For_id = 0,
      Class_Id = 0,
      Sort_By_Id = 0,
      Intake_Id = 0,
      Intake_Year_Id = 0,
      Agent_Id = 0,
      Department_Status_Id = 0,
      Country_Id = 0,
      UserRoleString = "",
      Department_String = "",
      Enquiry_Source_id = 0,
      Search_Enquiry_For_Id = 0,
      search_program_course_Id = 0,
      Student_Id = "0",
      Search_Brand = 0,
      Search_DSE_Data = 0,
      Search_Location = 0,
      Search_Profile_University = 0,
      Search_Remark_Name = "";

    if (this.Search_By_ != undefined && this.Search_By_ != null)
      if (
        this.Search_By_ != undefined &&
        this.Search_By_ != null &&
        this.Search_By_ != ""
      )
        value = this.Search_By_;
    // if (this.Is_Registered != undefined && this.Is_Registered != null)
    //   if (
    //     this.Is_Registered != undefined &&
    //     this.Is_Registered != null &&
    //     this.Is_Registered != ""
    //   )
    Register_Value = 0;//this.Is_Registered;

    if (this.Look_In_Date == true) look_In_Date_Value = 1;

    if (
      this.Search_Name != undefined &&
      this.Search_Name != null &&
      this.Search_Name != ""
    ) {
      Search_value_ = this.Search_Name;
    }
    search_name_ = Search_value_.trim();

    if (this.User_Search != undefined && this.User_Search != null)
      if (
        this.User_Search.User_Details_Id != undefined &&
        this.User_Search.User_Details_Id != null
      )
        User_Id = this.User_Search.User_Details_Id;

    if (this.By_User_Search != undefined && this.By_User_Search != null)
      if (
        this.By_User_Search.User_Details_Id != undefined &&
        this.By_User_Search.User_Details_Id != null
      )
        By_User_Id = this.By_User_Search.User_Details_Id;

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
        Enquiry_For_id = this.Enquiry_For_Search.Enquiryfor_Id;

    if (this.Enquiry_Source_Search_ != undefined && this.Enquiry_Source_Search_ != null)
      if (
        this.Enquiry_Source_Search_.Enquiry_Source_Id != undefined &&
        this.Enquiry_Source_Search_.Enquiry_Source_Id != null
      )
        Enquiry_Source_id = this.Enquiry_Source_Search_.Enquiry_Source_Id;

    if (this.Class_Search != undefined && this.Class_Search != null)
      if (
        this.Class_Search.Class_Id != undefined &&
        this.Class_Search.Class_Id != null
      )
        Class_Id = this.Class_Search.Class_Id;

    if (this.Sort_By_Search != undefined && this.Sort_By_Search != null)
      if (
        this.Sort_By_Search.Sort_By_Id != undefined &&
        this.Sort_By_Search.Sort_By_Id != null
      )
        Sort_By_Id = this.Sort_By_Search.Sort_By_Id;

    if (this.Intake_Search != undefined && this.Intake_Search != null)
      if (
        this.Intake_Search.Intake_Id != undefined &&
        this.Intake_Search.Intake_Id != null
      )
        Intake_Id = this.Intake_Search.Intake_Id;

    if (this.Intake_Year_Search != undefined && this.Intake_Year_Search != null)
      if (
        this.Intake_Year_Search.Intake_Year_Id != undefined &&
        this.Intake_Year_Search.Intake_Year_Id != null
      )
        Intake_Year_Id = this.Intake_Year_Search.Intake_Year_Id;

    if (this.Agent_Search != undefined && this.Agent_Search != null)
      if (
        this.Agent_Search.Agent_Id != undefined &&
        this.Agent_Search.Agent_Id != null
      )
        Agent_Id = this.Agent_Search.Agent_Id;

    if (this.Search_Status != undefined && this.Search_Status != null)
      if (
        this.Search_Status.Department_Status_Id != undefined &&
        this.Search_Status.Department_Status_Id != null
      )
        Department_Status_Id = this.Search_Status.Department_Status_Id;
    // debugger;
    if (this.Search_Status != undefined && this.Search_Status != null)
      if (
        this.Search_Dropdown_Country.Country_Id != undefined &&
        this.Search_Dropdown_Country.Country_Id != null
      )
        Country_Id = this.Search_Dropdown_Country.Country_Id;

    if (this.Program_Course_search != undefined || this.Program_Course_search != null) {
      if (this.Program_Course_search.Course_Id != undefined || this.Program_Course_search.Course_Id != null) {
        search_program_course_Id = this.Program_Course_search.Course_Id;
      }
    }

    if (this.Search_Brand_ != undefined || this.Search_Brand_ != null) {
      if (this.Search_Brand_.Brand_Id != undefined || this.Search_Brand_.Brand_Id != null)
        Search_Brand = this.Search_Brand_.Brand_Id;
    }

    if (this.Search_DSE_Data_ != undefined || this.Search_DSE_Data_ != null) {
      if (this.Search_DSE_Data_.DSE_Id != undefined || this.Search_DSE_Data_.DSE_Id != null)
        Search_DSE_Data = this.Search_DSE_Data_.DSE_Id;
    }

    if (this.Search_Location_ != undefined || this.Search_Location_ != null) {
      if (this.Search_Location_.Location_Id != undefined || this.Search_Location_.Location_Id != null)
        Search_Location = this.Search_Location_.Location_Id;
    }

    if (this.Search_Profile_University_ != undefined || this.Search_Profile_University_ != null) {
      if (this.Search_Profile_University_.Country_Id != undefined || this.Search_Profile_University_.Country_Id != null)
        Search_Profile_University = this.Search_Profile_University_.Country_Id;
    }

    if (this.Student_Id_Search != undefined && this.Student_Id_Search != null)
      Student_Id = this.Student_Id_Search;


    if (this.Search_Remark_Name != undefined && this.Search_Remark_Name != null)
      Search_Remark_Name = this.Search_Remark_Name;

    if (this.Student_Id_Search == "") Student_Id = "0";
    this.issLoading = true;
    this.Old_search_name = this.Search_Name;
    this.Old_Branch_id = this.Search_Branch.Branch_Id;
    if (this.Old_Branch_id == undefined) this.Old_Branch_id = 0;
    this.Old_Department_id = this.Department_Search.Department_Id;
    if (this.Old_Department_id == undefined) this.Old_Department_id = 0;
    this.Old_Status_id = this.Search_Status.Department_Status_Id;
    if (this.Old_Status_id == undefined) this.Old_Status_id = 0;
    this.Old_Is_Registered = Register_Value;
    this.Old_Search_FromDate = this.Search_FromDate;
    this.Old_Search_ToDate = this.Search_ToDate;
    this.Student_Data = [];
    this.Student_Service_.Search_Student(
      moment(this.Search_FromDate).format("YYYY-MM-DD"),
      moment(this.Search_ToDate).format("YYYY-MM-DD"),
      value,
      search_name_,
      dept_id,
      branch_id,
      Enquiry_For_id,
      Class_Id,
      Sort_By_Id,
      Intake_Id,
      Intake_Year_Id,
      Agent_Id,
      User_Id,
      By_User_Id,
      Department_Status_Id,
      look_In_Date_Value,
      this.Black_Start,
      this.Black_Stop,
      this.Login_User,
      this.Red_Start,
      this.Red_Stop,
      Register_Value,
      Country_Id,
      Student_Id,
      Enquiry_Source_id,
      search_program_course_Id,
      Search_Brand,
      Search_DSE_Data,
      Search_Location,
      Search_Profile_University,
      Search_Remark_Name,
      Followup_Count
    ).subscribe(
      (Rows) => {
        // debugger;
        this.Student_Data = Rows.returnvalue.Leads;
        console.log("this.Student_Data: ", this.Student_Data);

        this.Data_Count =

          this.Student_Data[this.Student_Data.length - 1].Student_Id;
        this.Student_Data.splice(this.Student_Data.length - 1);
        console.log('this.Data_Count: ', this.Data_Count);
        this.Missed_Count =

          this.Student_Data[this.Student_Data.length - 1].Student_Id;
        this.Student_Data.splice(this.Student_Data.length - 1);
        console.log(' this.Missed_Count: ', this.Missed_Count);
        // this.Total_Entries = this.Student_Data.length;
        this.missedfollowup_count = 0;
        this.followup_count = 0;
        if (this.Student_Data.length > 0) {
          if (this.Student_Data[0].User_Status == 2) {
            localStorage.clear();
            this.router.navigateByUrl("/auth/login");
          }
        }

        this.Temp_Date_Followup = new Date();
        var temp = this.New_Date(this.Temp_Date_Followup);
        for (var i = 0; i < this.Student_Data.length; i++) {
          var temp_next = moment(
            this.Student_Data[i].Actual_Next_FollowUp_Date
          ).format("YYYY-MM-DD");

          //if (this.New_Date(this.Lead_Data_Search[i].Next_FollowUp_Date_Actual)<this.New_Date(this.todate))
          if (temp_next < temp) this.Student_Data[i].tp = 2;
          else this.Student_Data[i].tp = 1;

          // this.Student_Data[i].RowNo =this.Total_Rows+this.Student_Data.length- i;
          this.Student_Data[i].RowNo =
            this.Total_Rows + this.Student_Data.length - i;

          //No setting in student list begin
          this.Student_Data[i].RowNo = this.Total_Rows + i + 1;
          //No setting in student list end

          this.Student_Data[i].RowNo_sort = i + 1 + this.Total_Rows;
          if (this.Student_Data[i].tp == 1)
            this.followup_count = this.followup_count + 1;
          if (this.Student_Data[i].tp == 2)
            this.missedfollowup_count = this.missedfollowup_count + 1;
        }

        // this.Student_Data = this.Student_Data.sort(
        // 	(a, b) => b.RowNo_sort - a.RowNo_sort				);

        if (this.Student_Data.length > 0)
          this.Total_Rows = this.Total_Rows + this.Student_Data.length;

        this.issLoading = false;

        // if (this.Student_Data.length == 0) {
        //   this.issLoading = false;
        //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
        //     panelClass: "Dialogbox-Class",
        //     data: { Message: "No Details Found", Type: "3" },
        //   });
        // }
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

  Export() {
    if (this.Student_Data == undefined) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "No Details Found", Type: "3" },
      });
    } else {
      this.Student_Service_.exportExcel(this.Student_Data, "Student_Report");
    }
  }

  Search_Document() {
    this.Document_Service.Search_Document(this.Student_Id_Edit).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Student_Documents_Data = Rows[0];
        }
        //  this.issLoading = false;
      },
      (Rows) => {
        //       this.issLoading = false;
        //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
      }
    );
  }

  Document_Type_DropDown() {
    this.Student_Service_.Search_Document_Type("").subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Document_Type_Data = Rows[0];
          this.Document_Type_Temp.Document_Type_Name = "Other";
          this.Document_Type_Temp.Document_Type_Id = 0;
          this.Document_Type_Data.push(this.Document_Type_Temp);
        }
      },

      (Rows) => { }
    );
  }

  Get_Message_Details(Student_Id) {
    this.Student_Service_.Get_Message_Details(Student_Id).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Student_Message_Data = Rows[0];
        }
        //  this.issLoading = false;
      },
      (Rows) => {
        //       this.issLoading = false;
        //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
      }
    );
  }
  Get_Student_Document(Student_Id) {
    this.Files_Upload_Service_.Get_Student_Document(Student_Id).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Student_Documents_Data = Rows[0];
          // this.Image_Photo = Rows[0][0].File_Name;
        }
        //  this.issLoading = false;
      },
      (Rows) => {
        //       this.issLoading = false;
        //  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
      }
    );
  }

  Get_Student_Course_Apply(Student_Id) {
    //this.selection_box=true
    this.Student_Service_.Get_Student_Course_Apply(Student_Id).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Student_Course_Apply_Data = Rows[0];
        }
      },
      (Rows) => { }
    );
  }

  Get_Student_Course_Selection(Student_Course_Apply_Id) {
    // this.selection_box=true
    this.Student_Service_.Get_Student_Course_Selection(
      Student_Course_Apply_Id
    ).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Student_Course_Selection_Data = Rows[0];
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
  Advance_Search_Click() {
    this.Advance_Search = !this.Advance_Search;
  }

  Next_Click() {
    // debugger;
    if (

      this.Old_search_name != this.Search_Name ||
      this.Old_Branch_id != this.Search_Branch.Branch_Id ||
      this.Old_Department_id != this.Department_Search.Department_Id ||
      this.Old_Status_id != this.Search_Status.Department_Status_Id ||
      moment(this.Old_Search_FromDate).format("YYYY-MM-DD") !=
      moment(this.Search_FromDate).format("YYYY-MM-DD") ||
      moment(this.Old_Search_ToDate).format("YYYY-MM-DD") !=
      moment(this.Search_ToDate).format("YYYY-MM-DD")
    ) {
      this.Search_Lead_button();
    }
    else if (this.Student_Data.length == this.Page_Length) {
      this.Black_Start = this.Black_Start + this.Page_Length;
      this.Black_Stop = this.Black_Stop + this.Page_Length;
      if (this.missedfollowup_count > 0) {
        this.Red_Start = this.Red_Start + this.missedfollowup_count;
        this.Red_Stop = this.Red_Start + this.Page_Length;
      }
      // debugger;
      this.nextflag = 1;
      var Followup_Count = 1;

      if (this.srchbtn_click == 0)
        Followup_Count = 0;
      else
        Followup_Count = 1;

      if (this.Student_Data.length > 0) {
        this.Search_Student(Followup_Count);
      }
    } else {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "No Other Details", Type: "3" },
      });
    }
  }

  previous_Click() {
    if (
      this.Old_search_name != this.Search_Name ||
      this.Old_Branch_id != this.Search_Branch.Branch_Id ||
      this.Old_Department_id != this.Department_Search.Department_Id ||
      this.Old_Status_id != this.Search_Status.Department_Status_Id ||

      this.Old_Search_FromDate != this.Search_FromDate ||
      this.Old_Search_ToDate != this.Search_ToDate
    ) {
      this.Search_Lead_button();
    }
    //
    else if (this.Black_Start > 1) {
      {
        this.Black_Start = this.Black_Start - this.Page_Length;
        this.Black_Stop = this.Black_Stop - this.Page_Length;
      }
      if (this.missedfollowup_count > 0 || this.Red_Start > 1) {
        this.Red_Start = this.Red_Start - this.Page_Length;
        if (this.Red_Start <= 0) this.Red_Start = 1;
        this.Red_Stop = this.Red_Start + this.Page_Length;
      }
      this.Total_Rows =
        this.Total_Rows - this.Student_Data.length - this.Page_Length;
      if (this.Total_Rows < 0) {
        this.Total_Rows = 0;
      }
      var Followup_Count = 1;
      if (this.srchbtn_click == 0)
        Followup_Count = 0;
      else
        Followup_Count = 1;


      this.Search_Student(Followup_Count);
    } else {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "No Other Details", Type: "3" },
      });
    }

    //   }
  }

  Next_Click_Course() {
    //this.Start = 0;
    if (this.Course_Data.length == this.Page_Length_Course) {
      this.Page_Start_Course = this.Page_Start_Course + this.Page_Length_Course;
      this.Page_End_Course = this.Page_End_Course + this.Page_Length_Course;
      this.Start = Number(this.Start) + 1;
      if (this.Course_Data.length > 0) {
        this.Public_Search_Course();
      }
    }
  }

  previous_Click_Course() {
    // this.Start = 0;

    if (this.Page_Start_Course > 1) {
      {
        this.Page_Start_Course =
          this.Page_Start_Course - this.Page_Length_Course;
        this.Page_End_Course = this.Page_End_Course - this.Page_Length_Course;
        this.Start = Number(this.Start) - 1;
      }
      // if (this.missedfollowup_count > 0 || this.Red_Start > 1) {
      //     this.Red_Start = this.Red_Start - this.Page_Length_;
      //     if (this.Red_Start <= 0)
      //         this.Red_Start = 1;
      //     this.Red_Stop = this.Red_Start + this.Page_Length_;
      // }
      this.Total_Rows_Course =
        this.Total_Rows_Course -
        this.Course_Data.length -
        this.Page_Length_Course;
      this.Public_Search_Course();
    }
  }
  Search_Student_Status() {
    this.issLoading = true;
    this.Student_Service_.Search_Student_Status("").subscribe(
      (Rows) => {
        this.Student_Status_Data = Rows[0];
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
  Search_Enquiry_Source() {
    this.issLoading = true;
    this.Student_Service_.Search_Enquiry_Source("").subscribe(
      (Rows) => {
        this.Student_Status_Data = Rows[0];
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
  View_Student_Click_() {
    this.View_History_ = true;
    //this.New_view=true;
    //this.profile_View = true;
    this.New_view = true;
    // this.More_Search_Options_Profile = true;
    // this.Show_FollowUp=true;
    this.History_View = false;
    this.Show_Followup_History = true;
    this.Edit_Student(
      this.Student_Data[this.Lead_EditIndex],
      this.Lead_EditIndex,
      2
    );
  }

  Transfer_Click_() {
    this.View_History_ = true;
    this.History_View = false;
    this.Show_Followup_History = true;
    this.Transfer_view = true;
    this.Show_FollowUp = true;
    this.Buttonset_view = false;
    this.Transfer_Button_view = true;
    this.Transfer_department_Id = null;
    this.transfer_typeahead = true;

    //this.Status_Change();
  }

  Transfer_Click_Student() {
    this.View_History_ = true;
    this.History_View = false;
    this.Show_Followup_History = true;
    this.Transfer_view = true;
    this.Show_FollowUp = true;
    this.Buttonset_view = false;
    this.Transfer_Button_view = true;
    this.Transfer_department_Id = null;
    this.transfer_typeahead = true;
    this.Student_Name = this.Profile_.Student_Name;

    this.New_view = false;
    this.profile_View = false;
    this.Martialdetails_view = false;
    this.tab_view = false;
  }

  Close_Click_Transfer() {
    this.Show_FollowUp = false;
    this.Buttonset_view = true;
    this.Transfer_Button_view = false;
    this.Transfer_view = false;
    this.transfer_typeahead = false;

    this.Followup_Transfer_Status_Data = [];
    this.Followup_Substatus_Data_Filter1 = [];
    this.Followup_Substatus_Data1 = [];

    this.Transfer_Status_ = null;
    this.Transfer_Status_k = null;
    this.Profile_.Transfer_Remark = "";
    this.Close_Click();
  }

  Edit_Student(Student_e: any, index, Call_From) {
    this.Get_Menu_Status_Multiple(49, this.Login_User);
    this.Buttonset_view = true;
    this.View_Student_ = true;
    this.View_Follow_ = false;
    this.Lead_EditIndex = index;
    this.Entry_View = true;
    this.profile_View = true;
    // this.Martialdetails_view=false;
    this.Statistics_View = true;


    this.Transfer_Button_view = false;
    this.tab_view = true;
    this.Visa_View = false;
    this.History_View = false;
    this.application_details_View = false;
    this.language_details_View = false;
    this.Qualification_details_View = false;
    this.Applicationmodal_View = false;
    this.Languagemodal_View = false;
    this.Qualificationmodal_View = false;
    this.Feesmodal_View = false;
    this.Visamodal_View = false;
    this.Pre_Visamodal_View = false;
    this.Student_Name = Student_e.Student_Name;
    this.Tasknew_View = false;
    this.Tasknewmodal_View = false;

    this.Reviewmodal_View = false;
    this.Reviewdetails_View = false;
    this.Pre_Visa_View = false;
    this.Invoicemodal_View = false;
    this.course_history_View = false;
    this.Checklist_View = false;
    this.View_document = false;
    this.Course_View = false;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
    this.message_View = false;
    this.profile_View = false;

    this.Sms_Button_view = true;
    this.More_Button_view = true;

    this.View_History_ = false;
    this.New_view = true;
    this.More_Search_Options_Profile = true;

    if (this.Document_View_Status == true) this.Document_View_Option = true;
    console.log('Call_From: ', Call_From);
    if (Call_From == 0) {

      // debugger
      this.Flag_Followup = 1;
      this.Show_FollowUp = false;
      this.Get_FollowUp_Details();
    } else if (Call_From == 2) {
      // debugger
      this.Flag_Followup = 0;
      this.Flag_Student = 1;
      // this.View_Follow_ = true;
      // this.profile_View = true;
      this.Show_FollowUp = true;
      //sthis.Get_FollowUp_Details();
    } else {
      // debugger
      this.Flag_Followup = 0;
      this.Show_FollowUp = true;
    }

    this.Flag_Student = 1;
    this.FollowUp_.Remark = "";
    this.Student_Id = Student_e.Student_Id;
    //console.log(this.Student_Id);
    this.Student_Id_Edit = Student_e.Student_Id;
    this.Save_Agent_.Client_Accounts_Name = Student_e.Client_Accounts_Name;
    this.Save_Agent_.Client_Accounts_Id = Student_e.Agent_Id;

    this.Application_Click_Status = false;
    this.Fee_Collection_Click_Status = false;
    this.Commission_Collection_Click_Status = false;
    // debugger;
    // this.Get_Student_Edit(Student_e.Student_Id);
    this.issLoading = true;
    this.Student_Service_.Get_Student(
      Student_e.Student_Id,
      Number(this.Login_User)
    ).subscribe(
      (Rows) => {
        // debugger;
        this.Profile_ = Object.assign({}, Rows[0][0]);
        this.Count_Task_ = Rows[2][0].Task_Count_;
        this.Student_ = Object.assign({}, Rows[0][0]);
        this.Buttonset_view = true;
        this.Remove_Registration_Visibility = false;
        this.Registration_Visiblility = false;
        console.log(this.Profile_);
        // if(this.Student_.Is_Registered==true)
        // {
        //     if(this.Remove_Registration_Permissions.View==true)
        //         this.Remove_Registration_Visibility=true;
        // }
        // else
        // {
        //     if(this.Registration_Permissions.View==true)
        //         this.Registration_Visiblility=true;
        // }

        if (this.Profile_.To_User_Id != Number(this.Login_User)) {
          this.Save_button_view = false;
        } else this.Save_button_view = true;

        if (this.Profile_.Is_Registered == 1) this.Registered_Check = 1;

        if (this.Student_.Send_Welcome_Mail_Status == 0) {
          this.welcome_mail_view = true;
        } else {
          this.welcome_mail_view = false;
        }
        //this.Profile_.Transfer_date = new Date(Rows[0][0].Transfer_date);
        // if (!this.Profile_.Transfer_date || this.Profile_.Transfer_date === '1970-01-01') {
        //   this.Profile_.Transfer_date = null;
        // } else {
        //   this.Profile_.Transfer_date = new Date(Rows[0][0].Transfer_date);
        // }

        const d = new Date(Rows[0][0].Transfer_date);

        if (!Rows[0][0].Transfer_date || isNaN(d.getTime()) || d.getFullYear() === 1970) {
          this.Profile_.Transfer_date = null;
        } else {
          this.Profile_.Transfer_date = d;
        }

        if (this.Profile_.Is_Registered == 1) {
          if (
            this.Remove_Registration_Permissions != undefined &&
            this.Remove_Registration_Permissions != null
          )
            if (this.Remove_Registration_Permissions.View == true)
              this.Remove_Registration_Visibility = true;
        } else {
          if (
            this.Registration_Permissions != undefined &&
            this.Registration_Permissions != null
          )
            if (this.Registration_Permissions.View == true)
              this.Registration_Visiblility = true;
        }

        this.Display_Resume_ = this.Student_.Resume_File_Name;
        this.Display_passport_ = this.Student_.Passport_Copy_File_Name;
        this.Display_Ielts_ = this.Student_.IELTS_File_Name;
        this.Display_Photo_ = this.Student_.Passport_Photo_File_Name;
        this.Display_Tenth_ = this.Student_.Tenth_Certificate_File_Name;
        this.Display_Experience_ = this.Student_.Work_Experience_File_Name;


        // this.Document_Array = Rows[1];
        // this.Document_File_Array = [];
        // for (var i = 0; i < this.Document_Array.length; i++)
        // 	this.Document_File_Array.push("");
        // // this.Document_File_Array
        // for (var i = 0; i < this.Gender_Data.length; i++) {
        //   if (this.Student_.Gender == this.Gender_Data[i].Gender_Name)
        //     this.Gender_ = this.Gender_Data[i];
        // }

        // for (var i = 0; i < this.Student_Status_Data.length; i++) {
        //   if (
        //     this.Student_.Student_Status_Id ==
        //     this.Student_Status_Data[i].Student_Status_Id
        //   )
        //     this.Student_Status_ = this.Student_Status_Data[i];
        // }

        for (var i = 0; i < this.Enquiry_Source_Data.length; i++) {
          if (
            this.Profile_.Enquiry_Source_Id ==
            this.Enquiry_Source_Data[i].Enquiry_Source_Id
          )
            this.Enquiry_Source_ = this.Enquiry_Source_Data[i];
        }

        // for (var i = 0; i < this.enquiry_mode_Data.length; i++) {
        //   if (
        //     this.Profile_.Enquiry_Mode_Id ==
        //     this.enquiry_mode_Data[i].Enquiry_Mode_Id
        //   )
        //     this.enquiry_mode_ = this.enquiry_mode_Data[i];
        // }

        // for (var i = 0; i < this.Shore_Data.length; i++) {
        //   if (this.Profile_.Shore_Id == this.Shore_Data[i].Shore_Id)
        //     this.Shore_ = this.Shore_Data[i];
        // }

        for (var i = 0; i < this.Enquiry_For_Data.length; i++) {
          if (
            this.Profile_.Enquiryfor_Id ==
            this.Enquiry_For_Data[i].Enquiryfor_Id
          )
            this.Enquiry_For_ = this.Enquiry_For_Data[i];
        }

        // for (var i = 0; i < this.Passport_Mode_Data.length; i++) {
        //   if (
        //     this.Profile_.Passport_Id == this.Passport_Mode_Data[i].Passport_Id
        //   )
        //     this.Passport_Mode_ = this.Passport_Mode_Data[i];
        // }

        for (var i = 0; i < this.Spouse_Visa_Data.length; i++) {
          if (
            this.Profile_.Spouse_Visa_Id == this.Spouse_Visa_Data[i].Passport_Id
          )
            this.Spouse_Visa_ = this.Spouse_Visa_Data[i];
        }
        //console.log('this.Spouse_Visa_: ', this.Spouse_Visa_);

        // for (var i = 0; i < this.Marital_Status_Data.length; i++) {
        //   if (
        //     this.Profile_.Marital_Status_Id ==
        //     this.Marital_Status_Data[i].Marital_Status_Id
        //   )
        //     this.Marital_Status_ = this.Marital_Status_Data[i];
        // }

        //     for (var i = 0; i < this.Resume_Data.length; i++)
        //     {
        //        if (this.Student_.Resume_Id == this.Resume_Data[i].Resume_Id) {
        //            this.Resume_ = this.Resume_Data[i];
        //        }
        //    }

        // for (var i = 0; i < this.Resume_Mode_Data.length; i++) {
        //   if (this.Student_.Resume_Id == this.Resume_Mode_Data[i].Resume_Id)
        //     this.Resume_Mode_ = this.Resume_Mode_Data[i];
        // }

        //    for (var i = 0; i < this.LOR_1_Data.length; i++)
        //    {
        //       if (this.Student_.LOR_1_Id == this.LOR_1_Data[i].LOR_1_Id) {
        //           this.LOR_1_ = this.LOR_1_Data[i];
        //       }
        //   }

        // for (var i = 0; i < this.LOR_1_Mode_Data.length; i++) {
        //   if (this.Student_.LOR_1_Id == this.LOR_1_Mode_Data[i].LOR_1_Id)
        //     this.LOR_1_Mode_ = this.LOR_1_Mode_Data[i];
        // }

        //   for (var i = 0; i < this.LOR_2_Data.length; i++)
        //   {
        //      if (this.Student_.LOR_2_Id == this.LOR_2_Data[i].LOR_2_Id) {
        //          this.LOR_2_ = this.LOR_2_Data[i];
        //      }
        //  }

        // for (var i = 0; i < this.LOR_2_Mode_Data.length; i++) {
        //   if (this.Student_.LOR_2_Id == this.LOR_2_Mode_Data[i].LOR_2_Id)
        //     this.LOR_2_Mode_ = this.LOR_2_Mode_Data[i];
        // }
        //    for (var i = 0; i < this.Ielts_Data.length; i++)
        //     {
        //        if (this.Student_.Ielts_Id == this.Ielts_Data[i].Ielts_Id) {
        //            this.Ielts_ = this.Ielts_Data[i];
        //        }
        //    }
        // for (var i = 0; i < this.Ielts_Mode_Data.length; i++) {
        //   if (this.Student_.Ielts_Id == this.Ielts_Mode_Data[i].Ielts_Id)
        //     this.Ielts_Mode_ = this.Ielts_Mode_Data[i];
        // }

        //    for (var i = 0; i < this.MOI_Data.length; i++)
        //     {
        //        if (this.Student_.MOI_Id == this.MOI_Data[i].MOI_Id) {
        //            this.MOI_ = this.MOI_Data[i];
        //        }
        //    }

        // for (var i = 0; i < this.MOI_Mode_Data.length; i++) {
        //   if (this.Student_.MOI_Id == this.MOI_Mode_Data[i].MOI_Id)
        //     this.MOI_Mode_ = this.MOI_Mode_Data[i];
        // }

        // for (var i = 0; i < this.SOP_Mode_Data.length; i++) {
        //   if (this.Student_.SOP_Id == this.SOP_Mode_Data[i].SOP_Id)
        //     this.SOP_Mode_ = this.SOP_Mode_Data[i];
        // }

        //    for (var i = 0; i < this.Passport_Data.length; i++)
        //    {
        //       if (this.Student_.Passport_Id == this.Passport_Data[i].Passport_Id) {
        //           this.Passport_ = this.Passport_Data[i];
        //       }
        //   }

        // for (var i = 0; i < this.Passport_Mode_Data.length; i++) {
        //   if (
        //     this.Student_.Passport_Id == this.Passport_Mode_Data[i].Passport_Id
        //   )
        //     this.Passport_Mode_ = this.Passport_Mode_Data[i];
        // }

        // for (var i = 0; i < this.Spouse_Visa_Data.length; i++) {
        //   if (
        //     this.Student_.Spouse_Visa_Id == this.Spouse_Visa_Data[i].Passport_Id
        //   )
        //     this.Spouse_Visa_ = this.Spouse_Visa_Data[i];
        // }

        // for (var i = 0; i < this.Marital_Status_Data.length; i++) {
        //   if (
        //     this.Student_.Marital_Status_Id ==
        //     this.Marital_Status_Data[i].Marital_Status_Id
        //   )
        //     this.Marital_Status_ = this.Marital_Status_Data[i];
        // }
        // for (var i = 0; i < this.Profile_Intake_Mode_Data.length; i++) {
        //   if (
        //     this.Student_.Intake_Id ==
        //     this.Profile_Intake_Mode_Data[i].Intake_Id
        //   )
        //     this.Profile_Intake_Mode_ = this.Profile_Intake_Mode_Data[i];
        // }
        this.Profile_.Phone_Change = 0;
        this.Profile_.Email_Change = 0;
        this.Profile_.Alternative_Phone_Number_Change = 0;
        this.Profile_.Alternative_Email_Change = 0;

        // this.Profile_Country_Temp.Country_Id = this.Profile_.Country_Id;
        // this.Profile_Country_Temp.Country_Name = this.Profile_.Country_Name;
        // this.Profile_Country_ = Object.assign({}, this.Profile_Country_Temp);
        this.Profile_University_Temp.Country_Id = this.Profile_.Proceeding_University_Id;
        this.Profile_University_Temp.Country_Name = this.Profile_.Proceeding_University_Name;
        this.Profile_University_ = Object.assign({}, this.Profile_University_Temp);
        this.DSE_Users_Temp_Data.User_Details_Id = this.Profile_.Proceeding_Intake_Id;
        this.DSE_Users_Temp_Data.User_Details_Name = this.Profile_.Proceeding_Intake_Name;
        // this.DSE_Users_ = Object.assign({}, this.DSE_Users_Temp_Data);
        this.Program_Course_Temp.Course_Id = this.Profile_.Program_Course_Id;
        this.Program_Course_Temp.Course_Name = this.Profile_.Program_Course_Name;
        this.Program_Course_ = Object.assign({}, this.Program_Course_Temp);
        this.Enquiry_Status_Change();
        this.Brand_Temp.Brand_Id = this.Profile_.Brand_Id;
        this.Brand_Temp.Brand_Name = this.Profile_.Brand_Name;
        this.Brand_ = Object.assign({}, this.Brand_Temp);
        this.Model_Temp.Country_Id = this.Profile_.Country_Id;
        this.Model_Temp.Country_Name = this.Profile_.Country_Name;
        this.Model_ = Object.assign({}, this.Model_Temp);
        this.DSE_Data_Temp.DSE_Id = this.Profile_.DSE_Id;
        this.DSE_Data_Temp.DSE_Name = this.Profile_.DSE_Name;
        this.DSE_Data_ = Object.assign({}, this.DSE_Data_Temp);
        this.User_Profile_Location_Temp_.Location_Id = this.Profile_.Location_Id;
        this.User_Profile_Location_Temp_.Location_Name = this.Profile_.Location_Name;
        this.User_Profile_Location_ = Object.assign({}, this.User_Profile_Location_Temp_);
        // this.Brand_ = Object.assign({}, this.Program_Course_Temp);
        // for (var i = 0; i < this.User_Profile_Location_Data.length; i++) {
        //   if (this.Profile_.Location_Id == this.User_Profile_Location_Data[i].Location_Id) {
        //     this.User_Profile_Location_ = this.User_Profile_Location_Data[i];
        //   }
        // }
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
  // Search_Status_Typeahead(event: any)
  // {
  //     var Value = "";
  //     if (event.target.value == "")
  //         Value = "";
  //     else
  //         Value = event.target.value.toLowerCase();
  //     if (this.Followup_Status_Data == undefined || this.Followup_Status_Data.length==0)
  //     {
  //         this.issLoading = true;
  //         this.Student_Service_.Search_Status_Typeahead('',3).subscribe(Rows => {
  //         if (Rows != null)
  //         {
  //             this.Followup_Status_Data = Rows[0];
  //             this.issLoading = false;
  //             this.Followup_Status_Data_filter=[];
  //             for (var i=0;i<this.Followup_Status_Data.length;i++)
  //             {
  //                 if(this.Followup_Status_Data[i].Status_Name.toLowerCase().includes(Value))
  //                     this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i])
  //             }
  //         }
  //     },
  //     Rows => {
  //      this.issLoading = false;
  //     });
  //     }
  //     else
  //     {
  //         this.Followup_Status_Data_filter=[];
  //         for (var i=0;i<this.Followup_Status_Data.length;i++)
  //         {
  //             if(this.Followup_Status_Data[i].Status_Name.toLowerCase().includes(Value))
  //                 this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i])
  //         }
  //     }

  // }

  University_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();
    if (
      this.Country_ == null ||
      this.Country_.Country_Id == 0 ||
      this.Level_Detail_ == null ||
      this.Level_Detail_.Level_Detail_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Country and Level", Type: "3" },
      });
    } else if (
      this.University_Data == undefined ||
      this.University_Data.length == 0
    ) {
      this.issLoading = true;

      this.University_Service_.University_Typeahead_with_Level_Country(
        this.Country_.Country_Id,
        this.Level_Detail_.Level_Detail_Id,
        Value
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.University_Data = Rows[0];
            this.issLoading = false;
            this.University_Data_Filter = [];
            for (var i = 0; i < this.University_Data.length; i++) {
              if (
                this.University_Data[i].University_Name.toLowerCase().includes(
                  Value
                )
              )
                this.University_Data_Filter.push(this.University_Data[i]);
            }
          }
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    } else {
      this.University_Data_Filter = [];
      for (var i = 0; i < this.University_Data.length; i++) {
        if (
          this.University_Data[i].University_Name.toLowerCase().includes(Value)
        )
          this.University_Data_Filter.push(this.University_Data[i]);
      }
    }
  }
  display_University(University_e: University) {
    if (University_e) {
      return University_e.University_Name;
    }
  }
  Remarks_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();
    if (this.Remarks_Data == undefined || this.Remarks_Data.length == 0) {
      this.issLoading = true;
      this.Student_Service_.Remarks_Typeahead(Value).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.Remarks_Data = Rows[0];
            this.Remarks_Data_Filter = [];
            this.issLoading = false;
            for (var i = 0; i < this.Remarks_Data.length; i++) {
              if (
                this.Remarks_Data[i].Remarks_Name.toLowerCase().includes(Value)
              )
                this.Remarks_Data_Filter.push(this.Remarks_Data[i]);
            }
          }
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    } else {
      this.Remarks_Data_Filter = [];
      for (var i = 0; i < this.Remarks_Data.length; i++) {
        if (this.Remarks_Data[i].Remarks_Name.toLowerCase().includes(Value))
          this.Remarks_Data_Filter.push(this.Remarks_Data[i]);
      }
    }
  }
  display_Remarks(Remarks_e: Remarks) {
    if (Remarks_e) {
      return Remarks_e.Remarks_Name;
    }
  }

  Agent_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;
    this.issLoading = true;

    this.Client_Accounts_Service.Agent_Typeahead(Value).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Client_Accounts_Data = Rows[0];
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  display_Agent(Client_Accounts_e: Client_Accounts) {
    if (Client_Accounts_e) {
      return Client_Accounts_e.Client_Accounts_Name;
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

  Search_Application_StatusforChangeStatus_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    if (
      this.Department_Status_Mode_Data1 == undefined ||
      this.Department_Status_Mode_Data1.length == 0
    ) {
      this.issLoading = true;

      this.Country_Service_.Search_Application_StatusforChangeStatus_Typeahead(
        Value,
        this.Login_User
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.Department_Status_Mode_Data1 = Rows[0];
            this.Department_Status_Mode_Data1_Filter = [];
            for (var i = 0; i < this.Department_Status_Mode_Data1.length; i++) {
              if (
                this.Department_Status_Mode_Data1[
                  i
                ].Department_Status_Name.toLowerCase().includes(Value)
              )
                this.Department_Status_Mode_Data1_Filter.push(
                  this.Department_Status_Mode_Data1[i]
                );
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
        if (
          this.Department_Status_Mode_Data1[
            i
          ].Department_Status_Name.toLowerCase().includes(Value)
        )
          this.Department_Status_Mode_Data1_Filter.push(
            this.Department_Status_Mode_Data1[i]
          );
      }
    }
  }
  Status_Change_Application() {

    if (this.Department_Status_Mode1_ != null || this.Department_Status_Mode1_ != undefined) {
      if (this.Department_Status_Mode1_.FollowUp == true) this.Is_Follow_Application = 1;
      else this.Is_Follow_Application = 0;
    } else {
      this.Is_Follow_Application = 0;
    }
  }
  display_Application_Status(Application_Status_e: Department_Status) {
    if (Application_Status_e) {
      return Application_Status_e.Department_Status_Name;
    }
  }

  Task_Item_Dropdown(Task_Group_Id) {
    this.issLoading = true;
    this.Student_Service_.Task_Item_Dropdown(Task_Group_Id).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Task_Item_Data_search = Rows[0];
          this.Task_Item_Temp.Task_Item_Id = 0;
          this.Task_Item_Temp.Task_Item_Name = "Select";
          this.Task_Item_Data_search.unshift(this.Task_Item_Temp);

          this.Task_Item_ = this.Task_Item_Data_search[0];
          this.Task_Item_search_ = this.Task_Item_Data_search[0];
          this.Task_Item_search_Tasknew_ = this.Task_Item_Data_search[0];
          this.issLoading = false;

          if (this.Task_Item_Id_ > 0) {
            for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
              if (
                this.Task_Item_Data_search[i].Task_Item_Id == this.Task_Item_Id_
              )
                this.Task_Item_ = this.Task_Item_Data_search[i];
            }
          } else this.Task_Item_ = this.Task_Item_Data_search[1];

          // this.Search_Task_Data()
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  Country_Change1() {
    // Reset values
    this.University_1 = null;
    this.University_Data = [];
    this.University_Data_Filter_2 = [];
    // this.Intake_Mode_Data_Filter = [];
    // this.combinedIntakeData = [];

    //   this.Intake_Service_.getIntakeByCountry(this.Application_Country_.Country_Id)
    // 	.subscribe(
    // 	  (intakeData: any) => {
    // 		// Since Intake_Mode_Data_Filter already contains the combined data we need
    // 		if (intakeData && Array.isArray(intakeData) && intakeData.length > 0) {
    // 		  this.combinedIntakeData = intakeData[0];

    // 		  // Log for verification
    // 		  console.log('Combined Intake Data:', this.combinedIntakeData);
    // 		}
    // 	  },
    // 	  (error) => {
    // 		console.error('Error fetching intake data:', error);
    // 	  }
    // 	);
  }
  Search_Courses_Typeahead_tempp(event: any) {
    var Value = "";
    // debugger;
    if (
      this.University_1 == undefined ||
      this.University_1 == null ||
      this.University_1.University_Id == undefined ||
      this.University_1.University_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select University", Type: "3" },
      });
      return;
    }
    // debugger;
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();
    if (this.Course_Data == undefined || this.Course_Data.length == 0) {
      this.issLoading = true;
      // debugger;
      this.Course_Service_.Search_Courses_Typeahead_tempp(
        Value,
        this.University_1.University_Id
      ).subscribe(
        (Rows) => {
          // debugger;
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
  // display_Course_1(Course_e: Course) {
  // 	if (Course_e) {
  // 		return Course_e.Course_Name;
  // 	}
  // }

  onUniversityChange() {
    this.Course_ = null;
    this.Course_Data = [];
    this.Course_Data_Filter = [];
    // this.Intake_Mode_Data_Filter = [];
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
      Value = Value.trim();
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
      Value = Value.trim();
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

  Search_Courses_Fees_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    // if (this.Fees_Course_Data == undefined || this.Fees_Course_Data.length == 0) {
    this.issLoading = true;

    this.Course_Service_.Search_Courses_Fees_Typeahead(
      Value,
      this.Student_Id
    ).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Fees_Course_Data = Rows[0];
          this.Course_Fees_Data_Filter = [];
          for (var i = 0; i < this.Fees_Course_Data.length; i++) {
            if (
              this.Fees_Course_Data[i].Course_Name.toLowerCase().includes(Value)
            )
              this.Course_Fees_Data_Filter.push(this.Fees_Course_Data[i]);
          }
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
    // }

    // else {
    //
    //  this.Course_Fees_Data_Filter = [];
    //  for (var i = 0; i < this.Fees_Course_Data.length; i++) {
    //      if (this.Fees_Course_Data[i].Course_Name.toLowerCase().includes(Value))
    //          this.Course_Fees_Data_Filter.push(this.Fees_Course_Data[i]);
    //  }
    // }
  }
  display_Course_Fees(Course_F: Applicationdetails) {
    if (Course_F) {
      return Course_F.Course_Name;
    }
  }

  Search_Subject_Typeahead() { }

  Subject_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;
    this.issLoading = true;

    this.Subject_Service_.Subject_Typeahead(Value).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Subject_Data = Rows[0];
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  display_Subject(Subject_e: Subject) {
    if (Subject_e) {
      return Subject_e.Subject_Name;
    }
  }

  Delete_Student(Student_Id, index) {
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
        this.Student_Service_.Delete_Student(Student_Id).subscribe(
          (Delete_status) => {
            if (Delete_status[0][0].Student_Id_ > 0) {
              this.Total_Rows = this.Total_Rows - this.Student_Data.length;
              this.Student_Data.splice(this.EditIndex, 1);

              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Clr_Student();
              this.Search_Student(1);
              this.Close_Click();
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  // Delete_Student_Document(index, Student_Document_Id) {
  // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 		panelClass: "Dialogbox-Class",
  // 		data: {
  // 			Message: "Do you want to delete ?",
  // 			Type: true,
  // 			Heading: "Confirm",
  // 		},
  // 	});
  // 	dialogRef.afterClosed().subscribe((result) => {
  // 		if (result == "Yes") {
  // 			this.issLoading = true;

  // 			if (Student_Document_Id > 0) {
  // 				this.Student_Service_.Delete_Student_Document(
  // 					Student_Document_Id
  // 				).subscribe(
  // 					(Delete_status) => {
  // 						if (Delete_status[0][0].Student_Document_Id_ > 0) {
  // 							this.Document_Array.splice(index, 1);
  // 							this.Document_File_Array.splice(index, 1);
  // 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 								panelClass: "Dialogbox-Class",
  // 								data: { Message: "Deleted", Type: "false" },
  // 							});
  // 						} else {
  // 							this.issLoading = false;
  // 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 								panelClass: "Dialogbox-Class",
  // 								data: { Message: "Error Occured", Type: "2" },
  // 							});
  // 						}
  // 						this.issLoading = false;
  // 					},
  // 					(Rows) => {
  // 						this.issLoading = false;
  // 						const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 							panelClass: "Dialogbox-Class",
  // 							data: { Message: "Error Occured", Type: "2" },
  // 						});
  // 					}
  // 				);
  // 			} else {
  // 				this.Document_Array.splice(index, 1);
  // 				this.Document_File_Array.splice(index, 1);
  // 				this.issLoading = false;
  // 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 					panelClass: "Dialogbox-Class",
  // 					data: { Message: "Deleted", Type: "false" },
  // 				});
  // 			}
  // 		}
  // 	});
  // }

  Delete_Application_Document(index, Application_Document_Id) {
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

        if (Application_Document_Id > 0) {
          this.Student_Service_.Delete_Application_Document(
            Application_Document_Id
          ).subscribe(
            (Delete_status) => {
              if (Number(Delete_status[0][0].Application_Document_Id_) > 0) {
                this.ApplicationDocument_Array.splice(index, 1);
                this.ApplicationDocument_File_Array.splice(index, 1);
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Deleted", Type: "false" },
                });
              } else {
                this.issLoading = false;
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
                data: { Message: "Error Occured", Type: "2" },
              });
            }
          );
        } else {
          this.ApplicationDocument_Array.splice(index, 1);
          this.ApplicationDocument_File_Array.splice(index, 1);
          this.issLoading = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Deleted", Type: "false" },
          });
        }
      }
    });
  }

  Delete_FeesRecepit_Document(index, Feesreceipt_document_Id) {
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

        if (Feesreceipt_document_Id > 0) {
          this.Student_Service_.Delete_FeesRecepit_Document(
            Feesreceipt_document_Id
          ).subscribe(
            (Delete_status) => {
              if (Number(Delete_status[0][0].Feesreceipt_document_Id_) > 0) {
                this.FeesreceiptDocument_Array.splice(index, 1);
                this.FeesreceiptDocument_File_Array.splice(index, 1);
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Deleted", Type: "false" },
                });
              } else {
                this.issLoading = false;
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
                data: { Message: "Error Occured", Type: "2" },
              });
            }
          );
        } else {
          this.FeesreceiptDocument_Array.splice(index, 1);
          this.FeesreceiptDocument_File_Array.splice(index, 1);
          this.issLoading = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Deleted", Type: "false" },
          });
        }
      }
    });
  }
  Delete_File1(index) { }
  Get_Fees_Receipt(Fees_Receipt_Id) {
    this.issLoading = true;
    this.Student_Service_.Get_Fees_Receipt(Fees_Receipt_Id).subscribe(
      (Rows) => { },

      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  Edit_Fees_Receipt(Fees_Receipt_e: Fees_Receipt, index) {
    // this.Entry_View=true;
    // this.Fees_Receipt_=Fees_Receipt_e;
    this.Create_Fees();
    this.Fees_Receipt_ = Fees_Receipt_e;
    this.Fees_Receipt_ = Object.assign({}, Fees_Receipt_e);
    if (this.Fees_Receipt_.Entry_date == null) {
      this.Fees_Receipt_.Entry_date = new Date();
      this.Fees_Receipt_.Entry_date = this.New_Date(
        this.Fees_Receipt_.Entry_date
      );
    } else
      this.Fees_Receipt_.Entry_date = this.New_Date(
        new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
      );
    this.feesreceiptdocument_.FeesreceiptDocument_Description =
      this.FeesreceiptDocument_Description;

    this.Get_Feesrecepit_DocumentList(this.Fees_Receipt_.Fees_Receipt_Id);

    // this.Get_Fees_Receipt(this.Receipt_data_.Fees_Receipt_Id);
    for (var i = 0; i < this.Fees_Array.length; i++) {
      if (this.Fees_Receipt_.Fees_Id == this.Fees_Array[i].Fees_Id)
        this.Fees_Data_ = this.Fees_Array[i];
    }

    for (var i = 0; i < this.To_Account_Data.length; i++) {
      if (
        this.Fees_Receipt_.To_Account_Id ==
        this.To_Account_Data[i].Client_Accounts_Id
      )
        this.To_Account_ = this.To_Account_Data[i];
    }

    for (var i = 0; i < this.Currency_Data.length; i++) {
      if (this.Fees_Receipt_.Currency_Id == this.Currency_Data[i].Currency_Id)
        this.Currency_ = this.Currency_Data[i];
    }

    // this.Fees_Course_Temp.Course_Id = this.ApplicationDetails_.Course_Id;
    this.Fees_Course_Temp.Course_Name = this.Fees_Receipt_.Course_Name;
    this.Fees_Course_Temp.Application_details_Id =
      this.Fees_Receipt_.Application_details_Id;
    this.Fees_Course_ = Object.assign({}, this.Fees_Course_Temp);
  }

  Edit_Commission_Receipt(Fees_Receipt_e: Fees_Receipt, index) {
    // this.Entry_View=true;
    // this.Fees_Receipt_=Fees_Receipt_e;
    this.Create_Commission();
    this.Commission_Receipt_ = Fees_Receipt_e;
    this.Commission_Receipt_ = Object.assign({}, Fees_Receipt_e);
    if (this.Commission_Receipt_.Entry_date == null) {
      this.Commission_Receipt_.Entry_date = new Date();
      this.Commission_Receipt_.Entry_date = this.New_Date(
        this.Commission_Receipt_.Entry_date
      );
    } else
      this.Commission_Receipt_.Entry_date = this.New_Date(
        new Date(
          moment(this.Commission_Receipt_.Entry_date).format("YYYY-MM-DD")
        )
      );
    this.feesreceiptdocument_.FeesreceiptDocument_Description =
      this.FeesreceiptDocument_Description;

    // this.Get_Feesrecepit_DocumentList(this.Commission_Receipt_.Fees_Receipt_Id);

    // this.Get_Fees_Receipt(this.Receipt_data_.Fees_Receipt_Id);
    for (var i = 0; i < this.Commission_Array.length; i++) {
      if (
        this.Commission_Receipt_.Commission_Id ==
        this.Commission_Array[i].Commission_Id
      )
        this.Commission_Data_ = this.Commission_Array[i];
    }

    for (var i = 0; i < this.To_Account_Data.length; i++) {
      if (
        this.Commission_Receipt_.To_Account_Id ==
        this.To_Account_Data[i].Client_Accounts_Id
      )
        this.To_Account_ = this.To_Account_Data[i];
    }

    for (var i = 0; i < this.Currency_Data.length; i++) {
      if (
        this.Commission_Receipt_.Currency_Id ==
        this.Currency_Data[i].Currency_Id
      )
        this.Currency_ = this.Currency_Data[i];
    }

    // this.Fees_Course_Temp.Course_Id = this.ApplicationDetails_.Course_Id;
    this.Fees_Course_Temp.Course_Name = this.Commission_Receipt_.Course_Name;
    this.Fees_Course_Temp.Application_details_Id =
      this.Commission_Receipt_.Application_details_Id;
    this.Fees_Course_ = Object.assign({}, this.Fees_Course_Temp);
  }

  Delete_Receipt(Fees_Receipt_Id, Application_details_Id, index) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to delete ?",
        Type: true,
        Heading: "Confirm",
      },
    });
    this.Search_Receipt();
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Student_Service_.Delete_Receipt(
          Fees_Receipt_Id,
          Application_details_Id
        ).subscribe(
          (Delete_status) => {
            // log(Delete_status)
            if (Delete_status[0][0].Fees_Receipt_Id_ > 0) {
              // this.Fees_Receipt_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Search_Receipt();
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  Duplicate_Application_Details() {
    // this.ApplicationDetails_.Offer_Received = false;
    this.ApplicationDetails_.Application_details_Id = 0;

    // Resetting the fields
    this.Course_ = null; // Clearing the 'Course_' field
    // Add any other fields you want to clear here

    // Optionally, if you need to reset other variables or perform additional actions, do so here.
    console.log("Application details have been duplicated and cleared.");
  }

  Delete_Commission(Fees_Receipt_Id, Application_details_Id, index) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to delete ?",
        Type: true,
        Heading: "Confirm",
      },
    });
    this.Search_Receipt();
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Student_Service_.Delete_Commission(
          Fees_Receipt_Id,
          Application_details_Id
        ).subscribe(
          (Delete_status) => {
            // log(Delete_status)
            if (Delete_status[0][0].Fees_Receipt_Id_ > 0) {
              // this.Fees_Receipt_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Search_Commission();
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  Level_Change() {
    this.University_ = null;
    this.University_Data_Filter = [];
    this.University_Data = [];
  }
  Country_Change() {
    this.University_ = null;
    this.University_Data_Filter = [];
    this.University_Data = [];
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
    if (Branch_T.Default_User_Id != 0 || Branch_T.Default_User_Name != "") {
      this.Followup_Users_temp.User_Details_Id = Branch_T.Default_User_Id;
      this.Followup_Users_temp.User_Details_Name = Branch_T.Default_User_Name;
      this.Followup_Users_ = Object.assign({}, this.Followup_Users_temp);
    } else {
      this.Followup_Users_ = null;
      this.Followup_Users_Task_ = null;
      this.FollowUp_Department_Task_ = null;
    }

    if (Branch_T.Default_User_Id != 0 || Branch_T.Default_User_Name != "") {

      this.Followup_Users_temp.User_Details_Id = Branch_T.Default_User_Id;
      this.Followup_Users_temp.User_Details_Name = Branch_T.Default_User_Name;
      this.Followup_Users_List_ = Object.assign({}, this.Followup_Users_temp);

    }
    else {
      this.Followup_Users_List_ = null
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
    this.FollowUp_Department_ = null;
    // this.Followup_Users_ = null;
    // this.FollowUp_Status_ = null;
    this.Followup_Department_Data = [];
    this.Followup_Department_Data_Check = [];
    // this.Followup_Users_Data = [];
    // this.Followup_Status_Data = [];
    // this.DefaultDept_Data = [];
    this.Department_Change();
  }
  Focus_It() {
    setTimeout("$('[name=Followup_Status]').focus();", 0);
  }
  Department_Change() {
    this.Followup_Users_ = null;
    this.Followup_Users_Task_ = null;
    this.FollowUp_Status_ = null;
    this.Followup_Users_Data = [];
    this.Followup_Users_Data_t = [];
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
    this.Status_Change();
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


  Load_Default_Department() {
    if (!this.FollowUp_Branch_ || !this.FollowUp_Branch_.Branch_Id) {
      return;
    }
    // debugger
    this.issLoading = true;
    this.Student_Service_.Search_Chanel_Department_Typeahead(
      this.FollowUp_Branch_.Branch_Id,
      this.Login_User,
      ""
    ).subscribe(
      (Rows) => {
        // debugger
        if (Rows != null && Rows[0]) {
          this.Followup_Department_Data = Rows[0];

          // Find and set the department matching Login_Department from localStorage
          const defaultDepartment = this.Followup_Department_Data.find(
            dept => dept.Department_Id === this.Login_Department
          );

          if (defaultDepartment) {
            this.FollowUp_Department_ = defaultDepartment;
            console.log("Default Department Set:", this.FollowUp_Department_);
          }
          this.issLoading = false;
        }
      },
      (error) => {
        this.issLoading = false;
        console.error("Error loading department data:", error);
      }
    );
  }
  Search_Branch_Department_Typeahead_Byusers(event: any, source: number) {
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
      if (
        this.Followup_Department_Data == undefined ||
        this.Followup_Department_Data.length == 0
      ) {
        // if (
        // 	this.Followup_Department_Data_Check == undefined ||
        // 	this.Followup_Department_Data_Check.length == 0
        // ) {
        this.issLoading = true;
        // debugger;
        this.Student_Service_.Search_Branch_Department_Typeahead_Byusers(
          this.FollowUp_Branch_.Branch_Id, Value, this.Login_User_Id, this.Usertype
        ).subscribe(
          (Rows) => {
            if (Rows != null) {
              // debugger;
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
        // } else {
        // 	this.Followup_Department_Data = this.Followup_Department_Data_Check;
        // }
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

  Search_Chanel_Department_Typeahead(event: any, source: number) {
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
      if (
        this.Followup_Department_Data == undefined ||
        this.Followup_Department_Data.length == 0
      ) {
        this.issLoading = true;
        this.Student_Service_.Search_Chanel_Department_Typeahead(
          this.FollowUp_Branch_.Branch_Id, this.Login_User, Value
        ).subscribe(
          (Rows) => {
            if (Rows != null) {
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

  Search_Branch_Department_Typeaheadnew(event: any, source: number) {
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
      if (
        this.Followup_Department_Data == undefined ||
        this.Followup_Department_Data.length == 0
      ) {
        this.issLoading = true;
        this.Student_Service_.Search_Branch_Department_Typeaheadnew(
          this.FollowUp_Branch_.Branch_Id, this.Login_User_Id, Value
        ).subscribe(
          (Rows) => {
            if (Rows != null) {
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
        // } else {
        // 	this.Followup_Department_Data = this.Followup_Department_Data_Check;
        // }
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

  Search_Branch_Department_Typeahead_Task(event: any, source: number) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    if (
      this.FollowUp_Branch_Task_ == null ||
      this.FollowUp_Branch_Task_.Branch_Id == undefined
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
          this.FollowUp_Branch_Task_.Branch_Id,
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
        // } else {
        // 	this.Followup_Department_Data = this.Followup_Department_Data_Check;
        // }
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
  display_DepartmentT(Department_t: Student_FollowUp) {
    if (Department_t) {
      return Department_t.Dept_Name;
    }
  }

  // Search_BranchDefaultDepartment_Typeahead(event: any) {
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
  // 			this.Department_Service_.Search_BranchDefaultDepartment_Typeahead(this.Branch_Id).subscribe(
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

  // display_Defultusers(defaultuser: User_Details) {
  //
  // 	if (defaultuser) {
  //
  // 		return defaultuser.User_Details_Name;
  // 	}
  // }

  Search_BranchDefaultDepartment_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    if (
      this.DefaultDept_Data == undefined ||
      this.DefaultDept_Data.length == 0
    ) {
      this.issLoading = true;

      this.Department_Service_.Search_BranchDefaultDepartment_Typeahead(
        this.FollowUp_Branch_.Branch_Id
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.DefaultDept_Data = Rows[0];
            this.Default_dep_id =
              this.DefaultDept_Data[0].Default_Department_Id;
            this.issLoading = false;
          }
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    }
  }

  display_Defultdept(defaultdept: Branch) {
    if (defaultdept) {
      return defaultdept.Default_Department_Name;
    }
  }

  Search_DefaultDepartmentStatus_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    if (
      this.DefaultStatus_Data == undefined ||
      this.DefaultStatus_Data.length == 0
    ) {
      this.issLoading = true;

      this.Department_Service_.Search_DefaultDepartmentStatus_Typeahead(
        this.FollowUp_Branch_.Branch_Id,
        this.Default_dep_id
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.DefaultStatus_Data = Rows[0];
            this.issLoading = false;
          }
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    }
  }

  display_Defultstatus(defaultstatus: Branch) {
    if (defaultstatus) {
      return defaultstatus.Default_Status_Name;
    }
  }

  Search_DefaultDepartment_User_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    if (
      this.DefaultUsers_Data == undefined ||
      this.DefaultUsers_Data.length == 0
    ) {
      this.issLoading = true;

      this.Department_Service_.Search_DefaultDepartment_User_Typeahead(
        this.Default_dep_id
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.DefaultUsers_Data = Rows[0];
            this.issLoading = false;
          }
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    }
  }

  defaultusers(defaultusers: Branch) {
    if (defaultusers) {
      return defaultusers.Default_User_Name;
    }
  }

  Search_Department_Status_Typeahead(event: any, source: number) {
    if (this.Round_Robin_Status == 1) {
      this.Typeahead_Department_Id = this.Login_Department;
    } else {
      this.Typeahead_Department_Id = this.FollowUp_Department_.Department_Id;
    }

    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    /*if (
      this.FollowUp_Department_ == null ||
      this.FollowUp_Department_.Department_Id == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Department", Type: "3" },
      });
    } 
  	
    else {*/
    if (
      this.Followup_Status_Data == undefined ||
      this.Followup_Status_Data.length == 0
    ) {
      this.issLoading = true;

      this.Student_Service_.Search_Department_Status_Typeahead(
        this.Typeahead_Department_Id,
        Value
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.Followup_Status_Data = Rows[0];
            this.Followup_Status_Data_filter = [];
            this.issLoading = false;
            if (source == 1) {
              for (var i = 0; i < this.Followup_Status_Data.length; i++) {
                if (
                  this.Followup_Status_Data[
                    i
                  ].Department_Status_Name.toLowerCase().includes(Value)
                )
                  this.Followup_Status_Data_filter.push(
                    this.Followup_Status_Data[i]
                  );
              }
            } else {
              this.Followup_Status_Data_filter = Rows[0];
            }
          }
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    } else {
      if (source == 1) {
        this.Followup_Status_Data_filter = [];
        for (var i = 0; i < this.Followup_Status_Data.length; i++) {
          if (
            this.Followup_Status_Data[
              i
            ].Department_Status_Name.toLowerCase().includes(Value)
          )
            this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i]);
        }
      } else {
        this.Followup_Status_Data_filter = [];
        for (var i = 0; i < this.Followup_Status_Data.length; i++) {
          this.Followup_Status_Data_filter.push(this.Followup_Status_Data[i]);
        }
      }
    }
    //}
  }

  Search_Department_Transfer_Status_Typeahead(event: any) {
    var Value = "";
    this.Followup_Substatus_Data_Filter1 = [];
    this.Followup_Substatus_Data1 = [];
    this.Transfer_Status_k = null;

    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    if (
      this.Transfer_department_Id == null ||
      this.Transfer_department_Id == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Department", Type: "3" },
      });
    } else {
      if (
        this.Followup_Transfer_Status_Data == undefined ||
        this.Followup_Transfer_Status_Data.length == 0
      ) {
        this.issLoading = true;

        this.Student_Service_.Search_Department_Transfer_Status_Typeahead(
          this.Transfer_department_Id,
          ""
        ).subscribe(
          (Rows) => {
            if (Rows != null) {
              this.Followup_Transfer_Status_Data = Rows[0];
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

  display_Followup_Status(Status_t: Department_Status) {
    if (Status_t) {
      return Status_t.Department_Status_Name;
    }
  }
  display_Followup_Status_transfer(Status_: Department_Status) {
    if (Status_) {
      return Status_.Department_Status_Name;
    }
  }
  // Search_Substatus_Typeahead(event: any) {
  // 	// var Value = "";
  // 	// if (event.target.value == "") Value = undefined;
  // 	// else Value = event.target.value;
  // 	//
  // 	// if (
  // 	// 	this.FollowUp_Sub_Status_ == null ||
  // 	// 	this.FollowUp_Sub_Status_.Sub_Status_Id == undefined
  // 	// ) {
  // 	// 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 	// 		panelClass: "Dialogbox-Class",
  // 	// 		data: { Message: "Select Sub Status", Type: "3" },
  // 	// 	});
  // //	} else {
  // 		if (
  // 			this.Followup_Substatus_Data == undefined ||
  // 			this.Followup_Substatus_Data.length == 0
  // 		) {
  // 			this.issLoading = true;
  //
  // 			this.Student_Service_.Search_Substatus_Typeahead(
  // 				this.FollowUp_Department_.Department_Status_Id,
  // 				""
  // 			).subscribe(
  // 				(Rows) => {
  // 					if (Rows != null) {
  //
  // 						this.Followup_Substatus_Data = Rows[0];
  // 						this.issLoading = false;
  // 					}
  // 				},
  // 				(Rows) => {
  // 					this.issLoading = false;
  // 				}
  // 			);
  // 		}
  // 	//}
  // }

  // Search_Substatus_Typeahead(event: any) {

  // 	var Value = "";

  //  if (this.FollowUp_Status_.Department_Status_Id == undefined ||this.FollowUp_Status_.Department_Status_Id == 0) {
  //

  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 	panelClass: "Dialogbox-Class",
  // 	data: { Message: "Select Status ", Type: "3" },
  // 	});
  // 	return;
  // 	} else if (
  // 	this.Followup_Substatus_Data == undefined ||
  // 	this.Followup_Substatus_Data.length == 0
  // 	) {
  // 	this.issLoading = true;

  //  this.sub_typeahead=this.FollowUp_Status_.Department_Status_Id;

  // 	this.Student_Service_.Search_Substatus_Typeahead(

  // 	this.sub_typeahead,""
  // 	).subscribe(

  // 	(Rows) => {

  // 	if (Rows != null) {

  // 	this.Followup_Substatus_Data = Rows[0];

  // 	this.Followup_Substatus_Data_Filter = [];
  // 	this.issLoading = false;
  // 	for (var i = 0; i < this.Followup_Substatus_Data.length; i++) {
  // 	if (
  // 	this.Followup_Substatus_Data[
  // 	i
  // 	].Sub_Status_Name.toLowerCase().includes(Value)
  // 	)
  // 	this.Followup_Substatus_Data_Filter.push(
  // 	this.Followup_Substatus_Data[i]
  // 	);
  // 	}
  // 	}
  // 	},
  // 	(Rows) => {
  // 	this.issLoading = false;
  // 	}
  // 	);
  // 	} else {
  // 	this.Followup_Substatus_Data_Filter = [];
  // 	for (var i = 0; i < this.Followup_Substatus_Data.length; i++) {
  // 	if (
  // 	this.Followup_Substatus_Data[i].Sub_Status_Name.toLowerCase().includes(
  // 	Value
  // 	)
  // 	)
  // 	this.Followup_Substatus_Data_Filter.push(this.Followup_Substatus_Data[i]);
  // 	}
  // 	}
  // 	}

  Search_Substatus_Typeahead_Transfer(event: any) {
    var Value = "";
    // if (event.target.value == "") Value = "";
    // else Value = event.target.value.toLowerCase();
    if (
      this.Transfer_Status_.Department_Status_Id == undefined ||
      this.Transfer_Status_.Department_Status_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Status ", Type: "3" },
      });
      return;
    } else if (
      this.Followup_Substatus_Data1 == undefined ||
      this.Followup_Substatus_Data1.length == 0
    ) {
      this.issLoading = true;

      this.sub_typeahead = this.Transfer_Status_.Department_Status_Id;

      this.Student_Service_.Search_Substatus_Typeahead(
        this.sub_typeahead,
        ""
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.Followup_Substatus_Data1 = Rows[0];

            this.Followup_Substatus_Data_Filter1 = [];
            this.issLoading = false;
            for (var i = 0; i < this.Followup_Substatus_Data1.length; i++) {
              if (
                this.Followup_Substatus_Data1[
                  i
                ].Sub_Status_Name.toLowerCase().includes(Value)
              )
                this.Followup_Substatus_Data_Filter1.push(
                  this.Followup_Substatus_Data1[i]
                );
            }
          }
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    } else {
      this.Followup_Substatus_Data_Filter1 = [];
      for (var i = 0; i < this.Followup_Substatus_Data1.length; i++) {
        if (
          this.Followup_Substatus_Data1[
            i
          ].Sub_Status_Name.toLowerCase().includes(Value)
        )
          this.Followup_Substatus_Data_Filter1.push(
            this.Followup_Substatus_Data1[i]
          );
      }
    }
  }

  datepickershow(Status) {
    this.Followup_sub = Status.FollowUp;
    this.Duration = Status.Duration;
  }

  display_Sub_Status(Sub_Status_tr: Sub_Status) {
    if (Sub_Status_tr) {
      return Sub_Status_tr.Sub_Status_Name;
    }
  }

  display_Sub_Status_transfer(Sub_Status_t_: Sub_Status) {
    if (Sub_Status_t_) {
      return Sub_Status_t_.Sub_Status_Name;
    }
  }

  Enquiry_Status_Change() {
    // debugger;
    if (this.Program_Course_.Course_Id == 13)
      this.IsTransferDate = 1;
    else
      this.IsTransferDate = 0;
  }

  Status_Change() {
    var nextfoldate = new Date();
    var nxtfoldate;
    var Status_Id = 0, Department_Id = 0, Student_Id = 0;
    this.FollowUp_Sub_Status_ = null;
    this.FollowUp_Sub_Status_Transfer_ = null;
    this.Followup_Substatus_Data_Filter = [];
    this.Followup_Substatus_Data_Filter_Transfer = [];
    this.Followup_Substatus_Data = [];
    this.FollowUp_.Duration = 0;
    // console.log('this.FollowUp_Status_: ', this.FollowUp_Status_);
    // if (this.FollowUp_Status_.FollowUp == "1")
    // 	this.Is_Follow_Status_ = 1;
    // else this.Is_Follow_Status_ = 0;

    if (this.FollowUp_Status_ != null || this.FollowUp_Status_ != undefined) {
      if (this.FollowUp_Status_.Department_Status_Id != null || this.FollowUp_Status_.Department_Status_Id != undefined)
        Status_Id = this.FollowUp_Status_.Department_Status_Id;
      if (this.FollowUp_Status_.FollowUp == true)
        this.Is_Follow_ = 1;
      else this.Is_Follow_ = 0;
      if (this.FollowUp_Status_.Duration == true) this.Is_Duration_ = 1;
      else this.Is_Duration_ = 0;
    } else {
      this.Is_Follow_ = 0;
      this.Is_Duration_ = 0;
      Status_Id = 0;
    }
    if (this.FollowUp_Department_ != null || this.FollowUp_Department_ != undefined) {
      if (this.FollowUp_Department_.Department_Id != null || this.FollowUp_Department_.Department_Id != undefined)
        Department_Id = this.FollowUp_Department_.Department_Id;
    }
    else
      Department_Id = 0;
    Student_Id = this.Profile_.Student_Id;
    // debugger;
    this.Student_Service_.Get_Followup_Date_Generic(Student_Id, Department_Id, Status_Id).subscribe(
      (Rows) => {
        // debugger;
        /* if(Rows !=null)
         {
           console.log(Rows[0][0]);
           nxtfoldate = Rows[0][0].followup_date;
           nextfoldate =new Date(nxtfoldate);
           this.FollowUp_.Next_FollowUp_Date=this.New_Date(nextfoldate);
         }
         else
         {
           this.FollowUp_.Next_FollowUp_Date=new Date();
         }*/
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

    // this.FollowUp_Status_.Department_Status_Id=0;
    //  this.Search_Substatus_Typeahead(this.FollowUp_Status_.Department_Status_Id);
  }
  Status_Change1() {
    // this.Transfer_Status_=null;
    this.FollowUp_Sub_Status_Transfer_ = null;
    this.Followup_Substatus_Data_Filter1 = [];
    this.Followup_Substatus_Data_Filter_Transfer1 = [];
    this.Followup_Substatus_Data1 = [];
    // this.FollowUp_Status_.Department_Status_Id=0;
    this.Search_Substatus_Typeahead_Transfer(
      this.Transfer_Status_.Department_Status_Id
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
  Search_Department_User_Typeahead(event: any) {
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
        this.Followup_Users_Data == undefined ||
        this.Followup_Users_Data.length == 0
      ) {
        this.issLoading = true;
        var uname = undefined;

        this.Student_Service_.Search_Department_User_Typeahead_New(
          this.FollowUp_Branch_.Branch_Id,
          this.FollowUp_Department_.Department_Id,
          uname,
          this.Usertype
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
  display_DSE_Users(Users_: User_Details) {
    if (Users_) {
      return Users_.User_Details_Name;
    }
  }

  display_Followup_Users(Users_: User_Details) {
    if (Users_) {
      return Users_.User_Details_Name;
    }
  }
  display_Followup_UsersT(Users_T: Student_FollowUp) {
    if (Users_T) {
      return Users_T.UserName;
    }
  }

  // Search_Department_User_Typeahead_Task(event: any) {
  //
  // 	var Value = "";
  // 	if (event.target.value == "") Value = undefined;
  // 	else Value = event.target.value;
  //
  // 	if (
  // 		this.FollowUp_Department_T == null ||
  // 		this.FollowUp_Department_T.Department_Id == undefined
  // 	) {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Select Department", Type: "3" },
  // 		});
  // 	} else {
  // 		if (
  // 			this.Followup_Users_Data_t == undefined ||
  // 			this.Followup_Users_Data_t.length == 0
  // 		) {
  // 			this.Search_Department_User_Typeahead_Task_service(this.FollowUp_Department_T.Department_Id)
  // 		}
  // 	}
  // }

  Search_Department_User_Typeahead_Tasknew(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    if (
      this.FollowUp_Department_TN == null ||
      this.FollowUp_Department_TN.Department == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Department", Type: "3" },
      });
    } else {
      if (
        this.Followup_Users_Data_tN == undefined ||
        this.Followup_Users_Data_tN.length == 0
      ) {
        // this.Search_Department_User_Typeahead_Task_service(this.FollowUp_Department_T.Department_Id)

        this.issLoading = true;

        this.Student_Service_.Search_Department_User_Typeahead_Tasknew(
          this.FollowUp_Department_TN.Department,
          this.Profile_.Student_Id
        ).subscribe(
          (Rows) => {
            if (Rows != null) {
              this.Followup_Users_Data_tN = Rows[0];
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

  Search_DSEUser_Typeahead(event: any, source: number) {
    var Value = "";
    if (this.from_duplicate_check === 1) {
      return;
    } else {
      if (event.target.value == "") Value = "";
      else Value = event.target.value.toLowerCase();
      // debugger;

      this.issLoading = true;
      this.DSE_Users_Data_t_Filter = [];
      this.Student_Service_.Search_DSEUser_Typeahead(Value
      ).subscribe(
        (Rows) => {
          // debugger;
          if (Rows != null) {
            this.DSE_Users_Data_t = Rows[0];
            this.DSE_Users_Data_t_Filter = [];
            if (source == 1) {
              for (var i = 0; i < this.DSE_Users_Data_t.length; i++) {
                if (
                  this.DSE_Users_Data_t[
                    i
                  ].User_Details_Name.toLowerCase().includes(Value)
                )
                  this.DSE_Users_Data_t_Filter.push(
                    this.DSE_Users_Data_t[i]
                  );
              }
            } else {
              this.DSE_Users_Data_t_Filter = Rows[0];
            }

            this.issLoading = false;
          }
        },
        (Rows) => {
          this.issLoading = false;
          // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        }
      );
      // }


      // debugger;
    }
  }


  Search_Department_User_Typeahead_Fllowup(event: any, source: number) {
    var Value = "";
    if (this.from_duplicate_check === 1) {
      return;
    } else {
      if (event.target.value == "") Value = "";
      else Value = event.target.value.toLowerCase();
      // debugger;

      if (
        this.FollowUp_Branch_ == null ||
        this.FollowUp_Branch_.Branch_Id == undefined
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Branch", Type: "3" },
        });
      } else if (
        this.FollowUp_Department_ == null ||
        this.FollowUp_Department_.Department_Id == undefined
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Channel", Type: "3" },
        });
      } else {


        if (
          this.Followup_Users_Data_t == undefined ||
          this.Followup_Users_Data_t == null ||
          this.Followup_Users_Data_t.length == 0
        ) {
          this.issLoading = true;
          this.Followup_Users_Data_t_Filter = [];
          // debugger
          this.Student_Service_.Search_Department_User_Typeahead(
            this.FollowUp_Branch_.Branch_Id,
            this.FollowUp_Department_.Department_Id,

            Value
          ).subscribe(
            (Rows) => {
              // debugger;
              if (Rows != null) {
                this.Followup_Users_Data_t = Rows[0];
                this.Followup_Users_Data_t_Filter = [];
                if (source == 1) {
                  for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {
                    if (
                      this.Followup_Users_Data_t[
                        i
                      ].User_Details_Name.toLowerCase().includes(Value)
                    )
                      this.Followup_Users_Data_t_Filter.push(
                        this.Followup_Users_Data_t[i]
                      );
                  }
                } else {
                  this.Followup_Users_Data_t_Filter = Rows[0];
                }

                this.issLoading = false;
              }
            },
            (Rows) => {
              this.issLoading = false;
              // this.Login_User_Id,const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
            }
          );
          // }
        } else {
          if (source == 1) {
            this.Followup_Users_Data_t_Filter = [];
            for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {
              if (
                this.Followup_Users_Data_t[
                  i
                ].User_Details_Name.toLowerCase().includes(Value)
              )
                this.Followup_Users_Data_t_Filter.push(
                  this.Followup_Users_Data_t[i]
                );
            }
          } else {
            this.Followup_Users_Data_t_Filter = [];
            for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {
              this.Followup_Users_Data_t_Filter.push(
                this.Followup_Users_Data_t[i]
              );
            }
          }
        }
      }

      // debugger;
    }
  }

  Search_Department_User_Typeahead_Task(event: any, source: number) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    if (
      this.FollowUp_Branch_Task_ == null ||
      this.FollowUp_Branch_Task_.Branch_Id == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Branch", Type: "3" },
      });
    } else if (
      this.FollowUp_Department_Task_ == null ||
      this.FollowUp_Department_Task_.Department_Id == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Department", Type: "3" },
      });
    }
    if (
      this.Followup_Users_Data_t == undefined ||
      this.Followup_Users_Data_t == null ||
      this.Followup_Users_Data_t.length == 0
    ) {
      this.Student_Service_.Search_Department_User_Typeahead(
        this.FollowUp_Branch_Task_.Branch_Id,
        this.FollowUp_Department_Task_.Department_Id,
        ""
      ).subscribe(
        (Rows) => {
          if (Rows != null) {
            this.Followup_Users_Data_t = Rows[0];
            this.Followup_Users_Data_t_Filter = [];
            if (source == 1) {
              for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {
                if (
                  this.Followup_Users_Data_t[
                    i
                  ].User_Details_Name.toLowerCase().includes(Value)
                )
                  this.Followup_Users_Data_t_Filter.push(
                    this.Followup_Users_Data_t[i]
                  );
              }
            } else {
              this.Followup_Users_Data_t_Filter = Rows[0];
            }

            this.issLoading = false;
          }
        },
        (Rows) => {
          this.issLoading = false;
          // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
        }
      );
      // }
    } else {
      if (source == 1) {
        this.Followup_Users_Data_t_Filter = [];
        for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {
          if (
            this.Followup_Users_Data_t[
              i
            ].User_Details_Name.toLowerCase().includes(Value)
          )
            this.Followup_Users_Data_t_Filter.push(
              this.Followup_Users_Data_t[i]
            );
        }
      } else {
        this.Followup_Users_Data_t_Filter = [];
        for (var i = 0; i < this.Followup_Users_Data_t.length; i++) {
          this.Followup_Users_Data_t_Filter.push(this.Followup_Users_Data_t[i]);
        }
      }
    }
  }

  Search_Department_User_Typeahead_Task_service(Department_Id) {
    this.issLoading = true;

    this.Student_Service_.Search_Department_User_Typeahead_Task(
      Department_Id
    ).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Followup_Users_Data_t = Rows[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
      }
    );
  }

  Check_Duplicate_Student() {
    // var phone=this.Student_.Phone_Number;
    // this.Student_.Phone_Number   = phone.toString().trim();

    this.Student_Service_.Check_Duplicate_Student(
      this.Student_.Phone_Number,
      this.Branch_Id
    ).subscribe(
      (Rows) => {
        //log(Save_status)
        var status = Rows.returnvalue.Leads;
        if (Number(status[0].Student_Id_) > 0) {
          this.Save_Call_Status = false;
          var Show_FollowUp_Date;
          if (status[0].Department_Status == 0) {
            Show_FollowUp_Date = "";
          } else {
            Show_FollowUp_Date =
              ",FollowUp Date is :" + status[0].Duplicate_FollowUp_Date;
          }
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: {
              Message:
                "The Phone Number Already Exist for " +
                status[0].Duplicate_Student_Name +
                " and is handled by " +
                status[0].Duplicate_User_Name +
                Show_FollowUp_Date +
                " ,Department is: " +
                status[0].Duplicate_Department_Name +
                " and Remark is: " +
                status[0].Duplicate_Remark_Name +
                ",Do you want to add FollowUp?",
              Type: true,
              Heading: "Duplicate Entry",
            },
          });
          dialogRef.afterClosed().subscribe((result) => {
            if (result == "Yes") {
              // debugger;
              this.Save_Call_Status = false;
              this.Followup_Users_Data_t = [];
              this.Followup_Users_Data_t_Filter = [];
              this.New_Followup(
                status[0].Student_Id_,
                status[0].Duplicate_Student_Name,
                status[0].Duplicate_Registration,
                status[0].Duplicate_Welcome_Status,
                0,
                0,
                1
              );
            }
          });
        } else {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No Details Found", Type: "3" },
          });
          this.Save_Call_Status = false;
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
        this.Save_Call_Status = false;
      }
    );
  }

  // Load_Intake() {
  // 	this.issLoading = true;
  // 	this.Intake_Service_.Load_Intake().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Intake_Mode_Data = Rows[0];
  // 				this.Intake_Mode_Temp.Intake_Id = 0;
  // 				this.Intake_Mode_Temp.Intake_Name = "Select";
  // 				this.Intake_Mode_Data.unshift(this.Intake_Mode_Temp);

  // 				this.Intake_Mode_ = this.Intake_Mode_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }

  // Load_Enquiryfor() {
  // 	this.issLoading = true;
  // 	this.Student_Service_.Load_Enquiryfor().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Enquiry_For_Data = Rows[0];
  // 				this.Enquiry_For_Temp.Enquiryfor_Id = 0;
  // 				this.Enquiry_For_Temp.Enquirfor_Name = "Select";
  // 				this.Enquiry_For_Data.unshift(this.Enquiry_For_Temp);

  // 				this.Enquiry_For_ = this.Enquiry_For_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }

  // Load_Shore() {
  // 	this.issLoading = true;
  // 	this.Student_Service_.Load_Shore().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Shore_Data = Rows[0];
  // 				this.Shore_Temp.Shore_Id = 0;
  // 				this.Shore_Temp.Shore_Name = "Select";
  // 				this.Shore_Data.unshift(this.Shore_Temp);

  // 				this.Shore_ = this.Shore_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }
  Load_Profile_Intake() {
    this.issLoading = true;
    this.Intake_Service_.Load_Intake().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Profile_Intake_Mode_Data = Rows[0];
          this.Profile_Intake_Mode_Temp.Intake_Id = 0;
          this.Profile_Intake_Mode_Temp.Intake_Name = "Select";
          this.Profile_Intake_Mode_Data.unshift(this.Profile_Intake_Mode_Temp);

          this.Profile_Intake_Mode_ = this.Profile_Intake_Mode_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  // Load_Intake_year() {
  // 	this.issLoading = true;
  // 	this.Intake_Service_.Load_Intake_year().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Intake_Year_Mode_Data = Rows[0];
  // 				this.Intake_Year_Mode_Temp.Intake_Year_Id = 0;
  // 				this.Intake_Year_Mode_Temp.Intake_Year_Name = "Select";
  // 				this.Intake_Year_Mode_Data.unshift(this.Intake_Year_Mode_Temp);

  // 				this.Intake_Year_Mode_ = this.Intake_Year_Mode_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }

  // Load_Agents() {
  // 	this.issLoading = true;
  // 	this.Student_Service_.Load_Agents().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Agent_Mode_Data = Rows[0];
  // 				this.Agent_Mode_Temp.Agent_Id = 0;
  // 				this.Agent_Mode_Temp.Agent_Name = "Select";
  // 				this.Agent_Mode_Data.unshift(this.Agent_Mode_Temp);
  // 				this.Agent_Mode_ = this.Agent_Mode_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }
  // Load_application_status() {
  // 	this.issLoading = true;
  // 	this.Student_Service_.Load_application_status().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Application_Status_Mode_Data = Rows[0];
  // 				this.Application_Status_Mode_Temp.Application_status_Id = 0;
  // 				this.Application_Status_Mode_Temp.Application_Status_Name = "Select";
  // 				this.Application_Status_Mode_Data.unshift(
  // 					this.Application_Status_Mode_Temp
  // 				);

  // 				this.Application_Status_Mode_ = this.Application_Status_Mode_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }
  // Load_Marital_Status() {
  // 	this.issLoading = true;
  // 	this.Student_Service_.Load_Marital_Status().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Marital_Status_Data = Rows[0];
  // 				this.Marital_Status_Temp.Marital_Status_Id = 0;
  // 				this.Marital_Status_Temp.Marital_Status_Name = "Select";
  // 				this.Marital_Status_Data.unshift(this.Marital_Status_Temp);

  // 				this.Marital_Status_ = this.Marital_Status_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }

  Load_Visa_Type() {
    this.issLoading = true;
    this.Student_Service_.Load_Visa_Type().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Visa_Type_Data = Rows[0];
          this.Visa_Type_Temp.Visa_Type_Id = 0;
          this.Visa_Type_Temp.Visa_Type_Name = "Select";
          this.Visa_Type_Data.unshift(this.Visa_Type_Temp);

          this.Visa_Type_ = this.Visa_Type_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Resume_Mode_Dropdown() {
    this.issLoading = true;
    this.Student_Service_.Resume_Mode_Dropdown().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Resume_Mode_Data = Rows[0];
          this.Resume_Mode_Temp.Resume_Id = 0;
          this.Resume_Mode_Temp.Resume_Name = "Select";
          this.Resume_Mode_Data.unshift(this.Resume_Mode_Temp);

          this.Resume_Mode_ = this.Resume_Mode_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Qualification_Type_DropDown() {
    this.issLoading = true;
    this.Student_Service_.Search_Qualification_Type("").subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Qualification_Type_Data = Rows[0];
          this.Qualification_Type_Temp.Qualification_Type_Id = 0;
          this.Qualification_Type_Temp.Qualification_Type_Name = "Select";
          this.Qualification_Type_Data.unshift(this.Qualification_Type_Temp);

          this.Qualification_Type_ = this.Qualification_Type_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  // Passport_Mode_Dropdown() {
  // 	this.issLoading = true;
  // 	this.Student_Service_.Passport_Mode_Dropdown().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Passport_Mode_Data = Rows[0];
  // 				this.Passport_Mode_Temp.Passport_Id = 0;
  // 				this.Passport_Mode_Temp.Passport_Name = "Select";
  // 				this.Passport_Mode_Data.unshift(this.Passport_Mode_Temp);

  // 				this.Passport_Mode_ = this.Passport_Mode_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }

  LOR1_Mode_Dropdown() {
    this.issLoading = true;
    this.Student_Service_.LOR1_Mode_Dropdown().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.LOR_1_Mode_Data = Rows[0];
          this.LOR_1_Mode_Temp.LOR_1_Id = 0;
          this.LOR_1_Mode_Temp.LOR_1_Name = "Select";
          this.LOR_1_Mode_Data.unshift(this.LOR_1_Mode_Temp);

          this.LOR_1_Mode_ = this.LOR_1_Mode_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  LOR2_Mode_Dropdown() {
    this.issLoading = true;
    this.Student_Service_.LOR2_Mode_Dropdown().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.LOR_2_Mode_Data = Rows[0];
          this.LOR_2_Mode_Temp.LOR_2_Id = 0;
          this.LOR_2_Mode_Temp.LOR_2_Name = "Select";
          this.LOR_2_Mode_Data.unshift(this.LOR_2_Mode_Temp);

          this.LOR_2_Mode_ = this.LOR_2_Mode_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  MOI_Mode_Dropdown() {
    this.issLoading = true;
    this.Student_Service_.MOI_Mode_Dropdown().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.MOI_Mode_Data = Rows[0];
          this.MOI_Mode_Temp.MOI_Id = 0;
          this.MOI_Mode_Temp.MOI_Name = "Select";
          this.MOI_Mode_Data.unshift(this.MOI_Mode_Temp);

          this.MOI_Mode_ = this.MOI_Mode_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  SOP_Mode_Dropdown() {
    this.issLoading = true;
    this.Student_Service_.SOP_Mode_Dropdown().subscribe(
      (Rows) => {
        if (Rows != null) {
          this.SOP_Mode_Data = Rows[0];
          this.SOP_Mode_Temp.SOP_Id = 0;
          this.SOP_Mode_Temp.SOP_Name = "Select";
          this.SOP_Mode_Data.unshift(this.SOP_Mode_Temp);

          this.SOP_Mode_ = this.SOP_Mode_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  // IELTS_Mode_Dropdown() {
  // 	this.issLoading = true;
  // 	this.Student_Service_.IELTS_Mode_Dropdown().subscribe(
  // 		(Rows) => {
  // 			if (Rows != null) {
  // 				this.Ielts_Mode_Data = Rows[0];
  // 				this.Ielts_Mode_Temp.Ielts_Id = 0;
  // 				this.Ielts_Mode_Temp.Ielts_Name = "Select";
  // 				this.Ielts_Mode_Data.unshift(this.Ielts_Mode_Temp);

  // 				this.Ielts_Mode_ = this.Ielts_Mode_Data[0];
  // 				this.issLoading = false;
  // 			}
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 		}
  // 	);
  // }

  New_Date_followup(Date_) {
    this.date = Date_;
    this.day = this.date.getDate().toString();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();

    if (this.month < 10) {
      this.month = "0" + this.month;
    }

    if (Number.parseInt(this.day) < 10) {
      this.day = "0" + this.day;
    }

    this.date = this.day + "-" + this.month + "-" + this.year;
    return this.date;
  }

  Search_Brand_Typeahead(event: any, source: number) {
    var depid = 0;
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();

    if (this.FollowUp_Department_.Department_Id == 0 || this.FollowUp_Department_.Department_Id == undefined)
      depid = this.Login_Department;
    else
      depid = this.FollowUp_Department_.Department_Id;
    // if (this.Brand_Data == undefined || this.Brand_Data.length == 0) {
    // debugger
    console.log('login departemnetee', this.Login_Department)
    this.issLoading = true;
    this.Student_Service_
      .Get_Brand_By_Department(depid, Value)
      .subscribe(res => {
        // debugger

        this.Brand_Data = res[0];
        console.log('this.Brand_Data', this.Brand_Data)
        this.Brand_Data_Check = [];
        this.issLoading = false;

        // if (source == 1 && Value != undefined) {
        for (var i = 0; i < this.Brand_Data.length; i++) {
          if (this.Brand_Data[i].Brand_Name.toLowerCase().includes(Value)) {
            this.Brand_Data_Check.push(this.Brand_Data[i]);
          }
        }
        // } else {
        //   this.Brand_Data_Check = this.Brand_Data;
        // }
      });
    // } else {

    //   this.Brand_Data_Check = [];

    //   for (var i = 0; i < this.Brand_Data.length; i++) {
    //     if (Value == undefined ||
    //       this.Brand_Data[i].Brand_Name.toLowerCase().includes(Value)) {
    //       this.Brand_Data_Check.push(this.Brand_Data[i]);
    //     }
    //   }
    // }
  }


  Search_Brand_Typeahead_Department(event: any) {
    var depid = 0;
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();

    // if (this.Department_Search.Department_Id == 0 || this.Department_Search.Department_Id == undefined)
    //   depid = this.Login_Department;
    // else
    //   depid = this.Department_Search.Department_Id;
    // // debugger
    if (this.Brand_Data == undefined || this.Brand_Data.length == 0) {
      // debugger
      //console.log('login departemnetee', this.Login_Department)
      this.issLoading = true;
      this.Student_Service_
        .Get_Brand_Typeahead_By_Department(Value)
        .subscribe(res => {
          // debugger

          this.Brand_Data = res[0];
          console.log('this.Brand_Data', this.Brand_Data)
          this.Brand_Data_Check = [];
          this.issLoading = false;

          //if (source == 1 && Value != undefined) {
          for (var i = 0; i < this.Brand_Data.length; i++) {
            if (this.Brand_Data[i].Brand_Name.toLowerCase().includes(Value)) {
              this.Brand_Data_Check.push(this.Brand_Data[i]);
            }
          }
          //} else {
          // this.Brand_Data_Check = this.Brand_Data;
          // }
        });
    } else {

      this.Brand_Data_Check = [];

      for (var i = 0; i < this.Brand_Data.length; i++) {
        if (Value == undefined ||
          this.Brand_Data[i].Brand_Name.toLowerCase().includes(Value)) {
          this.Brand_Data_Check.push(this.Brand_Data[i]);
        }
      }
    }
  }

  display_Brand(brand: any) {
    return brand ? brand.Brand_Name : '';
  }

  Search_Model_Typeahead(event: any, source: number) {

    if (this.Brand_ == null || this.Brand_.Brand_Id == null) {
      this.dialogBox.open(DialogBox_Component, {
        panelClass: 'Dialogbox-Class',
        data: { Message: 'Select Brand First', Type: "3" }
      });
      return;
    }

    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();

    // if (this.Model_Data == undefined || this.Model_Data.length == 0) {

    this.issLoading = true;
    this.Student_Service_
      .Get_Model_By_Brand(this.Brand_.Brand_Id, Value)
      .subscribe(res => {

        this.Model_Data = res[0];
        this.Model_Data_Check = [];
        this.issLoading = false;

        // if (source == 1 && Value != undefined) {
        for (var i = 0; i < this.Model_Data.length; i++) {
          if (this.Model_Data[i].Country_Name.toLowerCase().includes(Value)) {
            this.Model_Data_Check.push(this.Model_Data[i]);
          }
        }
        // } else {
        //   this.Model_Data_Check = this.Model_Data;
        // }
      });
    // } else {

    //   this.Model_Data_Check = [];
    //   for (var i = 0; i < this.Model_Data.length; i++) {
    //     if (Value == undefined ||
    //       this.Model_Data[i].Country_Name.toLowerCase().includes(Value)) {
    //       this.Model_Data_Check.push(this.Model_Data[i]);
    //     }
    //   }
    // }
  }

  display_Model(model: any) {
    return model ? model.Country_Name : '';
  }

  display_BookedVehicle(model: any) {
    return model ? model.Country_Name : '';
  }

  Search_Booked_Vehicle_Typeahead(event: any) {
    var depid = 0;
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();
    if (this.Model_Data == undefined || this.Model_Data.length == 0) {
      // debugger
      this.issLoading = true;
      this.Student_Service_.Search_Booked_Vehicle_Typeahead(Value).subscribe(res => {
        // debugger
        this.Model_Data = res[0];
        this.Model_Data_Check = [];
        this.issLoading = false;
        for (var i = 0; i < this.Model_Data.length; i++) {
          if (this.Model_Data[i].Country_Name.toLowerCase().includes(Value)) {
            this.Model_Data_Check.push(this.Model_Data[i]);
          }
        }
      });
    } else {
      this.Model_Data_Check = [];
      for (var i = 0; i < this.Model_Data.length; i++) {
        if (Value == undefined ||
          this.Model_Data[i].Country_Name.toLowerCase().includes(Value)) {
          this.Model_Data_Check.push(this.Model_Data[i]);
        }
      }
    }
  }


  Search_DSE_Typeahead(event: any, source: number) {

    var branchid = 0, depid = 0;
    if (this.FollowUp_Branch_.Branch_Id == 0 || this.FollowUp_Branch_.Branch_Id == undefined)
      branchid = this.Branch_Id;
    else
      branchid = this.FollowUp_Branch_.Branch_Id;

    if (this.FollowUp_Department_.Department_Id == 0 || this.FollowUp_Department_.Department_Id == undefined)
      depid = this.Login_Department;
    else
      depid = this.FollowUp_Department_.Department_Id;
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();

    // if (this.DSE_Data == undefined || this.DSE_Data.length == 0) {
    // debugger
    this.issLoading = true;
    this.Student_Service_.Get_Dse_Load_Data(branchid, depid, Value)
      .subscribe(res => {
        // debugger;
        this.DSE_Data = res[0];
        console.log(this.DSE_Data, "this.DSE_Data");

        this.DSE_Data_Check = [];
        console.log(this.DSE_Data_Check, "this.DSE_Data_Check");
        this.issLoading = false;

        //if (source == 1 && Value != undefined) {
        for (var i = 0; i < this.DSE_Data.length; i++) {
          if (this.DSE_Data[i].DSE_Name.toLowerCase().includes(Value)) {
            this.DSE_Data_Check.push(this.DSE_Data[i]);
          }
        }
        // } else {
        //   this.DSE_Data_Check = this.DSE_Data;
        // }
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

  display_DSE(dse: any) {
    return dse ? dse.DSE_Name : '';
  }

  Search_DSE_Typeahead_BySearch(event: any) {
    var depid = 0;
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value.toLowerCase();

    // if (this.Department_Search.Department_Id == 0 || this.Department_Search.Department_Id == undefined)
    //   depid = this.Login_Department;
    // else
    //   depid = this.Department_Search.Department_Id;
    // // debugger
    if (this.DSE_Data == undefined || this.DSE_Data.length == 0) {
      // debugger
      //console.log('login departemnetee', this.Login_Department)
      this.issLoading = true;
      this.Student_Service_
        .Search_DSE_Typeahead_BySearch(Value)
        .subscribe(res => {
          // debugger

          this.DSE_Data = res[0];
          console.log('this.Brand_Data', this.Brand_Data)
          this.DSE_Data_Check = [];
          this.issLoading = false;

          //if (source == 1 && Value != undefined) {
          for (var i = 0; i < this.DSE_Data.length; i++) {
            if (this.DSE_Data[i].DSE_Name.toLowerCase().includes(Value)) {
              this.DSE_Data_Check.push(this.DSE_Data[i]);
            }
          }
          //} else {
          // this.DSE_Data_Check = this.Brand_Data;
          // }
        });
    } else {

      this.DSE_Data_Check = [];

      for (var i = 0; i < this.DSE_Data.length; i++) {
        if (Value == undefined ||
          this.DSE_Data[i].DSE_Name.toLowerCase().includes(Value)) {
          this.DSE_Data_Check.push(this.DSE_Data[i]);
        }
      }
    }
  }

  Save_Profile() {

    // debugger;
    var entrydate_new, entrydate, transdate;
    entrydate_new = "2026-04-01";
    entrydate = this.New_Date(
      new Date(moment(this.Profile_.Entry_date).format("YYYY-MM-DD")));

    transdate = this.New_Date(
      new Date(moment(this.Profile_.Transfer_date).format("YYYY-MM-DD")));
    if (transdate == null || transdate == "NaN-NaN-NaN") {
      if (entrydate > entrydate_new) {
        if (this.Program_Course_ != null || this.Program_Course_ != undefined) {
          if (this.Program_Course_.Course_Id == 13) {
            if (transdate == null || transdate == "NaN-NaN-NaN") {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "select Transfer Date", Type: "3" },
              });
              return;
            }
            else {
              this.Profile_.Transfer_date = this.New_Date(new Date(moment(transdate).format("YYYY-MM-DD")));
            }
          }
          else
            this.Profile_.Transfer_date = null;
        }
        else
          this.Profile_.Transfer_date = null;
      }
      else
        this.Profile_.Transfer_date = null;
    }
    else {
      this.Profile_.Transfer_date = this.New_Date(new Date(moment(transdate).format("YYYY-MM-DD")));
    }


    if (this.Flag_Student == 1) {
      if (
        this.Profile_.Student_Name == undefined ||
        this.Profile_.Student_Name == null ||
        this.Profile_.Student_Name == ""
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Enter Name/CIN", Type: "3" },
        });
        return;
      }

      if (
        this.Profile_.Phone_Number == undefined ||
        this.Profile_.Phone_Number == null ||
        this.Profile_.Phone_Number == ""
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Enter Phone No", Type: "3" },
        });
        return;
      }
      if (
        this.Enquiry_Source_ == undefined ||
        this.Enquiry_Source_ == null ||
        this.Enquiry_Source_.Enquiry_Source_Id == undefined ||
        this.Enquiry_Source_.Enquiry_Source_Id == 0
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Source ", Type: "3" },
        });
        return;
      }



    }

    if (this.Flag_Followup == 1) {
      if (
        this.FollowUp_Branch_ == null ||
        this.FollowUp_Branch_ == undefined ||
        this.FollowUp_Branch_.Branch_Id == undefined ||
        this.FollowUp_Branch_.Branch_Id == null
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "select Branch", Type: "3" },
        });
        return;
      } else if (
        this.FollowUp_Department_ == null ||
        this.FollowUp_Department_ == undefined ||
        this.FollowUp_Department_.Department_Id == undefined ||
        this.FollowUp_Department_.Department_Id == null
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Channel", Type: "3" },
        });
        return;
      }
      else if (
        this.FollowUp_Status_ == null ||
        this.FollowUp_Status_ == undefined ||
        this.FollowUp_Status_.Department_Status_Id == undefined ||
        this.FollowUp_Status_.Department_Status_Id == null
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Channel Status", Type: "3" },
        });
        return;
      }

      // Only validate staff selection if Auto (RoundRobin) is NOT selected
      // else if (
      //   !this.RoundRobin &&
      //   (
      //     this.Followup_Users_ == null ||
      //     this.Followup_Users_ == undefined ||
      //     this.Followup_Users_.User_Details_Id == undefined ||
      //     this.Followup_Users_.User_Details_Id == null
      //   )
      // ) {
      //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
      //     panelClass: "Dialogbox-Class",
      //     data: { Message: "Select Handled By", Type: "3" },
      //   });
      //   return;
      // }


      //console.log('this.RoundRobin: ', this.RoundRobin);
      if (this.FollowUp_.Next_FollowUp_Date == null) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Choose Follow Up on", Type: "3" },
        });
        return;
      }

      if (
        this.FollowUp_.Duration == null ||
        this.FollowUp_.Duration == undefined
      ) {
        this.FollowUp_.Duration = 0;
      }

      if (this.Remarks_ == null) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Enter the Remark", Type: "3" },
        });
        return;
      } else if (this.Remarks_.Remarks_Name != null) {
        Remarks_Id_temp = this.Remarks_.Remarks_Id;
        Remarks_Caption_Temp = this.Remarks_.Remarks_Name;
      } else {
        Remarks_Caption_Temp = String(this.Remarks_);
      }
      if (Remarks_Caption_Temp == null || Remarks_Caption_Temp == "") {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Enter the Remark", Type: "3" },
        });
        return;
      }

      /*var dateFirst = new Date(this.FollowUp_.Next_FollowUp_Date);
      dateFirst = new Date(dateFirst);
      var dateSecond = new Date();
      dateSecond = new Date(dateSecond);

      const msInDay = 24 * 60 * 60 * 1000;
      this.timeDiff = Math.trunc(
        Math.abs(dateSecond.getTime() - dateFirst.getTime()) / msInDay
      );
      var DayDiff = Math.round(
        Math.abs(dateSecond.getTime() - dateFirst.getTime())
      );

      var addeddate = new Date(dateSecond);
      addeddate.setDate(addeddate.getDate() + this.Duration);

      var addeddate1 = this.New_Date_followup(
        new Date(moment(addeddate).format("YYYY-MM-DD"))
      );

      if (this.Duration < this.timeDiff + 1 && this.Followup_sub == "1") {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Date Upto " + addeddate1, Type: "3" },
        });
        return;
      }*/
    }

    this.Profile_.Dob == "";

    this.Profile_.Entry_date = this.New_Date(
      new Date(moment(this.Profile_.Entry_date).format("YYYY-MM-DD"))
    );



    if (
      this.Profile_.Date_of_Marriage == undefined ||
      this.Profile_.Date_of_Marriage == null ||
      this.Profile_.Date_of_Marriage == "NaN" ||
      this.Profile_.Date_of_Marriage == ""
    ) {
      this.Profile_.Date_of_Marriage = "";
    } else
      this.Profile_.Date_of_Marriage = this.New_Date(
        new Date(moment(this.Profile_.Date_of_Marriage).format("YYYY-MM-DD"))
      );

    var Programe_Course_Id_temp = 0;
    var Programe_Course_Caption_Temp = "";

    if (this.Program_Course_ != undefined || this.Program_Course_ != null) {
      if (
        this.Program_Course_.Course_Id == undefined ||
        this.Program_Course_.Course_Id == null
      ) {
        Programe_Course_Id_temp = -1; //this.Program_Course_.Course_Id
        Programe_Course_Caption_Temp = String(this.Program_Course_); //this.Program_Course_.Course_Name
      } else {
        Programe_Course_Id_temp = this.Program_Course_.Course_Id;
        Programe_Course_Caption_Temp = this.Program_Course_.Course_Name;
      }
    } else {
      Programe_Course_Id_temp = 0;
      Programe_Course_Caption_Temp = "";
    }

    var Profile_University_Id_temp = 0;
    var Profile_University_Caption_Temp = "";

    if (
      this.Profile_University_ != undefined ||
      this.Profile_University_ != null
    ) {
      if (
        this.Profile_University_.Country_Id == undefined ||
        this.Profile_University_.Country_Id == null
      ) {
        Profile_University_Id_temp = -1;
        Profile_University_Caption_Temp = String(this.Profile_University_);
      } else {
        Profile_University_Id_temp = this.Profile_University_.Country_Id;
        Profile_University_Caption_Temp = this.Profile_University_.Country_Name;
      }
    } else {
      Profile_University_Id_temp = 0;
      Profile_University_Caption_Temp = "";
    }
    this.Profile_.Proceeding_University_Id = Profile_University_Id_temp;
    this.Profile_.Proceeding_University_Name = Profile_University_Caption_Temp;

    var Profile_Country_Id_temp = 0;
    var Profile_Country_Caption_Temp = "";

    var Proceeding_University_Name_Temp = "";
    var Proceeding_University_Id_Temp = 0;

    var Proceeding_Country_Id_temp = 0;
    var Proceeding_Country_Caption_Temp = "";
    var Proceeding_Intake_Id_Temp = 0;
    var Proceeding_Intake_Name_Temp = "";

    // if (this.Profile_Country_ != undefined || this.Profile_Country_ != null) {
    //   if (
    //     this.Profile_Country_.Country_Id == undefined ||
    //     this.Profile_Country_.Country_Id == null
    //   ) {
    //     Profile_Country_Id_temp = -1;
    //     Profile_Country_Caption_Temp = String(this.Profile_Country_);
    //   } else {
    //     Profile_Country_Id_temp = this.Profile_Country_.Country_Id;
    //     Profile_Country_Caption_Temp = this.Profile_Country_.Country_Name;
    //   }
    // } else {
    //   Profile_Country_Id_temp = 0;
    //   Profile_Country_Caption_Temp = "";
    // }
    // this.Profile_.Country_Id = Profile_Country_Id_temp;
    // this.Profile_.Country_Name = Profile_Country_Caption_Temp;

    if (this.Proceeding_Country_ != undefined || this.Proceeding_Country_ != null) {
      if (
        this.Proceeding_Country_.Country_Id == undefined ||
        this.Proceeding_Country_.Country_Id == null
      ) {
        Proceeding_Country_Id_temp = -1;
        Proceeding_Country_Caption_Temp = "";// String(this.Proceeding_Country_);
      } else {
        Proceeding_Country_Id_temp = this.Proceeding_Country_.Country_Id;
        Proceeding_Country_Caption_Temp = this.Proceeding_Country_.Country_Name;
      }
    } else {
      Proceeding_Country_Id_temp = 0;
      Proceeding_Country_Caption_Temp = "";
    }

    this.Profile_.Proceeding_Country_Id = Proceeding_Country_Id_temp;
    this.Profile_.Proceeding_Country_Name = Proceeding_Country_Caption_Temp;

    // debugger;
    // if (this.DSE_Users_ != undefined || this.DSE_Users_ != null) {
    //   if (
    //     this.DSE_Users_.User_Details_Id == undefined ||
    //     this.DSE_Users_.User_Details_Id == null
    //   ) {
    //     Proceeding_Intake_Id_Temp = -1;
    //     Proceeding_Intake_Name_Temp = "";// String(this.DSE_Users_);
    //   } else {
    //     Proceeding_Intake_Id_Temp = this.DSE_Users_.User_Details_Id;
    //     Proceeding_Intake_Name_Temp = this.DSE_Users_.User_Details_Name;
    //   }
    // } else {
    //   Proceeding_Intake_Id_Temp = 0;
    //   Proceeding_Intake_Name_Temp = "";
    // }
    this.Profile_.Proceeding_Intake_Id = Proceeding_Intake_Id_Temp;
    this.Profile_.Proceeding_Intake_Name = Proceeding_Intake_Name_Temp;

    if (this.FollowUp_Status_ != undefined || this.FollowUp_Status_ != null) {
      this.FollowUp_.Status_Id = this.FollowUp_Status_.Department_Status_Id;
      this.FollowUp_.Department_FollowUp = this.FollowUp_Status_.FollowUp;
      this.FollowUp_.Department_Status_Name =
        this.FollowUp_Status_.Department_Status_Name;
      this.FollowUp_.RoundRobin = this.RoundRobin;
      this.FollowUp_.Class_Id = this.FollowUp_Status_.Class_Id;
      this.FollowUp_.Class_Name = this.FollowUp_Status_.Class_Name;
      this.FollowUp_.Class_Order = this.FollowUp_Status_.Class_Order;
      this.FollowUp_.Status_Type_Id = this.FollowUp_Status_.Status_Type_Id;
      this.FollowUp_.Status_Type_Name = this.FollowUp_Status_.Status_Type_Name;
      this.FollowUp_.Duration;
      this.Profile_.Send_Mail = this.FollowUp_Status_.Send_Mail;
    }
    else {
      this.FollowUp_.Status_Id = 0;
      this.FollowUp_.Department_FollowUp = false;
      this.FollowUp_.Department_Status_Name = "";
      this.FollowUp_.Class_Id = 0;
      this.FollowUp_.Class_Name = "";
      this.FollowUp_.Class_Order = 0;
      this.FollowUp_.Status_Type_Id = 0;
      this.FollowUp_.Status_Type_Name = "";
      this.Profile_.Send_Mail = false;
    }
    // -------- BRAND ----------
    if (this.Brand_ && this.Brand_.Brand_Id) {

      this.Profile_.Brand_Id = this.Brand_.Brand_Id;
      this.Profile_.Brand_Name = this.Brand_.Brand_Name;
    } else {
      this.Profile_.Brand_Id = 0;
      this.Profile_.Brand_Name = '';
    }
    // console.log('Profile.Brand_Name', this.Profile_.Brand_Name);
    // console.log('Profile.Brand_Name', this.Profile_.Brand_Id);
    // console.log('Brand_.Brand_Name', this.Brand_.Brand_Name);
    // console.log('Brand_.Brand_Id', this.Brand_.Brand_Id);
    // -------- MODEL ----------
    if (this.Model_ && this.Model_.Country_Id) {
      this.Profile_.Country_Id = this.Model_.Country_Id;
      this.Profile_.Country_Name = this.Model_.Country_Name;
    } else {
      this.Profile_.Country_Id = 0;
      this.Profile_.Country_Name = '';
    }
    // console.log('Profile.Country_Id', this.Profile_.Country_Id);
    // console.log('Profile.Country_Name', this.Profile_.Country_Name);
    // console.log('Brand_.ountry_Id', this.Model_.Country_Id);
    // console.log('this.Model_.Country_Name', this.Model_.Country_Name);
    // -------- DSE ----------
    if (this.DSE_Data_ && this.DSE_Data_.DSE_Id) {
      this.Profile_.DSE_Id = this.DSE_Data_.DSE_Id;
      this.Profile_.DSE_Name = this.DSE_Data_.DSE_Name;
    } else {
      this.Profile_.DSE_Id = 0;
      this.Profile_.DSE_Name = '';
    }
    if (this.User_Profile_Location_.Location_Id == null) {
      this.Profile_.Location_Id = 0;
      this.Profile_.Location_Name = "Select";
    }
    else {
      this.Profile_.Location_Id = this.User_Profile_Location_.Location_Id;
      this.Profile_.Location_Name = this.User_Profile_Location_.Location_Name;
    }

    // console.log('Profile_.DSE_Id', this.Profile_.DSE_Id);
    // console.log('this.Profile_.DSE_Name', this.Profile_.DSE_Name);
    // console.log('this.DSE_Data_.DSE_Id', this.DSE_Data_.DSE_Id);
    // console.log('this.DSE_Data_.DSE_Name', this.DSE_Data_.DSE_Name);
    this.Profile_.Email = "";
    //this.Profile_.Whatsapp = "";
    this.Profile_.Enquiry_Source_Id = this.Enquiry_Source_.Enquiry_Source_Id;
    this.Profile_.Enquiry_Source_Name = this.Enquiry_Source_.Enquiry_Source_Name;
    this.Profile_.Enquiryfor_Id = this.Enquiry_For_.Enquiryfor_Id;
    this.Profile_.Enquirfor_Name = this.Enquiry_For_.Enquirfor_Name;
    this.Profile_.Shore_Id = this.Shore_.Shore_Id;
    this.Profile_.Shore_Name = this.Shore_.Shore_Name;
    this.Profile_.Enquiry_Mode_Id = this.enquiry_mode_.Enquiry_Mode_Id;
    this.Profile_.Enquiry_Mode_Name = this.enquiry_mode_.Enquiry_Mode_Name;
    this.Profile_.Program_Course_Id = Programe_Course_Id_temp;
    this.Profile_.Program_Course_Name = Programe_Course_Caption_Temp;
    // this.Profile_.Country_Name = Profile_Country_Caption_Temp;
    // this.Profile_.Country_Id = Profile_Country_Id_temp;

    //this.Profile_.Proceeding_University_IdProgram_Course_

    this.Profile_.Marital_Status_Id = this.Marital_Status_.Marital_Status_Id;
    this.Profile_.Marital_Status_Name =
      this.Marital_Status_.Marital_Status_Name;
    this.Profile_.Passport_Id = this.Passport_Mode_.Passport_Id;
    this.Profile_.Spouse_Visa_Id = this.Spouse_Visa_.Passport_Id;
    this.Profile_.Spouse_visa_Name = this.Spouse_Visa_.Passport_Name
    this.Profile_.Student_Status_Id = 1;
    this.Profile_.Agent_Id = 1;
    this.Profile_.Department_Id = this.Login_Department;
    this.Profile_.Branch_Id = this.Branch_Id;

    this.FollowUp_.Branch = this.FollowUp_Branch_.Branch_Id;
    this.FollowUp_.Branch_Name = this.FollowUp_Branch_.Branch_Name;
    this.FollowUp_.Department_Name = this.FollowUp_Department_.Department_Name;
    this.FollowUp_.Department = this.FollowUp_Department_.Department_Id;

    this.FollowUp_.Department_Name = this.FollowUp_Department_.Department_Name;

    // Handle user assignment based on RoundRobin setting
    if (this.RoundRobin) {
      // When RoundRobin is true, set placeholder values - SP will handle the assignment
      this.FollowUp_.To_User_Id = 0; // Will be set by stored procedure
      this.FollowUp_.To_User_Name = ""; // Will be set by stored procedure
    } else {
      // When RoundRobin is false, use manually selected user
      if (this.Followup_Users_.User_Details_Id === undefined || this.Followup_Users_.User_Details_Id === 0) {
        this.FollowUp_.To_User_Id = 0;
        this.FollowUp_.To_User_Name = "";
      }
      else {
        this.FollowUp_.To_User_Id = this.Followup_Users_.User_Details_Id;
        this.FollowUp_.To_User_Name = this.Followup_Users_.User_Details_Name;
      }
    }
    // this.FollowUp_.To_User_Id = this.Followup_Users_.User_Details_Id;
    // this.FollowUp_.To_User_Name = this.Followup_Users_.User_Details_Name;
    this.FollowUp_.By_User_Id = Number(this.Login_User);
    this.FollowUp_.By_User_Name = this.Login_User_Name;

    this.FollowUp_.Next_FollowUp_Date = this.New_Date(
      new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
    );

    if (this.FollowUp_Sub_Status_ == null) {
      this.FollowUp_.Sub_Status_Id = 1;
      this.FollowUp_.Sub_Status_Name = "";
    } else {
      this.FollowUp_.Sub_Status_Id = this.FollowUp_Sub_Status_.Sub_Status_Id;
      this.FollowUp_.Sub_Status_Name =
        this.FollowUp_Sub_Status_.Sub_Status_Name;
    }
    var Remarks_Id_temp = 0;
    var Remarks_Caption_Temp = "";
    //this.issLoading=true;
    if (this.Flag_Followup == 1) {
      if (this.Remarks_.Remarks_Id != undefined) {
        Remarks_Id_temp = this.Remarks_.Remarks_Id;
        Remarks_Caption_Temp = this.Remarks_.Remarks_Name;
      } else {
        Remarks_Caption_Temp = String(this.Remarks_);
      }
      this.FollowUp_.Remark_id = Remarks_Id_temp;
      this.FollowUp_.Remark = Remarks_Caption_Temp;
    } else {
      this.FollowUp_.Remark_id = 0;
    }

    // ---------- TD / HD DATE FORMAT ----------
    if (this.Show_TD_Date && this.FollowUp_.TD_Date) {
      this.FollowUp_.TD_Date = this.New_Date(
        new Date(moment(this.FollowUp_.TD_Date).format("YYYY-MM-DD"))
      );
    } else {
      this.FollowUp_.TD_Date = null;
    }
    //console.log('this.FollowUp_.TD_Date', this.FollowUp_.TD_Date);

    if (this.Show_HD_Date && this.FollowUp_.HD_Date) {
      this.FollowUp_.HD_Date = this.New_Date(
        new Date(moment(this.FollowUp_.HD_Date).format("YYYY-MM-DD"))
      );
    } else {
      this.FollowUp_.HD_Date = null;
    }
    //console.log('this.FollowUp_.HD_Date', this.FollowUp_.HD_Date);

    this.Profile_.Student_FollowUp_ = this.FollowUp_;

    this.Profile_.Flag_Student = this.Flag_Student;
    this.Profile_.Flag_Followup = this.Flag_Followup;

    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;
    // console.log("department prfile status", this.Profile_.Send_Mail);
    // console.log("this.Follow_Up_Status", this.FollowUp_Status_);
    // console.log("this.Profile_", this.Profile_.Student_FollowUp_);

    // debugger;
    this.Student_Service_.Save_Profile(this.Profile_).subscribe(
      (Save_status) => {
        // debugger;
        let Save_status_mail;
        if (this.Flag_Followup == 1) {
          Save_status_mail = Save_status[5];
        }
        Save_status = Save_status[0];

        if (Number(Save_status[0].Student_Id_) > 0) {
          if (Save_status[0].Notify_ > 0) {
            var message = {
              Student_Name: this.Profile_.Student_Name,
              To_User: this.Profile_.Student_FollowUp_.To_User_Id,
              Student_Id: Save_status[0].Student_Id_,
              Branch: this.Profile_.Student_FollowUp_.Branch,
              Status_Id: this.Profile_.Student_FollowUp_.Status_Id,
              Remark: this.Profile_.Student_FollowUp_.Remark
            };
            this.socket.emit("new-message", message);
          }

          // if(this.Flag_Followup == 1){
          //   this.Student_Service_.sendmail_followup(Save_status_mail[0].Student_Id_,Save_status_mail[0].Status_Id_,Save_status_mail[0].Branch_,Save_status_mail[0].To_User_Id_,Save_status_mail[0].By_User_Name_,Save_status_mail[0].Remark_,Save_status_mail[0].AIMS_Id_).subscribe({
          //     next: (res) => {
          //       // âœ… Handle successful response
          //       console.log('Follow-up email sent successfully:', res);
          //     },
          //     error: (err) => {
          //       // âŒ Handle error response
          //       console.error('Error sending follow-up email:', err);
          //     },
          //     complete: () => {
          //       // âœ… Handle completion (optional)
          //       console.log('Follow-up email request completed.');
          //     }
          //     });
          // }

          if (
            Save_status[0].Status_Transfer_Check_ == 1 &&
            Save_status[0].Round_Robin_Check_ == 1
          ) {
            this.transfer_status_Dept_Id_ =
              Save_status[0].Status_Transfer_Dept_Id_;
            this.transfer_student_id_ = Number(Save_status[0].Student_Id_);
            this.Transfer_Cofirmation_Status("");
          } else {
            this.Total_Rows = this.Total_Rows - this.Student_Data.length;
            this.Search_Student(1);
          }

          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          //this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);

          this.Save_Call_Status = false;
          this.Total_Rows = this.Total_Rows - this.Student_Data.length;

          this.Profile_.Phone_Change = 0;
          this.Profile_.Email_Change = 0;
          this.Profile_.Alternative_Phone_Number_Change = 0;
          this.Profile_.Alternative_Email_Change = 0;

          if (this.profile_View == true) {
            this.Create_New();
            this.Clr_Student();
            this.Close_Click();
          } else {
            this.Close_Click();
          }
        } else if (Number(Save_status[0].Duplicate_type) == 1) {
          this.Save_Call_Status = false;
          var Show_FollowUp_Date;
          if (Save_status[0].Department_Status == 0) {
            Show_FollowUp_Date = "";
          } else {
            Show_FollowUp_Date =
              ",FollowUp Date is :" + Save_status[0].Duplicate_FollowUp_Date;
          }
          // debugger;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: {
              Message: Save_status[0].Duplicate_Message_,
              // "The Phone Number Already Exist for " +
              // Save_status[0].Duplicate_Student_Name +
              // " and is handled by " +
              // Save_status[0].Duplicate_User_Name +
              // Show_FollowUp_Date +
              // " ,Department is: " +
              // Save_status[0].Duplicate_Department_Name +
              // " and Remark is: " +
              // Save_status[0].Duplicate_Remark_Name +
              // ",Do you want to add FollowUp?",
              Type: true,
              Heading: "Duplicate Entry",
            },
          });
          // debugger;
          dialogRef.afterClosed().subscribe((result) => {
            if (result == "No") {
              // debugger;
              this.Followup_Users_Data_t_Filter = [];
              this.Save_Call_Status = false;
              this.New_Followup(
                Save_status[0].Duplicate_Student_Id,
                Save_status[0].Duplicate_Student_Name,
                Save_status[0].Duplicate_Registration,
                Save_status[0].Duplicate_Welcome_Status,
                0,
                0,
                1
              );
              this.Buttonset_view = true;
            }
          });
        } else if (Number(Save_status[0].Student_Id_) == -2) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: {
              Message:
                " Email is Already Exist for " +
                Save_status[0].Duplicate_Student_Name +
                " and is handled by " +
                Save_status[0].Duplicate_User_Name +
                ",FollowUp Date is :" +
                Save_status[0].Duplicate_FollowUp_Date +
                " ,Department is: " +
                Save_status[0].Duplicate_Department_Name +
                " and Remark is: " +
                Save_status[0].Duplicate_Remark_Name,
              Type: "3",
            },
          });
          this.Save_Call_Status = false;
        } else if (Number(Save_status[0].Student_Id_) == -3) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: {
              Message: " User Not Found ",
              Type: "3",
            },
          });
          this.Save_Call_Status = false;
        } else if (Number(Save_status[0].Student_Id_) == -4) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: {
              Message: " Selected status only used with Registered Student ",
              Type: "3",
            },
          });
          this.Save_Call_Status = false;
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

  // 	Date_Difference(Date_)
  // 	{

  //     this.date = Date_;
  //     this.year = this.date.getFullYear();
  //     this.month = this.date.getMonth() + 1;

  // 	function padTo2Digits(num: number) {
  // 		return num.toString().padStart(2, '0');
  // 	  }

  // 	[
  // 		padTo2Digits(this.date.getHours()),
  // 		padTo2Digits(this.date.getMinutes()),
  // 		padTo2Digits(this.date.getSeconds()),
  // 	  ]

  //     if (this.month < 10)
  //     {
  //         this.month = "0" + this.month;
  //     }
  //     this.day = this.date.getDate().toString();

  //     if (Number.parseInt(this.day) < 10)
  //     {
  //         this.day = "0" + this.day;
  //     }
  // 	this.Hours = this.date.getHours().toString();
  // 	this.Minutes = this.date.getMinutes().toString();
  // 	this.Seconds = this.date.getSeconds().toString();

  //     this.date = this.year + "-" + this.month + "-" + this.day+ "-" + this.Seconds+ "-" + this.Minutes+ "-" + this.Seconds;
  //     return this.date;
  // }
  // Add_Date_Hostel(Date_, days) {
  // 	this.date = new Date(Date_);
  // 	//this.date=new Date();
  //
  // 	this.date.setDate(this.date.getDate() + days);
  // 	this.year = this.date.getFullYear();
  // 	this.monthnew = this.month + days;
  // 	if (this.month < 10) {
  // 	this.month = "0" + this.month;
  // 	}
  // 	this.day = this.date.getDate().toString();

  // 	if (Number.parseInt(this.day) < 10) {
  // 	this.day = "0" + this.day;
  // 	}
  // 	this.date = this.year + "-" + this.monthnew + "-" + this.day;

  // 	return this.date;
  // 	}

  Save_Student() {
    if (this.Flag_Student == 1) {
      // if(this.Save_Agent_==undefined || this.Save_Agent_==null || this.Save_Agent_.Client_Accounts_Id==undefined || this.Save_Agent_.Client_Accounts_Id==0)
      // {
      //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: ' Please Select Agent', Type: "3" } });
      //     return;
      // }
      if (
        this.Enquiry_Source_ == undefined ||
        this.Enquiry_Source_ == null ||
        this.Enquiry_Source_.Enquiry_Source_Id == undefined ||
        this.Enquiry_Source_.Enquiry_Source_Id == 0
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Enquiry source", Type: "3" },
        });
        return;
      }
      if (
        this.Student_.Student_Name == undefined ||
        this.Student_.Student_Name == null ||
        this.Student_.Student_Name == ""
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Enter Student Name", Type: "3" },
        });
        return;
      }
      // if (this.Student_.Dob== undefined || this.Student_.Dob == null || this.Student_.Dob == "" ) {
      //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter DOB', Type: "3" } });
      //     return;
      // }
      // if (this.Gender_ == undefined || this.Gender_ == null || this.Gender_.Gender_Id == undefined || this.Gender_.Gender_Id==0) {
      //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Gender', Type: "3" } });
      //     return;
      // }
      // if (this.Student_Status_== undefined || this.Student_Status_ == null || this.Student_Status_.Student_Status_Id == undefined || this.Student_Status_.Student_Status_Id==0) {
      //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select status', Type: "3" } });
      //     return;
      // }

      if (
        this.Student_.Phone_Number == undefined ||
        this.Student_.Phone_Number == null ||
        this.Student_.Phone_Number == ""
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Enter Contact No Number", Type: "3" },
        });
        return;
      }
      // if (this.Student_.Email== undefined || this.Student_.Email == null || this.Student_.Email== "" ) {
      //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Please add mail address', Type: "3" } });
      //     return;
      // }
    }
    if (this.Flag_Followup == 1) {
      if (
        this.FollowUp_Branch_ == null ||
        this.FollowUp_Branch_ == undefined ||
        this.FollowUp_Branch_.Branch_Id == undefined ||
        this.FollowUp_Branch_.Branch_Id == null
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "select Followup Branch", Type: "3" },
        });
        return;
      } else if (
        this.FollowUp_Department_ == null ||
        this.FollowUp_Department_ == undefined ||
        this.FollowUp_Department_.Department_Id == undefined ||
        this.FollowUp_Department_.Department_Id == null
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Followup Department", Type: "3" },
        });
        return;
      } else if (
        this.FollowUp_Status_ == null ||
        this.FollowUp_Status_ == undefined ||
        this.FollowUp_Status_.Department_Status_Id == undefined ||
        this.FollowUp_Status_.Department_Status_Id == null
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Followup Status", Type: "3" },
        });
        return;
      } else if (
        this.Followup_Users_ == null ||
        this.Followup_Users_ == undefined ||
        this.Followup_Users_.User_Details_Id == undefined ||
        this.Followup_Users_.User_Details_Id == null
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Followup To Staff", Type: "3" },
        });
        return;
      } else {
        var Resume_Id = 0;
        var LOR_1_Id = 0;
        var LOR_2_Id = 0;
        var Ielts_Id = 0;
        var MOI_Id = 0;
        var SOP_Id = 0;

        var Remarks_Id_temp = 0;
        var Remarks_Caption_Temp = "";

        if (this.Remarks_ == null) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Enter the Remark", Type: "3" },
          });
          return;
        } else if (this.Remarks_.Remarks_Name != null) {
          Remarks_Id_temp = this.Remarks_.Remarks_Id;
          Remarks_Caption_Temp = this.Remarks_.Remarks_Name;
        } else {
          Remarks_Caption_Temp = String(this.Remarks_);
        }
        if (Remarks_Caption_Temp == null || Remarks_Caption_Temp == "") {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Enter the Remark", Type: "3" },
          });
          return;
        }
      }
    }

    var Main_Array = {
      Student: this.Fill_Student(),
      Followup: this.Fill_Followup(),
    };
    if (Main_Array.Student == null && Main_Array.Followup == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Saved", Type: "false" },
      });
      return;
    }

    var Checklisst_Array = [];
    for (var m = 0; m < this.StudentChecklist_Data.length; m++) {
      if (
        Boolean(this.StudentChecklist_Data[m].Applicable) == true ||
        Boolean(this.StudentChecklist_Data[m].Checklist_Status) == true
      ) {
        Checklisst_Array.push(this.StudentChecklist_Data[m]);
      }
      // else
      //     Checklisst_Array.push(this.StudentChecklist_Data[m]);
    }

    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;
    this.Student_.Resume_Id = this.Resume_Mode_.Resume_Id;
    this.Student_.Passport_Id = this.Passport_Mode_.Passport_Id;
    this.Student_.LOR_1_Id = this.LOR_1_Mode_.LOR_1_Id;
    this.Student_.LOR_2_Id = this.LOR_2_Mode_.LOR_2_Id;
    this.Student_.MOI_Id = this.MOI_Mode_.MOI_Id;
    this.Student_.SOP_Id = this.SOP_Mode_.SOP_Id;
    this.Student_.Ielts_Id = this.Ielts_Mode_.Ielts_Id;

    //  this.Student_.Programme_Course=this.Course_.Course_Id;

    this.Student_Service_.Save_Student(
      Main_Array,
      this.ImageFile_passport,
      this.ImageFile_Ielts,
      this.ImageFile_Photo,
      this.ImageFile_Tenth,
      this.ImageFile_Experience,
      this.ImageFile_Resume,
      this.Document_File_Array,
      this.Document_Array,
      this.Document_Description,
      this.ImageFile,
      this.Display_File_Name_,
      Checklisst_Array
    ).subscribe(
      (Save_status) => {
        //log(Save_status)

        if (Number(Save_status[0][0].Student_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Save_Call_Status = false;
          this.Total_Rows = this.Total_Rows - this.Student_Data.length;

          if (this.profile_View == true) {
            // this.Create_New();
            this.Clr_Student();
            this.Search_Student(1);
            this.Close_Click();
          } else {
            this.Close_Click();
            this.Search_Student(1);
          }
        } else if (Number(Save_status[0][0].Student_Id_) == -1) {
          this.Save_Call_Status = false;
          var Show_FollowUp_Date;
          if (Save_status[0][0].Department_Status == 0) {
            Show_FollowUp_Date = "";
          } else {
            Show_FollowUp_Date =
              ",FollowUp Date is :" + Save_status[0][0].Duplicate_FollowUp_Date;
          }
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: {
              Message:
                "The Phone Number Already Exist for " +
                Save_status[0][0].Duplicate_Student_Name +
                " and is handled by " +
                Save_status[0][0].Duplicate_User_Name +
                Show_FollowUp_Date +
                " ,Department is: " +
                Save_status[0][0].Duplicate_Department_Name +
                " and Remark is: " +
                Save_status[0][0].Duplicate_Remark_Name +
                ",Do you want to add FollowUp?",
              Type: true,
              Heading: "Duplicate Entry",
            },
          });
          dialogRef.afterClosed().subscribe((result) => {
            if (result == "Yes") {
              this.Save_Call_Status = false;
              this.New_Followup(
                Save_status[0][0].Duplicate_Student_Id,
                Save_status[0][0].Duplicate_Student_Name,
                Save_status[0][0].Duplicate_Registration,
                Save_status[0][0].Duplicate_Welcome_Status,
                0,
                0,
                1
              );
            }
          });
        } else if (Number(Save_status[0][0].Student_Id_) == -2) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: {
              Message:
                " Email is Already Exist for " +
                Save_status[0][0].Duplicate_Student_Name +
                " and is handled by " +
                Save_status[0][0].Duplicate_User_Name +
                ",FollowUp Date is :" +
                Save_status[0][0].Duplicate_FollowUp_Date +
                " ,Department is: " +
                Save_status[0][0].Duplicate_Department_Name +
                " and Remark is: " +
                Save_status[0][0].Duplicate_Remark_Name,
              Type: "3",
            },
          });
          this.Save_Call_Status = false;
        } else {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Error Occured", Type: "2" },
          });
          this.Save_Call_Status = false;
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
        this.Save_Call_Status = false;
      }
    );
  }
  Fill_Student() {
    var phone = this.Student_.Phone_Number;
    if (this.Flag_Student == 1) {

      this.Student_.Entry_date = this.New_Date(
        new Date(moment(this.Student_.Entry_date).format("YYYY-MM-DD")));

      // if(this.Student_.Created_On==undefined || this.Student_.Created_On==null || this.Student_.Created_On =='NaN' || this.Student_.Created_On=="")
      // {
      //     this.Student_.Created_On = "";
      // }
      // else
      // this.Student_.Created_On = this.New_Date(
      // 	new Date(moment(this.Student_.Created_On).format("YYYY-MM-DD"))
      // );

      var Programe_Course_Id_temp = 0;
      var Programe_Course_Caption_Temp = "";

      if (this.Program_Course_ != undefined || this.Program_Course_ != null) {
        if (
          this.Program_Course_.Course_Id == undefined ||
          this.Program_Course_.Course_Id == null
        ) {
          Programe_Course_Id_temp = -1; //this.Program_Course_.Course_Id
          Programe_Course_Caption_Temp = String(this.Program_Course_); //this.Program_Course_.Course_Name
        } else {
          Programe_Course_Id_temp = this.Program_Course_.Course_Id;
          Programe_Course_Caption_Temp = this.Program_Course_.Course_Name;
        }
      } else {
        Programe_Course_Id_temp = 0;
        Programe_Course_Caption_Temp = "";
      }

      var Profile_University_Id_temp = 0;
      var Profile_University_Caption_Temp = "";

      if (
        this.Profile_University_ != undefined ||
        this.Profile_University_ != null
      ) {
        if (
          this.Profile_University_.Country_Id == undefined ||
          this.Profile_University_.Country_Id == null
        ) {
          Profile_University_Id_temp = -1;
          Profile_University_Caption_Temp = String(this.Profile_University_);
        } else {
          Profile_University_Id_temp = this.Profile_University_.Country_Id;
          Profile_University_Caption_Temp =
            this.Profile_University_.Country_Name;
        }
      } else {
        Profile_University_Id_temp = 0;
        Profile_University_Caption_Temp = "";
      }

      var Profile_Country_Id_temp = 0;
      var Profile_Country_Caption_Temp = "";

      // if (this.Profile_Country_ != undefined || this.Profile_Country_ != null) {
      //   if (
      //     this.Profile_Country_.Country_Id == undefined ||
      //     this.Profile_Country_.Country_Id == null
      //   ) {
      //     Profile_Country_Id_temp = -1;
      //     Profile_Country_Caption_Temp = String(this.Profile_Country_);
      //   } else {
      //     Profile_Country_Id_temp = this.Profile_Country_.Country_Id;
      //     Profile_Country_Caption_Temp = this.Profile_Country_.Country_Name;
      //   }
      // } else {
      //   Profile_Country_Id_temp = 0;
      //   Profile_Country_Caption_Temp = "";
      // }
      //for new university ,country and course

      // this.Student_.Dob = this.New_Date(new Date(moment(this.Student_.Dob).format('YYYY-MM-DD')));

      this.Student_.Phone_Number = phone.toString().trim();
      //  replace(/ +/g, "");
      // this.Student_.Resume_Id = this.Resume_.Resume_Id;
      this.Student_.LOR_1_Id = this.LOR_1_.LOR_1_Id;
      this.Student_.LOR_2_Id = this.LOR_2_.LOR_2_Id;
      this.Student_.Ielts_Id = this.Ielts_.Ielts_Id;
      this.Student_.MOI_Id = this.MOI_.MOI_Id;
      this.Student_.Marital_Status_Id = this.Marital_Status_.Marital_Status_Id;
      this.Student_.Marital_Status_Name =
        this.Marital_Status_.Marital_Status_Name;

      this.Student_.Intake_Id = this.Profile_Intake_Mode_.Intake_Id;
      this.Student_.Intake = this.Profile_Intake_Mode_.Intake_Name;

      this.Student_.Program_Course_Id = Programe_Course_Id_temp;
      this.Student_.Programme_Course = Programe_Course_Caption_Temp;
      this.Student_.Profile_University_Id = Programe_Course_Id_temp;
      this.Student_.College_University = Profile_University_Caption_Temp;

      this.Student_.Country_Name = Profile_Country_Caption_Temp;
      this.Student_.Profile_Country_Id = Profile_Country_Id_temp;

      this.Student_.Passport_Id = this.Passport_.Passport_Id;
      this.Student_.Resume_Id = this.Resume_.Resume_Id;

      this.Student_.SOP_Id = this.SOP_.SOP_Id;

      this.Student_.Gender = this.Gender_.Gender_Name;
      this.Student_.Student_Status_Id = 1; //this.Student_Status_.Student_Status_Id;

      this.Student_.Enquiry_Source_Id = this.Enquiry_Source_.Enquiry_Source_Id;
      this.Student_.Enquiry_Source_Name =
        this.Enquiry_Source_.Enquiry_Source_Name;
      this.Student_.Agent_Id = 1; //this.Save_Agent_.Client_Accounts_Id;
      this.Student_.Passport_Copy_File_Name = this.Display_passport_;
      this.Student_.Passport_Photo_File_Name = this.Display_Photo_;
      this.Student_.Tenth_Certificate_File_Name = this.Display_Tenth_;
      this.Student_.Work_Experience_File_Name = this.Display_Experience_;
      this.Student_.Resume_File_Name = this.Display_Resume_;
      this.Student_.IELTS_File_Name = this.Display_Ielts_;

      this.Student_.Login_Branch = this.Branch_Id;
      this.Student_.Enquiryfor_Id = this.Enquiry_For_.Enquiryfor_Id;
      this.Student_.Enquirfor_Name = this.Enquiry_For_.Enquirfor_Name;
      this.Student_.Shore_Id = this.Shore_.Shore_Id;
      this.Student_.Shore_Name = this.Shore_.Shore_Name;

      // if(this.Program_Course_.Course_Id==undefined||this.Program_Course_.Course_Id==null)
      // {
      //   this.Student_.Program_Course_Id=0
      //   this.Student_.Programme_Course=String(this.Program_Course_);
      // }
      // else
      // {
      //     this.Student_.Programme_Course=this.Program_Course_.Course_Name;
      //     this.Student_.Program_Course_Id=this.Program_Course_.Course_Id;
      // }
      // if(this.Profile_Country_.Country_Id==undefined||this.Profile_Country_.Country_Id==null)
      // {
      //   this.Student_.Profile_Country_Id=0
      //   this.Student_.Country_Name=String(this.Profile_Country_);
      // }
      // else
      // {
      //     this.Student_.Profile_Country_Id=this.Profile_Country_.Country_Id;
      //     this.Student_.Country_Name=this.Profile_Country_.Country_Name;
      // }
      return this.Student_;
    } else return null;
  }
  Fill_Followup() {
    if (this.Flag_Followup == 1) {
      if (
        this.FollowUp_.Next_FollowUp_Date == undefined ||
        this.FollowUp_.Next_FollowUp_Date == null
      ) {
        this.FollowUp_.Next_FollowUp_Date = new Date();
      }
      var Remarks_Id_temp = 0;
      var Remarks_Caption_Temp = "";

      if (this.Remarks_.Remarks_Id != undefined) {
        Remarks_Id_temp = this.Remarks_.Remarks_Id;
        Remarks_Caption_Temp = this.Remarks_.Remarks_Name;
      } else {
        Remarks_Caption_Temp = String(this.Remarks_);
      }

      this.FollowUp_.Remark_id = Remarks_Id_temp;
      this.FollowUp_.Remark = Remarks_Caption_Temp;
      this.FollowUp_.Student_Id = this.Student_Id;

      this.FollowUp_.Next_FollowUp_Date = this.New_Date(
        new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
      );
      this.FollowUp_.Department = 0;
      this.FollowUp_.Department_Name =
        this.FollowUp_Department_.Department_Name;
      this.FollowUp_.Department_FollowUp =
        this.FollowUp_Department_.Department_FollowUp;
      this.FollowUp_.Branch = 0;
      this.FollowUp_.Branch_Name = this.FollowUp_Branch_.Branch_Name;
      this.FollowUp_.Status_Id = this.FollowUp_Status_.Department_Status_Id;
      this.FollowUp_.Department_Status_Name =
        this.FollowUp_Status_.Department_Status_Name;
      this.FollowUp_.To_User_Id = this.Followup_Users_.User_Details_Id;
      this.FollowUp_.To_User_Name = this.Followup_Users_.User_Details_Name;
      this.FollowUp_.By_User_Id = Number(this.Login_User);
      this.FollowUp_.By_User_Name = this.Login_User_Name;

      return this.FollowUp_;
    } else return null;
  }
  View_Follow_Click_() {
    if (this.Fee_Collection_View != undefined) {
      this.Fee_Collection_View = false;
    }

    this.FollowUp_Sub_Status_ = null;
    this.Followup_Substatus_Data_Filter = [];
    this.Followup_Substatus_Data = [];

    this.View_History_ = false;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
    // this.Document_View_Status=true;

    this.Buttonset_view = true;
    this.Transfer_Button_view = false;
    // debugger;

    this.New_Followup(
      this.Student_Id,
      this.Student_.Student_Name,
      this.Student_.Is_Registered,
      this.Student_.Send_Welcome_Mail_Status,
      this.Lead_EditIndex,
      1,
      0
    );
    this.New_view = true;
    let top1 = document.getElementById("Bottom1div");
    if (top1 == null) {
      top1.scrollIntoView();
      top1 != null;
    }

    //this.Create_New=true;
  }
  downloadZip() {
    var ar = [];
    this.zip.forEach(function (relativePath, file) {
      ar.push(relativePath);
    });
    for (var i = 0; i < ar.length; i++) this.zip.remove(ar[i]);

    this.files = [];
    for (var i = 0; i < this.Document_Array.length; i++) {
      // this.files.push(this.Document_Array[i].File_Name);
    }
    if (this.Student_.Passport_Copy != "")
      this.files.push(this.Student_.Passport_Copy);
    if (this.Student_.IELTS != "") this.files.push(this.Student_.IELTS);
    if (this.Student_.Passport_Photo != "")
      this.files.push(this.Student_.Passport_Photo);
    if (this.Student_.Tenth_Certificate != "")
      this.files.push(this.Student_.Tenth_Certificate);
    if (this.Student_.Work_Experience != "")
      this.files.push(this.Student_.Work_Experience);
    if (this.Student_.Resume != "") this.files.push(this.Student_.Resume);
    if (this.files.length > 0) {
      this.issLoading = true;
      this.startDownload(0);
    } else {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "No Files to Download", Type: "2" },
      });
    }
  }

  private startDownload(fileId) {
    // ;

    var bs = environment.FilePath + "/uploads/";
    this.loadSvgData(bs + this.files[fileId], fileId, this.saveAsZip);
  }
  private loadSvgData(url: string, fileId, callback: Function): void {
    this._http
      .get(url, { responseType: "arraybuffer" })
      .subscribe((x) => callback(x, fileId, url));
  }

  saveAsZip = (content: Blob, fileid, Extenssion): void => {
    // ;

    var n = Extenssion.lastIndexOf(".");
    var extn = "File";
    extn = extn.concat(fileid);
    extn = extn.concat(".");
    extn = extn.concat(Extenssion.substring(n + 1, Extenssion.length));
    this.zip.file(extn, content);
    fileid++;
    if (fileid == this.files.length) this.download();
    else this.startDownload(fileid);
  };

  private download() {
    this.zip
      .generateAsync({ type: "blob" })
      .then((blob) => this.save_zipfile(blob));
  }
  save_zipfile(blob) {
    saveAs(blob, "Documents.zip");
    this.issLoading = false;
  }
  New_Followup(
    Student_Id_,
    Student_Name_,
    registration_status,
    mail_status,
    index,
    Call_From,
    from_duplicate_check
  ) {
    // debugger;
    this.from_duplicate_check = from_duplicate_check;
    let top = document.getElementById("Topdiv");
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }

    this.View_Follow_ = true;
    this.View_History_ = false;
    this.Student_Id = Student_Id_;
    this.Profile_.Student_Id = Student_Id_;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
    this.Next_FollowUp_Date_Visible = true;
    this.New_view = false;
    this.Get_FollowUp_Details();
    this.Student_Name = Student_Name_;
    this.Student_Name_t = Student_Name_;
    this.welcome_mail_view = false;
    this.Registration_Visiblility = false;
    this.Remove_Registration_Visibility = false;
    // this.FollowUp_.Student_Id = Student_Id_;
    this.Show_FollowUp = false;
    this.Entry_View = true;
    this.tab_view = true;
    this.profile_View = false;
    this.Martialdetails_view = false;

    this.application_details_View = false;
    this.Qualification_details_View = false;
    this.language_details_View = false;
    this.course_history_View = false;
    this.Buttonset_view = false;
    this.Transfer_Button_view = false;
    this.Visa_View = false;
    this.History_View = false;
    this.Is_Follow_ = 0;
    this.Is_Duration_ = 0;
    this.Is_Follow_Status_ = 0;
    this.Visamodal_View = false;
    this.Pre_Visamodal_View = false;
    this.Tasknew_View = false;
    this.Tasknewmodal_View = false;
    this.Reviewmodal_View = false;
    this.Reviewdetails_View = false;
    this.Pre_Visa_View = false;
    this.View_document = false;
    this.Course_View = false;
    this.message_View = false;
    this.Flag_Followup = 1;
    this.FollowUp_.Next_FollowUp_Date = new Date();
    this.FollowUp_.Next_FollowUp_Date = this.New_Date(
      this.FollowUp_.Next_FollowUp_Date
    );
    if (mail_status == 0) {
      this.welcome_mail_view = true;
    } else {
      this.welcome_mail_view = false;
    }
    if (registration_status == true) {
      if (
        this.Remove_Registration_Permissions != undefined &&
        this.Remove_Registration_Permissions != null
      )
        if (this.Remove_Registration_Permissions.View == true)
          this.Remove_Registration_Visibility = true;
    } else {
      if (
        this.Registration_Permissions != undefined &&
        this.Registration_Permissions != null
      )
        if (this.Registration_Permissions.View == true)
          this.Registration_Visiblility = true;
    }

    if (Call_From == 0) {
      //for duplicate student followup
      this.View_Student_ = true;
      this.Student_Delete = false;
      this.Lead_EditIndex = index;
      this.Flag_Student = 0;
      this.welcome_mail_view = false;
      this.Registration_Visiblility = false;
      this.Remove_Registration_Visibility = false;
    } else if (Call_From == 2) {
      //followup icon click from student search
      this.View_Student_ = false;
      this.Buttonset_view = true;
      this.Transfer_Button_view = false;
      this.Lead_EditIndex = index;
      this.Flag_Student = 0;
      this.tab_view = false;
      this.FollowUp_.Next_FollowUp_Date = new Date();
      this.FollowUp_.Next_FollowUp_Date = this.New_Date(
        this.FollowUp_.Next_FollowUp_Date
      );
      this.Registration_Visiblility = false;
      this.Remove_Registration_Visibility = false;
    } else {
      this.View_Student_ = true;
      this.Lead_EditIndex = index;
      this.Buttonset_view = true;
      this.Flag_Student = 1;
      this.profile_View = true;
      this.View_document = true;
      if (this.Document_View_Status == true) this.Document_View_Option = true;
    }
  }
  // Followup_History() {
  // 	//  this.Student_Id=this.Student_Data[this.Lead_EditIndex].Student_Id;
  // 	let top = document.getElementById("Bottomdiv");
  // 	if (top !== null) {
  // 		top.scrollIntoView();
  // 		top = null;
  // 	}
  // 	if (this.Show_Followup_History == true) {
  // 		this.Show_Followup_History = false;
  // 		this.issLoading = true;

  // 		this.Student_Service_.Followup_History(this.Student_Id).subscribe(
  // 			(Rows) => {
  // 				this.issLoading = false;
  // 				if (Rows.returnvalue.FollowUp.length > 0)
  // 					this.Followp_History_Data = Rows.returnvalue.FollowUp;
  // 			},
  // 			(Rows) => {
  // 				this.issLoading = false;
  // 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 					panelClass: "Dialogbox-Class",
  // 					data: { Message: "Error Occured", Type: "2" },
  // 				});
  // 			}
  // 		);
  // 	} else this.Show_Followup_History = true;
  // }

  Followup_History(show) {
    // debugger;
    if (show == 1) {
      this.moredetailsbutton = false;
      this.lessdetailsbutton = true;
    } else {
      this.moredetailsbutton = true;
      this.lessdetailsbutton = false;
    }
    // debugger;
    this.Transfer_view = false;
    this.Followupdetailsview = !this.Followupdetailsview;
    this.Followphistoryview = false;

    //  this.Student_Id=this.Student_Data[this.Lead_EditIndex].Student_Id;
    let top = document.getElementById("Bottomdiv");
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
    // if (this.Show_Followup_History == true) {
    //   this.Show_Followup_History = false;
    this.issLoading = true;
    // debugger;
    this.Student_Service_.Followup_History(this.Student_Id).subscribe(
      (Rows) => {
        // debugger;
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
    // }
    //  else this.Show_Followup_History = true;
  }

  Get_Last_Followup() {
    if (
      this.FollowUp_.Branch == 0 ||
      this.FollowUp_.Branch == undefined ||
      this.FollowUp_.Branch == null
    ) {
      this.issLoading = true;
      this.Student_Service_.Get_Last_Followup(this.Login_User).subscribe(
        (Save_status) => {
          Save_status = Save_status.returnvalue.FollowUp[0];
          if (Save_status != undefined) {
            this.issLoading = false;
            this.FollowUp_ = Save_status;
            this.Branch_Temp.Branch_Id = this.FollowUp_.Branch;
            this.Branch_Temp.Branch_Name = this.FollowUp_.Branch_Name;
            this.FollowUp_Branch_ = Object.assign({}, this.Branch_Temp);

            this.Department_Temp.Department_FollowUp =
              this.FollowUp_.Department_FollowUp;
            this.Department_Temp.Department_Id = this.FollowUp_.Department;
            this.Department_Temp.Department_Name =
              this.FollowUp_.Department_Name;
            this.FollowUp_Department_ = Object.assign({}, this.Department_Temp);

            this.Status_Temp.FollowUp = this.FollowUp_.Department_FollowUp;
            this.Status_Temp.Department_Status_Id = this.FollowUp_.Status_Id;
            this.Status_Temp.Department_Status_Name =
              this.FollowUp_.Department_Status_Name;
            this.Status_Temp.Class_Id = this.FollowUp_.Class_Id;
            this.Status_Temp.Class_Name = this.FollowUp_.Class_Name;
            this.Status_Temp.Class_Order = this.FollowUp_.Class_Order;
            this.FollowUp_Status_ = Object.assign({}, this.Status_Temp);

            this.Users_Temp_c.User_Details_Id = this.FollowUp_.User_Id;
            this.Users_Temp_c.User_Details_Name =
              this.FollowUp_.User_Details_Name;
            this.Followup_Users_ = Object.assign({}, this.Users_Temp_c);

            if (this.FollowUp_.Department_FollowUp == true) this.Is_Follow_ = 1;
            else this.Is_Follow_ = 0;

            // if (this.FollowUp_.Department_Status_Duration == true) {
            // 	this.FollowUp_.Duration = this.FollowUp_.Followup_Duration;
            // 	this.Is_Duration_ = 1;
            // }
            // else this.Is_Duration_ = 0;

            this.FollowUp_.Next_FollowUp_Date = new Date();
            this.FollowUp_.Next_FollowUp_Date = this.New_Date(
              this.FollowUp_.Next_FollowUp_Date
            );

            this.FollowUp_.Remark = "";
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
  }

  Refund_request(Fees_Receipt_Id_temp) {
    this.Fees_Receipt_Id_data = Fees_Receipt_Id_temp;
    this.Refund_View = true;
    this.Get_Refundrequestdetails(
      this.Profile_.Student_Id,
      Fees_Receipt_Id_temp
    );
  }

  Get_FollowUp_Details() {
    //return
    // debugger
    this.issLoading = true;
    this.language_details_View = false;
    this.Languagemodal_View = false;

    // this.New_view=false;
    this.Transfer_view = false;
    this.Qualificationmodal_View = false;
    this.Workexperiencenew_View = false;

    this.Followup_Department_Data = [];
    this.Followup_Status_Data = [];
    this.Followup_Users_Data_t = [];
    this.Followup_Status_Data_filter = [];

    this.Student_Service_.Get_FollowUp_Details(this.Student_Id).subscribe(
      (Rows) => {
        this.issLoading = false;
        this.profile_View = false;
        this.FollowUp_ = Rows.returnvalue.FollowUp[0];
        this.Is_Follow_ = Rows.returnvalue.FollowUp[0].Department_FollowUp;
        this.Is_Duration_ =
          Rows.returnvalue.FollowUp[0].Department_Status_Duration;
        if (this.FollowUp_.Is_Registered == 1) {
          this.Registered_Check = 1;
        }

        if (this.FollowUp_ != null && this.FollowUp_ != undefined) {
          this.Followup_Branch_Temp.Branch_Id = this.FollowUp_.Branch;
          this.Followup_Branch_Temp.Branch_Name = this.FollowUp_.Branch_Name;
          this.FollowUp_Branch_ = Object.assign({}, this.Followup_Branch_Temp);

          this.Followup_Department_Temp.Department_FollowUp =
            this.FollowUp_.Department_FollowUp;
          this.Followup_Department_Temp.Department_Id =
            this.FollowUp_.Department;
          this.Followup_Department_Temp.Department_Name =
            this.FollowUp_.Department_Name;
          this.FollowUp_Department_ = Object.assign(
            {},
            this.Followup_Department_Temp
          );

          this.Followup_Status_Temp.FollowUp =
            this.FollowUp_.Department_FollowUp;
          this.Followup_Status_Temp.Department_Status_Id =
            this.FollowUp_.Status_Id;
          this.Followup_Status_Temp.Department_Status_Name =
            this.FollowUp_.Department_Status_Name;
          this.Followup_Status_Temp.Duration =
            this.FollowUp_.Department_Status_Duration;
          this.FollowUp_Status_ = Object.assign({}, this.Followup_Status_Temp);

          this.Followup_Status_Temp.Status_Type_Id =
            this.FollowUp_.Status_Type_Id;
          this.Followup_Status_Temp.Status_Type_Name =
            this.FollowUp_.Status_Type_Name;

          this.Followup_Sub_Status_Temp.Sub_Status_Id =
            this.FollowUp_.Sub_Status_Id;
          this.Followup_Sub_Status_Temp.Sub_Status_Name =
            this.FollowUp_.Sub_Status_Name;
          this.FollowUp_Status_ = Object.assign({}, this.Followup_Status_Temp);

          this.Followup_Users_Temp.User_Details_Id = this.FollowUp_.To_User_Id;
          this.Followup_Users_Temp.User_Details_Name =
            this.FollowUp_.To_User_Name;
          this.Followup_Users_ = Object.assign({}, this.Followup_Users_Temp);

          this.FollowUp_.Remark = "";
          this.Remarks_Temp.Remarks_Id = 0;
          this.Remarks_Temp.Remarks_Name = "";
          this.Remarks_ = this.Remarks_Temp;
          this.FollowUp_.Next_FollowUp_Date = new Date();
          this.FollowUp_.Next_FollowUp_Date = this.New_Date(
            this.FollowUp_.Next_FollowUp_Date
          );
        }

        for (var i = 0; i < this.class_Data.length; i++) {
          if (this.FollowUp_.Class_Id == this.class_Data[i].Class_Id)
            this.class_ = this.class_Data[i];
        }
        // this.Lead_Id=0;
        if (this.FollowUp_.Department_FollowUp == true) {
          this.Is_Follow_ = 1;
        } else this.Is_Follow_ = 0;
        // if (this.FollowUp_.Department_Status_Duration == true) {
        // 	this.FollowUp_.Duration = this.FollowUp_.Followup_Duration;
        // 	this.Is_Duration_ = 1;
        // }
        // else this.Is_Duration_ = 0;
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

  Download_All(Items_) {
    var bs = "C:/Teena/Edabroad/Back End/Uploads/";
    var s = bs + Items_;

    window.open(s, "_blank");
  }

  Get_Student_Edit(Student_Id) {
    this.issLoading = true;

    this.Student_Service_.Get_Student_Edit(Student_Id).subscribe(
      (Rows) => {
        this.StudentChecklist_Data = Rows[0];
        for (var j = 0; j < this.StudentChecklist_Data.length; j++) {
          if (this.StudentChecklist_Data[j].Applicable.toString() == "1")
            this.StudentChecklist_Data[j].Applicable = true;
          else this.StudentChecklist_Data[j].Applicable = false;
          if (this.StudentChecklist_Data[j].Checklist_Status.toString() == "1")
            this.StudentChecklist_Data[j].Checklist_Status = true;
          else this.StudentChecklist_Data[j].Checklist_Status = false;
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
  Activate_Application(Application_details_a: any, index) {
    // this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;
    var loginuser = 0;
    loginuser = Number(this.Login_User);
    Application_details_a.LoginUser = loginuser;
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to Activate ?",
        Type: true,
        Heading: "Confirm",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;

        this.Student_Service_.Activate_Application(
          Application_details_a
        ).subscribe(
          (Save_status) => {
            if (Number(Save_status[0][0].Application_details_Id_) > 0) {
              this.Remove_Activte_Visiblility = false;
              this.Activte_Visiblility = false;

              if (
                this.Remove_Activity_Permissions != undefined &&
                this.Remove_Activity_Permissions != null
              )
                if (this.Remove_Activity_Permissions.View == true)
                  this.Remove_Activte_Visiblility = true;

              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Activated", Type: "false" },
              });
              // this.Total_Rows = this.Total_Rows - this.Student_Data.length;

              this.Get_ApplicationDetails();
              if (Number(this.Login_User) != Save_status[0][0].To_User_) {
                var message = {
                  Student_Name: Save_status[0][0].Student_Name_,
                  From_User_Name: Save_status[0][0].From_User_Name_,
                  Notification_Type_Name:
                    Save_status[0][0].Notification_Type_Name_,
                  Entry_Type: Save_status[0][0].Entry_Type_,
                  To_User: Save_status[0][0].To_User_,
                  Notification_Id: Save_status[0][0].Notification_Id_,
                  Student_Id: Save_status[0][0].Student_Id_,
                };
                this.socket.emit("new-message", message);
              }
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  // Change_Bph_Status(application_details_Id) {
  // 	this.Application_Status_Edit = application_details_Id;
  // 	this.application_details_View = false;
  // 	this.Applicationmodal_View = false;
  // 	this.Change_Status_View = true;
  // }

  Change_Bph_Status(application_details_u: any, i) {
    this.Department_Status_Mode_Data1 = [];
    this.Department_Status_Mode_Data1_Filter = [];
    this.Department_Status_Mode1_ = null;

    this.application_details_View = false;
    this.Applicationmodal_View = false;
    this.Change_Status_View = true;
    //   this.Application_Status_Edit=application_details_u.;
    this.App_List_Student_Name = application_details_u.Student_Name;
    this.ApplicationDetails_.Next_FollowUp_Date = new Date();
    this.ApplicationDetails_.Next_FollowUp_Date = this.New_Date(
      this.ApplicationDetails_.Next_FollowUp_Date
    );
    this.Student_Id_Transfer = application_details_u.Student_Id;
    this.Application_Status_.Remark = application_details_u.Remark;
    this.Application_Id_Log = application_details_u.Application_details_Id;
    this.ApplicationStatus_Id_Log = application_details_u.Application_status_Id;
    this.ApplicationStatus_Name_Log =
      application_details_u.Application_Status_Name;

    this.group_restriction = application_details_u.Group_Restriction;

    this.FollowUp_Branch_1.Branch_Id = application_details_u.Branch_Id;
    this.FollowUp_Branch_1.Branch_Name = application_details_u.Branch_Name;

    this.FollowUp_Department_1.Department_Id = application_details_u.Department_Id;
    this.FollowUp_Department_1.Department_Name = application_details_u.Department_Name;

    this.Followup_Users_List_.User_Details_Id = application_details_u.To_User_Id;
    this.Followup_Users_List_.User_Details_Name = application_details_u.To_Staff_Name;

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

    // if (this.Offerchasing_section_View == true) {
    // 	this.Offtertype_View = true;
    // }

    // this.Search_Div = false;

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

    // this.Department_Status_Mode_Temp1.Department_Status_Id = application_details_u.Application_status_Id;
    // this.Department_Status_Mode_Temp1.Department_Status_Name = application_details_u.Application_Status_Name;
    // this.Department_Status_Mode1_ = Object.assign({}, this.Department_Status_Mode_Temp1);

    this.ApplicationDetails_.Application_No =
      application_details_u.Application_No;
    for (var n = 0; n < this.Department_Status_Mode_Data.length; n++) {
      if (
        application_details_u.Department_Status_Id ==
        this.Department_Status_Mode_Data[n].Department_Status_Id
      )
        this.Department_Status_Mode_ = this.Department_Status_Mode_Data[n];
    }
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

  Load_Conditions_Subdata_Edit(Application_details_Id_) {
    this.Student_Service_.Load_Conditions_Subdata_Edit(
      Application_details_Id_
    ).subscribe(
      (Rows) => {
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

  Clr_Bph_Status() {
    // if (this.Department_Status_Mode_Data != null && this.Department_Status_Mode_Data != undefined)
    // 	this.Department_Status_Mode_ = this.Department_Status_Mode_Data[0];
    this.Department_Status_Mode1_ = null;

    this.ApplicationDetails_.Bph_Remark = "";
    this.FollowUp_Branch_1 = new Branch();;
    this.FollowUp_Department_1 = new Department();
    this.Followup_Users_List_ = new User_Details();
  }

  Save_Bph_Status() {
    if (
      this.Department_Status_Mode_ == undefined ||
      this.Department_Status_Mode_ == null ||
      this.Department_Status_Mode_.Department_Status_Id == undefined ||
      this.Department_Status_Mode_.Department_Status_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Department Status", Type: "3" },
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
    // this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;

    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to Change Status?",
        Type: true,
        Heading: "Confirm",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.Bph_Status = this.Department_Status_Mode_.Department_Status_Id;
      if (result == "Yes") {
        this.issLoading = true;

        this.Student_Service_.Save_Bph_Status(
          this.Application_Status_Edit,
          this.Login_User,
          this.Bph_Status,
          this.ApplicationDetails_.Bph_Remark
        ).subscribe(
          (Save_status) => {
            if (Number(Save_status[0][0].Application_details_Id_) == -2) {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Counsellor User not found", Type: "2" },
              });
            } else if (Number(Save_status[0][0].Application_details_Id_) > 0) {
              this.Remove_Activte_Visiblility = false;
              this.Activte_Visiblility = false;

              // if (
              // 	this.Remove_Activity_Permissions != undefined &&
              // 	this.Remove_Activity_Permissions != null
              // )
              // 	if (this.Remove_Activity_Permissions.View == true)
              // 		this.Remove_Activte_Visiblility = true;

              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Saved", Type: "false" },
              });
              // this.Total_Rows = this.Total_Rows - this.Student_Data.length;

              this.Get_ApplicationDetails();
              this.Clr_Bph_Status();
              this.Search_Lead_button();
              if (Number(this.Login_User != Save_status[0][0].To_User_)) {
                var message = {
                  Student_Name: Save_status[0][0].Student_Name_,
                  From_User_Name: Save_status[0][0].From_User_Name_,
                  Notification_Type_Name:
                    Save_status[0][0].Notification_Type_Name_,
                  Entry_Type: Save_status[0][0].Entry_Type_,
                  To_User: Save_status[0][0].To_User_,
                  Notification_Id: Save_status[0][0].Notification_Id_,
                  Student_Id: Save_status[0][0].Student_Id_,
                };
                this.socket.emit("new-message", message);
              }
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
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
    this.Status_Change_Data_.Agent_Id = this.Agent_Mode_.Agent_Id;
    this.Status_Change_Data_.Application_No =
      this.ApplicationDetails_.Application_No;
    this.Status_Change_Data_.Agent_Name = this.Agent_Mode_.Agent_Name;
    this.Status_Change_Data_.Offerletter_Type_Id =
      this.Offerletter_Type_.Offerletter_Type_Id;
    this.Status_Change_Data_.Offerletter_Type_Name =
      this.Offerletter_Type_.Offerletter_Type_Name;

    this.Status_Change_Data_.Remark = this.ApplicationDetails_.Bph_Remark;
    this.Status_Change_Data_.FollowUp = this.Department_Status_Mode1_.FollowUp;

    this.Status_Change_Data_.Class_Id = this.Department_Status_Mode1_.Class_Id;
    this.Status_Change_Data_.Class_Name =
      this.Department_Status_Mode1_.Class_Name;
    this.Status_Change_Data_.Class_Order =
      this.Department_Status_Mode1_.Class_Order;
    this.Status_Change_Data_.Department_Id =
      this.FollowUp_Department_1.Department_Id;
    this.Status_Change_Data_.Department_Name =
      this.FollowUp_Department_1.Department_Name;
    this.Status_Change_Data_.Branch_Id = this.FollowUp_Branch_1.Branch_Id;
    this.Status_Change_Data_.Branch_Name = this.FollowUp_Branch_1.Branch_Name;
    this.Status_Change_Data_.Next_FollowUp_Date = this.New_Date(
      new Date(this.ApplicationDetails_.Next_FollowUp_Date)
    );

    this.Status_Change_Data_.To_User_Id =
      this.Followup_Users_List_.User_Details_Id;
    this.Status_Change_Data_.To_User_Name =
      this.Followup_Users_List_.User_Details_Name;

    this.Status_Change_Data_.Conditions_Array = this.Conditions_Sub_Data;
    this.issLoading = true;
    this.Student_Service_.Save_Lodgemet(this.Status_Change_Data_).subscribe(
      (Save_status) => {
        // debugger;
        console.log("Save_status: ", Save_status);


        // this.Student_Service_.Save_Lodgemet_Mail(Save_status,this.Status_Change_Data_).subscribe(
        //       (Save_status2) => {

        //        },
        //       (Rows2) => {
        //         this.issLoading = false;
        //         const dialogRef = this.dialogBox.open(DialogBox_Component, {
        //           panelClass: "Dialogbox-Class",
        //           data: { Message: "Mail Error Occured", Type: "2" },
        //         });
        //       }
        //     );


        if (Number(Save_status[0].Application_details_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
        } else if (Number(Save_status[0].Application_details_Id_) == -1) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: {
              Message: " Selected status only used with Registered Student",
              Type: "3",
            },
          });
          this.issLoading = false;
          return;
        }

        // this.Total_Rows = this.Total_Rows - this.Student_Data.length;
        this.Conditions_Sub_Data = [];
        // this.Get_ApplicationDetails();
        // this.Clr_Bph_Status();
        this.Get_ApplicationDetails();
        this.Close_Click_Change_Status();
        // this.Search_Lead_button();
        this.Transfer_app_Status_Id = Save_status[0].Application_Status_Id_;
        this.Transfer_app_Student_Id = Save_status[0].Student_Id_;
        this.Transfer_app_Department_Id = Save_status[0].Transfer_department_;
        this.Transfer_app_Status_Name = Save_status[0].Application_Status_Name_;
        this.Application_Id_Ref_ = Save_status[0].Application_details_Id_;
        console.log(
          "Save_status[0].Transferdept_Tik_: ",
          Save_status[0].Transferdept_Tik_
        );
        console.log(
          "Save_status[0].Notification_Tik_: ",
          Save_status[0].Notification_Tik_
        );
        console.log("Save_status[0].To_User_Id_: ", Save_status[0].To_User_Id_);
        console.log("Save_status[0]: ", Save_status[0]);
        if (Save_status[0].Transferdept_Tik_ == 1) {
          this.Transfer_Cofirmation_Application("");
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

  Add_Comment(application_details_u: any, i) {
    this.clr_Chat_Window();
    // Save required variable for fetching department statuses to selectedApplicationsIdDetails
    this.selectedApplicationsIdDetails.Country_Id =
      application_details_u.Country_Id;
    this.selectedApplicationsIdDetails.Course_Id =
      application_details_u.Course_Id;
    this.selectedApplicationsIdDetails.University_Id =
      application_details_u.University_Id;

    this.selectedApplicationsIdDetails.Application_status_Id =
      application_details_u.Application_status_Id;

    this.Department_Status_Mode_Data1 = [];
    this.Department_Status_Mode_Data1_Filter = [];
    this.Department_Status_Mode1_ = null;

    this.application_details_View = false;
    this.Applicationmodal_View = false;
    this.Change_Status_View = false;
    this.Comments_View = true;
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
      new Date(
        moment(this.ApplicationDetails_.Followup_Date).format("YYYY-MM-DD")
      )
    );
    this.ApplicationDetails_.Deadline_Date = new Date();
    this.ApplicationDetails_.Deadline_Date = this.New_Date(
      new Date(
        moment(this.ApplicationDetails_.Deadline_Date).format("YYYY-MM-DD")
      )
    );

    this.ApplicationDetails_.Application_No =
      application_details_u.Application_No;
    for (var n = 0; n < this.Department_Status_Mode_Data.length; n++) {
      if (
        application_details_u.Department_Status_Id ==
        this.Department_Status_Mode_Data[n].Department_Status_Id
      )
        this.Department_Status_Mode_ = this.Department_Status_Mode_Data[n];
    }
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

    this.Get_Comments(this.Application_Id_Log);
  }

  findNewDate() {
    const date = new Date();
    const nowDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return nowDate;
  }

  Student_Approve(Application_details_Id, index) {
    // this.ApplicationDetails_.Student_Id=this.Student_.Student_Id;

    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to Student Approve ?",
        Type: true,
        Heading: "Confirm",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;

        this.Student_Service_.Student_Approve(
          Application_details_Id,
          this.Login_User
        ).subscribe(
          (Save_status) => {
            if (Number(Save_status[0][0].Application_details_Id_) > 0) {
              // this.Remove_Activte_Visiblility = false;
              // this.Activte_Visiblility = false;

              // if (
              //  this.Remove_Activity_Permissions != undefined &&
              //  this.Remove_Activity_Permissions != null
              // )
              //  if (this.Remove_Activity_Permissions.View == true)
              //      this.Remove_Activte_Visiblility = true;

              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Approved", Type: "false" },
              });
              // this.Total_Rows = this.Total_Rows - this.Student_Data.length;

              this.Get_ApplicationDetails();
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  Remove_Activity(Application_details_Id, index) {
    //    application_details_id_
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to Deactivate ?",
        Type: true,
        Heading: "Confirm",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Student_Service_.Remove_Activity(Application_details_Id).subscribe(
          (update_status) => {
            if (update_status[0][0].Application_details_Id_ > 0) {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deactivated", Type: "false" },
              });
              // this.Total_Rows = this.Total_Rows - this.Student_Data.length;
              this.Get_ApplicationDetails();
              if (Number(this.Login_User) != update_status[0][0].To_User_) {
                var message = {
                  Student_Name: update_status[0][0].Student_Name_,
                  From_User_Name: update_status[0][0].From_User_Name_,
                  Notification_Type_Name:
                    update_status[0][0].Notification_Type_Name_,
                  Entry_Type: update_status[0][0].Entry_Type_,
                  To_User: update_status[0][0].To_User_,
                  Notification_Id: update_status[0][0].Notification_Id_,
                  Student_Id: update_status[0][0].Student_Id_,
                };
                this.socket.emit("new-message", message);
              }
              this.Remove_Activte_Visiblility = false;
              this.Activte_Visiblility = false;

              if (
                this.Remove_Activity_Permissions != undefined &&
                this.Remove_Activity_Permissions != null
              )
                if (this.Activity_Permissions.View == true)
                  this.Activte_Visiblility = true;
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }
  Remove_Student_Approval(Application_details_Id, index) {
    //    application_details_id_
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to Remove Student Approval ?",
        Type: true,
        Heading: "Confirm",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Student_Service_.Remove_Student_Approval(
          Application_details_Id
        ).subscribe(
          (update_status) => {
            if (update_status[0][0].Application_details_Id_ > 0) {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Approval Removed", Type: "false" },
              });
              // this.Total_Rows = this.Total_Rows - this.Student_Data.length;
              this.Get_ApplicationDetails();
              // this.Remove_Activte_Visiblility = false;
              // this.Activte_Visiblility = false;

              // if (
              // 	this.Remove_Activity_Permissions != undefined &&
              // 	this.Remove_Activity_Permissions != null
              // )
              // 	if (this.Activity_Permissions.View == true)
              // 		this.Activte_Visiblility = true;
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }
  Fill_Applicationdetails() {
    this.History_View = false;
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

    if (
      this.ApplicationDetails_.Course_Link == null ||
      this.ApplicationDetails_.Course_Link == undefined
    ) {
      this.ApplicationDetails_.Course_Link = "";
    }

    if (
      this.ApplicationDetails_.Remark == null ||
      this.ApplicationDetails_.Remark == undefined
    ) {
      this.ApplicationDetails_.Remark = "";
    }

    this.ApplicationDetails_.Intake_Year_Id =
      this.Intake_Year_Mode_.Intake_Year_Id;
    this.ApplicationDetails_.Intake_Year_Name =
      this.Intake_Year_Mode_.Intake_Year_Name;
    this.ApplicationDetails_.intake_Name = this.Intake_Mode_.Intake_Name;
    this.ApplicationDetails_.intake_Id = this.Intake_Mode_.Intake_Id;
    this.ApplicationDetails_.User_Id = Number(this.Login_User);
    //   this.ApplicationDetails_.Agent_Name=this.Agent_Mode_.Agent_Name;
    this.ApplicationDetails_.Application_Status_Name =
      this.Application_Status_Mode_.Application_Status_Name;
    this.ApplicationDetails_.Application_status_Id =
      this.Application_Status_Mode_.Application_status_Id;
    this.ApplicationDetails_.Student_Id = this.Profile_.Student_Id;
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

    // if (
    //   this.University_1.University_Id == undefined ||
    //   this.University_1.University_Id == null
    // ) {
    this.ApplicationDetails_.University_Id = 0;
    //this.ApplicationDetails_.University_Name = String(this.University_1);
    // } else {
    //   this.ApplicationDetails_.University_Name =
    //     this.University_1.University_Name;
    //   this.ApplicationDetails_.University_Id = this.University_1.University_Id;
    // }

    // if (this.Course_.Course_Id == undefined || this.Course_.Course_Id == null) {
    this.ApplicationDetails_.Course_Id = 0;
    //this.ApplicationDetails_.Course_Name = String(this.Course_);
    // } else {
    //   this.ApplicationDetails_.Course_Name = this.Course_.Course_Name;
    //   this.ApplicationDetails_.Course_Id = this.Course_.Course_Id;
    // }
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
  Fill_FeesReceipt() {
    this.Fees_Receipt_.User_Id = Number(this.Login_User);
    this.Fees_Receipt_.Fees_Id = this.Fees_Data_.Fees_Id;

    this.Fees_Receipt_.Entry_date = this.New_Date(
      new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
    );
    this.Fees_Receipt_.Student_Id = this.Student_Id;

    this.Fees_Receipt_.Student_Name = this.Student_.Student_Name;
    this.Fees_Receipt_.Student_Email = this.Student_.Email;
    this.Fees_Receipt_.To_Account_Id = this.To_Account_.Client_Accounts_Id;
    this.Fees_Receipt_.To_Account_Name = this.To_Account_.Client_Accounts_Name;

    this.Fees_Receipt_.Currency_Id = this.Currency_.Currency_Id;
    this.Fees_Receipt_.Currency = this.Currency_.Currency_Name;

    // this.Fees_Receipt_.Application_details_Id=this.Application_Fees_Course_.Application_details_Id;
    // this.Fees_Receipt_.Application_details_Id=this.Fees_Course_.Application_details_Id;
    // this.Fees_Receipt_.Course_Name=this.Fees_Course_.Course_Name;

    if (this.Fees_Course_ == undefined || this.Fees_Course_ == null) {
      // this.Fees_Receipt_.Course_Id = 0;
      this.Fees_Receipt_.Course_Name = "";
      this.Fees_Receipt_.Application_details_Id = 0;
    } else if (this.Fees_Data_.Fees_Id != 2) {
      this.Fees_Receipt_.Course_Name = "";
      this.Fees_Receipt_.Application_details_Id = 0;
      // this.Fees_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
    } else {
      this.Fees_Receipt_.Course_Name = this.Fees_Course_.Course_Name;
      this.Fees_Receipt_.Application_details_Id =
        this.Fees_Course_.Application_details_Id;
      // this.Fees_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
    }

    // if  (this.Fees_Course_.Course_Id == undefined || this.Fees_Course_.Course_Id == null )
    // {
    // 	// this.Fees_Receipt_.Course_Id = 0;
    // 	this.Fees_Receipt_.Course_Name = '';
    // } else {
    // 	this.Fees_Receipt_.Course_Name = this.Fees_Course_.Course_Name;
    // 	// this.Fees_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
    // }

    return this.Fees_Receipt_;
  }

  Fill_CommissionReceipt() {
    this.Commission_Receipt_.User_Id = Number(this.Login_User);
    // this.Commission_Receipt_.Fees_Id = this.Fees_Data_.Fees_Id;
    this.Commission_Receipt_.Commission_Id =
      this.Commission_Data_.Commission_Id;

    this.Commission_Receipt_.Entry_date = this.New_Date(
      new Date(moment(this.Commission_Receipt_.Entry_date).format("YYYY-MM-DD"))
    );
    this.Commission_Receipt_.Student_Id = this.Student_Id;

    this.Commission_Receipt_.Student_Name = this.Student_.Student_Name;
    this.Commission_Receipt_.Student_Email = this.Student_.Email;
    this.Commission_Receipt_.To_Account_Id =
      this.To_Account_.Client_Accounts_Id;
    this.Commission_Receipt_.To_Account_Name =
      this.To_Account_.Client_Accounts_Name;

    this.Commission_Receipt_.Currency_Id = this.Currency_.Currency_Id;
    this.Commission_Receipt_.Currency = this.Currency_.Currency_Name;

    // this.Commission_Receipt_.Application_details_Id=this.Application_Fees_Course_.Application_details_Id;
    // this.Commission_Receipt_.Application_details_Id=this.Fees_Course_.Application_details_Id;
    // this.Commission_Receipt_.Course_Name=this.Fees_Course_.Course_Name;

    if (this.Fees_Course_ == undefined || this.Fees_Course_ == null) {
      // this.Commission_Receipt_.Course_Id = 0;
      this.Commission_Receipt_.Course_Name = "";
      this.Commission_Receipt_.Application_details_Id = 0;
    }
    // else if (this.Fees_Data_.Fees_Id != 2) {
    // 	this.Commission_Receipt_.Course_Name = "";
    // 	this.Commission_Receipt_.Application_details_Id = 0;
    // 	// this.Commission_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
    // }
    else {
      this.Commission_Receipt_.Course_Name = this.Fees_Course_.Course_Name;
      this.Commission_Receipt_.Application_details_Id =
        this.Fees_Course_.Application_details_Id;
      // this.Commission_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
    }

    // if  (this.Fees_Course_.Course_Id == undefined || this.Fees_Course_.Course_Id == null )
    // {
    // 	// this.Fees_Receipt_.Course_Id = 0;
    // 	this.Fees_Receipt_.Course_Name = '';
    // } else {
    // 	this.Fees_Receipt_.Course_Name = this.Fees_Course_.Course_Name;
    // 	// this.Fees_Receipt_.Course_Id = this.Fees_Course_.Course_Id;
    // }

    return this.Commission_Receipt_;
  }

  Save_ApplicationDetails_Datas() {
    // debugger;
    if (
      this.Application_Country_ == undefined ||
      this.Application_Country_ == null ||
      this.Application_Country_.Country_Id == undefined ||
      this.Application_Country_.Country_Id == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select  Country", Type: "3" },
      });
      return;
    }

    // if (this.University_1 == undefined || this.University_1 == null) {
    //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Select University", Type: "3" },
    //   });
    //   return;
    // }
    // if (this.Course_ == undefined || this.Course_ == null) {
    //   const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Select Course", Type: "3" },
    //   });
    //   return;
    // }
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

    var application_date_ = this.ApplicationDetails_.Date_Of_Applying;
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
        this.issLoading = false;
        if (Number(Save_status[0][0].Application_details_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });

          // if (
          //   this.ApplicationDetails_.Course_Name !=
          //   Save_status[0][0].Course_Name_Old_
          // ) {
          //   if (
          //     this.Course_.Course_Id == undefined ||
          //     this.Course_.Course_Id == null
          //   ) {
          //     this.Course_Temp_Array = [];
          //     var Array_Course = [];
          //     this.Course_Temp_Data_.Course_Id = Save_status[0][0].Course_Id_;
          //     this.Course_Temp_Data_.Course_Temp = String(this.Course_);
          //     this.Course_Temp_Array.push(this.Course_Temp_Data_);
          //     Array_Course.push({
          //       Course_Id: this.Course_Temp_Array[0].Course_Id,
          //       Course_Name: this.Course_Temp_Array[0].Course_Temp,
          //     });
          //     this.Course_Data.push(Array_Course[0]);
          //   }
          // }

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
          // if (
          //   this.ApplicationDetails_.University_Name !=
          //   Save_status[0][0].University_Name_Old_
          // ) {
          //   if (
          //     this.University_1.University_Id == undefined ||
          //     this.University_1.University_Id == null
          //   ) {
          //     this.University_Temp_Array = [];
          //     var Array_University = [];
          //     this.University_Temp_Data_.University_Id =
          //       Save_status[0][0].University_Id_;
          //     this.University_Temp_Data_.Univerity_Temp = String(
          //       this.University_1
          //     );
          //     this.University_Temp_Array.push(this.University_Temp_Data_);
          //     Array_University.push({
          //       University_Id: this.University_Temp_Array[0].University_Id,
          //       University_Name: this.University_Temp_Array[0].Univerity_Temp,
          //     });
          //     this.University_Data.push(Array_University[0]);
          //   }
          // }
          this.Clr_ApplicationDetails();
          this.Get_ApplicationDetails();
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

  Save_FeesReceipt() {
    if (
      this.Fees_Data_ == undefined ||
      this.Fees_Data_ == null ||
      this.Fees_Data_.Fees_Id == undefined ||
      this.Fees_Data_.Fees_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Fees", Type: "3" },
      });
      return;
    }
    if (this.Fees_Receipt_.Entry_date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Date", Type: "3" },
      });
      return;
    }

    if (this.Fees_Data_.Fees_Id == 2) {
      if (
        this.Fees_Course_ == undefined ||
        this.Fees_Course_ == null
        // this.Fees_Course_.Country_Id == undefined ||
        // this.Fees_Course_.Country_Id  == 0
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Course", Type: "3" },
        });
        return;
      }
    }
    if (
      this.Fees_Receipt_.Amount == null ||
      this.Fees_Receipt_.Amount == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Amount", Type: "3" },
      });
      return;
    }

    if (
      this.Currency_ == undefined ||
      this.Currency_ == null ||
      this.Currency_.Currency_Id == undefined ||
      this.Currency_.Currency_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Currency", Type: "3" },
      });
      return;
    }

    if (
      this.To_Account_ == undefined ||
      this.To_Account_ == null ||
      this.To_Account_.Client_Accounts_Id == undefined ||
      this.To_Account_.Client_Accounts_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select To Account", Type: "3" },
      });
      return;
    }

    // if (
    // 	this.Student_.Email == undefined ||
    // 	this.Student_.Email == null ||
    // 	this.Student_.Email == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Please add mail address", Type: "3" },
    // 	});
    // 	return;
    // }
    var Main_Array = {
      Fees: this.Fill_FeesReceipt(),
    };

    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;

    this.Student_Service_.Save_FeesReceipt(
      Main_Array,
      this.FeesreceiptDocument_File_Array,
      this.FeesreceiptDocument_Array,
      this.FeesreceiptDocument_Description,
      this.ImageFile_Feesreceipt,
      this.FeesreceiptDisplay_File_Name_
    ).subscribe(
      (Save_status) => {
        // Number(Save_status[0][0].Fees_Receipt_Id_)>0

        if (Number(Save_status[0][0].Fees_Receipt_Id_) > 0) {
          //this.Fees_Receipt_Mail(Save_status[0][0].Entry_date_,Save_status[0][0].Voucher_No_,Save_status[0][0].Amount_,Save_status[0][0].Fees_Name_,Save_status[0][0].Description_);
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Save_Call_Status = false;

          this.issLoading = false;
          this.clr_receipt();
          this.Search_Receipt();
          this.Close_Fees();
          this.Search_Lead_button();
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

  Save_Commission() {
    // if (
    // 	this.Fees_Data_ == undefined ||
    // 	this.Fees_Data_ == null ||
    // 	this.Fees_Data_.Fees_Id == undefined ||
    // 	this.Fees_Data_.Fees_Id == 0
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Select Fees", Type: "3" },
    // 	});
    // 	return;
    // }
    if (
      this.Commission_Data_ == undefined ||
      this.Commission_Data_ == null ||
      this.Commission_Data_.Commission_Id == undefined ||
      this.Commission_Data_.Commission_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Commission", Type: "3" },
      });
      return;
    }
    if (this.Commission_Receipt_.Entry_date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Date", Type: "3" },
      });
      return;
    }

    // if (this.Fees_Data_.Fees_Id == 2) {
    // 	if (
    // 		this.Fees_Course_ == undefined ||
    // 		this.Fees_Course_ == null
    // 		// this.Fees_Course_.Country_Id == undefined ||
    // 		// this.Fees_Course_.Country_Id  == 0
    // 	) {
    // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 			panelClass: "Dialogbox-Class",
    // 			data: { Message: "Select Course", Type: "3" },
    // 		});
    // 		return;
    // 	}
    // }
    if (
      this.Commission_Receipt_.Amount == null ||
      this.Commission_Receipt_.Amount == undefined
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Amount", Type: "3" },
      });
      return;
    }

    if (
      this.Currency_ == undefined ||
      this.Currency_ == null ||
      this.Currency_.Currency_Id == undefined ||
      this.Currency_.Currency_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Currency", Type: "3" },
      });
      return;
    }

    if (
      this.To_Account_ == undefined ||
      this.To_Account_ == null ||
      this.To_Account_.Client_Accounts_Id == undefined ||
      this.To_Account_.Client_Accounts_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select To Account", Type: "3" },
      });
      return;
    }

    var Main_Array = {
      Fees: this.Fill_CommissionReceipt(),
    };

    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;
    // debugger;
    this.Student_Service_.Save_CommissionReceipt(
      Main_Array,
      this.FeesreceiptDocument_File_Array,
      this.FeesreceiptDocument_Array,
      this.FeesreceiptDocument_Description,
      this.ImageFile_Feesreceipt,
      this.FeesreceiptDisplay_File_Name_
    ).subscribe(
      (Save_status) => {
        // debugger;
        // Number(Save_status[0][0].Commission_Receipt_Id_)>0

        if (Number(Save_status[0][0].Fees_Receipt_Id_) > 0) {
          //this.Fees_Receipt_Mail(Save_status[0][0].Entry_date_,Save_status[0][0].Voucher_No_,Save_status[0][0].Amount_,Save_status[0][0].Fees_Name_,Save_status[0][0].Description_);
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Save_Call_Status = false;

          this.issLoading = false;
          this.clr_receipt();
          this.Search_Commission();
          this.Close_Commission();
          this.Search_Lead_button();
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

  Edit_Fees(Fees_Receipt_e: any, index) {
    this.View_Student_ = true;
    this.View_Follow_ = false;
    this.Lead_EditIndex = index;
    this.Entry_View = true;
    this.profile_View = true;
    this.Martialdetails_view = true;
    this.Statistics_View = true;
    this.tab_view = true;
    this.application_details_View = false;
    this.Qualification_details_View = false;
    this.language_details_View = false;
    this.course_history_View = false;
    this.Checklist_View = false;
    this.View_document = false;
    this.Course_View = false;
    this.Fee_Collection_View = false;
    this.Commission_Collection_View = false;
    this.message_View = false;
    this.View_History_ = false;
    if (this.Document_View_Status == true) this.Document_View_Option = true;

    this.Create_Fees();
    this.Student_Service_.Get_Fees_Receipt(
      Fees_Receipt_e.Fees_Receipt_Id
    ).subscribe(
      (Rows) => {
        this.Fees_Receipt_ = Object.assign({}, Rows[0][0]);

        if (this.Fees_Receipt_.Entry_date == null) {
          this.Fees_Receipt_.Entry_date = new Date();
          this.Fees_Receipt_.Entry_date = this.New_Date(
            this.Fees_Receipt_.Entry_date
          );
        } else
          this.Fees_Receipt_.Entry_date = this.New_Date(
            new Date(moment(this.Fees_Receipt_.Entry_date).format("YYYY-MM-DD"))
          );

        // this.Get_Feesrecepit_DocumentList(this.Fees_Receipt_.Fees_Receipt_Id)

        // this.Get_Fees_Receipt(this.Receipt_data_.Fees_Receipt_Id);
        for (var i = 0; i < this.Fees_Array.length; i++) {
          if (this.Fees_Receipt_.Fees_Id == this.Fees_Array[i].Fees_Id)
            this.Fees_Data_ = this.Fees_Array[i];
        }

        this.FeesreceiptDocument_Array = Rows[1];
        this.FeesreceiptDocument_File_Array = [];
        for (var i = 0; i < this.FeesreceiptDocument_Array.length; i++)
          this.FeesreceiptDocument_File_Array.push("");

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

  clr_Visa_Tab() {
    this.Visa_Document_File_Array = [];
    this.Visa_Document_Array = [];
    this.ImageFile_Visa = [];
    this.Visa_.Visa_Id = 0;
    this.Visa_.Application_No = "";
    this.Visa_.Total_Fees = 0;
    this.Visa_.Scholarship_Fees = 0;
    this.Visa_.Balance_Fees = 0;
    this.Visa_.Paid_Fees = 0;
    if (this.paidfees == 0) this.paidfees = 0;

    this.Visa_.Description = "";

    this.Visa_.Username = "";
    this.Visa_.Password = "";
    this.Visa_.Security_Question = "";

    this.Visa_.Visa_Type_Name = "";
    if (this.Visa_Type_Data != null && this.Visa_Type_Data != undefined)
      this.Visa_Type_ = this.Visa_Type_Data[0];

    this.Visa_.Approved_Date = new Date();
    this.Visa_.Approved_Date = this.New_Date(
      new Date(moment(this.Visa_.Approved_Date).format("YYYY-MM-DD"))
    );

    this.Visa_.Approved_Date_L = new Date();
    this.Visa_.Approved_Date_L = this.New_Date(
      new Date(moment(this.Visa_.Approved_Date_L).format("YYYY-MM-DD"))
    );

    this.Visa_.Approved_Date_F = new Date();
    this.Visa_.Approved_Date_F = this.New_Date(
      new Date(moment(this.Visa_.Approved_Date_F).format("YYYY-MM-DD"))
    );

    this.Visa_.Visa_Rejected_Date = new Date();
    this.Visa_.Visa_Rejected_Date = this.New_Date(
      this.Visa_.Visa_Rejected_Date
    );
    this.Visa_.ATIP_Submitted_Date = new Date();
    this.Visa_.ATIP_Submitted_Date = this.New_Date(
      this.Visa_.ATIP_Submitted_Date
    );
    this.Visa_.ATIP_Received_Date = new Date();
    this.Visa_.ATIP_Received_Date = this.New_Date(
      this.Visa_.ATIP_Received_Date
    );
    this.Visa_.Visa_Re_Submitted_Date = new Date();
    this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
      this.Visa_.Visa_Re_Submitted_Date
    );

    this.Visa_.Visa_Granted = false;
    this.Visa_.Visa_Letter = false;
    this.Visa_.Visa_File = false;
    this.Visa_Document_Description = "";

    this.Visa_Document_Array = [];
    // this.Visa_Data = [];
    this.Visa_Document_.Visa_Document_File_Name = "";
    this.Visa_Document_.Visa_Document_Name = "";
    this.Display_VisaFile_ = "";
    //this.Visa_Document_.New_Entry=0;
  }
  Save_Visa() {
    if (
      this.Visa_.Application_No == null ||
      this.Visa_.Application_No == undefined ||
      this.Visa_.Application_No == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Application Number", Type: "3" },
      });
      return;
    }
    if (this.Visa_.Visa_Letter == true && this.Visa_.Approved_Date_L == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Visa submitted Date", Type: "3" },
      });
      return;
    }
    if (this.Visa_.Visa_File == true && this.Visa_.Approved_Date_F == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Biometric Date", Type: "3" },
      });
      return;
    }

    if (this.Visa_.Visa_Granted == true && this.Visa_.Approved_Date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Visa Granted Date", Type: "3" },
      });
      return;
    }
    if (
      this.Visa_.Visa_Rejected == true &&
      this.Visa_.Visa_Rejected_Date == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Visa Rejected Date", Type: "3" },
      });
      return;
    }
    if (
      this.Visa_.ATIP_Submitted == true &&
      this.Visa_.ATIP_Submitted_Date == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose ATIP Submitted Date", Type: "3" },
      });
      return;
    }

    if (
      this.Visa_.ATIP_Received == true &&
      this.Visa_.ATIP_Received_Date == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose ATIP Received Date", Type: "3" },
      });
      return;
    }
    if (
      this.Visa_.Visa_Re_Submitted == true &&
      this.Visa_.Visa_Re_Submitted_Date == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Visa Re-Submitted Date", Type: "3" },
      });
      return;
    }
    var Visa_Granted_Status = 0;
    if (Boolean(this.Visa_.Visa_Granted) == true) Visa_Granted_Status = 1;

    var Visa_Letter_Status = 0;
    if (Boolean(this.Visa_.Visa_Letter) == true) Visa_Letter_Status = 1;

    var Visa_File_Status = 0;
    if (Boolean(this.Visa_.Visa_File) == true) Visa_File_Status = 1;

    this.Visa_.Approved_Date = this.New_Date(
      new Date(moment(this.Visa_.Approved_Date).format("YYYY-MM-DD"))
    );
    this.Visa_.Approved_Date_L = this.New_Date(
      new Date(moment(this.Visa_.Approved_Date_L).format("YYYY-MM-DD"))
    );
    this.Visa_.Approved_Date_F = this.New_Date(
      new Date(moment(this.Visa_.Approved_Date_F).format("YYYY-MM-DD"))
    );

    var Visa_Rejected_status = 0;
    if (Boolean(this.Visa_.Visa_Rejected) == true) Visa_Rejected_status = 1;

    this.Visa_.Visa_Rejected_Date = this.New_Date(
      new Date(moment(this.Visa_.Visa_Rejected_Date).format("YYYY-MM-DD"))
    );

    var ATIP_Submitted_status = 0;
    if (Boolean(this.Visa_.ATIP_Submitted) == true) ATIP_Submitted_status = 1;

    this.Visa_.ATIP_Submitted_Date = this.New_Date(
      new Date(moment(this.Visa_.ATIP_Submitted_Date).format("YYYY-MM-DD"))
    );

    var ATIP_Received_status = 0;
    if (Boolean(this.Visa_.ATIP_Received) == true) ATIP_Received_status = 1;

    this.Visa_.ATIP_Received_Date = this.New_Date(
      new Date(moment(this.Visa_.ATIP_Received_Date).format("YYYY-MM-DD"))
    );

    var Visa_Re_Submitted_status = 0;
    if (Boolean(this.Visa_.Visa_Re_Submitted) == true)
      Visa_Re_Submitted_status = 1;

    this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
      new Date(moment(this.Visa_.Visa_Re_Submitted_Date).format("YYYY-MM-DD"))
    );
    // else
    // if (Boolean(this.Visa_.Visa_Granted) == false )
    this.Visa_.Student_Id = this.Profile_.Student_Id;

    this.Visa_.Visa_Type_Id = this.Visa_Type_.Visa_Type_Id;
    this.Visa_.Visa_Type_Name = this.Visa_Type_.Visa_Type_Name;

    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;

    this.Student_Service_.Save_Visa(
      this.Visa_,
      this.Visa_Document_File_Array,
      this.Visa_Document_Array,
      this.Visa_Document_Description,
      this.ImageFile_Visa,
      this.Display_VisaFile_
    ).subscribe(
      (Save_status) => {
        if (Number(Save_status[0][0].Visa_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Save_Call_Status = false;
          this.clr_Visa_Tab();
          this.Get_Visa_Details();
          this.Close_Visa();
          this.issLoading = false;
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
  File_Change_Visa(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Visa = file;
    this.Display_VisaFile_ = this.ImageFile_Visa[0].name;
    this.Visa_Document_File.Visa_Document_Name = "";
    this.Visa_Document_File.Visa_Document_File_Name = "";
  }
  Add_Visa_Document() {
    if (
      this.Visa_Document_Array == null ||
      this.Visa_Document_Array == undefined
    )
      this.Visa_Document_Array = [];
    if (
      this.Visa_Document_File_Array == null ||
      this.Visa_Document_File_Array == undefined
    )
      this.Visa_Document_File_Array = [];

    // this.Document_Array.push(this.Document_Description)
    this.Visa_Document_.Visa_Document_Name = this.Visa_Document_Description;
    this.Visa_Document_.Visa_Document_File_Name = this.Display_VisaFile_;
    this.Visa_Document_.New_Entry = 1;

    if (
      this.ImageFile_Visa != null &&
      this.ImageFile_Visa != undefined &&
      this.ImageFile_Visa != ""
    ) {
      this.Visa_Document_.Visa_Document_File_Name = this.ImageFile_Visa[0].name;
      this.Visa_Document_Array.push(Object.assign({}, this.Visa_Document_));
      this.Visa_Document_File_Array.push(this.ImageFile_Visa[0]);
      this.Visa_Document_Description = "";
      this.Display_VisaFile_ = "";
      this.ImageFile_Visa = null;
    } else {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select File", Type: "3" },
      });
      return;
    }
  }
  Get_Visa_Details() {
    this.issLoading = true;
    this.Student_Service_.Get_Visa_Details(this.Student_Id_Edit).subscribe(
      (Rows) => {
        this.Visa_Data = Rows[0];
        //  if(this.Visa_Data.length==1)
        //  {
        //     this.Edit_Visa(this.Visa_Data[0],0);
        //  }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Edit_Visa(Visa_e: Visa, index) {
    //console.log(Visa_e);
    //this.Create_Visa();

    this.Visa_View = false;
    this.Visamodal_View = true;
    this.Visa_ = Object.assign({}, Visa_e);

    if (this.Visa_.Visa_GrantedCheck_Box.toString() == "1")
      this.Visa_.Visa_Granted = true;
    else this.Visa_.Visa_Granted = false;
    if (this.Visa_.Approved_Date == null) {
      this.Visa_.Approved_Date = new Date();
      this.Visa_.Approved_Date = this.New_Date(this.Visa_.Approved_Date);
    } else
      this.Visa_.Approved_Date = this.New_Date(
        new Date(moment(this.Visa_.Approved_Date).format("YYYY-MM-DD"))
      );

    if (this.Visa_.Visa_Letter.toString() == "1") this.Visa_.Visa_Letter = true;
    else this.Visa_.Visa_Letter = false;
    if (this.Visa_.Approved_Date_L == null) {
      this.Visa_.Approved_Date_L = new Date();
      this.Visa_.Approved_Date_L = this.New_Date(this.Visa_.Approved_Date_L);
    } else
      this.Visa_.Approved_Date_L = this.New_Date(
        new Date(moment(this.Visa_.Approved_Date_L).format("YYYY-MM-DD"))
      );

    if (this.Visa_.Visa_File.toString() == "1") this.Visa_.Visa_File = true;
    else this.Visa_.Visa_File = false;
    if (this.Visa_.Approved_Date_F == null) {
      this.Visa_.Approved_Date_F = new Date();
      this.Visa_.Approved_Date_F = this.New_Date(this.Visa_.Approved_Date_F);
    } else
      this.Visa_.Approved_Date_F = this.New_Date(
        new Date(moment(this.Visa_.Approved_Date_F).format("YYYY-MM-DD"))
      );

    if (this.Visa_.Visa_Rejected.toString() == "1")
      this.Visa_.Visa_Rejected = true;
    else this.Visa_.Visa_Rejected = false;
    if (this.Visa_.Visa_Rejected_Date == null) {
      this.Visa_.Visa_Rejected_Date = new Date();
      this.Visa_.Visa_Rejected_Date = this.New_Date(
        this.Visa_.Visa_Rejected_Date
      );
    } else
      this.Visa_.Visa_Rejected_Date = this.New_Date(
        new Date(moment(this.Visa_.Visa_Rejected_Date).format("YYYY-MM-DD"))
      );

    if (this.Visa_.ATIP_Submitted.toString() == "1")
      this.Visa_.ATIP_Submitted = true;
    else this.Visa_.ATIP_Submitted = false;
    if (this.Visa_.ATIP_Submitted_Date == null) {
      this.Visa_.ATIP_Submitted_Date = new Date();
      this.Visa_.ATIP_Submitted_Date = this.New_Date(
        this.Visa_.ATIP_Submitted_Date
      );
    } else
      this.Visa_.ATIP_Submitted_Date = this.New_Date(
        new Date(moment(this.Visa_.ATIP_Submitted_Date).format("YYYY-MM-DD"))
      );

    if (this.Visa_.ATIP_Received.toString() == "1")
      this.Visa_.ATIP_Received = true;
    else this.Visa_.ATIP_Received = false;
    if (this.Visa_.ATIP_Received_Date == null) {
      this.Visa_.ATIP_Received_Date = new Date();
      this.Visa_.ATIP_Received_Date = this.New_Date(
        this.Visa_.ATIP_Received_Date
      );
    } else
      this.Visa_.ATIP_Received_Date = this.New_Date(
        new Date(moment(this.Visa_.ATIP_Received_Date).format("YYYY-MM-DD"))
      );

    if (this.Visa_.Visa_Re_Submitted.toString() == "1")
      this.Visa_.Visa_Re_Submitted = true;
    else this.Visa_.Visa_Re_Submitted = false;
    if (this.Visa_.Visa_Re_Submitted_Date == null) {
      this.Visa_.Visa_Re_Submitted_Date = new Date();
      this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
        this.Visa_.Visa_Re_Submitted_Date
      );
    } else
      this.Visa_.Visa_Re_Submitted_Date = this.New_Date(
        new Date(moment(this.Visa_.Visa_Re_Submitted_Date).format("YYYY-MM-DD"))
      );

    // if (this.Visa_.Check_Box.toString()=='1')
    // this.Visa_.Visa_Letter=true;
    // else
    // this.Visa_.Visa_Letter=false;
    // if(this.Visa_.Approved_Date_F==null)
    // {
    //     this.Visa_.Approved_Date_F=new Date();
    //     this.Visa_.Approved_Date_F=this.New_Date(this.Visa_.Approved_Date_F);
    // }
    // else
    //         this.Visa_.Approved_Date_F= this.New_Date(new Date(moment(this.Visa_.Approved_Date_F).format('YYYY-MM-DD')));

    for (var i = 0; i < this.Visa_Type_Data.length; i++) {
      if (this.Visa_.Visa_Type_Id == this.Visa_Type_Data[i].Visa_Type_Id)
        this.Visa_Type_ = this.Visa_Type_Data[i];
    }

    this.Get_Visa_Documents(this.Visa_.Visa_Id);
    //  for (var i = 0; i < this.Fees_Array.length; i++)a_
    //         {
    //         if (this.Fees_Receipt_.Fees_Id== this.Fees_Array[i].Fees_Id)
    //         this.Fees_Data_=this.Fees_Array[i];
    //         }
  }
  Get_Visa_Documents(Visa_Id) {
    this.issLoading = true;
    this.Student_Service_.Get_Visa_Documents(Visa_Id).subscribe(
      (Rows) => {
        this.Visa_Document_Array = Rows[0];
        this.Visa_Document_File_Array = [];
        for (var i = 0; i < this.Visa_Document_Array.length; i++)
          this.Visa_Document_File_Array.push("");
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  Delete_Visa_Document(index, Visa_Document_Id) {
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

        if (Visa_Document_Id > 0) {
          this.Student_Service_.Delete_Visa_Document(
            Visa_Document_Id
          ).subscribe(
            (Delete_status) => {
              if (Number(Delete_status[0][0].Visa_Document_Id_) > 0) {
                this.Visa_Document_Array.splice(index, 1);
                this.Visa_Document_File_Array.splice(index, 1);
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Deleted", Type: "false" },
                });
                // this.Get_Visa_Documents();
              } else {
                this.issLoading = false;
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
                data: { Message: "Error Occured", Type: "2" },
              });
            }
          );
        } else {
          this.Visa_Document_Array.splice(index, 1);
          this.Visa_Document_File_Array.splice(index, 1);
          this.issLoading = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Deleted", Type: "false" },
          });
        }
      }
    });
  }
  Delete_Visa(Visa_Id, index) {
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

        this.Student_Service_.Delete_Visa(Visa_Id).subscribe(
          (Delete_status) => {
            if (Delete_status[0][0].Visa_Id_ > 0) {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Get_Visa_Details();
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }
  clr_Invoice_Tab() {
    this.Invoice_Document_File_Array = [];
    this.Invoice_.Invoice_Id = 0;
    this.Invoice_.Description = "";
    this.Invoice_.Entry_Date = new Date();
    this.Invoice_.Entry_Date = this.New_Date(
      new Date(moment(this.Invoice_.Entry_Date).format("YYYY-MM-DD"))
    );
    this.Invoice_.Amount = 0;
    this.Invoice_Document_Array = [];
    // this.Invoice_Data = [];
    this.Invoice_Document_.Invoice_Document_File_Name = "";
    this.Invoice_Document_.Invoice_Document_Name = "";
    this.Display_InvoiceFile_ = "";
  }

  Save_Invoice() {
    if (
      this.Invoice_.Amount == null ||
      this.Invoice_.Amount == undefined ||
      this.Invoice_.Amount == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Amount", Type: "3" },
      });
      return;
    }
    // var Visa_Granted_Status = 0;
    // if (Boolean(this.Visa_.Visa_Granted) == true )
    //     Visa_Granted_Status = 1;
    this.Invoice_.Entry_Date = this.New_Date(
      new Date(moment(this.Invoice_.Entry_Date).format("YYYY-MM-DD"))
    );
    this.Invoice_.Student_Id = this.Student_.Student_Id;

    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;

    this.Student_Service_.Save_Invoice(
      this.Invoice_,
      this.Invoice_Document_File_Array,
      this.Invoice_Document_Array,
      this.Invoice_Document_Description,
      this.ImageFile_Invoice,
      this.Display_InvoiceFile_
    ).subscribe(
      (Save_status) => {
        if (Number(Save_status[0][0].Invoice_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Save_Call_Status = false;
          this.clr_Invoice_Tab();
          this.Get_Invoice_Details();
          this.issLoading = false;
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
  File_Change_Invoice(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Invoice = file;
    this.Display_InvoiceFile_ = this.ImageFile_Invoice[0].name;
    this.Invoice_Document_File.Invoice_Document_File_Name = "";
    this.Invoice_Document_File.Invoice_Document_File_Name = "";
  }
  Add_Invoice_Document() {
    if (
      this.Invoice_Document_Array == null ||
      this.Invoice_Document_Array == undefined
    )
      this.Invoice_Document_Array = [];
    if (
      this.Invoice_Document_File_Array == null ||
      this.Invoice_Document_File_Array == undefined
    )
      this.Invoice_Document_File_Array = [];

    // this.Document_Array.push(this.Document_Description)
    this.Invoice_Document_.Invoice_Document_Name =
      this.Invoice_Document_Description;
    this.Invoice_Document_.Invoice_Document_File_Name =
      this.Display_InvoiceFile_;
    this.Invoice_Document_.New_Entry = 1;

    if (
      this.ImageFile_Invoice != null &&
      this.ImageFile_Invoice != undefined &&
      this.ImageFile_Invoice != ""
    ) {
      this.Invoice_Document_.Invoice_Document_File_Name =
        this.ImageFile_Invoice[0].name;
      this.Invoice_Document_Array.push(
        Object.assign({}, this.Invoice_Document_)
      );
      this.Invoice_Document_File_Array.push(this.ImageFile_Invoice[0]);
      this.Invoice_Document_Description = "";
      this.Display_InvoiceFile_ = "";
      this.ImageFile_Invoice = null;
    } else {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select File", Type: "3" },
      });
      return;
    }
  }
  Get_Invoice_Details() {
    this.issLoading = true;
    this.Student_Service_.Get_Invoice_Details(
      this.Student_.Student_Id
    ).subscribe(
      (Rows) => {
        this.Invoice_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  Edit_Invoice(Invoice_e: Invoice, index) {
    this.Create_Invoice();
    this.Invoice_ = Object.assign({}, Invoice_e);

    if (this.Visa_.Approved_Date == null) {
      this.Visa_.Approved_Date = new Date();
      this.Visa_.Approved_Date = this.New_Date(this.Visa_.Approved_Date);
    } else
      this.Visa_.Approved_Date = this.New_Date(
        new Date(moment(this.Visa_.Approved_Date).format("YYYY-MM-DD"))
      );

    this.Get_Invoice_Documents(this.Invoice_.Invoice_Id);
    //  for (var i = 0; i < this.Fees_Array.length; i++)
    //         {
    //         if (this.Fees_Receipt_.Fees_Id== this.Fees_Array[i].Fees_Id)
    //         this.Fees_Data_=this.Fees_Array[i];
    //         }
  }
  Get_Invoice_Documents(Invoice_Id) {
    this.issLoading = true;
    this.Student_Service_.Get_Invoice_Documents(Invoice_Id).subscribe(
      (Rows) => {
        this.Invoice_Document_Array = Rows[0];
        this.Invoice_Document_File_Array = [];
        for (var i = 0; i < this.Invoice_Document_Array.length; i++)
          this.Invoice_Document_File_Array.push("");
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  Delete_Invoice_Document(index, Invoice_Document_Id) {
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

        if (Invoice_Document_Id > 0) {
          this.Student_Service_.Delete_Invoice_Document(
            Invoice_Document_Id
          ).subscribe(
            (Delete_status) => {
              if (Number(Delete_status[0][0].Invoice_Document_Id_) > 0) {
                this.Invoice_Document_Array.splice(index, 1);
                this.Invoice_Document_File_Array.splice(index, 1);
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Deleted", Type: "false" },
                });
                // this.Get_Visa_Documents();
              } else {
                this.issLoading = false;
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
                data: { Message: "Error Occured", Type: "2" },
              });
            }
          );
        } else {
          this.Invoice_Document_Array.splice(index, 1);
          this.Invoice_Document_File_Array.splice(index, 1);
          this.issLoading = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Deleted", Type: "false" },
          });
        }
      }
    });
  }
  Delete_Invoice(Invoice_Id, index) {
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

        this.Student_Service_.Delete_Invoice(Invoice_Id).subscribe(
          (Delete_status) => {
            if (Delete_status[0][0].Invoice_Id_ > 0) {
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Get_Invoice_Details();
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
  }

  Calculate_Balance_Fees() {
    var totalfees = 0,
      scholarshipfees = 0,
      balancefees = 0;
    if (this.Visa_.Total_Fees == undefined || this.Visa_.Total_Fees == null)
      this.Visa_.Total_Fees = 0;
    else totalfees = this.Visa_.Total_Fees;
    if (
      this.Visa_.Scholarship_Fees == undefined ||
      this.Visa_.Scholarship_Fees == null
    )
      this.Visa_.Scholarship_Fees = 0;
    else scholarshipfees = this.Visa_.Scholarship_Fees;
    balancefees = Number(totalfees) - Number(scholarshipfees);
    this.Visa_.Balance_Fees = Number(balancefees.toFixed(2));
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

  Plus_Course_Fees(event) {
    // if (this.Fees_Type.Fees_Type_Id == undefined || this.Fees_Type.Fees_Type_Id == null || this.Fees_Type.Fees_Type_Id == 0 || this.Fees_Type==null )
    // {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Select Fees ',Type:"3"}});
    //     return
    // }
    // else if (this.Course_Fees.Amount == undefined || this.Course_Fees.Amount == null || this.Course_Fees.Amount==0 )
    // {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter the Amount',Type:"3"}});
    //     return
    // }
    // else if (this.Course_Fees.Tax == undefined || this.Course_Fees.Tax == null)
    // {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter the Tax',Type:"3"}});
    //     return
    // }

    // else if (this.Course_Fees.Instalment_Period == undefined || this.Course_Fees.Instalment_Period == null  )
    // {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message:'Enter the Instalment Period',Type:"3"}});
    //     return
    // }

    if (this.Course_Fees_Data == undefined) this.Course_Fees_Data = [];
    //this.Course_Fees.Visa_Id = this.Fees_Type.Fees_Type_Id
    //this.Course_Fees.Visa_Type_Name = this.Fees_Type.Fees_Type_Name

    if (this.Course_Fees_Index >= 0) {
      this.Course_Fees_Data[this.Course_Fees_Index] = Object.assign(
        {},
        this.Course_Fees
      ); // this.Sales_Details_;
    } else {
      this.Course_Fees_Data.push(Object.assign({}, this.Course_Fees));
    }
    this.Course_Fees_Index = -1;
    //this.Clr_Course_Fees();
  }
  Save_Qualification() {
    // if (
    // 	this.Qualification_.Credential === undefined ||
    // 	this.Qualification_.Credential == null ||
    // 	this.Qualification_.Credential == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter Class/Level ", Type: "3" },
    // 	});
    // 	return;
    // }
    if (
      this.Qualification_Type_ === undefined ||
      this.Qualification_Type_ == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Qualification Type", Type: "3" },
      });
      return;
    }
    if (
      this.Qualification_Type_.Qualification_Type_Id === undefined ||
      this.Qualification_Type_.Qualification_Type_Id == null ||
      this.Qualification_Type_.Qualification_Type_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Qualification Type", Type: "3" },
      });
      return;
    }
    // if (
    // 	this.Qualification_.Field === undefined ||
    // 	this.Qualification_.Field == null ||
    // 	this.Qualification_.Field == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter Field ", Type: "3" },
    // 	});
    // 	return;
    // }
    // if (
    // 	this.Qualification_.school === undefined ||
    // 	this.Qualification_.school == null ||
    // 	this.Qualification_.school == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter Board/University ", Type: "3" },
    // 	});
    // 	return;
    // }
    // if (
    // 	this.Qualification_.Fromyear === undefined ||
    // 	this.Qualification_.Fromyear == null ||
    // 	this.Qualification_.Fromyear == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter From year ", Type: "3" },
    // 	});
    // 	return;
    // }
    // if (
    // 	this.Qualification_.Toyear === undefined ||
    // 	this.Qualification_.Toyear == null ||
    // 	this.Qualification_.Toyear == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter To year ", Type: "3" },
    // 	});
    // 	return;
    // }
    if (
      this.Qualification_.MarkPer === undefined ||
      this.Qualification_.MarkPer == null ||
      this.Qualification_.MarkPer == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Percentage(%) ", Type: "3" },
      });
      return;
    }
    // if (
    // 	this.Qualification_.Backlog_History === undefined ||
    // 	this.Qualification_.Backlog_History == null ||
    // 	this.Qualification_.Backlog_History == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter Backlog History ", Type: "3" },
    // 	});
    // 	return;
    // }
    if (
      this.Qualification_.Year_of_passing === undefined ||
      this.Qualification_.Year_of_passing == null ||
      this.Qualification_.Year_of_passing == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Year of passing ", Type: "3" },
      });
      return;
    }
    // if (
    // 	this.Qualification_.result === undefined ||
    // 	this.Qualification_.result == null ||
    // 	this.Qualification_.result == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter Result ", Type: "3" },
    // 	});
    // 	return;
    // }
    this.Qualification_.Qualification_Type_Id =
      this.Qualification_Type_.Qualification_Type_Id;
    this.Qualification_.Student_id = this.Profile_.Student_Id;
    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;
    this.Student_Service_.Save_Qualification(this.Qualification_).subscribe(
      (Save_Qualification) => {
        Save_Qualification = Save_Qualification[0];
        if (Number(Save_Qualification[0].Qualification_Id_) > 0) {
          this.Save_Call_Status = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Get_QualificationDetails(Save_Qualification[0].Student_id_);
          this.Clr_Qualification();
          this.Close_qualificationandWorkexperience();
          //this.Close_NewQualification();
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

  Save_work_experience() {
    if (
      this.Work_experience_.Company === undefined ||
      this.Work_experience_.Company == null ||
      this.Work_experience_.Company == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Company ", Type: "3" },
      });
      return;
    }
    if (
      this.Work_experience_.Designation === undefined ||
      this.Work_experience_.Designation == null ||
      this.Work_experience_.Designation == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Designation ", Type: "3" },
      });
      return;
    }
    if (
      this.Work_experience_.Salary === undefined ||
      this.Work_experience_.Salary == null ||
      this.Work_experience_.Salary == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Salary ", Type: "3" },
      });
      return;
    }
    // if (
    // 	this.Work_experience_.Salary_Mode === undefined ||
    // 	this.Work_experience_.Salary_Mode == null ||
    // 	this.Work_experience_.Salary_Mode == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter Salary Mode ", Type: "3" },
    // 	});
    // 	return;
    // }
    if (
      this.Work_experience_.Ex_From === undefined ||
      this.Work_experience_.Ex_From == null ||
      this.Work_experience_.Ex_From == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter From Year ", Type: "3" },
      });
      return;
    }
    if (
      this.Work_experience_.Ex_To === undefined ||
      this.Work_experience_.Ex_To == null ||
      this.Work_experience_.Ex_To == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter To Year ", Type: "3" },
      });
      return;
    }
    this.Work_experience_.Student_Id = this.Profile_.Student_Id;
    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;
    this.Student_Service_.Save_work_experience(this.Work_experience_).subscribe(
      (Save_work_experience) => {
        Save_work_experience = Save_work_experience[0];
        if (Number(Save_work_experience[0].Work_Experience_Id_) > 0) {
          this.Save_Call_Status = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
          this.Clr_work_experience();
          this.Close_qualificationandWorkexperience();
          //this.Close_NewQualification();
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

  Save_Ielts_Details() {
    if (
      this.IELTS_Type_ == undefined ||
      this.IELTS_Type_ == null ||
      this.IELTS_Type_.Ielts_Type == undefined ||
      this.IELTS_Type_.Ielts_Type == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Exam", Type: "3" },
      });
      return;
    }

    if (
      this.Ielts_Details_.Exam_Check == true &&
      this.Ielts_Details_.Exam_Date == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Exam Date", Type: "3" },
      });
      return;
    }

    this.Ielts_Details_.Exam_Date = this.New_Date(
      new Date(moment(this.Ielts_Details_.Exam_Date).format("YYYY-MM-DD"))
    );

    this.Ielts_Details_.Student_Id = this.Profile_.Student_Id;
    this.Ielts_Details_.Ielts_Type = this.IELTS_Type_.Ielts_Type;
    this.Ielts_Details_.Ielts_Type_Name = this.IELTS_Type_.Ielts_Type_Name;
    this.issLoading = true;

    this.Student_Service_.Save_Ielts_Details(this.Ielts_Details_).subscribe(
      (Save_Ielts_Details) => {
        Save_Ielts_Details = Save_Ielts_Details[0];
        if (Number(Save_Ielts_Details[0].Ielts_Details_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          this.Get_Ielts_Details(this.Profile_.Student_Id);
          this.Clr_Ielts_Details();
          this.Close_Language();
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

  Edit_Qualification(Qualification_e: Qualification, index) {
    //this.Entry_View=true;
    this.Qualificationnew_View = true;
    this.Qualificationmodal_View = false;
    this.Qualification_ = Qualification_e;
    this.Qualification_ = Object.assign({}, Qualification_e);
    for (var i = 0; i < this.Qualification_Type_Data.length; i++) {
      if (
        this.Qualification_.Qualification_Type_Id ==
        this.Qualification_Type_Data[i].Qualification_Type_Id
      )
        this.Qualification_Type_ = this.Qualification_Type_Data[i];
    }
  }

  Edit_Refund_Request(Refund_Request_e: Refund_Request, index) {
    //this.Entry_View=true;
    this.Refund_Request_ = Refund_Request_e;
    this.Refund_Request_ = Object.assign({}, Refund_Request_e);
  }

  // Edit_Pre_Visa(Student_Checklist_Master_Id,index)
  // {

  //
  // this.Pre_Visamodal_View=true;
  // this.Pre_Visa_View=false;

  // this.Get_Previsa_Details_Edit(Student_Checklist_Master_Id);

  // }
  Edit_Pre_Visa(pre_visa_e: Pre_Visa, index) {
    this.Pre_Visachecklistmodal_View = true;
    this.Pre_Visa_Checklist_View = false;
    this.Previsa_ = pre_visa_e;
    this.Previsa_ = Object.assign({}, pre_visa_e);
    this.Get_Previsa_Details_Edit(this.Previsa_.Student_Checklist_Master_Id);
  }

  Edit_Tasknew(pre_visa_e: Pre_Visa, index) {
    this.Tasknewmodal_View = true;
    this.Tasknew_View = false;
    this.Previsa_ = pre_visa_e;
    this.Previsa_ = Object.assign({}, pre_visa_e);
    this.Get_Previsa_Details_Edit(this.Previsa_.Student_Checklist_Master_Id);
  }

  Edit_Pre_Admission(pre_admission_e: Pre_Admission, index) {
    this.Pre_AdmissionModal_View = true;
    this.Pre_Admission_View = false;
    this.Preadmission_ = pre_admission_e;
    this.Preadmission_ = Object.assign({}, pre_admission_e);
    this.Get_Preadmission_Details_Edit(
      this.Preadmission_.Student_Preadmission_Checklist_Master_Id
    );
  }

  Edit_Review(Review_e: Review, index) {
    this.Reviewmodal_View = true;
    this.Reviewdetails_View = false;
    this.Review_ = Review_e;
    this.Review_ = Object.assign({}, Review_e);

    if (this.Review_.Facebook.toString() == "1") this.Review_.Facebook = true;
    else this.Review_.Facebook = false;
    if (this.Review_.Facebook_Date == null) {
      this.Review_.Facebook_Date = new Date();
      this.Review_.Facebook_Date = this.New_Date(this.Review_.Facebook_Date);
    } else
      this.Review_.Facebook_Date = this.New_Date(
        new Date(moment(this.Review_.Facebook_Date).format("YYYY-MM-DD"))
      );

    if (this.Review_.Instagram.toString() == "1") this.Review_.Instagram = true;
    else this.Review_.Instagram = false;
    if (this.Review_.Instagram_Date == null) {
      this.Review_.Instagram_Date = new Date();
      this.Review_.Instagram_Date = this.New_Date(this.Review_.Instagram_Date);
    } else
      this.Review_.Instagram_Date = this.New_Date(
        new Date(moment(this.Review_.Instagram_Date).format("YYYY-MM-DD"))
      );

    if (this.Review_.Gmail.toString() == "1") this.Review_.Gmail = true;
    else this.Review_.Gmail = false;
    if (this.Review_.Google_Date == null) {
      this.Review_.Google_Date = new Date();
      this.Review_.Google_Date = this.New_Date(this.Review_.Google_Date);
    } else
      this.Review_.Google_Date = this.New_Date(
        new Date(moment(this.Review_.Google_Date).format("YYYY-MM-DD"))
      );

    if (this.Review_.Checklist.toString() == "1") this.Review_.Checklist = true;
    else this.Review_.Checklist = false;
    if (this.Review_.Checklist_Date == null) {
      this.Review_.Checklist_Date = new Date();
      this.Review_.Checklist_Date = this.New_Date(this.Review_.Checklist_Date);
    } else
      this.Review_.Checklist_Date = this.New_Date(
        new Date(moment(this.Review_.Checklist_Date).format("YYYY-MM-DD"))
      );

    if (this.Review_.Kit.toString() == "1") this.Review_.Kit = true;
    else this.Review_.Kit = false;
    if (this.Review_.Kit_Date == null) {
      this.Review_.Kit_Date = new Date();
      this.Review_.Kit_Date = this.New_Date(this.Review_.Kit_Date);
    } else
      this.Review_.Kit_Date = this.New_Date(
        new Date(moment(this.Review_.Kit_Date).format("YYYY-MM-DD"))
      );

    if (this.Review_.Ticket.toString() == "1") this.Review_.Ticket = true;
    else this.Review_.Ticket = false;
    if (this.Review_.Ticket_Date == null) {
      this.Review_.Ticket_Date = new Date();
      this.Review_.Ticket_Date = this.New_Date(this.Review_.Ticket_Date);
    } else
      this.Review_.Ticket_Date = this.New_Date(
        new Date(moment(this.Review_.Ticket_Date).format("YYYY-MM-DD"))
      );

    if (this.Review_.Accomodation.toString() == "1")
      this.Review_.Accomodation = true;
    else this.Review_.Accomodation = false;
    if (this.Review_.Accomodation_Date == null) {
      this.Review_.Accomodation_Date = new Date();
      this.Review_.Accomodation_Date = this.New_Date(
        this.Review_.Accomodation_Date
      );
    } else
      this.Review_.Accomodation_Date = this.New_Date(
        new Date(moment(this.Review_.Accomodation_Date).format("YYYY-MM-DD"))
      );

    if (this.Review_.Airport_Pickup.toString() == "1")
      this.Review_.Airport_Pickup = true;
    else this.Review_.Airport_Pickup = false;
    if (this.Review_.Airport_Pickup_Date == null) {
      this.Review_.Airport_Pickup_Date = new Date();
      this.Review_.Airport_Pickup_Date = this.New_Date(
        this.Review_.Airport_Pickup_Date
      );
    } else
      this.Review_.Airport_Pickup_Date = this.New_Date(
        new Date(moment(this.Review_.Airport_Pickup_Date).format("YYYY-MM-DD"))
      );

    if (this.Review_.Travel.toString() == "1") this.Review_.Travel = true;
    else this.Review_.Travel = false;
    if (this.Review_.Travel_Date == null) {
      this.Review_.Travel_Date = new Date();
      this.Review_.Travel_Date = this.New_Date(this.Review_.Travel_Date);
    } else
      this.Review_.Travel_Date = this.New_Date(
        new Date(moment(this.Review_.Travel_Date).format("YYYY-MM-DD"))
      );
  }

  Edit_Workexperience(Workexperience_e: Work_Experience, index) {
    this.Workexperiencenew_View = true;
    this.Qualificationmodal_View = false;
    //this.Entry_View=true;
    this.Work_experience_ = Workexperience_e;
    this.Work_experience_ = Object.assign({}, Workexperience_e);
  }

  Edit_Ielts_Details(Ielts_Details_e: Ielts_Details, index) {
    this.Ielts_Details_ = Ielts_Details_e;
    for (var i = 0; i < this.IELTS_Type_Data.length; i++) {
      if (this.Ielts_Details_.Ielts_Type == this.IELTS_Type_Data[i].Ielts_Type)
        this.IELTS_Type_ = this.IELTS_Type_Data[i];
    }

    if (this.Ielts_Details_.Exam_Check == true)
      this.Ielts_Details_.Exam_Check = true;
    else this.Ielts_Details_.Exam_Check = false;
    if (this.Ielts_Details_.Exam_Date == null) {
      this.Ielts_Details_.Exam_Date = new Date();
      this.Ielts_Details_.Exam_Date = this.New_Date(
        this.Ielts_Details_.Exam_Date
      );
    } else
      this.Ielts_Details_.Exam_Date = this.New_Date(
        new Date(moment(this.Ielts_Details_.Exam_Date).format("YYYY-MM-DD"))
      );

    this.language_details_View = false;
    this.Languagemodal_View = true;
    //this.Ielts_Details_=Ielts_Details_e;
    this.Ielts_Details_ = Object.assign({}, Ielts_Details_e);
  }

  Delete_Qualificationdetails(Qualification_Id, index) {
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
        this.Student_Service_.Delete_Qualificationdetails(
          Qualification_Id
        ).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Qualification_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Clr_Qualification();
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_Pre_Visa(Previsa_, index) {
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
        this.Student_Service_.Delete_Pre_Visa(
          Previsa_.Student_Checklist_Master_Id
        ).subscribe(
          (Delete_status) => {
            var Delete_status_ = Delete_status[0];
            //Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status_[0].Student_Checklist_Master_Id_ > 0) {
              this.Previsa_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Clr_Pre_Visa();
              this.Get_Previsa_Details(this.Profile_.Student_Id);
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_Pre_Admission(Preadmission_, index) {
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
        this.Student_Service_.Delete_Pre_Admission(
          Preadmission_.Student_Preadmission_Checklist_Master_Id
        ).subscribe(
          (Delete_status) => {
            var Delete_status_ = Delete_status[0];
            //Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (
              Delete_status_[0].Student_Preadmission_Checklist_Master_Id_ > 0
            ) {
              this.Previsa_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Clr_Pre_Admission();
              this.Get_Preadmission_Details(this.Profile_.Student_Id);
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_Review(Review_Id, index) {
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
        this.Student_Service_.Delete_Review(Review_Id).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Review_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Clr_Pre_Visa();
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_Refund_Request(Refund_Request_Id, index) {
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
        this.Student_Service_.Delete_Refund_Request(
          Refund_Request_Id
        ).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Refund_Request_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Clr_Refund_Request();
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_Workexperiencedetails(Work_Experience_Id, index) {
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
        this.Student_Service_.Delete_Workexperiencedetails(
          Work_Experience_Id
        ).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Work_experience_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Clr_work_experience();
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_Ielts_Details(Ielts_Details_Id, index) {
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
        this.Student_Service_.Delete_Ielts_Details(Ielts_Details_Id).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Ielts_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              this.Clr_Ielts_Details();
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Clr_Qualification() {
    this.Qualification_.Qualification_Id = 0;
    this.Qualification_.Credential = "";
    this.Qualification_.Field = "";
    this.Qualification_.school = "";
    this.Qualification_.Fromyear = "";
    this.Qualification_.Toyear = "";
    this.Qualification_.MarkPer = "";
    this.Qualification_.Backlog_History = "";
    this.Qualification_.Year_of_passing = "";
    this.Qualification_.result = "";
  }
  Clr_work_experience() {
    this.Work_experience_.Work_Experience_Id = 0;
    this.Work_experience_.Company = "";
    this.Work_experience_.Designation = "";
    this.Work_experience_.Salary = "";
    this.Work_experience_.Salary_Mode = "";
    this.Work_experience_.Ex_From = "";
    this.Work_experience_.Ex_To = "";
  }

  Clr_Ielts_Details() {
    this.Ielts_Details_.Ielts_Details_Id = 0;
    this.Ielts_Details_.Description = "";
    this.Ielts_Details_.Listening = "";
    this.Ielts_Details_.Reading = "";
    this.Ielts_Details_.Speaking = "";
    this.Ielts_Details_.Overall = "";
    this.Ielts_Details_.Writing = "";
    this.Ielts_Details_.Exam_Check = false;

    // this.Ielts_Details_.Exam_Date = new Date();
    // 		this.Ielts_Details_.Exam_Date = this.New_Date(this.Ielts_Details_.Exam_Date);

    this.Ielts_Details_.Exam_Date = new Date();
    this.Ielts_Details_.Exam_Date = this.New_Date(
      new Date(moment(this.Ielts_Details_.Exam_Date).format("YYYY-MM-DD"))
    );

    if (this.IELTS_Type_Data != null && this.IELTS_Type_Data != undefined)
      this.IELTS_Type_ = this.IELTS_Type_Data[0];
  }

  Save_Refund_Request() {
    if (
      this.Refund_Request_.Reason === undefined ||
      this.Refund_Request_.Reason == null ||
      this.Refund_Request_.Reason == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Amount", Type: "3" },
      });
      // this.refund_message="Enter Reason";
      return;
    }
    if (
      this.Refund_Request_.Remark === undefined ||
      this.Refund_Request_.Remark == null ||
      this.Refund_Request_.Remark == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Remark", Type: "3" },
      });
      // this.refund_message="Enter Remark";
      return;
    }

    this.Refund_Request_.Student_Id = this.Profile_.Student_Id;
    this.Refund_Request_.Fees_Receipt_Id = this.Fees_Receipt_Id_data;
    this.Refund_Request_.User_Id = Number(this.Login_User);

    this.issLoading = true;

    this.Student_Service_.Save_Refund_Request(this.Refund_Request_).subscribe(
      (Save_Refund_Request) => {
        Save_Refund_Request = Save_Refund_Request[0];
        if (Number(Save_Refund_Request[0].Refund_Request_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          //this.Get_WorkexperienceDetails(Save_Refund_Request[0].Refund_Request_Id);
          this.Clr_Refund_Request();
          this.Search_Receipt();
          this.Search_Commission();
          if (Number(this.Login_User) != Save_Refund_Request[0].To_User_) {
            var message = {
              Student_Name: Save_Refund_Request[0].Student_Name_,
              From_User_Name: Save_Refund_Request[0].From_User_Name_,
              Notification_Type_Name:
                Save_Refund_Request[0].Notification_Type_Name_,
              Entry_Type: Save_Refund_Request[0].Entry_Type_,
              To_User: Save_Refund_Request[0].To_User_,
              Notification_Id: Save_Refund_Request[0].Notification_Id_,
              Student_Id: Save_Refund_Request[0].Student_Id_,
            };
            this.socket.emit("new-message", message);
          }
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

  Save_pre_visa() {
    var Menu_Status = false;

    var Department_Status = false;
    for (var j = 0; j < this.Student_Checklist_Data.length; j++) {
      if (this.Student_Checklist_Data[j].Check_Box == true)
        Department_Status = true;
    }
    if (Department_Status == false) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Atleast One Checklist", Type: "3" },
      });
      return;
    }

    var Checklist_Details = [];

    for (var m = 0; m < this.Student_Checklist_Data.length; m++) {
      if (Boolean(this.Student_Checklist_Data[m].Check_Box) == true) {
        Checklist_Details.push({
          Checklist_Id: this.Student_Checklist_Data[m].Checklist_Id,
        });
      }
    }

    this.Previsa_.Student_Id = this.Profile_.Student_Id;
    this.Previsa_.Country_Id = this.Student_Checklist_Country_Id;
    this.Previsa_.Checklist_Details = Checklist_Details;
    this.Previsa_.User_Id = Number(this.Login_User);

    this.issLoading = true;
    this.Student_Service_.Save_pre_visa(this.Previsa_).subscribe(
      (Save_pre_visa) => {
        Save_pre_visa = Save_pre_visa[0];
        if (Number(Save_pre_visa[0].Student_Checklist_Master_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          //this.Get_WorkexperienceDetails(Save_Refund_Request[0].Refund_Request_Id);
          this.Clr_Pre_Visa();
          this.Get_Previsa_Details(this.Profile_.Student_Id);
          this.Close_Pre_Visa();
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

  Save_Pre_Admission() {
    var Menu_Status = false;

    var Department_Status = false;
    for (var j = 0; j < this.Student_Checklist_Preadmission_Data.length; j++) {
      if (this.Student_Checklist_Preadmission_Data[j].Check_Box == true)
        Department_Status = true;
    }
    if (Department_Status == false) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Atleast One Checklist", Type: "3" },
      });
      return;
    }

    var Checklist_Details = [];

    for (var m = 0; m < this.Student_Checklist_Preadmission_Data.length; m++) {
      if (
        Boolean(this.Student_Checklist_Preadmission_Data[m].Check_Box) == true
      ) {
        Checklist_Details.push({
          Checklist_Id:
            this.Student_Checklist_Preadmission_Data[m].Checklist_Id,
        });
      }
    }

    this.Preadmission_.Student_Id = this.Profile_.Student_Id;
    this.Preadmission_.Country_Id =
      this.Student_Preadmission_Checklist_Country_Id;
    this.Preadmission_.Checklist_Details = Checklist_Details;
    this.Preadmission_.User_Id = Number(this.Login_User);

    this.issLoading = true;
    this.Student_Service_.Save_Pre_Admission(this.Preadmission_).subscribe(
      (Save_pre_visa) => {
        Save_pre_visa = Save_pre_visa[0];
        if (
          Number(Save_pre_visa[0].Student_Preadmission_Checklist_Master_Id_) > 0
        ) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          //this.Get_WorkexperienceDetails(Save_Refund_Request[0].Refund_Request_Id);
          this.Clr_Pre_Admission();
          this.Get_Preadmission_Details(this.Profile_.Student_Id);
          this.Close_Pre_Admission();
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

  Save_Review() {
    if (this.Review_.Facebook == true && this.Review_.Facebook_Date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Facebook Date", Type: "3" },
      });
      return;
    }

    if (this.Review_.Instagram == true && this.Review_.Instagram_Date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Instagram Date", Type: "3" },
      });
      return;
    }

    if (this.Review_.Gmail == true && this.Review_.Google_Date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Google Date", Type: "3" },
      });
      return;
    }

    if (this.Review_.Checklist == true && this.Review_.Checklist_Date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Checklist Date", Type: "3" },
      });
      return;
    }

    if (this.Review_.Kit == true && this.Review_.Kit_Date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Kit Date", Type: "3" },
      });
      return;
    }

    if (this.Review_.Ticket == true && this.Review_.Ticket_Date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Ticket Date", Type: "3" },
      });
      return;
    }

    if (
      this.Review_.Accomodation == true &&
      this.Review_.Accomodation_Date == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Accomodation Date", Type: "3" },
      });
      return;
    }

    if (
      this.Review_.Airport_Pickup == true &&
      this.Review_.Airport_Pickup_Date == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Airport Pickup Date", Type: "3" },
      });
      return;
    }

    if (this.Review_.Travel == true && this.Review_.Travel_Date == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Travel Date", Type: "3" },
      });
      return;
    }

    var Menu_Status = false;

    if (
      this.Review_.Facebook == true ||
      this.Review_.Instagram == true ||
      this.Review_.Gmail == true ||
      this.Review_.Checklist == true ||
      this.Review_.Kit == true ||
      this.Review_.Ticket == true ||
      this.Review_.Accomodation == true ||
      this.Review_.Airport_Pickup == true ||
      this.Review_.Travel == true
    )
      Menu_Status = true;
    if (Menu_Status == false) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Atleast One Data", Type: "3" },
      });
      return;
    }

    var Facebook_Status = 0;
    if (Boolean(this.Review_.Facebook) == true) Facebook_Status = 1;

    this.Review_.Facebook_Date = this.New_Date(
      new Date(moment(this.Review_.Facebook_Date).format("YYYY-MM-DD"))
    );

    var Instagram_Status = 0;
    if (Boolean(this.Review_.Instagram) == true) Instagram_Status = 1;

    this.Review_.Instagram_Date = this.New_Date(
      new Date(moment(this.Review_.Instagram_Date).format("YYYY-MM-DD"))
    );

    var Gmail_Status = 0;
    if (Boolean(this.Review_.Gmail) == true) Facebook_Status = 1;

    this.Review_.Google_Date = this.New_Date(
      new Date(moment(this.Review_.Google_Date).format("YYYY-MM-DD"))
    );

    var Checklist_Status = 0;
    if (Boolean(this.Review_.Checklist) == true) Checklist_Status = 1;

    this.Review_.Checklist_Date = this.New_Date(
      new Date(moment(this.Review_.Checklist_Date).format("YYYY-MM-DD"))
    );

    var Kit_Status = 0;
    if (Boolean(this.Review_.Kit) == true) Kit_Status = 1;

    this.Review_.Kit_Date = this.New_Date(
      new Date(moment(this.Review_.Kit_Date).format("YYYY-MM-DD"))
    );

    var Ticket_Status = 0;
    if (Boolean(this.Review_.Ticket) == true) Ticket_Status = 1;

    this.Review_.Ticket_Date = this.New_Date(
      new Date(moment(this.Review_.Ticket_Date).format("YYYY-MM-DD"))
    );

    var Accomodation_Status = 0;
    if (Boolean(this.Review_.Accomodation) == true) Accomodation_Status = 1;

    this.Review_.Accomodation_Date = this.New_Date(
      new Date(moment(this.Review_.Accomodation_Date).format("YYYY-MM-DD"))
    );

    var Airport_Pickup_Status = 0;
    if (Boolean(this.Review_.Airport_Pickup) == true) Airport_Pickup_Status = 1;

    this.Review_.Airport_Pickup_Date = this.New_Date(
      new Date(moment(this.Review_.Airport_Pickup_Date).format("YYYY-MM-DD"))
    );

    var Travel_Status = 0;
    if (Boolean(this.Review_.Travel) == true) Travel_Status = 1;

    this.Review_.Travel_Date = this.New_Date(
      new Date(moment(this.Review_.Travel_Date).format("YYYY-MM-DD"))
    );

    this.Review_.Student_Id = this.Profile_.Student_Id;
    this.Review_.User_Id = Number(this.Login_User);
    this.issLoading = true;
    // debugger;
    this.Student_Service_.Save_Review(this.Review_).subscribe(
      (Save_Review) => {
        // debugger;
        Save_Review = Save_Review[0];
        if (Number(Save_Review[0].Review_Id_) > 0) {
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          //this.Get_WorkexperienceDetails(Save_Refund_Request[0].Refund_Request_Id);
          this.Clr_Review();
          this.Get_ReviewDetails(this.Profile_.Student_Id);
          this.Close_Review();
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
  Clr_Refund_Request() {
    this.Refund_Request_.Reason = "";
    this.Refund_Request_.Remark = "";
  }
  Clr_Pre_Visa() {
    this.Previsa_.Student_Checklist_Master_Id = 0;
    this.Previsa_.Check_Box = false;

    if (this.Student_Checklist_Data != undefined)
      for (var i = 0; i < this.Student_Checklist_Data.length; i++) {
        this.Student_Checklist_Data[i].Check_Box = false;
      }
  }

  Clr_Pre_Admission() {
    this.Preadmission_.Student_Preadmission_Checklist_Master_Id = 0;
    this.Preadmission_.Check_Box = false;

    if (this.Student_Checklist_Preadmission_Data != undefined)
      for (
        var i = 0;
        i < this.Student_Checklist_Preadmission_Data.length;
        i++
      ) {
        this.Student_Checklist_Preadmission_Data[i].Check_Box = false;
      }
  }

  Clr_Review() {
    this.Review_.Review_Id = 0;
    this.Review_.Facebook = false;
    this.Review_.Gmail = false;
    this.Review_.Instagram = false;
    this.Review_.Checklist = false;
    this.Review_.Kit = false;
    this.Review_.Ticket = false;
    this.Review_.Accomodation = false;
    this.Review_.Airport_Pickup = false;
    this.Review_.Travel = false;

    this.Review_.Facebook_Date = new Date();
    this.Review_.Facebook_Date = this.New_Date(this.Review_.Facebook_Date);
    this.Review_.Instagram_Date = new Date();
    this.Review_.Instagram_Date = this.New_Date(this.Review_.Instagram_Date);
    this.Review_.Google_Date = new Date();
    this.Review_.Google_Date = this.New_Date(this.Review_.Google_Date);

    this.Review_.Checklist_Date = new Date();
    this.Review_.Checklist_Date = this.New_Date(this.Review_.Checklist_Date);
    this.Review_.Kit_Date = new Date();
    this.Review_.Kit_Date = this.New_Date(this.Review_.Kit_Date);
    this.Review_.Ticket_Date = new Date();
    this.Review_.Ticket_Date = this.New_Date(this.Review_.Ticket_Date);
    this.Review_.Accomodation_Date = new Date();
    this.Review_.Accomodation_Date = this.New_Date(
      this.Review_.Accomodation_Date
    );
    this.Review_.Airport_Pickup_Date = new Date();
    this.Review_.Airport_Pickup_Date = this.New_Date(
      this.Review_.Airport_Pickup_Date
    );

    this.Review_.Travel_Date = new Date();
    this.Review_.Travel_Date = this.New_Date(this.Review_.Travel_Date);
  }
  // 	Transfer_Cofirmation(Transfer_Source) {
  // 		var Bph_Approve = false;

  // 		if (
  // 			this.Transfer_Status_ == null ||
  // 			this.Transfer_Status_ == undefined ||
  // 			this.Transfer_Status_.Department_Status_Id == undefined ||
  // 			this.Transfer_Status_.Department_Status_Name == null
  // 		) {
  // 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 				panelClass: "Dialogbox-Class",
  // 				data: { Message: "Select Status", Type: "3" },
  // 			});
  // 			return;
  // 		}

  // 		if (
  // 			this.Profile_.Transfer_Remark == undefined ||
  // 			this.Profile_.Transfer_Remark == null ||
  // 			this.Profile_.Transfer_Remark == ""
  // 		) {
  // 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 				panelClass: "Dialogbox-Class",
  // 				data: { Message: "Enter Remark", Type: "3" },
  // 			});
  // 			return;
  // 		}

  // 		this.Profile_.Transfer_Status_Id =
  // 			this.Transfer_Status_.Department_Status_Id;
  // 		this.Profile_.Transfer_Status_Name =
  // 			this.Transfer_Status_.Department_Status_Name;

  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: {
  // 				Message: "Do you want to Transfer ?",
  // 				Type: true,
  // 				Heading: "Confirm",
  // 			},
  // 		});
  // 		dialogRef.afterClosed().subscribe((result) => {
  // 			if (result == "Yes") {
  //

  // 				this.Transfer_.Student_Id=this.Profile_.Student_Id;
  // 				this.Transfer_.transfer_source=this.transfer_source;
  // 				this.Transfer_.Login_User=Number(this.Login_User);
  // 				this.Transfer_.Transfer_department_Id=this.Transfer_department_Id;
  // 				this.Transfer_.Transfer_Remark=this.Profile_.Transfer_Remark;
  // 				this.Transfer_.Transfer_Status_Id=this.Profile_.Transfer_Status_Id;
  // 				this.Transfer_.Transfer_Status_Name=this.Profile_.Transfer_Status_Name;
  // 				this.Transfer_.Substatus_Id=0;
  // 				this.Transfer_.Substatus_Name="undefined";
  // 				this.Transfer_.Application_Id_Ref=0;
  // 				this.Transfer_.Followup_Branch_Id=this.FollowUp_.Branch;
  // 				this.Transfer_.Followup_Branch_Name=this.FollowUp_.Branch_Name;
  // 				this.Transfer_.Followup_Department_Id=this.FollowUp_.Department;
  // 				this.Transfer_.Followup_Department_Name=this.FollowUp_.Department_Name;
  // 				this.Transfer_.Followup_Status_Id=this.FollowUp_.Status_Id;
  // 				this.Transfer_.Followup_Status_Name=this.FollowUp_.Department_Status_Name;
  // 				this.Transfer_.Followup_To_User_Id=this.FollowUp_.To_User_Id;
  // 				this.Transfer_.Followup_To_User_Name=this.FollowUp_.To_User_Name;
  // 				this.Transfer_.Next_FollowUp_Date = this.New_Date(
  // 					new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
  // 				);

  // 				this.issLoading = true;

  // 				this.Student_Service_.Transfer_Cofirmation(
  // 					this.Transfer_
  // 				).subscribe(
  // 					(Save_status) => {
  //
  // 						if (Save_status[0][0].Student_Id_ > 0) {
  // 							this.Total_Rows = this.Total_Rows - this.Student_Data.length;

  // 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 								panelClass: "Dialogbox-Class",
  // 								data: { Message: "Transferred", Type: "false" },
  // 							});

  // 							this.Clr_Student();
  // 							this.Close_Click();
  // 							//socket emit code
  // 							if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
  // 								var message = {
  // 									Student_Name: Save_status[0][0].Student_Name_,
  // 									From_User_Name: Save_status[0][0].From_User_Name_,
  // 									Notification_Type_Name:
  // 										Save_status[0][0].Notification_Type_Name_,
  // 									Entry_Type: Save_status[0][0].Entry_Type_,
  // 									To_User: Save_status[0][0].User_Id_,
  // 									Notification_Id: Save_status[0][0].Notification_Id_,
  // 									Student_Id: Save_status[0][0].Student_Id_,
  // 								};
  // 								this.socket.emit("new-message", message);
  // 							}
  // 						} else if (Save_status[0][0].Student_Id_ == -1) {
  // 							this.Total_Rows = this.Total_Rows - this.Student_Data.length;

  // 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 								panelClass: "Dialogbox-Class",
  // 								data: { Message: "User Not Found", Type: "3" },
  // 							});
  // 							this.Clr_Student();
  // 							this.Close_Click();
  // 						} else {
  // 							this.issLoading = false;
  // 							const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 								panelClass: "Dialogbox-Class",
  // 								data: { Message: "Error Occured", Type: "2" },
  // 							});
  // 						}
  // 						this.issLoading = false;
  // 					},
  // 					(Rows) => {
  // 						this.issLoading = false;
  // 						const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 							panelClass: "Dialogbox-Class",
  // 							data: { Message: "Error Occured", Type: "2" },
  // 						});
  // 					}
  // 				);
  // 			}
  // 		});
  // 	}

  Transfer_Cofirmation(Transfer_Source) {
    var Bph_Approve = false;

    if (
      this.Transfer_Status_ == null ||
      this.Transfer_Status_ == undefined ||
      this.Transfer_Status_.Department_Status_Id == undefined ||
      this.Transfer_Status_.Department_Status_Name == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Status", Type: "3" },
      });
      return;
    }

    if (
      this.Profile_.Transfer_Remark == undefined ||
      this.Profile_.Transfer_Remark == null ||
      this.Profile_.Transfer_Remark == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Remark", Type: "3" },
      });
      return;
    }

    this.Profile_.Transfer_Status_Id =
      this.Transfer_Status_.Department_Status_Id;
    this.Profile_.Transfer_Status_Name =
      this.Transfer_Status_.Department_Status_Name;

    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to Transfer ?",
        Type: true,
        Heading: "Confirm",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        this.issLoading = true;
        this.Student_Service_.Transfer_Cofirmation(
          this.Profile_.Student_Id,
          this.transfer_source,
          this.Login_User,
          this.Transfer_department_Id,
          this.Profile_.Transfer_Remark,
          this.Profile_.Transfer_Status_Id,
          this.Profile_.Transfer_Status_Name,
          0,
          "undefined",
          0
        ).subscribe(
          (Save_status) => {
            if (Save_status[0][0].Student_Id_ > 0) {
              this.Total_Rows = this.Total_Rows - this.Student_Data.length;

              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Transferred", Type: "false" },
              });

              this.Clr_Student();
              this.Search_Student(1);
              this.Close_Click();
              //socket emit code
              if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
                var message = {
                  Student_Name: Save_status[0][0].Student_Name_,
                  From_User_Name: Save_status[0][0].From_User_Name_,
                  Notification_Type_Name:
                    Save_status[0][0].Notification_Type_Name_,
                  Entry_Type: Save_status[0][0].Entry_Type_,
                  To_User: Save_status[0][0].User_Id_,
                  Notification_Id: Save_status[0][0].Notification_Id_,
                  Student_Id: Save_status[0][0].Student_Id_,
                };
                this.socket.emit("new-message", message);
              }
            } else if (Save_status[0][0].Student_Id_ == -1) {
              this.Total_Rows = this.Total_Rows - this.Student_Data.length;

              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "User Not Found", Type: "3" },
              });
              this.Clr_Student();
              this.Search_Student(1);
              this.Close_Click();
            } else {
              this.issLoading = false;
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
              data: { Message: "Error Occured", Type: "2" },
            });
          }
        );
      }
    });
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
          this.Search_Lead_button();
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

  Transfer_Cofirmation_Register(Transfer_Source) {
    // dialogRef.afterClosed().subscribe((result) => {
    //  if (result == "Yes") {
    this.issLoading = true;

    this.Student_Service_.Transfer_Cofirmation(
      this.Profile_.Student_Id,
      "undefined",
      this.Login_User,
      this.Transfer_department_Id,
      this.Profile_.Transfer_Remark,
      this.Transfer_departmentstatus_Id,
      this.Transfer_departmentstatusname,
      0,
      "undefined",
      0
    ).subscribe(
      (Save_status) => {
        if (Save_status[0][0].Student_Id_ > 0) {
          // this.Total_Rows = this.Total_Rows - this.Student_Data.length;

          // const dialogRef = this.dialogBox.open(DialogBox_Component, {
          //  panelClass: "Dialogbox-Class",
          //  data: { Message: "Transferred", Type: "false" },
          // });

          // this.Clr_Student();
          // this.Close_Click();
          //socket emit code
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
        } else if (Save_status[0][0].Student_Id_ == -1) {
          this.Total_Rows = this.Total_Rows - this.Student_Data.length;

          // const dialogRef = this.dialogBox.open(DialogBox_Component, {
          //  panelClass: "Dialogbox-Class",
          //  data: { Message: "User Not Found", Type: "3" },
          // });
          // this.Clr_Student();
          // this.Close_Click();
        } else {
          this.issLoading = false;
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
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
    // }
    // });
  }

  Transfer_Cofirmation_Status(Transfer_Source) {
    // dialogRef.afterClosed().subscribe((result) => {
    //  if (result == "Yes") {
    this.issLoading = true;

    this.Student_Service_.Transfer_Cofirmation(
      this.transfer_student_id_,
      "undefined",
      this.Login_User,
      this.transfer_status_Dept_Id_,
      this.FollowUp_.Remark,
      this.FollowUp_.Status_Id,
      this.FollowUp_.Department_Status_Name,
      0,
      "undefined",
      0
    ).subscribe(
      (Save_status) => {
        this.Search_Lead_button();
        if (Save_status[0][0].Student_Id_ > 0) {
          this.Total_Rows = 0;

          // this.Total_Rows = this.Total_Rows - this.Student_Data.length;

          // const dialogRef = this.dialogBox.open(DialogBox_Component, {
          //  panelClass: "Dialogbox-Class",
          //  data: { Message: "Transferred", Type: "false" },
          // });

          // this.Clr_Student();
          // this.Close_Click();
          //socket emit code
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
        } else if (Save_status[0][0].Student_Id_ == -1) {
          this.Total_Rows = this.Total_Rows - this.Student_Data.length;

          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "User Not Found", Type: "3" },
          });
          // this.Clr_Student();
          // this.Close_Click();
        } else {
          this.issLoading = false;
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
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
    // }
    // });
  }

  Get_Transfer_status(Transfer_Source, Department_id) {
    //this.issLoading = true;
    this.Followup_Transfer_Status_Data = [];
    this.Followup_Substatus_Data_Filter1 = [];
    this.Followup_Substatus_Data1 = [];
    this.Transfer_Status_k = null;
    this.Transfer_Status_ = null;
    this.Profile_.Transfer_Remark = "";

    this.transfer_source = Transfer_Source;
    this.Transfer_department_Id = Department_id;
    // this.Student_Service_.Get_WorkexperienceDetails(Transfer_Source).subscribe(
    // 	(Rows) => {
    // 		;
    // 		this.Work_experience_Data = Rows[0];
    // 		this.issLoading = false;
    // 	},
    // 	(Rows) => {
    // 		this.issLoading = false;
    // 	}
    // );
  }

  Add_CAS_Followup(Student_Task_Id, Student_Id, task_item_id, task_group_id) {
    this.Cas_Followup_.Followup_Date = new Date();
    this.Cas_Followup_.Followup_Date = this.New_Date(
      this.Cas_Followup_.Followup_Date
    );
    this.Task_Group_Id = 1;
    this.cas_task_id = Student_Task_Id;
    this.cas_task_student_id = Student_Id;
    this.cas_task_item_id = task_item_id;
    this.cas_task_group_id = task_group_id;
    this.Cas_Followup_View = true;
    this.Visa_View = false;
    this.Pre_Visamodal_View = false;
    this.Pre_Visa_View = false;
    this.Pre_Admission_View = false;
    this.Pre_AdmissionModal_View = false;
    this.Pre_Visa_Checklist_View = false;
    this.Pre_Visachecklistmodal_View = false;
    this.Cas_FollowupPrevisa_View = false;
    this.Tasknew_View = false;
    this.Tasknewmodal_View = false;
    this.Cas_FollowupTasknew_View = false;
    this.Clr_cas_Followup();
  }

  Add_CAS_Followup_Previsa() {
    this.Cas_Followup_.Followup_Date = new Date();
    this.Cas_Followup_.Followup_Date = this.New_Date(
      this.Cas_Followup_.Followup_Date
    );
    this.Task_Group_Id = 2;
    this.Cas_FollowupPrevisa_View = true;
    this.Visa_View = false;
    this.Pre_Visamodal_View = false;
    this.Pre_Visa_View = false;
    this.Pre_Admission_View = false;
    this.Pre_AdmissionModal_View = false;
    this.Pre_Visa_Checklist_View = false;
    this.Pre_Visachecklistmodal_View = false;
    this.Clr_cas_Followup();
  }
  Add_CAS_Followup_Tasknew() {
    this.Cas_Followup_.Followup_Date = new Date();
    this.Cas_Followup_.Followup_Date = this.New_Date(
      this.Cas_Followup_.Followup_Date
    );
    this.Task_Group_Id = 4;
    this.Cas_FollowupPrevisa_View = false;
    this.Tasknew_View = false;
    this.Tasknewmodal_View = false;
    this.Cas_FollowupTasknew_View = true;
    this.Visa_View = false;
    this.Pre_Visamodal_View = false;
    this.Pre_Visa_View = false;
    this.Pre_Admission_View = false;
    this.Pre_AdmissionModal_View = false;
    this.Pre_Visa_Checklist_View = false;
    this.Pre_Visachecklistmodal_View = false;
    this.Clr_Tasknewcas_Followup();

    this.FollowUp_Branch_Task_ = Object.assign({}, this.Branch_Temp);
    this.FollowUp_Department_Task_ = Object.assign({}, this.Department_Temp);
    this.FollowUp_Status_Task_ = Object.assign({}, this.Status_Temp);
    this.Followup_Users_Task_ = Object.assign({}, this.Users_Temp_c);
  }

  Add_CAS_Followup_Preadmission() {
    this.Cas_Followup_.Followup_Date = new Date();
    this.Cas_Followup_.Followup_Date = this.New_Date(
      this.Cas_Followup_.Followup_Date
    );
    this.Task_Group_Id = 3;
    this.Cas_FollowupPreadmission_View = true;
    this.Visa_View = false;
    this.Pre_Visamodal_View = false;
    this.Pre_Visa_View = false;
    this.Pre_Admission_View = false;
    this.Pre_AdmissionModal_View = false;
    this.Pre_Visa_Checklist_View = false;
    this.Pre_Visachecklistmodal_View = false;

    this.Clr_cas_Followup();
  }

  // Save_Cas_Followup() {
  // 	if (
  // 		this.Task_Item_search_ == undefined ||
  // 		this.Task_Item_search_ == null ||
  // 		this.Task_Item_search_.Task_Item_Id == undefined ||
  // 		this.Task_Item_search_.Task_Item_Id == 0
  // 	) {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Select Task", Type: "3" },
  // 		});
  // 		return;
  // 	}

  // 	if (
  // 		this.Task_Status_ == undefined ||
  // 		this.Task_Status_ == null ||
  // 		this.Task_Status_.Task_Status_Id == undefined ||
  // 		this.Task_Status_.Task_Status_Id == 0
  // 	) {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Select Status", Type: "3" },
  // 		});
  // 		return;
  // 	}

  // 	if (
  // 		this.Cas_Followup_.Remark == undefined ||
  // 		this.Cas_Followup_.Remark == null ||
  // 		this.Cas_Followup_.Remark == ""
  // 	) {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 			panelClass: "Dialogbox-Class",
  // 			data: { Message: "Enter Remark", Type: "3" },
  // 		});
  // 		return;
  // 	}

  // 	this.Cas_Followup_.Student_Id = this.Profile_.Student_Id;
  // 	this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
  // 	this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
  // 	this.Cas_Followup_.To_User = Number(this.Login_User);
  // 	this.Cas_Followup_.To_User_Name = this.Login_User_Name;
  // 	this.Cas_Followup_.Task_Item_Id = this.Task_Item_search_.Task_Item_Id;
  // 	this.Cas_Followup_.Followup_Date = this.New_Date(
  // 		new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
  // 	);
  // 	this.Cas_Followup_.Task_Group_Id = this.Task_Group_Id;

  // 	if (this.Save_Call_Status == true) return;
  // 	else this.Save_Call_Status = true;
  // 	this.issLoading = true;

  // 	this.Student_Service_.Save_Cas_Followup(this.Cas_Followup_).subscribe(
  // 		(Save_work_experience) => {
  // 			Save_work_experience = Save_work_experience[0];
  // 			if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
  // 				if (this.Task_Group_Id == 1) {
  // 					this.Save_Call_Status = false;
  // 					const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 						panelClass: "Dialogbox-Class",
  // 						data: { Message: "Saved", Type: "false" },
  // 					});
  // 					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
  // 					this.Clr_cas_Followup();
  // 					this.Close_Cas_Followup();
  // 					this.Get_Visa_Task(this.Task_Group_Id);
  // 				}

  // 				if (this.Task_Group_Id == 2) {
  // 					this.Save_Call_Status = false;
  // 					const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 						panelClass: "Dialogbox-Class",
  // 						data: { Message: "Saved", Type: "false" },
  // 					});
  // 					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
  // 					this.Clr_cas_Followup();
  // 					this.Close_previsadetails();
  // 					this.Get_Previsa_Task(this.Task_Group_Id);
  // 				}

  // 				if (this.Task_Group_Id == 3) {
  // 					this.Save_Call_Status = false;
  // 					const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 						panelClass: "Dialogbox-Class",
  // 						data: { Message: "Saved", Type: "false" },
  // 					});
  // 					// this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
  // 					this.Clr_cas_Followup();
  // 					this.Close_preadmissiondetails();
  // 					this.Get_Preadmission_Task(this.Task_Group_Id);
  // 				}
  // 				var notification_type_ = "Task";
  // 				var message = {
  // 					To_User: Save_work_experience[0].To_User_,
  // 					Task_Count: Save_work_experience[0].Task_Count_,
  // 					Notification_Type_Name: notification_type_,
  // 				};
  // 				this.socket.emit("new-message", message);
  // 			} else {
  // 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 					panelClass: "Dialogbox-Class",
  // 					data: { Message: "Error Occured", Type: "2" },
  // 				});
  // 			}
  // 			this.issLoading = false;
  // 		},
  // 		(Rows) => {
  // 			this.issLoading = false;
  // 			const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 				panelClass: "Dialogbox-Class",
  // 				data: { Message: Rows.error.error, Type: "2" },
  // 			});
  // 		}
  // 	);
  // }

  Edit_Visa_Task(Student_Task_e: Student_Task, index) {
    this.Cas_Followup_View = true;
    this.Cas_FollowupPrevisa_View = false;
    this.Pre_Visa_View = false;
    // this.Cas_FollowupPrevisa_View=true;
    this.Visa_View = false;
    //this.Entry_View=true;
    this.Cas_Followup_ = Student_Task_e;
    this.Cas_Followup_ = Object.assign({}, Student_Task_e);

    if (this.Cas_Followup_.Followup_Date == null) {
      this.Cas_Followup_.Followup_Date = new Date();
      this.Cas_Followup_.Followup_Date = this.New_Date(
        this.Cas_Followup_.Followup_Date
      );
    } else
      this.Cas_Followup_.Followup_Date = this.New_Date(
        new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
      );

    for (var i = 0; i < this.Task_Status_Data.length; i++) {
      if (
        this.Cas_Followup_.Task_Status ==
        this.Task_Status_Data[i].Task_Status_Id
      )
        this.Task_Status_ = this.Task_Status_Data[i];
    }

    for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
      if (
        this.Cas_Followup_.Task_Item_Id ==
        this.Task_Item_Data_search[i].Task_Item_Id
      )
        this.Task_Item_search_ = this.Task_Item_Data_search[i];
    }
  }

  Edit_PreVisa_Task(Student_Task_e: Student_Task, index) {
    this.Cas_Followup_View = false;
    this.Cas_FollowupPrevisa_View = true;
    // this.Cas_FollowupPrevisa_View=true;
    this.Visa_View = false;
    this.Pre_Visa_View = false;
    //this.Entry_View=true;
    this.Cas_Followup_ = Student_Task_e;
    this.Cas_Followup_ = Object.assign({}, Student_Task_e);

    if (this.Cas_Followup_.Followup_Date == null) {
      this.Cas_Followup_.Followup_Date = new Date();
      this.Cas_Followup_.Followup_Date = this.New_Date(
        this.Cas_Followup_.Followup_Date
      );
    } else
      this.Cas_Followup_.Followup_Date = this.New_Date(
        new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
      );

    for (var i = 0; i < this.Task_Status_Data.length; i++) {
      if (
        this.Cas_Followup_.Task_Status ==
        this.Task_Status_Data[i].Task_Status_Id
      )
        this.Task_Status_ = this.Task_Status_Data[i];
    }

    for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
      if (
        this.Cas_Followup_.Task_Item_Id ==
        this.Task_Item_Data_search[i].Task_Item_Id
      )
        this.Task_Item_search_ = this.Task_Item_Data_search[i];
    }
  }

  Edit_Tasknew_Task(Student_Task_e: Student_Task, index) {
    this.Cas_Followup_View = false;
    this.Cas_FollowupTasknew_View = true;
    this.Tasknew_View = false;

    this.Cas_Followup_ = Student_Task_e;
    this.Cas_Followup_ = Object.assign({}, Student_Task_e);

    this.FollowUp_Department_TempN.Department_Id = Student_Task_e.Department_Id;
    this.FollowUp_Department_TempN.Department_Name =
      Student_Task_e.Department_Name;
    this.FollowUp_Department_Task_ = this.FollowUp_Department_TempN;

    this.Followup_Users_tempN.User_Details_Id = Student_Task_e.To_User;
    this.Followup_Users_tempN.User_Details_Name = Student_Task_e.To_User_Name;
    this.Followup_Users_Task_ = this.Followup_Users_tempN;

    this.Followup_Branch_tempN.Branch_Id = Student_Task_e.Branch_Id;
    this.Followup_Branch_tempN.Branch_Name = Student_Task_e.Branch_Name;
    this.FollowUp_Branch_Task_ = this.Followup_Branch_tempN;

    for (var i = 0; i < this.Task_Status_Data.length; i++) {
      if (
        this.Cas_Followup_.Task_Status ==
        this.Task_Status_Data[i].Task_Status_Id
      )
        this.Task_Status_ = this.Task_Status_Data[i];
    }

    if (this.Cas_Followup_.Followup_Date == null) {
      this.Cas_Followup_.Followup_Date = new Date();
      this.Cas_Followup_.Followup_Date = this.New_Date(
        this.Cas_Followup_.Followup_Date
      );
    } else
      this.Cas_Followup_.Followup_Date = this.New_Date(
        new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
      );

    for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
      if (
        this.Cas_Followup_.Task_Item_Id ==
        this.Task_Item_Data_search[i].Task_Item_Id
      )
        this.Task_Item_search_Tasknew_ = this.Task_Item_Data_search[i];
    }
  }

  Edit_PreAdmission_Task(Student_Task_e: Student_Task, index) {
    this.Cas_Followup_View = false;
    this.Cas_FollowupPrevisa_View = false;
    this.Cas_FollowupPreadmission_View = true;
    // this.Cas_FollowupPrevisa_View=true;
    this.Visa_View = false;
    this.Pre_Visa_View = false;
    this.Pre_Admission_View = false;
    this.Pre_Visa_Checklist_View = false;

    //this.Entry_View=true;
    this.Cas_Followup_ = Student_Task_e;
    this.Cas_Followup_ = Object.assign({}, Student_Task_e);

    if (this.Cas_Followup_.Followup_Date == null) {
      this.Cas_Followup_.Followup_Date = new Date();
      this.Cas_Followup_.Followup_Date = this.New_Date(
        this.Cas_Followup_.Followup_Date
      );
    } else
      this.Cas_Followup_.Followup_Date = this.New_Date(
        new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
      );

    for (var i = 0; i < this.Task_Status_Data.length; i++) {
      if (
        this.Cas_Followup_.Task_Status ==
        this.Task_Status_Data[i].Task_Status_Id
      )
        this.Task_Status_ = this.Task_Status_Data[i];
    }

    for (var i = 0; i < this.Task_Item_Data_search.length; i++) {
      if (
        this.Cas_Followup_.Task_Item_Id ==
        this.Task_Item_Data_search[i].Task_Item_Id
      )
        this.Task_Item_search_ = this.Task_Item_Data_search[i];
    }
  }

  Delete_Visa_Task(Student_Task_Id, index) {
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
        this.Student_Service_.Delete_Visa_Task(Student_Task_Id).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Task_Student_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              //this.Clr_work_experience();
              this.Get_Visa_Task(this.Task_Group_Id);
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_PreVisa_Task(Student_Task_Id, index) {
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
        this.Student_Service_.Delete_Visa_Task(Student_Task_Id).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Task_Student_Previsa_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              //this.Clr_work_experience();
              this.Get_Previsa_Task(this.Task_Group_Id);
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_Tasknew(Student_Task_Id, index) {
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
        this.Student_Service_.Delete_Tasknew(Student_Task_Id).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Task_Student_Tasknew_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              //this.Clr_work_experience();
              this.Get_Tasknew_Task(this.Task_Group_Id);
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Delete_Preadmission_Task(Student_Task_Id, index) {
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
        this.Student_Service_.Delete_Visa_Task(Student_Task_Id).subscribe(
          (Delete_status) => {
            Delete_status = Delete_status[0];
            Delete_status = Delete_status[0].DeleteStatus_.data[0];
            if (Delete_status == 1) {
              this.Task_Student_Preadmission_Data.splice(index, 1);
              const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Deleted", Type: "false" },
              });
              //this.Clr_work_experience();
              this.Get_Preadmission_Task(this.Task_Group_Id);
            }
            // else
            // {
            // this.issLoading=false;
            // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Can not be deleted because its already Used',Type:"2"}});
            // }
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
    });
  }

  Clr_cas_Followup() {
    this.Cas_Followup_.Student_Task_Id = 0;
    this.Cas_Followup_.Remark = "";
    this.Cas_Followup_.Task_Details = "";
    this.Cas_Followup_.Task_Group_Id = 0;

    this.Cas_Followup_.Followup_Date = new Date();
    this.Cas_Followup_.Followup_Date = this.New_Date(
      this.Cas_Followup_.Followup_Date
    );

    if (this.Task_Status_Data != null && this.Task_Status_Data != undefined)
      this.Task_Status_ = this.Task_Status_Data[0];

    if (
      this.Task_Item_Data_search != null &&
      this.Task_Item_Data_search != undefined
    )
      this.Task_Item_search_ = this.Task_Item_Data_search[0];
  }

  Clr_Tasknewcas_Followup() {
    this.Cas_Followup_.Student_Task_Id = 0;
    this.Cas_Followup_.Remark = "";
    this.Cas_Followup_.Task_Details = "";
    this.Cas_Followup_.Task_Group_Id = 0;

    this.Cas_Followup_.Followup_Date = new Date();
    this.Cas_Followup_.Followup_Date = this.New_Date(
      this.Cas_Followup_.Followup_Date
    );

    if (this.Task_Status_Data != null && this.Task_Status_Data != undefined)
      this.Task_Status_ = this.Task_Status_Data[0];

    if (
      this.Task_Item_Data_search != null &&
      this.Task_Item_Data_search != undefined
    )
      this.Task_Item_search_Tasknew_ = this.Task_Item_Data_search[0];

    // this.FollowUp_Department_TN = null;
    // this.Followup_Users_tN = null;
    this.Followup_Users_tempN.User_Details_Id = Number(this.Login_User);
    this.Followup_Users_tempN.User_Details_Name = this.Login_User_Name;
    this.Followup_Users_Task_ = this.Followup_Users_tempN;

    this.FollowUp_Department_TempN.Department_Id = Number(
      this.Login_Department
    );
    this.FollowUp_Department_TempN.Department_Name = this.Login_Department_Name;
    this.FollowUp_Department_Task_ = this.FollowUp_Department_TempN;
  }

  Close_TasknewCas_Followup() {
    this.Cas_FollowupTasknew_View = false;
    this.Tasknew_View = true;

    this.Clr_Tasknewcas_Followup();
  }

  Close_Cas_Followup() {
    this.Cas_Followup_View = false;
    this.Cas_Followup_View = false;
    this.Visa_View = true;
    this.Clr_cas_Followup();
  }

  Close_previsadetails() {
    this.Pre_Visa_View = true;
    this.Cas_FollowupPrevisa_View = false;
    this.Clr_cas_Followup();
  }

  Close_preadmissiondetails() {
    this.Pre_Admission_View = true;
    this.Cas_FollowupPreadmission_View = false;
    this.Clr_cas_Followup();
  }

  Close_Tasknewdetails() {
    this.Tasknew_View = true;
    this.Cas_FollowupTasknew_View = false;
    this.Clr_Tasknewcas_Followup();
    // this.Clr_cas_Followup();
  }

  Transfer_With_Application(Transfer_Source) {
    var Transfer_Application_Status = false;
    var Application_Fees_Status = false;
    var Bph_Approved = false;
    for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
      if (this.ApplicationDetails_Data[j].checkbox == true)
        Transfer_Application_Status = true;
    }

    if (Transfer_Source == "admission") {
      for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
        if (this.ApplicationDetails_Data[j].checkbox == true)
          Transfer_Application_Status = true;
      }

      for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
        if (this.ApplicationDetails_Data[j].checkbox == true) {
          if (this.ApplicationDetails_Data[j].Application_Fees_Paid == "-1")
            Application_Fees_Status = true;
        }
      }

      for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
        if (this.ApplicationDetails_Data[j].checkbox == true) {
          if (this.ApplicationDetails_Data[j].Bph_Approved_Status != 2)
            Bph_Approved = true;
        }
      }
    }

    if (Transfer_Source == "bph") {
      var Bph_Approved_Status = false;

      for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
        if (this.ApplicationDetails_Data[j].checkbox == true)
          Transfer_Application_Status = true;
      }

      for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
        if (this.ApplicationDetails_Data[j].checkbox == true) {
          if (this.ApplicationDetails_Data[j].Student_Approved_Status == 0)
            Bph_Approved_Status = true;
        }
      }

      // for (var j = 0; j < this.ApplicationDetails_Data.length; j++) {
      // 	if (this.ApplicationDetails_Data[j].checkbox == true) {
      // 		if (this.ApplicationDetails_Data[j].Bph_Approved_Status != 2)
      // 			Bph_Approved = true;
      // 	}
      // }
    }

    if (Transfer_Application_Status == false) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Atleast One Application", Type: "3" },
      });
      return;
    } else if (Application_Fees_Status == true) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Please Pay Application Fees", Type: "3" },
      });
      return;
    } else if (Bph_Approved_Status == true) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Please Make Student Approve", Type: "3" },
      });
      return;
    } else if (Bph_Approved == true) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Please Make Auditor Approve", Type: "3" },
      });
      return;
    } else {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: {
          Message: "Do you want to Transfer ?",
          Type: true,
          Heading: "Confirm",
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result == "Yes") {
          this.Application_Transfer_.Application_List_Data = [];
          for (var i = 0; i < this.ApplicationDetails_Data.length; i++) {
            if (this.ApplicationDetails_Data[i].checkbox == true) {
              this.Application_Transfer_.Application_List_Data.push(
                Object.assign({}, this.ApplicationDetails_Data[i])
              );
            }
          }
          //document.getElementById("Save_Button").hidden=true;
          this.issLoading = true;
          this.Application_Transfer_.Student_Id = this.Profile_.Student_Id;
          this.Application_Transfer_.Transfer_Source = Transfer_Source;
          this.Application_Transfer_.Login_User = this.Login_User;
          this.Application_Transfer_.Login_Department = this.Login_Department;

          this.Student_Service_.Transfer_With_Application(
            this.Application_Transfer_
          ).subscribe(
            (Save_status) => {
              if (Number(Save_status[0].Student_Id_) > 0) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Transferred", Type: "false" },
                });
                document.getElementById("Save_Button").hidden = false;
                this.Clr_ApplicationDetails();
                this.Get_ApplicationDetails();
                this.Search_Lead_button();
                this.Close_Click();
                if (Number(this.Login_User) != Save_status[0].To_User_) {
                  var message = {
                    Student_Name: Save_status[0].Student_Name_,
                    From_User_Name: Save_status[0].From_User_Name_,
                    Notification_Type_Name:
                      Save_status[0].Notification_Type_Name_,
                    Entry_Type: Save_status[0].Entry_Type_,
                    To_User: Save_status[0].To_User_,
                    Notification_Id: Save_status[0].Notification_Id_,
                    Student_Id: Save_status[0].Student_Id_,
                  };
                  this.socket.emit("new-message", message);
                }
              } else if (Number(Save_status[0].Student_Id_) == -1) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "User Not Found", Type: "3" },
                });
                document.getElementById("Save_Button").hidden = false;
                this.Clr_ApplicationDetails();
                this.Get_ApplicationDetails();
                this.Search_Lead_button();
              } else {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Error Occured", Type: "2" },
                });
                document.getElementById("Save_Button").hidden = false;
              }
              this.issLoading = false;
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
      });
    }
  }
  // Make_A_Call(Phone_Number) {
  //   // debugger;
  //   // this.issLoading=true;
  //   this.Extension_Data_.Extension = this.Extension;
  //   this.Extension_Data_.Phone_No = Phone_Number.replace("+", "");
  //   // debugger;
  //   this.Student_Service_.Make_A_Call(this.Extension_Data_).subscribe(
  //     (Save_status) => {
  //       // debugger;
  //       Save_status = Save_status[0];
  //       console.log("Save_status[0]: ", Save_status[0]);
  //     }
  //   );
  // }

  Make_A_Call(Phone_Number, Agent_Id) {
    // debugger

    // this.issLoading=true;
    this.Extension_Data_.Extension = this.Extension;
    this.Extension_Data_.Agent_Id = Agent_Id;
    this.Extension_Data_.Phone_No = Phone_Number.replace("+", "");
    this.Extension_Data_.Login_User = this.Login_User;
    console.log("this.Extension_Data_", this.Extension_Data_);

    // debugger
    this.Student_Service_.Make_A_Call(this.Extension_Data_).subscribe(
      (Save_status) => {

        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: Save_status['data'].message || 'Call Initiated', Type: "false" },
        });
      },
      (error) => {
        console.log('error: ', error);
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: error.error.message || 'Error Occured', Type: "2" },
        });
      }
    );
  }

  get_student_checklist(Student_Id_, Checklist_Type) {
    //  this.Clr_ApplicationDetails();
    this.Student_Checklist_Data = [];
    this.issLoading = true;

    this.Student_Service_.get_student_checklist(
      Student_Id_,
      Checklist_Type
    ).subscribe(
      (Rows) => {
        if (Rows[0].length > 0) {
          this.Student_Checklist_Data = Rows[0];
          this.Student_Checklist_Country_Id = Rows[0][0].Country_Id;
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  get_student_Preadmission_checklist(Student_Id_, Checklist_Type) {
    //  this.Clr_ApplicationDetails();
    this.Student_Checklist_Preadmission_Data = [];
    this.issLoading = true;

    this.Student_Service_.get_student_Preadmission_checklist(
      Student_Id_,
      Checklist_Type
    ).subscribe(
      (Rows) => {
        if (Rows[0].length > 0) {
          this.Student_Checklist_Preadmission_Data = Rows[0];
          this.Student_Preadmission_Checklist_Country_Id =
            Rows[0][0].Country_Id;
        }
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  // Search_Department_Typeahead(event: any) {
  //
  // 	var Value = "";
  // 	if (event.target.value == "") Value = undefined;
  // 	else Value = event.target.value;

  // 		if (
  // 			this.Followup_Department_Data_T == undefined ||
  // 			this.Followup_Department_Data_T.length == 0
  // 		) {
  // 			this.issLoading = true;
  //
  // 			this.Student_Service_.Search_Department_Typeahead(
  // 				this.Profile_.Student_Id).subscribe(
  // 				(Rows) => {
  // 					if (Rows != null) {
  //
  // 						this.Followup_Department_Data_T = Rows[0];
  // 						this.issLoading = false;
  // 					}
  // 				},
  // 				(Rows) => {
  // 					this.issLoading = false;
  // 				}
  // 			);
  // 		}
  // 	//}
  // }

  Search_Department_Typeahead_Tasknew(event: any) {
    var Value = "";
    if (event.target.value == "") Value = undefined;
    else Value = event.target.value;

    // if (
    // 	this.Followup_Department_Data_TN == undefined ||
    // 	this.Followup_Department_Data_TN.length == 0
    // ) {
    this.issLoading = true;

    this.Student_Service_.Search_Department_Typeahead_Tasknew(
      this.Profile_.Student_Id
    ).subscribe(
      (Rows) => {
        if (Rows != null) {
          this.Followup_Department_Data_TN = Rows[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
    // }
    //}
  }

  Dept_Change() {
    this.Followup_Users_tN = null;

    this.Followup_Users_Data_tN = [];

    // this.FollowUp_Status_.Department_Status_Id=0;
    //  this.Search_Substatus_Typeahead(this.FollowUp_Status_.Department_Status_Id);
  }

  // Save_CAS_NewTask_Followup()
  // {
  // 	if (
  // 		this.Task_Item_search_Tasknew_ == undefined ||
  // 		this.Task_Item_search_Tasknew_ == null ||
  // 		this.Task_Item_search_Tasknew_.Task_Item_Id == undefined ||
  // 		this.Task_Item_search_Tasknew_.Task_Item_Id == 0
  // 		) {
  // 		const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 		panelClass: "Dialogbox-Class",
  // 		data: { Message: "Select Task", Type: "3" },
  // 		});
  // 		return;
  // 		}

  //
  // 	 this.Cas_Followup_.Student_Id=this.Profile_.Student_Id;
  // 	 this.Cas_Followup_.Department_Id=this.FollowUp_Department_TN.Department
  // 	 this.Cas_Followup_.Department_Name=this.FollowUp_Department_TN.Dept_Name
  // 	 this.Cas_Followup_.To_User=this.Followup_Users_tN.User_Id;
  // 	 this.Cas_Followup_.To_User_Name=this.Followup_Users_tN.UserName;
  // 	 this.Cas_Followup_.Task_Status=this.Task_Status_.Task_Status_Id;
  // 	 this.Cas_Followup_.Status_Name=this.Task_Status_.Status_Name;
  // 	 this.Cas_Followup_.Task_Item_Id=this.Task_Item_search_Tasknew_.Task_Item_Id;

  // 	 this.Cas_Followup_.By_User_Id=Number(this.Login_User);
  // 	 this.Cas_Followup_.By_User_Name=this.Login_User_Name;

  // 	 this.Cas_Followup_.Followup_Date = this.New_Date(new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD")));
  // 	 this.Cas_Followup_.Task_Group_Id=this.Task_Group_Id;

  // 	 if (this.Save_Call_Status == true) return;
  // 		else this.Save_Call_Status = true;
  // 	this.issLoading=true;
  //
  // 	this.Student_Service_.Save_CAS_NewTask_Followup(this.Cas_Followup_).subscribe(Save_work_experience => {

  //
  // 		Save_work_experience=Save_work_experience[0];
  // 	if(Number(Save_work_experience[0].Student_Task_Id_)>0)
  // 	{

  // 	if(this.Task_Group_Id==4)
  // 	{

  //
  // 	this.Save_Call_Status = false;
  // 	const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
  // 	this.Clr_Tasknewcas_Followup();
  // 	this.Close_TasknewCas_Followup();
  // 	this.Get_Tasknew_Task(this.Task_Group_Id);
  // }

  // 	}
  // 	else{
  // 	const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  // 	}
  // 	this.issLoading=false;
  // 	},
  // 	Rows => {
  // 	this.issLoading=false;
  // 	const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
  // 	});
  // }

  Save_CAS_NewTask_Followup() {
    if (
      this.FollowUp_Branch_Task_ == undefined ||
      this.FollowUp_Branch_Task_ == null ||
      this.FollowUp_Branch_Task_.Branch_Id == undefined ||
      this.FollowUp_Branch_Task_.Branch_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Branch", Type: "3" },
      });
      return;
    }

    if (
      this.FollowUp_Department_Task_ == undefined ||
      this.FollowUp_Department_Task_ == null ||
      this.FollowUp_Department_Task_.Department_Id == undefined ||
      this.FollowUp_Department_Task_.Department_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Department", Type: "3" },
      });
      return;
    }

    if (this.Tostaff_Typeahead_View == true) {
      if (
        this.Followup_Users_Task_ == undefined ||
        this.Followup_Users_Task_ == null ||
        this.Followup_Users_Task_.User_Details_Id == undefined ||
        this.Followup_Users_Task_.User_Details_Id == 0
      ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Select Staff", Type: "3" },
        });
        return;
      }
    }

    if (
      this.Task_Item_search_Tasknew_ == undefined ||
      this.Task_Item_search_Tasknew_ == null ||
      this.Task_Item_search_Tasknew_.Task_Item_Id == undefined ||
      this.Task_Item_search_Tasknew_.Task_Item_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Task", Type: "3" },
      });
      return;
    }
    if (
      this.Cas_Followup_.Task_Details == undefined ||
      this.Cas_Followup_.Task_Details == null ||
      this.Cas_Followup_.Task_Details == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Task Details", Type: "3" },
      });
      return;
    }
    if (
      this.Task_Status_ == undefined ||
      this.Task_Status_ == null ||
      this.Task_Status_.Task_Status_Id == undefined ||
      this.Task_Status_.Task_Status_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Task Status", Type: "3" },
      });
      return;
    }

    if (
      this.Cas_Followup_.Followup_Date == undefined ||
      this.Cas_Followup_.Followup_Date == null
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose Followup Date", Type: "3" },
      });
      return;
    }

    this.Cas_Followup_.Student_Id = this.Profile_.Student_Id;
    this.Cas_Followup_.Department_Id =
      this.FollowUp_Department_Task_.Department_Id;
    this.Cas_Followup_.Department_Name =
      this.FollowUp_Department_Task_.Department_Name;
    if (this.Tostaff_Typeahead_View == true) {
      this.Cas_Followup_.To_User = this.Followup_Users_Task_.User_Details_Id;
      this.Cas_Followup_.To_User_Name =
        this.Followup_Users_Task_.User_Details_Name;
    } else {
      this.Cas_Followup_.To_User = 0;
      this.Cas_Followup_.To_User_Name = "";
    }

    this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
    this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
    this.Cas_Followup_.Task_Item_Id =
      this.Task_Item_search_Tasknew_.Task_Item_Id;

    this.Cas_Followup_.By_User_Id = Number(this.Login_User);
    this.Cas_Followup_.By_User_Name = this.Login_User_Name;

    this.Cas_Followup_.Branch_Id = this.FollowUp_Branch_Task_.Branch_Id;
    this.Cas_Followup_.Branch_Name = this.FollowUp_Branch_Task_.Branch_Name;

    this.Cas_Followup_.Followup_Date = this.New_Date(
      new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
    );
    this.Cas_Followup_.Task_Group_Id = this.Task_Group_Id;

    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;

    this.Student_Service_.Save_CAS_NewTask_Followup(
      this.Cas_Followup_
    ).subscribe(
      (Save_work_experience) => {
        Save_work_experience = Save_work_experience[0];
        if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
          // if(this.Task_Group_Id==4)
          // {

          this.Save_Call_Status = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });
          // this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
          this.Clr_Tasknewcas_Followup();
          this.Close_TasknewCas_Followup();
          this.Get_Tasknew_Task(this.Task_Group_Id);

          if (Number(Save_work_experience[0].New_Task_) == 0) {
            var notification_type_ = "Task";
            var message = {
              To_User: Save_work_experience[0].To_User_,
              Task_Count: Save_work_experience[0].Task_Count_,
              Student_Name: Save_work_experience[0].Student_Name_,
              From_User_Name: Save_work_experience[0].From_User_Name_,
              Entry_Type: Save_work_experience[0].Entry_Type_,
              Notification_Type_Name: notification_type_,
            };
            this.socket.emit("new-message", message);
          }

          //  }
        } else if (Number(Save_work_experience[0].To_User_) == -1) {
          this.Save_Call_Status = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "No User Found", Type: "3" },
          });

          //  }
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

  Load_Automatic_Departments() {
    this.issLoading = true;
    this.Student_Service_.Load_Automatic_Departments().subscribe(
      (Rows) => {
        if (Rows != null) {
          // debugger;
          this.Automatic_Department_Data = Rows[0];
          console.log("Rows[0]: ", Rows[0]);
          this.Enable_Call = Rows[1][0].Settings_Value;
          console.log("this.Enable_Call: ", this.Enable_Call);
          if (this.Enable_Call == 1) this.Enable_Call_Button = true;
          else this.Enable_Call_Button = false;

          this.Documents_Data = Rows[2];
          this.Documents_Temp.Document_Id = 0;
          this.Documents_Temp.Document_Name = "Select";
          this.Documents_Data.unshift(this.Documents_Temp);
          this.Documents_ = this.Documents_Data[0];
          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }
  File_Change_std_Doc(event: Event) {
    this.If_file_changed = true;
    const file = (event.target as HTMLInputElement).files;
    this.ImageFile_Doc = file;
    this.Image_Photo = this.ImageFile_Doc[0].name;
  }
  // upload() {

  // 	if(this.If_file_changed){
  // 		const file = this.ImageFile_Doc.item(0);
  // 		this.Files_Upload_Service_.uploadFile(file);
  // 	}
  // 	}

  // Helper method for handling file upload from FileList to S3
  upload(doc: FileList | null, Student_Id: number): Promise<string | void> {
    return new Promise<string | void>((resolve, reject) => {
      if (this.If_file_changed && doc) {
        const file = doc.item(0);
        if (file) {
          this.Files_Upload_Service_.uploadFile(file, Student_Id)
            .then((key) => {
              resolve(key);
            })
            .catch((error) => reject(error));
        } else {
          reject(new Error("No file found"));
        }
      } else {
        resolve();
      }
    });
  }
  Save_Student_Document() {
    //this.issLoading=true;

    if (this.Documents_ == undefined || this.Documents_ == null) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Document", Type: "3" },
      });
      return;
    }
    if (
      this.Documents_.Document_Id == undefined ||
      this.Documents_.Document_Id == null ||
      this.Documents_.Document_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Document", Type: "3" },
      });
      return;
    }

    if (
      this.Image_Photo == null ||
      this.Image_Photo == undefined ||
      this.Image_Photo == ""
    ) {
      this.Image_Photo = "";
      this.ImageFile_Doc = [];

      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Choose a File", Type: "3" },
      });
      return;
    }
    // if (
    // 	this.Student_Documents_.Description == null ||
    // 	this.Student_Documents_.Description == undefined ||
    // 	this.Student_Documents_.Description == ""
    // ) {
    // 	const dialogRef = this.dialogBox.open(DialogBox_Component, {
    // 		panelClass: "Dialogbox-Class",
    // 		data: { Message: "Enter Document Description", Type: "3" },
    // 	});
    // 	return;
    // }
    this.Student_Documents_.Student_Id = this.Student_Id_Edit;
    this.Student_Documents_.File_Name = this.Image_Photo;
    this.Student_Documents_.Document_Id = this.Documents_.Document_Id;
    this.Student_Documents_.Document_Name = this.Documents_.Document_Name;
    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;
    // this.upload()
    // Use the Promise-based upload function
    this.upload(this.ImageFile_Doc, this.Student_Id_Edit)
      .then((key) => {
        // If a key was returned, update the file name
        if (typeof key === "string") {
          this.Student_Documents_.File_Name = key;
        } // Now save the document details
        return this.Files_Upload_Service_.Save_Student_Document(
          this.Student_Documents_,
          this.ImageFile_Doc,
          this.Document_File_Array
        ).toPromise();
      })
      .then(
        (Save_status) => {
          // debugger;
          // this.Files_Upload_Service_.Save_Student_Document(
          // 	this.Student_Documents_,
          // 	this.ImageFile_Doc,
          // 	this.Document_File_Array
          // ).subscribe(
          // 	(Save_status) => {
          //Save_status = Save_status[0];
          // debugger;

          if (Number(Save_status[0][0].Student_Id_) > 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Saved", Type: "false" },
            });
            this.Save_Call_Status = false;
            this.Get_Student_Document(this.Student_Id_Edit);
            this.Clr_Document();
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
  Edit_Documents(Student_Documents_temp: Student_Document, index) {
    this.Student_Documents_ = Object.assign({}, Student_Documents_temp);
    this.Image_Photo = this.Student_Documents_.File_Name;
    for (var i = 0; i < this.Documents_Data.length; i++) {
      if (
        this.Student_Documents_.Document_Id ==
        this.Documents_Data[i].Document_Id
      )
        this.Documents_ = this.Documents_Data[i];
    }
    this.Get_Student_Document(this.Student_Documents_.Student_Id);
  }

  Delete_Student_Document(Student_Document_Id_Temp_, index) {
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

        if (Student_Document_Id_Temp_ > 0) {
          this.Files_Upload_Service_.Delete_Student_Document(
            Student_Document_Id_Temp_
          ).subscribe(
            (Delete_status) => {
              if (Delete_status[0][0].Student_Document_Id_ > 0) {
                this.Student_Documents_Data.splice(index, 1);
                //this.Document_File_Array.splice(index, 1);
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                  panelClass: "Dialogbox-Class",
                  data: { Message: "Deleted", Type: "false" },
                });
              } else {
                this.issLoading = false;
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
                data: { Message: "Error Occured", Type: "2" },
              });
            }
          );
        } else {
          this.Document_Array.splice(index, 1);
          this.Document_File_Array.splice(index, 1);
          this.issLoading = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Deleted", Type: "false" },
          });
        }
      }
    });
  }

  Get_FollowUp_History_Withdate() {
    this.Transfer_view = false;
    this.Followphistoryview = true;
    this.Followupdetailsview = false;
    this.moredetailsbutton = true;
    // this.profile_View=false;
    //  this.Student_Id=this.Student_Data[this.Lead_EditIndex].Student_Id;
    let top = document.getElementById("Bottomdiv");
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
    if (this.Show_Followup_History == true) {
      this.Show_Followup_History = false;
      this.issLoading = true;

      this.Student_Service_.Get_FollowUp_History_Withdate(
        this.Student_Id
      ).subscribe(
        (Rows) => {
          this.issLoading = false;
          if (Rows.returnvalue.FollowUp.length > 0)
            this.Followp_History_Data_Details = Rows.returnvalue.FollowUp;
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

  // 	Transfer_Cofirmation_Register(Transfer_Source) {

  // 		this.Transfer_.Student_Id=this.Profile_.Student_Id;
  // 		this.Transfer_.transfer_source="undefined";
  // 		this.Transfer_.Login_User=Number(this.Login_User);
  // 		this.Transfer_.Transfer_department_Id=this.Transfer_department_Id;
  // 		this.Transfer_.Transfer_Remark="";
  // 		this.Transfer_.Transfer_Status_Id=this.Transfer_departmentstatus_Id;
  // 		this.Transfer_.Transfer_Status_Name=this.Transfer_departmentstatusname;
  // 		this.Transfer_.Substatus_Id=0;
  // 		this.Transfer_.Substatus_Name="undefined";
  // 		this.Transfer_.Application_Id_Ref=0;
  // 		this.Transfer_.Followup_Branch_Id=this.FollowUp_.Branch;
  // 		this.Transfer_.Followup_Branch_Name=this.FollowUp_.Branch_Name;
  // 		this.Transfer_.Followup_Department_Id=this.FollowUp_.Department;
  // 		this.Transfer_.Followup_Department_Name=this.FollowUp_.Department_Name;
  // 		this.Transfer_.Followup_Status_Id=this.FollowUp_.Status_Id;
  // 		this.Transfer_.Followup_Status_Name=this.FollowUp_.Department_Status_Name;
  // 		this.Transfer_.Followup_To_User_Id=this.FollowUp_.To_User_Id;
  // 		this.Transfer_.Followup_To_User_Name=this.FollowUp_.To_User_Name;
  // 		this.Transfer_.Next_FollowUp_Date = this.New_Date(
  // 			new Date(moment(this.FollowUp_.Next_FollowUp_Date).format("YYYY-MM-DD"))
  // 		);

  // 		this.issLoading = true;
  //
  // 		this.Student_Service_.Transfer_Cofirmation(
  // 			this.Transfer_
  // 		).subscribe(
  // 			(Save_status) => {
  // 				if (Save_status[0][0].Student_Id_ > 0) {

  // 					if (Number(this.Login_User) != Save_status[0][0].User_Id_) {
  // 						var message = {
  // 							Student_Name: Save_status[0][0].Student_Name_,
  // 							From_User_Name: Save_status[0][0].From_User_Name_,
  // 							Notification_Type_Name: Save_status[0][0].Notification_Type_Name_,
  // 							Entry_Type: Save_status[0][0].Entry_Type_,
  // 							To_User: Save_status[0][0].User_Id_,
  // 							Notification_Id: Save_status[0][0].Notification_Id_,
  // 							Student_Id: Save_status[0][0].Student_Id_,
  // 						};
  // 						this.socket.emit("new-message", message);
  // 					}
  // 				} else if (Save_status[0][0].Student_Id_ == -1) {
  // 					this.Total_Rows = this.Total_Rows - this.Student_Data.length;

  // 				} else {
  // 					this.issLoading = false;
  // 					const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 						panelClass: "Dialogbox-Class",
  // 						data: { Message: "Error Occured", Type: "2" },
  // 					});
  // 				}
  // 				this.issLoading = false;
  // 			},
  // 			(Rows) => {
  // 				this.issLoading = false;
  // 				const dialogRef = this.dialogBox.open(DialogBox_Component, {
  // 					panelClass: "Dialogbox-Class",
  // 					data: { Message: "Error Occured", Type: "2" },
  // 				});
  // 			}
  // 		);

  // 	}

  Download_Documents(Photo) {
    var bs = environment.FilePath;
    var s = bs + Photo;
    window.open(s, "_blank");
  }
  sanitizeUrl(url: string): SafeResourceUrl {

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  View_Documents(Photo: string, Index: number, Document_Type_Id: number) {
    this.selectedPdfPreview = null;
    const basePath = environment.FilePath;

    // Manually encode problematic characters
    const encodedPhoto = Photo.replace(/[:\s+()]/g, (match) => {
      switch (match) {
        case ':':
          return '%3A';
        case ' ':
          return '%20';
        case '+':
          return '%2B';

        default:
          return match;
      }
    });

    // Combine the base path with the modified photo path
    const s = basePath + encodedPhoto;

    this.pdfload = false;
    this.preview_div = true;

    // Sanitize the URL for safe use in Angular
    this.selectedPdfPreview = this.sanitizeUrl(s);

    console.log('this.selectedPdfPreview: ', this.selectedPdfPreview);
    this.selectedPdfIndex = Index;
    this.selectedDocumentTypeId = Document_Type_Id;
    this.pdfload = true;
  }

  closePdfPreview() {
    this.preview_div = false;
  }
  Save_Cas_Followup() {
    if (
      this.Task_Status_ == undefined ||
      this.Task_Status_ == null ||
      this.Task_Status_.Task_Status_Id == undefined ||
      this.Task_Status_.Task_Status_Id == 0
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Select Status", Type: "3" },
      });
      return;
    }
    // if (
    //     this.Task_Item_search_ == undefined ||
    //     this.Task_Item_search_ == null ||
    //     this.Task_Item_search_.Task_Item_Id == undefined ||
    //     this.Task_Item_search_.Task_Item_Id == 0
    //     ) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
    //     panelClass: "Dialogbox-Class",
    //     data: { Message: "Select Task", Type: "3" },
    //     });
    //     return;
    //     }
    if (
      this.Cas_Followup_.Remark == undefined ||
      this.Cas_Followup_.Remark == null ||
      this.Cas_Followup_.Remark == ""
    ) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "Enter Remark", Type: "3" },
      });
      return;
    }
    this.Cas_Followup_.Student_Id = this.cas_task_student_id;
    this.Cas_Followup_.Task_Status = this.Task_Status_.Task_Status_Id;
    this.Cas_Followup_.Status_Name = this.Task_Status_.Status_Name;
    this.Cas_Followup_.To_User = Number(this.Login_User);
    this.Cas_Followup_.To_User_Name = this.Login_User_Name;
    this.Cas_Followup_.Student_Task_Id = this.cas_task_id;
    this.Cas_Followup_.Task_Item_Id = this.cas_task_item_id;
    this.Cas_Followup_.Task_Group_Id = this.cas_task_group_id;
    this.Cas_Followup_.Followup_Date = this.New_Date(
      new Date(moment(this.Cas_Followup_.Followup_Date).format("YYYY-MM-DD"))
    );
    if (this.Save_Call_Status == true) return;
    else this.Save_Call_Status = true;
    this.issLoading = true;
    this.Student_Service_.Save_Cas_Followup(this.Cas_Followup_).subscribe(
      (Save_work_experience) => {
        this.Count_Task_ = 0;
        Save_work_experience = Save_work_experience[0];
        if (Number(Save_work_experience[0].Student_Task_Id_) > 0) {
          this.Save_Call_Status = false;
          const dialogRef = this.dialogBox.open(DialogBox_Component, {
            panelClass: "Dialogbox-Class",
            data: { Message: "Saved", Type: "false" },
          });

          this.Count_Task_ = Number(Save_work_experience[0].Task_Count_);
          // this.Get_WorkexperienceDetails(Save_work_experience[0].Student_Id_);
          this.Clr_cas_Followup();
          this.Close_Task_Followup();
          this.Get_Tasknew_Task(4);
          // var notification_type_ = "Task";
          // var message = {
          // 	To_User: Save_work_experience[0].To_User_,
          // 	Task_Count: Save_work_experience[0].Task_Count_,
          // 	Notification_Type_Name: notification_type_,
          // };
          // this.socket.emit("new-message", message);
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

  Close_Task_Followup() {
    this.Cas_Followup_View = false;
    this.Tasknew_View = true;
    this.Historydiv = false;
    this.Cas_Followup_View = false;
    this.Cas_FollowupTasknew_View = false;
    this.Visa_View = false;
    // this.Cas_FollowupPrevisa_View = false
    this.Close_TasknewCas_Followup();
  }
  Task_History_Click(Student_Task_Id_, Student_Name, To_User_Name) {
    this.student_name = Student_Name;
    this.to_user_name = To_User_Name;
    this.Student_Task_Id = Student_Task_Id_;
    this.Historydiv = true;
    this.Tasknew_View = false;
    this.Cas_Followup_View = false;
    this.Get_Task_History(this.Student_Task_Id);
  }
  Close_History() {
    this.Historydiv = false;
    this.Tasknew_View = true;
    this.Cas_Followup_View = false;
    this.Cas_FollowupTasknew_View = false;
  }
  Get_Task_History(Student_Task_Id) {
    //  this.Clr_ApplicationDetails();
    this.issLoading = true;

    this.Student_Service_.Get_Task_History(Student_Task_Id).subscribe(
      (Rows) => {
        this.Student_Task_Data = Rows[0];
        this.issLoading = false;
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

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

  Load_StatusType() {
    this.issLoading = true;
    this.Department_Status_Service_.Load_StatusType().subscribe(
      (Rows) => {
        if (Rows != null) {
          if (Rows[1][0].Round_Robin == 1) {
            this.Branch_Typeahead_View = false;
            this.Department_Typeahead_View = false;
            this.Tostaff_Typeahead_View = false;
          } else {
            this.Branch_Typeahead_View = true;
            this.Department_Typeahead_View = true;
            this.Tostaff_Typeahead_View = true;
          }

          this.issLoading = false;
        }
      },
      (Rows) => {
        this.issLoading = false;
      }
    );
  }

  numberToEnglish(n, custom_join_character) {
    //// debugger
    var string = n.toString(),
      units,
      tens,
      scales,
      start,
      end,
      chunks,
      chunksLen,
      chunk,
      ints,
      i,
      word,
      words;

    var and = custom_join_character || "and";

    /* Is number zero? */
    if (parseInt(string) === 0) {
      return "zero";
    }

    /* Array of units as words */
    units = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];

    /* Array of tens as words */
    tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    /* Array of scales as words */
    scales = ["", "", "Thousand", "Lakh", "Billion"];

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
      end = start;
      chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
      return "";
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {
      chunk = parseInt(chunks[i]);

      if (chunk) {
        /* Split chunk into array of individual integers */
        ints = chunks[i].split("").reverse().map(parseFloat);

        /* If tens integer is 1, i.e. 10, then add 10 to units integer */
        if (ints[1] === 1) {
          ints[0] += 10;
        }

        /* Add scale word if chunk is not zero and array item exists */
        if ((word = scales[i])) {
          words.push(word);
        }

        /* Add unit word if array item exists */
        if ((word = units[ints[0]])) {
          words.push(word);
        }

        /* Add tens word if array item exists */
        if ((word = tens[ints[1]])) {
          words.push(word);
        }

        /* Add 'and' string after units or tens integer if: */
        if (ints[0] || ints[1]) {
          /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
          if (ints[2] || (!i && chunksLen)) {
            words.push(and);
          }
        }

        /* Add hundreds word if array item exists */
        if ((word = units[ints[2]])) {
          words.push(word + " hundred");
        }
      }
    }

    return words.reverse().join(" ");
  }

  //   convertNumberToEnglish(value: number): string {
  // 	if (value === 0) {
  // 	  return 'Zero';
  // 	}

  // 	const groups = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion'];

  // 	const numberToWord = {
  // 	  0: 'Zero',
  // 	  1: 'One',
  // 	  2: 'Two',
  // 	  3: 'Three',
  // 	  4: 'Four',
  // 	  5: 'Five',
  // 	  6: 'Six',
  // 	  7: 'Seven',
  // 	  8: 'Eight',
  // 	  9: 'Nine',
  // 	  10: 'Ten',
  // 	  11: 'Eleven',
  // 	  12: 'Twelve',
  // 	  13: 'Thirteen',
  // 	  14: 'Fourteen',
  // 	  15: 'Fifteen',
  // 	  16: 'Sixteen',
  // 	  17: 'Seventeen',
  // 	  18: 'Eighteen',
  // 	  19: 'Nineteen',
  // 	  20: 'Twenty',
  // 	  30: 'Thirty',
  // 	  40: 'Forty',
  // 	  50: 'Fifty',
  // 	  60: 'Sixty',
  // 	  70: 'Seventy',
  // 	  80: 'Eighty',
  // 	  90: 'Ninety',

  // 	};

  // 	const convertGroup = (num: number, groupIndex: number): string => {
  // 	  if (num === 0) {
  // 		return '';
  // 	  }

  // 	  if (num < 20) {
  // 		return ` ${numberToWord[num]}`;
  // 	  }

  // 	  const tens = Math.floor(num / 10);
  // 	  const units = num % 10;

  // 	  let result = ` ${numberToWord[tens * 10]}`;
  // 	  if (units > 0) {
  // 		result += `-${numberToWord[units]}`;
  // 	  }

  // 	  return result;
  // 	};

  // 	let result = '';
  // 	let groupIndex = 0;

  // 	while (value > 0) {
  // 	  const groupValue = value % 1000;
  // 	  if (groupValue > 0) {
  // 		result = `${convertGroup(groupValue, groupIndex)} ${groups[groupIndex]} ${result}`;
  // 	  }
  // 	  value = Math.floor(value / 1000);
  // 	  groupIndex++;
  // 	}

  // 	return result.trim();
  //   }

  print_receipt(Receipt_Voucher_e: Fees_Receipt, index) {
    // debugger;

    // this.Get_Companydetails();
    this.Get_Branchdetails();
    this.Fees_Receipt_ = Receipt_Voucher_e;
    this.print_voucher_no = Receipt_Voucher_e.Voucher_No;
    this.print_Paid_date = this.Fees_Receipt_.Entry_date;
    // this.print_account_name = this.Fees_Receipt_.FromAccount_Name;
    this.print_amount = this.Fees_Receipt_.Amount;
    this.print_Description = this.Fees_Receipt_.Description;

    this.To_Account_Id = this.Fees_Receipt_.To_Account_Id;

    // this.Branch_Name = 'this.Profile_.Branch_Id';
    // this.Branch_Id = this.Profile_.Branch_Id;
    // this.University_Name = 'this.Fees_Receipt_.uni';
    // this.Company_Name = this.Fees_Receipt_.Company_Name;
    // this.Address1 = this.Fees_Receipt_.Address1;
    // this.Address2 = this.Fees_Receipt_.Address2;
    // this.Address3 = this.Fees_Receipt_.Address3;
    // this.PinCode = this.Fees_Receipt_.PinCode;
    // this.GSTNo = this.Fees_Receipt_.GSTNo;

    this.print_paid = this.numberToEnglish(this.print_amount, "");

    setTimeout(function () {
      // this.print_Mark()
      let popupWinindow;

      let innerContents = document.getElementById("Print_Div").innerHTML;

      popupWinindow = window.open(
        "",
        "_blank",
        "width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no"
      );
      popupWinindow.document.open();
      popupWinindow.document.write(
        '<html><head><style>@page { size: auto; margin: 0mm; } </style><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' +
        innerContents +
        "</html>"
      );
      popupWinindow.document.close();
    }, 1000);
  }

  Get_Branchdetails() {
    // debugger;
    this.issLoading = true;
    this.Student_Service_.Get_Branchdetails(this.Branch_Id).subscribe(
      (Rows) => {
        // debugger;
        this.issLoading = false;

        // debugger;
        this.Branchprint_Data = Rows[0];
        this.print_Branch_Name = Rows[0][0].Branch_Name;
        this.print_Branch_Address1 = Rows[0][0].Address;
        // this.print_Branch_Address2 = Rows[0][0].Address2;
        // this.print_Branch_Address3 = Rows[0][0].Address3;
        // this.print_Branch_Address4 = Rows[0][0].Address4;
        this.print_Branch_pincode = Rows[0][0].Pincode;
        this.print_Branch_Phone = Rows[0][0].Phone_Number;
        // this.print_Branch_Mobile = Rows[0][0].Mobile;
        this.print_Branch_Email = Rows[0][0].Email;
        // this.print_Branch_Website = Rows[0][0].Website;
      },
      (Rows) => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: false },
        });
      }
    );
  }

  Close_Click_Comment() {
    this.Comment_Data = null;
    this.messageText = "";
    // this.Comments_View=false
  }

  SendMailTemplate(Application_details_Id_) {
    // debugger;
    const currentStudentId = this.Profile_.Student_Id || this.Student_Id_Edit;
    const dialogRef = this.dialogBox.open(EmailTemplateDialogComponent, {
      width: "600px",
      data: {
        studentId: this.Student_Id_Edit,
        studentEmail: this.Student_.Email,
        Application_details_Id: Application_details_Id_,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.issLoading = true;
        const isToStudent = !result.selectedUserId || result.selectedUserId === 0;
        // debugger
        const payload = {

          Student_Id: this.Student_Id_Edit,
          Application_details_Id1: Application_details_Id_,
          Template_Id: result.templateId,
          Template_Body: result.templateBody,
          subject: result.templateSubject,
          Login_User: Number(this.Login_User),
          // Add user information for sending to users
          Send_To_User: !isToStudent,
          User_Id: result.selectedUserId || null
        }; console.log('payload: ', payload);
        this.Student_Service_.Send_Email_Template(payload).subscribe(
          (response) => {
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Email Sent Successfully", Type: "false" },
            });
          },
          (error) => {
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
              panelClass: "Dialogbox-Class",
              data: { Message: "Error Sending Email", Type: "2" },
            });
          }
        );
      }
    });
  }

  Search_University_Typeahead_Country(event: any) {
    // debugger;

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
      // debugger;
      this.University_Service_.Search_University_Typeahead_Country(
        Value,
        this.Application_Country_.Country_Id
      ).subscribe(
        (Rows) => {
          // debugger;
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

  loadEmailTemplates() {
    this.isLoading = true;
    this.emailTemplateService.Get_All_Email_Templates("").subscribe(
      (response) => {
        this.emailTemplates = response[0] || [];
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        // Handle error
      }
    );
  }

  // onCancel(): void {
  //     this.dialogRef.close();
  // }

  onTemplateChange(event: any) {
    const templateId = parseInt(event.target.value);
    this.selectedTemplateId = templateId;
    this.selectedTemplate = this.emailTemplates.find(
      (t) => t.id === templateId
    );
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  onContentChange(content: string): void {
    this.selectedTemplate.body = content;
  }

  // templateFields = [
  //     { label: 'Name', value: '{{name}}' },
  //     { label: 'Phone', value: '{{phone}}' },
  //     { label: 'Email', value: '{{email}}' },
  //     { label: 'Course', value: '{{course}}' },
  //   ];
  //   // emailContent = '';
  //   editorInstance: Quill | null = null;
  //   quillModules = {
  //     toolbar: [
  //       ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //       ['blockquote', 'code-block'],

  //       [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  //       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //       [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  //       [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  //       [{ 'direction': 'rtl' }],                         // text direction

  //       [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  //       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  //       [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //       [{ 'font': [] }],
  //       [{ 'align': [] }],

  //       ['clean'],                                         // remove formatting button

  //       ['link', 'image', 'video']                         // link and image, video
  //     ]
  //   };

  //   onEditorCreated(editor: Quill) {
  //     this.editorInstance = editor;
  //   }

  onFieldSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    if (value) {
      if (
        this.selectedTemplate.body == undefined ||
        this.selectedTemplate.body == null
      ) {
        this.selectedTemplate.body = value;
      } else {
        this.selectedTemplate.body = this.selectedTemplate.body + value;
      }
    }
  }
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.fileSizeError = ""; // Clear any previous error message

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check file size
      if (file.size > this.maxFileSize) {
        this.fileSizeError = `File "${file.name}" exceeds the maximum size of 5MB.`;
        continue;
      }

      this.attachments.push(file);
    }
  }

  removeFile(index: number) {
    this.attachments.splice(index, 1);
  }

  // onSend(): void {
  //   if (!this.selectedTemplateId) {
  //     this.showError = true;
  //     return;
  //   }

  //   // this.dialogRef.close({
  //   //     templateId: this.selectedTemplateId,
  //   //     templateBody: this.selectedTemplate.body,
  //   //     templateSubject: this.selectedTemplate.subject,
  //   //     attachments: this.attachments
  //   // });
  // }

  logStudentId(studentId: string | null): void {
    console.log("Logging Student ID:", studentId);
  }
  // onSend() {
  //   // debugger;
  //     if (!this.selectedTemplateId) {
  //       this.showError = true;
  //       return;
  //     }

  //     this.isSending = true;
  //     this.sendSuccess = false;
  //     this.sendError = '';
  //     // debugger
  //     // Create payload object with proper syntax
  //    const payload = {
  //   studentId: this.Student_Id,
  //   templateId: this.selectedTemplateId,
  //   customBody: this.isEditing ? this.selectedTemplate.body : null
  // };
  //       console.log('this.selectedTemplate: ', this.selectedTemplate);
  //       console.log('this.isEditing: ', this.isEditing);
  //     // Only add customBody if we're in edit mode
  //     if (this.selectedTemplate) {

  //       payload['customBody'] = this.selectedTemplate.body;
  //       console.log('this.selectedTemplate.body: ', this.selectedTemplate.body);
  //     }
  //     // debugger
  //     console.log('Sending email with payload:', payload);

  //     // Use Student_Service_ instead of direct HTTP
  //     this.Student_Service_.send_email_to_student(payload).subscribe(
  //       (response: any) => {
  //         // debugger
  //         this.isSending = false;
  //         // this.sendSuccess = true;
  //         console.log('Email sent successfully:', response);

  //         // Show success dialog
  //     const dialogRef = this.dialogBox.open(DialogBox_Component, {
  //       panelClass: "Dialogbox-Class",
  //       data: { Message: "Email Sent Successfully", Type: "false" }
  //     });

  //     this.isLoading = false;
  //   },
  //   (error) => {
  //     this.isSending = false;
  //     this.sendError = error.error.error || 'Failed to send email';
  //     console.error('Error sending email:', error);
  //   }
  //     );
  //     this.selectedTemplateId = 0;
  //     this.selectedTemplate = this.emailTemplates.find(
  //       (t) => t.id === 0
  //     );
  //   }



  onSend() {
    // debugger;
    if (!this.selectedTemplateId) {
      this.showError = true;
      return;
    }

    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = '';
    // debugger;

    // Check if sending to student (User_Details_Id = 0) or to a user
    const isToStudent = this.User_Search_Email.User_Details_Id === 0;

    let payload: any;

    if (isToStudent) {
      // Send to student - use existing endpoint
      payload = {
        studentId: this.Student_Id,
        templateId: this.selectedTemplateId,
        customBody: this.isEditing ? this.selectedTemplate.body : null
      };

      console.log('Sending email to student with payload:', payload);
      // debugger
      // Use existing student email service
      this.Student_Service_.send_email_to_student(payload).subscribe(
        (response: any) => {
          // debugger
          this.handleEmailSuccess(response);
        },
        (error) => {
          this.handleEmailError(error);
        }
      );
    } else {
      // Send to user - you'll need a different endpoint
      payload = {
        userId: this.User_Search_Email.User_Details_Id,
        studentId: this.Student_Id, // Include student ID for context/data replacement
        templateId: this.selectedTemplateId,
        customBody: this.isEditing ? this.selectedTemplate.body : null
      };

      console.log('Sending email to user with payload:', payload);
      // debugger
      // You'll need to create this service method
      this.Student_Service_.send_email_to_user(payload).subscribe(
        (response: any) => {
          // debugger
          this.handleEmailSuccess(response);
        },
        (error) => {
          this.handleEmailError(error);
        }
      );
    }
  }

  // Helper methods to avoid code duplication
  handleEmailSuccess(response: any) {
    // debugger;
    this.isSending = false;
    console.log('Email sent successfully:', response);

    // Show success dialog
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: { Message: "Email Sent Successfully", Type: "false" }
    });

    this.isLoading = false;
    this.resetForm();
  }

  handleEmailError(error: any) {
    this.isSending = false;
    this.sendError = error.error.error || 'Failed to send email';
    console.error('Error sending email:', error);
  }

  resetForm() {
    this.selectedTemplateId = 0;
    this.selectedTemplate = this.emailTemplates.find(t => t.id === 0);
  }
  loadEmailTemplatesapplication() {
    this.isLoading = true;

    // this.http.get<any>('/api/email-templates').subscribe(
    //   (response) => {
    //     this.isLoading = false;
    //     if (response && response.templates) {
    //       this.emailTemplates = response.templates;
    //       console.log('Email templates loaded:', this.emailTemplates.length);
    //     }
    //   },
    //   (error) => {
    //     this.isLoading = false;
    //     console.error('Error loading email templates:', error);
    //   }
    // );
  }

  onTemplateChangeapplication(event: Event) {
    const templateId = (event.target as HTMLSelectElement).value;
    this.selectedTemplateId = parseInt(templateId, 10);
    this.showError = false;

    if (this.selectedTemplateId) {
      this.loadTemplateDetails(this.selectedTemplateId);
    } else {
      this.selectedTemplate = null;
    }
  }

  loadTemplateDetails(templateId: number) {
    // this.http.get<any>(`/api/email-template/${templateId}`).subscribe(
    //   (response) => {
    //     if (response && response.template) {
    //       this.selectedTemplate = response.template;
    //       console.log('Template details loaded:', this.selectedTemplate.name);
    //     }
    //   },
    //   (error) => {
    //     console.error('Error loading template details:', error);
    //     this.selectedTemplate = null;
    //   }
    // );
  }

  toggleEditapplication() {
    this.isEditing = !this.isEditing;
  }

  onContentChangeapplication(content: string) {
    if (this.selectedTemplate) {
      this.selectedTemplate.body = content;
    }
  }

  // File handling methods
  onFileSelectedapplication(event: any) {
    const files: FileList = event.target.files;
    this.fileSizeError = ""; // Clear any previous error message

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check file size
      if (file.size > this.maxFileSize) {
        this.fileSizeError = `File "${file.name}" exceeds the maximum size of 5MB.`;
        continue;
      }

      this.attachments.push(file);
    }
  }

  removeFileapplication(index: number) {
    this.attachments.splice(index, 1);
  }

  // Helper method to upload attachments
  uploadAttachments(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (!this.attachments || this.attachments.length === 0) {
        resolve([]);
        return;
      }

      // Create S3 bucket instance (if you're using AWS)
      // Note: You'll need to import AWS SDK or handle this differently
      const S3 = require('aws-sdk/clients/s3');
      const bucket = new S3({
        accessKeyId: "AKIAX37YDYI4JHREVXGV",
        secretAccessKey: "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",
        region: "us-east-2",
      });

      // Create a unique folder name (using timestamp)
      const folderName = `email_attachments/${Date.now()}`;

      // Upload each attachment
      const uploadPromises = this.attachments.map((attachment) => {
        return new Promise((resolve, reject) => {
          const params = {
            Bucket: "godspeedfiles",
            Key: `godspeed/${folderName}/${attachment.name.trim()}`,
            Body: attachment,
            ACL: "public-read",
            ContentType: attachment.type,
          };

          if (attachment.size > 5 * 1024 * 1024) {
            // Use putObject for files larger than 5 MB
            bucket.putObject(params, (err, data) => {
              if (err) {
                console.log("Error uploading attachment: ", err);
                reject(err);
              } else {
                const fileUrl = `https://${params.Bucket}.s3.${bucket.config.region}.amazonaws.com/${params.Key}`;
                resolve({ name: attachment.name, path: fileUrl });
              }
            });
          } else {
            // Use upload for smaller files
            bucket.upload(params, (err, data) => {
              if (err) {
                console.log("Error uploading attachment: ", err);
                reject(err);
              } else {
                resolve({ name: attachment.name, path: data.Location });
              }
            });
          }
        });
      });

      // Wait for all uploads to complete
      Promise.all(uploadPromises)
        .then(uploadedFiles => {
          console.log('All attachments uploaded:', uploadedFiles);
          resolve(uploadedFiles);
        })
        .catch(error => {
          console.error('Error uploading attachments:', error);
          reject(error);
        });
    });
  }

  onSendapplication() {
    if (!this.selectedTemplateId) {
      this.showError = true;
      return;
    }

    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = '';

    // First, handle any file uploads if there are attachments
    this.uploadAttachments().then(uploadedAttachments => {
      // After attachments are uploaded, send the email
      this.sendEmailWithAttachments(uploadedAttachments);
    }).catch(error => {
      this.isSending = false;
      this.sendError = 'Failed to upload attachments: ' + error.message;
      console.error('Error uploading attachments:', error);
    });
  }

  sendEmailWithAttachments(uploadedAttachments: any[]) {
    // Create payload object
    const payload = {
      // studentId: this.data.studentId, // Get from dialog data
      templateId: this.selectedTemplateId,
      customBody: this.isEditing ? this.selectedTemplate.body : null,
      attachments: uploadedAttachments
    };

    console.log('Sending email with payload:', payload);

    // Call the email API
    // this.http.post('/Email_Template/send_email_to_student', payload).subscribe(
    //   (response: any) => {
    //     this.isSending = false;
    //     this.sendSuccess = true;
    //     console.log('Email sent successfully:', response);

    //     // Close the dialog after a short delay
    //     setTimeout(() => {
    //       this.dialogRef.close({ success: true, response });
    //     }, 2000);
    //   },
    //   (error) => {
    //     this.isSending = false;
    //     this.sendError = error.error?.error || 'Failed to send email';
    //     console.error('Error sending email:', error);
    //   }
    // );
  }

  onCancel() {
    this.dialogRef.close({ cancelled: true });
  }



}

