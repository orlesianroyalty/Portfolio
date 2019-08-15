import {trigger, state, stagger, animate, style, group, query, transition, animateChild, sequence} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({position: 'fixed', width: '75%'}), {optional:true}),
      query('.tile', style({opacity: 0}), {optional: true}),
      query('.header-div', style({opacity: 0, width: '100%'}), {optional: true}),
      query('.container-div', style({opacity: 0}), {optional: true}),
      query('.button-container', style({opacity: 0}), {optional: true}),
      query('.button-container-prev', style({opacity: 0}), {optional: true}),
      group ([
          query(':enter', [
              style({transform: 'translateX(100%'}),
              animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
          ], {optional: true}),
          query(':leave', [
              style({transform: 'translateX(0%)'}),
              animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
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
        query(':enter .container-div', [
            style({transform: 'translateX(-100px)'}),
            animate('1s ease-in-out', style({transform: 'translateX(0px)', opacity: 1})),
        ], {optional: true}),
      ])
        ])   
  ])


  export const infoAnimation = trigger('infoAnimation', [
      
  ])