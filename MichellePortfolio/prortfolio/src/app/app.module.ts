import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const paths: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'project-list', component: ProjectlistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(paths),
    CarouselModule.forRoot(),
    WavesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
