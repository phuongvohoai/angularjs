import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule } from 'ionic-angular';
import { ControlMessages } from '../components/controlmessages.component';
import { ValidationService } from '../services/validation.service';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SignUpPage } from '../pages/users/signup/signup';
import { LoginPage } from '../pages/users/login/login';
import { ForgotPasswordPage } from '../pages/users/forgotpassword/forgotpassword';
import { EditUserPage } from '../pages/users/edituser/edituser';
import { ViewListUserPage } from '../pages/users/viewlistuser/viewlistuser';

@NgModule({
  declarations: [
    ControlMessages,
    MyApp,
    AboutPage,
    SignUpPage,
    LoginPage,
    ForgotPasswordPage,
    EditUserPage,
    ViewListUserPage
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
    ForgotPasswordPage,
    EditUserPage,
    ViewListUserPage
  ],
  providers: [ValidationService]
})
export class AppModule {}
