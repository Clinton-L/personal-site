import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterModule } from '@angular/router';
import { NavigationPane } from './navigation-pane';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { By } from '@angular/platform-browser';

describe('Navigation Pane', () => {
    let component: NavigationPane;
    let fixture: ComponentFixture<NavigationPane>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [RouterModule, NavigationPane, MatSidenavModule, MatListModule, FaIconComponent],
        providers: [provideRouter([])]
        })
        .compileComponents();

        fixture = TestBed.createComponent(NavigationPane);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    //basic test to check if the social links are defined
    it('should have social links defined', () => {
        expect(component.socialLinks).toBeDefined();
        expect(component.socialLinks.length).toBeGreaterThan(0);
    });
    
    //test to check if the social links contain the expected URLs
    it('should have correct social links', () => {
        const expectedLinks = [
            { icon: component.faGithub, url: 'https://github.com/Clinton-L' },
            { icon: component.faLinkedin, url: 'https://www.linkedin.com/in/clinton-ludgrove-b8a54560' },
            { icon: component.faEnvelope, url: 'mailto:clinton.ludgrove@gmail.com' }
        ];
        expect(component.socialLinks).toEqual(expectedLinks);
    });

    //test to check if the FontAwesome icons are defined
    it('should have FontAwesome icons defined', () => {
        expect(component.faGithub).toBeDefined();
        expect(component.faLinkedin).toBeDefined();
        expect(component.faEnvelope).toBeDefined();
    });
});
