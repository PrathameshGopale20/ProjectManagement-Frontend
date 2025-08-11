import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../Component/login/login';
import { AuthLayoutRoutingModule } from './auth-layout-routing-module';




@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthLayoutModule { }
