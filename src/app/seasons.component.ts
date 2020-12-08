import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService} from './auth.service';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'seasons',
  templateUrl: './seasons.component.html',
  template: '<img src="../assets/img">',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent {
  season = 1;
  season_page_size = 10;
  seasonForm;

  constructor(public formBuilder: FormBuilder, public webService: WebService, public authService: AuthService) {
    this.seasonForm = formBuilder.group({
      season_number: [ '', Validators.required],
      season_description: ['', Validators.required],
      season_rating: ['', Validators.required],
      season_image: ['', Validators.required]
    });
  }

   ngOnInit() {
    this.webService.getSeasons(this.season, this.season_page_size);
  }
    onSubmit(){
    this.webService.postSeason(this.seasonForm.value);
    this.seasonForm.reset();
  }
  isInvalid(control){
    return this.seasonForm.controls[control].invalid &&
      this.seasonForm.controls[control].touched;
  }

  isUntouched(){
    return this.seasonForm.controls.season_number.pristine ||
          this.seasonForm.controls.season_description.pristine ||
          this.seasonForm.controls.season_rating.pristine ||
          this.seasonForm.controls.season_image.pristine;
  }

  isIncomplete(){
    console.log('INCOMPLETE');
    return this.isInvalid('season_number') ||
      this.isInvalid('season_description') ||
      this.isInvalid('season_rating') ||
      this.isInvalid('season_image') ||
      this.isUntouched();
  }
}
