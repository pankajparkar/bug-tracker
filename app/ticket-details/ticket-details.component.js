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
var utility_service_1 = require("../shared/utility.service");
var TicketDetailsComponent = (function () {
    function TicketDetailsComponent(ticketDetailsService, utilityService, activatedRoute) {
        this.ticketDetailsService = ticketDetailsService;
        this.utilityService = utilityService;
        this.activatedRoute = activatedRoute;
    }
    TicketDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ticketId = this.activatedRoute.snapshot.params['ticketId'];
        this.ticketDetailsService.getTicketDetails(ticketId).subscribe(function (tickets) { return _this.model = tickets.filter(function (t) { return t.Id === Number(ticketId); })[0]; });
        //We will make an service/API call to retrieve correct ticket.
    };
    TicketDetailsComponent = __decorate([
        core_1.Component({
            selector: 'ticket-details',
            templateUrl: '/app/ticket-details/ticket-details.component.html',
        }),
        __metadata("design:paramtypes", [ticket_details_service_1.TicketDetailsService,
            utility_service_1.UtilityService,
            router_1.ActivatedRoute])
    ], TicketDetailsComponent);
    return TicketDetailsComponent;
}());
exports.TicketDetailsComponent = TicketDetailsComponent;
//# sourceMappingURL=ticket-details.component.js.map