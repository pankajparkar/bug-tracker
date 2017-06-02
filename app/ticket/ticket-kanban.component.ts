import { Component, OnInit } from '@angular/core';

import { TicketService } from './ticket.service'
import { UtilityService } from '../shared/utility.service'
import { FilterByService } from './../filter-by/filter-by.service';

@Component({
    selector: 'ticket-kanban',
    templateUrl: './ticket-kanban.component.html',
    moduleId: module.id
})

export class TicketKanbanComponent implements OnInit {
    tickets: any[];
    todoItems: any[];
    inProgressItems: any[];
    completedItems: any[];
    filterName$: any;
    statuses: any[] = [{Id: 1, Name: "Todo"}, {Id: 2, Name: "In Progress"}, { Id: 3, Name: "Complete"}]

    constructor(
        private ticketService: TicketService, 
        private utilityService: UtilityService,
        private filterByService: FilterByService
    ) { }

    filterTicketsByStatus(){
        this.todoItems = this.tickets.filter(ticket => ticket.Status === 1);
        this.inProgressItems = this.tickets.filter(ticket => ticket.Status === 2);
        this.completedItems = this.tickets.filter(ticket => ticket.Status === 3);
    }

    ticketList(name: string){
        console.log(name);
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
        this.filterName$.subscribe(
            (name: any) => this.ticketList(name)
        )
    }
}