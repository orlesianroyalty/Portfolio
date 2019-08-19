import {trigger, state, stagger, animate, style, group, query, transition, animateChild, sequence} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({position: 'fixed', width: '75%'}), {optional:true}),
      query('.tile', style({opacity: 0}), {optional: true}),
      query('.header-div', style({opacity: 0, width: '100%'}), {optional: true}),
      query('.container-div', style({opacity: 0}), {optional: true}),
      query('.programmer', style({opacity: 0}), {optional: true}),
      query('.project-lead', style({opacity: 0}), {optional: true}),
      query('.event', style({opacity: 0}), {optional: true}),
      group([
          query(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('1s ease-in-out', style({transform: 'translateX(-100%'}))
          ], {optional: true}),
      ]),
      sequence ([
        query(':enter .header-div', stagger(400, [
            style({transform: 'translateY(100px)'}),
            animate('1s ease-in-out', style({transform: 'translateY(0px)', opacity: 1})),
        ]), {optional: true}),
        query(':enter .tile', stagger(400, [
            style({transform: 'translateY(100px)'}),
            animate('1s ease-in-out', style({transform: 'translateY(0px)', opacity: 1})),
        ]), {optional: true}),
        query(':enter .programmer', [
            animate(600, style({opacity: 1}))
        ], {optional: true}),
        query(':enter .project-lead', [
            animate(600, style({opacity: 1}))
        ], {optional: true}),
        query(':enter .event', [
            animate(600, style({opacity: 1}))
        ], {optional: true}),
        query(':enter .container-div', [
            style({transform: 'translateY(100px)'}),
            animate('1s ease-in-out', style({transform: 'translateX(0px)', opacity: 1})),
        ], {optional: true}),
      ])
        ])
  ])
  export const infoAnimation = trigger('infoAnimation', [
      
  ])