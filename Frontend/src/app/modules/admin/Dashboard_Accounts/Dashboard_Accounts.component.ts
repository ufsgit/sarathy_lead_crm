import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student_Service } from '../../../services/Student.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student } from '../../../models/Student';
import { Branch } from '../../../models/Branch';
import { User_Details } from '../../../models/User_Details';
import { Department } from '../../../models/Department';
import { Department_Status } from '../../../models/Department_Status';
import { Gender } from '../../../models/Gender';
import { ROUTES, Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { Country } from 'app/models/Country';
import { Country_Service } from 'app/services/Country.Service';
import { Intake } from 'app/models/Intake';
import { Intake_Year } from 'app/models/Intake_Year';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY', monthYearLabel: 'MMM YYYY', dateA11yLabel: 'DD/MM/YYYY', monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-Dashboard_Accounts',
  templateUrl: './Dashboard_Accounts.component.html',
  styleUrls: ['./Dashboard_Accounts.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class Dashboard_AccountsComponent implements OnInit {
  Dashboard_Edit: boolean;
  Dashboard_Save: boolean;
  Dashboard_Delete: boolean;

  missedfollowup_count: number = 1;

  followup_count: number = 1;


  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  myInnerHeight: number;
  issLoading: boolean;

  Login_User: string = "0";
  Menu_Id: number = 9;

  myTotalHeight: number;
  Search_Dropdown_Country: Country = new Country();

  Dashboard_Count: number;
  Dashboard_Count1: number;
  Dashboard_Count2: number;
  Dashboard_Count3: number;
  Dashboard_Count4: number;
  Dashboard_Count5: number;
  Dashboard_Count6: number;
  Dashboard_Count7: number;
  Dashboard_Count8: number;
  Dashboard_Count9: number;
  Dashboard_Count11: number;
  Dashboard_Count12: number;
  Edit_Page_Permission: any;
  Country_Data_Filter: Country[];

  Country_Data: Country[];

  Graph_Button: boolean = false;

  Enquiry_Source_title = '';
  Enquiry_Source_type = 'PieChart';
  Enquiry_Source_data = [

  ];
  Enquiry_Source_columnNames = [];
  Enquiry_Source_options = {
    is3D: true,
  };
  width = 550;
  height = 400;




  Title_Bar = '';
  Type_Bar = 'BarChart';
  Data_Bar = [

  ];
  columnNames_Bar = ['Source', 'Count'];
  options_Bar = {
    is3D: true,
  };

  Permissions: any;
  Department_Data: Department[];
  Department_Search: Department = new Department();
  Department_Temp: Department = new Department();
  Users_Data: User_Details[];
  Users_Temp: User_Details = new User_Details();
  Branch_Data: Branch[];
  Search_Branch: Branch = new Branch();
  Branch_Temp: Branch = new Branch();

  Touser_Branch_Data: Branch[];
  Touser_Branch_Id: number;
  Touser_Branch_name: string;

  Status_Data: Department_Status[];
  Status_Temp: Department_Status = new Department_Status();
  Status_Search: Department_Status = new Department_Status();
  User_Search: User_Details = new User_Details();
  Look_In_Date: Boolean = true;
  Search_FromDate: Date = new Date();
  Search_ToDate: Date = new Date();
  year: any;
  month: any;
  day: any;
  date: any;
  constructor(public Student_Service_: Student_Service, public Country_Service_: Country_Service, private route: ActivatedRoute, private router: Router, public dialogBox: MatDialog) { }

  ngOnInit() {
    this.Login_User = localStorage.getItem("Login_User");
    // this.Permissions = Get_Page_Permission(9);
    // if(this.Permissions==undefined || this.Permissions==null)
    // {
    // localStorage.removeItem('token');
    // this.router.navigateByUrl('Home_Page');
    // }
    // else
    {
      // this.Dashboard_Edit=this.Permissions.Edit;
      // this.Dashboard_Save=this.Permissions.Save;
      // this.Dashboard_Delete=this.Permissions.Delete;
      if (Number(this.Login_User) > 0)
        this.Page_Load()
    }
  }

  Page_Load() {
    this.myInnerHeight = (window.innerHeight);
    this.myTotalHeight = this.myInnerHeight
    this.myTotalHeight = this.myTotalHeight - 40;
    this.myInnerHeight = this.myInnerHeight - 100;
    this.Get_Menu_Status(9, this.Login_User);
    this.Get_Lead_Load_Data_ByUser(this.Login_User)
    this.Search_FromDate = this.New_Date(this.Search_FromDate);
    this.Search_ToDate = this.New_Date(this.Search_ToDate);
    this.Get_Student_PageLoadData_Dropdowns()

  }
  New_Date(Date_) {
    this.date = Date_;
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth() + 1;
    if (this.month < 10) {
      this.month = "0" + this.month;
    }
    this.day = this.date.getDate().toString();
    if (Number.parseInt(this.day) < 10) {
      this.day = "0" + this.day;
    }
    this.date = this.year + "-" + this.month + "-" + this.day;
    return this.date;
  }
  Get_Menu_Status(Menu_id, Login_user_id) {

    this.issLoading = false;
    this.Student_Service_.Get_Menu_Status(Menu_id, Login_user_id).subscribe(Rows => {

      if (Rows[0][0] == undefined) {
        if (Menu_id == 139) {
          localStorage.removeItem('token');
          this.router.navigateByUrl('Home_Page');
        }
      }

      if (Rows[0][0].View > 0) {
        if (Menu_id == 139) {
          this.Permissions = Rows[0][0];
          if (this.Permissions == undefined || this.Permissions == null) {
            localStorage.removeItem('token');
            this.router.navigateByUrl('Home_Page');
          }

          this.Dashboard_Edit = this.Permissions.Edit;
          this.Dashboard_Save = this.Permissions.Save;
          this.Dashboard_Delete = this.Permissions.Delete;
        }

      }
      this.issLoading = false;
    },
      Rows => {
        this.issLoading = false;
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
      });
  }


  Get_Dashboard_Count() {
    // debugger
    var look_In_Date_Value = 0, User_Id = 0, dept_id = 0, branch_id = 0, Department_Status_Id = 0
    if (this.Look_In_Date == true) look_In_Date_Value = 1;

    if (this.User_Search != undefined && this.User_Search != null)
      if (
        this.User_Search.User_Details_Id != undefined &&
        this.User_Search.User_Details_Id != null
      )
        User_Id = this.User_Search.User_Details_Id;

    if (this.Department_Search != undefined && this.Department_Search != null)
      if (
        this.Department_Search.Department_Id != undefined &&
        this.Department_Search.Department_Id != null
      )
        dept_id = this.Department_Search.Department_Id;

    if (this.Search_Branch != undefined && this.Search_Branch != null)
      if (
        this.Search_Branch.Branch_Id != undefined &&
        this.Search_Branch.Branch_Id != null
      )
        branch_id = this.Search_Branch.Branch_Id;

    if (this.Status_Search != undefined && this.Status_Search != null)
      if (
        this.Status_Search.Department_Status_Id != undefined &&
        this.Status_Search.Department_Status_Id != null
      )
        Department_Status_Id = this.Status_Search.Department_Status_Id;


    let Country_Ids: number[] = [];


    if (this.selectedCountries && this.selectedCountries.length > 0) {
      Country_Ids = this.selectedCountries.map(uni => uni.Country_Id);
    } else {
      Country_Ids = [0];  // or whatever default value you want to use when no universities are selected
    }

    let Intake_Ids: number[] = [];


    if (this.selectedIntakeModes && this.selectedIntakeModes.length > 0) {
      Intake_Ids = this.selectedIntakeModes.map(uni => uni.Intake_Id);
    } else {
      Intake_Ids = [0];  // or whatever default value you want to use when no universities are selected
    }


    let Intake_Year_Ids: number[] = [];


    if (this.selectedIntakeYears && this.selectedIntakeYears.length > 0) {
      Intake_Year_Ids = this.selectedIntakeYears.map(uni => uni.Intake_Year_Id);
    } else {
      Intake_Year_Ids = [0];  // or whatever default value you want to use when no universities are selected
    }



    this.issLoading = true;
    // debugger     
    this.Student_Service_.Get_Dashboard_Account_Count(this.Login_User, moment(this.Search_FromDate).format("YYYY-MM-DD"),
      moment(this.Search_ToDate).format("YYYY-MM-DD"), look_In_Date_Value, User_Id, dept_id, branch_id, Department_Status_Id, Country_Ids, Intake_Ids, Intake_Year_Ids)
      .subscribe(Rows => {
        // debugger
        //log(Rows)
        this.Dashboard_Count = Rows.returnvalue.Leads[0].Data_Count;
        this.Dashboard_Count1 = Rows.returnvalue.Leads[1].Data_Count;
        this.Dashboard_Count2 = Rows.returnvalue.Leads[2].Data_Count;
        this.Dashboard_Count3 = Rows.returnvalue.Leads[3].Data_Count;
        this.Dashboard_Count4 = Rows.returnvalue.Leads[4].Data_Count;
        this.Dashboard_Count5 = Rows.returnvalue.Leads[5].Data_Count;
        this.Dashboard_Count7 = Rows.returnvalue.Leads[6].Data_Count;
        this.Dashboard_Count8 = Rows.returnvalue.Leads[7].Data_Count;
        this.Dashboard_Count9 = Rows.returnvalue.Department_Status_data;
        this.Dashboard_Count11 = Rows.returnvalue.Leads[8].Data_Count;
        this.Dashboard_Count12 = Rows.returnvalue.Leads[9].Data_Count;


        // this.Dashboard_Count6=Rows.returnvalue.Leads[6].Data_Count; 

        // log(this.Dashboard_Count)    

        var Enquiry_Source_data_temp = Rows.returnvalue.Enquiry_Source_data;
        var result = [];
        this.Enquiry_Source_columnNames = [];
        for (var i in Enquiry_Source_data_temp) {
          result.push([Enquiry_Source_data_temp[i].Enquiry_Source_Name, Enquiry_Source_data_temp[i].Data_Count]);

        }
        // var data_temp = new google.visualization.DataTable(result);
        this.Enquiry_Source_columnNames.push('Source')
        this.Enquiry_Source_columnNames.push('Count')
        this.Enquiry_Source_data = result;
        this.Data_Bar = result;
        this.issLoading = false;
      },
        Rows => {
          const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured', Type: "2" } });
          this.issLoading = false;
        });

  }
  Click_No1() {
    // debugger
    this.router.navigateByUrl('/Enquiry_Source_Summary_New');
    localStorage.setItem('Look_In_', this.Look_In_Date.toString());
    localStorage.setItem('Search_Branch', this.Search_Branch.Branch_Id.toString());
    localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
    localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
    localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
    localStorage.setItem('Status_Search', this.Status_Search.Department_Status_Id.toString());
    localStorage.setItem('Department_Search', this.Department_Search.Department_Id.toString())

  }
  Click_No2() {

    // debugger
    if (this.Look_In_Date == true) {
      var Date_Check = 1;
    }
    else {
      var Date_Check = 0;
    }
    localStorage.setItem('Look_In_', Date_Check.toString());
    //  localStorage.setItem('Search_Branch', this.Search_Branch.Branch_Id.toString());
    localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
    localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
    localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
    this.router.navigateByUrl('/Registration_Summary');


  }
  Click_No3() {
    this.router.navigateByUrl('/Pending_FollowUp');

    localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
    localStorage.setItem('Department_Search', this.Department_Search.Department_Id.toString())

  }
  Click_No4() {
    this.router.navigateByUrl('/Receipt_Summary_Report');
    localStorage.setItem('Look_In_', this.Look_In_Date.toString());
    localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
    localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
    localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());

  }
  Click_No5() {
    this.router.navigateByUrl('/Enquiry_Source_Summary');

  }

  Click_No6() {
    localStorage.setItem('Look_In_', this.Look_In_Date.toString());
    localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
    localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
    this.router.navigateByUrl('/Application_Report');
    localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());

  }


  Click_No7() {
    this.router.navigateByUrl('/commission_Summary_report');
    localStorage.setItem('Look_In_', this.Look_In_Date.toString());
    localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
    localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
    localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());

  }

  Click_No8() {
    // this.router.navigateByUrl('/Student');

  }

  Click_No11() {
    this.router.navigateByUrl('/Student_Summary_Report');
  }

  Click_No12() {
    this.router.navigateByUrl('/Student');
  }


  Click_Status(Department_Status_Id_e) {
    // debugger

    localStorage.setItem('Look_In_', this.Look_In_Date.toString());
    localStorage.setItem('Search_FromDate', this.Search_FromDate.toString());
    localStorage.setItem('Search_ToDate', this.Search_ToDate.toString());
    localStorage.setItem('Search_Branch', this.Search_Branch.Branch_Id.toString());
    localStorage.setItem('User_Search', this.User_Search.User_Details_Id.toString());
    localStorage.setItem('Department_Search', this.Department_Search.Department_Id.toString())
    localStorage.setItem('Department_Status_Id', Department_Status_Id_e);
    this.router.navigateByUrl('/Student_Status_Wise_Report');
    // localStorage.setItem("Dashboard_Leads_View",'3');
    // localStorage.setItem("Department_Id",'344');
    // localStorage.setItem("Department_Name",'Followup 3'); 
    // localStorage.setItem("Stage_Name",'Followup');

  }
  Get_Lead_Load_Data_ByUser(Login_User) {
    this.Student_Service_.Get_Lead_Load_Data_ByUser(Login_User).subscribe(
      (Rows) => {
        // debugger
        this.Department_Data = Rows[1].slice();
        this.Department_Temp.Department_Id = 0;
        this.Department_Temp.Department_Name = "All";
        this.Department_Data.unshift(this.Department_Temp);
        this.Department_Search = this.Department_Data[0];

        this.Users_Data = Rows[0].slice();
        this.Users_Temp.User_Details_Id = 0;
        this.Users_Temp.User_Details_Name = "All";
        this.Users_Data.unshift(this.Users_Temp);
        this.User_Search = this.Users_Data[0];

        this.Branch_Data = Rows[2].slice();
        this.Branch_Temp.Branch_Id = 0;
        this.Branch_Temp.Branch_Name = "All";
        this.Branch_Data.unshift(this.Branch_Temp);
        this.Search_Branch = this.Branch_Data[0];

        this.Status_Data = Rows[5].slice();
        this.Status_Temp.Department_Status_Id = 0;
        this.Status_Temp.Department_Status_Name = "All";
        this.Status_Data.unshift(this.Status_Temp);
        this.Status_Search = this.Status_Data[0];
        // debugger
        this.Get_Dashboard_Count();




      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }


  Search_Country_Typeahead(event: any) {
    var Value = "";
    if (event.target.value == "") Value = "";
    else Value = event.target.value.toLowerCase();

    if (this.Country_Data == undefined || this.Country_Data.length == 0) {
      this.issLoading = true;

      this.Country_Service_.Search_Country_Typeahead(Value).subscribe(
        (Rows) => {
          // debugger
          if (Rows != null) {
            this.Country_Data = Rows[0];
            this.Country_Data_Filter = [];
            for (var i = 0; i < this.Country_Data.length; i++) {
              if (
                this.Country_Data[i].Country_Name.toLowerCase().includes(Value)
              )
                this.Country_Data_Filter.push(this.Country_Data[i]);
            }
          }
          this.issLoading = false;
        },
        (Rows) => {
          this.issLoading = false;
        }
      );
    } else {
      this.Country_Data_Filter = [];
      for (var i = 0; i < this.Country_Data.length; i++) {
        if (this.Country_Data[i].Country_Name.toLowerCase().includes(Value))
          this.Country_Data_Filter.push(this.Country_Data[i]);
      }
    }
  }

  display_Country = (Country_e?: any): string => {
    return Country_e ? Country_e.Country_Name : '';
  }

  selectedCountries: any[] = [];
  isSelected(Country_e: any): boolean {
    return this.selectedCountries.some(selectedUni => selectedUni.Country_Name === Country_e.Country_Name);
  }


  countryAll = {
    'Country_Id': 0,
    'Country_Name': 'All'
  }
  selectedUniversity;

  toggleSelection(university: any) {
    this.selectedUniversity = ''
    if (university.University_Id == 0) {
      this.selectedCountries = [];
      this.selectedUniversity = 'All'
      return;
    }
    this.Country_Data = [];
    const index = this.selectedCountries.findIndex(selectedUni => selectedUni.Country_Name === university.Country_Name);
    if (index === -1) {
      this.selectedCountries.push(university);
    } else {
      this.selectedCountries.splice(index, 1);
    }
    // this.updateCourses(); // Add this line
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {

    this.Search_Dropdown_Country = null;
    event.option.deselect();
    // this.updateCourses(); 
  }

  removeUniversity(country: any) {
    this.Country_Data = [];
    this.Country_Data_Filter = [];
    const index = this.selectedCountries.findIndex(selectedUni => selectedUni.Country_Name === country.Country_Name);
    if (index >= 0) {
      this.selectedCountries.splice(index, 1);
      //   this.updateCourses(); // Add this line
    }
  }


  Intake_Mode_: Intake = new Intake();
  Intake_Mode_Temp: Intake = new Intake();
  Intake_Mode_Data: Intake[];
  Intake_Search: Intake = new Intake();

  Intake_Year_: Intake_Year = new Intake_Year();
  Intake_Year_Temp: Intake_Year = new Intake_Year();
  Intake_Year_Data: Intake_Year[];
  Intake_Year_Search: Intake_Year = new Intake_Year();

  Get_Student_PageLoadData_Dropdowns() {
    this.Student_Service_.Get_Student_PageLoadData_Dropdowns().subscribe(
      (Rows) => {


        this.Intake_Mode_Data = Rows[2];
        // this.Intake_Mode_Temp.Intake_Id =0;
        // this.Intake_Mode_Temp.Intake_Name ="Select";
        // this.Intake_Mode_Data.unshift(Object.assign({},this.Intake_Mode_Temp));      
        this.Intake_Search = this.Intake_Mode_Data[0];


        this.Intake_Year_Data = Rows[5];
        // this.Intake_Year_Temp.Intake_Year_Id =0;
        // this.Intake_Year_Temp.Intake_Year_Name ="Select";
        // this.Intake_Year_Data.unshift(Object.assign({},this.Intake_Year_Temp));      
        this.Intake_Year_Search = this.Intake_Year_Data[0];


      },
      (Rows) => {
        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: "Dialogbox-Class",
          data: { Message: "Error Occured", Type: "2" },
        });
      }
    );
  }

  // Intake Mode
  Search_Dropdown_IntakeMode: string = '';
  Intake_Mode_Data_Filter: any[] = [];
  issLoadingIntakeMode: boolean = false;
  selectedIntakeModes: any[] = [];
  intakeModeAll = { Intake_Id: 0, Intake_Name: 'All' };

  // Intake Year
  Search_Dropdown_IntakeYear: string = '';
  Intake_Year_Data_Filter: any[] = [];
  issLoadingIntakeYear: boolean = false;
  selectedIntakeYears: any[] = [];
  intakeYearAll = { Intake_Year_Id: 0, Intake_Year_Name: 'All' };

  // Intake Mode Typeahead
  Search_IntakeMode_Typeahead(event: any) {
    const value = event.target.value.toLowerCase();

    // Filter the already loaded Intake_Mode_Data
    if (this.Intake_Mode_Data && this.Intake_Mode_Data.length > 0) {
      this.Intake_Mode_Data_Filter = this.Intake_Mode_Data.filter((item) =>
        item.Intake_Name.toLowerCase().includes(value)
      );
    } else {
      this.Intake_Mode_Data_Filter = []; // No data available
    }
  }

  // Intake Year Typeahead
  Search_IntakeYear_Typeahead(event: any) {
    const value = event.target.value.toLowerCase();

    // Filter the already loaded Intake_Year_Data
    if (this.Intake_Year_Data && this.Intake_Year_Data.length > 0) {
      this.Intake_Year_Data_Filter = this.Intake_Year_Data.filter((item) =>
        item.Intake_Year_Name.toLowerCase().includes(value)
      );
    } else {
      this.Intake_Year_Data_Filter = []; // No data available
    }
  }

  // Intake Mode
  display_IntakeMode = (intakeMode?: any): string => {
    return intakeMode ? intakeMode.Intake_Name : '';
  };

  isSelected_IntakeMode(intakeMode: any): boolean {
    return this.selectedIntakeModes.some((item) => item.Intake_Id === intakeMode.Intake_Id);
  }

  toggleSelection_IntakeMode(intakeMode: any) {
    if (intakeMode.Intake_Id === 0) {
      this.selectedIntakeModes = [];
      return;
    }
    const index = this.selectedIntakeModes.findIndex((item) => item.Intake_Id === intakeMode.Intake_Id);
    if (index === -1) {
      this.selectedIntakeModes.push(intakeMode);
    } else {
      this.selectedIntakeModes.splice(index, 1);
    }
  }

  optionSelected_IntakeMode(event: MatAutocompleteSelectedEvent) {
    this.Search_Dropdown_IntakeMode = null;
    event.option.deselect();
  }

  // Intake Year
  display_IntakeYear = (intakeYear?: any): string => {
    return intakeYear ? intakeYear.Intake_Year_Name : '';
  };

  isSelected_IntakeYear(intakeYear: any): boolean {
    return this.selectedIntakeYears.some((item) => item.Intake_Year_Id === intakeYear.Intake_Year_Id);
  }

  toggleSelection_IntakeYear(intakeYear: any) {
    if (intakeYear.Intake_Year_Id === 0) {
      this.selectedIntakeYears = [];
      return;
    }
    const index = this.selectedIntakeYears.findIndex((item) => item.Intake_Year_Id === intakeYear.Intake_Year_Id);
    if (index === -1) {
      this.selectedIntakeYears.push(intakeYear);
    } else {
      this.selectedIntakeYears.splice(index, 1);
    }
  }

  optionSelected_IntakeYear(event: MatAutocompleteSelectedEvent) {
    this.Search_Dropdown_IntakeYear = null;
    event.option.deselect();
  }

}


