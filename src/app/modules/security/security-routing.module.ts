import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserEditionComponent } from './user-edition/user-edition.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "logout",
    component: LogoutComponent
  },

  {
    path: "change-password",
    component: ChangePasswordComponent
  },

  {
    path: "rest-password",
    component: RestPasswordComponent
  },

  {
    path: "user-creation",
    component: UserCreationComponent
  },

  {
    path: "user-edition",
    component: UserEditionComponent
  },

  {
    path: "user-list",
    component: UserListComponent
  },

  {
    path: "remove-user",
    component: RemoveUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
