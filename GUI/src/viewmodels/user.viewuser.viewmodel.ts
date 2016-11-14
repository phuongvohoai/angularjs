import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-viewuser',
    templateUrl: '../pages/users/viewuser/viewuser.html'
})
export class ViewUserViewModel {

    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello view user Page');
    }

}
