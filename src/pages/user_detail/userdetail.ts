import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-viewuser',
    templateUrl: 'userdetail.html'
})
export class UserDetailPage {

    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello view user Page');
    }

}
