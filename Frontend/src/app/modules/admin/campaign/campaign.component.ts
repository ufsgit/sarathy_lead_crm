import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { campaign } from '../../../models/campaign';
import { Enquiry_Source } from '../../../models/Enquiry_Source';
import { Branch } from '../../../models/Branch';
import { campaign_master } from '../../../models/campaign_master';
import { Department } from '../../../models/Department';
import { Department_Status } from '../../../models/Department_Status';
import { User_Details } from '../../../models/User_Details';

import { Campaign_Department_Users } from '../../../models/Campaign_Department_Users';
import { CampaignService } from '../../../services/campaign.service';
import { Student_Service } from '../../../services/Student.Service';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class campaignComponent implements OnInit {
  // Data properties 
  campaignData: campaign[] = [];
  campaign: campaign = new campaign();
  campaignNameSearch: string = '';
  campaign_name_Search: string = '';

  // Search Filters
  Search_Branch_: Branch = null;
  Search_Branch_Data_Filter: Branch[] = [];
  Search_Department_: Department = null;
  Search_Department_Data: Department[] = [];
  Search_Department_Data_Filter: Department[] = [];
  Search_Form_: any = null;
  Search_Form_Data_Filter: any[] = [];

  // State properties
  Entry_View: boolean = false;
  editIndex: number;
  totalEntries: number = 0;
  isLoading: boolean = false;
  permissions: any;

  // User access flags
  campaignEdit: boolean = false;
  campaignSave: boolean = false;
  campaignDelete: boolean = false;

  // UI Properties
  myInnerHeight: number;
  myTotalHeight: number;

  // Dropdown data
  loginUser: string = "0";
  userList: any[] = [];
  departmentList: any[] = [];
  statusList: any[] = [];
  enquiryList: any[] = [];
  branchList: any[] = [];
  metaForms: any[] = [];

  Enquiry_Source_: Enquiry_Source = new Enquiry_Source();
  Enquiry_Source_Temp: Enquiry_Source = new Enquiry_Source();
  Enquiry_Source_Data: Enquiry_Source[];

  Branch_: Branch = new Branch();
  Branch_Temp: Branch = new Branch();
  Branch_Data: Branch[];

  campaign_master_: campaign_master = new campaign_master();
  campaign_master_Temp: campaign_master = new campaign_master();
  campaign_master_Data: campaign_master[];

  Department_: Department = new Department();
  Department_Temp: Department = new Department();
  Department_Data: Department[];

  Department_Status_: Department_Status = new Department_Status();
  Department_Status_Temp: Department_Status = new Department_Status();
  Department_Status_Data: Department_Status[];
  Department_Status_Edit_Id: any;
  Department_User_Edit_Id: any;

  User_Details_: User_Details = new User_Details();
  User_Details_Temp: User_Details = new User_Details();
  User_Details_Data: User_Details[];

  Campaign_Department_Users_Index: number = 0;
  Campaign_Department_Users_: Campaign_Department_Users = new Campaign_Department_Users();
  Campaign_Department_Users_Data: Campaign_Department_Users[];

  constructor(
    private campaignService: CampaignService,
    private studentService: Student_Service,
    private route: ActivatedRoute,
    private router: Router,
    public dialogBox: MatDialog
  ) { }

  ngOnInit() {
    
    this.loginUser = localStorage.getItem("Login_User") || "0";
    
    this.loadEnquirySources();
    
    this.loadBranches();
    
    this.loadcampaign_master();
    
    this.loadMetaForms();
    
    this.loadSearchDepartments(0);

    this.pageLoad();
    
  }

  loadMetaForms() {
      
    this.campaignService.Get_Meta_Forms().subscribe(
      data => {
          
        this.metaForms = data;
        this.Search_Form_Data_Filter = (this.metaForms || []).slice();
      },
      err => {
        console.error('Error loading meta forms', err);
      }
    );
  }

  onMetaFormChange() {
    if (this.campaign.form_id && this.metaForms && this.metaForms.length > 0) {
      const selectedForm = this.metaForms.find(f => String(f.id) === String(this.campaign.form_id));
      if (selectedForm) {
        this.campaign.form_name = selectedForm.name;
      }
    } else {
      this.campaign.form_name = null;
    }
  }

  pageLoad() {
    this.getMenuStatus(151, this.loginUser);
    this.calculateHeights();
    this.clearCampaign();
    this.searchCampaign();
    this.Entry_View = false;
  }

  calculateHeights() {
    this.myInnerHeight = window.innerHeight - 230;
    this.myTotalHeight = this.myInnerHeight - 55;
  }

  loadEnquirySources() {
    this.isLoading = true;
      
    this.campaignService.Search_Enquiry_Source().subscribe(
      data => {
          
        this.Enquiry_Source_Data = data[0];
        const metaSource = this.Enquiry_Source_Data.find(s => s.Enquiry_Source_Name === 'META');
        if (metaSource) {
          this.Enquiry_Source_ = metaSource;
        } else {
          this.Enquiry_Source_Temp.Enquiry_Source_Id = 0;
          this.Enquiry_Source_Temp.Enquiry_Source_Name = "META";
          this.Enquiry_Source_Data.unshift(this.Enquiry_Source_Temp);
          this.Enquiry_Source_ = this.Enquiry_Source_Data[0];
        }
        this.isLoading = false;
      },
      err => {
        console.error('Error loading enquiry sources', err);
        this.isLoading = false;
        this.showErrorDialog('Error loading enquiry sources');
      }
    );
  }

  loadBranches() {
      
    this.isLoading = true;
    this.campaignService.Search_Branch_Typeahead().subscribe(
      data => {
          
        this.Branch_Data = data[0];
        this.Branch_Temp.Branch_Id = 0;
        this.Branch_Temp.Branch_Name = "Select";
        this.Branch_Data.unshift(this.Branch_Temp);
        this.Branch_ = this.Branch_Data[0];
        this.Search_Branch_Data_Filter = this.Branch_Data.filter(b => b && b.Branch_Id > 0);
        this.isLoading = false;
      },
      err => {
        console.error('Error loading branches', err);
        this.isLoading = false;
        this.showErrorDialog('Error loading branches');
      }
    );
  }

  loadcampaign_master() {
      
    this.isLoading = true;
    this.campaignService.Search_campaign_master_Typeahead().subscribe(
      data => {
          
        this.campaign_master_Data = data[0];
        this.campaign_master_Temp.Campaign_Master_Id = 0;
        this.campaign_master_Temp.Campaign_Master_Name = "Select";
        this.campaign_master_Data.unshift(this.campaign_master_Temp);
        this.campaign_master_ = this.campaign_master_Data[0];
        this.isLoading = false;
      },
      err => {
        console.error('Error loading branches', err);
        this.isLoading = false;
        this.showErrorDialog('Error loading branches');
      }
    );
  }


  getMenuStatus(menuId: number, loginUserId: string) {
    
    this.isLoading = true;
    this.studentService.Get_Menu_Status(menuId, loginUserId).subscribe(
      rows => {
          
        if (rows[0][0] === undefined) {
          this.handleSessionExpired();
        } else if (rows[0][0].View > 0) {
          this.permissions = rows[0][0];
          if (!this.permissions) {
            this.handleSessionExpired();
          }
          this.campaignEdit = this.permissions.Edit;
          this.campaignSave = this.permissions.Save;
          this.campaignDelete = this.permissions.Delete;
        }
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.showErrorDialog('Error Occurred');
      }
    );
  }

  handleSessionExpired() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('Home_Page');
  }

  createNew() {
    this.Entry_View = true;
    this.clearCampaign();
  }

  closeClick() {
    this.Entry_View = false;
  }

  clearCampaign() {
    this.campaign = new campaign();
    this.Campaign_Department_Users_Data = [];
    this.Branch_Temp.Branch_Id = 0;
    this.Branch_Temp.Branch_Name = "Select";
    this.Branch_ = this.Branch_Temp;

    const metaSource = this.Enquiry_Source_Data ? this.Enquiry_Source_Data.find(s => s.Enquiry_Source_Name === 'META') : null;
    if (metaSource) {
      this.Enquiry_Source_ = metaSource;
    } else {
      this.Enquiry_Source_Temp.Enquiry_Source_Id = 0;
      this.Enquiry_Source_Temp.Enquiry_Source_Name = "META";
      this.Enquiry_Source_ = this.Enquiry_Source_Temp;
    }

    this.campaign_master_ = new campaign_master();
    this.campaign_master_Temp.Campaign_Master_Id = 0;
    this.campaign_master_Temp.Campaign_Master_Name = "Select";
    this.campaign_master_ = this.campaign_master_Temp;

    this.Department_ = new Department();
    this.User_Details_ = new User_Details();
    this.Department_Status_ = new Department_Status();

  }

  loadSearchDepartments(branchId: number = 0) {
    if (branchId > 0) {
      this.campaignService.Search_Branch_Department_Typeahead(branchId).subscribe(
        data => {
          this.Search_Department_Data = data && data[0] ? data[0] : [];
          this.Search_Department_Data_Filter = this.Search_Department_Data.filter(d => d && d.Department_Id > 0);
        },
        err => console.error('Error loading branch departments', err)
      );
    } else {
      this.campaignService.Search_Department('').subscribe(
        data => {
          this.Search_Department_Data = data && data[0] ? data[0] : [];
          this.Search_Department_Data_Filter = this.Search_Department_Data.filter(d => d && d.Department_Id > 0);
        },
        err => console.error('Error loading all departments', err)
      );
    }
  }

  Search_Branch_Typeahead(event: any) {
    const val = (event && event.target && event.target.value != null ? event.target.value : '').toLowerCase().trim();
    const source = (this.Branch_Data || []).filter(b => b && b.Branch_Id > 0);
    if (!val) {
      this.Search_Branch_Data_Filter = source;
    } else {
      this.Search_Branch_Data_Filter = source.filter(b => b.Branch_Name && b.Branch_Name.toLowerCase().includes(val));
    }
  }

  display_Branch(branch: Branch) {
    return branch ? branch.Branch_Name : '';
  }

  onSearchBranchChange() {
    this.Search_Department_ = null;
    if (this.Search_Branch_ && this.Search_Branch_.Branch_Id > 0) {
      this.loadSearchDepartments(this.Search_Branch_.Branch_Id);
    } else {
      this.loadSearchDepartments(0);
    }
  }

  Search_Department_Typeahead(event: any) {
    const val = (event && event.target && event.target.value != null ? event.target.value : '').toLowerCase().trim();
    const source = (this.Search_Department_Data || []).filter(d => d && d.Department_Id > 0);
    if (!val) {
      this.Search_Department_Data_Filter = source;
    } else {
      this.Search_Department_Data_Filter = source.filter(d => d.Department_Name && d.Department_Name.toLowerCase().includes(val));
    }
  }

  display_Department(dept: Department) {
    return dept ? dept.Department_Name : '';
  }

  Search_Form_Typeahead(event: any) {
    const val = (event && event.target && event.target.value != null ? event.target.value : '').toLowerCase().trim();
    const source = (this.metaForms || []).slice();
    if (!val) {
      this.Search_Form_Data_Filter = source;
    } else {
      this.Search_Form_Data_Filter = source.filter(f => {
        const name = (f.name || f.form_name || '').toLowerCase();
        return name.includes(val);
      });
    }
  }

  display_Form(form: any) {
    return form ? (form.name || form.form_name || '') : '';
  }

  clearFilters() {
    this.campaign_name_Search = '';
    this.Search_Branch_ = null;
    this.Search_Department_ = null;
    this.Search_Form_ = null;
    this.loadSearchDepartments(0);
    this.searchCampaign();
  }

  searchCampaign() {
    this.isLoading = true;
    const query = this.campaign_name_Search || this.campaignNameSearch || '';
    const branchId = (this.Search_Branch_ && this.Search_Branch_.Branch_Id) ? this.Search_Branch_.Branch_Id : 0;
    const departmentId = (this.Search_Department_ && this.Search_Department_.Department_Id) ? this.Search_Department_.Department_Id : 0;
    let formId = '';
    if (this.Search_Form_) {
      formId = this.Search_Form_.id || this.Search_Form_.form_id || '';
      if (!formId && typeof this.Search_Form_ === 'string') {
        const matched = (this.metaForms || []).find(f => (f.name || f.form_name || '').toLowerCase() === this.Search_Form_.toLowerCase().trim());
        formId = matched ? (matched.id || matched.form_id) : this.Search_Form_;
      }
    }

    this.campaignService.searchCampaign(query, branchId, departmentId, formId).subscribe(
      rows => {
        this.campaignData = rows || [];
        console.log('rows: ', this.campaignData);
        this.totalEntries = this.campaignData.length;
        if (this.campaignData.length === 0) {
          this.showInfoDialog('No Details Found');
        }
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.showErrorDialog('Error Occurred');
      }
    );
  }

  Delete_Campaign(campaign_details_id: number, index: number) {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: 'Dialogbox-Class',
      data: { Message: 'Do you want to delete?', Type: true, Heading: 'Confirm' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.isLoading = true;
        this.campaignService.Delete_Campaign(campaign_details_id).subscribe(
          deleteStatus => {
            if (deleteStatus[0][0].campaign_Id_ > 0) {
              this.campaignData.splice(index, 1);
              this.showSuccessDialog('Deleted');
              this.searchCampaign();
            } else if (Number(deleteStatus[0][0].campaign_Id_) === -2) {
              this.showWarningDialog('Already in Use, Cannot be Deleted!');
            } else {
              this.showErrorDialog('Error Occurred');
            }
            this.isLoading = false;
          },
          () => {
            this.isLoading = false;
            this.showErrorDialog('Error Occurred');
          }
        );
      }
    });
  }

  saveCampaign() {

    if (this.campaign_master_.Campaign_Master_Id === 0 || this.campaign_master_ === null) {
      this.showWarningDialog('Select campaign master Name');
      return;
    }

    if (!this.campaign.campaign_name || this.campaign.campaign_name.trim() === '') {
      this.campaign.campaign_name = this.campaign_master_.Campaign_Master_Name || 'Default Campaign';
    }
    this.campaign.Campaign_Master_Id = this.campaign_master_.Campaign_Master_Id;
    this.campaign.Campaign_Master_Name = this.campaign_master_.Campaign_Master_Name;
    this.campaign.Branch_Id = this.Branch_.Branch_Id;
    this.campaign.Branch_Name = this.Branch_.Branch_Name;
    this.campaign.Enquiry_Source_Id = this.Enquiry_Source_.Enquiry_Source_Id;
    this.campaign.Enquiry_Source_Name = this.Enquiry_Source_.Enquiry_Source_Name;

    this.campaign.Campaign_Department_Users_Data = this.Campaign_Department_Users_Data;

    if (this.campaign.form_id && this.metaForms && this.metaForms.length > 0) {
      const selectedForm = this.metaForms.find(f => String(f.id) === String(this.campaign.form_id));
      if (selectedForm) {
        this.campaign.form_name = selectedForm.name;
      }
    }

    this.isLoading = true;
    this.campaignService.saveCampaign(this.campaign).subscribe(
      saveStatus => {
        if (Number(saveStatus[0][0].campaign_Id_) > 0) {
          this.showSuccessDialog('Saved');
          this.searchCampaign();
          this.clearCampaign();
          this.Entry_View = false;
        } else {
          this.showWarningDialog('Error Saving campaign');
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.showErrorDialog(error.error || 'Error Occurred');
      }
    );
  }

  Addbutton_click() {
    
    if (this.Department_ == undefined || this.Department_ == null || this.Department_.Department_Id == 0) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Department', Type: "3" } });
      return
    }
    // if (this.User_Details_ == undefined || this.User_Details_ == null|| this.User_Details_.User_Details_Id == 0) {
    //     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select To User', Type: "3" } });
    //     return
    // }
    if (this.Department_Status_ == undefined || this.Department_Status_ == null || this.Department_Status_.Department_Status_Id == 0) {
      const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Status', Type: "3" } });
      return
    }
    var Qery = "";
    if (this.Campaign_Department_Users_Data == undefined)
      this.Campaign_Department_Users_Data = [];
    
    this.Campaign_Department_Users_.Department_Id = this.Department_.Department_Id;
    this.Campaign_Department_Users_.Department_Name = this.Department_.Department_Name;
    this.Campaign_Department_Users_.To_User_Id = this.User_Details_.User_Details_Id;
    this.Campaign_Department_Users_.To_User_Name = this.User_Details_.User_Details_Name;
    this.Campaign_Department_Users_.Status_Id = this.Department_Status_.Department_Status_Id;
    this.Campaign_Department_Users_.Status_Name = this.Department_Status_.Department_Status_Name;
    

    for (var i = 0; i < this.Campaign_Department_Users_Data.length; i++) {
      Qery = Qery + "( Department_id = " + this.Campaign_Department_Users_Data[i].Department_Id + "";
      if (this.Campaign_Department_Users_Data[i].To_User_Id > 0)
        Qery = Qery + " and User_Details_Id =" + this.Campaign_Department_Users_Data[i].To_User_Id;
      Qery = Qery + ") or";
      if (this.Campaign_Department_Users_Data[i].Department_Id == this.Department_.Department_Id && this.Campaign_Department_Users_Data[i].To_User_Id == this.User_Details_.User_Details_Id) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'This User already exists in this Department', Type: "3" } });
        return
      }
    }
    Qery = Qery.substring(0, Qery.length - 2);
    
    // this.Process_List_Data.push(Object.assign({}, this.Process_List_ ));
    if (this.Campaign_Department_Users_Index >= 0) {
      this.Campaign_Department_Users_Data[this.Campaign_Department_Users_Index] = Object.assign({}, this.Campaign_Department_Users_);
    }
    else {
      this.Campaign_Department_Users_Data.push(Object.assign({}, this.Campaign_Department_Users_));
    }
    
    this.Campaign_Department_Users_Index = -1;
    this.cls_Campaign_details();
  }

  Edit_Process_List(Process_List_e: Campaign_Department_Users, index) {

    this.Campaign_Department_Users_Index = index;
    for (var i = 0; i < this.Campaign_Department_Users_Data.length; i++) {

      if (this.Campaign_Department_Users_.Department_Id == this.Campaign_Department_Users_Data[i].Department_Id)
        this.Campaign_Department_Users_ = this.Campaign_Department_Users_Data[i];

      if (this.Campaign_Department_Users_.To_User_Id == this.Campaign_Department_Users_Data[i].To_User_Id)
        this.Campaign_Department_Users_ = this.Campaign_Department_Users_Data[i];

      if (this.Campaign_Department_Users_.Status_Id == this.Campaign_Department_Users_Data[i].Status_Id)
        this.Campaign_Department_Users_ = this.Campaign_Department_Users_Data[i];
    }

    //this.Process_List_=Object.assign({},Process_List_e);
  }

  cls_Campaign_details() {
    this.Campaign_Department_Users_.Department_Id = 0;
    this.Campaign_Department_Users_.To_User_Id = 0;
    this.Campaign_Department_Users_.Department_Name = "Select";
    this.Campaign_Department_Users_.To_User_Name = "Select";
    this.Campaign_Department_Users_.Status_Id = 0;
    this.Campaign_Department_Users_.Status_Name = "Select";
  }

  Edit_Campaign(campaignToEdit: campaign, index: number) {
    this.editIndex = index;
    this.Entry_View = true;
    this.isLoading = true;

    const campaign = { ...campaignToEdit };

    for (var j = 0; j < this.Branch_Data.length; j++) {
      if (campaignToEdit.Branch_Id == this.Branch_Data[j].Branch_Id) {
        this.Branch_ = this.Branch_Data[j];
        break;
      }
    }

    for (var j = 0; j < this.campaign_master_Data.length; j++) {
      if (campaignToEdit.Campaign_Master_Id == this.campaign_master_Data[j].Campaign_Master_Id) {
        this.campaign_master_ = this.campaign_master_Data[j];
        break;
      }
    }

    this.onBranchChange();
    // this.onDepartmentChange();

    // if (campaign.Branch_Id) {
    this.campaignService.get_campaigne_department_details(campaign.campaign_details_id).subscribe(
      departmentData => {
        this.Campaign_Department_Users_Data = departmentData[0];
        this.campaign = campaign;
        this.isLoading = false;
      },
      error => {
        console.error('Error loading departments', error);
        this.isLoading = false;
        this.showErrorDialog('Error loading departments');
        this.campaign = campaign;
      }
    );
  }
  Edit_Items(Current_Process_List: Campaign_Department_Users, index: number) {
    
    this.Department_Status_Edit_Id = Current_Process_List.Status_Id;
    this.Department_User_Edit_Id = Current_Process_List.To_User_Id;
    // this.Department_Status_Edit_Id=Current_Process_List.To_User_Id;
    // this.onDepartmentChange();
    for (var j = 0; j < this.Department_Data.length; j++) {
      if (Current_Process_List.Department_Id == this.Department_Data[j].Department_Id) {
        this.Department_ = this.Department_Data[j];
        this.onDepartmentChange();
        break;
        //  this.onDepartmentChange();
      }
    }
    

    // for (var j0=0;j0<this.User_Details_Data.length;j0++) {
    //   if (Current_Process_List.To_User_Id == this.User_Details_Data[j0].User_Details_Id ) {
    //    this.User_Details_=this.User_Details_Data[j0];
    //    break;
    //   }
    // }
    //   
    // for (var j1=0;j1<this.Department_Status_Data.length;j1++) {
    //   if (Current_Process_List.Status_Id == this.Department_Status_Data[j1].Department_Status_Id ) {
    //    this.Department_Status_=this.Department_Status_Data[j1];
    //    break;
    //   }
    // }
    
    // this.Department_.Department_Id=Current_Process_List.Department_Id;
    // this.Department_.Department_Name=Current_Process_List.Department_Name;
    // this.User_Details_.User_Details_Id=Current_Process_List.To_User_Id;
    // this.User_Details_.User_Details_Name=Current_Process_List.To_User_Name;
    // this.Department_Status_.Department_Status_Id=Current_Process_List.Status_Id;
    // this.Department_Status_.Department_Status_Name=Current_Process_List.Status_Name;
  }
  Delete_Items(index: number) {
    this.Campaign_Department_Users_Data.splice(index, 1);
  }
  onBranchChange() {
    const branchId = this.Branch_.Branch_Id;
    if (!branchId) return;
    
    this.isLoading = true;
    this.campaignService.Search_Branch_Department_Typeahead(branchId).subscribe(
      data => {
        
        this.Department_Data = data[0];
        this.Department_Temp.Department_Id = 0;
        this.Department_Temp.Department_Name = "Select";
        this.Department_Data.unshift(this.Department_Temp);
        this.Department_ = this.Department_Data[0];
        this.isLoading = false;
        
      },
      err => {
        console.error('Error loading departments', err);
        this.isLoading = false;
        this.showErrorDialog('Error loading departments');
      }
    );

    // Reset dependent dropdowns
    this.userList = [];
    this.statusList = [];
  }

  onDepartmentChange() {
    
    const departmentId = this.Department_.Department_Id;
    const branchId = this.Branch_.Branch_Id;
    if (!branchId || !departmentId) return;

    this.isLoading = true;

    // Load users for this department
    this.campaignService.Search_Department_User_Typeahead(branchId, departmentId).subscribe(
      data => {
        
        this.User_Details_Data = data[0];
        this.User_Details_Temp.User_Details_Id = 0;
        this.User_Details_Temp.User_Details_Name = "Select";
        this.User_Details_Data.unshift(this.User_Details_Temp);
        this.User_Details_ = this.User_Details_Data[0];
        this.isLoading = false;
        console.log(this.User_Details_Data);

        for (var j0 = 0; j0 < this.User_Details_Data.length; j0++) {
          if (this.Department_User_Edit_Id == this.User_Details_Data[j0].User_Details_Id) {
            this.User_Details_ = this.User_Details_Data[j0];
            break;
          }
        }
      },
      err => {
        console.error('Error loading users', err);
        this.isLoading = false;
        this.showErrorDialog('Error loading users');
      }
    );

    // Load statuses for this department
    this.campaignService.Search_Department_Status_Typeahead(departmentId).subscribe(
      data => {
        
        // this.statusList = data[0];

        this.Department_Status_Data = data[0];
        this.Department_Status_Temp.Department_Status_Id = 0;
        this.Department_Status_Temp.Department_Status_Name = "Select";
        this.Department_Status_Data.unshift(this.Department_Status_Temp);
        this.Department_Status_ = this.Department_Status_Data[0];
        this.isLoading = false;
        console.log(this.Department_Status_Data);
        for (var j1 = 0; j1 < this.Department_Status_Data.length; j1++) {
          if (this.Department_Status_Edit_Id.Status_Id == this.Department_Status_Data[j1].Department_Status_Id) {
            this.Department_Status_ = this.Department_Status_Data[j1];
            break;
          }
        }

        // for (var j1=0;j1<this.Department_Status_Data.length;j1++) {
        //   if (this.Department_Status_Edit_Id.Status_Id == this.Department_Status_Data[j1].Department_Status_Id ) {
        //   this.Department_Status_=this.Department_Status_Data[j1];
        //   break;
        //   }
        // }

      },
      err => {
        console.error('Error loading statuses', err);
        this.isLoading = false;
        this.showErrorDialog('Error loading statuses');
      }
    );


  }

  // Dialog helper methods
  showSuccessDialog(message: string) {
    this.dialogBox.open(DialogBox_Component, {
      panelClass: 'Dialogbox-Class',
      data: { Message: message, Type: "false" }
    });
  }

  showErrorDialog(message: string) {
    this.dialogBox.open(DialogBox_Component, {
      panelClass: 'Dialogbox-Class',
      data: { Message: message, Type: "2" }
    });
  }

  showWarningDialog(message: string) {
    this.dialogBox.open(DialogBox_Component, {
      panelClass: 'Dialogbox-Class',
      data: { Message: message, Type: "3" }
    });
  }

  showInfoDialog(message: string) {
    this.dialogBox.open(DialogBox_Component, {
      panelClass: 'Dialogbox-Class',
      data: { Message: message, Type: "3" }
    });
  }

  // Needed for ngFor tracking
  trackByFn(index: number, item: any) {
    return index;
  }
}