import {
  FETCHING_BROCHURES,
  SUCCESS_RECEIVED_BROCHURES,
  FAILURE_RECEIVED_BROCHURES,
} from '../actions/brochuresActions';

const initialState = {
  brochures: [],
  loadingBrochures: false,
  brochuresLoaded: false,
};

export default function brochureList(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_RECEIVED_BROCHURES:
      return Object.assign({}, state, { brochuresLoaded: true, loadingBrochures: false, brochures: action.payload });
    case FETCHING_BROCHURES:
      return Object.assign({}, state, { loadingBrochures: true });
    case FAILURE_RECEIVED_BROCHURES:
      return Object.assign({}, state, { loadingBrochures: false, brochuresLoaded: false, error: true });
    default:
      return state;
  }
}
