

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';
import { BlockListComponent } from './block-list/block-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: BlockListComponent
  },
  {
    path: '',
    redirectTo: '/tab/list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
