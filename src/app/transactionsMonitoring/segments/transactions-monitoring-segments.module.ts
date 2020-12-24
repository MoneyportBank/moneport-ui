import {NgModule} from '@angular/core';
import {TransactionsMonitoringSegmentsComponent} from './transactions-monitoring-segments.component';
import {NvD3Module} from 'ng2-nvd3';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';
import { MatInputModule, MatSelectModule} from '@angular/material';
import {CollapseModule} from 'ngx-bootstrap/collapse';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        NvD3Module,
        ChartsModule,
        MatInputModule,
        MatSelectModule,
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
        CollapseModule
    ],
    declarations: [TransactionsMonitoringSegmentsComponent],
    bootstrap: [TransactionsMonitoringSegmentsComponent]
})
export class TransactionsMonitoringSegmentsModule {
}
