import { TranslateService } from 'ng2-translate';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { PostDetailPage } from '../post_detail/postdetail';

@Component({
    selector: 'page-postlist',
    templateUrl: 'postlist.html',
    providers: [PostService]
})

export class PostListPage {

    posts: any[];
    postDetail = PostDetailPage;

    constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private postService: PostService, private translateService: TranslateService) {
        this.loadPost();
    }

    loadPost() {
        this.translateService.get('Message.Loading').subscribe((res: string) => {
            console.log(res);
            let loader = this.loadingCtrl.create({
                content: res
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
        });

    }
}

