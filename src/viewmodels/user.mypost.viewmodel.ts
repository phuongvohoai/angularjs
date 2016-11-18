import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomeTabsViewModel } from '../viewmodels/home.tabs.viewmodel';

@Component({
    selector: 'page-mypost',
    templateUrl: '../pages/users/mypost/mypost.html'
})
export class MyPostViewModel {

     homePage = HomeTabsViewModel;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {  }

    openMenu() {
        this.menuCtrl.open();
    }
}
