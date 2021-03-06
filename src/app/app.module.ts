import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodesComponent} from './episodes.component';
import { WebService} from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent} from './home.component';
import { EpisodeComponent} from './episode.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService} from './auth.service';
import { NavComponent} from './nav.component';
import { SeasonsComponent} from './seasons.component';


var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gameofthrones',
    component: EpisodesComponent
  },
  {
    path: 'gameofthrones/:id',
    component: EpisodeComponent
  },
  {
    path: 'seasons',
    component: SeasonsComponent
  },

];
@NgModule({
  declarations: [
    AppComponent, EpisodesComponent, EpisodeComponent, HomeComponent, NavComponent, SeasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
