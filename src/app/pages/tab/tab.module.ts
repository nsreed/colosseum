import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { TabComponent } from './tab.component';
import { TabRoutingModule } from './tab-routing.module';
import { BlockListComponent } from './block-list/block-list.component';
import { ChannelListComponent } from './channel-list/channel-list.component';

@NgModule({
  declarations: [
    TabComponent,
    BlockListComponent,
    ChannelListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TabRoutingModule,
    ReactiveFormsModule
  ]
})
export class TabModule { }
