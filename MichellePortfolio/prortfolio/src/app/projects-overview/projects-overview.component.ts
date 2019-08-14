import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { trigger, state, style, animation, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity:1})),
      transition(':enter', [
        style({opacity:0}),
        animate(1000)
      ]),
      transition(':leave', [
        animate(1000, style({opacity:0}))
      ])
    ])
  ]
})
export class ProjectsOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
