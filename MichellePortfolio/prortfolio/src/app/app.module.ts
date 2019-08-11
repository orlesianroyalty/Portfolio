import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
    MatToolbarModule,
    RouterModule.forRoot(paths),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
