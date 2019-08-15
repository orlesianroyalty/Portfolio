import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { TheForestComponent } from './the-forest/the-forest.component';

const paths: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/project-overview', pathMatch: 'full', data: {state: 'overview'}},
  {path: 'project-overview', component: ProjectsOverviewComponent, data: {state: 'overview'}},
  {path: 'project-list', component: ProjectlistComponent},
  {path: 'the-forest', component: TheForestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectlistComponent,
    HomeComponent,
    ProjectsOverviewComponent,
    TheForestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(paths),
    CarouselModule.forRoot(),
    WavesModule.forRoot(),
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
