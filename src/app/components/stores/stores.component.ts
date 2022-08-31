import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppServices } from 'src/app/resources/core/app.services';
import { Store } from 'src/app/resources/core/app.types';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  /* -- CONSTRUCTOR -- */

  constructor(protected _activatedRoute: ActivatedRoute, protected _appServices: AppServices) {}

/* -- PROPERTIES -- */
  public stores: Store[] = [];

/* -- PUBLIC METHODS -- */


  public ngOnInit() {
    this._activatedRoute.data.subscribe(({ stores }) => {
      this.stores = stores;
    });
  }

  public onStoreSelected(selectedStore: Store): void {
    const store = this.stores.find((store: Store) => store.storeNumber === selectedStore.storeNumber);
    const filteredStores = this.stores.map((store: Store) => store.storeNumber !== 1000);

    console.log(store)
    console.log(filteredStores)
    console.log(this.stores)
  }
}
