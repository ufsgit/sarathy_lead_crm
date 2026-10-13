import { Campaign_Department_Users } from '../models/Campaign_Department_Users'
export class campaign {
    campaign_details_id: number;
    campaign_id: string;
    campaign_name: string;
    Branch_Id: number;
    Branch_Name: string;

    // to_user_id: number;
    // Department_Id: number;
    // Department_Name: string;

    // status_id: number;
    // status_name: string;
    Enquiry_Source_Id: number;
    Enquiry_Source_Name: string;
    Campaign_Master_Id: number;
    Campaign_Master_Name: string;
    delete_status: number;
    form_id: string;
    form_name: string;
    procedure_name: string;
    Entry_Date: string;
    Campaign_Department_Users_Data: Campaign_Department_Users[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
