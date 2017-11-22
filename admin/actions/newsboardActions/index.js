export const FETCHING_NEWS_BOARD = 'FETCHING_NEWS_BOARD';
export const SUCCESS_RECEIVED_NEWS_BOARD = 'SUCCESS_RECEIVED_NEWS_BOARD';
export const FAILURE_RECEIVED_NEWS_BOARD = 'FAILURE_RECEIVED_NEWS_BOARD';


export const fetchNewsBoardStats = () => (dispatch) => {
  dispatch(fetchingNewsBoard());
  fetch('/api/dealer/news')
    .then((data) => data.json())
    .then((newsboard) => {
      dispatch(receivedNewsBoard(newsboard));
    })
    .catch((err) => {
      dispatch(failedToFetchNewsBoard(err));
    });
};

const fetchingNewsBoard = () => (
  {
    type: FETCHING_NEWS_BOARD,
  }
);

const receivedNewsBoard = (newsboard) => (
  {
    type: SUCCESS_RECEIVED_NEWS_BOARD,
    payload: newsboard,
  }
);

const failedToFetchNewsBoard = (err) => (
  {
    type: FAILURE_RECEIVED_NEWS_BOARD,
    payload: err,
  }
);
