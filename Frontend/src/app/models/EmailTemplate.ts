export class EmailTemplate {
    id: number;
    name: string;
    subject: string;
    body: string;  // Body with placeholders like {{due_amount}}, {{address}}
    status: number; // 1 for active, 0 for inactive
attachments: any; // 1 for active, 0 for inactive
document_id: number; // 1 for active, 0 for inactive
document_name: string; // 1 for active, 0 for inactive
    constructor(values: Object = {})  
    {
    Object.assign(this, values) 
    }
}




