import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
    selector: 'page-edituser',
    templateUrl: '../pages/users/edituser/edituser.html'
})

export class EditUserViewModel {

    edituserForm: any;

    constructor(public navCtrl: NavController, private fb: FormBuilder) {
        this.edituserForm = fb.group({
            "displayName": ["", Validators.compose([Validators.required])],
            "gender": [""],
            "birthday": ["", Validators.required],
            "phone": ["", Validators.compose([Validators.required,
            ValidationService.phoneNumberValidator])],
            "email": ["", Validators.compose([Validators.required,
            ValidationService.emailValidator])],
            "address": ["", Validators.compose([Validators.required])],
            "about": ["", Validators.compose([Validators.required])],
            "category": [""],
            "type": ["", Validators.required]
        });
    }

    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.edituserForm);
    }

}
