import { Component, OnInit } from '@angular/core';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { routerTransition } from './animations';
import { trigger, transition, animate, style } from '@angular/animations';
import { Title } from '@angular/platform-browser';

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
  title = 'Michelle Brannan';

  constructor(private titleServ: Title) {
    this.titleServ.setTitle(this.title);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
    VANTA.WAVES({
      el: "#container-main",
      color: 0x8ca6b6,
      shininess: 10.00,
      waveSpeed: 0.35,
      waveHeight: 8,
      zoom: 1.00
    })
  }
}
