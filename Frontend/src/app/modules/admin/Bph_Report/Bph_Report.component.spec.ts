import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Bph_ReportComponent } from './Bph_Report.component';
describe('Bph_ReportComponent', () => {
let component: Bph_ReportComponent;
let fixture: ComponentFixture<Bph_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Bph_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Bph_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

