import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DSE_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
   
      Save_DSE(DSE_) {

        return this.http.post(environment.BasePath + 'DSE/Save_DSE/', DSE_);
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    Search_Company() {

        return this.http.get(environment.BasePath + 'DSE/Search_Company/');
    }

    Load_DefaultDSE(): Observable<any> {
        return this.http.get(environment.BasePath + 'DSE/Load_DefaultDSE/');
    }

    
    Load_Branch()
    {
         return this.http.get(environment.BasePath + 'Location/Load_Branch/');
    }

       Load_Department()
    {
         return this.http.get(environment.BasePath + 'Location/Load_Department/');
    }
    
    Get_DSE_Department_Edit(DSE_Id) {
        return this.http.get(environment.BasePath + 'DSE/Get_DSE_Department_Edit/' + DSE_Id);
    }

    Search_DSE(DSE_Name,Barnch_Id,Department_Id): Observable<any> {
        return this.http.get(environment.BasePath + 'DSE/Search_DSE/' + DSE_Name+'/'+Barnch_Id+'/'+Department_Id);
    }

    Delete_DSE(DSE_Id) {
        return this.http.get(environment.BasePath + 'DSE/Delete_DSE/' + DSE_Id);
    }

    Get_DSE(DSE_Id) {
        return this.http.get(environment.BasePath + 'DSE/Get_DSE/' + DSE_Id);
    }

    Get_Menu_Status(Menu_Id_, Login_User_) {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_ + '/' + Login_User_);
    }
}

