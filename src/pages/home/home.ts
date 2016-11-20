import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UserListPage } from '../user_list/userlist';
import { PostDetailPage } from '../post_detail/postdetail';
import { PostListPage } from '../post_list/postlist';
import { PostProvider } from '../../providers/post.provider';
import { Post } from '../../models/post.model';

import { NotificationPage } from '../notification/notification';
import { TabsPage } from '../tabs/tabs';
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

    post: Post;
    posts: any[];

    public titleParam: any;
    public describeParam: any;
    tabLst: Tab[] = [];

    constructor(public navCtrl: NavController, public menuCtrl: MenuController, private postProvider: PostProvider) {
        //this.titleParams = [this.postProvider.ViewPost(0).title, this.postProvider.ViewPost(1).title];
        //this.describeParam = this.postProvider.ViewPost(0).describe;

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
