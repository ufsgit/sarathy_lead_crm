export class Application_Settings
{
    Application_Settings_Id :number
    Settings_Group_Id :number 
    Settings_Name :string 
    Settings_Value :string
    Editable:number
    Department_Id:number;
    Register_Transfer_Status:boolean=false;
    Registration_By:number;
    Branch:boolean;
    Department:boolean;
    Tostaff:boolean;
    Round_Robin:boolean;
    Receipt_Notification_User:number;
    Prefix:string;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

