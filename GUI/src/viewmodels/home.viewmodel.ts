import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';
import { AddPostViewModel } from '../viewmodels/post.addpost.viewmodel';
import { MenuController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: '../pages/home/home.html'
})
export class HomeViewModel {

    viewListUserPage = ViewListUserViewModel;
    addPostPage = AddPostViewModel;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

    openMenu() {
        this.menuCtrl.open();
    }
}
