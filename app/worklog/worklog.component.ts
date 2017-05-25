import { Component, OnInit } from '@angular/core';

import { WorklogService } from './worklog.service'

@Component({
    selector: 'worklog',
    templateUrl: './worklog.component.html',
    moduleId: module.id
})

export class WorklogComponent implements OnInit {
    worklogs: any[];
    constructor(private worklogService: WorklogService) { }

    woklogList(){
        this.worklogs = this.worklogService.getWorklogList();
    }

    ngOnInit() {
        this.woklogList();
     }
}