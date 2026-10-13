import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Enquiry_Source_Summary_NewComponent} from './Enquiry_Source_Summary_New.component';
describe('Enquiry_Source_Summary_NewComponent', () => {
let component: Enquiry_Source_Summary_NewComponent;
let fixture: ComponentFixture<Enquiry_Source_Summary_NewComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Enquiry_Source_Summary_NewComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Enquiry_Source_Summary_NewComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

