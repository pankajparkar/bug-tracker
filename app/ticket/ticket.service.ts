import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TicketService {
    constructor(private http: Http) { }
    getTicketList(){
        return this.http.get('/api/tickets.json')
            .map((data: any) => data.json());
    }
}