import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UserListPage } from '../user_list/userlist';
import { PostPage } from '../post/post';
import { PostDetailPage } from '../post_detail/postdetail';
import { PostListPage } from '../post_list/postlist';
import { NotificationPage } from '../notification/notification';
import { Tab } from '../../models/tab.model';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {


    viewListUserPage = UserListPage;
    addPostPage = PostDetailPage;
    viewPostPage = PostDetailPage;
    notificationPage = PostListPage;

    tabLst: Tab[] = [];

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
        this.tabLst.push(new Tab(PostListPage, "Việc tìm người", "ios-albums-outline"));
        this.tabLst.push(new Tab(UserListPage, "Người tìm việc", "ios-people-outline"));
        this.tabLst.push(new Tab(UserListPage, "Việc gần bạn", "ios-navigate-outline"));
    }

    openMenu() {
        this.menuCtrl.open();
    }
    viewAddPost(){
        this.navCtrl.push(PostPage);
    }
    viewPostDetail() {
        this.navCtrl.push(PostDetailPage);
    }
    viewNotification() {
        this.navCtrl.push(NotificationPage);
    }
    ionViewLoaded() {
    }

}
