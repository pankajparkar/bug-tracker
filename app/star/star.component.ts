import { Component, Input } from '@angular/core';

@Component({
    selector: 'star',
    templateUrl: '/app/star/star.component.html',
})
export class StarComponent{
    items: any = [];
    @Input() stars:any;

    ngOnChanges(changes: any){
        this.items = []
        for(var i= 1; i <= 10; i++) {
            this.items.push({ highlight: i <= changes.stars });
        }
    }
}