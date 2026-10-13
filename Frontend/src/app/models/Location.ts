
// import { Department } from './Department';
// import{Branch} from'./Branch';
export class Location {
    Location_Id: number;
    Location_Name: string;

    Department_Id: number;
    Department_Name: string;

    Branch_Id: number;
    Branch_Name: string;


    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

