import { Component, input, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-display',
  imports: [MatCardModule],
  templateUrl: './card-display.html'
})
export class CardDisplay {
  title = input<string>();
  subTitle = input<string>();
  imageUrl = input<string>();
  content = input<string>();
}
