import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';
import { ForgotPasswordViewModel } from './user.forgotpassword.viewmodel';
import { SignUpViewModel } from './user.signup.viewmodel';

@Component({
    selector: 'page-login',
    templateUrl: '../pages/user/login/login.html'
})

export class LoginViewModel {

    loginForm: any;
    forgotPasswordPage = ForgotPasswordViewModel;
    signUpPage = SignUpViewModel;

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
