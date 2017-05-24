import { Component, OnInit } from '@angular/core';

import { TicketService } from './ticket.service'

@Component({
    selector: 'ticket',
    templateUrl: './ticket.component.html',
    moduleId: module.id
})

export class TicketComponent implements OnInit {
    tickets: any[];

    constructor(private ticketService: TicketService) { }

    ticketList(){
        this.tickets = this.ticketService.getTicketList();
    }

    ngOnInit() { 
        this.ticketList();
    }
}