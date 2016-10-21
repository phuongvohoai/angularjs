import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/users/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/users/login/login';
import { ForgotPasswordPage } from '../pages/users/forgotpassword/forgotpassword';

@NgModule({
  declarations: [
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
    IonicModule.forRoot(MyApp)
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
  providers: []
})
export class AppModule {}
