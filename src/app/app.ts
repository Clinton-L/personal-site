import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationPane } from './navigation-pane/navigation-pane';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavigationPane],
  templateUrl: 'app.html',
})
export class App {
  protected readonly title = signal('personal-site');
}
