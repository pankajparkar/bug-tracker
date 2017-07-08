import { Injectable } from "@angular/core";

//Allow window object to avoid ts compilation error
declare var window: any ;

@Injectable()
export class LocalStorageService {
    constructor(){

    }
    get(key: string){
        return window.localStorage.getItem(key);
    }

    getObject(key: string){
        let value = this.get(key);
        if(value) value = JSON.parse(value);
        return value;
    }

    set(key: string, value: any){
        window.localStorage.setItem(key, value);
    }
}