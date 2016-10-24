import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-viewuser',
  templateUrl: 'viewuser.html'
})
export class ViewUserPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello viewuser Page');
  }

}
