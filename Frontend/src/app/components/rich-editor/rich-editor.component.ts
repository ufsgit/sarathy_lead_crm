import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailTemplateService } from 'app/services/email-template.service';
interface TemplateField {
  id: number;
  table_name: string;
  column_name: string;
  field_name: string;
  Delete_Status: number;
}

@Component({
  selector: 'app-rich-editor',
  templateUrl: './rich-editor.component.html',
  styles: [`
    :host ::ng-deep .tox-tinymce {
      min-height: 400px;
    }
  `]
})
export class RichEditorComponent implements OnInit {
  @Input() initialContent: string = '';
  @Input() templateFields: TemplateField[] = [];
  @Output() contentChange = new EventEmitter<string>();

  form: FormGroup;
  editor: any;

  editorConfig = {
    height: 500,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'insertfield | formatgroup | insertgroup | aligngroup | lists | removeformat | help',
    toolbar_groups: {
      formatgroup: {
        text: 'Formatting',
        items: 'formatselect | bold italic backcolor forecolor'
      },
      insertgroup: {
        text: 'Insert',
        items: 'link image media table'
      },
      aligngroup: {
        text: 'Align',
        items: 'alignleft aligncenter alignright alignjustify'
      },
      lists: {
        text: 'Lists',
        items: 'bullist numlist outdent indent'
      }
    },
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    font_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n',
    fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tiny.cloud/css/codepen.min.css'
    ],
    setup: (editor) => {
      editor.ui.registry.addMenuButton('insertfield', {
        text: 'Insert Template Field',
        fetch: (callback) => {
          const items = this.templateFields
            .sort((a, b) => a.field_name.localeCompare(b.field_name))
            .map(field => ({
              type: 'menuitem',
              text: field.field_name,
              onAction: () => {
                editor.insertContent(
                  `<span class="template-field" data-column="${field.column_name}" data-field-id="${field.id}">{{${field.id}}}</span>`
                );
              }
            }));
          callback(items);
        }
      });

      editor.on('change', () => {
        let content = editor.getContent();
        this.contentChange.emit(content);
      });

      // When loading content, keep it as is since we want to preserve the metadata
      editor.on('SetContent', (e) => {
      });
    }
  };

  constructor(private formBuilder: FormBuilder,private EmailTemplateService:EmailTemplateService) {
    this.EmailTemplateService.Get_All_Email_Template_Fields().subscribe((res: any) => {
      this.templateFields = res;
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      editor: [this.initialContent || '', Validators.required]
    });

    this.form.get('editor').valueChanges.subscribe(content => {
      this.contentChange.emit(content);
    });
  }

  onInit(event: any) {
    this.editor = event.editor;
  }

  getContent(): string {
    return this.form.get('editor').value || '';
  }

  setContent(content: string) {
    this.form.patchValue({ editor: content });
  }
}
