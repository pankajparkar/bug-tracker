import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { TicketService } from './ticket.service'
import { UtilityService } from '../shared/utility.service'
import { CommonService } from '../shared/common.service'
import { FilterByService } from './../filter-by/filter-by.service';

@Component({
    selector: 'ticket-kanban',
    templateUrl: '/app/ticket/ticket-kanban.component.html',
    
})

export class TicketKanbanComponent implements OnInit {
    tickets: any[];
    todoItems: any[];
    inProgressItems: any[];
    completedItems: any[];
    filterName$: Observable<string>;
    filterNameSub$: Subscription;
    statuses: any[];

    constructor(
        private ticketService: TicketService, 
        private commonService: CommonService, 
        private utilityService: UtilityService,
        private filterByService: FilterByService
    ) { }

    getStatuses(){
        this.commonService.getTicketStatuses().subscribe(
            (statuses) => this.statuses = statuses
        )
    }

    filterTicketsByStatus(){
        this.todoItems = this.tickets.filter(ticket => ticket.Status === 1);
        this.inProgressItems = this.tickets.filter(ticket => ticket.Status === 2);
        this.completedItems = this.tickets.filter(ticket => ticket.Status === 3);
    }

    ticketList(name: string){
        this.ticketService.getTicketList().subscribe(
            tickets => {
                this.tickets = tickets;
                if(name) this.tickets = this.tickets.filter(ticket => ticket.AssignedTo === name);
                this.filterTicketsByStatus();
            }
        );
    }

    ngOnInit() { 
        this.filterName$ = this.filterByService.filterNameObservable();
        this.getStatuses();
        this.filterNameSub$ = this.filterName$.subscribe(
            (name: any) => this.ticketList(name && name.Id)
        )
    }

    ngOnDestroy(){
        this.filterNameSub$.unsubscribe();
    }
}