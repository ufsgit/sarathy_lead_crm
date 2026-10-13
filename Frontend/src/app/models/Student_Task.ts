export class Student_Task
{
    Student_Task_Id:number;
    Student_Id:number;
    Student_Name : string; 
    Followup_Date : Date; 
    Task_Status : number; 
    Status_Name : string;
    Remark:string;
    To_User:number;
    To_User_Name:string;
    Task_Item_Id:number;
    Task_Group_Id:number;
    tp:number;
    ActualFollowup_Date:Date;
    Department_Id:number;
    Department_Name:string;
    Task_Details:string;
    By_User_Id:number;
    By_User_Name:string;
    RowNo_sort: number;
    RowNo:number
    Branch_Id:number;
    Branch_Name:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

