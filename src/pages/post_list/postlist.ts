import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';

@Component({
    selector: 'page-postlist',
    templateUrl: 'postlist.html',
    providers: [PostService]
})

export class PostListPage {

    posts: any[];

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private postService: PostService) {
        this.loadPost();
    }

    loadPost() {
        this.postService.load()
            .then(data => {
                this.posts = data;
            });
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }
}

