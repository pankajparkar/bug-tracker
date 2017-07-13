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
var common_1 = require("@angular/common");
var DashboardComponent = (function () {
    function DashboardComponent(location) {
        this.location = location;
    }
    DashboardComponent.prototype.isTicketDetailsRoute = function () {
        //Find more better way to do it.
        return this.location.path().indexOf('/dashboard/ticket-details/') > -1;
    };
    DashboardComponent.prototype.ngOnInit = function () { };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: '/app/dashboard/dashboard.component.html',
        styles: ["\n        :host .row.content{\n            background: rgba(236, 236, 236, 0.15);\n            box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2), 0 1px 11px 0 rgba(0,0,0,0.19);\n            padding: 10px;\n        }   \n        .child-content{\n            max-height: 500px;\n            overflow-y: auto;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [common_1.Location])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map