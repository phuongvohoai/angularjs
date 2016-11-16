import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ForgotPasswordViewModel } from './user.forgotpassword.viewmodel';
import { SignUpViewModel } from './user.signup.viewmodel';
import { HomeViewModel } from '../viewmodels/home.viewmodel';
import { UserProvider } from '../providers/user.provider';

@Component({
    selector: 'page-login',
    templateUrl: '../pages/users/login/login.html',
    providers: [UserProvider]
})

export class LoginViewModel {

    loginForm: any;
    forgotPasswordPage = ForgotPasswordViewModel;
    signUpPage = SignUpViewModel;
    homePage = HomeViewModel;


    /**
     * Creates an instance of LoginViewModel.
     * 
     * @param {NavController} navCtrl The nav controller
     * @param {FormBuilder} fb The form builder
     * @param {UserProvider} userProvider The user provider
     * 
     * @memberOf LoginViewModel
     */
    constructor(public navCtrl: NavController, private fb: FormBuilder, private userProvider: UserProvider) {
        this.loginForm = fb.group({
            "username": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])]
        });
    }


    /**
     *  Implement event click button Login
     * 
     * @returns
     * 
     * @memberOf LoginViewModel
     */
    onSubmit() {
        if (this.loginForm.controls.username.value != null && this.loginForm.controls.password.value != null) {
            console.log(this.loginForm.controls.username.value);
            console.log(this.loginForm.controls.password.value);
            if (this.userProvider.Login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)) {
                alert("Login successfully.");
                this.navCtrl.push(HomeViewModel);
            }
            else {
                alert("Login failed.");
            }
        }
        else {
            alert("Username or password is incorrect.");
        }
    }
}
