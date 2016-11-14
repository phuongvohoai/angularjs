import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, MenuController } from 'ionic-angular';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';
import { AddPostViewModel } from '../viewmodels/post.addpost.viewmodel';
import { NotificationViewModel } from '../viewmodels/notification.viewmodel';
import { ViewPostViewModel } from '../viewmodels/post.viewpost.viewmodel';

import { EditUserTabsViewModel } from '../viewmodels/user.edituser.tabs.viewmodel';


@Component({
    selector: 'page-home',
    templateUrl: '../pages/home/home.html'
})
export class HomeViewModel {
    @ViewChild(Nav) nav: Nav;

    viewListUserPage = ViewListUserViewModel;
    addPostPage = AddPostViewModel;
    viewPostPage = ViewPostViewModel;
    notificationPage = NotificationViewModel;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

    }

    openMenu() {
        this.menuCtrl.open();
    }
    
}
