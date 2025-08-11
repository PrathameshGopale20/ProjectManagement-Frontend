import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '../../Component/main-layout/main-layout';
import { Dashboard } from '../../Component/dashboard/dashboard';


const routes: Routes = [
  {
    path:'',
    component:Dashboard
  },
  {
    path: 'dash',
    component: Dashboard
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
