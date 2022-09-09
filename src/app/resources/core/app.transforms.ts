import { Injectable } from "@angular/core";

import { StoreDTO } from "./app.dtos";
import { Store } from "./app.types";

@Injectable({
  providedIn: 'root'
})
export class AppTransforms {

  /*-- CONSTRUCTOR --*/


  /*-- PUBLIC METHODS --*/

  public fromStoreDTO(dto: StoreDTO): Store {
    const statuses = {
      1: 'Open',
      2: 'Closed'
    };

    const store = new Store();

    store.storeNumber = dto.id;
    store.name = dto.name;

    // @ts-ignore
    store.status = statuses[dto.status]


    return store;
  }

  public fromStoreDTOs(dtos: StoreDTO[]): Store[] {
    return dtos.map((dto: StoreDTO) => this.fromStoreDTO(dto));
  }
}
