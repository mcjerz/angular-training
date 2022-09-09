import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from 'src/app/resources/core/app.types';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  @Input() public store?: Store;

  @Output() public storeSelected = new EventEmitter<Store>();

  ngOnInit(): void {
  }

  public onStoreSelected() { }
}
