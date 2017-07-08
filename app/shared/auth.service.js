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
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.login = function (user) {
        this.currentUser = user;
        //TODO: Add more fields by default
        this.currentUser.LastLoginDate = new Date();
    };
    //set current user to blank
    AuthService.prototype.logout = function () {
        this.currentUser = undefined;
        this.router.navigate(['login']);
    };
    //set current user to blank
    AuthService.prototype.getUserName = function () {
        return this.currentUser && this.currentUser.name;
    };
    //check user is present or not
    AuthService.prototype.isAutheticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.checkUserLogin = function () {
        if (!!this.currentUser)
            return true;
        this.router.navigate(['login']);
        return false;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map