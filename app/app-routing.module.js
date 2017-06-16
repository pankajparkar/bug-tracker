"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ticket_list_component_1 = require("./ticket/ticket-list.component");
var ticket_kanban_component_1 = require("./ticket/ticket-kanban.component");
var ticket_details_component_1 = require("./ticket-details/ticket-details.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var welcome_component_1 = require("./welcome/welcome.component");
var routes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: 'ticket-list', component: ticket_list_component_1.TicketListComponent },
            { path: 'ticket-kanban', component: ticket_kanban_component_1.TicketKanbanComponent },
            { path: 'ticket-details/:ticketId', component: ticket_details_component_1.TicketDetailsComponent },
            { path: '', redirectTo: 'ticket-list', pathMatch: "full" }
        ]
    },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: '', redirectTo: "welcome", pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: "full" }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map