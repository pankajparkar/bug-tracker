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
            {name: 'List View', url: ['/dashboard','ticket-list']},
            {name: 'Kanban View', url: ['/dashboard','ticket-kanban']}
        ]
    }
}