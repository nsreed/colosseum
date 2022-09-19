import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GunService } from '../../../shared/services/gun.service';
import { IChannel } from '../../../models/arena';
import { BlockService } from '../../../shared/services/block.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  channelsNode = this.gunService.gun.get('defaultUser').get('channels');
  channels: {
    [key: string]: IChannel
  } = {};

  constructor(private gunService: GunService, private blockService: BlockService, private changes: ChangeDetectorRef) {
    this.channelsNode.open(d => {
      // console.log('new channel list');
      const data = { ...d } as any;
      delete data['_'];
      Object.keys(data).filter(k => data[k] === null || data[k] === undefined).forEach(k => delete data[k]);
      Object.keys(data).filter(k => !data[k].owner).forEach(k => delete data[k]);
      this.channels = data;
      this.changes.detectChanges();
    });
  }

  ngOnInit(): void {
  }

  onCreateClick() {
    this.channelsNode.set({
      title: 'New Channel',
      ...this.blockService.createBlock()
    })
  }

}
