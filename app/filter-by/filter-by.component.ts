import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { FilterByService } from './filter-by.service'
import { CommonService } from './../shared/common.service'

@Component({
    selector: 'filter-by',
    templateUrl: '/app/filter-by/filter-by.component.html',
    
})

export class FilterByNameComponent implements OnInit {
    filterName$: Observable<string>;
    filterNameSub$: Subscription;
    items: any[];
    constructor(
        private filterByService: FilterByService,
        private commonService: CommonService
    ) { }

    getNames(){
        //created a promis that depends on it
        return new Promise((resolve, reject) => {
            this.commonService.getNames().subscribe(
                (names) => {
                    this.items = names;
                    resolve();
                }
            )
        })
    }

    setFilterName(item: any){
        this.items.forEach(i => i.active = false);
        if(item && item.Id) value = item.Id
        this.filterByService.emitFilterNameValue(value);        
    }

    ngOnInit() { 
        this.getNames().then(() => {
            this.setFilterName(this.filterByService.getFilterNameLastValue())
        });
        this.filterName$ = this.filterByService.filterNameObservable();
        this.filterNameSub$ = this.filterName$.subscribe();
    }

    ngOnDestroy(){
        //clearing up stuff
        this.filterNameSub$.unsubscribe();
    }
}