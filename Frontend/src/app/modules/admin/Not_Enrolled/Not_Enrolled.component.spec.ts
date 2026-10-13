import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Not_EnrolledComponent}  from './Not_Enrolled.component';
describe('Not_Enrolled', () => {
let component: Not_EnrolledComponent;
let fixture: ComponentFixture<Not_EnrolledComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Not_EnrolledComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Not_EnrolledComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

