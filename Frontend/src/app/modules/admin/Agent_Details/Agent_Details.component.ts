import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent_Details_Service } from '../../../services/Agent_Details.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Agent } from '../../../models/Agent';
import { MatDialog } from '@angular/material'; import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component'; import { Student_Service } from 'app/services/Student.Service';
import { Branch } from 'app/models/Branch';
import { User_Details } from 'app/models/User_Details';
import { Student_FollowUp } from 'app/models/Student_FollowUp';
import { Profile } from 'app/models/Profile';
import { Department } from 'app/models/Department';
@Component({
    selector: 'app-Agent_Details',
    templateUrl: './Agent_Details.component.html',
    styleUrls: ['./Agent_Details.component.css']
})
export class Agent_DetailsComponent implements OnInit {
    Agent_Details_Data: Agent[]
    Agent_Details_Typeahead_Data: Agent[]
    Agent_Details_: Agent = new Agent();
    Agent_Details_Temp: Agent = new Agent();
    Under_Role_: Agent = new Agent();
    Agent_Details_Name_Search: string;
    Search_Agent_Details_: string;
    Entry_View: boolean = true;
    myInnerHeight: number;
    EditIndex: number;
    Id: number;
    Name: string;
    Total_Entries: number = 0;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    issLoading: boolean;
    Permissions: any;
    Agent_Details_Edit: boolean;
    Agent_Details_Save: boolean;
    Agent_Details_Delete: boolean;
    Login_User: string = "0";
    myTotalHeight: number;

    Branch_: Branch = new Branch();
    Branch_Temp: Branch = new Branch();
    Branch_Data: Branch[];

    User_: User_Details = new User_Details();
    User_Temp: User_Details = new User_Details();
    User_Data: User_Details[];

    FollowUp_Department_TN: Student_FollowUp = new Student_FollowUp();
    Followup_Users_Data_tN: Student_FollowUp[];
    Profile_: Profile = new Profile();


    Followup_Department_Data: Department[];
    Followup_Department_Data_Check: Department[];
    FollowUp_Department_: Department = new Department();
    Followup_Users_Data_t: User_Details[];

    Followup_Users_: User_Details = new User_Details();
    Is_Follow_: number;
    FollowUp_: Student_FollowUp = new Student_FollowUp();

    Department_Data_Temp: Department = new Department();
    Followup_Users_temp: User_Details = new User_Details();


    constructor(public Agent_Details_Service_: Agent_Details_Service, public Student_Service_: Student_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }
    ngOnInit() {
        this.Agent_Details_Typeahead_Data = [];
        this.Login_User = localStorage.getItem("Login_User");


        // this.Permissions = Get_Page_Permission(66);
        // if(this.Permissions==undefined || this.Permissions==null)
        // {
        // localStorage.removeItem('token');
        // this.router.navigateByUrl('Home_Page');
        // }
        // else
        {
            // this.Agent_Details_Edit=this.Permissions.Edit;
            // this.Agent_Details_Save=this.Permissions.Save;
            // this.Agent_Details_Delete=this.Permissions.Delete;
            this.Page_Load()
        }
    }
    Page_Load() {
        this.Get_Menu_Status(66, this.Login_User);

        this.myInnerHeight = (window.innerHeight);
        this.myInnerHeight = this.myInnerHeight - 280;
        this.Clr_Agent_Details();
        this.Search_Agent_Details();
        this.Get_Student_PageLoadData_Dropdowns()
        //this.Load_Agent_Details();
        this.Entry_View = false;
        this.myInnerHeight = (window.innerHeight);
        this.myTotalHeight = this.myInnerHeight - 200;
        this.myTotalHeight = this.myTotalHeight - 40;
        this.myInnerHeight = this.myInnerHeight - 250;
    }


