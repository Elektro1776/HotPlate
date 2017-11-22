import {
  FETCHING_MANUALS,
  SUCCESS_RECEIVED_MANUALS,
  FAILURE_RECEIVED_MANUALS,
} from '../actions/productManualActions';

const initialState = {
  manuals: [],
  loadingManuals: false,
  manualsLoaded: false,
};

export default function manualList(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_RECEIVED_MANUALS:
      return Object.assign({}, state, { manualsLoaded: true, loadingManuals: false, manuals: action.payload });
    case FETCHING_MANUALS:
      return Object.assign({}, state, { loadingManuals: true });
    case FAILURE_RECEIVED_MANUALS:
      return Object.assign({}, state, { loadingManuals: false, manualsLoaded: false, error: true });
    default:
      return state;
  }
}
