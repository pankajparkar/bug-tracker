import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../shared/auth.service';

@Component({
    selector: 'login',
    templateUrl: '/app/login/login.component.html',
    styleUrls: ['./app/login/login.component.css']
})
export class LoginComponent{
    user: any = {};
    constructor(
        private authService: AuthService, private router: Router
    ){

    }

    submit(){
        this.authService.login(this.user);
        this.router.navigate(['welcome']);
    };
}