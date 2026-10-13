import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Telecaller_Registration_SummaryComponent} from './Telecaller_Registration_Summary.component';
describe('Telecaller_Registration_SummaryComponent', () => {
let component: Telecaller_Registration_SummaryComponent;
let fixture: ComponentFixture<Telecaller_Registration_SummaryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Telecaller_Registration_SummaryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Telecaller_Registration_SummaryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

