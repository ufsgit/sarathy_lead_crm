export class Task_Item
{
    Task_Item_Id:number;
    Task_Item_Name:string;
    Task_Item_Group:number;   
    Duration:number;



constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

