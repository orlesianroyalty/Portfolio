import { Component, OnInit } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../animations';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss'],
  animations: [routerTransition]
})
export class ProjectlistComponent implements OnInit {
  carouselID: any;


  constructor(private actRoute: ActivatedRoute) { 
  
  }

  ngOnInit() {
    this.carouselID = this.actRoute.snapshot.paramMap.get("id");
    
    
  }

}
