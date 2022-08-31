import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { delay, Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private _stores = 'assets/stores.json';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method } = request;

    if(url.endsWith('/data-call') && method === 'GET') {
      request = request.clone({
        url: this._stores
      });
      return next.handle(request).pipe(delay(500));
    }

    return next.handle(request);
  }
}
