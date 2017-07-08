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
var http_1 = require("@angular/http");
var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
    }
    CommonService.prototype.getTicketTypes = function () {
        return this.http.get('/api/ticket-types.json').map(this.unWrapData);
    };
    CommonService.prototype.getNames = function () {
        return this.http.get('/api/names.json').map(this.unWrapData);
    };
    CommonService.prototype.getTicketStatuses = function () {
        return this.http.get('/api/ticket-status.json').map(this.unWrapData);
    };
    CommonService.prototype.unWrapData = function (data) {
        return data.json();
    };
    CommonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map