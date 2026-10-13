
// import { Department } from './Department';
// import{Branch} from'./Branch';
export class Status_Duration {
    Department_Status_Duration_Id: number;
    Department_Id :number;
    Department_Name:string;
    Department_Status_Id: number;
    Department_Status_Name :string;
    Duration_Count: number;
    
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

