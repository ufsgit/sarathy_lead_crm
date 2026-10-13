import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Change_StatusComponent } from './Change_Status.component';


describe('Change_StatusComponent', () => {
  let component: Change_StatusComponent;
  let fixture: ComponentFixture<Change_StatusComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Change_StatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Change_StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
