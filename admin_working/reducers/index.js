import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dashboard from './dashboardReducer';

export default combineReducers({
  dashboard,
  router: routerReducer,
})
