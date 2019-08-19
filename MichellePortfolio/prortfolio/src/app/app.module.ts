import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { IconsModule } from 'angular-bootstrap-md'

const paths: Routes = [
  {path: '', redirectTo:'/project-list', pathMatch: 'full', data: {state: 'overview'}},
  {path: 'project-overview', component: ProjectsOverviewComponent, data: {state: 'overview'}},
  {path: 'project-list', component: ProjectlistComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectlistComponent,
    ProjectsOverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(paths),
    CarouselModule.forRoot(),
    WavesModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
