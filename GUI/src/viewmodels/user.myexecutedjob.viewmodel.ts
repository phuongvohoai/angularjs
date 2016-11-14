import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomeViewModel } from '../viewmodels/home.viewmodel';

@Component({
    selector: 'page-myexecutedjob',
    templateUrl: '../pages/users/myexecutedjob/myexecutedjob.html'
})
export class MyExecutedJobViewModel {

    homePage = HomeViewModel;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {  }

     openMenu() {
        this.menuCtrl.open();
    }
}
