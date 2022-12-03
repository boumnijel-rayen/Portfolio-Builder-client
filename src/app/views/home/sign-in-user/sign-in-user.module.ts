import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInUserRoutingModule } from './sign-in-user-routing.module';
import { SignInUserComponent } from './sign-in-user/sign-in-user.component';


@NgModule({
  declarations: [
    SignInUserComponent
  ],
  imports: [
    CommonModule,
    SignInUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignInUserModule { }
