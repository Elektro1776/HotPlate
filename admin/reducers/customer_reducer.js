import { LOAD_CUSTOMERS_REQUEST, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE } from '../actions/customerActions';
import createReducer from './reducerFactory';

const initalState = {
  customers: [],
  requestingCustomers: false,
  receivedCustomers: false,
}
export default createReducer(initalState, {
  [LOAD_CUSTOMERS_REQUEST](state, action) {
    // console.info('ACTIONSSS', action);
    return Object.assign({}, state, { requestingCustomers: true });
  },
  [LOAD_CUSTOMERS_SUCCESS](state, action) {
    return Object.assign({}, state, {
      customers: state.customers.concat(action.response),
    });
  },
  [LOAD_CUSTOMERS_FAILURE](state, action) {
    // console.info('ACTIONSSS', action);
    return [...state];
  },
});
