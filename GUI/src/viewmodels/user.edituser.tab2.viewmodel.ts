import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

import { HomeViewModel } from '../viewmodels/home.viewmodel';

@Component({
    selector: 'page-editusertab2',
    templateUrl: '../pages/users/edituser/editusertab2/editusertab2.html'
})

export class EditUserTab2ViewModel {

    edituserForm: any;
    homePage = HomeViewModel;

    constructor(public navCtrl: NavController, private fb: FormBuilder, public menuCtrl: MenuController) {
        this.edituserForm = fb.group({
            "about": ["", Validators.compose([Validators.required])],
            "category": [""],
            "type": ["", Validators.required]
        });
    }

    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.edituserForm);
    }
    openMenu() {
        this.menuCtrl.open();
    }

}
