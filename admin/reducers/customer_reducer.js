import { LOAD_CUSTOMERS_REQUEST, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE } from '../actions/customerActions';
import createReducer from './reducerFactory';
console.log('WE GOT A STRINGGGGG', LOAD_CUSTOMERS_REQUEST);
export default createReducer([], {
  [LOAD_CUSTOMERS_REQUEST](state, action) {
    // console.info('ACTIONSSS', action);
    return [...state];
  },
  [LOAD_CUSTOMERS_SUCCESS](state, action) {
    console.info('ACTIONSSS', state, action.response);
    return [...state, action.response];
  },
  [LOAD_CUSTOMERS_FAILURE](state, action) {
    // console.info('ACTIONSSS', action);
    return [...state];
  },
});
