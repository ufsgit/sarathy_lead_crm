import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Application_Manager_DashboardComponent } from './Application_Manager_Dashboard.component';
describe('Home_PageComponent', () => {
let component: Application_Manager_DashboardComponent;
let fixture: ComponentFixture<Application_Manager_DashboardComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Application_Manager_DashboardComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Application_Manager_DashboardComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

