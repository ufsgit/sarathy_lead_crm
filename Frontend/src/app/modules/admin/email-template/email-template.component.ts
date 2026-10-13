import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { EmailTemplateService } from "app/services/email-template.service";
import { DialogBox_Component } from "../DialogBox/DialogBox.component";
import { EmailTemplate } from "../../../models/EmailTemplate";
import { UploadedFile } from "../../../models/UploadedFile";
import * as S3 from "aws-sdk/clients/s3";
import { University_Service } from "app/services/University.Service";
import { Document } from "app/models/Document";
// import Quill from "quill";

@Component({
  selector: "app-email-template",
  templateUrl: "./email-template.component.html",
  styleUrls: ["./email-template.component.scss"],
})
export class EmailTemplateComponent implements OnInit {
  emailTemplatesData: EmailTemplate[] = [];
  emailTemplate: EmailTemplate = new EmailTemplate();
  emailTemplateSearch: string = "";
  entryView: boolean = false;
  editIndex: number;
  totalEntries: number;
  isLoading: boolean = false;
  permissions: any;
  emailTemplateEdit: boolean;
  emailTemplateSave: boolean;
  emailTemplateDelete: boolean;
  myInnerHeight: number;
  myTotalHeight: number;
  loginUser: string = "0";
  initialContent = "<p>Initial content here</p>";
  attachments: File[] = [];
  templateFields: any[];
  Documents_Data: Document[];
  Documents_Data_Temp: Document = new Document();
  Documents: File[] = []; // Array to store uploaded documents
  Documents_: Document;
  currentUserId: any;

  constructor(
    private emailTemplateService: EmailTemplateService,
    public University_Service_: University_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog
  ) {
    this.emailTemplateService
      .Get_All_Email_Template_Fields()
      .subscribe((res: any) => {
        this.templateFields = res.map((field) => ({
          label: field.field_name,
          value: `{{${field.column_name}}}`,
        }));
      });
  }

  ngOnInit() {
    this.loginUser = localStorage.getItem("Login_User") || "0";
    this.pageLoad();
  }

  pageLoad() {
    this.getMenuStatus(146, this.loginUser);
    this.adjustLayout();
    this.Get_All_DocumentNames();

    this.clearEmailTemplate();
    this.searchEmailTemplates();
    this.entryView = false;
  }

  adjustLayout() {
    this.myInnerHeight = window.innerHeight - 230;
    this.myTotalHeight = this.myInnerHeight - 290; // Adjusted UI layout height
  }

  getMenuStatus(menuId: number, loginUserId: string) {
    this.isLoading = true;
    this.emailTemplateService.Get_Menu_Status(menuId, loginUserId).subscribe(
      (rows) => {
        this.isLoading = false;
        if (!rows[0][0]) {
          if (menuId === 146) {
            localStorage.removeItem("token");
            this.router.navigateByUrl("Home_Page");
          }
        } else if (rows[0][0].View > 0) {
          this.permissions = rows[0][0];
          this.emailTemplateEdit = this.permissions.Edit;
          this.emailTemplateSave = this.permissions.Save;
          this.emailTemplateDelete = this.permissions.Delete;
        }
      },
      () => {
        this.isLoading = false;
        this.showErrorDialog("Error Occurred");
      }
    );
  }

