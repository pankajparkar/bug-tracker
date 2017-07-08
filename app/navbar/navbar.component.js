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
var router_1 = require("@angular/router");
var auth_service_1 = require("../shared/auth.service");
var localstorage_service_1 = require("../shared/localstorage.service");
var NavbarComponent = (function () {
    function NavbarComponent(authService, router, localStorageService) {
        this.authService = authService;
        this.router = router;
        this.localStorageService = localStorageService;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    //set current user to blank
    NavbarComponent.prototype.getUserName = function () {
        var obj = this.localStorageService.getObject('user');
        return obj && obj.name;
    };
    NavbarComponent.prototype.isAutheticated = function () {
        return this.authService.isAutheticated();
    };
    ;
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: '/app/navbar/navbar.component.html',
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            localstorage_service_1.LocalStorageService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map