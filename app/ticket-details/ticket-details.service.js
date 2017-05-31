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
var TicketDetailsService = (function () {
    function TicketDetailsService() {
    }
    TicketDetailsService.prototype.getTicketDetailsList = function () {
        return [
            { id: 1, name: "Pankaj", title: "", description: "This is test 1" },
            { id: 2, name: "Pankaj", title: "", description: "This is test 2" },
            { id: 3, name: "Pankaj", title: "", description: "This is test 3" },
            { id: 4, name: "Pankaj", title: "", description: "This is test 4" },
            { id: 5, name: "Pankaj", title: "", description: "This is test 5" },
            { id: 6, name: "Kamlesh", title: "", description: "This is test 5 Kamlesh" },
            { id: 7, name: "Kamlesh", title: "", description: "This is test 5 Kamlesh" },
            { id: 8, name: "Kamlesh", title: "", description: "This is test 5 Kamlesh" },
            { id: 9, name: "Tom", title: "", description: "This is test 9" },
            { id: 10, name: "Tom", title: "", description: "This is test 10" },
        ];
    };
    return TicketDetailsService;
}());
TicketDetailsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TicketDetailsService);
exports.TicketDetailsService = TicketDetailsService;
//# sourceMappingURL=ticket-details.service.js.map