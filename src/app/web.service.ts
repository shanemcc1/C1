import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class WebService{
  private episodes_private_list;
  episodesSubject = new Subject();
  episodes_list = this.episodesSubject.asObservable();

  constructor(private http: HttpClient) {}
  getEpisodes(page)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones?pn=' + page).subscribe(response => {
      this.episodes_private_list = response;
      console.log(response);
      this.episodesSubject.next(this.episodes_private_list);
    });
  }


  getEpisode(id: any)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/');
  }
}
