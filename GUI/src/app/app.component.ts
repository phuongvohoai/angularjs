import { Component ,ViewChild} from '@angular/core';
import { Nav, Platform, AlertController } from "ionic-angular";
import { StatusBar, Splashscreen } from "ionic-native";
import { TranslateService, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { Http } from "@angular/http";
import { LoginViewModel } from '../viewmodels/user.login.viewmodel';
import { EditUserTabsViewModel } from '../viewmodels/user.edituser.tabs.viewmodel';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';
import { HomeViewModel } from '../viewmodels/home.viewmodel';
import { MyPostViewModel } from '../viewmodels/user.mypost.viewmodel';
import { MyExecutedJobViewModel } from '../viewmodels/user.myexecutedjob.viewmodel';
import { AboutViewModel } from '../viewmodels/about.viewmodel';
import './rxjs-operators';
// View Models
import { Constants } from '../constants/constants';
import { SignUpViewModel } from '../viewmodels/user.signup.viewmodel';

@Component({
	template: `<ion-nav [root]="rootPage"></ion-nav>`,
	templateUrl: '../pages/menu/menu.html',
	providers: [
		{
			provide: TranslateLoader,
			useFactory: (http: Http) => new TranslateStaticLoader(http, '../assets/i18n', '.json'),
			deps: [Http]
		},
		TranslateService
	]
})
export class WAW_Application {
	@ViewChild(Nav) nav: Nav;
	rootPage = LoginViewModel;
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
			{ title: 'Edit Profile', icon: 'person', component: EditUserTabsViewModel },
			{ title: 'My post', icon: 'filing', component: MyPostViewModel },
			{ title: 'My executed job', icon: 'checkmark-circle', component: MyExecutedJobViewModel },
			{ title: 'About', icon: 'information-circle', component: AboutViewModel }
		];
	}
	openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
	//if (page.component == EditUserTabsViewModel)
	//	this.nav.setRoot(MyPostViewModel);
	//else
    this.nav.setRoot(page.component);
  }
}
