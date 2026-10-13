import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Application_Status_Wise_ReportComponent } from './Application_Status_Wise_Report.component';
describe('Home_PageComponent', () => {
let component: Application_Status_Wise_ReportComponent;
let fixture: ComponentFixture<Application_Status_Wise_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Application_Status_Wise_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Application_Status_Wise_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

