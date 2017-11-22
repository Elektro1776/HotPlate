import {
  FETCHING_LEADER_BOARD,
  SUCCESS_RECEIVED_LEADER_BOARD,
  FAILURE_RECEIVED_LEADER_BOARD,
} from '../actions/leaderBoardActions';

const initialState = {
  leaders: [],
  loadingLeaders: false,
  leadersLoaded: false,
};

export default function leaderboard(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_RECEIVED_LEADER_BOARD:
      return Object.assign({}, state, { leadersLoaded: true, loadingLeaders: false, leaders: action.payload });
    case FETCHING_LEADER_BOARD:
      return Object.assign({}, state, { loadingLeaders: true });
    case FAILURE_RECEIVED_LEADER_BOARD:
      return Object.assign({}, state, { loadingLeaders: false, leadersLoaded: false, error: true });
    default:
      return state;
  }
}
