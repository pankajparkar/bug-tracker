import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { TicketDetailsService } from './ticket-details.service';
import { CommonService } from '../shared/common.service';

@Component({
    selector: 'ticket-details',
    templateUrl: '/app/ticket-details/ticket-details.component.html',
})
export class TicketDetailsComponent implements OnInit {
    model:any;
    statuses: any[];
    names: any[];
    types: any[];

    ticketDetailForm: FormGroup;

    constructor(
        private ticketDetailsService: TicketDetailsService, 
        private commonService: CommonService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute
    ) { }

    getStatuses(){
        this.commonService.getTicketStatuses().subscribe(
            (statuses: any) => this.statuses = statuses
        )
    }

    getNames(){
        this.commonService.getNames().subscribe(
            (names: any) => this.names = names
        )
    }

    createForm(){
        this.ticketDetailForm = this.fb.group({
            AssignedTo: [null, Validators.required],
            Status: [null, Validators.required],
            Type: [null, Validators.required],
            Priority: [null, Validators.required],
            Description: [null, Validators.required]
        })
    }

    getTicketTypes(){
        this.commonService.getTicketTypes().subscribe(
            (types: any) => this.types = types
        )
    }

    ngOnInit() { 
        this.getStatuses();
        this.getNames();
        this.getTicketTypes();
        let ticketId = this.activatedRoute.snapshot.params['ticketId'];
        this.ticketDetailsService.getTicketDetails(ticketId).subscribe(
            tickets => this.model = tickets.filter((t: any)=> t.Id === Number(ticketId))[0]
        )
        //We will make an service/API call to retrieve correct ticket.
    }
}