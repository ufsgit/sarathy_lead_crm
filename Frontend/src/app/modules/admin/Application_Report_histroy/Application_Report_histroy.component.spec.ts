import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Application_Report_histroyComponent } from './Application_Report_histroy.component';


describe('Application_Report_histroyComponent', () => {
  let component: Application_Report_histroyComponent;
  let fixture: ComponentFixture<Application_Report_histroyComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Application_Report_histroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Application_Report_histroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
