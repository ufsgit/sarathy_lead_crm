import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Status_Duration_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    
    Save_Department_Status_Duration(Status_Duration_) {

        return this.http.post(environment.BasePath + 'Status_Duration/Save_Department_Status_Duration/', Status_Duration_);
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    Load_Branch()
    {
         return this.http.get(environment.BasePath + 'Location/Load_Branch/');
    }

    Load_Department()
    {
         return this.http.get(environment.BasePath + 'Location/Load_Department/');
    }

    Search_Department_Status_Duration(Department_Id,Department_Status_Id,Status_Duration_Name): Observable<any> {
        return this.http.get(environment.BasePath + 'Status_Duration/Search_Department_Status_Duration/' 
            + Department_Id+'/'+Department_Status_Id+'/'+Status_Duration_Name);
    }

    Delete_Department_Status_Duration(Department_Status_Duration_Id) {
        return this.http.get(environment.BasePath + 'Status_Duration/Delete_Department_Status_Duration/' + Department_Status_Duration_Id);
    }
 
    Get_Menu_Status(Menu_Id_, Login_User_) {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_ + '/' + Login_User_);
    }
}

