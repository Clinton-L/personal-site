import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hobbies } from './hobbies';
import { By } from '@angular/platform-browser';

describe('Hobbies', () => {
    let component: Hobbies;
    let fixture: ComponentFixture<Hobbies>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Hobbies],
        }).compileComponents();

        fixture = TestBed.createComponent(Hobbies);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render 3 hobbies', () => {
        const compiled = fixture.debugElement;
        const hobbyElements = compiled.queryAll(By.css('app-card-display'));
        expect(hobbyElements.length).toBe(3);
    });
});