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
var ticket_details_service_1 = require("./ticket-details.service");
var common_service_1 = require("../shared/common.service");
var TicketDetailsComponent = (function () {
    function TicketDetailsComponent(ticketDetailsService, commonService, activatedRoute) {
        this.ticketDetailsService = ticketDetailsService;
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
    }
    TicketDetailsComponent.prototype.getStatuses = function () {
        var _this = this;
        this.commonService.getTicketStatuses().subscribe(function (statuses) { return _this.statuses = statuses; });
    };
    TicketDetailsComponent.prototype.getNames = function () {
        var _this = this;
        this.commonService.getNames().subscribe(function (names) { return _this.names = names; });
    };
    TicketDetailsComponent.prototype.getTicketTypes = function () {
        var _this = this;
        this.commonService.getTicketTypes().subscribe(function (types) { return _this.types = types; });
    };
    TicketDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getStatuses();
        this.getNames();
        this.getTicketTypes();
        var ticketId = this.activatedRoute.snapshot.params['ticketId'];
        this.ticketDetailsService.getTicketDetails(ticketId).subscribe(function (tickets) { return _this.model = tickets.filter(function (t) { return t.Id === Number(ticketId); })[0]; });
        //We will make an service/API call to retrieve correct ticket.
    };
    return TicketDetailsComponent;
}());
TicketDetailsComponent = __decorate([
    core_1.Component({
        selector: 'ticket-details',
        templateUrl: '/app/ticket-details/ticket-details.component.html',
    }),
    __metadata("design:paramtypes", [ticket_details_service_1.TicketDetailsService,
        common_service_1.CommonService,
        router_1.ActivatedRoute])
], TicketDetailsComponent);
exports.TicketDetailsComponent = TicketDetailsComponent;
//# sourceMappingURL=ticket-details.component.js.map