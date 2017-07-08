import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService{
    currentUser: any;

    constructor(private router: Router){

    }
    login(user: any){
        this.currentUser = user;
        //TODO: Add more fields by default
        this.currentUser.LastLoginDate = new Date();
    }

    //set current user to blank
    logout(){
        this.currentUser = undefined;
        this.router.navigate(['login']);
    }

    //set current user to blank
    getUserName(){
        return this.currentUser && this.currentUser.name;
    }
    
    //check user is present or not
    isAutheticated(){
        return !!this.currentUser;
    }

    checkUserLogin(){
        if(!!this.currentUser) return true;
        this.router.navigate(['login']);
        return false;
    }
}