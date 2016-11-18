import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { HomeTabsViewModel } from '../viewmodels/home.tabs.viewmodel';

@Component({
    selector: 'page-myexecutedjob',
    templateUrl: '../pages/users/myexecutedjob/myexecutedjob.html'
})
export class MyExecutedJobViewModel {

    homePage = HomeTabsViewModel;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {  }

     openMenu() {
        this.menuCtrl.open();
    }
}
