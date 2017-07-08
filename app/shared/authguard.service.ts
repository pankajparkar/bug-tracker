import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';

import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    static currentUser: any;

    constructor(private router: Router, private authService: AuthService ){

    }

    canActivate(): boolean{
        let isUserLoggedin = this.authService.isAutheticated();
        if(!isUserLoggedin) this.router.navigate(['login'])
        return isUserLoggedin;
    }
}