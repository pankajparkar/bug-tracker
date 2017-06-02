import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    moduleId: module.id
})

export class DashboardComponent implements OnInit {
    constructor(
        private location: Location
    ) { }
    isTicketDetailsRoute(): boolean{
        //Find more better way to do it.
        return this.location.path().indexOf('/dashboard/ticket-details/') > -1;
    }
    ngOnInit() { }
}