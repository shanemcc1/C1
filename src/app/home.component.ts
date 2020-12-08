import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService} from './auth.service';
import { EpisodesComponent} from './episodes.component';
import { EpisodeComponent} from './episode.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public authService: AuthService, public webService: WebService) {
  }
  season = 1;
  season_page_size = 8;

  ngOnInit() {

    this.webService.getSeasons(this.season, this.season_page_size);
  }
}
