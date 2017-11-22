import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductItem } from '../../components/ProductItem';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    return (
      <div className="products_container">
        Howdy from products
        <Link to="/admin/shop/product/kazzoo/edit">Kazzo</Link>
      </div>
    );
  }
}
Products.propTypes = {

}
export default Products;
