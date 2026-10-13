import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User_TargetComponent } from './User_Target.component';


describe('User_TargetComponent', () => {
  let component: User_TargetComponent;
  let fixture: ComponentFixture<User_TargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [User_TargetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User_TargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
