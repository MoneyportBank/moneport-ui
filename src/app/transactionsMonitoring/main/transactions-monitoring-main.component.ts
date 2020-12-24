import {Component} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';

@Component({
    templateUrl: './transactions-monitoring-main.component.html'
})

export class TransactionsMonitoringMainComponent {
    // lineChart
    public lineChartData: Array<any> = [
        {data: [0, 0, 1, 2, 1, 3, 1, 3, 5, 8, 10, 7, 6, 3, 8, 4, 2, 1], label: 'Alerted'},
        {data: [0, 1, 3, 2, 4, 2, 5, 8, 7, 5, 8, 9, 6, 4, 2, 1, 1], label: 'Straight Through Processing'}
    ];

    public lineChartLabels: Array<any> = [
        'July, 2019',
        'August, 2019',
        'September, 2019',
        'October, 2019',
        'November, 2019',
        'December, 2019',
        'January, 2020',
        'February, 2020',
        'March, 2020',
        'April, 2020',
        'May, 2020',
        'June, 2020',
        'July, 2020',
        'August, 2020',
        'September, 2020',
        'October, 2020',
        'November, 2020',
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(196,28,19,0)',
            borderColor: '#dd595c',
            pointBackgroundColor: '#88160f',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'rgba(101,211,8,0)',
            borderColor: '#82b265',
            pointBackgroundColor: '#478d08',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    public barChartOptionsAgeOfActiveAlerts: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };

    public barChartOptionsProcessedAlerts: any = {
        scaleShowVerticalLines: false,
        responsive: true,
    };

    public barChartLabelsAgeOfActiveAlerts: string[] = [
        '6+ months',
        '5-6 months',
        '4-5 months',
        '3-4 months',
        '2-3 months',
        '1-2 months',
        '3-4 weeks',
        '2-3 weeks',
        '1-2 weeks',
        '6-7 days',
        '5-6 days',
        '4-5 days',
        '3-4 days',
        '2-3 days',
        '1-2 days',
        '18-24 hours',
        '12-18 hours',
        '6-12 hours',
        '0-6 hours',
    ];
    public barChartLabelsProcessedAlerts: string[] = [
        'September, 2020',
        'October, 2020',
        'November, 2020',
    ];
    public barChartLabelsActiveStatesPerUser: string[] = [
        'In Review',
        'Escalated',
        'Pending Information',
    ];

    public barChartType = 'bar';
    public barChartLegend = true;

    public barChartColors: Array<any> = [
        {backgroundColor: '#b8dfda'},
        {backgroundColor: '#12b266'},
        {backgroundColor: '#feb91e'},
        {backgroundColor: '#f44763'},
        {backgroundColor: '#287f7f'},
        {backgroundColor: '#cba2c2'},
        {backgroundColor: '#a0ce6e'},
        {backgroundColor: '#fed171'},
        {backgroundColor: '#f3a56b'},
        {backgroundColor: '#79cdd0'},
        {backgroundColor: '#b66fa9'},
        {backgroundColor: '#f07a1b'},
        {backgroundColor: '#feb91e'},
        {backgroundColor: '#78b437'},
    ];

    public barChartDataAgeOfActiveAlerts: any[] = [
        {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0],
            label: 'Low risk'
        },
        {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            label: 'Medium risk'
        },
        {
            data: [0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            label: 'Increased risk'
        },
        {
            data: [0, 0, 0, 0, 450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            label: 'High risk'
        }
    ];

    public barChartDataProcessedAlerts: any[] = [
        {
            data: [25, 0, 0],
            label: 'Andy'
        },
        {
            data: [18, 0, 5],
            label: 'John'
        },
        {
            data: [10, 0, 0],
            label: 'Andrew'
        },
        {
            data: [9, 0, 2],
            label: 'Mick'
        },
        {
            data: [6, 0, 0],
            label: 'Ann'
        },
        {
            data: [2, 0, 2],
            label: 'Kate'
        },
        {
            data: [2, 0, 3],
            label: 'Lukas'
        },
        {
            data: [3, 0, 0],
            label: 'Nick'
        },
        {
            data: [6, 0, 0],
            label: 'Lisa'
        },
        {
            data: [8, 0, 5],
            label: 'Andy'
        },
        {
            data: [12, 0, 0],
            label: 'Barbara'
        }
    ];

    public barChartDataActiveStatesPerUser: any[] = [
        {
            data: [50, 10, 20],
            label: 'Andy'
        },
        {
            data: [40, 20, 12],
            label: 'John'
        },
        {
            data: [10, 20, 30],
            label: 'Andrew'
        },
        {
            data: [18, 25, 67],
            label: 'Ann'
        },
        {
            data: [620, 5, 15],
            label: '- None -'
        },
        {
            data: [22, 35, 41],
            label: 'Kate'
        },
        {
            data: [24, 45, 21],
            label: 'Lukas'
        },
        {
            data: [38, 24, 12],
            label: 'Nick'
        },
        {
            data: [14, 48, 25],
            label: 'Lisa'
        },
        {
            data: [30, 23, 15],
            label: 'Andy'
        },
        {
            data: [12, 5, 9],
            label: 'Barbara'
        }
    ];
}
