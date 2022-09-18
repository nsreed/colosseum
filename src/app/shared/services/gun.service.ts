import { Injectable, NgZone } from '@angular/core';
import { IGunInstance } from 'gun';
import Gun from 'gun';
import { IGunRoot } from '../../models/arena';

@Injectable({
  providedIn: 'root'
})
export class GunService {
  gun: IGunInstance<IGunRoot>;

  constructor(private ngZone: NgZone) {

    this.gun = new Gun({
      localStorage: false,
    });
  }
}
