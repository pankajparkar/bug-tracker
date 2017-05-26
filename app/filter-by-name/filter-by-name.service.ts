import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilterByNameService {
    private filterName$ = new Subject<string>();

    constructor() { }

    emitValue(selectedName: string){
        this.filterName$.next(selectedName);
    }

    filterWatch(): Observable<string> {
        return this.filterName$.asObservable();
    }
}