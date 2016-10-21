import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../models/user.interface';

@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})

export class ForgotPasswordPage {

  public user: User;

  constructor(public navCtrl: NavController) {
    this.user = {
            username: "",
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
  }

  ionViewDidLoad() {
    console.log('Hello Forgotpassword Page');
  }

}
