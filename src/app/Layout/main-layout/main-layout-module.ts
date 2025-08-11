import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing-module';
import { Sidebar } from './component/sidebar/sidebar';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';

@NgModule({
  declarations: [
    Sidebar,
    Header,
    Footer
  ],
  imports: [CommonModule, MainLayoutRoutingModule],
})
export class MainLayoutModule {}
