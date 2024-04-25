import {
  Component,
  inject
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  AirOfPlayLocationComponent
} from '../air-of-play-location/air-of-play-location.component';
import {
  Airofplaylocation
} from '../airofplaylocation';
import {
  PlaygroundService
} from '../playground.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AirOfPlayLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
 
}
