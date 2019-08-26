import { Component, OnInit } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})
export class ProjectlistComponent implements OnInit {
  videoForest: any = 'https://www.youtube.com/embed/SVKfiy2Zmjs';
  videoHome: any = "https://www.youtube.com/embed/rbw9sAVrqdI";
  videoDracarys: any = "https://www.youtube.com/embed/fNRoTHUNybk";
  

  constructor(private dom: DomSanitizer) { 
    this.videoForest = this.dom.bypassSecurityTrustResourceUrl(this.videoForest);
    this.videoHome = this.dom.bypassSecurityTrustResourceUrl(this.videoHome);
    this.videoDracarys = this.dom.bypassSecurityTrustResourceUrl(this.videoDracarys);
  }

  ngOnInit() {
  }

}
