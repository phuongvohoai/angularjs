import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/users/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/users/login/login';
import { ForgotPasswordPage } from '../pages/users/forgotpassword/forgotpassword';
import { ControlMessages } from '../components/controlmessages';
import { ValidationService } from '../services/validationservice';

@NgModule({
  declarations: [
    ControlMessages,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SignUpPage,
    TabsPage,
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
    ContactPage,
    HomePage,
    SignUpPage,
    TabsPage,
    LoginPage,
    ForgotPasswordPage
  ],
  providers: [ValidationService]
})
export class AppModule {}
