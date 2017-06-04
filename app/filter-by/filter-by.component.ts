import { Component, OnInit } from '@angular/core';

import { FilterByService } from './filter-by.service'

@Component({
    selector: 'filter-by',
    templateUrl: '/app/filter-by/filter-by.component.html',
    
})

export class FilterByNameComponent implements OnInit {
    filterName$: any;
    items: any[] = [{name: "Alex"},{name: "John"},{name: "Tom"}];
    constructor(private filterByService: FilterByService) { }

    setFilterName(item: any){
        this.items.forEach(i => i.active = false);
        let value = item? item.name: item;
        this.filterByService.emitFilterNameValue(value);        
    }

    ngOnInit() { 
        this.filterName$ = this.filterByService.filterNameObservable();
    }
}