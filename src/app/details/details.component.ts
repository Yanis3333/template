import {Component, Injectable, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { Airofplaylocation } from '../airofplaylocation';
import { PlaygroundService } from '../services/playground.service';
import { HomeComponent } from '../home/home.component';
import { AirOfPlayLocationComponent } from '../air-of-play-location/air-of-play-location.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,AirOfPlayLocationComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  playgroundService = inject(PlaygroundService);
  airofplay: Airofplaylocation | undefined;
  airofplayLocationId = -1;

  constructor() {
      const airofplayLocationId = Number(this.route.snapshot.params['id']);
      this.airofplay = this.playgroundService.getAirOfPlayById(airofplayLocationId);
  }
}
