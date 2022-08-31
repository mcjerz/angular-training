import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AppServices } from './app.services';
import { Store } from './app.types';

@Injectable()
export class StoreResolver implements Resolve<Store[]> {
  constructor(private _appServices: AppServices) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Store[]> {
    return this._appServices.retrieveStores();
  }
}
