import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard_UserComponent } from './Dashboard_User.component';
describe('Home_PageComponent', () => {
let component: Dashboard_UserComponent;
let fixture: ComponentFixture<Dashboard_UserComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Dashboard_UserComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Dashboard_UserComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

