import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService} from './auth.service';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  template: '<img src="../assets/img">',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
  page = 1;
  page_size = 10;
  dropdownlabel = 1;

  season = 1;
  season_page_size = 1;

  episodeForm;

  constructor(public formBuilder: FormBuilder, public webService: WebService, public authService: AuthService) {
    this.episodeForm = formBuilder.group({
      name: [ '', Validators.required],
      season: ['', Validators.required],
      episode: ['', Validators.required],
      airdate: ['', Validators.required],
      summary: ['', Validators.required],
      reviews: [[]],
      imbd_rating: ['', Validators.required],
      imbd_url: ['', Validators.required],
      image: ['', Validators.required],

    });
  }

   ngOnInit() {
    this.webService.getEpisodes(this.page, this.page_size);
    this.webService.getSeasons(this.season, this.season_page_size);
  }
    onSubmit(){
    this.webService.postEpisode(this.episodeForm.value);
    this.episodeForm.reset();
  }


  isInvalid(control){
    return this.episodeForm.controls[control].invalid &&
      this.episodeForm.controls[control].touched;
  }

  isUntouched(){
    return this.episodeForm.controls.name.pristine ||
          this.episodeForm.controls.season.pristine ||
          this.episodeForm.controls.episode.pristine ||
          this.episodeForm.controls.airdate.pristine ||
          this.episodeForm.controls.summary.pristine ||
          this.episodeForm.controls.imbd_rating.pristine ||
          this.episodeForm.controls.imbd_url.pristine ||
          this.episodeForm.controls.image.pristine;
  }

  isIncomplete(){
    console.log('INCOMPLETE');
    return this.isInvalid('name') || this.isInvalid('season') ||
      this.isInvalid('episode') ||
      this.isInvalid('airdate') ||
      this.isInvalid('summary') ||
      this.isInvalid('imbd_rating') ||
      this.isInvalid('imbd_url') ||
      this.isInvalid('image') ||
      this.isUntouched();
  }

}
