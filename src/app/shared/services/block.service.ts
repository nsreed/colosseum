import { Injectable } from '@angular/core';
import { IBlock } from '../../models/arena';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor() { }

  createBlock(): Partial<IBlock> {
    return {
      created: {
        time: Date.now(),
        timezoneOffset: new Date().getTimezoneOffset()
      },
      owner: {
        userName: 'defaultUser'
      }
    }
  }
}
