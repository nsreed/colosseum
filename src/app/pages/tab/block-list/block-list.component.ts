import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GunService } from '../../../shared/services/gun.service';
import { IBlock } from '../../../models/arena';
import { IGunChain } from 'gun';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {
  blocksNode = this.gunService.gun.get('defaultUser').get('blocks');

  blockMap: {
    [key: string]: (IBlock & { _: { '#': string } }) | null
  } = {};

  blocks: IBlock[] = [];


  constructor(public gunService: GunService, private changes: ChangeDetectorRef) {
    // console.log('starting list, getting block from root?');
    // this.blocksNode.open((d) => {
    //   console.log(d);
    //   const data = { ...d } as any;
    //   // delete data['_'];
    //   Object.keys(data).filter(k => data[k] === null || data[k] === undefined).forEach(k => delete data[k]);
    //   Object.keys(data).filter(k => !data[k].owner).forEach(k => delete data[k]);
    //   this.blocks = data;
    //   this.changes.detectChanges();
    // });
  }

  ngOnInit(): void {
    const bm = this.blocksNode.map() as IGunChain<any>;
    bm.on((block, key) => {
      if (!block) {
        delete this.blockMap[key];
      } else {
        const soul = block._['#'];
        if (soul === undefined) {
          console.error('no soul, but a gun thing');
          return;
        }
        (this.blocksNode.get(key)).load((fullBlock: any) => {
          const sb = {
            ...fullBlock,
            _: {
              '#': soul
            }
          };
          this.blocks.push(sb)
          this.blockMap[key] = sb;
        });
        // this.blocks[key] = block;
      };
    });
  }

  onRemoveClick(key: string) {
    this.blocksNode.get<IBlock>(key as any).put(null as any);
  }
}
