import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-viewpost',
    templateUrl: '../pages/post/viewpost/viewpost.html'
})

export class ViewPostViewModel {

    public titleParam: any;
    public categoryParam: any;
    public typeParam: any;
    public jobpositionParam: any;
    public describeParam: any;
    public costtypeParam: any;
    public applydeadlineParam: any;
    
    

    constructor(public navCtrl: NavController, public params:NavParams) { 
        this.titleParam = params.get("titleParam");
        this.categoryParam = params.get("categoryParam");
        this.typeParam = params.get("typeParam");
        this.jobpositionParam = params.get("jobpositionParam");
        this.describeParam = params.get("describeParam");
        this.costtypeParam = params.get("costtypeParam");
        this.applydeadlineParam = params.get("applydeadlineParam");
    }
}
