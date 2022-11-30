import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { LogoutComponent } from './logout/logout.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserEditionComponent } from './user-edition/user-edition.component';
import { UserListComponent } from './user-list/user-list.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    RestPasswordComponent,
    LogoutComponent,
    UserCreationComponent,
    UserEditionComponent,
    UserListComponent,
    RemoveUserComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
