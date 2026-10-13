export class Campaign_Department_Users {
    
    Campaign_Department_Users_Id: number;
    Department_Id: number;
    Department_Name: string;
    To_User_Id: number;
    To_User_Name:string;
    Status_Id:number;
    Status_Name:string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

