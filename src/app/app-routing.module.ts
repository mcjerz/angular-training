import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './components/stores/stores.component';
import { StoreResolver } from './resources/core/store.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'stores',
    component: StoresComponent,
    resolve: {
      stores: StoreResolver
    }
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
