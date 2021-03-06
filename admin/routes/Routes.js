
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, matchPath } from 'react-router-dom';

import * as RouteMap from './static';
import { connect } from 'react-redux';

import ConnectedAppContainer from '../containers/AppContainer';
// console.log('WHAT IS MATCH??', matchPath);
const PrivateRoute = ({ component: CurrentComponent, ...rest }) => {
  const { path, authorized } = { ...rest };
  return (
    <Route
      path={path}
      render={(props) => (
        true ? (
          <div>
            <CurrentComponent {...props} />
          </div>
        ) : (
          <Redirect to={{
            pathname: '/admin/login',
          }}
          />
        )
      )}
    />
  );
};

const PublicRoute = ({ component: CurrentComponent, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <div>
        <CurrentComponent {...props} />
      </div>
    )}
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsAuthorized: false,
      userNotFound: true,
      loadingUser: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { isAuthenticated, loadingUser } = nextProps.auth;
    if (isAuthenticated !== this.props.auth.isAuthenticated) {
      this.setState({ userIsAuthorized: nextProps.auth.isAuthenticated, userNotFound: false });
    } else if (!nextProps.auth.isAuthenticated && !loadingUser) {
      this.setState({ userNotFound: true, loadingUser: false });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const { userIsAuthorized, userNotFound, loadingUser } = this.state;
    // console.log('RENDERING ROUTES@!!@!@!', this.props);
    return (
      <ConnectedAppContainer>
        <Switch>
          <PrivateRoute exact path="/admin" component={RouteMap.Dashboard} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/admin/shop" component={RouteMap.Shop} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/admin/shop/products" component={RouteMap.Products} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/admin/shop/product/:product_name/edit" component={RouteMap.EditProduct} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/admin/customers" component={RouteMap.CustomerContainer} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/admin/customers/:customer_id/edit" component={RouteMap.EditCustomer} authorized={userIsAuthorized} />

          {/* <PrivateRoute exact path="/leaderboard" component={RouteMap.Leaderboard} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/incentives" component={RouteMap.Spiff} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/incentives/submit" component={RouteMap.SpiffSubmit} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/news" component={RouteMap.Newsboard} authorized={userIsAuthorized} />
          <PrivateRoute exact path="/products" component={RouteMap.PriceList} authorized={userIsAuthorized} /> */}
          <PublicRoute exact path="/admin/login" component={RouteMap.Login} />
          <PublicRoute exact path="/admin/signup" component={RouteMap.Signup} />
        </Switch>
      </ConnectedAppContainer>
    );
  }
}

Routes.propTypes = {
  auth: PropTypes.object.isRequired,
};
export default connect(
  (state) => ({
    auth: state.auth,
  }), null)(Routes);
