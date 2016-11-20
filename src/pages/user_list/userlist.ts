import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserProvider } from '../../providers/user.provider';
import { User } from '../../models/user.model';

@Component({
    selector: 'page-viewlistuser',
    templateUrl: 'userlist.html',
    providers: [UserProvider]
})
export class UserListPage {

    user: User;
    users: any[];

    constructor(public navCtrl: NavController, private userProvider: UserProvider) {
        this.users = [this.userProvider.ViewUser(0), this.userProvider.ViewUser(1),
                      this.userProvider.ViewUser(2), this.userProvider.ViewUser(3), this.userProvider.ViewUser(4)]
     }

    ionViewDidLoad() {
        console.log('Hello Viewlistuser Page');
    }

}
