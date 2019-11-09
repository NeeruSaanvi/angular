import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { Router,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CalendarModule} from 'primeng/calendar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    CalendarModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
        siteKey: '6LcL1pAUAAAAAMap11z8mfJcYWuuXNg1IuUnB3Zr',
    }),
    // '6LcL1pAUAAAAAJXSjln5jl94RkMQeo7IpbbMhdnu'
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
