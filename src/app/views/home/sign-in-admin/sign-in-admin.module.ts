import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInAdminRoutingModule } from './sign-in-admin-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInAdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SignInAdminModule { }
