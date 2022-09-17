import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { FormsModule } from '@angular/forms';
import { GlobalNavigationComponent } from './components/global-navigation/global-navigation.component';
import { BlockComponent } from './components/block/block.component';
import { TimeStampComponent } from './components/time-stamp/time-stamp.component';
import { BlockTitleComponent } from './components/block-title/block-title.component';
import { BlockUrlComponent } from './components/block-url/block-url.component';
import { BlockScreenshotComponent } from './components/block-screenshot/block-screenshot.component';
import { BlockOwnerComponent } from './components/block-owner/block-owner.component';

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES,
        GlobalNavigationComponent,
        BlockComponent,
        TimeStampComponent,
        BlockTitleComponent,
        BlockUrlComponent,
        BlockScreenshotComponent,
        BlockOwnerComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES,
        GlobalNavigationComponent,
        BlockComponent
    ]
})
export class SharedModule { }
