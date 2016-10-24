import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SignUpPage } from '../pages/users/signup/signup';
import { LoginPage } from '../pages/users/login/login';
import { ForgotPasswordPage } from '../pages/users/forgotpassword/forgotpassword';
import { ControlMessages } from '../components/controlmessages.component';
import { ValidationService } from '../services/validation.service';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
    ControlMessages,
    MyApp,
    AboutPage,
    SignUpPage,
    LoginPage,
    ForgotPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SignUpPage,
    LoginPage,
    ForgotPasswordPage
  ],
  providers: [ValidationService, UserService]
})

export class AppModule {}
