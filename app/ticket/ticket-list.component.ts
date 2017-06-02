import { Component, OnInit } from '@angular/core';

import { TicketService } from './ticket.service'
import { UtilityService } from '../shared/utility.service'
import { FilterByService } from './../filter-by/filter-by.service';

@Component({
    selector: 'ticket-list',
    templateUrl: './ticket-list.component.html',
    moduleId: module.id
})

export class TicketListComponent implements OnInit {
    tickets: any[];
    filterName$: any;

    constructor(private ticketService: TicketService, 
        private utilityService: UtilityService,
        private filterByService: FilterByService
    ) { }

    ticketList(){
        this.ticketService.getTicketList().subscribe(
            (tickets:any) => this.tickets = tickets 
        );
    }

    ngOnInit() { 
        this.filterName$ = this.filterByService.filterNameObservable();
        this.ticketList();
    }
}