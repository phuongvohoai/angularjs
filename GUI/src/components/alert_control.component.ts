import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

export class AlertControl {
	
	constructor(private navCtrl: NavController, 	private alertCtrl: AlertController){ }

	public alertInfo(title: string, message: string) {
		let alert = this.alertCtrl.create({
            title: title,
			message: message,
			cssClass: "custom-alert",
            buttons: [{
                text: 'OK',
				cssClass: "btn-alert",
                handler: () => {
                    // user has clicked the alert button begin the alert's dismiss transition
                    alert.dismiss();
                    return false;
                }
            }]
        });
        alert.present();
	}
}