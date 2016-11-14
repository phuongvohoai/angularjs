import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { ViewPostViewModel } from '../viewmodels/post.viewpost.viewmodel';

@Component({
    selector: 'page-addpost',
    templateUrl: '../pages/post/addpost/addpost.html'
})

export class AddPostViewModel {

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
        this.navCtrl.push(ViewPostViewModel,{ titleParam: this.title,
                                              categoryParam: this.category,
                                              typeParam: this.type,
                                              jobpositionParam: this.jobposition,
                                              describeParam: this.describe,
                                              costtypeParam: this.costtype,
                                              applydeadlineParam: this.applydeadline});
    }
    
}

