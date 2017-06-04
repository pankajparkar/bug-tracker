import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketListComponent } from './ticket/ticket-list.component';
import { TicketKanbanComponent } from './ticket/ticket-kanban.component';
import { TicketItemComponent } from './ticket/ticket-item.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketDetailsService } from './ticket-details/ticket-details.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterByNameComponent } from './filter-by/filter-by.component';
import { FilterByService } from './filter-by/filter-by.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TicketService } from './ticket/ticket.service';
import { UtilityService } from './shared/utility.service';
import { GroupByPipe } from './shared/group-by.pipe';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot(), HttpModule],
    declarations: [
        AppComponent, TicketListComponent, TicketKanbanComponent, WelcomeComponent, TicketDetailsComponent, TicketItemComponent,
        SidebarComponent, NavbarComponent, FilterByNameComponent, DashboardComponent, ProfileComponent, GroupByPipe
    ],
    providers: [
        TicketService, UtilityService, 
        FilterByService, TicketDetailsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{
    name: string = 'Title';
}