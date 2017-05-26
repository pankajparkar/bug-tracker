import { Component, OnInit } from '@angular/core';

import { TicketService } from './ticket.service'
import { UtilityService } from '../shared/utility.service'

@Component({
    selector: 'ticket',
    templateUrl: './ticket.component.html',
    moduleId: module.id
})

export class TicketComponent implements OnInit {
    tickets: any[];
    filteredTickets: any[]

    constructor(private ticketService: TicketService, 
        private utilityService: UtilityService
    ) { }

    ticketList(){
        this.tickets = this.ticketService.getTicketList();
        this.filteredTickets = this.utilityService.groupBy(this.tickets, 'name');
    }

    ngOnInit() { 
        this.ticketList();
    }
}