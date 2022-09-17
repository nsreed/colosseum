import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TabComponent } from './tab.component';
import { TabRoutingModule } from './tab-routing.module';
import { BlockListComponent } from './block-list/block-list.component';

@NgModule({
    declarations: [
        TabComponent,
        BlockListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TabRoutingModule
    ]
})
export class TabModule { }
