import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Enquiry_ForComponent } from './Enquiry_For.component';
describe('Enquiry_ForComponent', () => {
let component: Enquiry_ForComponent;
let fixture: ComponentFixture<Enquiry_ForComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Enquiry_ForComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Enquiry_ForComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});