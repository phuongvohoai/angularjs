import { Component } from '@angular/core';
import { NavController, MenuController, App } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { HomeTabsViewModel } from '../viewmodels/home.tabs.viewmodel';

@Component({
    selector: 'page-editusertab2',
    templateUrl: '../pages/users/edituser/editusertab2/editusertab2.html'
})

export class EditUserTab2ViewModel {

    edituserForm: any;
    homePage = HomeTabsViewModel;

    constructor(public navCtrl: NavController, private fb: FormBuilder, public menuCtrl: MenuController, private app:App) {
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
    openHomePage(){
        this.app.getRootNav().push(HomeTabsViewModel);
    }

}
