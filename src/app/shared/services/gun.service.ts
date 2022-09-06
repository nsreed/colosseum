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
    this.gun = new Gun({
    });
   }
}
