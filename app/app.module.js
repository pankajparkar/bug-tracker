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
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var app_routing_module_1 = require("./app-routing.module");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var ticket_list_component_1 = require("./ticket/ticket-list.component");
var ticket_kanban_component_1 = require("./ticket/ticket-kanban.component");
var ticket_item_component_1 = require("./ticket/ticket-item.component");
var ticket_details_component_1 = require("./ticket-details/ticket-details.component");
var ticket_details_service_1 = require("./ticket-details/ticket-details.service");
var navbar_component_1 = require("./navbar/navbar.component");
var filter_by_component_1 = require("./filter-by/filter-by.component");
var filter_by_service_1 = require("./filter-by/filter-by.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var welcome_component_1 = require("./welcome/welcome.component");
var star_component_1 = require("./star/star.component");
var ticket_service_1 = require("./ticket/ticket.service");
var utility_service_1 = require("./shared/utility.service");
var auth_service_1 = require("./shared/auth.service");
var common_service_1 = require("./shared/common.service");
var authguard_service_1 = require("./shared/authguard.service");
var localstorage_service_1 = require("./shared/localstorage.service");
var group_by_pipe_1 = require("./shared/group-by.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, ng_bootstrap_1.NgbModule.forRoot(), http_1.HttpModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent, ticket_list_component_1.TicketListComponent, ticket_kanban_component_1.TicketKanbanComponent, welcome_component_1.WelcomeComponent, ticket_details_component_1.TicketDetailsComponent, ticket_item_component_1.TicketItemComponent,
                sidebar_component_1.SidebarComponent, navbar_component_1.NavbarComponent, filter_by_component_1.FilterByNameComponent, dashboard_component_1.DashboardComponent, profile_component_1.ProfileComponent, group_by_pipe_1.GroupByPipe,
                login_component_1.LoginComponent, star_component_1.StarComponent
            ],
            providers: [
                ticket_service_1.TicketService, utility_service_1.UtilityService,
                filter_by_service_1.FilterByService, ticket_details_service_1.TicketDetailsService,
                auth_service_1.AuthService, common_service_1.CommonService, authguard_service_1.AuthGuardService, localstorage_service_1.LocalStorageService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map