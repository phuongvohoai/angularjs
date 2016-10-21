import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Editprofile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  //moduleId: module.id,
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})

export class Editprofile{

  public editprofileFrom:any;

  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    console.log('Hello Editprofile Page');
  }
}
