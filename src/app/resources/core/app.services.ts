import { AppTransforms } from './app.transforms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from './app.types';
import { StoreDTO } from './app.dtos';

@Injectable({
  providedIn: 'root'
})
export class AppServices {
  /* -- CONSTRUCTOR -- */

  constructor(protected _appTransforms: AppTransforms, protected _httpClient: HttpClient) { }

  /* -- PROPERTIES -- */

  /* -- GETTERS & SETTERS -- */

  /* -- PUBLIC METHODS -- */

  public retrieveStores(): Observable<Store[]> {
    const url = `api/data-call`;

    return this._httpClient.get<StoreDTO[]>(url).pipe(
      map((response: StoreDTO[]) => {
        const stores = this._appTransforms.fromStoreDTOs(response)

        return stores;
      })
    );
  }

  /* -- PRIVATE METHODS -- */
}
