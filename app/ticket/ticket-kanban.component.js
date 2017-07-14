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
var common_service_1 = require("../shared/common.service");
var filter_by_service_1 = require("./../filter-by/filter-by.service");
var TicketKanbanComponent = (function () {
    function TicketKanbanComponent(ticketService, commonService, utilityService, filterByService) {
        this.ticketService = ticketService;
        this.commonService = commonService;
        this.utilityService = utilityService;
        this.filterByService = filterByService;
    }
    TicketKanbanComponent.prototype.getStatuses = function () {
        var _this = this;
        this.commonService.getTicketStatuses().subscribe(function (statuses) { return _this.statuses = statuses; });
    };
    TicketKanbanComponent.prototype.filterTicketsByStatus = function () {
        this.todoItems = this.tickets.filter(function (ticket) { return ticket.Status === 1; });
        this.inProgressItems = this.tickets.filter(function (ticket) { return ticket.Status === 2; });
        this.completedItems = this.tickets.filter(function (ticket) { return ticket.Status === 3; });
    };
    TicketKanbanComponent.prototype.ticketList = function (name) {
        var _this = this;
        this.ticketService.getTicketList().subscribe(function (tickets) {
            _this.tickets = tickets;
            if (name)
                _this.tickets = _this.tickets.filter(function (ticket) { return ticket.AssignedTo === name; });
            _this.filterTicketsByStatus();
        });
    };
    TicketKanbanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterName$ = this.filterByService.filterNameObservable();
        this.getStatuses();
        this.filterNameSub$ = this.filterName$.subscribe(function (name) { return _this.ticketList(name && name.Id); });
    };
    TicketKanbanComponent.prototype.ngOnDestroy = function () {
        this.filterNameSub$.unsubscribe();
    };
    TicketKanbanComponent = __decorate([
        core_1.Component({
            selector: 'ticket-kanban',
            templateUrl: '/app/ticket/ticket-kanban.component.html',
        }),
        __metadata("design:paramtypes", [ticket_service_1.TicketService,
            common_service_1.CommonService,
            utility_service_1.UtilityService,
            filter_by_service_1.FilterByService])
    ], TicketKanbanComponent);
    return TicketKanbanComponent;
}());
exports.TicketKanbanComponent = TicketKanbanComponent;
//# sourceMappingURL=ticket-kanban.component.js.map