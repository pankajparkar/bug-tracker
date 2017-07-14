import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { TicketService } from './ticket.service'
import { UtilityService } from '../shared/utility.service'
import { FilterByService } from './../filter-by/filter-by.service';

@Component({
    selector: 'ticket-list',
    templateUrl: '/app/ticket/ticket-list.component.html',
    styles: [`
        .panel.panel-info{
            background: rgba(236, 236, 236, 0.15);
            box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2), 0 1px 11px 0 rgba(0,0,0,0.19);
        }`
    ]
})

export class TicketListComponent implements OnInit, OnDestroy {
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    tickets: any[];
    filterName$: Observable<string>;
    filterNameSub$: Subscription;
    
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
        this.filterNameSub$ = this.filterName$.subscribe();
        this.ticketList();
    }

    ngOnDestroy(){
        //clearing up stuff
        this.filterNameSub$.unsubscribe();
    }
}