import { IRequest } from '@src/api/myApi/api.types';
import { autorun, makeAutoObservable } from 'mobx';

class CmpMapStore {
  selectedShip: IRequest | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectShip(data: IRequest) {
    this.selectedShip = data;
  }

  clearShip() {
    this.selectedShip = null;
  }
}

export const cmpMapStore = new CmpMapStore();

autorun(() => {
  console.log(cmpMapStore.selectedShip);
});
