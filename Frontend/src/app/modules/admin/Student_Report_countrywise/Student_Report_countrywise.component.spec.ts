import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student_Report_countrywiseComponent } from './Student_Report_countrywise.component';


describe('Student_Report_countrywiseComponent', () => {
  let component: Student_Report_countrywiseComponent;
  let fixture: ComponentFixture<Student_Report_countrywiseComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Student_Report_countrywiseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student_Report_countrywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
