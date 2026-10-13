import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { campaignComponent } from './campaign.component';

describe('campaignComponent', () => {
  let component: campaignComponent;
  let fixture: ComponentFixture<campaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ campaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(campaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});