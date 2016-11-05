import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ForgotPasswordViewModel } from './user.forgotpassword.viewmodel';
import { SignUpViewModel } from './user.signup.viewmodel';
import { HomeViewModel } from '../viewmodels/home.viewmodel';

@Component({
    selector: 'page-login',
    templateUrl: '../pages/users/login/login.html'
})

export class LoginViewModel {

    loginForm: any;
    forgotPasswordPage = ForgotPasswordViewModel;
    signUpPage = SignUpViewModel;
    homePage = HomeViewModel;

    constructor(public navCtrl: NavController, private fb: FormBuilder) {
        this.loginForm = fb.group({
            "username": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])]
        });
    }

    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.loginForm);
    }
}
