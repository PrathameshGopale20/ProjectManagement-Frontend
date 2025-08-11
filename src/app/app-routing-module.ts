import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>
      import('./Layout/auth-layout/auth-layout-module').then(
        (m)=>m.AuthLayoutModule
      )
  },
  {
    path:'home',
    loadChildren:()=>
      import('./Layout/main-layout/main-layout-module').then(
        (m)=>m.MainLayoutModule
      )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
