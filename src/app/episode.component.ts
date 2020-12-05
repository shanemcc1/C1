import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})


export class EpisodeComponent {
  constructor(private webService: WebService,
              private route: ActivatedRoute) {}
/*
  async ngOnInit() {
    var response = await this.webService.getEpisode(
      this.route.snapshot.params.id);
    this.episode = response;
  }
  */
  episode;
}

