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
var TicketItemComponent = (function () {
    function TicketItemComponent() {
    }
    return TicketItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TicketItemComponent.prototype, "ticket", void 0);
TicketItemComponent = __decorate([
    core_1.Component({
        selector: 'ticket-item',
        template: "\n        <span class=\"glyphicon\" [ngClass]=\"{\n            'glyphicon-tags': ticket.Type == 'Feature',\n            'glyphicon-flash': ticket.Type == 'Bug',\n            'glyphicon-arrow-down': ticket.Type == 'Minor'\n        }\"></span>\n        <a [routerLink]=\"['../ticket-details', ticket.Id]\">{{ticket.TicketNumber}}</a> {{ticket.Title}}\n        <span class=\"pull-right\">\n          <small>\n            Priority\n          </small>\n            <span class=\"label label-default\">{{ticket.Priority}}</span>\n        </span>\n    "
    })
], TicketItemComponent);
exports.TicketItemComponent = TicketItemComponent;
//# sourceMappingURL=ticket-item.component.js.map