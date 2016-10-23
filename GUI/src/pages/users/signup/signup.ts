import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})

export class SignUpPage {
    
    signUpForm: any;
    
    constructor(public navCtrl: NavController, private fb: FormBuilder) {
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
    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.signUpForm);
    }
}
