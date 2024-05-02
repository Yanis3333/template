import {
  Component,
  inject,
  input
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
  imports: [RouterModule, DetailsComponent],
  templateUrl: './air-of-play-location.component.html',
  styleUrl: './air-of-play-location.component.scss'
})

export class AirOfPlayLocationComponent {
  // playgroundService = inject(PlaygroundService);

  @Input() airofplayLocation!: Airofplaylocation;
  // airofplayLocation = input<Airofplaylocation>();
  // airofplayLocation = input.required<Airofplaylocation>();
}