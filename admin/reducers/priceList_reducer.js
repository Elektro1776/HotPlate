import {
  FETCHING_PRICE_LIST,
  SUCCESS_RECEIVED_PRICE_LIST,
  FAILURE_RECEIVED_PRICE_LIST,
} from '../actions/priceListActions';

const initialState = {
  prices: [],
  loadingPrices: false,
  pricesLoaded: false,
};

export default function priceList(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_RECEIVED_PRICE_LIST:
      return Object.assign({}, state, { pricesLoaded: true, loadingPrices: false, prices: action.payload });
    case FETCHING_PRICE_LIST:
      return Object.assign({}, state, { loadingPrices: true });
    case FAILURE_RECEIVED_PRICE_LIST:
      return Object.assign({}, state, { loadingPrices: false, pricesLoaded: false, error: true });
    default:
      return state;
  }
}
