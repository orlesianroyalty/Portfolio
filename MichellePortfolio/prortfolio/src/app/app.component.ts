import { Component } from '@angular/core';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { routerTransition, infoAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition, infoAnimation]
})
export class AppComponent {
  title = 'prortfolio';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
