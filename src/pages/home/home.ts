import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UserListPage } from '../user_list/userlist';
import { PostDetailPage } from '../post_detail/postdetail';
import { PostListPage } from '../post_list/postlist';
import { PostProvider } from '../../providers/post.provider';
import { Post } from '../../models/post.model';

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
    

    constructor(public navCtrl: NavController, public menuCtrl: MenuController, private postProvider: PostProvider) {
        //this.titleParams = [this.postProvider.ViewPost(0).title, this.postProvider.ViewPost(1).title];
        //this.describeParam = this.postProvider.ViewPost(0).describe;
        this.posts = [this.postProvider.ViewPost(0), this.postProvider.ViewPost(1), this.postProvider.ViewPost(2)];

    }

    openMenu() {
        this.menuCtrl.open();
    }
    viewPost(){
        this.navCtrl.push(PostDetailPage);
    }

}
