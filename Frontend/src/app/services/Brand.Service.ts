import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Brand_Service {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    Save_Brand(Brand_) {

        return this.http.post(environment.BasePath + 'Brand/Save_Brand/', Brand_);
    }
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
    Search_Company() {

        return this.http.get(environment.BasePath + 'Brand/Search_Company/');
    }
    Load_DefaultBrand(): Observable<any> {
        return this.http.get(environment.BasePath + 'Brand/Load_DefaultBrand/');
    }

    Get_Brand_Department_Edit(Brand_Id) {
        return this.http.get(environment.BasePath + 'Brand/Get_Brand_Department_Edit/' + Brand_Id);
    }
    Search_Brand(Brand_Name, Channel_Id_): Observable<any> {
        return this.http.get(environment.BasePath + 'Brand/Search_Brand/' + Brand_Name + '/' + Channel_Id_);
    }
    Delete_Brand(Brand_Id) {
        return this.http.get(environment.BasePath + 'Brand/Delete_Brand/' + Brand_Id);
    }
    Get_Brand(Brand_Id) {
        return this.http.get(environment.BasePath + 'Brand/Get_Brand/' + Brand_Id);
    }
    Get_Menu_Status(Menu_Id_, Login_User_) {
        return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_ + '/' + Login_User_);
    }
}

