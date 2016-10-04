import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

import { LoginComponent } from "./components/account/login/login.component";
import { RegisterComponent } from "./components/account/register/register.component";
import { ForgotpasswordComponent } from "./components/account/forgotpassword/forgotpassword.component";
import { ChangepasswordComponent } from './components/account/changepassword/changepassword.component';
import { EditprofileComponent } from './components/account/editprofile/editprofile.component';

import { PostjobComponent } from './components/postjob/postjob.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "forgotpassword", component: ForgotpasswordComponent},
  {path: "changepassword", component: ChangepasswordComponent},
  {path: "editprofile", component: EditprofileComponent},
  {path: "postjob", component: PostjobComponent}
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
