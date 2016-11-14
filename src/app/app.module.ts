import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule } from 'ionic-angular';
import { WAW_Application } from './app.component';
// Import Components
import { ErrorMessagesControl } from '../components/error_message_control.component';
import { TranslatePipe, TranslateService } from "ng2-translate";
// Import services
import { ValidationService } from '../services/validation.service';
// Import view models
import { AboutViewModel } from '../viewmodels/about.viewmodel';
import { HomeViewModel } from '../viewmodels/home.viewmodel';
import { SignUpViewModel } from '../viewmodels/user.signup.viewmodel';
import { LoginViewModel } from '../viewmodels/user.login.viewmodel';
import { ForgotPasswordViewModel } from '../viewmodels/user.forgotpassword.viewmodel';
import { EditUserTabsViewModel } from '../viewmodels/user.edituser.tabs.viewmodel';
import { EditUserTab1ViewModel } from '../viewmodels/user.edituser.tab1.viewmodel';
import { EditUserTab2ViewModel } from '../viewmodels/user.edituser.tab2.viewmodel';
import { ViewPostViewModel } from '../viewmodels/post.viewpost.viewmodel';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';
import { AddPostViewModel } from '../viewmodels/post.addpost.viewmodel';
import { MyPostViewModel } from '../viewmodels/user.mypost.viewmodel';
import { MyExecutedJobViewModel } from '../viewmodels/user.myexecutedjob.viewmodel';
import { NotificationViewModel } from '../viewmodels/notification.viewmodel';

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
        EditUserTabsViewModel,
        EditUserTab1ViewModel,
        EditUserTab2ViewModel,
        ViewListUserViewModel,
        AddPostViewModel,
        MyPostViewModel,
        MyExecutedJobViewModel,
        NotificationViewModel,
        ViewPostViewModel
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
      EditUserTabsViewModel,
      EditUserTab1ViewModel,
      EditUserTab2ViewModel,
      ViewListUserViewModel,
      AddPostViewModel,
      MyPostViewModel,
      MyExecutedJobViewModel,
      NotificationViewModel,
      ViewPostViewModel
    ],
  providers: [ValidationService, TranslateService]
})

export class AppModule {}
