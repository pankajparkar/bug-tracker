import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketListComponent } from './ticket/ticket-list.component';
import { TicketKanbanComponent } from './ticket/ticket-kanban.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', component: DashboardComponent, 
    children : [
      { path: 'ticket-list', component: TicketListComponent },
      { path: 'ticket-kanban', component: TicketKanbanComponent },
      { path: 'ticket-details/:ticketId', component: TicketDetailsComponent },
      { path: '', redirectTo: 'ticket-list', pathMatch: "full" }
    ]
  },
  { path: 'profile', component: ProfileComponent },

  //fallbacks to default route
  { path: '', redirectTo: "welcome", pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }