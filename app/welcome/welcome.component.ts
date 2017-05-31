import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    moduleId: module.id
})

export class WelcomeComponent implements OnInit {
    comments: any[];
    filterName$: any;

    constructor() { }

    ngOnInit() { 
    }
}