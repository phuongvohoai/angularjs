import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Addpost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addpost',
  templateUrl: 'addpost.html'
})
export class Addpost {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Addpost Page');
  }

}
