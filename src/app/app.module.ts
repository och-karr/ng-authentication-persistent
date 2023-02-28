import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {STORAGE} from "./services/storage";
import {LoginGuard} from "./guards/login/login.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: STORAGE, useValue: localStorage },
    AuthService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
