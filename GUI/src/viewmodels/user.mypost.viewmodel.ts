import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomeViewModel } from '../viewmodels/home.viewmodel';

@Component({
    selector: 'page-mypost',
    templateUrl: '../pages/users/mypost/mypost.html'
})
export class MyPostViewModel {

     homePage = HomeViewModel;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {  }

    openMenu() {
        this.menuCtrl.open();
    }
}
