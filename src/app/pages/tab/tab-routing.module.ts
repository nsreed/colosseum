

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';
import { BlockListComponent } from './block-list/block-list.component';
import { ChannelListComponent } from './channel-list/channel-list.component';

const routes: Routes = [
  {
    path: '',
    component: TabComponent,
    children: [
      {
        path: 'blocks',
        component: BlockListComponent
      },
      {
        path: 'channels',
        component: ChannelListComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tab/channels'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
