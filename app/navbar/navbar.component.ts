import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { LocalStorageService } from '../shared/localstorage.service';

@Component({
    selector: 'navbar',
    templateUrl: '/app/navbar/navbar.component.html',
    
})

export class NavbarComponent implements OnInit {
    constructor(
        private authService: AuthService, 
        private router: Router,
        private localStorageService: LocalStorageService
    ) { }

    ngOnInit() { }
    
    //set current user to blank
    getUserName(){
        let obj = this.localStorageService.getObject('user');
        return obj && obj.name;
    }

    isAutheticated() {
        return this.authService.isAutheticated();
    };

    logout(){
        this.authService.logout();
        this.router.navigate(['login']);
    }
}