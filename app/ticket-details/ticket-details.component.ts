import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TicketDetailsService } from './ticket-details.service';
import { UtilityService } from '../shared/utility.service';

@Component({
    selector: 'ticket-details',
    templateUrl: '/app/ticket-details/ticket-details.component.html',
    
})

export class TicketDetailsComponent implements OnInit {
    model:any;

    constructor(
        private ticketDetailsService: TicketDetailsService, 
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() { 
        let ticketId = this.activatedRoute.snapshot.params['ticketId'];
        this.ticketDetailsService.getTicketDetails(ticketId).subscribe(
            tickets => this.model = tickets.filter((t: any)=> t.Id === Number(ticketId))[0]
        )
        //We will make an service/API call to retrieve correct ticket.
    }
}