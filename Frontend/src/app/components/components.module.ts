import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';
import { EmailTemplateDialogComponent } from './email-template-dialog.component';
import { MatDialogModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DialogBoxComponent,
    EmailTemplateDialogComponent
    
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DialogBoxComponent,
    EmailTemplateDialogComponent
  ],
  entryComponents: [
    EmailTemplateDialogComponent
]
})
export class ComponentsModule { }
