import {NgModule} from '@angular/core';
import {QuickAccessComponent} from './quick-access.component';
import {NvD3Module} from 'ng2-nvd3';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        NvD3Module,
        ChartsModule,
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
    ],
    declarations: [QuickAccessComponent],
    bootstrap: [QuickAccessComponent]
})
export class QuickAccessModule {
}
