import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallHistory_ReportComponent } from './CallHistory_Report.component';


describe('CallHistory_ReportComponent', () => {
  let component: CallHistory_ReportComponent;
  let fixture: ComponentFixture<CallHistory_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CallHistory_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallHistory_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
