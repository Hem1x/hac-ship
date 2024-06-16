import { IRequest } from '@src/api/myApi/api.types';
import { autorun, makeAutoObservable } from 'mobx';

class ShipStore {
  ships: IRequest[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectShip(data: IRequest[]) {
    this.ships = data;
  }
}

export const shipStore = new ShipStore();

autorun(() => {
  console.log(shipStore.ships);
});
