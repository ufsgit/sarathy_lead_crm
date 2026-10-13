/***
 * Admin module
 * Declare all componets that is used in admin module
 */
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatChipsModule,
} from "@angular/material";
import { MatNativeDateModule } from "@angular/material";
import { SharedModule } from "../shared-module/shared-module";
import { AdminRoutes } from "./admin.routing";
import { AdminComponent } from "./admin.component";
import { HttpClientModule } from "@angular/common/http";
import { GoogleChartsModule } from "angular-google-charts";
import { User_DetailsComponent } from "./User_Details/User_Details.component";
import { CountryComponent } from "./Country/Country.component";
import { CourseComponent } from "./Course/Course.component";
import { Course_IntakeComponent } from "./Course_Intake/Course_Intake.component";
import { DocumentComponent } from "./Document/Document.component";

import { DurationComponent } from "./Duration/Duration.component";
import { IntakeComponent } from "./Intake/Intake.component";
import { InternshipComponent } from "./Internship/Internship.component";
import { Level_DetailComponent } from "./Level_Detail/Level_Detail.component";
import { StudentComponent } from "./Student/Student.component";
import { Student_DocumentComponent } from "./Student_Document/Student_Document.component";
import { Student_MessageComponent } from "./Student_Message/Student_Message.component";
import { Student_StatusComponent } from "./Student_Status/Student_Status.component";
import { Enquiry_SourceComponent } from "./Enquiry_Source/Enquiry_Source.component";
import { SubjectComponent } from "./Subject/Subject.component";
import { UniversityComponent } from "./University/University.component";
import { AgentComponent } from "./Agent/Agent.component";
import { Home_PageComponent } from "./Home_Page/Home_Page.component";
import { DashboardComponent } from "./Dashboard/Dashboard.component";
import { Course_ImportComponent } from "./Course_Import/Course_Import.component";
import { Account_GroupComponent } from "./Account_Group/Account_Group.component";
import { Client_AccountsComponent } from "./Client_Accounts/Client_Accounts.component";
import { DepartmentComponent } from "./Department/Department.component";
import { Department_StatusComponent } from "./Department_Status/Department_Status.component";
import { Student_ReportComponent } from "./Student_Report/Student_Report.component";
import { Work_reportComponent } from "./Work_report/Work_report.component";
import { Status_SummaryComponent } from "./Status_Summary/Status_Summary.component";
import { BranchComponent } from "./Branch/Branch.component";
import { RemarksComponent } from "./Remarks/Remarks.component";
import { TimeTrackComponent } from "./TimeTrack/TimeTrack.component";
import { Registration_ReportComponent } from "./Registration_Report/Registration_Report.component";
import { Efficiency_ReportComponent } from "./Efficiency_Report/Efficiency_Report.component";
import { Student_ImportComponent } from "./Student_Import/Student_Import.component";
import { Pending_FollowUpComponent } from "./Pending_FollowUp/Pending_FollowUp.component";
import { FeesComponent } from "./Fees/Fees.component";
import { Fees_Receipt_ReportComponent } from "./Fees_Receipt_Report/Fees_Receipt_Report.component";
import { Enquiry_Source_SummaryComponent } from "./Enquiry_Source_Summary/Enquiry_Source_Summary.component";
import { Counselor_Fees_Receipt_ReportComponent } from "./Counselor_Fees_Receipt_Report/Counselor_Fees_Receipt_Report.component";
import { Counselor_Registration_ReportComponent } from "./Counselor_Registration_Report/Counselor_Registration_Report.component";
//import { Student_Summary_ReportComponent } from './Counselor_Registration_Report/Counselor_Registration_Report.component'
import { Student_Summary_ReportComponent } from "./Student_Summary_Report/Student_Summary_Report.component";
//import { Enquiry_Source_ReportComponent } from './Enquiry_Source_Report/Enquiry_Source_Report.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { from } from "rxjs";
import { Student_SearchComponent } from "./Student_Search/Student_Search.component";
import { Work_SummaryComponent } from "./Work_Summary/Work_Summary.component";
import { Userwise_SummaryComponent } from "./Userwise_Summary/Userwise_Summary.component";
import { Branchwise_SummaryComponent } from "./Branchwise_Summary/Branchwise_Summary.component";
import { PageAComponent } from "./PageA/PageA.component";
import { PageCComponent } from "./PageC/PageC.component";
import { PageBComponent } from "./PageB/PageB.component";
import { Enquiry_Source_ReportComponent } from "./Enquiry_Source_Report/Enquiry_Source_Report.component";
import { Receipt_Summary_ReportComponent } from "./Receipt_Summary_Report/Receipt_Summary_Report.component";
import { Registration_SummaryComponent } from "./Registration_Summary/Registration_Summary.component";
import { Enquiry_ConversionComponent } from "./Enquiry_Conversion/Enquiry_Conversion.component";
import { Employee_SummaryComponent } from "./Employee_Summary/Employee_Summary.component";
import { User_RoleComponent } from "./User_Role/User_Role.component";
import { CompanyComponent } from "./Company/Company.component";
import { SettingsComponent } from "./Settings/Settings.component";
import { Documentation_ReportComponent } from "./Documentation_Report/Documentation_Report.component";
import { Work_HistoryComponent } from "./Work_History/Work_History.component";
import { Details_checkComponent } from "./Details_check/Details_check.component";
import { Registration_EnquirySourceComponent } from "./Registration_EnquirySource/Registration_EnquirySource.component";
import { Check_ListComponent } from "./Check_List/Check_List.component";
import { Agent_DetailsComponent } from "./Agent_Details/Agent_Details.component";
import { Application_ReportComponent } from "./Application_Report/Application_Report.component";
import { TaskComponent } from "./Task/Task.component";
import { NotificationComponent } from "./Notification/Notification.component";
import { Receipt_ConfirmationComponent } from "./Receipt_Confirmation/Receipt_Confirmation.component";
import { Refund_ConfirmationComponent } from "./Refund_Confirmation/Refund_Confirmation.component";
import { Refund_ApprovalComponent } from "./Refund_Approval/Refund_Approval.component";
import { Student_TaskComponent } from "./Student_Task/Student_Task.component";
import { Application_DashboardComponent } from "./Application_Dashboard/Application_Dashboard.component";
import { Passport_Expiry_ReportComponent } from "./Passport_Expiry_Report/Passport_Expiry_Report.component";
import { Application_StatusComponent } from "./Application_Status/Application_Status.component";
import { Task_ItemComponent } from "./Task_Item/Task_Item.component";
import { Bph_ReportComponent } from "./Bph_Report/Bph_Report.component";
import { Application_ListComponent } from "./Application_List/Application_List.component";
import { Application_SettingsComponent } from "./Application_Settings/Application_Settings.component";
import { DocumentNameComponent } from "./DocumentName/DocumentName.component";
import { AccountsComponent } from "./Accounts/Accounts.component";
import { Data_MigrationComponent } from "./Data_Migration/Data_Migration.component";
import { Fees_Pending_ReportComponent } from "./Fees_Pending_Report/Fees_Pending_Report.component";
import { Class_SummaryComponent } from "./Class_Summary/Class_Summary.component";
import { ClassComponent } from "./Class/Class.component";
import { Department_DataComponent } from "./Department_Data/Department_Data.component";
import { NotesComponent } from "./Notes/Notes.component";
import { Chat_WindowComponent } from "./Chat_Window/Chat_Window.component";
import { Student_Status_Wise_ReportComponent } from "./Student_Status_Wise_Report/Student_Status_Wise_Report.component";
import { Enquiry_Source_Summary_NewComponent } from "./Enquiry_Source_Summary_New/Enquiry_Source_Summary_New.component";
import { Student_Followup_ReportComponent } from "./Student_Followup_Report/Student_Followup_Report.component";
import { Application_DataComponent } from "./Application_Data/Application_Data.component";
import { Student_Report_countrywiseComponent } from "./Student_Report_countrywise/Student_Report_countrywise.component";
import { Student_Report_coursewiseComponent } from "./Student_Report_coursewise/Student_Report_coursewise.component";
import { Dashboard_AccountsComponent } from "./Dashboard_Accounts/Dashboard_Accounts.component";
import { Application_Status_Wise_ReportComponent } from "./Application_Status_Wise_Report/Application_Status_Wise_Report.component";
import { PaymentComponent } from "./Payment/Payment.component";
import { Not_EnrolledComponent } from "./Not_Enrolled/Not_Enrolled.component";
import { CommisssionComponent } from "./Commisssion/Commisssion.component";
import { commission_Summary_reportComponent } from "./commission_Summary_report/commission_Summary_report.component";
import { RichEditorComponent } from "app/components/rich-editor/rich-editor.component";
// import { Files_UploadComponent } from './Files_Upload/Files_Upload.component';
import { EditorModule } from "@tinymce/tinymce-angular";
import { EmailTemplateComponent } from "./email-template/email-template.component";
import { Change_StatusComponent } from "./Change_Status/Change_Status.component";
import { Qualification_TypeComponent } from "./Qualification_Type/Qualification_Type.component";
import { Dashboard_UserComponent } from "./Dashboard_User/Dashboard_User.component";
import { Document_TypeComponent } from "./Document_Type/Document_Type.component";
import { Application_Manager_DashboardComponent } from "./Application_Manager_Dashboard/Application_Manager_Dashboard.component";
import { Application_Report_histroyComponent } from "./Application_Report_histroy/Application_Report_histroy.component";
import { campaignComponent } from "./campaign/campaign.component";
import { Campaign_ReportComponent } from "./Campaign_Report/Campaign_Report.component";
import { Campaign_DashboardComponent } from "./Campaign_Dashboard/Campaign_Dashboard.component";
import { CallHistory_ReportComponent } from './CallHistory_Report/CallHistory_Report.component';
import { Telecaller_Registration_SummaryComponent } from "./Telecaller_Registration_Summary/Telecaller_Registration_Summary.component";
// import { QuillModule } from "ngx-quill";
import { CommonModule } from '@angular/common';
import { CallAether_ReportComponent } from "./CallAether_Report/CallAether_Report.component";
import { BrandComponent } from "./Brand/Brand.component";
import { DSEComponent } from "./DSE/DSE.component";
import { Enquiry_ForComponent } from "./Enquiry_For/Enquiry_For.component";
import { LocationComponent } from "./Location/Location.component";
import { Lead_status_reportComponent } from "./Lead_status_report/Lead_status_report.component";
import { OverAll_ReportComponent } from "./OverAll_Report/OverAll_Report.component";
import { Status_DurationComponent } from "./Status_Duration/Status_Duration.component";
import { Daily_Work_ReportComponent } from "./Daily_Work_Report/Daily_Work_Report.component";
import { User_TargetComponent } from "./User_Target/User_Target.component"; 
import { Status_Wise_ReportComponent} from "./Status_Wise_Report/Status_Wise_Report.component";
import { Enquiry_For_Wise_ReportComponent } from "./Enquiry_For_Wise_Report/Enquiry_For_Wise_Report.component";
import { Staff_Target_ReportComponent } from "./Staff_Target_Report/Staff_Target_Report.component";
import { Staff_Track_ReportComponent } from "./Staff_Track_Report/Staff_Track_Report.component";
@NgModule({
  declarations: [
    AdminComponent,
    BranchComponent,
    DepartmentComponent,
    CountryComponent,
    Department_StatusComponent,
    CourseComponent,
    Course_IntakeComponent,
    DocumentComponent,
    Student_ReportComponent,
    Work_reportComponent,
    Status_SummaryComponent,
    DurationComponent,
    IntakeComponent,
    InternshipComponent,
    Level_DetailComponent,
    StudentComponent,
    Student_DocumentComponent,
    Enquiry_SourceComponent,
    Enquiry_SourceComponent,
    Student_MessageComponent,
    Student_StatusComponent,
    SubjectComponent,
    AgentComponent,
    Home_PageComponent,
    DashboardComponent,
    UniversityComponent,
    Course_ImportComponent,
    Account_GroupComponent,
    Client_AccountsComponent,
    RemarksComponent,
    TimeTrackComponent,
    Registration_ReportComponent,
    Efficiency_ReportComponent,
    Student_ImportComponent,
    Pending_FollowUpComponent,
    FeesComponent,
    Fees_Receipt_ReportComponent,
    Enquiry_Source_SummaryComponent,
    Counselor_Fees_Receipt_ReportComponent,
    Counselor_Registration_ReportComponent,
    Student_Summary_ReportComponent,
    Staff_Target_ReportComponent,
    Student_SearchComponent,
    Work_SummaryComponent,
    Userwise_SummaryComponent,
    Branchwise_SummaryComponent,
    PageAComponent,
    PageCComponent,
    PageBComponent,
    Enquiry_Source_ReportComponent,
    Receipt_Summary_ReportComponent,
    Registration_SummaryComponent,
    Enquiry_ConversionComponent,
    Employee_SummaryComponent,
    User_RoleComponent,
    CompanyComponent,
    SettingsComponent,
    Documentation_ReportComponent,
    Work_HistoryComponent,
    Registration_EnquirySourceComponent,
    Details_checkComponent,
    Check_ListComponent,
    Agent_DetailsComponent,
    Application_ReportComponent,
    TaskComponent,
    NotificationComponent,
    Receipt_ConfirmationComponent,
    Refund_ConfirmationComponent,
    Refund_ApprovalComponent,
    Application_DashboardComponent,
    Student_TaskComponent,
    Passport_Expiry_ReportComponent,
    Application_StatusComponent,
    Task_ItemComponent,
    Bph_ReportComponent,
    Application_ListComponent,
    //Enquiry_Source_ReportComponent,
    User_DetailsComponent,
    Application_SettingsComponent,
    DocumentNameComponent,
    AccountsComponent,
    Data_MigrationComponent,
    Fees_Pending_ReportComponent,
    Class_SummaryComponent,
    ClassComponent,
    Department_DataComponent,
    NotesComponent,
    Chat_WindowComponent,
    Student_Status_Wise_ReportComponent,
    Enquiry_Source_Summary_NewComponent,
    Student_Followup_ReportComponent,
    Application_DataComponent,
    Student_Report_countrywiseComponent,
    Student_Report_coursewiseComponent,
    RichEditorComponent,
    Dashboard_AccountsComponent,
    Application_Status_Wise_ReportComponent,
    PaymentComponent,
    Not_EnrolledComponent,
    CommisssionComponent,
    commission_Summary_reportComponent,
    EmailTemplateComponent,
    Change_StatusComponent,
    Qualification_TypeComponent,
    Dashboard_UserComponent,
    Document_TypeComponent,
    Application_Manager_DashboardComponent,
    Application_Report_histroyComponent,
    campaignComponent, 
    CallAether_ReportComponent,
    // CampaignReportComponent ,
    Campaign_ReportComponent,
    Campaign_DashboardComponent,
    CallHistory_ReportComponent,
    Telecaller_Registration_SummaryComponent,
    BrandComponent,
    DSEComponent,
    Enquiry_ForComponent,
    LocationComponent, 
    Lead_status_reportComponent, 
    OverAll_ReportComponent,
    Status_DurationComponent,
    Daily_Work_ReportComponent,
    User_TargetComponent,
    Status_Wise_ReportComponent,
    Enquiry_For_Wise_ReportComponent,
    Staff_Track_ReportComponent
  ],
  imports: [
    RouterModule.forChild(AdminRoutes),
    SharedModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    GoogleChartsModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ScrollingModule,
    FormsModule,
    MatCheckboxModule,
    MatChipsModule,
    HttpModule,
    EditorModule,
    CommonModule,
    // QuillModule.forRoot(),
  ],
  exports: [RichEditorComponent],
})
export class AdminModule { }
