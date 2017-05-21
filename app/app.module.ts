import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketComponent } from './ticket/ticket.component';
import { CommentComponent } from './comment/comment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorklogComponent } from './worklog/worklog.component';
import { FilterByNameComponent } from './filter-by-name/filter-by-name.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot()],
    declarations: [
        AppComponent, DemoComponent, TicketComponent, 
        SidebarComponent, NavbarComponent, CommentComponent, 
        WorklogComponent, FilterByNameComponent, DashboardComponent,
        ProfileComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{
    name: string = 'Title';
}