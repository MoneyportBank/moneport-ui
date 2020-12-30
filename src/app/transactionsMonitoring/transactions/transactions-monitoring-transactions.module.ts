import {NgModule} from '@angular/core';
import {TransactionsMonitoringTransactionsComponent} from './transactions-monitoring-transactions.component';
import {NvD3Module} from 'ng2-nvd3';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ChartsModule} from 'ng2-charts';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {DataTableModule} from 'angular-4-data-table';
import {MatTabsModule} from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
        DataTableModule,
        BsDropdownModule.forRoot(),
    ],
    exports: [
        BsDropdownModule
    ],
    declarations: [TransactionsMonitoringTransactionsComponent],
    bootstrap: [TransactionsMonitoringTransactionsComponent]
})
export class TransactionsMonitoringTransactionsModule {
}
