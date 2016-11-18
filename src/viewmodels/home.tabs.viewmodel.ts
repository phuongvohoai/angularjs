import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeViewModel } from '../viewmodels/home.viewmodel';
import { ViewListUserViewModel } from '../viewmodels/user.viewlistuser.viewmodel';

@Component({
    selector: 'page-hometabs',
    templateUrl: '../pages/home/hometabs/hometabs.html'
})
export class HomeTabsViewModel {

    private tab1Root: any ;
    private tab2Root: any ;

    constructor(public navCtrl: NavController) {  
        this.tab1Root = HomeViewModel;
        this.tab2Root = ViewListUserViewModel;
    }

}
