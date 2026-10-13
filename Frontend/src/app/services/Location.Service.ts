import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Location_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    
    Save_Location(Location_) {

        return this.http.post(environment.BasePath + 'Location/Save_Location/', Location_);
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

    Load_DepartmentStatus()
    {
         return this.http.get(environment.BasePath + 'Location/Load_Department_Status/');
    }

    Search_Location(Location_Name,Barnch_Id,Department_Id): Observable<any> {
        return this.http.get(environment.BasePath + 'Location/Search_Location/' + Location_Name+'/'+Barnch_Id+'/'+Department_Id);
    }

    Delete_Location(Location_Id) {
        return this.http.get(environment.BasePath + 'Location/Delete_Location/' + Location_Id);
    }
 
    Get_Menu_Status(Menu_Id_, Login_User_) {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_ + '/' + Login_User_);
    }
}

