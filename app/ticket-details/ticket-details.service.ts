import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()

export class TicketDetailsService {
    constructor(private http: Http) { }
    getTicketDetails(id: number){
        return this.http.get('/api/tickets.json')
            .map(data => data.json());
    }
}