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
var Subject_1 = require("rxjs/Subject");
var ticket_service_1 = require("./ticket.service");
var utility_service_1 = require("../shared/utility.service");
var filter_by_service_1 = require("./../filter-by/filter-by.service");
var TicketListComponent = (function () {
    function TicketListComponent(ticketService, utilityService, filterByService) {
        this.ticketService = ticketService;
        this.utilityService = utilityService;
        this.filterByService = filterByService;
        this.ngUnsubscribe = new Subject_1.Subject();
    }
    TicketListComponent.prototype.ticketList = function () {
        var _this = this;
        this.ticketService.getTicketList().subscribe(function (tickets) { return _this.tickets = tickets; });
    };
    TicketListComponent.prototype.ngOnInit = function () {
        this.filterName$ = this.filterByService.filterNameObservable();
        this.filterNameSub$ = this.filterName$.subscribe();
        this.ticketList();
    };
    TicketListComponent.prototype.ngOnDestroy = function () {
        //clearing up stuff
        this.filterNameSub$.unsubscribe();
    };
    TicketListComponent = __decorate([
        core_1.Component({
            selector: 'ticket-list',
            templateUrl: '/app/ticket/ticket-list.component.html',
            styles: ["\n        .panel.panel-info{\n            background: rgba(236, 236, 236, 0.15);\n            box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2), 0 1px 11px 0 rgba(0,0,0,0.19);\n        }"
            ]
        }),
        __metadata("design:paramtypes", [ticket_service_1.TicketService,
            utility_service_1.UtilityService,
            filter_by_service_1.FilterByService])
    ], TicketListComponent);
    return TicketListComponent;
}());
exports.TicketListComponent = TicketListComponent;
//# sourceMappingURL=ticket-list.component.js.map