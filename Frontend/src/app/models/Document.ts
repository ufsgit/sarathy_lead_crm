export class Document
{
Document_Id:number;
Document_Name:string;
Document_Type_Id:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

