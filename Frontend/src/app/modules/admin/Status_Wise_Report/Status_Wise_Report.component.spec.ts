import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Status_Wise_ReportComponent } from './Status_Wise_Report.component';


describe('Status_Wise_ReportComponent', () => {
  let component: Status_Wise_ReportComponent;
  let fixture: ComponentFixture<Status_Wise_ReportComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Status_Wise_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Status_Wise_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
