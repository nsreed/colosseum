import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { COMPONENTS } from './components';
import { BlockFormComponent } from './components/block-form/block-form.component';
import { BlockOwnerComponent } from './components/block-owner/block-owner.component';
import { BlockScreenshotComponent } from './components/block-screenshot/block-screenshot.component';
import { BlockTitleComponent } from './components/block-title/block-title.component';
import { BlockUrlComponent } from './components/block-url/block-url.component';
import { BlockComponent } from './components/block/block.component';
import { ChannelSearchComponent } from './components/channel-search/channel-search.component';
import { ChannelComponent } from './components/channel/channel.component';
import { GlobalNavigationComponent } from './components/global-navigation/global-navigation.component';
import { TimeStampComponent } from './components/time-stamp/time-stamp.component';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';

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
    BlockFormComponent,
    ChannelComponent,
    ChannelSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    OverlayModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
    GlobalNavigationComponent,
    BlockComponent,
    ChannelComponent
  ]
})
export class SharedModule { }
