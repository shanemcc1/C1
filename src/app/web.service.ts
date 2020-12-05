import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WebService{
  episode_list: any;
  constructor(private http: HttpClient) {}

  getEpisodes()
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones').subscribe(response => {
      this.episode_list = response;
    });
  }
  /*
  getEpisode(id: any)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/' + id).toPromise();
  }
  */
}
