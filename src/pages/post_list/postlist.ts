import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PostDetailPage } from '../post_detail/postdetail';

@Component({
    selector: 'page-postlist',
    templateUrl: 'postlist.html'
})

export class PostListPage {

    // What's means?
    title;
    category;
    type;
    jobposition;
    describe;
    costtype;
    applydeadline;

    constructor(public navCtrl: NavController, public params:NavParams) { 
        this.navCtrl = navCtrl;
        this.params = params;
    }

    addPost(){
        this.navCtrl.push(PostDetailPage,{ titleParam: this.title,
                                              categoryParam: this.category,
                                              typeParam: this.type,
                                              jobpositionParam: this.jobposition,
                                              describeParam: this.describe,
                                              costtypeParam: this.costtype,
                                              applydeadlineParam: this.applydeadline});
    }
    
}

