import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService} from './auth.service';
import { EpisodesComponent} from './episodes.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public authService: AuthService) {}
}
