import { Conditions } from "./Conditions";
export class Status_Change_Data
{
   Application_details_Id:number;
   Student_Id:number; 
   Application_status_Id:number;
   Application_Status_Name:string;
   Agent_Id:number;
   Agent_Name:string;   
   User_Id:number;  
   Application_No:string;  
   LoginUser:number;
   Offerletter_Type_Id :number;
   Offerletter_Type_Name:string;
   Remark:string;
   Conditions_Array:Conditions[];
   Class_Id:number;
   Class_Name:string;
   Class_Order:number;
   Department_Id:number;
   Department_Name:string;

   Branch_Id:number;
   Branch_Name:string;
   To_User_Id:number;
   To_User_Name:string;

   FollowUp:boolean;
   Next_FollowUp_Date:Date;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
