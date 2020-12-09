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
  reviewUpdateForm;
  div1 = false;
  div2 = false;
  add_review_button = true;
  edit_button = true;
  delete_button = true;

   episode_id = this.webService.getEpisode(this.route.snapshot.params.id);
   review_id = this.webService.getReviews(this.route.snapshot.params.id);

   review_id_2;

  // tslint:disable-next-line:typedef
  div1Function(){
    this.div1 = true;
    this.add_review_button = false;
    }

      // tslint:disable-next-line:typedef
  div2Function(){
    this.div2 = true;

    this.delete_button = false;
    this.edit_button = false;
    }

          // tslint:disable-next-line:typedef
  div3Function(){
    this.delete_button = false;
    this.edit_button = false;
    }

              // tslint:disable-next-line:typedef
  div4Function(){
    this.div2 = false;
    this.delete_button = true;
    this.edit_button = true;
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
    this.reviewUpdateForm = formBuilder.group({
      updated_username: [ '', Validators.required],
      updated_comment: ['', Validators.required],
      updated_stars: 5
    });
  }

  onDelete(review_id)
  {
    this.webService.deleteReview(review_id);
  }

  onEdit(review_id)
  {
    console.log('LOKAAJIOJHQFHHI');
    console.log(review_id);
    console.log('above');
    this.webService.editReview(review_id, this.reviewUpdateForm.value);
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


