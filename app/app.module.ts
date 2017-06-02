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
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketDetailsService } from './ticket-details/ticket-details.service';
import { CommentComponent } from './comment/comment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorklogComponent } from './worklog/worklog.component';
import { FilterByNameComponent } from './filter-by/filter-by.component';
import { FilterByService } from './filter-by/filter-by.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TicketService } from './ticket/ticket.service';
import { CommentService } from './comment/comment.service';
import { WorklogService } from './worklog/worklog.service';
import { UtilityService } from './shared/utility.service';
import { GroupByPipe } from './shared/group-by.pipe';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot(), HttpModule],
    declarations: [
        AppComponent, TicketListComponent, TicketKanbanComponent, WelcomeComponent, TicketDetailsComponent,
        SidebarComponent, NavbarComponent, CommentComponent, 
        WorklogComponent, FilterByNameComponent, DashboardComponent,
        ProfileComponent, GroupByPipe
    ],
    providers: [
        CommentService, TicketService, WorklogService,
        UtilityService, FilterByService, TicketDetailsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{
    name: string = 'Title';
}