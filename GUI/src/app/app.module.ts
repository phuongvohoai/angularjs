import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule } from 'ionic-angular';
import { ControlMessages } from '../components/controlmessages.component';
// import services
import { ValidationService } from '../services/validation.service';
// import components
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SignUpComponent } from '../components/signup.component';
import { LoginPage } from '../pages/users/login/login';
import { ForgotPasswordPage } from '../pages/users/forgotpassword/forgotpassword';
import { EditUserPage } from '../pages/users/edituser/edituser';
import { ViewListUserPage } from '../pages/users/viewlistuser/viewlistuser';

@NgModule({
  declarations: [
    ControlMessages,
    MyApp,
    AboutPage,
    SignUpComponent,
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
    SignUpComponent,
    LoginPage,
    ForgotPasswordPage,
    EditUserPage,
    ViewListUserPage
  ],
  providers: [ValidationService]
})
export class AppModule {}
