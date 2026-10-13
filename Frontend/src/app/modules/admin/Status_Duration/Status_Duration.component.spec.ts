import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Status_DurationComponent } from './Status_Duration.component';


describe('DSEComponent', () => {
  let component: Status_DurationComponent;
  let fixture: ComponentFixture<Status_DurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Status_DurationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Status_DurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
