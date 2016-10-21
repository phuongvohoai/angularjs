import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

    forgotPasswordPage = ForgotPasswordPage;
    signUpPage = SignUpPage;
    
    constructor(public navCtrl: NavController) {
    }
}
