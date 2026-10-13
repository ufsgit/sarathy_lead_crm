import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign_ReportComponent } from './Campaign_Report.component';


describe('Campaign_ReportComponent', () => {
  let component: Campaign_ReportComponent;
  let fixture: ComponentFixture<Campaign_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Campaign_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Campaign_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
