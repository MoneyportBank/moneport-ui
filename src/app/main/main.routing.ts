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
import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {ChangePasswordGuard} from '../services/security/change.password.service';
import {AccessDeniedComponent} from './access.denied.component';
import {PermissionGuard} from '../services/security/authz/permission.guard';
import {QuickAccessComponent} from '../quickAccess/quick-access.component';
import {TransactionsMonitoringMainComponent} from '../transactionsMonitoring/main/transactions-monitoring-main.component';
import {TransactionsMonitoringSegmentsComponent} from '../transactionsMonitoring/segments/transactions-monitoring-segments.component';
import {TransactionsMonitoringAlertsComponent} from '../transactionsMonitoring/alerts/transactions-monitoring-alerts.component';
import {TransactionsMonitoringEntitiesComponent} from '../transactionsMonitoring/entities/transactions-monitoring-entities.component';
import {TransactionsMonitoringTransactionsComponent} from '../transactionsMonitoring/transactions/transactions-monitoring-transactions.component';
import {TransactionsMonitoringCasesComponent} from '../transactionsMonitoring/cases/transactions-monitoring-cases.component';


export const MainRoutes: Routes = [
    {
        path: '', component: MainComponent, canActivateChild: [ChangePasswordGuard, PermissionGuard], children: [
            {path: '', redirectTo: '/quickAccess', pathMatch: 'full'},
            {path: 'quickAccess', component: QuickAccessComponent, data: {title: 'Quick access'}},
            {
                path: 'transactionsMonitoringMain',
                component: TransactionsMonitoringMainComponent,
                data: {title: 'Transactions Monitoring Main Dashboard'}
            },
            {
                path: 'transactionsMonitoringSegments',
                component: TransactionsMonitoringSegmentsComponent,
                data: {title: 'Transactions Monitoring Segments'}
            },
            {
                path: 'transactionsMonitoringAlerts',
                component: TransactionsMonitoringAlertsComponent,
                data: {title: 'Transactions Monitoring Alerts'}
            },
            {
                path: 'transactionsMonitoringEntities',
                component: TransactionsMonitoringEntitiesComponent,
                data: {title: 'Transactions Monitoring Entities'}
            },
            {
                path: 'transactionsMonitoringTransactions',
                component: TransactionsMonitoringTransactionsComponent,
                data: {title: 'Transactions Monitoring Transactions'}
            },
            {
                path: 'transactionsMonitoringCases',
                component: TransactionsMonitoringCasesComponent,
                data: {title: 'Transactions Monitoring Cases'}
            },
            {path: 'offices', loadChildren: './../offices/office.module#OfficeModule'},
            {path: 'employees', loadChildren: './../employees/employee.module#EmployeeModule'},
            {path: 'roles', loadChildren: './../roles/role.module#RoleModule'},
            {path: 'user', loadChildren: './../user/user.module#UserModule'},
            {path: 'customers', loadChildren: './../customers/customer.module#CustomerModule'},
            {path: 'groups', loadChildren: './../groups/group.module#GroupModule'},
            {path: 'accounting', loadChildren: './../accounting/accounting.module#AccountingModule'},
            {path: 'loans', loadChildren: './../loans/products/product.module#ProductModule'},
            {path: 'deposits', loadChildren: './../depositAccount/deposit-account.module#DepositAccountModule'},
            {path: 'teller', loadChildren: './../teller/teller.module#TellerModule'},
            {path: 'reports', loadChildren: './../reporting/reporting.module#ReportingModule'},
            {path: 'denied', component: AccessDeniedComponent, data: {title: 'Not allowed'}}
        ]
    },
    {
        path: 'changePassword', loadChildren: './../user/user.module#UserModule', data: {title: 'Change password'}
    }

];

export const mainRoutingProviders: any[] = [
    ChangePasswordGuard,
    PermissionGuard
];
