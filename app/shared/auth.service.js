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
var localstorage_service_1 = require("./localstorage.service");
var userKey = 'user';
var AuthService = (function () {
    function AuthService(router, localStorageService) {
        this.router = router;
        this.localStorageService = localStorageService;
    }
    AuthService.prototype.login = function (user) {
        //TODO: Add more fields by default
        user.LastLoginDate = new Date();
        this.localStorageService.set(userKey, JSON.stringify(user));
    };
    //set current user to blank
    AuthService.prototype.logout = function () {
        this.localStorageService.set(userKey, "");
    };
    //check user is present or not
    AuthService.prototype.isAutheticated = function () {
        return !!this.localStorageService.getObject(userKey);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, localstorage_service_1.LocalStorageService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map