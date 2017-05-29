import { Component, OnInit } from '@angular/core';

import { TicketService } from './ticket.service'
import { UtilityService } from '../shared/utility.service'
import { FilterByService } from './../filter-by/filter-by.service';

@Component({
    selector: 'ticket',
    templateUrl: './ticket.component.html',
    moduleId: module.id
})

export class TicketComponent implements OnInit {
    tickets: any[];
    filter$: any;

    constructor(private ticketService: TicketService, 
        private utilityService: UtilityService,
        private FilterByService: FilterByService
    ) { }

    ticketList(){
        this.tickets = this.ticketService.getTicketList();
    }

    ngOnInit() { 
        this.filter$ = this.FilterByService.filterNameObservable();
        this.ticketList();
    }
}