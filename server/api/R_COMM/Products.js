import superAgent from 'superagent';
import config from './config';
import fs from 'fs';

class Products {
  constructor() {
    const { OC } = config;
    this.oc = OC;
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts = () => {
  }
}

const instance = new Products();

export { instance as Products };
