import { Component, OnInit, Input, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
        providedIn: 'root'
})
export class Enquiry_For_Service {
        constructor(private http: HttpClient) {
                const httpOptions = {
                        headers: new HttpHeaders({
                                'Content-Type': 'application/json'
                        })
                };
        } AnimationKeyframesSequenceMetadata
        Save_Enquiry_For(Enquiry_For_) {
                console.log(Enquiry_For_)
                return this.http.post(environment.BasePath + 'Enquiry_For/Save_Enquiry_For/', Enquiry_For_);
        }
        private extractData(res: Response) {
                let body = res;
                return body || {};
        }
        Search_Enquiry_For(Enquirfor_Name): Observable<any> {
                var Search_Data = { 'Enquirfor_Name': Enquirfor_Name }
                return this.http.get(environment.BasePath + 'Enquiry_For/Search_Enquiry_For/', { params: Search_Data });
        }
        Search_Enquiry_For_Typeahead(Enquiry_For_Name): Observable<any> {
                var Search_Data = { 'Enquiry_For_Name': Enquiry_For_Name }
                return this.http.get(environment.BasePath + 'Enquiry_For/Search_Enquiry_For/', { params: Search_Data });
        }

        Delete_Enquiry_For(Enquiry_For_Id) {
                return this.http.get(environment.BasePath + 'Enquiry_For/Delete_Enquiry_For/' + Enquiry_For_Id);
        }
        Get_Enquiry_For(Enquiry_For_Id) {
                return this.http.get(environment.BasePath + 'Enquiry_For/Get_Enquiry_For/' + Enquiry_For_Id);
        }


        Get_Menu_Status(Menu_Id_, Login_User_) {
                return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_ + '/' + Login_User_);
        }

}
