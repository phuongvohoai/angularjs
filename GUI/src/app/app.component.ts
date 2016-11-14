import { Component } from '@angular/core';
import { Platform, AlertController } from "ionic-angular";
import { StatusBar, Splashscreen } from "ionic-native";
import { TranslateService, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { Http } from "@angular/http";
import './rxjs-operators';
// View Models
import { Constants } from '../constants/constants';
import { SignUpViewModel } from '../viewmodels/user.signup.viewmodel';
import { AddPostViewModel } from '../viewmodels/post.addpost.viewmodel';

@Component({
	template: `<ion-nav [root]="rootPage"></ion-nav>`,
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
	rootPage = AddPostViewModel;

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
	}
}
