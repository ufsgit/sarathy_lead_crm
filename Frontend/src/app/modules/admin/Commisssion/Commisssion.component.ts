import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Fees} from '../../../models/Fees';

import { Fees_Service } from '../../../services/Fees.service';
import { Student_Service } from '../../../services/Student.Service';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';import { Commission } from 'app/models/Commission';
@Component({
selector: 'app-Commisssion',
templateUrl: './Commisssion.component.html',
styleUrls: ['./Commisssion.component.css']
})
export class CommisssionComponent implements OnInit {
Fees_Data:Fees[]
Commmission_Data:Commission[];
Fees_:Fees= new Fees();
Commmission_:Commission = new Commission();
Fees_Name_Search:string;
Commmission_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Commmission_Edit:boolean;
Commmission_Save:boolean;
Commmission_Delete:boolean;
myInnerHeight: number;
myTotalHeight:number;

Login_User:string="0";


constructor(public Fees_Service_:Fees_Service,public Student_Service_:Student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
    this.Login_User=localStorage.getItem(("Login_User"));

// this.Permissions = Get_Page_Permission(29);
// if(this.Permissions==undefined || this.Permissions==null)
// {
// localStorage.removeItem('token');
// this.router.navigateByUrl('Home_Page');
// }
// else
{
// this.Fees_Edit=this.Permissions.Edit;
// this.Fees_Save=this.Permissions.Save;
// this.Fees_Delete=this.Permissions.Delete;
this.Page_Load()
}
}
Page_Load()
{
    
    this.Get_Menu_Status(144,this.Login_User); 

this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 230;
this.Clr_Fees();
this.Search_Commmission();
this.Entry_View=false;
// this.Get_Menu_Status()
this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight=this.myInnerHeight - 230;
    this.myTotalHeight=this.myTotalHeight-55;
    this.myInnerHeight = this.myInnerHeight - 230;


}

Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Student_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
    }  
    else
    if (Rows[0][0].View >0) 
    {
        
        
        if(Menu_id==144)
        {
            
           

            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
                this.Commmission_Edit=this.Permissions.Edit;
                this.Commmission_Save=this.Permissions.Save;
                this.Commmission_Delete=this.Permissions.Delete;
        }

    }
},
Rows => {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
});
}

Create_New()
{
this.Entry_View = true;
this.Clr_Fees();
}
Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}

 Clr_Fees()
 {
this.Fees_.Fees_Id=0;
this.Fees_.Fees_Name="";


}

Clr_Commmission()
{
    this.Commmission_.Commission_Id=0;
this.Commmission_.Commission_Name="";


}
Search_Commmission() {
    this.issLoading = true;
    this.Fees_Service_.Search_Commmission(this.Commmission_Name_Search).subscribe(
        (Rows) => {
            this.Commmission_Data = Rows[0];
            this.Total_Entries = this.Commmission_Data.length;

            if (this.Commmission_Data.length == 0) {
                this.issLoading = false;
                const dialogRef = this.dialogBox.open(DialogBox_Component, {
                    panelClass: 'Dialogbox-Class',
                    data: { Message: 'No Details Found', Type: "3" }
                });
            }

            this.issLoading = false;
        },
        (error) => {
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, {
                panelClass: 'Dialogbox-Class',
                data: { Message: 'Error Occurred', Type: "2" }
            });
        }
    );
}

Search_Fees()
{
    
this.issLoading=true;
this.Fees_Service_.Search_Fees(this.Fees_Name_Search).subscribe(Rows => {
    
 this.Fees_Data=Rows[0];
this.Total_Entries=this.Fees_Data.length;
if(this.Fees_Data.length==0)
{
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'No Details Found',Type:"3"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 });
}
Delete_Commission(Commission_Id: number, index: number) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: 'Dialogbox-Class',
        data: { Message: 'Do you want to delete?', Type: true, Heading: 'Confirm' }
    });

    this.Search_Commmission();
    
    dialogRef.afterClosed().subscribe(result => {
        if (result == 'Yes') {
            this.issLoading = true;
            this.Fees_Service_.Delete_Commission_page(Commission_Id).subscribe(Delete_status => {

                if (Delete_status[0][0].Commission_Id_ > 0) {
                    this.Commmission_Data.splice(index, 1);
                    this.dialogBox.open(DialogBox_Component, {
                        panelClass: 'Dialogbox-Class',
                        data: { Message: 'Deleted', Type: "false" }
                    });
                    this.Search_Commmission();
                } else if (Number(Delete_status[0][0].Commission_Id_) == -2) {
                    this.dialogBox.open(DialogBox_Component, {
                        panelClass: 'Dialogbox-Class',
                        data: { Message: 'Already in Use, Cannot be Deleted!', Type: "2" }
                    });
                } else {
                    this.dialogBox.open(DialogBox_Component, {
                        panelClass: 'Dialogbox-Class',
                        data: { Message: 'Error Occurred', Type: "2" }
                    });
                }
                this.issLoading = false;
            },
            error => {
                this.issLoading = false;
                this.dialogBox.open(DialogBox_Component, {
                    panelClass: 'Dialogbox-Class',
                    data: { Message: 'Error Occurred', Type: "2" }
                });
            });
        }
    });
}

    Save_Fees()
    {
        if(this.Fees_.Fees_Name== undefined || this.Fees_.Fees_Name == null || this.Fees_.Fees_Name == undefined || this.Fees_.Fees_Name=='') {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Fees Name', Type: "3" } });
               return;
            }
        
    this.issLoading=true;

    this.Fees_Service_.Save_Fees(this.Fees_).subscribe(Save_status => {
        
    //Save_status=Save_status[0];
    if(Number(Save_status[0][0].Fees_Id_)>0)
    {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.Search_Fees();
    this.Clr_Fees();
    }
    else{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter Fees Name',Type:"2"}});
    }
    this.issLoading=false;
    },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error,Type:"2"}});
 });
 
}

Save_Commmission() {
    // Check if Commission Name is entered
    if(this.Commmission_.Commission_Name === undefined || 
       this.Commmission_.Commission_Name === null || 
       this.Commmission_.Commission_Name === '' ) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { 
            panelClass: 'Dialogbox-Class', 
            data: { Message: 'Enter Commission Name', Type: "3" } 
        });
        return;
    }

    this.issLoading = true;

    // Call Save_Commmission API
    this.Fees_Service_.Save_Commmission(this.Commmission_).subscribe(
        Save_status => {
            console.log('Save_status: ', Save_status);
            if (Number(Save_status[0][0].Commission_Id_) > 0) {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { 
                    panelClass: 'Dialogbox-Class', 
                    data: { Message: 'Saved', Type: "false" }
                });
                 this.Search_Commmission(); // Assuming you have a method to search the commission list
                 this.Clr_Commmission(); // Clear the form data
            } else {
                const dialogRef = this.dialogBox.open(DialogBox_Component, { 
                    panelClass: 'Dialogbox-Class', 
                    data: { Message: 'Error saving Commission', Type: "2" } 
                });
            }
            this.issLoading = false;
        },
        Rows => { 
            this.issLoading = false;
            const dialogRef = this.dialogBox.open(DialogBox_Component, { 
                panelClass: 'Dialogbox-Class', 
                data: { Message: Rows.error, Type: "2" }
            });
        }
    );
}

Edit_Fees(Fees_e:Fees,index)
{
   
this.Entry_View=true;
this.Fees_=Fees_e;
this.Fees_=Object.assign({},Fees_e);
}
Edit_Commission(Commission_e: any, index: number) {
    this.Entry_View = true;
    this.Commmission_ = Object.assign({}, Commission_e);
}

}




