export const FETCH_BROCHURES = 'FETCH_BROCHURES';
export const FETCHING_BROCHURES = 'FETCHING_BROCHURES';
export const SUCCESS_RECEIVED_BROCHURES = 'SUCCESS_RECEIVED_BROCHURES';
export const FAILURE_RECEIVED_BROCHURES = 'FAILURE_RECEIVED_BROCHURES';


export const fetchBrochures = () => (dispatch) => {
  dispatch(fetchingBrochures());
  fetch('/api/dealer/brochures')
    .then((data) => data.json())
    .then((brochures) => {
      dispatch(receivedBrochures(brochures));
    })
    .catch((err) => {
      dispatch(failedToFetchBrochures(err));
    });
};

const fetchingBrochures = () => (
  {
    type: FETCHING_BROCHURES,
  }
);

const receivedBrochures = (brochures) => (
  {
    type: SUCCESS_RECEIVED_BROCHURES,
    payload: brochures,
  }
);

const failedToFetchBrochures = (err) => (
  {
    type: FAILURE_RECEIVED_BROCHURES,
    payload: err,
  }
);
