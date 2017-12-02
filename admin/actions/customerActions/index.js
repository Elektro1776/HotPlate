export const LOAD_CUSTOMERS_REQUEST = 'LOAD_CUSTOMERS_REQUEST';
export const LOAD_CUSTOMERS_SUCCESS = 'LOAD_CUSTOMERS_SUCCESS';
export const LOAD_CUSTOMERS_FAILURE = 'LOAD_CUSTOMERS_FAILURE';
// require('es6-promise').polyfill();
// require('isomorphic-fetch');
import superagent from 'superagent';

export const loadCustomers = () => {
  // console.log('DO WE HAVE GLOBAL?', global);
  let api;
  if (global) {
    api = `http://localhost:8080/api/customers`;
  } else {
    api = `/api/customers`;
  }
  // console.log('DO WE HAVE WINDOW OR GLOBAL?', window);
  return {
    types: [LOAD_CUSTOMERS_REQUEST, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE],
    // Check the cache (optional):
    shouldCallAPI: (state) => state,
    // Perform the fetching:
    callAPI: () => superagent('GET', api),
    // Arguments to inject in begin/end actions
    // payload: { userId }
  };
};
