import { Component , ViewChild } from '@angular/core';
import { Nav, Platform,  AlertController } from "ionic-angular";
import { StatusBar, Splashscreen } from "ionic-native";
import { LoginViewModel } from '../viewmodels/user.login.viewmodel';
import { EditUserViewModel } from '../viewmodels/user.edituser.viewmodel';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';
import { HomeViewModel } from '../viewmodels/home.viewmodel';
import './rxjs-operators';

@Component({
	template: `<ion-nav [root]="rootPage"></ion-nav>`,
	templateUrl: '../pages/menu/menu.html'
})
export class WAW_Application {
	@ViewChild(Nav) nav: Nav;
	rootPage = HomeViewModel;

	pages: Array<{title: string, icon: string, component: any}>;

	constructor(public alertCtrl: AlertController, platform: Platform) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();

		});

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Edit Profile', icon: 'person', component: EditUserViewModel },
			{ title: 'View List User', icon: 'search', component: ViewListUserViewModel }
		];
	}

	 openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
