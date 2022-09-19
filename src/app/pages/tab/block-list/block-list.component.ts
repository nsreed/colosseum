import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GunService } from '../../../shared/services/gun.service';
import { IBlock } from '../../../models/arena';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {
  blocksNode = this.gunService.gun.get('defaultUser').get('blocks');
  blocks: {
    [key: string]: IBlock
  } = {};
  constructor(public gunService: GunService, private changes: ChangeDetectorRef) {
    // console.log('starting list, getting block from root?');
    this.blocksNode.open((d) => {
      const data = { ...d } as any;
      // delete data['_'];
      Object.keys(data).filter(k => data[k] === null || data[k] === undefined).forEach(k => delete data[k]);
      Object.keys(data).filter(k => !data[k].owner).forEach(k => delete data[k]);
      this.blocks = data;
      this.changes.detectChanges();
    });
  }

  ngOnInit(): void {
  }

  onRemoveClick(key: string) {
    this.blocksNode.get<IBlock>(key as any).put(null as any);
  }
}
