import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})

export class ForgotPasswordPage {

  forgotPasswordForm: any;

  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    this.forgotPasswordForm = fb.group({
            "email":["", Validators.compose([Validators.required,
                                            ValidationService.emailValidator])]
        });
  }

  onSubmit() {
        console.log("model-based form submitted");
        console.log(this.forgotPasswordForm);
    }

}
