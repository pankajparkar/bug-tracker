import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'ticket-item',
    template: `
        <span class="glyphicon" [ngClass]="{
            'glyphicon-tags': ticket.Type == 'Feature',
            'glyphicon-flash': ticket.Type == 'Bug',
            'glyphicon-arrow-down': ticket.Type == 'Minor'
        }"></span>
        <a [routerLink]="['../ticket-details', ticket.Id]">{{ticket.TicketNumber}}</a> {{ticket.Title}}
        <span class="pull-right">
          <small>
            Priority
          </small>
            <span class="label label-default">{{ticket.Priority}}</span>
        </span>
    `
})
export class TicketItemComponent{
    @Input()
    ticket: any;
    
}