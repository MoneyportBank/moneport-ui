import {NgModule} from '@angular/core';
import {TransactionsMonitoringCasesComponent} from './transactions-monitoring-cases.component';
import {NvD3Module} from 'ng2-nvd3';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ChartsModule} from 'ng2-charts';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {DataTableModule} from 'angular-4-data-table';
import {MatTabsModule} from '@angular/material';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        NvD3Module,
        ChartsModule,
        MatInputModule,
        MatSelectModule,
        MatTabsModule,
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
        CollapseModule,
        DataTableModule
    ],
    declarations: [TransactionsMonitoringCasesComponent],
    bootstrap: [TransactionsMonitoringCasesComponent]
})
export class TransactionsMonitoringCasesModule {
}
