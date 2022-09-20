import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GunService } from '../../../shared/services/gun.service';
import { IChannel } from '../../../models/arena';
import { BlockService } from '../../../shared/services/block.service';
import { IGunChain } from 'gun';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  channelsNode = this.gunService.gun.get('defaultUser').get('channels');
  channels: { [key: string]: IChannel | null } = {};

  constructor(private gunService: GunService, private blockService: BlockService, private changes: ChangeDetectorRef) {
    // (this.channelsNode.open as any)(d => {
    //   // console.log('new channel list');
    //   const data = { ...d } as any;
    //   // delete data['_'];
    //   Object.keys(data).filter(k => data[k] === null || data[k] === undefined).forEach(k => delete data[k]);
    //   // Object.keys(data).filter(k => !data[k].owner).forEach(k => delete data[k]);
    //   this.channels = data;
    //   this.changes.detectChanges();
    // }, { cleanNulls: false, clearNulls: false, clean: false });
  }

  ngOnInit(): void {
    const channelsMap = this.channelsNode.map() as any;
    // channelsMap.once((channel: any, key: any) => {
    //   // console.log({ channel, key });
    //   this.channels[key] = channel;
    //   this.changes.detectChanges();
    // });
    (this.channelsNode.open as any)((sc: Record<string, IChannel | null>) => {
      console.log(sc);
      delete sc['_'];
      this.channels = sc;
      this.changes.detectChanges();
    }, { depth: 3, meta: true });
  }

  onCreateClick() {
    this.channelsNode.set({
      title: 'New Channel',
      ...this.blockService.createBlock()
    })
  }

}
