import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    moduleId: module.id
})

export class SidebarComponent implements OnInit {
    list: any[];
    constructor() { }

    ngOnInit() { 
        this.list = [
            {name: 'Tickets', url: 'ticket'},
            {name: 'Comments', url: 'comment'},
            {name: 'Work Log', url: 'worklog'},
        ]
    }
}