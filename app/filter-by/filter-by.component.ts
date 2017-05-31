import { Component, OnInit } from '@angular/core';

import { FilterByService } from './filter-by.service'

@Component({
    selector: 'filter-by',
    templateUrl: './filter-by.component.html',
    moduleId: module.id
})

export class FilterByNameComponent implements OnInit {
    filterName$: any;
    filterStatus$: any;
    items: any[] = [{name: "Pankaj"},{name: "Kamlesh"},{name: "Tom"}];
    statuses: any[] = [{name: "Todo"},{name: "InProgress"},{name: "Completed"}];
    constructor(private filterByService: FilterByService) { }

    setFilterName(item: any){
        this.items.forEach(i => i.active = false);
        item.active = true;
        this.filterByService.emitFilterNameValue(item.name);        
    }

    setFilterStatus(status: any){
        this.statuses.forEach(i => i.active = false);
        status.active = true;
        this.filterByService.emitStatusValue(status.name);        
    }

    ngOnInit() { 
        this.filterName$ = this.filterByService.filterNameObservable();
        this.filterStatus$ = this.filterByService.filterStatusObservable();
    }
}