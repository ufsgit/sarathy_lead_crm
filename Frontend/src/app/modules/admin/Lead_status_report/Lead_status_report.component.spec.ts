import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lead_status_reportComponent } from './Lead_status_report.component';


describe('Lead_status_reportComponent', () => {
  let component: Lead_status_reportComponent;
  let fixture: ComponentFixture<Lead_status_reportComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lead_status_reportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lead_status_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
