export const FETCH_PRODUCT_MANUALS = 'FETCH_PRODUCT_MANUALS';
export const FETCHING_PRODUCT_MANUALS = 'FETCHING_PRODUCT_MANUALS';
export const SUCCESS_RECEIVED_PRODUCT_MANUALS = 'SUCCESS_RECEIVED_PRODUCT_MANUALS';
export const FAILURE_RECEIVED_PRODUCT_MANUALS = 'FAILURE_RECEIVED_PRODUCT_MANUALS';


export const fetchProductManuals = () => (dispatch) => {
  dispatch(fetchingProductManuals());
  fetch('/api/dealer/manuals')
    .then((data) => data.json())
    .then((productManuals) => {
      dispatch(receivedProductManuals(productManuals));
    })
    .catch((err) => {
      dispatch(failedToFetchProductManuals(err));
    });
};

const fetchingProductManuals = () => (
  {
    type: FETCHING_PRODUCT_MANUALS,
  }
);

const receivedProductManuals = (manuals) => (
  {
    type: SUCCESS_RECEIVED_PRODUCT_MANUALS,
    payload: manuals,
  }
);

const failedToFetchProductManuals = (err) => (
  {
    type: FAILURE_RECEIVED_PRODUCT_MANUALS,
    payload: err,
  }
);
