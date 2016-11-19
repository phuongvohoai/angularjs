import { Component } from '@angular/core';
import { NavController, MenuController, App } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-userextension',
    templateUrl: 'userextension.html'
})

export class UserExtensionPage {

    edituserForm: any;
    homePage = HomePage;

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
        this.app.getRootNav().push(HomePage);
    }

}
