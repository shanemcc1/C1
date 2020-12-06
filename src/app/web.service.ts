import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class WebService{
  private episodes_private_list;
  episodesSubject = new Subject();
  episodes_list = this.episodesSubject.asObservable();

  episode_private_list;
  episodeSubject = new Subject();
  episode = this.episodeSubject.asObservable();

  reviews_private_list;
  reviewsSubject = new Subject();
  reviews_list = this.reviewsSubject.asObservable();


  constructor(private http: HttpClient) {}
  getEpisodes(page)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones?pn=' + page).subscribe(response => {
      this.episodes_private_list = response;
      this.episodesSubject.next(this.episodes_private_list);
    });
  }

  getEpisode(id)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/' + id).subscribe(response => {
      this.episode_private_list = [response];
      console.log([response]);
      this.episodeSubject.next(this.episode_private_list);
    });
  }

  getReviews(id)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/' + id + '/reviews').subscribe(response => {
      this.reviews_private_list = response;
      this.reviewsSubject.next(this.reviews_private_list);
    });
  }
}
