import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-addpost',
    templateUrl: '../pages/post/addpost/addpost.html'
})

export class AddPostViewModel {

    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello add post Page');
    }

}
