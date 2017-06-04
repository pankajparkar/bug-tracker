import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'welcome',
    templateUrl: '/app/welcome/welcome.component.html',
    
})

export class WelcomeComponent implements OnInit {
    comments: any[];
    filterName$: any;

    constructor() { }

    ngOnInit() { 
    }
}