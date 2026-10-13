import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommisssionComponent } from './Commisssion.component';
describe('CommisssionComponent', () => {
let component: CommisssionComponent;
let fixture: ComponentFixture<CommisssionComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ CommisssionComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(CommisssionComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});