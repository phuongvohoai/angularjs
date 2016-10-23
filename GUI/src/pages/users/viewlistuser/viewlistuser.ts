import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-viewlistuser',
  templateUrl: 'viewlistuser.html'
})
export class ViewListUserPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Viewlistuser Page');
  }

}
