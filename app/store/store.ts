import { makeAutoObservable, runInAction } from 'mobx';
import { ITransport } from './types';
import data from './mock.json';

class Store {
  transports: ITransport[] = [];
  filters: string[] = [];
  filteredTransports: ITransport[] = []

  constructor() {
    makeAutoObservable(this);
  }

  getTransportList = () =>  {
    runInAction(() => {
      this.transports = data.transports as ITransport[];
      this.filteredTransports = [...this.transports];
    })
  }

  setFilterName = (name: string) => {
    const array = [...this.filters];
    const index = array.indexOf(name);

    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(name);
    }

    this.filters = array;
  };

   setFilteredTransports = () => {
    if (!this.filters.length) {
      this.filteredTransports = [...this.transports];
      return;
    };
    const filtered = this.transports.filter((item) => this.filters.includes(item.category));
    this.filteredTransports = filtered;
  }
}

export const store = new Store();