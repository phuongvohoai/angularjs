import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { PostProvider } from '../providers/post.provider';
import { Post } from '../models/post.model';

@Component({
    selector: 'page-viewpost',
    templateUrl: '../pages/post/viewpost/viewpost.html',
    providers: [PostProvider]
})

export class ViewPostViewModel {

    post: Post;
    

    constructor(public navCtrl: NavController, private fb: FormBuilder, public params:NavParams, private postProvider: PostProvider) { 

        this.post = this.postProvider.ViewPost(0);
    }
}
