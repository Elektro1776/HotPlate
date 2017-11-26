export const LOAD_CUSTOMERS_REQUEST = 'LOAD_CUSTOMERS_REQUEST';
export const LOAD_CUSTOMERS_SUCCESS = 'LOAD_CUSTOMERS_SUCCESS';
export const LOAD_CUSTOMERS_FAILURE = 'LOAD_CUSTOMERS_FAILURE';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export const loadCustomers = () => {
  return {
    types: [LOAD_CUSTOMERS_REQUEST, LOAD_CUSTOMERS_SUCCESS, LOAD_CUSTOMERS_FAILURE],
    // Check the cache (optional):
    shouldCallAPI: (state) => state,
    // Perform the fetching:
    callAPI: () => fetch(`http://localhost:3000/api/customers`),
    // Arguments to inject in begin/end actions
    // payload: { userId }
  };
};
