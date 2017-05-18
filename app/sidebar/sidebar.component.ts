import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './../app/sidebar/sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    list: any[];
    constructor() { }

    ngOnInit() { 
        this.list = [
            {name: 'Tickets', url: '/tickets'},
            {name: 'Comments', url: '/comments'},
            {name: 'Work Log', url: '/worklog'},
        ]
    }
}