import { Component, OnInit } from '@angular/core';
import { BaseAbstract } from '@core/abstract/base.abstract';
import { GunService } from '../../shared/services/gun.service';
import { TimeStamp } from '../../models/aspects';
import { IGunChain, IGunSchema } from 'gun';
import { IBlock, IReference, IResource } from 'src/app/models/arena';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent extends BaseAbstract implements OnInit {
  blocksNode = this.gunService.gun.get('defaultUser').get('blocks');

  constructor(public gunService: GunService) {
    super();
  }

  ngOnInit(): void {
    chrome.action.onClicked.addListener(async tab => {
      const color = chrome.storage.sync.get('color');
      console.log({ color });
    });
  }

  async addBlock() {
    const [current] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = current.url as string;
    const title = current.title || '';
    const base64 = await chrome.tabs.captureVisibleTab();

    const owner = {
      userName: 'defaultUser'
    }
    // TODO figure out why gun's typing is complaining if I try to make this reference IBlock
    const urlGun = this.blocksNode.get(url as any) as IGunChain<IGunSchema>;
    // TODO url contains path separators (. & /), you should find a better index

    const created: TimeStamp = {
      time: Date.now(),
      timezoneOffset: new Date().getTimezoneOffset()
    }

    const block: IBlock<IReference<IResource>> = {
      title,
      owner,
      content: {
        title,
        screenshot: {
          base64
        },
        url
      },
      created
    };
    console.log({ block });
    urlGun.put(block as any, (ack: any) => {
      console.log('put ack', ack);
    });
  }
}
