import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import { LocalStorageService } from './localstorage.service';

const userKey: string = 'user';
//Allow window object to avoid ts compilation error
declare var window: any ;
@Injectable()
export class AuthService{
    constructor(private router: Router, private localStorageService: LocalStorageService){

    }
    login(user: any){
        //TODO: Add more fields by default
        user.LastLoginDate = new Date();
        this.localStorageService.set(userKey, JSON.stringify(user));
    }

    //set current user to blank
    logout(){
        this.localStorageService.set(userKey, "");
    }
    
    //check user is present or not
    isAutheticated(){
        return !!this.localStorageService.getObject(userKey);
    }
}