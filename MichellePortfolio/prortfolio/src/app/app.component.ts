import { Component } from '@angular/core';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { routerTransition } from './animations';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('startCarousel', [
      transition(':enter', [
        style({opacity: 0}),
        animate(1200)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'prortfolio';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
