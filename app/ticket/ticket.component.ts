import { Component, OnInit } from '@angular/core';

import { TicketService } from './ticket.service'
import { UtilityService } from '../shared/utility.service'
import { FilterByNameService } from './../filter-by-name/filter-by-name.service';

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
        private filterByNameService: FilterByNameService
    ) { }

    ticketList(){
        this.tickets = this.ticketService.getTicketList();
    }

    ngOnInit() { 
        this.filter$ = this.filterByNameService.filterWatch();
        this.ticketList();
    }
}