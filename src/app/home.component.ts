import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService} from './auth.service';
import { ActivatedRoute} from '@angular/router';
import { EpisodesComponent} from './episodes.component';
import { EpisodeComponent} from './episode.component';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public authService: AuthService, public webService: WebService, public route: ActivatedRoute , private router: Router) {
  }
  page = 1;
  page_size = 10;
  dropdownlabel = 1;

  season = 1;
  season_page_size = 8;

  ngOnInit() {
    this.webService.getEpisodes(this.page, this.page_size);
    this.webService.getSeasons(this.season, this.season_page_size);
  }

  goToSeasons($myParam: string = ''): void {
    const navigationDetails: string[] = ['/seasons'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  goToEpisodes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/gameofthrones'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
