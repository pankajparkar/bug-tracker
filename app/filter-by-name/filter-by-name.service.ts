import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { publishLast } from 'rxjs/operator/publishLast';
import { publish } from 'rxjs/operator/publish';

@Injectable()
export class FilterByNameService {
    private filterName$ = new BehaviorSubject<string>(null);

    constructor() { }

    emitValue(selectedName: string){
        this.filterName$.next(selectedName);
    }

    filterWatch(): Observable<string> {
        return this.filterName$.asObservable();
    }
}