import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Daily_Work_ReportComponent } from './Daily_Work_Report.component';


describe('Daily_Work_ReportComponent', () => {
  let component: Daily_Work_ReportComponent;
  let fixture: ComponentFixture<Daily_Work_ReportComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Daily_Work_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Daily_Work_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
