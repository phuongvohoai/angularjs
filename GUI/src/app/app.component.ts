import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SignUpViewModel } from '../viewmodels/user.signup.viewmodel';
import './rxjs-operators';



@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class WAW_Application {
    rootPage = SignUpViewModel;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
