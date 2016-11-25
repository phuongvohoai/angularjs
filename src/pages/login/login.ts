import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
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
    
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private fb: FormBuilder, private authService: AuthService) {
        this.loginForm = fb.group({
            "username": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])]
        });
    }
    
    onSubmit() {
        if (this.loginForm.controls.username.value != null && this.loginForm.controls.password.value != null) {
            this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
                .then(data => {
                    console.log(data);
                    if (data == true) {
                        this.navCtrl.push(HomePage);
                    }
                })
                .catch(error => {
                    console.log('Ooop!');
                    this.showAlert('Login Failed', 'Username or password is not correct.');
                });
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
