import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
  constructor(public webService: WebService) {}

   ngOnInit() {
    this.webService.getEpisodes(this.page);
  }
  episode_list;
  page = 1;
}
