import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { publishLast } from 'rxjs/operator/publishLast';
import { publish } from 'rxjs/operator/publish';

@Injectable()
export class FilterByService {
    private filterName$ = new BehaviorSubject<string>(null);
    private filterStatus$ = new BehaviorSubject<string>(null);

    constructor() { }

    emitFilterNameValue(selectedName: string){
        this.filterName$.next(selectedName);
    }

    emitStatusValue(selectedName: string){
        this.filterStatus$.next(selectedName);
    }

    filterNameObservable(): Observable<string> {
        return this.filterName$.asObservable();
    }

    filterStatusObservable(): Observable<string> {
        return this.filterStatus$.asObservable();
    }
}