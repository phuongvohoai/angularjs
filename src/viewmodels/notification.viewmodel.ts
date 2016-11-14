import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-notification',
    templateUrl: '../pages/notification/notification.html'
})
export class NotificationViewModel {

    constructor(public navCtrl: NavController) {  }

}
