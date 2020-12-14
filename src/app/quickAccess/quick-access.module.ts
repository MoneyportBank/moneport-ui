import {NgModule} from '@angular/core';
import {QuickAccessComponent} from './quick-access.component';
import {NvD3Component} from 'ng2-nvd3';

@NgModule({
    declarations: [QuickAccessComponent, NvD3Component],
    bootstrap: [QuickAccessComponent]
})
export class QuickAccessModule {
}