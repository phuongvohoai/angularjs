import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation.service';
import { SignUpService } from '../services/user.signup.service';
import { User } from '../models/user.model';

@Component({
    selector: 'page-signup',
    templateUrl: '../pages/users/signup/signup.html',
    providers: [SignUpService]
})

export class SignUpViewModel {

    private signUpForm: any;
    private newUserJSON: string;
    private user: User;

    constructor(public navCtrl: NavController,
                private fb: FormBuilder,
                private signUpService: SignUpService){
        this.signUpForm = fb.group({
            "displayName": ["", Validators.compose([Validators.required])],
            "username":["", Validators.compose([Validators.required,
                                                Validators.minLength(4)])],
            "password":["", Validators.compose([Validators.required,
                                                ValidationService.passwordValidator])],
            "confirmPassword":["", Validators.compose([Validators.required])],
            "email":["", Validators.compose([Validators.required,
                                            ValidationService.emailValidator])]
        });
    }

    createNewAccount(user: any) {
        this.user = user as User;
        this.signUpService.postUserAPI(this.user).subscribe(
                data => this.newUserJSON = JSON.stringify(data),
                error => console.log("Error HTTP Post Service"),
                () => console.log("Create New Account Done!")
            );
    }


}
