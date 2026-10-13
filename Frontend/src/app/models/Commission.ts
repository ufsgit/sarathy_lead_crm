export class Commission
{
    Commission_Id:number;
    Commission_Name:string;
DeleteStatus:number;

constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}
