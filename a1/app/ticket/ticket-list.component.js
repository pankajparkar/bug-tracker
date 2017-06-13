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
var ticket_service_1 = require("./ticket.service");
var utility_service_1 = require("../shared/utility.service");
var filter_by_service_1 = require("./../filter-by/filter-by.service");
var TicketListComponent = (function () {
    function TicketListComponent(ticketService, utilityService, filterByService) {
        this.ticketService = ticketService;
        this.utilityService = utilityService;
        this.filterByService = filterByService;
    }
    TicketListComponent.prototype.ticketList = function () {
        var _this = this;
        this.ticketService.getTicketList().subscribe(function (tickets) { return _this.tickets = tickets; });
    };
    TicketListComponent.prototype.ngOnInit = function () {
        this.filterName$ = this.filterByService.filterNameObservable();
        this.ticketList();
    };
    return TicketListComponent;
}());
TicketListComponent = __decorate([
    core_1.Component({
        selector: 'ticket-list',
        templateUrl: '/app/ticket/ticket-list.component.html',
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        utility_service_1.UtilityService,
        filter_by_service_1.FilterByService])
], TicketListComponent);
exports.TicketListComponent = TicketListComponent;
//# sourceMappingURL=ticket-list.component.js.map