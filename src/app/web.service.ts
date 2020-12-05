import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WebService{
  constructor(private http: HttpClient) {}

  getEpisodes()
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones').toPromise();
  }
  getEpisode(id: any)
  {
    return this.http.get('http://localhost:5000/api/v1.0/gameofthrones/' + id).toPromise();
  }
}
