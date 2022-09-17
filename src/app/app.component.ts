import { Component } from '@angular/core';
import { GunService } from './shared/services/gun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ready = false;
  constructor(gunService: GunService) {
    const version = gunService.gun.get('appVersion');
    version.once(v => {
      if (!v) {
        console.log(`DB didn't have a version number, first startup?`);

        version.put({
          major: 1,
          minor: 1,
          revision: 0
        });
      }
    });
  }
}
