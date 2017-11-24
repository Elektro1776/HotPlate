
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkUserToken, userTokenNotFound } from '../actions/authenticateUserActions';
import ColumnLeft from '../components/ColumnLeft';
import grid from './styles/gridLayouts.scss';

class AppContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  componentDidMount() {
    this.props.loadUserFromToken();
  }
  render() {
    return (
      <div className={`${grid.wrapper}`}>
        <ColumnLeft />
        <div className={`${grid.main_content}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
AppContainer.propTypes = {
  // loadUserFromToken: PropTypes.func.isRequired,
};

const ConnectedAppContainer = connect(null, (dispatch) => (
  {
    loadUserFromToken: () => {
      const token = localStorage.getItem('jwt_token');
      const access_token = localStorage.getItem('access_token');
      if (!token || token === '') {
        return dispatch(userTokenNotFound());
      }
      dispatch(checkUserToken({ token, access_token }));
    },
  }))(AppContainer);
export default ConnectedAppContainer;
