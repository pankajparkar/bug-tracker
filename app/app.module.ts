import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot()],
    declarations: [AppComponent, DemoComponent, TestComponent, SidebarComponent],
    bootstrap: [AppComponent]
})l
export class AppModule{
    name: string = 'Title';
}