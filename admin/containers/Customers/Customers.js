import React, { Component } from 'react';
import { CustomerTable } from '../../components/Tables';
console.log('WHAT IS CUSTOMER TABLE', CustomerTable);
class Customers extends Component {
  render() {
    const { customers } = this.props;
    console.log('CUSTOMERS', customers);
    return (
      <div>
        <CustomerTable
          customers={customers}
        />
      </div>
    );
  }
}

export default Customers;
