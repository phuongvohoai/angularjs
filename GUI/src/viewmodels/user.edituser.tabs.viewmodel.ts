import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { EditUserTab1ViewModel } from '../viewmodels/user.edituser.tab1.viewmodel';
import { EditUserTab2ViewModel } from '../viewmodels/user.edituser.tab2.viewmodel';

@Component({
    selector: 'page-editusertabs',
    templateUrl: '../pages/users/edituser/editusertabs/editusertabs.html'
})
export class EditUserTabsViewModel {

    tab1Root: any = EditUserTab1ViewModel;
    tab2Root: any = EditUserTab2ViewModel;

    constructor(public navCtrl: NavController) {  }

}
