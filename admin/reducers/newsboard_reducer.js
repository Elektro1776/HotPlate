import {
  FETCHING_NEWS_BOARD,
  SUCCESS_RECEIVED_NEWS_BOARD,
  FAILURE_RECEIVED_NEWS_BOARD,
} from '../actions/newsboardActions';

const initialState = {
  news: [],
  loadingNews: false,
  newsLoaded: false,
};

export default function newsboard(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_RECEIVED_NEWS_BOARD:
      return Object.assign({}, state, { loadingNews: false, newsLoaded: true, news: action.payload });
    case FETCHING_NEWS_BOARD:
      return Object.assign({}, state, { loadingNews: true });
    case FAILURE_RECEIVED_NEWS_BOARD:
      return Object.assign({}, state, { loadingNews: false, newsLoaded: false, error: true });
    default:
      return state;
  }
}
