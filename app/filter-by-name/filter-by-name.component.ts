import { Component, OnInit } from '@angular/core';

import { FilterByNameService } from './filter-by-name.service'

@Component({
    selector: 'filter-by-name',
    templateUrl: './filter-by-name.component.html',
    moduleId: module.id
})

export class FilterByNameComponent implements OnInit {
    obs$: any;
    items: any[] = ["Pankaj", "Kamlesh", "Tom"]
    constructor(private filterByNameService: FilterByNameService) { }

    setFilter(val: string){
        this.filterByNameService.emitValue(val);        
    }

    ngOnInit() { 
        this.obs$ = this.filterByNameService.filterWatch();
        this.obs$.subscribe(
            (data: any) => console.log('Test', data)
        )
    }
}