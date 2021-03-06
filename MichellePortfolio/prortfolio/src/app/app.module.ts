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
import { TigerbookComponent } from './tigerbook/tigerbook.component';
import { DracarysComponent } from './dracarys/dracarys.component';
import { SnakesladdersComponent } from './snakesladders/snakesladders.component';
import { DblockscreenComponent } from './dblockscreen/dblockscreen.component';
import { IconsModule } from 'angular-bootstrap-md'

const paths: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/project-overview', pathMatch: 'full', data: {state: 'overview'}},
  {path: 'project-overview', component: ProjectsOverviewComponent, data: {state: 'overview'}},
  {path: 'project-list', component: ProjectlistComponent},
  {path: 'the-forest', component: TheForestComponent},
  {path: 'dracarys', component: DracarysComponent},
  {path: 'snakesladders', component: SnakesladdersComponent},
  {path: 'tigerbook', component: TigerbookComponent},
  {path: 'dblockscreen', component: DblockscreenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectlistComponent,
    HomeComponent,
    ProjectsOverviewComponent,
    TheForestComponent,
    TigerbookComponent,
    DracarysComponent,
    SnakesladdersComponent,
    DblockscreenComponent
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
