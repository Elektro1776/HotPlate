export const FETCH_PARTS = 'FETCH_PARTS';
export const FETCHING_PARTS = 'FETCHING_PARTS';
export const SUCCESS_RECEIVED_PARTS = 'SUCCESS_RECEIVED_PARTS';
export const FAILURE_RECEIVED_PARTS = 'FAILURE_RECEIVED_PARTS';


export const fetchParts = () => (dispatch) => {
  dispatch(fetchingParts());
  fetch('/api/dealer/parts')
    .then((data) => data.json())
    .then((parts) => {
      dispatch(receivedParts(parts));
    })
    .catch((err) => {
      dispatch(failedToFetchParts(err));
    });
};

const fetchingParts = () => (
  {
    type: FETCHING_PARTS,
  }
);

const receivedParts = (manuals) => (
  {
    type: SUCCESS_RECEIVED_PARTS,
    payload: manuals,
  }
);

const failedToFetchParts = (err) => (
  {
    type: FAILURE_RECEIVED_PARTS,
    payload: err,
  }
);
