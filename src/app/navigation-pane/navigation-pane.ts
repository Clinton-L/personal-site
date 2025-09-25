import { Component, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-navigation-pane',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, RouterModule, FaIconComponent],
  templateUrl: './navigation-pane.html',
})
export class NavigationPane {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  socialLinks = [
    { icon: this.faGithub, url: 'https://github.com/Clinton-L' },
    { icon: this.faLinkedin, url: 'https://www.linkedin.com/in/clinton-ludgrove-b8a54560' },
    { icon: this.faEnvelope, url: 'mailto:clinton.ludgrove@gmail.com' }
  ];

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
}
