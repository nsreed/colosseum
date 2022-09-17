import { Component, OnInit } from '@angular/core';
import { GunService } from '../../../shared/services/gun.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {
  blocks: {
    [key: string]: any
  } = {};
  constructor(public gunService: GunService) {
    console.log('starting list, getting block from root?');
    gunService.gun.get('blocks').open((data) => {
      console.log({ data });
      delete data['_'];
      console.log(data);
      Object.keys(data).filter(k => !data[k]).forEach(k => delete data[k]);
      Object.keys(data).filter(k => !data[k].owner).forEach(k => delete data[k]);
      this.blocks = data;
    });
  }

  ngOnInit(): void {
  }

}
