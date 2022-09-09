import { NgModule } from '@angular/core';

import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component'
import { StoreComponent } from './components/shared/store/store.component';
import { StoresComponent } from './components/stores/stores.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppInterceptor } from './resources/core/http-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreResolver } from './resources/core/store.resolver';

import { en_US } from 'ng-zorro-antd/i18n';
import { NZ_I18N } from 'ng-zorro-antd/i18n';

import { NzButtonModule } from "ng-zorro-antd/button"
import { NzFormModule } from "ng-zorro-antd/form"
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from "ng-zorro-antd/layout"
import { NzMenuModule } from "ng-zorro-antd/menu";



registerLocaleData(en);

const components = [
  AppComponent,
  HomeComponent,
  StoreComponent,
  StoresComponent
]

const modules = [
  AppRoutingModule,
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule
]

const ngZorroModules = [
  NzButtonModule,
  NzFormModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule
]

@NgModule({
  declarations: [
    ...components,
    LoginComponent
  ],
  imports: [
    ...modules,
    ...ngZorroModules
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  },
  {
    provide: NZ_I18N, useValue: en_US
  },
    StoreResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
