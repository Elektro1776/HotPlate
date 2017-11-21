import {
  FETCHING_PART,
  FETCHING_MANUAL,
  FETCHING_BROCHURE,
  FETCHING_VIDEO,
  SUCCESS_RECEIVED_PART,
  FAILURE_RECEIVED_PART,
  SUCCESS_RECEIVED_MANUAL,
  FAILURE_RECEIVED_MANUAL,
  SUCCESS_RECEIVED_BROCHURE,
  FAILURE_RECEIVED_BROCHURE,
  SUCCESS_RECEIVED_VIDEO,
  FAILURE_RECEIVED_VIDEO,
} from '../actions/mediaActions';

const initialState = {
  part: {},
  manual: {},
  brochure: {},
  video: {},
  loaded: {
    part: false,
    manual: false,
    brochure: false,
    video: false,
  },
  loading: {
    part: false,
    manual: false,
    brochure: false,
    video: false,
  },
};

export default function incentives(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PART:
      return Object.assign({}, state.loading, { part: true });
    case FETCHING_VIDEO:
      return Object.assign({}, state.loading, { video: true });
    case FETCHING_MANUAL:
      return Object.assign({}, state.loading, { manual: true });
    case FETCHING_BROCHURE:
      return Object.assign({}, state.loading, { brochure: true });
    case SUCCESS_RECEIVED_PART:
      return Object.assign({}, state, { loaded: { part: true }, loading: { part: false }, part: action.payload });
    case FAILURE_RECEIVED_PART:
      return Object.assign({}, state, { loaded: { part: false }, loading: { part: false }, error: true });
    case SUCCESS_RECEIVED_VIDEO:
      return Object.assign({}, state, { loaded: { video: true }, loading: { video: false }, video: action.payload });
    case FAILURE_RECEIVED_VIDEO:
      return Object.assign({}, state, { loaded: { video: false }, loading: { video: false }, error: true });
    case SUCCESS_RECEIVED_MANUAL:
      return Object.assign({}, state, { loaded: { manual: true }, loading: { manual: false }, manual: action.payload });
    case FAILURE_RECEIVED_MANUAL:
      return Object.assign({}, state, { loaded: { manual: false }, loading: { manual: false }, error: true });
    case SUCCESS_RECEIVED_BROCHURE:
      return Object.assign({}, state, { loaded: { brochure: true }, loading: { brochure: false }, brochure: action.payload });
    case FAILURE_RECEIVED_BROCHURE:
      return Object.assign({}, state, { loaded: { brochure: false }, loading: { brochure: false }, error: true });

    default:
      return state;
  }
}
