import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { FormsModule } from '@angular/forms';
import { GlobalNavigationComponent } from './components/global-navigation/global-navigation.component';

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES,
        GlobalNavigationComponent,
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
        GlobalNavigationComponent
    ]
})
export class SharedModule { }
