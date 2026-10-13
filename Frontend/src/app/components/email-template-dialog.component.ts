import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplateService } from '../services/email-template.service';
import { User_Details } from 'app/models/User_Details';
import { Student_Service } from 'app/services/Student.Service';

@Component({
    selector: 'app-email-template-dialog',
    template: `
        <div class="dialog-content">
            <!-- Header -->
            <div class="dialog-header">
                <h2 class="title">
                    <i class="fas fa-envelope icon"></i>Select Email Template
                </h2>
                <button type="button" class="close-button" (click)="onCancel()">Ã—</button>
            </div>

            <!-- Content -->
            <div class="dialog-body">
                <div *ngIf="isLoading" class="loading-spinner">
                    <div class="spinner"></div>
                </div>
   <div class="form row ml-1">
                  <label class="col-md-2 col-sm-1 col-form-label text-sm-right"
                  >To Staff</label
                >
                <div class="col-md-3 col-sm-2 mb-1">
                  <select
                    class="form-control p-0 pl-1"
                    [(ngModel)]="User_Search_Email"
                    id="User_"
                    id="simple-select"
                  >
                    <option *ngFor="let User_T of Users_Data_Email" [ngValue]="User_T">
                      {{ User_T.User_Details_Name }}
                    </option>
                  </select>
                </div>
                </div>
                <div *ngIf="!isLoading" class="template-selector">
                    <label class="input-label">Choose your email template</label>
                    <select class="select-input" 
                            (change)="onTemplateChange($event)"
                            [class.error]="showError && !selectedTemplateId">
                        <option value="">Select a template...</option>
                        <option *ngFor="let template of emailTemplates" 
                                [value]="template.id">
                            {{template.name}}
                        </option>
                    </select>
                    <div class="error-message" *ngIf="showError && !selectedTemplateId">
                        Please select a template to continue
                    </div>

                    <!-- Template Preview -->
                    <div *ngIf="selectedTemplate" class="template-preview">
                        <h5 class="preview-title">Template Preview</h5>
                        <div class="preview-content" [innerHTML]="selectedTemplate.body"></div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="dialog-footer">
                <button type="button" 
                        class="button button-secondary" 
                        (click)="onCancel()">
                    <i class="fas fa-times icon"></i>Cancel
                </button>
                <button type="button" 
                        class="button button-primary" 
                        [disabled]="!selectedTemplateId"
                        (click)="onSend()">
                    <i class="fas fa-paper-plane icon"></i>Send
                </button>
            </div>
        </div>
    `,
    styles: [`
        .dialog-content {
            max-width: 600px;
            margin: 0 auto;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            background: #fff;
            padding: 20px;
        }

        .dialog-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
            margin-bottom: 20px;
        }

        .title {
            font-size: 20px;
            color: #2c3e50;
            margin: 0;
        }

        .icon {
            margin-right: 8px;
        }

        .close-button {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            padding: 5px;
            transition: transform 0.2s;
        }

        .close-button:hover {
            transform: scale(1.1);
        }

        .loading-spinner {
            text-align: center;
            padding: 20px;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .input-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #2c3e50;
        }

        .select-input {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s ease;
            background-color: white;
        }

        .select-input:hover {
            border-color: #bbbbbb;
        }

        .select-input:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52,152,219,0.1);
        }

        .select-input.error {
            border-color: #e74c3c;
        }

        .error-message {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px;
        }

        .template-preview {
            margin-top: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            padding: 16px;
        }

        .preview-title {
            color: #2c3e50;
            font-size: 16px;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid #eee;
        }

        .preview-content {
            max-height: 200px;
            overflow-y: auto;
            padding: 15px;
            background: white;
            border-radius: 6px;
            border: 1px solid #eee;
        }

        .dialog-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }

        .button {
            padding: 10px 20px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .button-primary {
            background: #3498db;
            color: white;
        }

        .button-primary:hover:not(:disabled) {
            background: #2980b9;
            transform: translateY(-1px);
        }

        .button-secondary {
            background: #f5f6fa;
            color: #2c3e50;
        }

        .button-secondary:hover {
            background: #eceef5;
            transform: translateY(-1px);
        }
    `]
})
export class EmailTemplateDialogComponent implements OnInit {
    emailTemplates: any[] = [];
    selectedTemplateId: number;
    Users_Data_Email: User_Details[];
    Users_Data_Email_Temp: User_Details = new User_Details();
    isLoading = false;
    showError = false;
    selectedTemplate: any;
    User_Search_Email: User_Details = new User_Details();
    currentStudentId: number;
    constructor(
        public dialogRef: MatDialogRef<EmailTemplateDialogComponent>,
        public Student_Service_: Student_Service,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private emailTemplateService: EmailTemplateService
    ) {
        // Get studentId from the injected data
        this.currentStudentId = this.data.studentId;
        console.log('Dialog received studentId:', this.currentStudentId);
    }

    ngOnInit() {

        this.loadEmailTemplates();
        this.Load_SendMail_User_Dropdown();
    }

    loadEmailTemplates() {
        this.isLoading = true;
        this.emailTemplateService.Get_All_Email_Templates('').subscribe(
            (response) => {
                this.emailTemplates = response[0] || [];
                this.isLoading = false;
            },
            (error) => {
                this.isLoading = false;
                // Handle error
            }
        );
    }
    Load_SendMail_User_Dropdown() {
        this.isLoading = true;
        // debugger




        console.log('currentStudentId: ', this.currentStudentId);
        //    console.log('currentStudentId: ', currentStudentId);
        this.Student_Service_.Search_SendMail_User_Typeahead_Fllowup(
            this.currentStudentId

        ).subscribe(
            (Rows) => {
                // debugger
                if (Rows != null) {
                    this.Users_Data_Email = Rows[0];
                    console.log('Users_Data_Email: ', this.Users_Data_Email);
                    this.Users_Data_Email_Temp.User_Details_Id = 0;
                    this.Users_Data_Email_Temp.User_Details_Name = "Student";
                    this.Users_Data_Email.unshift(
                        Object.assign({}, this.Users_Data_Email_Temp)
                    );
                    this.User_Search_Email = this.Users_Data_Email[0];

                    this.isLoading = false;
                }
            },
            (Rows) => {
                this.isLoading = false;
            }
        );
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onTemplateChange(event: any) {
        const templateId = parseInt(event.target.value);
        this.selectedTemplateId = templateId;
        this.selectedTemplate = this.emailTemplates.find(t => t.id === templateId);
    }

    // Method to send email (returns data to parent component)
    onSend() {
        // debugger;
        if (!this.selectedTemplateId || !this.selectedTemplate) {
            this.showError = true;
            return;
        }

        // Return the template data and selected user info to parent component
        const result = {
            templateId: this.selectedTemplate.id,
            templateBody: this.selectedTemplate.body,
            templateSubject: this.selectedTemplate.subject,
            selectedUserId: this.User_Search_Email.User_Details_Id,
            selectedUserName: this.User_Search_Email.User_Details_Name
        };

        console.log('Dialog closing with result:', result);
        this.dialogRef.close(result);
    }

} 
