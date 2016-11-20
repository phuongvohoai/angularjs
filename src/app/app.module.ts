import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule } from 'ionic-angular';
import { WAW_Application } from './app.component';

// Import Components
import { ErrorMessagesControl } from '../components/error_message_control.component';
import { TranslateService, TranslatePipe } from "ng2-translate";
// Import services
import { ValidationService } from '../services/validation.service';
// Import view models
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgotpassword/forgotpassword';
import { PostDetailPage } from '../pages/post_detail/postdetail';
import { PostListPage } from '../pages/post_list/postlist';
import { UserDetailPage } from '../pages/user_detail/userdetail';
import { UserPage } from '../pages/user/user';
import { UserListPage } from '../pages/user_list/userlist';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
    declarations: [
        WAW_Application,
        ErrorMessagesControl,
        AboutPage,
        HomePage,
        SignUpPage,
        LoginPage,
        ForgotPasswordPage,
        PostDetailPage,
        PostListPage,
        UserDetailPage,
        UserPage,
        UserListPage,
        TabsPage,
        TranslatePipe
    ],
    imports: [
        IonicModule.forRoot(WAW_Application),
        ReactiveFormsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        WAW_Application,
        ErrorMessagesControl,
        AboutPage,
        HomePage,
        SignUpPage,
        LoginPage,
        ForgotPasswordPage,
        PostDetailPage,
        PostListPage,
        UserDetailPage,
        UserPage,
        UserListPage,
        TabsPage
    ],
    providers: [ValidationService, TranslateService]
})

export class AppModule { }
