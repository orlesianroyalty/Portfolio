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
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';

const paths: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/project-overview', pathMatch: 'full'},
  {path: 'project-list', component: ProjectlistComponent},
  {path: 'project-overview', component: ProjectsOverviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectlistComponent,
    HomeComponent,
    ProjectsOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(paths),
    CarouselModule.forRoot(),
    WavesModule.forRoot(),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
