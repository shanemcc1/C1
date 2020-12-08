import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject} from "rxjs";

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

  seasons_private_list;
  seasonsSubject = new Subject();
  seasons_list = this.seasonsSubject.asObservable();

  episodeID;


  constructor(private http: HttpClient) {}

  getSeasons(season, season_page_size)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/seasons?pn=' + season + '&ps=' + season_page_size).subscribe(response => {
      this.seasons_private_list = response;
      console.log('REESIIBEUGU');
      console.log(response);
      this.seasonsSubject.next(this.seasons_private_list);
    });
  }

  getEpisodes(page, pagesize)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones?pn=' + page + '&ps=' + pagesize).subscribe(response => {
      this.episodes_private_list = response;
      this.episodesSubject.next(this.episodes_private_list);
    });
  }

  getEpisode(id)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/' + id).subscribe(response => {
      this.episode_private_list = [response];
      this.episodeID = id;
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

  postReview(review){
    let postData = new FormData();
    postData.append('username', review.username);
    postData.append("comment", review.comment);
    postData.append("stars", review.stars);

    this.http.post('http://localhost:5000/api/v1.0/gameofthrones/' + this.episodeID + '/reviews', postData).subscribe(
      response => {
        this.getReviews(this.episodeID);
      }
    );
  }

  postEpisode(episode){
    let postEpisodeData = new FormData();
    console.log('episode name');
    console.log(episode);

    postEpisodeData.append('name', episode.name);
    postEpisodeData.append('season', episode.season);
    postEpisodeData.append('episode', episode.episode);
    postEpisodeData.append('airdate', episode.airdate);
    postEpisodeData.append('summary', episode.summary);
    postEpisodeData.append('reviews', episode.reviews);
    postEpisodeData.append('imbd_rating', episode.imbd_rating);
    postEpisodeData.append('imbd_url', episode.imbd_url);
    postEpisodeData.append('image', episode.image);
    console.log('postdata');
    console.log(postEpisodeData);

    this.http.post('http://localhost:5000/api/v1.0/gameofthrones', postEpisodeData).subscribe(
      response => {
        this.getEpisodes(1, 10);
      }
    );
  }
}
