import { Component, OnInit } from '@angular/core';

import { WorklogService } from './worklog.service';
import { UtilityService } from '../shared/utility.service';
import { FilterByService } from './../filter-by/filter-by.service';

@Component({
    selector: 'worklog',
    templateUrl: './worklog.component.html',
    moduleId: module.id
})

export class WorklogComponent implements OnInit {
    worklogs: any[];
    filterName$: any;

    constructor(
        private worklogService: WorklogService, 
        private utilityService: UtilityService, 
        private filterByService:FilterByService
    ) { }

    woklogList(){
        this.worklogs = this.worklogService.getWorklogList();
    }

    ngOnInit() {
        this.filterName$ = this.filterByService.filterNameObservable();
        this.woklogList();
     }
}