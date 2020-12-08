import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { AuthService} from './auth.service';

@Component({
  selector: 'episode',
  templateUrl: './episode.component.html',
  template: '<img src="../assets/img">',
  styleUrls: ['./episode.component.css']
})

export class EpisodeComponent {

  reviewForm;
  div1 = false;
  add_review_button = true;

  // tslint:disable-next-line:typedef
  div1Function(){
    this.div1 = true;
    this.add_review_button = false;
    }

  constructor(public webService: WebService,
              public route: ActivatedRoute,
              public formBuilder: FormBuilder,
              public authService: AuthService) {
    this.reviewForm = formBuilder.group({
      username: [ '', Validators.required],
      comment: ['', Validators.required],
      stars: 5
    });
  }

  ngOnInit() {
    this.webService.getEpisode(this.route.snapshot.params.id);
    this.webService.getReviews(this.route.snapshot.params.id);
  }

  onSubmit(){
    this.webService.postReview(this.reviewForm.value);
    this.reviewForm.reset();
  }

  isInvalid(control){
    return this.reviewForm.controls[control].invalid &&
      this.reviewForm.controls[control].touched;
  }

  isUntouched(){
    return this.reviewForm.controls.username.pristine ||
          this.reviewForm.controls.comment.pristine;
  }
  isIncomplete(){
    return this.isInvalid('username') || this.isInvalid('comment') || this.isUntouched();
  }
}


