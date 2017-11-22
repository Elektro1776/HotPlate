import {
  SUBMITTING_INCENTIVE,
  FETCHING_INCENTIVES,
  SUCCESS_RECEIVED_INCENTIVES,
  FAILURE_RECEIVED_INCENTIVES,
  SUCCESS_RECEIVED_CONFIRMATION,
  FAILURE_RECEIVED_CONFIRMATION,
} from '../actions/incentiveActions';

const initialState = {
  incentives: [],
  loadingIncentives: false,
  incentivesLoaded: false,
  submitSuccess: null,
  submitLoading: false,
};

export default function incentives(state = initialState, action) {
  switch (action.type) {
    case SUBMITTING_INCENTIVE:
      return Object.assign({}, state, { submitLoading: true });
    case FETCHING_INCENTIVES:
      return Object.assign({}, state, { incentivesLoaded: false, loadingIncentives: true });
    case SUCCESS_RECEIVED_INCENTIVES:
      return Object.assign({}, state, { incentivesLoaded: true, loadingIncentives: false, incentives: action.payload });
    case FAILURE_RECEIVED_INCENTIVES:
      return Object.assign({}, state, { incentivesLoaded: false, loadingIncentives: false, incentives: action.payload });
    case SUCCESS_RECEIVED_CONFIRMATION:
      return Object.assign({}, state, { submitSuccess: true, confirmation: action.payload });
    case FAILURE_RECEIVED_CONFIRMATION:
      return Object.assign({}, state, { submitSuccess: false, error: true });
    default:
      return state;
  }
}
