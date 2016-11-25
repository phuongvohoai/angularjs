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
        let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.postService.load()
            .then(data => {
                this.posts = data;
                loader.dismiss();
            })
            .catch(error => {
                console.log('error');
            });
    }
}

