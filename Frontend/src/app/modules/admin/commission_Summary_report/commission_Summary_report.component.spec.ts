import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { commission_Summary_reportComponent } from './commission_Summary_report.component';


describe('commission_Summary_reportComponent', () => {
  let component: commission_Summary_reportComponent;
  let fixture: ComponentFixture<commission_Summary_reportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [commission_Summary_reportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(commission_Summary_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
