import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student_Report_coursewiseComponent } from './Student_Report_coursewise.component';


describe('Student_Report_coursewiseComponent', () => {
  let component: Student_Report_coursewiseComponent;
  let fixture: ComponentFixture<Student_Report_coursewiseComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Student_Report_coursewiseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student_Report_coursewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
