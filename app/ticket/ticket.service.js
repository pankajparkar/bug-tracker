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
var TicketService = (function () {
    function TicketService() {
    }
    TicketService.prototype.getTicketList = function () {
        return [
            { "Id": 1, "AssignedTo": "Alex", "Title": "Add feature to file upload", "Description": "Add feature to file upload", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3 },
            { "Id": 2, "AssignedTo": "Alex", "Title": "Create mockups for file upload UI", "Description": "Create mockups for file upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3 },
            { "Id": 3, "AssignedTo": "Alex", "Title": "Implement backend API for file upload", "Description": "Implement backend API for file upload", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 2 },
            { "Id": 4, "AssignedTo": "Alex", "Title": "Create a front-end for file upload", "Description": "Create a front-end for file upload", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 2 },
            { "Id": 5, "AssignedTo": "Alex", "Title": "Photo cropper bugs", "Description": "Photo cropper bugs", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 2 },
            { "Id": 6, "AssignedTo": "John", "Title": "Display uploaded files list on dashboard", "Description": "Display uploaded files list on dashboard", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 1 },
            { "Id": 7, "AssignedTo": "John", "Title": "Write API docuementation for file Upload", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3 },
            { "Id": 8, "AssignedTo": "John", "Title": "Fix file upload feature bug", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 2 },
            { "Id": 9, "AssignedTo": "John", "Title": "Implement best search in product", "Description": "File upload UI", "Type": "Bug", "Priority": 9, "ticketNumber": "PM-1", "Status": 2 },
            { "Id": 10, "AssignedTo": "John", "Title": "Wrap up fileupload & cropper functionility together", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 1 },
            { "Id": 11, "AssignedTo": "Tom", "Title": "Create test cases for file upload feature", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3 },
            { "Id": 12, "AssignedTo": "Tom", "Title": "Create test cases for photo cropper feature", "Description": "File upload UI", "Type": "Feature", "Priority": 9, "ticketNumber": "PM-1", "Status": 3 },
        ];
    };
    return TicketService;
}());
TicketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map