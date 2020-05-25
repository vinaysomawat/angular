import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AndroiddevComponent } from './androiddev/androiddev.component';
import { CpprofileComponent } from './cpprofile/cpprofile.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebdevComponent } from './webdev/webdev.component';
import { SoftwaredevComponent } from './softwaredev/softwaredev.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CpprofileComponent,
    WebdevComponent,
    SoftwaredevComponent,
    AndroiddevComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
