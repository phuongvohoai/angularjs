import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomeTabsViewModel } from '../viewmodels/home.tabs.viewmodel';

@Component({
    selector: 'page-about',
    templateUrl: '../pages/about/about.html'
})
export class AboutViewModel {

    homePage = HomeTabsViewModel;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {  }

    openMenu() {
        this.menuCtrl.open();
    }

}
