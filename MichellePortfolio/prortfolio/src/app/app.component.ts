import { Component, OnInit } from '@angular/core';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { routerTransition } from './animations';
import { trigger, transition, animate, style } from '@angular/animations';

declare var VANTA;

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
export class AppComponent implements OnInit {
  title = 'prortfolio';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
    VANTA.WAVES({
      el: "#container-main",
      color: 0xc0cfeb,
      shininess: 77.00,
      waveSpeed: 0.30,
      zoom: 0.70
    })
  }
}
