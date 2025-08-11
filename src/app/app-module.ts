import { NgModule, provideZonelessChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { FormsModule } from '@angular/forms';

// Component Imports
import { Login } from './Component/login/login';
import { ForgotPassword } from './Component/forgot-password/forgot-password';
import { MainLayout } from './Component/main-layout/main-layout';

// NG-ZORRO Module Imports
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';
import { Dashboard } from './Component/dashboard/dashboard';
import { NzButtonModule } from 'ng-zorro-antd/button';


registerLocaleData(en);

@NgModule({
  declarations: [
    App,
    // Login,
    ForgotPassword,
    MainLayout,Dashboard,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,  // Don't repeat this
    NzInputModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
     RouterModule,
     NzButtonModule
  ],
  providers: [
    
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideNzI18n(en_US),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule {}
