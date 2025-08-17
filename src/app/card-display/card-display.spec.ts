import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDisplay } from './card-display';
import { By } from '@angular/platform-browser';
import { ComponentRef } from '@angular/core';

describe('CardDisplay', () => {
    let component: CardDisplay;
    let fixture: ComponentFixture<CardDisplay>;
    let componentRef: ComponentRef<CardDisplay>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardDisplay],
        }).compileComponents();

        fixture = TestBed.createComponent(CardDisplay);
        component = fixture.componentInstance;
        componentRef = fixture.componentRef;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title, subtitle, and content', () => {
        componentRef.setInput('title','Test Title');
        componentRef.setInput('subTitle','Test Subtitle');
        componentRef.setInput('content','Test Content');
        fixture.detectChanges();

        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('mat-card-title').textContent).toContain('Test Title');
        expect(compiled.querySelector('mat-card-subtitle').textContent).toContain('Test Subtitle');
        expect(compiled.querySelector('mat-card-content p').textContent).toContain('Test Content');
    });

    it('should render image with correct src and alt', () => {
        componentRef.setInput('imageUrl', 'assets/test.jpg');
        componentRef.setInput('title', 'Test Title');
        fixture.detectChanges();

        const img = fixture.nativeElement.querySelector('img[mat-card-image]');
        expect(img.src).toContain('assets/test.jpg');
        expect(img.alt).toBe('Test Title');
    });

    it('should render the avatar div', () => {
        const avatar = fixture.nativeElement.querySelector('.card-header-image');
        expect(avatar).toBeTruthy();
    });
});