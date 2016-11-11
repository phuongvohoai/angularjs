import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, MenuController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

import { HomeViewModel } from '../viewmodels/home.viewmodel';

@Component({
    selector: 'page-editusertab1',
    templateUrl: '../pages/users/edituser/editusertab1/editusertab1.html'
})

export class EditUserTab1ViewModel {
     @ViewChild(Nav) nav: Nav;

    edituserForm: any;
    homePage: any = HomeViewModel;
    ext_page: any;

    constructor(public navCtrl: NavController, private fb: FormBuilder, public menuCtrl: MenuController) {
        this.ext_page = { component: HomeViewModel };
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
        this.navCtrl.push(HomeViewModel);
    }

}
