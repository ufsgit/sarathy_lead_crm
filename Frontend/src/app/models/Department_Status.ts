export class Department_Status {
  Check_Box: boolean;
  Department_Status_Id: number;
  Department_Status_Name: string;
  Status_Order: number;
  Editable: boolean;
  Color: string;
  Status_Type_Id: number;
  Status_Type_Name: string;
  Transfer_Status: boolean;
  Notification_Status: boolean;
  Registration: boolean;
  Notification_Department_Id: number;
  Notification_Department_Name: string;
  Transfer_Department_Name: string;
  Transfer_Department_Id: number;
  FollowUp: boolean;
  Display_In: number;
  Class_Id: number;
  Class_Name: string;
  Class_Order: number;
  Registration_Mandatory: boolean;
  Update_in_Profile: boolean;
  Duration: boolean;
  Send_Mail: boolean;

  Student_Email_Template_Id: number;
  Student_Email_Template_Name: string;
  Staff_Email_Template_Id: number;
  Staff_Email_Template_Name: string;
  Send_Student_Mail: boolean;
  Send_Staff_Mail: boolean;
  Send_BDM_Mail: boolean;
  Send_Branch_Head_Mail: boolean;
  Selected_Department:string;
  Template_Name: number;
  Department_Id: number; //Department_Id  for saving
  Selected_Department_Id:number // department id for getting.
  Department_Name:string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
