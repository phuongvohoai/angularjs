import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Viewprofile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viewprofile',
  templateUrl: 'viewprofile.html'
})
export class Viewprofile {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Viewprofile Page');
  }

}
