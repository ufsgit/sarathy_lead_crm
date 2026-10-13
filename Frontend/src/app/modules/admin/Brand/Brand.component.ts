import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Brand_Service } from '../../../services/Brand.Service';
import { Department_Service } from '../../../services/Department.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Department } from '../../../models/Department';
import { Brand } from '../../../models/Brand';
import { User_Details } from '../../../models/User_Details';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
@Component({
    selector: 'app-Brand',
    templateUrl: './Brand.component.html',
    styleUrls: ['./Brand.component.css']
})
export class BrandComponent implements OnInit {
    Brand_Data: Brand[]
    Department_Data: Department[]
    Brand_: Brand = new Brand();
    Department_: Department = new Department();
    Brand_Name_Search: string;
    Channel_Search_Dropdown: any = null;
    Entry_View: boolean = true;
    EditIndex: number;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    myInnerHeight: number;
    myTotalHeight: number;
    issLoading: boolean;
    Menu_Id: number = 15;
    array: any;
    Total_Entries: number;
    Brand_Edit: boolean;
    Brand_Save: boolean; ssss
    Brand_Delete: boolean;
    Login_User: string = "0";
    Permissions: any;

    DefaultDepartment_Dropdown_: Department = new Department();
    DefaultDepartment_Dropdown_Temp: Department = new Department();
    DefaultDepartment_Dropdown_Data: Department[];


    DefaultUsers_: User_Details = new User_Details();
    DefaultUsers_Temp: User_Details = new User_Details();
    DefaultUsers_Data: User_Details[];
    DefaultUsers_Data_Filter: User_Details[];
    Brand_Id_temp: number
    constructor(public Brand_Service_: Brand_Service, public Department_Service_: Department_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }
    ngOnInit() {
        this.Login_User = localStorage.getItem(("Login_User"));

        this.array = Get_Page_Permission(this.Menu_Id);
        // if(this.array==undefined || this.array==null)
        // {
        // localStorage.removeItem('token');
        // this.router.navigateByUrl('/auth/login');
        // }
        // else 
        {
            // this.Brand_Edit= this.array.Edit;
            // this.Brand_Save= this.array.Save;
            // this.Brand_Delete= this.array.Delete;

            this.Page_Load()
        }
    }
    Page_Load() {
        this.Get_Menu_Status(15, this.Login_User);

        this.myInnerHeight = (window.innerHeight);
        this.myInnerHeight = this.myInnerHeight - 210;
        this.Clr_Brand();
        this.Load_DefaultDepartment_Dropdown();
        this.Search_Brand();
        this.Search_Department();
        this.Entry_View = false;

        this.myInnerHeight = (window.innerHeight);
        this.myTotalHeight = this.myInnerHeight - 100;
        this.myTotalHeight = this.myTotalHeight - 60;
        this.myInnerHeight = this.myInnerHeight - 230;

    }

