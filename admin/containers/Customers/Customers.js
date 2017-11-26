import React, { Component } from 'react';
import { CustomerTable } from '../../components/Tables';
import PropTypes from 'prop-types';

class Customers extends Component {
  render() {
    const { customers } = this.props;
    console.log('What is customers here?', customers);
    return (
      <div>
        <CustomerTable
          customers={customers}
        />
      </div>
    );
  }
}
Customers.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object),
};
Customers.defaultProps = {
  customers: [],
};
export default Customers;
