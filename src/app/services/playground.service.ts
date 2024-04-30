import {
  Injectable
} from '@angular/core';
import {
  Airofplaylocation
} from '../airofplaylocation';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {
  Airofplaylocationlist: Airofplaylocation[] = [

    {
      id: 0,
      name: 'Parc Fraimillion',
      city: 'La férté saint Aubin',
      adress: '12 rue du jardin dans l\'île',
      photo: 'assets/Aire-de-jeuxOTPDB.JPG',
      numberGame: 4,
      inspect: true,
      functional: false,
    },
    {
      id: 1,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 2,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 3,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 4,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 5,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 6,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 7,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 8,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 9,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

    {
      id: 1,
      name: 'AireRandom',
      city: 'Paris',
      adress: '3 rue de Paris',
      photo: 'assets/airebase.webp',
      numberGame: 6,
      inspect: true,
      functional: true,
    },

  ]
  getAllAirOfPlay(): Airofplaylocation[] {
    return this.Airofplaylocationlist;
  }
  getAirOfPlayById(id: number): Airofplaylocation | undefined {
    return this.Airofplaylocationlist.find((airofplaylocation) => airofplaylocation.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
  constructor() {}
}
