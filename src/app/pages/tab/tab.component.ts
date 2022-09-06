import { Component } from '@angular/core';
import { BaseAbstract } from '@core/abstract/base.abstract';
import { GunService } from '../../shared/services/gun.service';
import { Channel } from '../../models/arena';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent extends BaseAbstract {
  channels: Channel[] = [

  ];
  constructor(public gunService: GunService) {
    super();
    console.log('starting list, getting block from root?');
    gunService.gun.get('block').on((data) => {
      console.log({ data });
    });
  }
}
