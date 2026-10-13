import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enquiry_For_Wise_ReportComponent } from './Enquiry_For_Wise_Report.component';


describe('Status_Wise_ReportComponent', () => {
  let component: Enquiry_For_Wise_ReportComponent;
  let fixture: ComponentFixture<Enquiry_For_Wise_ReportComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Enquiry_For_Wise_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enquiry_For_Wise_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
