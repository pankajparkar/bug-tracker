import { Component, OnInit } from '@angular/core';

import { FilterByService } from './filter-by.service'

@Component({
    selector: 'filter-by',
    templateUrl: './filter-by.component.html',
    moduleId: module.id
})

export class FilterByNameComponent implements OnInit {
    filterName$: any;
    items: any[] = [{name: "Pankaj"},{name: "Kamlesh"},{name: "Tom"}];
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