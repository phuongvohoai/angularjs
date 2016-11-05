import { Component } from '@angular/core';
import {Platform,  AlertController} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import { SignUpViewModel } from '../viewmodels/user.signup.viewmodel';
import './rxjs-operators';

@Component({
	template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class WAW_Application {
	rootPage = SignUpViewModel;

	constructor(public alertCtrl: AlertController, platform: Platform) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();

		});
	}
}
