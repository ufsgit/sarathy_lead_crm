import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Department_DataComponent} from './Department_Data.component';
describe('Home_PageComponent', () => {
let component: Department_DataComponent;
let fixture: ComponentFixture<Department_DataComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Department_DataComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Department_DataComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

