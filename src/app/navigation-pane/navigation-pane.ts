import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navigation-pane',
  imports: [MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './navigation-pane.html',
})
export class NavigationPane {

}
