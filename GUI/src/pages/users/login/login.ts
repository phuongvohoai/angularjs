import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

    loginForm: any;

    forgotPasswordPage = ForgotPasswordPage;
    signUpPage = SignUpPage;
    
    constructor(public navCtrl: NavController, private fb: FormBuilder) {
      this.loginForm = fb.group({
            "username":["", Validators.compose([Validators.required])],
            "password":["", Validators.compose([Validators.required])]
        });
    }
    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.loginForm);
    }
}
