
import {Component} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';

@Component({
    templateUrl: './transactions-monitoring-segments.component.html'
})

export class TransactionsMonitoringSegmentsComponent {
    isCollapsedLB = true;
    isCollapsedTL = true;
    isCollapsedHRC = true;
    isCollapsedDormant = true;
    isCollapsedSTRUCT = true;
    isCollapsedBSANC = true;
    isCollapsedPSANC = true;
    isCollapsedRCTY = true;
    isCollapsedPNCTY = true;
    isCollapsedNCCY = true;
    isCollapsedIC90 = true;
    isCollapsedHRCAC = true;
    isCollapsedTVLST = true;
    isCollapsedTVLHA = true;
    isCollapsedTVLPA = true;
    isCollapsedTVLPB = true;
    isCollapsedTVL7D = true;
    isCollapsedTVLOC = true;
    showContent = false;
    showAllTransactions = false;
    showMediumRiskCustomers = false;
    showHighRiskCustomers = false;
    showLowRiskCustomers = false;
    showNonUK = false;
    showUK = false;

    show(type: string): void {
        this.showContent = true;

        this.showAllTransactions = false;
        this.showMediumRiskCustomers = false;
        this.showHighRiskCustomers = false;
        this.showLowRiskCustomers = false;
        this.showNonUK = false;
        this.showUK = false;

        switch (type) {
            case 'AllTransactions':
                this.showAllTransactions = true;
                break;
            case 'MediumRiskCustomers':
                this.showMediumRiskCustomers = true;
                break;
            case 'HighRiskCustomers':
                this.showHighRiskCustomers = true;
                break;
            case 'LowRiskCustomers':
                this.showLowRiskCustomers = true;
                break;
            case 'NonUK':
                this.showNonUK = true;
                break;
            case 'UK':
                this.showUK = true;
                break;
        }
    }
}
