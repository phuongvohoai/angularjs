import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { SignUpPage } from '../signup/signup';
import { UserProvider } from '../../providers/user.provider';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { PostListPage } from '../post_list/postlist';
import { Tab } from '../../models/tab.model';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [UserProvider]
})

export class LoginPage {

    loginForm: any;
    forgotPasswordPage = ForgotPasswordPage;
    signUpPage = SignUpPage;


    /**
     * Creates an instance of LoginViewModel.
     * 
     * @param {NavController} navCtrl The nav controller
     * @param {FormBuilder} fb The form builder
     * @param {UserProvider} userProvider The user provider
     * 
     * @memberOf LoginViewModel
     */
    constructor(public navCtrl: NavController, private fb: FormBuilder, private userProvider: UserProvider) {
        this.loginForm = fb.group({
            "username": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])]
        });
    }


    /**
     *  Implement event click button Login
     * 
     * @returns
     * 
     * @memberOf LoginViewModel
     */
    onSubmit() {
        if (this.loginForm.controls.username.value != null && this.loginForm.controls.password.value != null) {
            console.log(this.loginForm.controls.username.value);
            console.log(this.loginForm.controls.password.value);
            // Set list tabs
            let tabLst: Tab[] = [];
            tabLst.push(new Tab(HomePage, "Home Page"));
            tabLst.push(new Tab(PostListPage, "Post List Page"));

            if (this.userProvider.Login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)) {
                alert("Login successfully.");
                this.navCtrl.push(TabsPage, {tabLst});
            }
            else {
                alert("Login failed.");
            }
        }
        else {
            alert("Username or password is incorrect.");
        }
    }
}
