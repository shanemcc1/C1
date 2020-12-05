import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
  constructor(private webService: WebService) {}

  async ngOnInit() {
    var response = await this.webService.getEpisodes();
    this.episode_list = response;
  }
  episode_list: any;
}
