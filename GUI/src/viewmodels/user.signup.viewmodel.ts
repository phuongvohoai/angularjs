import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ValidationService } from '../services/validation.service';
import { SignUpService } from '../services/user.signup.service';

@Component({
    selector: 'page-signup',
    templateUrl: '../pages/users/signup/signup.html',
    providers: [SignUpService, ValidationService]
})

export class SignUpViewModel {

    private signUpForm: any;

    constructor(
        public navCtrl: NavController,
        private fb: FormBuilder,
        private signUpService: SignUpService,
        private alertCtrl: AlertController)
    {
        this.signUpForm = fb.group({
            "displayName": ["", Validators.compose([Validators.required])],
            "username": ["", Validators.compose([Validators.required,
            Validators.minLength(4)])],
            "password": ["", Validators.compose([Validators.required,
            ValidationService.passwordValidator])],
            "confirmPassword": ["", Validators.compose([Validators.required])],
            "email": ["", Validators.compose([Validators.required,
            ValidationService.emailValidator])]
        });
    }

    createNewAccount(user: any) {
        let alert = this.alertCtrl.create({
            title: 'Login successfully',
            buttons: [{
                text: 'Welcome to work any where!',
                handler: () => {
                    // user has clicked the alert button
                    // begin the alert's dismiss transition
                    alert.dismiss();
                    return false;
                }
            }]
        });
        alert.present();
    }
}
