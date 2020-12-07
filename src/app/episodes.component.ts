import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
  page = 1;
  page_size = 10;

  constructor(public webService: WebService) {}

   ngOnInit() {
    this.webService.getEpisodes(this.page, this.page_size);
  }

}
