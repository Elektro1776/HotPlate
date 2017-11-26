import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Customers from './Customers';
// Actions
import { loadCustomers } from '../../actions/customerActions';

class CustomerContainer extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }
  componentWillMount() {
    this.props.loadCustomers();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.customers.length !== this.props.customers.length) {
      this.setState({ customers: nextProps.customers });
    }
  }
  render() {
    const { location: { pathname } } = this.props;
    console.log(' PATH NAME ', pathname);
    return (
      <div>
        CustomerContainer!
        {pathname === '/admin/customers' ? (
          <Customers customers={this.state.customers} />
        ) : null}
      </div>
    );
  }
}

export default connect((state) => ({
  customers: state.customers,
}), (dispatch) => ({
  loadCustomers: () => dispatch(loadCustomers()),
}))(CustomerContainer);
