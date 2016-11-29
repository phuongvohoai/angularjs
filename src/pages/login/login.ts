import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { SignUpPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [AuthService]
})

export class LoginPage {

    loginForm: any;
    forgotPasswordPage = ForgotPasswordPage;
    signUpPage = SignUpPage;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, private fb: FormBuilder, private authService: AuthService) {
        this.loginForm = fb.group({
            "username": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])]
        });
    }

    onSubmit() {
        if (this.loginForm.controls.username.value != null && this.loginForm.controls.password.value != null) {
            this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
                .then((data: boolean) => {
                    console.log(data);
                    if (data == true) {
                        this.navCtrl.push(HomePage);
                        this.showCustomToast('Login successfully.');
                    }
                })
                .catch(error => {
                    console.log('Ooop!');
                    this.showCustomToast('Username or password is not correct.');
                });
        }
        else {
            this.showCustomToast('Please input username and password.');
        }
    }

    private showCustomToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
}
