import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FrontendLearningComponent } from './modules/frontend-learning/frontend-learning.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { AlluserComponent } from './modules/alluser/alluser.component';
import { CustomInterceptor } from './services/custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    FrontendLearningComponent,
    CustomDirectiveDirective,
    LoginComponent,
    SignupComponent,
    AlluserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [ {provide : LocationStrategy , useClass: HashLocationStrategy}, {
    provide:HTTP_INTERCEPTORS, useClass:CustomInterceptor,multi : true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
