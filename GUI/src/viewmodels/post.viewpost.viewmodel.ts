import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-viewpost',
    templateUrl: '../pages/post/viewpost/viewpost.html'
})

export class ViewPostViewModel {

    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello view post page');
    }

}
