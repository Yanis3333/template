import {
  Component
} from '@angular/core';
import {
  HomeComponent
} from './home/home.component';
import {
  AirOfPlayLocationComponent
} from "./air-of-play-location/air-of-play-location.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent, AirOfPlayLocationComponent]
})
export class AppComponent {
  title = 'homes';
}
