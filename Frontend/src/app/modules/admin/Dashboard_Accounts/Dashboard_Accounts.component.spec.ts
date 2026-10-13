import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard_AccountsComponent } from './Dashboard_Accounts.component';
describe('Home_PageComponent', () => {
let component: Dashboard_AccountsComponent;
let fixture: ComponentFixture<Dashboard_AccountsComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Dashboard_AccountsComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Dashboard_AccountsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

