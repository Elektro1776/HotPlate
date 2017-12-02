import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import Customers from './Customers';
// Actions
import { loadCustomers } from '../../actions/customerActions';

class CustomerContainer extends Component {
  static fetchData = ({ store }) => store.dispatch(loadCustomers());

  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }
  componentWillMount() {
  }
  componentDidMount() {
    // this.props.loadCustomers();
    console.log('WHAT IS OUR CUSTOMER STATE?', this.props.customers);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.customers.length !== this.props.customers.length) {
      console.log('WHAT ARE THE NEXT PROPS?', nextProps);
      this.setState({ customers: nextProps.customers });
    }
  }
  render() {
    const { location: { pathname } } = this.props;
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
CustomerContainer.propTypes = {
  location: PropTypes.object.isRequired,
  customers: PropTypes.array,
  loadCustomers: PropTypes.func.isRequired,
};
CustomerContainer.defaultProps = {
  customers: [],
};
export default connect((state) => ({
  customers: state.customers.customers,
}), (dispatch) => ({
  loadCustomers: () => dispatch(loadCustomers()),
}))(CustomerContainer);
