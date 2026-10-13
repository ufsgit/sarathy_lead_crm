export class User_Role {
    User_Role_Id: number;
    User_Role_Name: string;
    Role_Under_Id: number;
    Role_Under:string;
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