    Get_Menu_Status(Menu_id, Login_user_id) {

        this.issLoading = false;
        this.Brand_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(Rows => {


            if (Rows[0][0] == undefined) {
                if (Menu_id == 15) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
            }
            else
                if (Rows[0][0].View > 0) {


                    if (Menu_id == 15) {
                        this.Permissions = Rows[0][0];
                        if (this.Permissions == undefined || this.Permissions == null) {
                            localStorage.removeItem('token');
                            this.router.navigateByUrl('Home_Page');
                        }

                        this.Brand_Edit = this.Permissions.Edit;
                        this.Brand_Save = this.Permissions.Save;
                        this.Brand_Delete = this.Permissions.Delete;
                    }

                }
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }

    Create_New() {
        this.Entry_View = true;

        this.Clr_Brand();
    }
    Close_Click() {
        this.Entry_View = false;
    }
    trackByFn(index, item) {
        return index;
    }
    Clr_Brand() {
        this.Brand_.Brand_Id = 0;
        this.Brand_.Brand_Name = "";

        this.Brand_.Address = "";
        this.Brand_.Location = "";
        // this.DefaultUsers_=null;
        this.Brand_.District = "";
        this.Brand_.State = "";
        this.Brand_.Country = "";
        this.Brand_.PinCode = "";
        this.Brand_.Phone_Number = "";
        this.Brand_.Email = "";
        this.Brand_.Brand_Code = "";
        if (this.Department_Data != undefined)
            for (var i = 0; i < this.Department_Data.length; i++) {
                this.Department_Data[i].Check_Box = false
            }
        if (
            this.DefaultDepartment_Dropdown_Data != null &&
            this.DefaultDepartment_Dropdown_Data != undefined
        )
            this.DefaultDepartment_Dropdown_ = this.DefaultDepartment_Dropdown_Data[0];


    }
    show_Loader() {
    }
    hide_Loader() {
    }
    Search_Brand() {
        let Channel_Id_ = 0; // default = All channels

        if (this.Channel_Search_Dropdown != null &&
            this.Channel_Search_Dropdown.Department_Id != null) {
            Channel_Id_ = this.Channel_Search_Dropdown.Department_Id;
        }
        this.issLoading = true;
        this.Brand_Service_.Search_Brand(this.Brand_Name_Search, Channel_Id_).subscribe(Rows => {
            this.issLoading = false;
            this.Brand_Data = Rows[0];
            this.Total_Entries = this.Brand_Data.length;
            if (this.Brand_Data.length == 0) {
                const dialogRef = this.dialogBox.open
                    (DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No Details Found', Type: "3" } });
            }
            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });

    }
    Search_Department() {
        this.issLoading = true;
        this.Department_Service_.Search_Department('').subscribe(Rows => {
            this.Department_Data = Rows[0];
            if (this.Department_Data.length == 0) {
                const dialogRef = this.dialogBox.open
                    (DialogBox_Component, {
                        panelClass: 'Dialogbox-Class'
                        , data: { Message: 'No Details Found', Type: false }
                    });
            }
            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });

    }
    Get_Brand_Department_Edit(Brand_Id) {


        for (var i = 0; i < this.DefaultDepartment_Dropdown_Data.length; i++) {
            if (
                this.Brand_.Default_Department_Id ==
                this.DefaultDepartment_Dropdown_Data[i].Department_Id
            )
                this.DefaultDepartment_Dropdown_ = this.DefaultDepartment_Dropdown_Data[i];
        }



        this.issLoading = true;
        this.Brand_Service_.Get_Brand_Department_Edit(Brand_Id).subscribe(Rows => {
            this.Department_Data = Rows[0];
            for (var i = 0; i < this.Department_Data.length; i++) {
                if (this.Department_Data[i].Check_Box.toString() == '1') {
                    this.Department_Data[i].Check_Box = true
                }
                else {
                    this.Department_Data[i].Check_Box = false
                }
            }
            if (this.Department_Data.length == 0) {
                const dialogRef = this.dialogBox.open
                    (DialogBox_Component, {
                        panelClass: 'Dialogbox-Class'
                        , data: { Message: 'No Details Found', Type: false }
                    });
            }
            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });

    }
    Delete_Brand(Brand_, index) {
        const dialogRef = this.dialogBox.open
            (DialogBox_Component, {
                panelClass: 'Dialogbox-Class'
                , data: { Message: 'Do you want to delete ?', Type: "true", Heading: 'Confirm' }
            });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'Yes') {
                this.issLoading = true;
                this.Brand_Service_.Delete_Brand(Brand_.Brand_Id).subscribe(Delete_status => {
                    //log(Delete_status)
                    if (Number(Delete_status[0][0].Brand_Id_) > 0) {
                        this.Brand_Data.splice(this.EditIndex, 1);
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Deleted', Type: "false" } });
                        this.Entry_View = false
                        this.Search_Brand()
                    }
                    else if (Number(Delete_status[0][0].Brand_Id_) == -2) {
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Already in Use, Cannot be Deleted!', Type: "2" } });
                    } else {
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
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
    Save_Brand() {

        this.Brand_.Default_Department_Id = this.DefaultDepartment_Dropdown_.Department_Id
        this.Brand_.Default_Department_Name = this.DefaultDepartment_Dropdown_.Department_Name







        if (this.Brand_.Brand_Name == undefined || this.Brand_.Brand_Name == null || this.Brand_.Brand_Name == "") {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter The Brand Name', Type: "3" } });
        }


        else if (this.DefaultDepartment_Dropdown_ == undefined || this.DefaultDepartment_Dropdown_ == null || this.DefaultDepartment_Dropdown_.Department_Id == undefined || this.DefaultDepartment_Dropdown_.Department_Id == 0) {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Default Channel', Type: "3" } });
            return;
        }









        else {

            this.Brand_.Company = 0;

            document.getElementById("Save_Button").hidden = true;
            this.issLoading = true;

            this.Brand_Service_.Save_Brand(this.Brand_).subscribe(Save_status => {

                if (Number(Save_status[0].Brand_Id_) > 0) {

                    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
                    document.getElementById("Save_Button").hidden = false;
                    this.Clr_Brand();
                    this.Search_Brand();
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
    Edit_Brand(Brand_e: Brand, index) {

        this.Entry_View = true;
        this.Brand_Id_temp = Brand_e.Brand_Id;
        this.Brand_ = Brand_e;
        //  this.DefaultUsers_=null;
        if (Brand_e.Default_User_Id != null) {
            this.DefaultUsers_Temp.User_Details_Id = Brand_e.Default_User_Id;
            this.DefaultUsers_Temp.User_Details_Name = Brand_e.Default_User_Name;
            this.DefaultUsers_ = Object.assign({}, this.DefaultUsers_Temp);
        }
        else {
            this.DefaultUsers_.User_Details_Id = 0;
            this.DefaultUsers_.User_Details_Name = "";
        }

        // this.DefaultUsers_Data=undefined;
        this.Brand_ = Object.assign({}, Brand_e);
        this.Get_Brand_Department_Edit(this.Brand_.Brand_Id);







    }



    Load_DefaultDepartment_Dropdown() {
        this.issLoading = true;
        this.Department_Service_.Load_DefaultDepartment().subscribe(
            (Rows) => {
                if (Rows != null) {
                    this.DefaultDepartment_Dropdown_Data = Rows[0];
                    this.DefaultDepartment_Dropdown_Temp.Department_Id = 0;
                    this.DefaultDepartment_Dropdown_Temp.Department_Name = "Select";
                    this.DefaultDepartment_Dropdown_Data.unshift(this.DefaultDepartment_Dropdown_Temp);

                    this.DefaultDepartment_Dropdown_ = this.DefaultDepartment_Dropdown_Data[0];
                    this.issLoading = false;
                }
            },
            (Rows) => {
                this.issLoading = false;
            }
        );
    }




    //   Search_DefultUser_Typeahead1(event: any) {
    // 	
    // 	var Value = "";
    // 	if (event.target.value == "") Value = undefined;
    // 	else Value = event.target.value;


    // 		if (
    // 			this.DefaultUsers_Data == undefined ||
    // 			this.DefaultUsers_Data.length == 0
    // 		) {
    // 			this.issLoading = true;
    // 			
    // 			this.Department_Service_.Search_DefultUser_Typeahead().subscribe(
    // 				(Rows) => {
    // 					if (Rows != null) {
    // 							
    // 						this.DefaultUsers_Data = Rows[0];
    // 						this.issLoading = false;
    // 					}
    // 				},
    // 				(Rows) => {
    // 					this.issLoading = false;
    // 				}
    // 			);
    // 		}

    // }


    Search_DefultUser_Typeahead(event: any) {


        this.DefaultUsers_Data = [];
        var Value = "";
        if (event.target.value == "") Value = undefined;
        else Value = event.target.value;


        if (
            this.DefaultUsers_Data == undefined ||
            this.DefaultUsers_Data.length == 0
        ) {
            this.issLoading = true;

            this.Department_Service_.Search_DefultUser_Typeahead(this.Brand_Id_temp, this.DefaultDepartment_Dropdown_.Department_Id).subscribe(
                (Rows) => {
                    if (Rows != null) {

                        this.DefaultUsers_Data = Rows[0];
                        this.issLoading = false;
                    }
                },
                (Rows) => {
                    this.issLoading = false;
                }
            );
        }

    }



    // Search_DefultUser_Typeahead(event: any) {
    //     var Value = "";
    //     
    //     if (event.target.value == "") Value = "";
    //     else Value = event.target.value.toLowerCase();
    //     if (
    //         this.DefaultUsers_Data == undefined ||
    //         this.DefaultUsers_Data.length == 0
    //     ) 

    //     {


    //         this.issLoading = true;
    // 
    //         this.Department_Service_.Search_DefultUser_Typeahead(
    //             this.Brand_Id_temp

    //         ).subscribe(
    //             (Rows) => {
    //                 
    //                 if (Rows != null) {
    //                     this.DefaultUsers_Data = Rows[0];
    //                     this.issLoading = false;
    //                     this.DefaultUsers_Data_Filter = [];
    //                     for (var i = 0; i < this.DefaultUsers_Data.length; i++) {
    //                         if (
    //                             this.DefaultUsers_Data[i].User_Details_Name.toLowerCase().includes(
    //                                 Value
    //                             )
    //                         )
    //                             this.DefaultUsers_Data_Filter.push(this.DefaultUsers_Data[i]);
    //                     }
    //                 }
    //             },
    //             (Rows) => {
    //                 this.issLoading = false;
    //             }
    //         );
    //     } 

    //     else {
    //         this.DefaultUsers_Data_Filter = [];
    //         for (var i = 0; i < this.DefaultUsers_Data.length; i++) {
    //             if (
    //                 this.DefaultUsers_Data[i].User_Details_Name.toLowerCase().includes(Value)
    //             )
    //                 this.DefaultUsers_Data_Filter.push(this.DefaultUsers_Data[i]);
    //         }
    //     }
    // }





    display_Defultusers(defaultuser: User_Details) {

        if (defaultuser) {

            return defaultuser.User_Details_Name;
        }
    }


}

