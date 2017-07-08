import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'dashboard',
    templateUrl: '/app/dashboard/dashboard.component.html',
    styles: [`
        :host .row.content{
            background: rgba(236, 236, 236, 0.15);
            box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2), 0 1px 11px 0 rgba(0,0,0,0.19);
            padding: 10px;
        }   
        .child-content{
            max-height: 475px;
            overflow-y: auto;
        }
    `]
    
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