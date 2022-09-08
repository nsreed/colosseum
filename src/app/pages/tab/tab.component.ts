import { Component } from '@angular/core';
import { BaseAbstract } from '@core/abstract/base.abstract';
import { GunService } from '../../shared/services/gun.service';
import { UnionBlock } from '../../models/aspects';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent extends BaseAbstract {
  channels: UnionBlock[] = [
    {
      title: 'test',
      titleText: 'test',
      url: 'test.com',
      owner: {
        userName: 'user',
      },
      base64: 'abcdef0123456789'
    }
  ];
  blocks: any = {};
  constructor(public gunService: GunService) {
    super();
    console.log('starting list, getting block from root?');
    gunService.gun.get('blocks').open((data) => {
      console.log({ data });
      delete data['_'];
      this.blocks = data;
    });
  }
}
