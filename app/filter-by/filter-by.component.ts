import { Component, OnInit } from '@angular/core';

import { FilterByService } from './filter-by.service'

@Component({
    selector: 'filter-by',
    templateUrl: './filter-by.component.html',
    moduleId: module.id
})

export class FilterByNameComponent implements OnInit {
    obs$: any;
    items: any[] = [{name: "Pankaj"},{name: "Kamlesh"},{name: "Tom"}];
    constructor(private filterByService: FilterByService) { }

    setFilter(item: any){
        this.items.forEach(i => i.active = false);
        item.active = true;
        this.filterByService.emitFilterNameValue(item.name);        
    }

    ngOnInit() { 
        this.obs$ = this.filterByService.filterNameObservable();
        this.obs$.subscribe(
            (data: any) => console.log('Test', data)
        )
    }
}