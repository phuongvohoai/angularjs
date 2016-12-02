import { HomePage } from './../pages/home/home';
import { Component ,ViewChild} from '@angular/core';
import { Nav, Platform, AlertController } from "ionic-angular";
import { StatusBar, Splashscreen } from "ionic-native";
import { TranslateService, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { Http } from "@angular/http";
import './rxjs-operators';
// View Models
import { Constants } from '../constants/constants';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { AboutPage } from '../pages/about/about';

@Component({
	template: `<ion-nav [root]="rootPage"></ion-nav>`,
	templateUrl: '../pages/menu/menu.html',
	providers: [
		{
			provide: TranslateLoader,
			useFactory: translateStaticLoaderFactory,
			deps: [Http]
		},
		TranslateService
	]
})

export class WAW_Application {
	@ViewChild(Nav) nav: Nav;
	rootPage = LoginPage;
	pages: Array<{title: string, icon: string, component: any}>;

	constructor(private alertCtrl: AlertController, private platform: Platform, private translate: TranslateService) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();

			// Set default language for app
			translate.setDefaultLang(Constants.LANGUAGE_VI);
			translate.use(Constants.LANGUAGE_VI);
		});
		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Edit Profile', icon: 'person', component: UserPage },
			{ title: 'My post', icon: 'filing', component: AboutPage },
			{ title: 'My executed job', icon: 'checkmark-circle', component: AboutPage },
			{ title: 'About', icon: 'information-circle', component: AboutPage }
		];		
	}
	openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

export function translateStaticLoaderFactory(http: Http) {
  return new TranslateStaticLoader(http, '../assets/i18n', '.json');
}
