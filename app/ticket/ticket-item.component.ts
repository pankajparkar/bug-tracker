import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'ticket-item',
    templateUrl: '/app/ticket/ticket-item.component.html'
})
export class TicketItemComponent{
    @Input()
    ticket: any;
}