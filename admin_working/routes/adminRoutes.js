
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import * as RouteMap from './static';
// import AppContainer from '../containers/AppContainer';
import { connect } from 'react-redux';
// import styles from '../containers/AppContainer.css';

//NOTE: WE COULD PROBABLY USE THIS ??? NOT SURE YET
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { Dashboard } = RouteMap;
//   const { path, exact, authorized } = { ...rest };
//   // console.log(' IS THIS FIRNG?', {...rest});
//   return (
//     <Route
//       exact
//       path={path}
//       render={(props) => (
//         authorized ? (
//           <div>
//             <Component {...props} />
//           </div>
//         ) : (
//           <Redirect to={{
//             pathname: '/',
//             state: { from: props.location },
//           }}
//           />
//         )
//       )}
//     />
//   );
// };
const NoMatch = ({ component: Component, ...rest }) => {
  console.log(' WHAT IS THE REST//???', rest);
  return (
    <div>No match sorrry charlie.....</div>
  )
}
const PublicRoute = ({ component: Component, ...rest }) => {
  console.log(' WE GOT IN TO PUBLIC ROUTEEEEE', Component);
  return (
    <Route
      {...rest}
      render={(props) => (
        <div>
          {/* NOTE: WE COULD DROP A SIDE NAVE HERE.... JUST SAYIN */}
          <Component {...props} />
          {/* NOTE: WE CAN ALSO DROP OUR FOOTER HERE :) */}
        </div>
      )}
    />
  );
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
    // const { location } = this.props;
    console.log(' WHAT IS THE LOCATION on Admin routesss?', this.props);
    // const { userIsAuthorized, userNotFound, loadingUser } = this.state;
    // if (userNotFound && loadingUser) {
    //   return (
    //     <AppContainer>
    //       <div className={styles.loadingWrapper}>
    //         <div className={styles.loadingText}>Loading Blast Canon.....</div>
    //         <img className={styles.loadingImage} src="/dist/utile.png" alt="uTile" />
    //       </div>
    //     </AppContainer>
    //   );
    // }
    return (

      <Switch>
        <PublicRoute exact path="/admin" component={RouteMap.Dashboard} />
        <PublicRoute exact path="/admin/login" component={RouteMap.Login} />
        <PublicRoute exact path="/admin/newsboard" component={RouteMap.Newsboard} />
      </Switch>

    );
  }
}


Routes.propTypes = {
  location: PropTypes.object,
  auth: PropTypes.object,
};
export default connect(
  (state) => ({
    auth: state.auth,
  }), null)(Routes);
