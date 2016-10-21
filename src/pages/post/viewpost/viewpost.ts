import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-viewpost',
  templateUrl: 'viewpost.html'
})

export class ViewPostPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Viewpost Page');
  }

}
