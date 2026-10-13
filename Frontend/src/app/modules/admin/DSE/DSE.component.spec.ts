import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSEComponent } from './DSE.component';


describe('DSEComponent', () => {
  let component: DSEComponent;
  let fixture: ComponentFixture<DSEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DSEComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
