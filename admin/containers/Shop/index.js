import React, { Component } from 'react';
import Products from './Products';

class Shop extends Component {
  render() {
    return (
      <div className="shop_container">
        <p>Howdy from the shop</p>
        <Products />
      </div>
    );
  }
}

export default Shop;
