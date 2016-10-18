import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Viewpost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viewpost',
  templateUrl: 'viewpost.html'
})
export class Viewpost {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Viewpost Page');
  }

}
