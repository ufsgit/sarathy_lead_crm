import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notes_Service } from '../../../services/Notes.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Notes } from '../../../models/Notes';
import {MatDialog} from '@angular/material';import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';@Component({
selector: 'app-Notes',
templateUrl: './Notes.component.html',
styleUrls: ['./Notes.component.css']
})
export class NotesComponent implements OnInit {
Notes_Data:Notes[]
Notes_:Notes= new Notes();
Notes_Titile_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Notes_Edit:boolean;
Notes_Save:boolean;
Notes_Delete:boolean;
myInnerHeight: number;
Login_User:string='0';
constructor(public Notes_Service_:Notes_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{

    this.Login_User=localStorage.getItem(("Login_User"));
    
    this.Page_Load();
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 230;
this.Get_Menu_Status(129, this.Login_User);
this.Clr_Notes();
this.Search_Notes();
this.Entry_View=false;
}
Get_Menu_Status(Menu_id, Login_user_id)
{
    
this.issLoading = false;
this.Notes_Service_.Get_Menu_Status(Menu_id,Login_user_id).subscribe(Rows => {            

    
    if (Rows[0][0]==undefined)
    {
        if(Menu_id==129)
        {
        localStorage.removeItem('token');
        this.router.navigateByUrl('Home_Page');
        }
    }  
    else
    if (Rows[0][0].View >0) 
    {
        if(Menu_id==129)
        {
            this.Permissions=Rows[0][0];
            if(this.Permissions==undefined || this.Permissions==null)
                {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('Home_Page');
                }
               
                this.Notes_Edit=this.Permissions.Edit;
                this.Notes_Save=this.Permissions.Save;
                this.Notes_Delete=this.Permissions.Delete;
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
this.Clr_Notes();
}
Close_Click()
{
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_Notes()
 {
this.Notes_.Notes_Id=0;
this.Notes_.Title="";
this.Notes_.Description="";

}
Search_Notes()
{
this.issLoading=true;
this.Notes_Service_.Search_Notes(this.Notes_Titile_Search).subscribe(Rows => {
    
 this.Notes_Data=Rows[0];
this.Total_Entries=this.Notes_Data.length;
if(this.Notes_Data.length==0)
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
Delete_Notes(Notes_Id,index)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.Notes_Service_.Delete_Notes(Notes_Id).subscribe(Delete_status => {
    
if(Delete_status[0][0].Notes_Id_>0){
this.Notes_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Deleted',Type: "false"}});
this.Search_Notes();
}else if(Number(Delete_status[0][0].Notes_Id_)== -2)
{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Already in Use, Cannot be Deleted!',Type:"2"}});
}else{
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
 });
}
 });
}
Save_Notes()
{
    if (this.Notes_.Title == undefined || this.Notes_.Title == null || this.Notes_.Title == undefined || this.Notes_.Title=='') {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Title', Type: "3" } });
       return;
    }


this.issLoading=true;
this.Notes_Service_.Save_Notes(this.Notes_).subscribe(Save_status => {
    
Save_status=Save_status[0];
if(Number(Save_status[0].Notes_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Search_Notes();
this.Clr_Notes();
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
 });
}
Edit_Notes(Notes_e:Notes,index)
{
    
this.Entry_View=true;
this.Notes_=Notes_e;
this.Notes_=Object.assign({},Notes_e);
}
}

