export const FETCH_LEADER_BOARD = 'FETCH_LEADER_BOARD';
export const FETCHING_LEADER_BOARD = 'FETCHING_LEADER_BOARD';
export const SUCCESS_RECEIVED_LEADER_BOARD = 'SUCCESS_RECEIVED_LEADER_BOARD';
export const FAILURE_RECEIVED_LEADER_BOARD = 'FAILURE_RECEIVED_LEADER_BOARD';


export const fetchLeaderBoardStats = () => (dispatch) => {
  dispatch(fetchingLeaderBoard());
  fetch('/api/dealer/leaderboard')
    .then((data) => data.json())
    .then((leaderboard) => {
      dispatch(receivedLeaderBoard(leaderboard));
    })
    .catch((err) => {
      dispatch(failedToFetchLeaderBoard(err));
    });
};

const fetchingLeaderBoard = () => (
  {
    type: FETCHING_LEADER_BOARD,
  }
);

const receivedLeaderBoard = (leaderboard) => (
  {
    type: SUCCESS_RECEIVED_LEADER_BOARD,
    payload: leaderboard,
  }
);

const failedToFetchLeaderBoard = (err) => (
  {
    type: FAILURE_RECEIVED_LEADER_BOARD,
    payload: err,
  }
);