    Get_Menu_Status(Menu_id, Login_user_id) {

        this.issLoading = false;
        this.Agent_Details_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(Rows => {


            if (Rows[0][0] == undefined) {
                if (Menu_id == 66) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
            }
            else
                if (Rows[0][0].View > 0) {

                    if (Menu_id == 66) {

                        this.Permissions = Rows[0][0];
                        if (this.Permissions == undefined || this.Permissions == null) {
                            localStorage.removeItem('token');
                            this.router.navigateByUrl('Home_Page');
                        }

                        this.Agent_Details_Edit = this.Permissions.Edit;
                        this.Agent_Details_Save = this.Permissions.Save;
                        this.Agent_Details_Delete = this.Permissions.Delete;
                    }

                }
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }

    trackByFn(index, item) {
        return index;
    }
    Create_New() {
        this.Entry_View = true;
        this.Clr_Agent_Details();
    }
    Close_Click() {
        this.Entry_View = false;
        this.Clr_Agent_Details()
    }
    Clr_Agent_Details() {
        this.Agent_Details_.Agent_Id = 0;
        this.Agent_Details_.Agent_Name = null;
        this.Under_Role_ = null;
        this.Agent_Details_.Phone = ""
        this.Agent_Details_.Email = ""
        this.Agent_Details_.Address = ""
        this.Agent_Details_.Description = ""
        this.Agent_Details_.User_Name = ""
        this.Agent_Details_.Password = ""
        this.FollowUp_Department_ = null;
        this.Followup_Users_ = null;

        if (this.Branch_Data != null && this.Branch_Data != undefined)
            this.Branch_ = this.Branch_Data[0];

        if (this.User_Data != null && this.User_Data != undefined)
            this.User_ = this.User_Data[0];

    }




    Get_Student_PageLoadData_Dropdowns() {
        this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
            (Rows) => {


                this.User_Data = Rows[19].slice();
                this.User_Temp.User_Details_Id = 0;
                this.User_Temp.User_Details_Name = "Select";
                this.User_Data.unshift(Object.assign({}, this.User_Temp));
                this.User_ = this.User_Data[0];

                // debugger
                this.Branch_Data = Rows[20].slice();
                this.Branch_Temp.Branch_Id = 0;
                this.Branch_Temp.Branch_Name = "Select";
                this.Branch_Data.unshift(Object.assign({}, this.Branch_Temp));
                this.Branch_ = this.Branch_Data[1];


            },
            (Rows) => {
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: "Dialogbox-Class",
                    data: { Message: "Error Occured", Type: "2" },
                });
            }
        );
    }


    // Load_Agent_Details(event: any) 
    // {           
    //     var Value = "";
    //     if (event.target.value == "")
    //     Value = undefined;
    //     else
    //     Value = event.target.value;
    //     this.issLoading=true;
    //         this.Agent_Details_Service_.Load_Agent_Details(Value).subscribe(Rows => {

    //             if (Rows != null) {
    //             this.Agent_Details_Typeahead_Data=Rows[0];
    //             }
    //             this.issLoading=false;
    //              },
    //         Rows => 
    //         {
    //             this.issLoading=false;
    //        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    //         });
    // }     
    // display_Under_Role(Agent_Details_: Agent_Details)
    // {      
    //        if (Agent_Details_) { return Agent_Details_.Name;  }
    // }
    Search_Agent_Details() {
        // debugger
        this.issLoading = true;
        this.Agent_Details_Service_.Search_Agent_Details(this.Agent_Details_Name_Search).subscribe(Rows => {

            // debugger
            this.Agent_Details_Data = Rows[0];
            this.Total_Entries = this.Agent_Details_Data.length;
            if (this.Agent_Details_Data.length == 0) {

                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No Details Found', Type: "3" } });
            }
            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }
    Delete_Agent_Details(Agent_Id_, index) {

        // debugger
        const dialogRef = this.dialogBox.open
            (DialogBox_Component, {
                panelClass: 'Dialogbox-Class'
                , data: { Message: 'Do you want to delete ?', Type: "true", Heading: 'Confirm' }
            });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'Yes') {
                this.issLoading = true;
                // debugger
                this.Agent_Details_Service_.Delete_Agent_Details(Agent_Id_).subscribe(Delete_status => {

                    // debugger
                    if (Delete_status[0][0].Agent_Id_ > 0) {

                        this.Agent_Details_Data.splice(this.EditIndex, 1);
                        const dialogRef = this.dialogBox.open
                            (DialogBox_Component, {
                                panelClass: 'Dialogbox-Class'
                                , data: { Message: 'Deleted', Type: "false" }
                            });
                        this.Search_Agent_Details();

                    }
                    else {
                        const dialogRef = this.dialogBox.open
                            (DialogBox_Component, {
                                panelClass: 'Dialogbox-Class'
                                , data: { Message: 'You Cannot Delete this Agent', Type: "2" }
                            });
                    }





                    this.issLoading = false;
                },
                    Rows => {
                        this.issLoading = false;
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
                    });

            }
        });


    }
    Save_Agent_Details() {

        if (this.Agent_Details_.Agent_Name == undefined || this.Agent_Details_.Agent_Name == null || this.Agent_Details_.Agent_Name == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Name', Type: "3" } });
            return
        }

        // if(this.Agent_Details_.Phone==undefined || this.Agent_Details_.Phone==null || this.Agent_Details_.Phone=="")
        // {
        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Phone',Type:"3"}}); 
        // return  
        // }

        if (this.Agent_Details_.Phone.toString().length != 10) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter valid Phone Number', Type: "3" } });
            return
        }
        if (this.Agent_Details_.Phone != '' && this.Agent_Details_.Phone != null && this.Agent_Details_.Phone != undefined) {
            if (this.Agent_Details_.Phone.toString().length != 10) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter valid Phone Number', Type: "3" } });
                return
            }
        }

        if (this.Agent_Details_.Email == undefined || this.Agent_Details_.Email == null || this.Agent_Details_.Email == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Email', Type: "3" } });
            return
        }

        if (this.Agent_Details_.Address == undefined || this.Agent_Details_.Address == null || this.Agent_Details_.Address == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Address', Type: "3" } });
            return
        }
        if (this.Agent_Details_.User_Name == undefined || this.Agent_Details_.User_Name == null || this.Agent_Details_.User_Name == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter User Name', Type: "3" } });
            return
        }

        if (this.Agent_Details_.Password == undefined || this.Agent_Details_.Password == null || this.Agent_Details_.Password == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Password', Type: "3" } });
            return
        }

        if (this.Agent_Details_.Description == undefined || this.Agent_Details_.Description == null || this.Agent_Details_.Description == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Description', Type: "3" } });
            return
        }

        // if(this.Branch_==undefined || this.Branch_==null || this.Branch_.Branch_Id==0|| this.Branch_.Branch_Id==undefined|| this.Branch_.Branch_Id==null)
        // {
        // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Branch',Type:"3"}}); 
        // return  
        // }

        if (this.User_ == undefined || this.User_ == null || this.User_.User_Details_Id == 0 || this.User_.User_Details_Id == undefined || this.User_.User_Details_Id == null) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select User', Type: "3" } });
            return
        }


        if (this.FollowUp_Department_ == undefined || this.FollowUp_Department_ == null || this.FollowUp_Department_.Department_Id == 0 || this.FollowUp_Department_.Department_Id == undefined || this.FollowUp_Department_.Department_Id == null) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Department', Type: "3" } });
            return
        }

        if (this.Followup_Users_ == undefined || this.Followup_Users_ == null || this.Followup_Users_.User_Details_Id == 0 || this.Followup_Users_.User_Details_Id == undefined || this.Followup_Users_.User_Details_Id == null) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select To Staff', Type: "3" } });
            return
        }

        else {
            document.getElementById("Save_Button").hidden = true;
            this.issLoading = true;

            this.Agent_Details_.Branch_Id = this.Branch_.Branch_Id;
            this.Agent_Details_.Under_User = this.User_.User_Details_Id;

            // debugger
            this.Agent_Details_.Department_Name = this.FollowUp_Department_.Department_Name;
            this.Agent_Details_.Department = this.FollowUp_Department_.Department_Id;

            this.Agent_Details_.To_User_Id = this.Followup_Users_.User_Details_Id;
            this.Agent_Details_.To_User_Name = this.Followup_Users_.User_Details_Name;


            this.Agent_Details_.Login_user_id = this.Login_User;

            // this.Profile_.Ielts_Status_Name =  this.Ielts_Status_.Ielts_Status_Name;

            // debugger
            this.Agent_Details_Service_.Save_Agent_Details(this.Agent_Details_).subscribe(Save_status => {

                // debugger
                this.issLoading = false;
                Save_status = Save_status[0];
                if (Save_status != undefined) {

                    if (Number(Save_status[0].Agent_Id_) > 0) {
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
                        document.getElementById("Save_Button").hidden = false;
                        this.Clr_Agent_Details();
                        this.Search_Agent_Details();
                    }
                }
                else {
                    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
                    document.getElementById("Save_Button").hidden = false;
                }
                this.issLoading = false;
            },
                Rows => {
                    this.issLoading = false;
                    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
                    document.getElementById("Save_Button").hidden = false;
                });

        }
    }


    // Save_Agent_Details()
    // {
    //   if(this.Agent_Details_.Agent_Name==undefined || this.Agent_Details_.Agent_Name==null || this.Agent_Details_.Agent_Name=="")
    //     {
    //     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Name',Type:"3"}}); 
    //     return  
    //     }   

    // this.issLoading=true;

    // this.Agent_Details_Service_.Save_Agent_Details(this.Agent_Details_).subscribe(Save_status => {

    // this.issLoading=false;
    //     Save_status=Save_status[0];
    // 
    //     if(Number(Save_status[0].Agent_Id_)>0)
    // {

    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    //     this.Clr_Agent_Details();
    //     this.Search_Agent_Details();
    // }
    // else{
    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    // }

    // this.issLoading=false;
    //  },
    //  Rows => { 
    //     this.issLoading=false;
    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    //  });

    // this.Clr_Agent_Details();
    // //}
    // }
    Edit_Agent_Details(Agent_Details_e: Agent, index) {
        // debugger
        this.Entry_View = true;
        this.Agent_Details_ = Agent_Details_e;
        this.Agent_Details_ = Object.assign({}, Agent_Details_e);

        this.Department_Data_Temp.Department_Id = this.Agent_Details_.Department_Id;
        this.Department_Data_Temp.Department_Name = this.Agent_Details_.Department_Name;
        this.FollowUp_Department_ = Object.assign({}, this.Department_Data_Temp);




        this.Followup_Users_temp.User_Details_Id = this.Agent_Details_.To_UserId;
        this.Followup_Users_temp.User_Details_Name = this.Agent_Details_.To_UserName;
        this.Followup_Users_ = Object.assign({}, this.Followup_Users_temp);

        for (var i = 0; i < this.User_Data.length; i++) {
            if (
                this.Agent_Details_.Under_User ==
                this.User_Data[i].User_Details_Id
            )
                this.User_ = this.User_Data[i];
        }



        for (var i = 0; i < this.Branch_Data.length; i++) {
            if (
                this.Agent_Details_.Branch_Id ==
                this.Branch_Data[i].Branch_Id
            )
                this.Branch_ = this.Branch_Data[i];
        }




        // debugger




    }


    Department_Change() {

        this.Followup_Users_ = null;

        this.Followup_Department_Data = [];

    }


    Search_Branch_Department_Typeahead(event: any) {
        // debugger
        var Value = "";
        if (event.target.value == "") Value = undefined;
        else Value = event.target.value;


        if (
            this.Followup_Department_Data == undefined ||
            this.Followup_Department_Data.length == 0
        ) {

            this.issLoading = true;
            // debugger
            this.Student_Service_.Search_Branch_Department_TypeaheadNew("").subscribe(
                (Rows) => {
                    // debugger
                    if (Rows != null) {
                        if (Rows.code != undefined) {
                            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: Rows.Code, Type: "false" } });
                        }
                        this.Followup_Department_Data = Rows[0];
                        this.Followup_Department_Data_Check = Rows[0];
                        this.issLoading = false;
                    }
                },
                (Rows) => {
                    this.issLoading = false;
                    const dialogRef = this.dialogBox.open(DialogBox_Component, {
                        panelClass: "Dialogbox-Class",
                        data: { Message: "Error Occured", Type: "2" },
                    });
                }
            );

        }

    }



    display_Department(Department_: Department) {
        if (Department_) {
            return Department_.Department_Name;
        }
    }
    display_DepartmentT(Department_t: Student_FollowUp) {
        if (Department_t) {
            return Department_t.Dept_Name;
        }
    }



    Search_Department_User_Typeahead_Fllowup(event: any) {
        // debugger
        var Value = "";
        if (event.target.value == "") Value = undefined;
        else Value = event.target.value;

        if (
            this.FollowUp_Department_ == null ||
            this.FollowUp_Department_.Department_Id == undefined
        ) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: "Dialogbox-Class",
                data: { Message: "Select Department", Type: "3" },
            });
            this.Followup_Users_Data_t = [];
            // return
        }
        else {
            // if (
            // 	this.Followup_Users_Data_t == undefined 
            // 	|| this.Followup_Users_Data_t == null
            // ) {
            // debugger
            this.Student_Service_.Search_Department_User_Typeahead_Latest(
                this.FollowUp_Department_.Department_Id, ""
            ).subscribe(

                (Rows) => {
                    // debugger
                    if (Rows != null) {
                        // debugger
                        this.Followup_Users_Data_t = Rows[0];
                        this.issLoading = false;
                    }
                },
                (Rows) => {
                    this.issLoading = false;
                    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
                }
            );
            //  }
        }
    }

    display_Followup_Users(Users_: User_Details) {
        if (Users_) {
            return Users_.User_Details_Name;
        }
    }



}


