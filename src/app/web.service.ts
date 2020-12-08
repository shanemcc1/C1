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

  season_private_list;
  seasonSubject = new Subject();
  season_list = this.seasonSubject.asObservable();

  episodeID;
  seasonID;


  constructor(private http: HttpClient) {}

  getSeasons(season, season_page_size)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/seasons?pn=' + season + '&ps=' + season_page_size).subscribe(response => {
      this.seasons_private_list = response;
      this.seasonsSubject.next(this.seasons_private_list);
    });
  }

  getSeason(id)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/seasons' + id).subscribe(response => {
      this.season_private_list = [response];
      this.seasonID = id;
      this.seasonSubject.next(this.season_private_list);
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
    let postData = new FormData();
    postData.append('name', episode.name);
    postData.append('season', episode.season);
    postData.append('episode', episode.episode);
    postData.append('airdate', episode.airdate);
    postData.append('summary', episode.summary);
    postData.append('reviews', episode.reviews);
    postData.append('imbd_rating', episode.imbd_rating);
    postData.append('imbd_url', episode.imbd_url);
    postData.append('image', episode.image);

    this.http.post('http://localhost:5000/api/v1.0/gameofthrones', postData).subscribe(
      response => {
        this.getEpisodes(1, 10);
      }
    );
  }

    postSeason(season){
    let postData = new FormData();
    postData.append('season_number', season.season_number);
    postData.append('season_description', season.season_description);
    postData.append('season_rating', season.season_rating);
    postData.append('season_image', season.season_image);
    console.log(postData);
    console.log('yeye');
    console.log(season);
    this.http.post('http://localhost:5000/api/v1.0/gameofthrones/seasons', postData).subscribe(
      response => {
        this.getSeasons(1, 10);
      }
    );
  }
}

/* https://image.tmdb.org/t/p/original/50l0vWylWvucHs0xh64yBAWYTcR.jpg */

