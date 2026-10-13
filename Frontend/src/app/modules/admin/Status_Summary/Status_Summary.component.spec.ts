import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Make sure the file exists at the correct path and with the correct casing.
// If your component file is named 'status-summary.component.ts', update the import as follows:
import { Status_SummaryComponent } from './Status_Summary.component';


describe('Status_SummaryComponent', () => {
  let component: Status_SummaryComponent;
  let fixture: ComponentFixture<Status_SummaryComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Status_SummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Status_SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
