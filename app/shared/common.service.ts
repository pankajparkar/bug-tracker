import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommonService{
    
    constructor(private http: Http){

    }

    getTicketTypes(){
        return this.http.get('/api/ticket-types.json').map(this.unWrapData)
    }

    getNames(){
        return this.http.get('/api/names.json').map(this.unWrapData);
    }

    getTicketStatuses(){
        return this.http.get('/api/ticket-status.json').map(this.unWrapData);
    }

    unWrapData(data: any){
        return data.json();
    }
}