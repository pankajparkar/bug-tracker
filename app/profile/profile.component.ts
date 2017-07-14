import { Component, OnInit } from '@angular/core';
import { 
    FormGroup, FormArray, FormControl, 
    FormBuilder, Validators 
} from '@angular/forms';

import { LocalStorageService } from '../shared/localstorage.service';

@Component({
    selector: 'profile',
    templateUrl: '/app/profile/profile.component.html',
    styleUrls: ['/app/profile/profile.component.css']
})

export class ProfileComponent implements OnInit {
    user: any;
    profileForm: FormGroup;
    constructor(
        private localStorageService: LocalStorageService, 
        private fb: FormBuilder) { 
    }

    creatForm(){
        this.profileForm = this.fb.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            StreetAddress: ['', Validators.required],
            PhoneNumber: null,
            Gender: 'Male',
            City: ['Cambridge', Validators.required],
            State: ['', Validators.required],
            Pin: ['', Validators.required]
        })
    }

    submit(formValues: any){
        console.log(formValues);
    }

    getUser(){
        this.user = this.localStorageService.getObject('user');
        if(!this.user.Edited){
            this.user.FirstName = 'Wayne';
            this.user.LastName = 'Rooney';
            this.user.Gender = 'Male';
            this.user.Address = {
                StreetAddress: 'ABC street',
                City: 'Manchestor',
                State: 'UK',
                Pin: 123222
            };
        }
    }

    ngOnInit() { 
        this.getUser();
        this.creatForm();
        this.profileForm.patchValue(this.user);
    }
}