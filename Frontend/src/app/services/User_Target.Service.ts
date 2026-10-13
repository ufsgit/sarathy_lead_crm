import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class User_Target_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
   
      Save_User_Target(User_Target_) {
        return this.http.post(environment.BasePath + 'user_target/Save_User_Target/', User_Target_);
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    Load_User_Month()
    {
         return this.http.get(environment.BasePath + 'user_target/Load_User_Month/');
    }
    
    Load_User_Details()
    {
         return this.http.get(environment.BasePath + 'user_target/Load_User_Details/');
    }

    Search_User_Target(User_Taget_No,User_Month_Id,User_Id): Observable<any> {
        return this.http.get(environment.BasePath + 'user_target/Search_User_Target/' + User_Taget_No+'/'+User_Month_Id+'/'+User_Id);
    }

    Delete_User_Target(User_Target_Id) {
        return this.http.get(environment.BasePath + 'user_target/Delete_User_Target/' + User_Target_Id);
    }

    Get_Menu_Status(Menu_Id_, Login_User_) {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_ + '/' + Login_User_);
    }
}

