import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

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
    IonicModule.forRoot(MyApp)
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
