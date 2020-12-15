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

declare let d3: any;

// ...

// utils
function sinAndCos() {
    var sin = [], sin2 = [],
        cos = [];

    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i / 10)});
        sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10});
    }

    let CAC = [
        {x: '', y: 55},
    ]

    //Line chart data should be sent as an array of series objects.
    return [
        {
            values: sin,      //values - represents the array of {x,y} data points
            key: 'Sine Wave', //key  - the name of the series.
            color: '#ff7f0e'  //color - optional: choose your own line color.
        },
        {
            values: cos,
            key: 'Cosine Wave',
            color: '#2ca02c'
        },
        {
            values: sin2,
            key: 'Another sine wave',
            color: '#7777ff',
            area: true      //area - set to true if you want this line to turn into a filled area chart.
        }
    ];
}

function generateDataScatter(groups, points) {
    var data = [],
        shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
        random = d3.random.normal();

    for (var i = 0; i < groups; i++) {
        data.push({
            key: 'Group ' + i,
            values: []
        });

        for (var j = 0; j < points; j++) {
            data[i].values.push({
                x: random()
                , y: random()
                , size: Math.random()
                , shape: shapes[j % 6]
            });
        }
    }
    return data;
}

function generateDataMultiBar() {
    return stream_layers(3, 50 + Math.random() * 50, .1).map(function (data, i) {
        return {
            key: 'Stream' + i,
            values: data
        };
    });
}

/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
    if (arguments.length < 3) o = 0;

    function bump(a) {
        var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
        for (var i = 0; i < m; i++) {
            var w = (i / m - y) * z;
            a[i] += x * Math.exp(-w * w);
        }
    }

    return d3.range(n).map(function () {
        var a = [], i;
        for (i = 0; i < m; i++) a[i] = o + o * Math.random();
        for (i = 0; i < 5; i++) bump(a);
        return a.map(stream_index);
    });
}

function stream_index(d, i) {
    return {x: i, y: Math.max(0, d)};
}

@Component({
    templateUrl: './quick-access.component.html',
    styleUrls: [
        '../../../node_modules/nvd3/build/nv.d3.css'
    ]
})

export class QuickAccessComponent implements OnInit {
    lineChartCustomer;
    donutChart;
    dataLineChartCustomerAttrition;
    dataLineChartCustomerAcquisition;
    dataLineChartTransactionsVolume;
    dataDonutChartMonthlyPlansCorporate;
    dataDonutChartMonthlyPlansIndividual;
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
                    axisLabel: 'Week days',
                    tickFormat: function (d) {
                        return d3.time.format('%a')(new Date(d))
                    },
                    axisLabelDistance: 100000
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
                    {x: 1607472000000, y: 55},
                    {x: 1607558400000, y: 62},
                    {x: 1607644800000, y: 58},
                    {x: 1607731200000, y: 69},
                    {x: 1607817600000, y: 61},
                    {x: 1607904000000, y: 72},
                    {x: 1608044222000, y: 84}
                ],
                key: 'Corporate',
                color: '#038ecb',
                area: true
            },
            {
                values: [
                    {x: 1607472000000, y: 75},
                    {x: 1607558400000, y: 58},
                    {x: 1607644800000, y: 67},
                    {x: 1607731200000, y: 87},
                    {x: 1607817600000, y: 91},
                    {x: 1607904000000, y: 88},
                    {x: 1608044222000, y: 54}
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
                    {x: 1607558400000, y: 56},
                    {x: 1607644800000, y: 67},
                    {x: 1607731200000, y: 78},
                    {x: 1607817600000, y: 89},
                    {x: 1607904000000, y: 81},
                    {x: 1608044222000, y: 67}
                ],
                key: 'Corporate',
                color: '#038ecb',
                area: true
            },
            {
                values: [
                    {x: 1607472000000, y: 34},
                    {x: 1607558400000, y: 76},
                    {x: 1607644800000, y: 65},
                    {x: 1607731200000, y: 54},
                    {x: 1607817600000, y: 57},
                    {x: 1607904000000, y: 56},
                    {x: 1608044222000, y: 86}
                ],
                key: 'Individual',
                color: '#ffc107',
                area: true
            }
        ];
        this.dataLineChartTransactionsVolume = [
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
            },
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
                key: 'Standart',
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
                key: 'Standart',
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