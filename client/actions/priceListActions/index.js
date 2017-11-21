export const FETCH_PRICE_LIST = 'FETCH_PRICE_LIST';
export const FETCHING_PRICE_LIST = 'FETCHING_PRICE_LIST';
export const SUCCESS_RECEIVED_PRICE_LIST = 'SUCCESS_RECEIVED_PRICE_LIST';
export const FAILURE_RECEIVED_PRICE_LIST = 'FAILURE_RECEIVED_PRICE_LIST';


export const fetchPriceList = () => (dispatch) => {
  dispatch(fetchingPriceList());
  fetch('/api/dealer/price_list')
    .then((data) => data.json())
    .then((price_list) => {
      dispatch(receivedPriceList(price_list));
    })
    .catch((err) => {
      dispatch(failedToFetchPriceList(err));
    });
};

const fetchingPriceList = () => (
  {
    type: FETCHING_PRICE_LIST,
  }
);

const receivedPriceList = (priceList) => (
  {
    type: SUCCESS_RECEIVED_PRICE_LIST,
    payload: priceList,
  }
);

const failedToFetchPriceList = (err) => (
  {
    type: FAILURE_RECEIVED_PRICE_LIST,
    payload: err,
  }
);
