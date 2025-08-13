import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-navigation-pane',
  imports: [MatSidenavModule, MatListModule, RouterModule, NgOptimizedImage, FaIconComponent],
  templateUrl: './navigation-pane.html',
})
export class NavigationPane {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  socialLinks = [
    { icon: this.faGithub, url: 'https://github.com/Clinton-L' },
    { icon: this.faLinkedin, url: 'https://www.linkedin.com/in/clinton-ludgrove-b8a54560' },
    { icon: this.faEnvelope, url: 'mailto:clinton.ludgrove@gmail.com' }
  ];
}
