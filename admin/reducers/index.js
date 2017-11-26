
/**
  rootReducer
*/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from './homeReducer';
import auth from './auth_reducer';
import signedUp from './signup_reducer';
import login from './login_reducer';
import leaderboard from './leaderboard_reducer';
import newsboard from './newsboard_reducer';
import incentives from './incentives_reducer';
import priceList from './priceList_reducer';
import manuals from './manuals_reducer';
import brochures from './brochures_reducer';
import parts from './parts_reducer';
import customers from './customer_reducer';

export default combineReducers({
  router: routerReducer,
  auth,
  customers,
  home,
  signedUp,
  login,
  leaderboard,
  newsboard,
  incentives,
  priceList,
  manuals,
  brochures,
  parts,
});
