export class Student_Document
{
Student_Document_Id:number;
Student_Id:number;
Document_Id:number;
Document_Name:string
Description:string
File_Name:string;
Document_File_Name:string;
Image:string
Login_User:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

