import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Editprofile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-useredit',
  templateUrl: 'useredit.html'
})
export class UserEdit {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello useredit Page');
  }

}
