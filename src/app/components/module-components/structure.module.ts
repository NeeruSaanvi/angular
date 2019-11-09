import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
 
import { from } from 'rxjs/internal/observable/from';
import { StructureComponent } from './structure.component';
import { HomeComponent } from './home/home.component';
import { splashComponent } from './splash/splash.component';
import { loginComponent }  from './login/login.component';
import { registerComponent } from './register/register.component';
import { termsConditionComponent } from './terms-condition/terms-condition.component';
import { CountryMobileComponent } from './country-mobile/country-mobile.component';
import { BlankComponent } from './blank/blank.component';
import { EmailResetComponent } from './email-reset/email-reset.component';
import { resetPasswordComponent } from './reset-password/reset-password.component';
import { passwordSuccessComponent } from './password-successfull/password-successfull.component';

import {CalendarModule} from 'primeng/calendar'; 
import { RecaptchaModule } from 'angular-google-recaptcha';
// import { ToastrModule } from 'ng6-toastr-notifications';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { ChartModule } from 'angular2-chartjs';
 
 

export const routes: Routes = [
  {
    path: '',
    component: StructureComponent,
    children: [

        {path: '', redirectTo: 'splash', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        { path: 'splash',component: splashComponent },
        { path: 'login',component: loginComponent },
        { path: 'register',component: registerComponent },
        { path: 'terms-condition',component: termsConditionComponent },
        { path: 'country-mobile',component: CountryMobileComponent },
        { path: 'blank',component: BlankComponent },
        { path: 'email-reset',component: EmailResetComponent },
        { path: 'reset-password',component: resetPasswordComponent },
        { path: 'password-success',component: passwordSuccessComponent },
      ]
  },
];



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
        siteKey: '6LcL1pAUAAAAAMap11z8mfJcYWuuXNg1IuUnB3Zr',
    }),
    // ToastrModule.forRoot()
  ],
  declarations: [
    StructureComponent, 
    HomeComponent, 
    splashComponent,
    loginComponent,
    registerComponent,
    termsConditionComponent,
    CountryMobileComponent,
    BlankComponent,
    EmailResetComponent,
    resetPasswordComponent,
    passwordSuccessComponent
  ],
   providers: [ 
  ],
})
export class StructureModule { }
