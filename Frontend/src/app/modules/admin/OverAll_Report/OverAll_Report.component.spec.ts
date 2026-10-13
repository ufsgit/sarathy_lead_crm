import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverAll_ReportComponent } from './OverAll_Report.component';


describe('OverAll_ReportComponent', () => {
  let component: OverAll_ReportComponent;
  let fixture: ComponentFixture<OverAll_ReportComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverAll_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverAll_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
