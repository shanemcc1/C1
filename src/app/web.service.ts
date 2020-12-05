import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject} from "rxjs";

@Injectable()
export class WebService{
  private episode_list: any;
  episodesSubject = new Subject();
  constructor(private http: HttpClient) {}

  getEpisodes()
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones').subscribe(response => {
      this.episode_list = response;
      this.episodesSubject.next(this.episode_list);
    });
  }
  /*
  getEpisode(id: any)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/' + id).toPromise();
  }
  */
}
