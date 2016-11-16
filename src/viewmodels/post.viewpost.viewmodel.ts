import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { PostProvider } from '../providers/post.provider';

@Component({
    selector: 'page-viewpost',
    templateUrl: '../pages/post/viewpost/viewpost.html',
    providers: [PostProvider]
})

export class ViewPostViewModel {

    public titleParam: any;
    public categoryParam: any;
    public typeParam: any;
    public jobpositionParam: any;
    public describeParam: any;
    public costtypeParam: any;
    public applydeadlineParam: any;
    
    

    constructor(public navCtrl: NavController, private fb: FormBuilder, public params:NavParams, private postProvider: PostProvider) { 
        /*this.categoryParam = params.get("titleParam");
        this.categoryParam = params.get("categoryParam");
        this.typeParam = params.get("typeParam");
        this.jobpositionParam = params.get("jobpositionParam");
        this.describeParam = params.get("describeParam");
        this.costtypeParam = params.get("costtypeParam");
        this.applydeadlineParam = params.get("applydeadlineParam");*/
        this.titleParam = this.postProvider.ViewPost().title;
        this.categoryParam = this.postProvider.ViewPost().category;
        this.typeParam = this.postProvider.ViewPost().type;
        this.jobpositionParam = this.postProvider.ViewPost().jobPosition;
        this.describeParam = this.postProvider.ViewPost().describe;
        this.costtypeParam = this.postProvider.ViewPost().cost;
        this.applydeadlineParam = this.postProvider.ViewPost().applyDeadline;
    }
}
