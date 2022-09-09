import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";

import { AppServices } from 'src/app/resources/core/app.services';
import { Store } from 'src/app/resources/core/app.types';



@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  /* -- CONSTRUCTOR -- */

  constructor(protected _activatedRoute: ActivatedRoute, protected _appServices: AppServices) { }

  /* -- PROPERTIES -- */

  public form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    status: new FormControl(null)
  });

  public showLastNameControl = false;
  public stores: Store[] = [];

  /* -- PUBLIC METHODS -- */


  public ngOnInit() {
    this._activatedRoute.data.subscribe(({ stores }) => {
      this.stores = stores;
    });

    this.form.get("name")?.valueChanges?.subscribe((value) => this._handleNameChange(value));
  }

  public onStoreSelected(selectedStore: Store): void {
    const store = this.stores.find((store: Store) => store.storeNumber === selectedStore.storeNumber);
    const filteredStores = this.stores.map((store: Store) => store.storeNumber !== 1000);

    console.log(store)
    console.log(filteredStores)
    console.log(this.stores)
  }

  public onSubmit(): void {
    const statuses = {
      1: 'Open',
      2: 'Closed'
    }

    // @ts-ignore
    const status = statuses[this.form.value.status];

    const store: Store = {
      name: this.form.value.name,
      storeNumber: this.form.value.id,
      status
    };
    this.stores.push(store);
    console.log(this.form.value)
  }

  private _handleNameChange(value: string): void {
    if (this.form.value.name != null) {
      this.form.addControl('lastName', new FormControl());
      this.showLastNameControl = true;
    } else {
      this.showLastNameControl = false;
    }


    // if (value === 'Name') {
    //   this.form.addControl('lastName', new FormControl());
    //   this.showLastNameControl = true;
    // } else {
    //   this.showLastNameControl = false;
    // }
  }
}
