import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validationservice';

import { User } from '../models/user.interface';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})

export class SignUpPage {

    signUpForm: any;    
    
    constructor(public navCtrl: NavController, fb: FormBuilder) {
        this.signUpForm = fb.group({
            "displayName": ["", Validators.required],
            "username":["", Validators.required],
            "password":["", Validators.required],
            "confirmPassword":["", Validators.required],
            "email":["", Validators.required]
        });
    }
    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.signUpForm);
    }
}
