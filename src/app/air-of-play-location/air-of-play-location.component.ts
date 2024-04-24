import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Airofplaylocation } from '../airofplaylocation';

@Component({
  selector: 'app-air-of-play-location',
  standalone: true,
  imports: [],
  templateUrl: './air-of-play-location.component.html',
  styleUrl: './air-of-play-location.component.scss'
})

export class AirOfPlayLocationComponent {
  @Input() airofplayLocation!: Airofplaylocation;
  frem: Airofplaylocation = {
    id: 1234,
    name: 'Parc Fraimillion',
    city: 'La férté saint Aubin',
    adress: '12 rue du jardin dans l\'île',
    photo: 'assets/Aire-de-jeuxOTPDB.JPG',
    numberGame: 4,
    inspect: true,
    functional: false,
  };
  
  airdejeu: Airofplaylocation = {
    id: 1,
    name: 'AireRandom',
    city: 'Paris',
    adress: '3 rue de Paris',
    photo: 'assets/airebase.webp',
    numberGame: 6,
    inspect: true,
    functional: true,
  };
  
}
