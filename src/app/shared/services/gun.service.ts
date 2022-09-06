import { Injectable } from '@angular/core';
import { IGun, IGunInstance } from 'gun';
import 'gun/lib/rindexed';
import Gun from 'gun';
import 'gun/lib/open';

@Injectable({
  providedIn: 'root'
})
export class GunService {
  gun: IGunInstance;

  constructor() {
    // FIXME this should use {localStorage: false} but indexeddb doesn't persist data
    this.gun = new Gun({
    });
   }
}
