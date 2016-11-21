import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { SignUpPage } from '../signup/signup';
import { UserProvider } from '../../providers/user.provider';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [UserProvider]
})

export class LoginPage {

    loginForm: any;
    forgotPasswordPage = ForgotPasswordPage;
    signUpPage = SignUpPage;


    /**
     * Creates an instance of LoginViewModel.
     * 
     * @param {NavController} navCtrl The nav controller
     * @param {FormBuilder} fb The form builder
     * @param {UserProvider} userProvider The user provider
     * 
     * @memberOf LoginViewModel
     */
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private fb: FormBuilder, private userProvider: UserProvider) {
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
                this.navCtrl.push(HomePage);
            }
            else {
                this.showAlert('Login Failed', 'Username or password is not correct.');
            }
        }
        else {
            this.showAlert('Login Failed', 'Please input username and password.');
        }
    }

    private showAlert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }
}
