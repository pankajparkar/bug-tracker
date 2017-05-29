import { Component, OnInit } from '@angular/core';

import { FilterByService } from './filter-by.service'

@Component({
    selector: 'filter-by',
    templateUrl: './filter-by.component.html',
    moduleId: module.id
})

export class FilterByNameComponent implements OnInit {
    obs$: any;
    items: any[] = ["Pankaj", "Kamlesh", "Tom"]
    constructor(private FilterByService: FilterByService) { }

    setFilter(val: string){
        this.FilterByService.emitFilterNameValue(val);        
    }

    ngOnInit() { 
        this.obs$ = this.FilterByService.filterNameObservable();
        this.obs$.subscribe(
            (data: any) => console.log('Test', data)
        )
    }
}