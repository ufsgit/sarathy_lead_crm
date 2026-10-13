import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailTemplateService {

  constructor(private http: HttpClient) {}

  Get_All_Email_Templates(searchTerm: string = '') { 
    return this.http.get(environment.BasePath + 'Email_Template/Get_All_Email_Templates/', {
      params: { name: searchTerm }
    });
  }

  Get_All_Email_Template_Fields() 
  { 
  return this.http.get(environment.BasePath +'Email_Template/Get_All_Email_Template_Fields/');
  }

    Get_Menu_Status(Menu_Id_,Login_User_)
    {
          return this.http.get(environment.BasePath + 'Student/Get_Menu_Status/' + Menu_Id_+'/'+Login_User_);
  }

  Delete_Email_Template(templateId: number) {
    return this.http.delete(environment.BasePath + `Email_Template/Delete_Email_Template/${templateId}`);
  }

  Save_Email_Template(templateData: any) {
    return this.http.post(environment.BasePath + 'Email_Template/Save_Email_Template', templateData);
  }

  createTemplateInBrevo(templateData: any) {
    const apiKey = "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";
    const url = 'https://api.brevo.com/v3/smtp/templates';

    // Ensure the templateData contains all required fields and handle null values
    if (!templateData.name || templateData.name.trim() === '') {
        templateData.name = 'Default Template Name'; // Provide a default name if missing
    }

    if (!templateData.subject || templateData.subject.trim() === '') {
        templateData.subject = 'Default Subject'; // Provide a default subject if missing
    }

    if (!templateData.htmlContent || templateData.htmlContent.trim() === '') {
        templateData.htmlContent = '<p>Default HTML Content</p>'; // Provide default HTML content if missing
    }

    console.log("Payload being sent to Brevo:", templateData);

    return this.http.post(url, templateData, {
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  
updateBrevoTemplateStatus(templateId: number, payload: any) {
  const apiKey = "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";
  const url = `https://api.brevo.com/v3/smtp/templates/${templateId}`;

  return this.http.put(url, payload, {
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
  });
}
  
}
