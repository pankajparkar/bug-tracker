import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../shared/localstorage.service';

@Component({
    selector: 'profile',
    templateUrl: '/app/profile/profile.component.html',
    styleUrls: ['/app/profile/profile.component.css']
})

export class ProfileComponent implements OnInit {
    user: any;
    constructor(private localStorageService: LocalStorageService) { }

    ngOnInit() { 
        this.user = this.localStorageService.getObject('user');
        if(!this.user.Edited){
            this.user.FirstName = 'Wayne';
            this.user.LastName = 'Rooney';
            this.user.DateOfBirth = new Date(1985, 10, 24);
            this.user.Address = {
                StreetAddress: 'ABC street',
                City: 'Manchestor',
                State: 'UK',
                Pin: 123222
            };
        }
    }
}