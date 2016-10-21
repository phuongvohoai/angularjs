import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../models/user.interface';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})

export class SignUpPage {

    public user : User;

    constructor(public navCtrl: NavController) {
        this.user = {
            username: "phuongvohoai",
            displayName: "phuong vo",
            email: "phuongvohoai@outlook.com",
            password: "phuong123",
            confirmPassword: "phuong123"
        }
    }

}
