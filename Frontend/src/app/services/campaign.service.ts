import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { campaign } from '../models/campaign';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { NumberAttributeValue } from 'aws-sdk/clients/dynamodbstreams';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.BasePath}campaign`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  searchCampaign(name?: string, branchId?: number, departmentId?: number, formId?: string): Observable<campaign[]> {
    let params = new HttpParams()
      .set('campaign_name', name ? name : '')
      .set('branch_id', branchId ? String(branchId) : '0')
      .set('department_id', departmentId ? String(departmentId) : '0')
      .set('form_id', formId ? formId : '');
    
    return this.http.get<campaign[][]>(`${this.baseUrl}/search_campaign`, { params })
      .pipe(
        map((rows: campaign[][]) => rows[0])
      );
  }

  saveCampaign(campaign: campaign): Observable<any> {
    return this.http.post(`${this.baseUrl}/save_campaign`, campaign, this.httpOptions);
  }

  Delete_Campaign(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/Delete_Campaign`, { campaign_details_id: id }, this.httpOptions);
  }
  Search_Branch_Typeahead() {
    return this.http.get<any[]>(`${environment.BasePath}Branch/Search_Branch_Typeahead`);
  }

    Search_campaign_master_Typeahead() {
    return this.http.get<any[]>(`${environment.BasePath}Branch/Search_campaign_master_Typeahead`);
  }

  Search_Branch_Department_Typeahead(branchId: number) {
    return this.http.get<any[]>(`${environment.BasePath}Department/Search_Branch_Department_Typeahead/${branchId}`);
  }

  Search_Department(name: string = '') {
    return this.http.get<any[]>(`${environment.BasePath}Department/Search_Department/${name || ''}`);
  }

  get_campaigne_department_details(campaign_details_id)
  {
        return this.http.get<any[]>(`${this.baseUrl}/get_campaigne_department_details/${campaign_details_id}`);
  }

  Search_Department_User_Typeahead(branchId: number, departmentId: number) {
    return this.http.get<any[]>(`${environment.BasePath}Department/Search_Department_User_Typeahead/${branchId}/${departmentId}`);
  }

  Search_Department_Status_Typeahead(departmentId: number) {
    return this.http.get<any[]>(`${environment.BasePath}Department/Search_Department_Status_Typeahead/${departmentId}`);
  }

  Search_Enquiry_Source() {
    return this.http.get<any[]>(`${environment.BasePath}Enquiry_Source/Search_Enquiry_Source/`);
  }

  Get_Meta_Forms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/meta_forms`);
  }

  Get_Campaign_Report(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BasePath}Student/Get_Campaign_Report`);
  }
  
  
}
