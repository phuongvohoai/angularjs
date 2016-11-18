import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';
import { AddPostViewModel } from '../viewmodels/post.addpost.viewmodel';
import { NotificationViewModel } from '../viewmodels/notification.viewmodel';
import { ViewPostViewModel } from '../viewmodels/post.viewpost.viewmodel';
import { PostProvider } from '../providers/post.provider';
import { Post } from '../models/post.model';

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

    post: Post;
    posts: any[];

    public titleParam: any;
    public describeParam: any;
    

    constructor(public navCtrl: NavController, public menuCtrl: MenuController, private postProvider: PostProvider) {
        //this.titleParams = [this.postProvider.ViewPost(0).title, this.postProvider.ViewPost(1).title];
        //this.describeParam = this.postProvider.ViewPost(0).describe;
        this.posts = [this.postProvider.ViewPost(0), this.postProvider.ViewPost(1), this.postProvider.ViewPost(2)];

    }

    openMenu() {
        this.menuCtrl.open();
    }
    viewPost(){
        this.navCtrl.push(ViewPostViewModel);
    }

}
