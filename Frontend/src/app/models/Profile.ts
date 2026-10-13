import { Student_FollowUp } from '../models/Student_FollowUp';
export class Profile {
    Student_Id: number;
    Student_Name: string;
    Phone_Number: string;
    Enquiryfor_Id: number;
    Enquirfor_Name: string;
    Enquiry_Mode_Id: number;
    Enquiry_Mode_Name: string;
    Reference: string;
    Enquiry_Source_Id: number;
    Enquiry_Source_Name: string;
    Shore_Id: number;
    Shore_Name: string;
    Dob: string;
    Entry_date: Date;
    Email: string;
    Unique_Id: string;
    Program_Course_Id: number;
    Program_Course_Name: string;
    Alternative_Email: string;
    Country_Id: number;
    Country_Name: string;
    Proceeding_University_Id: number;
    Proceeding_University_Name: string;

    Proceeding_Intake_Id: number;
    Proceeding_Intake_Name: string;

    Proceeding_Country_Id: number;
    Proceeding_Country_Name: string;
    Alternative_Phone_Number: string;
    Marital_Status_Id: Number;
    Marital_Status_Name: String;
    Address1: string;
    Address2: string;
    Spouse_Name: string;
    No_of_Kids_and_Age: string;
    Whatsapp: string;
    Date_of_Marriage: string;
    Previous_Visa_Rejection: string;
    Spouse_Occupation: string;
    Spouse_Qualification: string;
    Dropbox_Link: string;
    Passport_No: string;
    Passport_fromdate: string;
    Passport_Todate: string;
    Passport_Id: number;
    Agent_Id: number;
    Student_Status_Id: number;
    Student_FollowUp_: Student_FollowUp
    Flag_Student: number;
    Flag_Followup: number;
    Phone_Change: number;
    Email_Change: number;
    Alternative_Email_Change: number;
    Alternative_Phone_Number_Change: number;
    Whatsapp_Change: number;
    By_User_Id: number;
    Branch_Id: number;
    Department_Id: number;
    Transfer_Remark: string;
    Class_Id: number;
    Class_Name: string;
    Guardian_telephone: string;
    Counsilor_Note: string;
    BPH_Note: string;
    Pre_Visa_Note: string;
    Transfer_Status_Id: number;
    Transfer_Status_Name: string;
    Is_Registered: number;
    Status_Type_Id: number;
    Status_Type_Name: string;
    Color: string;
    To_User_Id: number;
    Refund_Amount: string;
    Refund_Description: string;
    Spouse_Visa_Id;
    Spouse_visa_Name: string;
    Send_Mail: boolean;
    Education_Loan: boolean;
    From_User_Name: string;
    FollowUp_Remark: string;
    AIMS_ID_: string;
    Loan_Amount: string;
    Loan_Description: string;
    DSE_Id: number;
    DSE_Name: string;
    Brand_Id: number;
    Brand_Name: string;
    Location_Id: number;
    Location_Name :string;
    Enquiry_No:string;
    Lead_Id:string;
    Transfer_date:Date;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

