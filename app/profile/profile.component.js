"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var localstorage_service_1 = require("../shared/localstorage.service");
var ProfileComponent = (function () {
    function ProfileComponent(localStorageService, fb) {
        this.localStorageService = localStorageService;
        this.fb = fb;
    }
    ProfileComponent.prototype.creatForm = function () {
        this.profileForm = this.fb.group({
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required],
            StreetAddress: ['', forms_1.Validators.required],
            PhoneNumber: null,
            Gender: 'Male',
            City: ['Cambridge', forms_1.Validators.required],
            State: ['', forms_1.Validators.required],
            Pin: ['', forms_1.Validators.required]
        });
    };
    ProfileComponent.prototype.submit = function (formValues) {
        console.log(formValues);
    };
    ProfileComponent.prototype.getUser = function () {
        this.user = this.localStorageService.getObject('user');
        if (!this.user.Edited) {
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
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.creatForm();
        this.profileForm.patchValue(this.user);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: '/app/profile/profile.component.html',
            styleUrls: ['/app/profile/profile.component.css']
        }),
        __metadata("design:paramtypes", [localstorage_service_1.LocalStorageService,
            forms_1.FormBuilder])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map