import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { TicketComponent } from './ticket/ticket.component';
import { CommentComponent } from './comment/comment.component';
import { WorklogComponent } from './worklog/worklog.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'worklog', component: WorklogComponent },
  { path: '', redirectTo: "demo", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }