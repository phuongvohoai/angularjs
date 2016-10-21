import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Editprofile } from '../pages/profile/editprofile/editprofile';
import { Viewprofile } from '../pages/profile/viewprofile/viewprofile';
import { Addpost } from '../pages/post/addpost/addpost';
import { Viewpost } from '../pages/post/viewpost/viewpost';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Register,
    Editprofile,
    Viewprofile,
    Addpost,
    Viewpost
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Register,
    Editprofile,
    Viewprofile,
    Addpost,
    Viewpost
  ],
  providers: []
})
export class AppModule {}
