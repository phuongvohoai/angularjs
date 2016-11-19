import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-viewlistuser',
    templateUrl: 'userlist.html'
})
export class UserListPage {

    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello Viewlistuser Page');
    }

}
