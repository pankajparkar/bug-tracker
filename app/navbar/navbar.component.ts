import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: '/app/navbar/navbar.component.html',
    
})

export class NavbarComponent implements OnInit {
    isAutheticated: Function;
    getUserName: Function;
    constructor(private authService: AuthService, private router: Router) { }


    ngOnInit() { 
        this.isAutheticated = this.authService.isAutheticated;
        this.getUserName = this.authService.getUserName;
    }

    logout(){
        this.authService.logout();
        this.router.navigate(['login']);
    }
}