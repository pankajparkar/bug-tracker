import { Component, OnInit } from '@angular/core';

import { WorklogService } from './worklog.service';
import { UtilityService } from '../shared/utility.service';

@Component({
    selector: 'worklog',
    templateUrl: './worklog.component.html',
    moduleId: module.id
})

export class WorklogComponent implements OnInit {
    worklogs: any[];
    filteredWorklogs: any[]=[];
    constructor(private worklogService: WorklogService, private utilityService: UtilityService) { }

    woklogList(){
        this.worklogs = this.worklogService.getWorklogList();
        this.filteredWorklogs = this.utilityService.groupBy(this.worklogs, 'name');
        console.log(this.filteredWorklogs)
    }

    ngOnInit() {
        this.woklogList();
     }
}