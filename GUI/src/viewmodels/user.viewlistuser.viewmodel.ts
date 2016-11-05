import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-viewlistuser',
    templateUrl: '../pages/user/viewlistuser/viewlistuser.html'
})
export class ViewListUserViewModel {

    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello Viewlistuser Page');
    }

}
