import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule } from 'ionic-angular';
import { WAW_Application } from './app.component';
// Import Components
import { ErrorMessagesControl } from '../components/error_message_control.component';
import { TranslatePipe } from "ng2-translate";
// Import services
import { ValidationService } from '../services/validation.service';
// Import view models
import { AboutViewModel } from '../viewmodels/about.viewmodel';
import { HomeViewModel } from '../viewmodels/home.viewmodel';
import { SignUpViewModel } from '../viewmodels/user.signup.viewmodel';
import { LoginViewModel } from '../viewmodels/user.login.viewmodel';
import { ForgotPasswordViewModel } from '../viewmodels/user.forgotpassword.viewmodel';
import { EditUserViewModel } from '../viewmodels/user.edituser.viewmodel';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';

@NgModule({
    declarations: [
        WAW_Application,
        ErrorMessagesControl,
        TranslatePipe,
        AboutViewModel,
        HomeViewModel,
        SignUpViewModel,
        LoginViewModel,
        ForgotPasswordViewModel,
        EditUserViewModel,
        ViewListUserViewModel
    ],
  imports: [
      IonicModule.forRoot(WAW_Application),
      ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      WAW_Application,
      ErrorMessagesControl,
      AboutViewModel,
      HomeViewModel,
      SignUpViewModel,
      LoginViewModel,
      ForgotPasswordViewModel,
      EditUserViewModel,
      ViewListUserViewModel
    ],
  providers: [ValidationService]
})

export class AppModule {}
