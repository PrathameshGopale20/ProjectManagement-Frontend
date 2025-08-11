import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassword } from '../../Component/forgot-password/forgot-password';
import { Login } from '../../Component/login/login';



const routes: Routes = [
    {
        path:'',
        component:Login
    },
    {
        path:'forgot',
        component:ForgotPassword
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }
