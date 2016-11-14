import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Category } from '../models/categories.model';
@Component({
    selector: 'page-addpost',
    templateUrl: '../pages/post/addpost/addpost.html'
})

export class AddPostViewModel {

    private categories: Category[];
    constructor(public navCtrl: NavController) { 
        this.sampleData();
    }

    ionViewDidLoad() { }

    sampleData(){
        this.categories.push(new Category("1", "value 1"), new Category("2", "Value2"));        
    }
}
