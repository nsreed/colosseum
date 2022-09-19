import { Component, OnInit } from '@angular/core';
import { BaseAbstract } from '@core/abstract/base.abstract';
import { GunService } from '../../shared/services/gun.service';
import { UnionBlock } from '../../models/aspects';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent extends BaseAbstract implements OnInit {
  constructor(public gunService: GunService) {
    super();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
