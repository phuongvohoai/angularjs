import { Component } from '@angular/core';
import { NavController, MenuController, App } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

import { HomePage } from '../home/home';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})

export class UserPage {

    edituserForm: any;
    homePage: any = HomePage;

    constructor(public navCtrl: NavController, private fb: FormBuilder, public menuCtrl: MenuController, private app:App) {
        this.edituserForm = fb.group({
            "displayName": ["", Validators.compose([Validators.required])],
            "gender": [""],
            "birthday": ["", Validators.required],
            "phone": ["", Validators.compose([Validators.required,
            ValidationService.phoneNumberValidator])],
            "email": ["", Validators.compose([Validators.required,
            ValidationService.emailValidator])],
            "address": ["", Validators.compose([Validators.required])]
        });
    }

    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.edituserForm);
    }
    openMenu() {
        this.menuCtrl.open();
    }
    openHomePage(){
        this.app.getRootNav().push(HomePage);
    }

}
