import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { CommentComponent } from './comment/comment.component';
import { WorklogComponent } from './worklog/worklog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { 
    path: 'dashboard', component: DashboardComponent, 
    children : [
      { path: 'ticket', component: TicketComponent },
      { path: 'ticket-details/:ticketId', component: TicketDetailsComponent },
      { path: 'comment', component: CommentComponent },
      { path: 'worklog', component: WorklogComponent },
      { path: '', redirectTo: 'ticket', pathMatch: "full" },
    ]
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'demo', component: DemoComponent },
  { path: '', redirectTo: "welcome", pathMatch: 'full' },
  //{ path: '**', redirectTo: 'welcome', pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      {useHash: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }