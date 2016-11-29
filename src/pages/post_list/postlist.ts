import { TranslateService } from 'ng2-translate';
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

    constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private postService: PostService, private translateService: TranslateService) {
        this.loadPost();
    }

    loadPost() {
        this.translateService.get('Title.Loading').subscribe((res: string) => {
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

