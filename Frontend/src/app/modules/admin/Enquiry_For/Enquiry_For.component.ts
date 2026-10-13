import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Enquiry_For } from '../../../models/Enquiry_For';
import { Enquiry_For_Service } from '../../../services/Enquiry_For.Service';

import { MatDialog } from '@angular/material';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component'; @Component({
    selector: 'app-Enquiry_For',
    templateUrl: './Enquiry_For.component.html',
    styleUrls: ['./Enquiry_For.component.css']
})
export class Enquiry_ForComponent implements OnInit {
    Enquiry_For_Data: Enquiry_For[]
    Enquiry_For_: Enquiry_For = new Enquiry_For();

    Enquiry_For_Name_Search: string;


    Entry_View: boolean = true;
    EditIndex: number;
    Total_Entries: number;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    issLoading: boolean;
    Permissions: any;
    Enquiry_For_Edit: boolean;
    Enquiry_For_Save: boolean;
    Enquiry_For_Delete: boolean;
    myInnerHeight: number;
    myTotalHeight: number;

    Login_User: string = "0";

    constructor(public Enquiry_For_Service_: Enquiry_For_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }
    ngOnInit() {
        this.Login_User = localStorage.getItem(("Login_User"));

        // this.Permissions = Get_Page_Permission(20);
        // if(this.Permissions==undefined || this.Permissions==null)
        // {
        // localStorage.removeItem('token');
        // this.router.navigateByUrl('Home_Page');
        // }
        // else
        {
            // this.Enquiry_For_Edit = this.Permissions.Edit;
            // this.Enquiry_For_Save = this.Permissions.Save;
            // this.Enquiry_For_Delete = this.Permissions.Delete;
            this.Page_Load()
        }
    }
    Page_Load() {
        // debugger
        this.myInnerHeight = (window.innerHeight);
        this.myInnerHeight = this.myInnerHeight - 250;
        this.Clr_Enquiry_For();
        this.Get_Menu_Status(160, this.Login_User);

        this.Search_Enquiry_For();
        this.Entry_View = false;

        this.myInnerHeight = (window.innerHeight);
        this.myTotalHeight = this.myInnerHeight - 200;
        this.myTotalHeight = this.myTotalHeight - 90;
        this.myInnerHeight = this.myInnerHeight - 230;
    }

    Get_Menu_Status(Menu_id, Login_user_id) {
        // debugger
        this.issLoading = true;
        this.Enquiry_For_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(Rows => {
            // debugger

            if (Rows[0][0] == undefined) {
                if (Menu_id == 160) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
            }
            else
                if (Rows[0][0].View > 0) {

                    // debugger
                    if (Menu_id == 160) {



                        this.Permissions = Rows[0][0];
                        if (this.Permissions == undefined || this.Permissions == null) {
                            localStorage.removeItem('token');
                            this.router.navigateByUrl('Home_Page');
                        }
                        this.Enquiry_For_Edit = this.Permissions.Edit;
                        this.Enquiry_For_Save = this.Permissions.Save;
                        this.Enquiry_For_Delete = this.Permissions.Delete;

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
        this.Clr_Enquiry_For();
    }
    Close_Click() {
        this.Entry_View = false;

    }
    trackByFn(index, item) {
        return index;
    }

    Clr_Enquiry_For() {
        this.Enquiry_For_.Enquiryfor_Id = 0;
        this.Enquiry_For_.Enquirfor_Name = "";


    }
    Search_Enquiry_For() {
        this.issLoading = true;
        // debugger
        this.Enquiry_For_Service_.Search_Enquiry_For(this.Enquiry_For_Name_Search).subscribe(Rows => {
            // debugger
            this.Enquiry_For_Data = Rows[0];
            this.Total_Entries = this.Enquiry_For_Data.length;
            if (this.Enquiry_For_Data.length == 0) {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open
                    (DialogBox_Component, {
                        panelClass: 'Dialogbox-Class'
                        , data: { Message: 'No Details Found', Type: "3" }
                    });
            }
            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            });
    }
    Delete_Enquiry_For(Enquiry_For_Id, index) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Do you want to delete ?', Type: true, Heading: 'Confirm' } });
        this.Search_Enquiry_For();
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'Yes') {
                this.issLoading = true;
                this.Enquiry_For_Service_.Delete_Enquiry_For(Enquiry_For_Id).subscribe(Delete_status => {
                    if (Number(Delete_status[0][0].Enquiry_For_Id_) > 0) {
                        this.Enquiry_For_Data.splice(this.EditIndex, 1);
                        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Deleted', Type: "false" } });
                        this.Search_Enquiry_For();
                    } else if (Number(Delete_status[0][0].Enquiry_For_Id_) == -2) {
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
    Save_Enquiry_For() {

        if (this.Enquiry_For_.Enquirfor_Name == undefined || this.Enquiry_For_.Enquirfor_Name == null || this.Enquiry_For_.Enquirfor_Name == undefined || this.Enquiry_For_.Enquirfor_Name == '') {
            const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Enquiry for', Type: "3" } });
            return;
        }

        this.issLoading = true;
        // debugger
        this.Enquiry_For_Service_.Save_Enquiry_For(this.Enquiry_For_).subscribe(Save_status => {
            // debugger
            Save_status = Save_status[0];
            if (Number(Save_status[0].Enquiry_For_Id_) > 0) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Saved', Type: "false" } });
                this.Clr_Enquiry_For();
                this.Entry_View = false;
                this.Search_Enquiry_For();

            }
            else {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
            }
            this.issLoading = false;
        },
            Rows => {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: Rows.error, Type: "2" } });
            });

    }
    Edit_Enquiry_For(Enquiry_For_e: Enquiry_For, index) {
        // debugger;
        this.Entry_View = true;
        this.Enquiry_For_ = Enquiry_For_e;
        this.Enquiry_For_ = Object.assign({}, Enquiry_For_e);
        // debugger;
    }
}



