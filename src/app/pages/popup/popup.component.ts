import { Component } from '@angular/core';
import { BaseAbstract } from '@core/abstract/base.abstract';
import { GunService } from '../../shared/services/gun.service';

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
        const [current] = await chrome.tabs.query({active: true, currentWindow: true});
        const url = current.url as string;
        const urlGun = this.gunService.gun.get('block').get(url);
        // TODO url contains path separators (. & /), you should find a better index
        urlGun.get('time').put(Date.now());
    }
}
