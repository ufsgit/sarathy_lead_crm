import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class Agent_Details_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_Agent_Details(Agent_Details_)
{
     
return this.http.post(environment.BasePath +'Agent_Details/Save_Agent_Details/',Agent_Details_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_Agent_Details(Name_):Observable<any>
{
    
 return this.http.get(environment.BasePath +'Agent_Details/Search_Agent_Details/'+Name_);}


 
 Search_Agent_Details_Typeahead(Agent_Name):Observable<any>
 {
  return this.http.get(environment.BasePath +'Agent_Details/Search_Agent_Details_Typeahead/'+Agent_Name);}

 Load_Agent_Details(Agent_Name):Observable<any>
 {
  return this.http.get(environment.BasePath +'Agent_Details/Load_Agent_Details/'+Agent_Name);}

 Delete_Agent_Details(Agent_Id_)
{
 return this.http.get(environment.BasePath +'Agent_Details/Delete_Agent_Details/'+Agent_Id_);}
Get_Agent_Details(Agent_Id_)
{
 return this.http.get(environment.BasePath +'Agent_Details/Get_Agent_Details/'+Agent_Id_);}

 Get_Menu_Status(Menu_Id_,Login_User_)
 {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
}

}

