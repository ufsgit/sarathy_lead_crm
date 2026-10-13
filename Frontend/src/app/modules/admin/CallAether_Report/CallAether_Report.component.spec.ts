import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAether_ReportComponent } from './CallAether_Report.component';


describe('CallAether_ReporttComponent', () => {
  let component: CallAether_ReportComponent;
  let fixture: ComponentFixture<CallAether_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CallAether_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallAether_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
