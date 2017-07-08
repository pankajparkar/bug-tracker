import { Component, Input } from '@angular/core';

@Component({
    selector: 'star',
    templateUrl: '/app/star/star.component.html',
})
export class StarComponent{
    _ratings: number;
    items: any[] = [];
    @Input() isDisabled: boolean;
    @Input('ratings') 
    set ratings(value: number){
        this.items = [];
        this._ratings = value;
        for(let i= 1; i <= 10; i++) {
            this.items.push({ highlight: i <= value });
        }
    }
    get ratings(){
        return this._ratings;
    }
    
    onchange(index: number){
        if(!this.isDisabled){
            this.ratings =  + 1
        }
    }

}