  Get_All_DocumentNames() {
    console.log("Fetching all document names...");
    this.isLoading = true;
    this.University_Service_.Get_All_DocumentNames().subscribe(
      (Rows) => {
        console.log("Document names fetched successfully:", Rows);
        this.Documents_Data = Rows[0];
        this.Documents_Data_Temp.Document_Id = 0;
        this.Documents_Data_Temp.Document_Name = "Select";
        this.Documents_Data.unshift(this.Documents_Data_Temp);

        this.Documents_ = this.Documents_Data[0];
        this.isLoading = false;
      },
      (Rows) => {
        console.error("Error fetching document names:", Rows);
        this.isLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }
  // templateFields = [
  //   { label: "Name", value: "{{name}}" },
  //   { label: "Phone", value: "{{phone}}" },
  //   { label: "Email", value: "{{email}}" },
  //   { label: "Course", value: "{{course}}" },
  // ];
  // emailContent = '';
  // editorInstance: Quill | null = null;
  // quillModules = {
  //   toolbar: [
  //     ["bold", "italic", "underline", "strike"], // toggled buttons
  //     ["blockquote", "code-block"],

  //     [{ header: 1 }, { header: 2 }], // custom button values
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //     [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //     [{ direction: "rtl" }], // text direction

  //     [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  //     [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //     [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //     [{ font: [] }],
  //     [{ align: [] }],

  //     ["clean"], // remove formatting button

  //     ["link", "image", "video"], // link and image, video
  //   ],
  // };

  // onEditorCreated(editor: Quill) {
  //   this.editorInstance = editor;
  // }

  onFieldSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    if (value) {
      if (
        this.emailTemplate.body == undefined ||
        this.emailTemplate.body == null
      ) {
        this.emailTemplate.body = value;
      } else {
        this.emailTemplate.body = this.emailTemplate.body + value;
      }
    }
  }
  createNewTemplate() {
    this.entryView = true;
    this.clearEmailTemplate();
    console.log(this.entryView);
  }

  closeClick() {
    this.entryView = false;
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  clearEmailTemplate() {
    this.emailTemplate = new EmailTemplate();
    this.emailTemplateSearch = "";

    if (this.Documents_Data != null && this.Documents_Data != undefined)
      this.Documents_ = this.Documents_Data[0];
  }

  searchEmailTemplates() {
    this.isLoading = true;
    this.emailTemplateService
      .Get_All_Email_Templates(this.emailTemplateSearch)
      .subscribe(
        (rows) => {
          // debugger;
          this.emailTemplatesData = rows[0] || [];
          console.log("rows[0]: ", rows[0]);
          console.log("Documents_Data: ", this.Documents_Data);
          for (var i = 0; i < this.Documents_Data.length; i++) {
            if (
              this.Documents_.Document_Id == this.Documents_Data[i].Document_Id
            )
              this.Documents_ = this.Documents_Data[i];
            console.log("this.Documents_: ", this.Documents_);
          }
          this.totalEntries = this.emailTemplatesData.length;
          this.isLoading = false;

          if (this.totalEntries === 0) {
            this.showWarningDialog("No Details Found");
          }
        },
        () => {
          this.isLoading = false;
          this.showErrorDialog("Error Occurred");
        }
      );
  }

  deleteEmailTemplate(templateId: number, index: number) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: {
        Message: "Do you want to delete?",
        Type: true,
        Heading: "Confirm",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "Yes") {
        this.isLoading = true;
        this.emailTemplateService.Delete_Email_Template(templateId).subscribe(
          (deleteStatus: any) => {
            this.isLoading = false;
            if (deleteStatus.success == true) {
              this.emailTemplatesData.splice(index, 1);
              this.showSuccessDialog("Deleted");
              this.searchEmailTemplates();
            } else if (Number(deleteStatus[0][0].Template_Id_) === -2) {
              this.showErrorDialog("Already in Use, Cannot be Deleted!");
            } else {
              this.showErrorDialog("Error Occurred");
            }
          },
          () => {
            this.isLoading = false;
            this.showErrorDialog("Error Occurred");
          }
        );
      }
    });
  }

  onContentChange(content: string) {
    console.log(content);
    this.emailTemplate.body = content;
  }

  onFileSelected(event: any) {
    console.log("event: ", event);
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      // here validation added to handled for null values
      // const file = files[i];
      // if (!file || !file.name || file.size === 0) {
      //   console.warn("Invalid file detected. Skipping:", file);

      //   // Open the DialogBox_Component to show the warning message
      //   this.dialogBox.open(DialogBox_Component, {
      //     panelClass: "Dialogbox-Class",
      //     data: {
      //       Message: "Invalid file detected. Please select a valid file.",
      //       Type: "3",
      //     },
      //   });
      //   continue;
      // }
      this.attachments.push(files[i]);
    }
    console.log(" this.attachments: ", this.attachments);
  }
  //  Null attachement adding
  // addNullAttachment() {
  //   //This method is just for simulating a null attachment
  //   this.attachments.push(null as any);
  //   console.log("Attachments after adding null:", this.attachments);
  // }

  removeFile(index: number) {
    this.attachments.splice(index, 1);
  }

  saveEmailTemplate() {
    if (!this.emailTemplate.name) {
      this.showWarningDialog("Enter Template Name");
      return;
    }

    if (!this.emailTemplate.subject) {
      this.showWarningDialog("Enter Template Subject");
      return;
    }


    const hasNullAttachment = this.attachments.some(
      (attachment) => attachment === null
    );
    if (hasNullAttachment) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: "Dialogbox-Class",
        data: { Message: "The attachment is null please add valid file", Type: "3" },
      });
      return;
    }

    const bucket = new S3({
      accessKeyId: "AKIAX37YDYI4JHREVXGV",
      secretAccessKey: "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",
      region: "us-east-2",
    });

    const uploadPromises = this.attachments.map((attachment) => {
      if (attachment instanceof File) {
        return new Promise<UploadedFile>((resolve, reject) => {
          const params = {
            Bucket: "godspeedfiles",
            Key: `godspeed/template_attachment/${this.emailTemplate.name.trim()}/${attachment.name.trim()}`,
            Body: attachment,
            ACL: "public-read",
            ContentType: attachment.type,
          };

          bucket.upload(params, (err, data) => {
            if (err) {
              console.log("Error uploading file: ", err);
              reject(err);
            } else {
              resolve({ name: attachment.name, path: data.Location });
            }
          });
        });
      } else {
        return Promise.resolve(attachment as UploadedFile);
      }
    });

    Promise.all(uploadPromises)
      .then((uploadedFiles) => {
        const brevoPayload = {
          templateName: this.emailTemplate.name,
          subject: this.emailTemplate.subject,
          htmlContent: this.emailTemplate.body,
          sender: { name: "Malik UFS", email: "ufsdev123@gmail.com" },
          attachments: uploadedFiles.map((file) => ({
            name: file.name,
            url: file.path,
            file_path: file.path || "",
          })),
        };

        console.log("Payload being sent to Brevo:", brevoPayload);

        // Call Brevo API to create the template
        this.emailTemplateService.createTemplateInBrevo(brevoPayload).subscribe(
          (response: any) => {
            console.log("Template created in Brevo with ID:", response.id);
            this.activateBrevoTemplate(response.id); // here just passing the template id to template activation method.

            // payload for backend
            const backendPayload = {
              id: this.emailTemplate.id,
              name: this.emailTemplate.name,
              subject: this.emailTemplate.subject,
              body: this.emailTemplate.body,
              brevo_template_id: response.id,
              status: 1,
              Delete_Status: 0,
              created_by: this.currentUserId, // Assuming  have this property
              updated_by: this.currentUserId, // Assuming  have this property
              document_id: this.Documents_.Document_Id || null,
              document_name: this.Documents_.Document_Name || null,
              attachments: uploadedFiles.map((file) => ({
                //if it have attachements.
                name: file.name,
                path: file.path,
                file_path: file.path || "",
              })),
            };

            // Calling backend API to save the template with the Brevo ID
            this.emailTemplateService
              .Save_Email_Template(backendPayload)
              .subscribe(
                (backendResponse: any) => {
                  console.log("Template saved in backend:", backendResponse);
                  this.showSuccessDialog(
                    `Template created successfully and saved to database.`
                  );
                  this.clearEmailTemplate();
                  this.searchEmailTemplates();
                  this.entryView = false;
                },
                (backendError) => {
                  console.error(
                    "Error saving template to backend:",
                    backendError
                  );
                  this.showErrorDialog(
                    "Template created in Brevo but failed to save in database."
                  );
                }
              );
          },
          (error) => {
            console.error("Error creating template in Brevo:", error);
            this.showErrorDialog("Failed to create template in Brevo.");
          }
        );
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
        this.showErrorDialog("Error uploading files: " + error.message);
      });
  }

  activateBrevoTemplate(templateId: number) {
    const activationPayload = {
      isActive: true, // According to Brevo API docs
    };

    this.emailTemplateService
      .updateBrevoTemplateStatus(templateId, activationPayload)
      .subscribe(
        (response: any) => {
          console.log(
            `Template ${templateId} activated successfully:`,
            response
          );
        },
        (error) => {
          console.error(`Error activating template ${templateId}:`, error);
        }
      );
  }

  editEmailTemplate(template: EmailTemplate, index: number) {
    console.log("template: ", template);
    this.entryView = true;
    this.emailTemplate = { ...template };
    this.attachments = [...template.attachments];

    // Debug log to check if ID is preserved during edit
    console.log("Edit Template ID Check:", {
      originalTemplateId: template.id,
      copiedTemplateId: this.emailTemplate.id,
      templateName: template.name,
      isIdPreserved: template.id === this.emailTemplate.id,
    });

    // Set the selected document based on document_id
    const matchedDoc = this.Documents_Data.find(
      (doc) => doc.Document_Id === template.document_id
    );
    if (matchedDoc) {
      this.Documents_ = matchedDoc;
    }
  }

  private showErrorDialog(message: string) {
    this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: { Message: message, Type: "2" },
    });
  }

  private showWarningDialog(message: string) {
    this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: { Message: message, Type: "3" },
    });
  }

  private showSuccessDialog(message: string) {
    this.dialogBox.open(DialogBox_Component, {
      panelClass: "Dialogbox-Class",
      data: { Message: message, Type: "false" },
    });
  }
}
