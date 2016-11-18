import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { EditUserTab1ViewModel } from '../viewmodels/user.edituser.tab1.viewmodel';
import { EditUserTab2ViewModel } from '../viewmodels/user.edituser.tab2.viewmodel';

@Component({
    selector: 'page-editusertabs',
    templateUrl: '../pages/users/edituser/editusertabs/editusertabs.html'
})
export class EditUserTabsViewModel {

    private tab1Root: any ;
    private tab2Root: any ;

    constructor(public navCtrl: NavController) {  
        this.tab1Root = EditUserTab1ViewModel;
        this.tab2Root = EditUserTab2ViewModel;
    }
}
