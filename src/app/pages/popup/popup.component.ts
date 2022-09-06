import { Component } from '@angular/core';
import { BaseAbstract } from '@core/abstract/base.abstract';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent extends BaseAbstract {
    constructor() {
        super();
    }

    async addBlock() {
        const [current] = await chrome.tabs.query({active: true, currentWindow: true});

        console.log(current.url);
    }
}
