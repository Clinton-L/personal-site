import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavigationPane } from './navigation-pane/navigation-pane';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavigationPane],
  templateUrl: 'app.html',
})
export class App {
  protected readonly title = signal('personal-site');
}
