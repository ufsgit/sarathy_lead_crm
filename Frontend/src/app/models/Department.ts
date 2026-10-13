import { Department_Status } from '../models/Department_Status';
export class Department {
    Department_Id: number;
    Department_Name: string;
    Department_FollowUp:boolean;
    FollowUp: string;
    Status: string;
    Department_Order: number;
    Color: string;
    Check_Box:boolean;
    Department_Status_Id:number;
    Transfer_Method_Id:number;
    Color_Type_Id:string;
    Department_Status_Data: Department_Status[];
    checkbox_view:boolean
    Color_Type_Name:string;
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

