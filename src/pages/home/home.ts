import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UserListPage } from '../user_list/userlist';
import { PostDetailPage } from '../post_detail/postdetail';
import { PostListPage } from '../post_list/postlist';
import { PostProvider } from '../../providers/post.provider';
import { NotificationPage } from '../notification/notification';
import { Tab } from '../../models/tab.model';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [PostProvider]
})
export class HomePage {

    viewListUserPage = UserListPage;
    addPostPage = PostDetailPage;
    viewPostPage = PostDetailPage;
    notificationPage = PostListPage;

    tabLst: Tab[] = [];

    constructor(public navCtrl: NavController, public menuCtrl: MenuController, private postProvider: PostProvider) {
        this.tabLst.push(new Tab(PostListPage, "Post List Page"));
        this.tabLst.push(new Tab(UserListPage, "User List Page"));
    }

    openMenu() {
        this.menuCtrl.open();
    }
    viewPostDetail(){
        this.navCtrl.push(PostDetailPage);
    }
    viewNotification(){
        this.navCtrl.push(NotificationPage);
    }
    ionViewLoaded (){
    }

}
