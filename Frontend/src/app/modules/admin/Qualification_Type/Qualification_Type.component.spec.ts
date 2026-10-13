import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Qualification_TypeComponent } from './Qualification_Type.component';
describe('Qualification_TypeComponent', () => {
let component: Qualification_TypeComponent;
let fixture: ComponentFixture<Qualification_TypeComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Qualification_TypeComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Qualification_TypeComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});