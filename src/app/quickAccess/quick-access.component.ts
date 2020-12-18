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
import {Component} from '@angular/core';
import {OnInit, ViewEncapsulation} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';

declare let d3: any;

@Component({
    templateUrl: './quick-access.component.html',
    styleUrls: [
        '../../../node_modules/nvd3/build/nv.d3.css'
    ]
})

export class QuickAccessComponent implements OnInit {
    lineChartCustomer;
    lineChartTransactions;
    donutChart;
    dataLineChartCustomerAttrition;
    dataLineChartCustomerAcquisition;
    dataLineChartTransactionsVolumeCorporate;
    dataLineChartTransactionsVolumeIndividuals;
    dataDonutChartMonthlyPlansCorporate;
    dataDonutChartMonthlyPlansIndividual;

    // Pie
    public pieChartLabels: string[] = ['Standard', 'Plus', 'Premium'];
    public pieChartCorporateData: number[] = [20, 50, 30];
    public pieChartIndividualData: number[] = [10, 44, 46];
    public pieChartType  = 'pie';


    // lineChart
    public lineChartData: Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40, 67, 45, 67, 34, 78], label: 'Corporate'},
        {data: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 90], label: 'Individual'}
    ];
    public lineChartTransactionVolumeCorporateData: Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40, 67, 45, 67, 34, 78,
                81, 56, 55, 40, 67, 45, 67, 34, 78, 56, 34, 67
            ], label: 'Corporate'}
    ];
    public lineChartTransactionVolumeIndividualsData: Array<any> = [
        {data: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 90,
                55, 40, 67, 45, 67, 34, 81, 56, 55, 40, 67, 89
            ], label: 'Individuals'}
    ];
    public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    public lineChartTransactionLabels: Array<any> = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(3,142,203,0.2)',
            borderColor: '#038ecb',
            pointBackgroundColor: '#035b87',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'rgba(255,193,7,0.2)',
            borderColor: '#ffc107',
            pointBackgroundColor: '#906a07',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];
    public lineChartColorsCorporate: Array<any> = [
        {
            backgroundColor: 'rgba(3,142,203,0.2)',
            borderColor: '#038ecb',
            pointBackgroundColor: '#035b87',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartColorsIndividuals: Array<any> = [
        {
            backgroundColor: 'rgba(255,193,7,0.2)',
            borderColor: '#ffc107',
            pointBackgroundColor: '#906a07',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    // public randomize(): void {
    //     let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    //     for (let i = 0; i < this.lineChartData.length; i++) {
    //         _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    //         for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //             _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //         }
    //     }
    //     this.lineChartData = _lineChartData;
    // }

    // events
    // public chartClicked(e: any): void {
    //     console.log(e);
    // }
    //
    // public chartHovered(e: any): void {
    //     console.log(e);
    // }

    ngOnInit() {
        this.lineChartCustomer = {
            chart: {
                type: 'lineChart',
                height: 300,
                margin: {
                    top: 20,
                    right: 55,
                    bottom: 40,
                    left: 55
                },
                duration: 500,
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function (e) {
                        console.log('stateChange');
                    },
                    changeState: function (e) {
                        console.log('changeState');
                    },
                    tooltipShow: function (e) {
                        console.log('tooltipShow');
                    },
                    tooltipHide: function (e) {
                        console.log('tooltipHide');
                    }
                },
                xAxis: {
                    tickFormat: function (d) {
                        return d3.time.format('%b')(new Date(d))
                    }
                },
                yAxis: {
                    axisLabel: '',
                    axisLabelDistance: 10
                },
                callback: function (chart) {
                    console.log('!!! lineChart callback !!!');
                }
            }
        }
        this.lineChartTransactions = {
            chart: {
                type: 'lineChart',
                height: 300,
                margin: {
                    top: 20,
                    right: 55,
                    bottom: 40,
                    left: 55
                },
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function (e) {
                        console.log('stateChange');
                    },
                    changeState: function (e) {
                        console.log('changeState');
                    },
                    tooltipShow: function (e) {
                        console.log('tooltipShow');
                    },
                    tooltipHide: function (e) {
                        console.log('tooltipHide');
                    }
                },
                xAxis: {
                    tickFormat: function (d) {
                        return d3.time.format('%H')(new Date(d)) + 'h'
                    },
                    axisLabelDistance: 1000
                },
                yAxis: {
                    axisLabel: '',
                    axisLabelDistance: 10
                },
                callback: function (chart) {
                    console.log('!!! lineChart callback !!!');
                }
            }
        }
        this.donutChart = {
            chart: {
                type: 'pieChart',
                height: 200,
                donut: true,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                // pie: {
                //     startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                //     endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                // },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 5,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        }
        this.dataLineChartCustomerAttrition = [
            {
                values: [
                    {x: 1577836800000, y: 55},
                    {x: 1580515200000, y: 62},
                    {x: 1583020800000, y: 58},
                    {x: 1585699200000, y: 69},
                    {x: 1588291200000, y: 61},
                    {x: 1590969600000, y: 72},
                    {x: 1593561600000, y: 84}
                ],
                key: 'Corporate',
                color: '#038ecb',
                area: true
            },
            {
                values: [
                    {x: 1607472000000, y: 75},
                    {x: 1605571200000, y: 58},
                    {x: 1602892800000, y: 67},
                    {x: 1600300800000, y: 87},
                    {x: 1597622400000, y: 91},
                    {x: 1594622400000, y: 88},
                    {x: 1591622400000, y: 54}
                ],
                key: 'Individual',
                color: '#ffc107',
                area: true
            }
        ];
        this.dataLineChartCustomerAcquisition = [
            {
                values: [
                    {x: 1607472000000, y: 34},
                    {x: 1605571200000, y: 56},
                    {x: 1602892800000, y: 67},
                    {x: 1600300800000, y: 78},
                    {x: 1597622400000, y: 89},
                    {x: 1594622400000, y: 81},
                    {x: 1591622400000, y: 67}
                ],
                key: 'Corporate',
                color: '#038ecb',
                area: true
            },
            {
                values: [
                    {x: 1607472000000, y: 34},
                    {x: 1605571200000, y: 76},
                    {x: 1602892800000, y: 65},
                    {x: 1600300800000, y: 54},
                    {x: 1597622400000, y: 57},
                    {x: 1594622400000, y: 56},
                    {x: 1591622400000, y: 86}
                ],
                key: 'Individual',
                color: '#ffc107',
                area: true
            }
        ];
        this.dataLineChartTransactionsVolumeCorporate = [
            {
                values: [
                    {x: 1607472000000, y: 34},
                    {x: 1607558400000, y: 56},
                    {x: 1607644800000, y: 67},
                    {x: 1607731200000, y: 78},
                    {x: 1607817600000, y: 89},
                    {x: 1607904000000, y: 56},
                    {x: 1608044222000, y: 67}
                ],
                key: 'Corporate',
                color: '#038ecb',
                area: true
            }
        ];
        this.dataLineChartTransactionsVolumeIndividuals = [
            {
                values: [
                    {x: 1607472000000, y: 34},
                    {x: 1607558400000, y: 76},
                    {x: 1607644800000, y: 65},
                    {x: 1607731200000, y: 54},
                    {x: 1607817600000, y: 57},
                    {x: 1607904000000, y: 45},
                    {x: 1608044222000, y: 86}
                ],
                key: 'Individual',
                color: '#ffc107',
                area: true
            }
        ];
        this.dataDonutChartMonthlyPlansCorporate = [
            {
                key: 'Standard',
                y: 10,
            },
            {
                key: 'Plus',
                y: 30
            },
            {
                key: 'Premium',
                y: 60,
                color: '#0e94cf'
            },
        ];
        this.dataDonutChartMonthlyPlansIndividual = [
            {
                key: 'Standard',
                y: 20,
            },
            {
                key: 'Plus',
                y: 50
            },
            {
                key: 'Premium',
                y: 30,
                color: '#0e94cf'
            },
        ]
    }

}
