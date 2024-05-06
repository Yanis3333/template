import {
  Component,
  Signal,
  WritableSignal,
  computed,
  inject,
  input,
  signal
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
import { __values } from 'tslib';

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

// zone test Writable Signals
// __________________________
// const count = signal(0);
// Signals are getter functions - calling them reads their value.
// console.log('The count is: ' + count());

// count.set(3);
// console.log('Maintenant le compte est de : ' + count());

// count.update(value=>value+1);
// console.log('Maintenant le compte à bouger : ' + count());

// zone test Signaux informatique (computed signals)
// _________________________________________________
// const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
// console.log('count : ' + count());

// dépendance dynamiques
const showCount = signal(false);
const count = signal(0);
// Avec computed() toujours appeler la méthode pour voir les résultat
const conditionalCount = computed(() => {
  if (showCount()) {
    console.log(`The count is ${count()}.`);
  } else {
    console.log('Nothing to see here!');
  }
});
// Appel de la méthode
conditionalCount()