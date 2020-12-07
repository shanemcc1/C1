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
    this.webService.getEpisodes(this.page, this.page_size);
  }
  page = 2;
  page_size =10;
}
