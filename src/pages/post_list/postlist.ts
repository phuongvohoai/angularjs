import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostDetailPage } from '../post_detail/postdetail';

import { PostProvider } from '../../providers/post.provider';
import { Post } from '../../models/post.model';

@Component({
    selector: 'page-postlist',
    templateUrl: 'postlist.html',
    providers: [PostProvider]
})

export class PostListPage {

    post: Post;
    posts: any[];

    constructor(public navCtrl: NavController, private postProvider: PostProvider) { 
        this.posts = [this.postProvider.ViewPost(0), this.postProvider.ViewPost(1), this.postProvider.ViewPost(2)];
    }
    
}

