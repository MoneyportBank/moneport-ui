/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MainRoutes, mainRoutingProviders} from './main.routing';
import {AccessDeniedComponent} from './access.denied.component';
import {FimsSharedModule} from '../common/common.module';
import {NotificationComponent} from './notification.component';
import {QuickAccessModule} from '../quickAccess/quick-access.module'
import {TransactionsMonitoringMainModule} from '../transactionsMonitoring/main/transactions-monitoring-main.module'
import {TransactionsMonitoringSegmentsModule} from '../transactionsMonitoring/segments/transactions-monitoring-segments.module'
import {TransactionsMonitoringAlertsModule} from '../transactionsMonitoring/alerts/transactions-monitoring-alerts.module'
import {TransactionsMonitoringEntitiesModule} from '../transactionsMonitoring/entities/transactions-monitoring-entities.module'
import {TransactionsMonitoringTransactionsModule} from '../transactionsMonitoring/transactions/transactions-monitoring-transactions.module'
import {TransactionsMonitoringCasesModule} from '../transactionsMonitoring/cases/transactions-monitoring-cases.module'
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatTooltipModule,
  MatOptionModule,
  MatAutocompleteModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {CovalentLayoutModule, CovalentMediaModule} from '@covalent/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
  imports: [
    RouterModule.forChild(MainRoutes),
    FimsSharedModule,
    TranslateModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatTabsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatOptionModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    QuickAccessModule,
    TransactionsMonitoringMainModule,
    TransactionsMonitoringSegmentsModule,
    TransactionsMonitoringAlertsModule,
    TransactionsMonitoringEntitiesModule,
    TransactionsMonitoringTransactionsModule,
    TransactionsMonitoringCasesModule
  ],
  declarations: [
    MainComponent,
    AccessDeniedComponent,
    NotificationComponent
  ],
  providers: [
    mainRoutingProviders
  ],
})
export class MainModule {}
