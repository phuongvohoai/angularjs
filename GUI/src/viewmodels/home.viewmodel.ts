import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: '../pages/home/home.html'
})
export class HomeViewModel {

    constructor(public navCtrl: NavController) {  }

}
