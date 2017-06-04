import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: '/app/sidebar/sidebar.component.html',
    
})

export class SidebarComponent implements OnInit {
    list: any[];
    constructor() { }

    ngOnInit() { 
        this.list = [
            {name: 'List View', url: ['/dashboard','ticket-list']},
            {name: 'Kanban View', url: ['/dashboard','ticket-kanban']}
        ]
    }
}