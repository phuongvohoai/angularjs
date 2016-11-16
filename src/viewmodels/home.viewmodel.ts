import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';
import { AddPostViewModel } from '../viewmodels/post.addpost.viewmodel';
import { NotificationViewModel } from '../viewmodels/notification.viewmodel';
import { ViewPostViewModel } from '../viewmodels/post.viewpost.viewmodel';
import { PostProvider } from '../providers/post.provider';

@Component({
    selector: 'page-home',
    templateUrl: '../pages/home/home.html',
    providers: [PostProvider]
})
export class HomeViewModel {

    viewListUserPage = ViewListUserViewModel;
    addPostPage = AddPostViewModel;
    viewPostPage = ViewPostViewModel;
    notificationPage = NotificationViewModel;

    public titleParam: any;
    public describeParam: any;

    constructor(public navCtrl: NavController, public menuCtrl: MenuController, private postProvider: PostProvider) {
        this.titleParam = this.postProvider.ViewPost().title;
        this.describeParam = this.postProvider.ViewPost().describe;
    }

    openMenu() {
        this.menuCtrl.open();
    }
    
}
