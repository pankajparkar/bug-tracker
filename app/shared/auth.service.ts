import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService{
    static currentUser: any;

    constructor(private router: Router){

    }
    login(user: any){
        AuthService.currentUser = user;
        //TODO: Add more fields by default
        AuthService.currentUser.LastLoginDate = new Date();
    }

    //set current user to blank
    logout(){
        AuthService.currentUser = undefined;
    }

    //set current user to blank
    getUserName(){
        console.log(AuthService.currentUser)
        return AuthService.currentUser && AuthService.currentUser.name;
    }
    
    //check user is present or not
    isAutheticated(){
        return !!AuthService.currentUser;
    }
}