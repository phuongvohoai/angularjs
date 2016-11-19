import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { PostProvider } from '../../providers/post.provider';
import { Post } from '../../models/post.model';

@Component({
    selector: 'page-postdetail',
    templateUrl: 'postdetail.html',
    providers: [PostProvider]
})

export class PostDetailPage {

    post: Post;
    

    constructor(public navCtrl: NavController, private fb: FormBuilder, public params:NavParams, private postProvider: PostProvider) { 

        this.post = this.postProvider.ViewPost(0);
    }
}
