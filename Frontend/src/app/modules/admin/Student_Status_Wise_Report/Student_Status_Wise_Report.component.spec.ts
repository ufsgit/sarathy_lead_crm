import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Student_Status_Wise_ReportComponent } from './Student_Status_Wise_Report.component';
describe('Home_PageComponent', () => {
let component: Student_Status_Wise_ReportComponent;
let fixture: ComponentFixture<Student_Status_Wise_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Student_Status_Wise_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Student_Status_Wise_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

