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

];
@NgModule({
  declarations: [
    AppComponent, EpisodesComponent, EpisodeComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
