"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var demo_component_1 = require("./demo/demo.component");
var app_routing_module_1 = require("./app-routing.module");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var ticket_component_1 = require("./ticket/ticket.component");
var comment_component_1 = require("./comment/comment.component");
var navbar_component_1 = require("./navbar/navbar.component");
var worklog_component_1 = require("./worklog/worklog.component");
var filter_by_name_component_1 = require("./filter-by-name/filter-by-name.component");
var filter_by_name_service_1 = require("./filter-by-name/filter-by-name.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var ticket_service_1 = require("./ticket/ticket.service");
var comment_service_1 = require("./comment/comment.service");
var worklog_service_1 = require("./worklog/worklog.service");
var utility_service_1 = require("./shared/utility.service");
var AppModule = (function () {
    function AppModule() {
        this.name = 'Title';
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, ng_bootstrap_1.NgbModule.forRoot(), http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent, demo_component_1.DemoComponent, ticket_component_1.TicketComponent,
            sidebar_component_1.SidebarComponent, navbar_component_1.NavbarComponent, comment_component_1.CommentComponent,
            worklog_component_1.WorklogComponent, filter_by_name_component_1.FilterByNameComponent, dashboard_component_1.DashboardComponent,
            profile_component_1.ProfileComponent
        ],
        providers: [
            comment_service_1.CommentService, ticket_service_1.TicketService, worklog_service_1.WorklogService,
            utility_service_1.UtilityService, filter_by_name_service_1.FilterByNameService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map