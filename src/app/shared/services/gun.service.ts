import { Injectable } from '@angular/core';
import { IGunInstance } from 'gun';
import Gun from 'gun';

@Injectable({
  providedIn: 'root'
})
export class GunService {
  gun: IGunInstance;

  constructor() {
    // FIXME this should use {localStorage: false} but indexeddb doesn't persist data
    this.gun = new Gun({
      localStorage: true
    });
  }
}
