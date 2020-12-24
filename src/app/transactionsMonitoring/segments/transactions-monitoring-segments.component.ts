
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
}
