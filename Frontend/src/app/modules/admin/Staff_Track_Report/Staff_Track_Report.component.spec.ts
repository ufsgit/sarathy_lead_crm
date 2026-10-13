import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staff_Track_ReportComponent } from './Staff_Track_Report.component';


describe('Staff_Track_ReportComponent', () => {
  let component: Staff_Track_ReportComponent;
  let fixture: ComponentFixture<Staff_Track_ReportComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Staff_Track_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staff_Track_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
