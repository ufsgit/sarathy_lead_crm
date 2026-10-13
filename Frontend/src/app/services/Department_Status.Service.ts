import { Component, OnInit, Input, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.js";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class Department_Status_Service {
  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }
  AnimationKeyframesSequenceMetadata;
  Save_Department_Status(Department_Status_) {
    return this.http.post(
      environment.BasePath + "Department_Status/Save_Department_Status/",
      Department_Status_
    );
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  Search_Department_Status(Department_Status_Name): Observable<any> {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Search_Department_Status/" +
        Department_Status_Name
    );
  }
  Delete_Department_Status(Department_Status_Id) {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Delete_Department_Status/" +
        Department_Status_Id
    );
  }
  Get_Department_Status(Department_Status_Id) {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Get_Department_Status/" +
        Department_Status_Id
    );
  }

  Get_Menu_Status(Menu_Id_, Login_User_) {
    return this.http.get(
      environment.BasePath +
        "Student/Get_Menu_Status/" +
        Menu_Id_ +
        "/" +
        Login_User_
    );
  }

  Get_Sub_Status(Department_Status_Id) {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Get_Sub_Status/" +
        Department_Status_Id
    );
  }

  Save_Sub_Status(Sub_Status_) {
    return this.http.post(
      environment.BasePath + "Department_Status/Save_Sub_Status/",
      Sub_Status_
    );
  }

  Delete_Sub_Status(Sub_Status_Id) {
    return this.http.get(
      environment.BasePath +
        "Department_Status/Delete_Sub_Status/" +
        Sub_Status_Id
    );
  }

  Load_StatusType(): Observable<any> {
    return this.http.get(environment.BasePath + "Department/Load_StatusType/");
  }

  Get_Email_Template_List(): Observable<any> {
    return this.http.get(
      environment.BasePath + "Department_Status/Get_Email_Template_List/"
    );
  }
}
