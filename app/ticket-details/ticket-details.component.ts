import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TicketDetailsService } from './ticket-details.service';
import { UtilityService } from '../shared/utility.service';

@Component({
    selector: 'ticket-details',
    templateUrl: './ticket-details.component.html',
    moduleId: module.id
})

export class TicketDetailsComponent implements OnInit {
    ticketId: number;

    constructor(private ticketService: TicketDetailsService, 
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() { 
        this.ticketId = this.activatedRoute.snapshot.params['ticketId'];
        //We will make an service/API call to retrieve correct ticket.
    }
}