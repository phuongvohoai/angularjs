import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders }  from './app.routing';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ForgotpasswordComponent } from './components/account/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './components/account/changepassword/changepassword.component';
import { EditprofileComponent } from './components/account/editprofile/editprofile.component';
import { DetailpostComponent } from './components/detailpost/detailpost.component';

import { PostjobComponent } from './components/postjob/postjob.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    EditprofileComponent,
    PostjobComponent,
    DetailpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
