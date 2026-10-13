import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Notes_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Notes(Notes_)
{
return this.http.post(environment.BasePath +'Notes/Save_Notes/',Notes_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Notes(Title_Name_):Observable<any>
{
var Search_Data={'Title_Name_':Title_Name_}
 return this.http.get(environment.BasePath +'Notes/Search_Notes/',{params:Search_Data});}
Delete_Notes(Notes_Id)
{
 return this.http.get(environment.BasePath +'Notes/Delete_Notes/'+Notes_Id);}
Get_Notes(Notes_Id)
{
 return this.http.get(environment.BasePath +'Notes/Get_Notes/'+Notes_Id);}

Get_Menu_Status(Menu_Id_,Login_User_)
{
    return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}
}

