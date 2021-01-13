import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front End Web 100';

  friends = ['Rob', 'Sue', 'Meg', 'Janet']

  showEasterEgg() {
    this.title = 'You found the egg!';
  }
}
