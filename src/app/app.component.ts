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
export class AppComponent {
  ready = false;
  constructor(gunService: GunService) {
    const version = gunService.gun.get('appVersion');
    version.once(v => {

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
