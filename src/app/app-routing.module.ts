import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoresComponent } from './components/stores/stores.component';
import { StoreResolver } from './resources/core/store.resolver';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'stores',
    component: StoresComponent,
    resolve: {
      stores: StoreResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
      enableTracing: false
    })],

})
export class AppRoutingModule { }
