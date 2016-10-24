import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';
import { UserService } from '../../../services/user.service'
import { User } from '../../../models/user';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})

export class SignUpPage {
    
    private signUpForm: any;     
    
    constructor(public navCtrl: NavController, fb: FormBuilder, private userService: UserService) {
        this.signUpForm = fb.group({
            "displayName": ["", Validators.required],
            "username":["", Validators.required],
            "password":["", Validators.required],
            "confirmPassword":["", Validators.required],
            "email":["", Validators.required]
        });
    }

    public AddNewUser(user: any) {
        this.userService.create(user as User);
        console.log(user);
        console.log(this.signUpForm);
    }
}
