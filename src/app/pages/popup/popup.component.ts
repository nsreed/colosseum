import { Component } from '@angular/core';
import { BaseAbstract } from '@core/abstract/base.abstract';
import { GunService } from '../../shared/services/gun.service';
import { TimeStamp } from '../../models/aspects';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent extends BaseAbstract {
  constructor(public gunService: GunService) {
    super();
  }

  async addBlock() {
    const [current] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = current.url as string;
    const title = current.title;

    const owner = {
      userName: 'user'
    }
    const base64 = 'abcdef0123456789';
    const urlGun = this.gunService.gun.get('blocks').get(url);
    // TODO url contains path separators (. & /), you should find a better index

    const timeStamp: TimeStamp = {
      time: Date.now(),
      timezoneOffset: new Date().getTimezoneOffset()
    }

    const block = {
      title,
      titleText: title,
      url,
      owner,
      base64,
      timeStamp
    };
    console.log({ block });
    urlGun.put(block);
  }
}
