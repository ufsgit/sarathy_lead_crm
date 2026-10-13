
import { Department } from './Department';
export class DSE {
    DSE_Id: number;
    DSE_Name: string;
    Department_Id: number;
    Department_Name: string;
    Branch_Id:number;
    Branch_Name:string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

