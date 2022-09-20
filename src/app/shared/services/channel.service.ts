import { Injectable } from '@angular/core';
import { GunService } from './gun.service';
import { IChannel } from '../../models/arena';
import { scan, shareReplay, Subject } from 'rxjs';

function getMostRecent(thing: any) {
  if (thing && thing._ && thing._['>']) {
    const times = Object.values(thing._['>'] as number[]);
    return times[0]; // todo stop being lazy
  }
  return null;
}

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  channels = this.gunService.gun.get('defaultUser').get('channels');
  recentlyUpdated: IChannel[] = [];
  recent: Record<string, IChannel> = {};
  channelMap = this.channels.map() as any;

  constructor(private gunService: GunService) {
    this.queryRecent();
  }
  private _recent$ = new Subject<IChannel>();

  recent$ = this._recent$.pipe(shareReplay(3));

  private queryRecent() {
    (this.channels.map() as any).on((channel: IChannel, key: string) => {
      // tryna get data._.> keys and the highest value of that
      const updated = getMostRecent(channel); // TODO this is the earliest possibility to intercept. We only need like 3.
      // eh, we really only have to sort by most recent, right?
      this.recent[key] = channel;
      // console.log(channel, key);
      this._recent$.next(channel);
    });
  }
}
