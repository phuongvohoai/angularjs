import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomeViewModel } from '../viewmodels/home.viewmodel';

@Component({
    selector: 'page-about',
    templateUrl: '../pages/about/about.html'
})
export class AboutViewModel {

    homePage = HomeViewModel;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {  }

    openMenu() {
        this.menuCtrl.open();
    }

}
