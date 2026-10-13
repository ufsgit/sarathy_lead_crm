
import { User_Menu_Selection } from './User_Menu_Selection';
import { User_Department } from './User_Department';
import { Application_Group } from './Application_Group';
import { ApplicationStatus } from './ApplicationStatus';
import { Department } from './Department';
import { Country } from './Country';
import { Course } from './Course';


export class User_Details {
    User_Details_Id: number;
    User_Details_Name: string;
    DSE_Name: string
    Password: string;
    Working_Status: number;
    User_Type: number;
    Role_Id: number;
    Address1: string;
    Address2: string;
    Address3: string;
    Address4: string;
    Pincode: string;
    Mobile: string;
    Email: string;
    OTP: string;
    Employee_Id: number;
    Branch_Id: number;
    FollowUp_Target: number;
    Registration_Target: number;
    Client_Accounts_Name: string;
    User_Menu_Selection_Data: User_Menu_Selection[];
    User_Department_Data: User_Department[];
    Department_Name: String;
    Department_Id: Number;
    Backup_User_Id: number;
    Backup_User_Name: string;
    User_Application_Group: Application_Group[]
    User_Application_Status: ApplicationStatus[]
    Application_View: boolean
    Lead_Assigned: boolean
    All_Time_Department_View: boolean
    All_Time_Departments: Department[]
    Default_Application_Status_Id: number;
    Default_Application_Status_Name: string;
    Location_Id:number;
    Location_Name:string;

    Data_Count: number;
    Data_Giving: number;
    Check_Box: boolean
    User_Id: string

    User_Country: Country[]
    User_Course: Course[]

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

