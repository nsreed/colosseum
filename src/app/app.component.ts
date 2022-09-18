import { Component, OnInit } from '@angular/core';
import { GunService } from './shared/services/gun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _ready: any = false;
  get ready() {
    return this._ready;
  }
  constructor(private gunService: GunService) {
    console.log('app started');
  }

  ngOnInit(): void {
    chrome.action.onClicked.addListener(tab => {
      console.log('clicked it');
      chrome.action.setBadgeText({
        text: ''
      });
      chrome.action.setBadgeBackgroundColor({
        color: 'blue'
      });
    });

    chrome.runtime.onMessage.addListener((message, sender) => {
      console.log(message, sender);
    });

    const version = this.gunService.gun.get('version');

    version.not(() => {
      console.log('no version defined');
    })
    version.on((v: any) => {
      if (!v) {
        console.log('got undefined version');
        version.put({
          major: 1,
          minor: 1,
          revision: 0
        });
      } else {
        console.log('got version', v);
        this._ready = v;
        version.off();
      }
    });

  }
}
