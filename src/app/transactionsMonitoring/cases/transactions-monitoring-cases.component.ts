import { Component, ViewChild } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';
import { rows } from './data-cases';

@Component({
    templateUrl: './transactions-monitoring-cases.component.html',
    styleUrls: ['./cases.css']
})
export class TransactionsMonitoringCasesComponent  {
    filmResource = new DataTableResource(rows);
    films = [];
    filmCount = 0;
    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
    @ViewChild(DataTable) filmsTable;

    constructor() {
        this.filmResource.count().then(count => this.filmCount = count);
    }

    caseClicked(item) {
        alert(item.summary);
    }

    reloadFilms(params) {
        this.filmResource.query(params).then(films => this.films = films);
    }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };
}
