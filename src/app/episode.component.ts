import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})

export class EpisodeComponent {

  reviewForm;

  constructor(public webService: WebService,
              public route: ActivatedRoute,
              public formBuilder: FormBuilder) {
    this.reviewForm = formBuilder.group({
      username: '',
      comment: '',
      stars: 5
    });
  }

  ngOnInit() {
    this.webService.getEpisode(this.route.snapshot.params.id);
    this.webService.getReviews(this.route.snapshot.params.id);
  }

  onSubmit(){
    console.log(this.reviewForm.value);
  }
}


