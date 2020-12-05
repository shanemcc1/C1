import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class WebService{
  private episode_private_list;
  episodesSubject = new Subject();
  episode_list = this.episodesSubject.asObservable();

  constructor(private http: HttpClient) {}
  getEpisodes(page)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones?pn=' + page).subscribe(response => {
      this.episode_private_list = response;
      this.episodesSubject.next(this.episode_private_list);
    });
  }
  /*
  getEpisode(id: any)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/' + id).toPromise();
  }
  */
}
