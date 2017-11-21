import {
  FETCHING_PARTS,
  SUCCESS_RECEIVED_PARTS,
  FAILURE_RECEIVED_PARTS,
} from '../actions/partsActions';

const initialState = {
  parts: [],
  loadingParts: false,
  partsLoaded: false,
};

export default function partList(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_RECEIVED_PARTS:
      return Object.assign({}, state, { partsLoaded: true, loadingParts: false, parts: action.payload });
    case FETCHING_PARTS:
      return Object.assign({}, state, { loadingParts: true });
    case FAILURE_RECEIVED_PARTS:
      return Object.assign({}, state, { loadingParts: false, partsLoaded: false, error: true });
    default:
      return state;
  }
}
