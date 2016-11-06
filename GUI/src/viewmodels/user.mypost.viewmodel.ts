import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-mypost',
    templateUrl: '../pages/users/mypost/mypost.html'
})
export class MyPostViewModel {

    constructor(public navCtrl: NavController) {  }

}
