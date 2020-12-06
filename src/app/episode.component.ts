import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})

export class EpisodeComponent {
  constructor(public webService: WebService,
              public route: ActivatedRoute) {}
  ngOnInit() {
    this.webService.getEpisode(this.route.snapshot.params.id);
    this.webService.getReviews(this.route.snapshot.params.id);
  }
}


