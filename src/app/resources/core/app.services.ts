import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from './app.types';

@Injectable({
  providedIn: 'root'
})
export class AppServices {
  /* -- CONSTRUCTOR -- */

  constructor(protected _httpClient: HttpClient) {}

  /* -- PROPERTIES -- */

  /* -- GETTERS & SETTERS -- */

  /* -- PUBLIC METHODS -- */

  public retrieveStores(): Observable<Store[]> {
    const url = `api/data-call`;

    return this._httpClient.get<Store[]>(url).pipe(
      map((response: Store[]) => {
        return response;
      })
    );
  }

  /* -- PRIVATE METHODS -- */
}
