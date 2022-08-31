import { Component, OnInit } from '@angular/core';
import { Store } from './resources/core/app.types';
import { AppServices } from './resources/core/app.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(protected _appServices: AppServices) {}

  public stores: Store[] = [];

  public ngOnit() {
    this._appServices.retrieveStores().subscribe((response: Store[]) => {
      this.stores = response;
      console.log(this.stores)
    })
  }
}
