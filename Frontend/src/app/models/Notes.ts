export class Notes
{
Notes_Id:number;
Title:string;
Description:string
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

