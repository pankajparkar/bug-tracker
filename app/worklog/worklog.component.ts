import { Component, OnInit } from '@angular/core';

import { WorklogService } from './worklog.service';
import { UtilityService } from '../shared/utility.service';
import { FilterByNameService } from './../filter-by-name/filter-by-name.service';

@Component({
    selector: 'worklog',
    templateUrl: './worklog.component.html',
    moduleId: module.id
})

export class WorklogComponent implements OnInit {
    worklogs: any[];
    filter$: any;

    constructor(
        private worklogService: WorklogService, 
        private utilityService: UtilityService, 
        private filterByNameService:FilterByNameService
    ) { }

    woklogList(){
        this.worklogs = this.worklogService.getWorklogList();
        console.log(this.filteredWorklogs)
    }

    ngOnInit() {
        this.filter$ = this.filterByNameService.filterWatch();
        this.woklogList();
     }
}