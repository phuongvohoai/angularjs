import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})

export class ForgotPasswordPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Forgotpassword Page');
  }

}
