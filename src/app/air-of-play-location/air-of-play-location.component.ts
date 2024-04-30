import {
  Component,
  inject
} from '@angular/core';
import {
  Input
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  Airofplaylocation
} from '../airofplaylocation';
import {
  PlaygroundService
} from '../services/playground.service';
import {
  RouterModule
} from '@angular/router';
import {
  DetailsComponent
} from '../details/details.component';

@Component({
  selector: 'app-air-of-play-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './air-of-play-location.component.html',
  styleUrl: './air-of-play-location.component.scss'
})

export class AirOfPlayLocationComponent {
  Airofplaylocationlist: Airofplaylocation[] = [];
  playgroundService: PlaygroundService = inject(PlaygroundService);
  @Input() airofplayLocation!: Airofplaylocation;
  @Input() airofplayLocationList!: Airofplaylocation[];


  constructor() {
    this.Airofplaylocationlist = this.playgroundService.getAllAirOfPlay();
  }
}
