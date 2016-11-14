import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ValidationService } from '../services/validation.service';
import { SignUpService } from '../services/user.signup.service';
import { User } from '../models/user.model';
import { AlertControl } from '../components/alert_control.component';

@Component({
    selector: 'page-signup',
    templateUrl: '../pages/users/signup/signup.html',    
    providers: [SignUpService, ValidationService]
})

export class SignUpViewModel {

    private signUpForm: any;
    private newUserJSON: string;
    private user: User;
    private alertControl: AlertControl;

    // Constructor
    constructor(private navCtrl: NavController, private fb: FormBuilder, private signUpService: SignUpService, private alertCtrl: AlertController) {
        this.signUpForm = fb.group({
            "displayName": ["", Validators.compose([Validators.required])],
            "username": ["", Validators.compose([Validators.required,
            Validators.minLength(4)])],
            "password": ["", Validators.compose([Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10),
            ValidationService.passwordValidator])],
            "confirmPassword": ["", Validators.compose([Validators.required])], 
            "email": ["", Validators.compose([Validators.required,
            ValidationService.emailValidator])]
        });
        this.alertControl = new AlertControl(this.navCtrl, this.alertCtrl);
    }

    // Create new account method
    createNewAccount(user: any) {
        this.user = user as User;
        this.signUpService.postUserAPI(this.user).subscribe(
            data => this.newUserJSON = JSON.stringify(data),
            error => console.log("Error HTTP Post Service"),
            () => console.log("Create New Account Done!")
        );
    }

    // Show alert
    showAlert() {
        this.alertControl.alertInfo("Show Alert", "This is a message.");
    }
}
