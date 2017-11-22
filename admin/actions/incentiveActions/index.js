// export const FETCH_INCENTIVES = 'FETCH_INCENTIVES';
export const SUBMITTING_INCENTIVE = 'SUBMITTING_INCENTIVE';
export const FETCHING_INCENTIVES = 'FETCHING_INCENTIVES';
export const SUCCESS_RECEIVED_INCENTIVES = 'SUCCESS_RECEIVED_INCENTIVES';
export const FAILURE_RECEIVED_INCENTIVES = 'FAILURE_RECEIVED_INCENTIVES';
export const SUCCESS_RECEIVED_CONFIRMATION = 'SUCCESS_RECEIVED_CONFIRMATION';
export const FAILURE_RECEIVED_CONFIRMATION = 'FAILURE_RECEIVED_CONFIRMATION';


export const fetchIncentives = () => (dispatch) => {
  dispatch(fetchingIncentives());
  fetch('/api/dealer/incentives')
    .then((data) => data.json())
    .then((incentives) => {
      dispatch(receivedIncentives(incentives));
    })
    .catch((err) => {
      dispatch(failedToFetchIncentives(err));
    });
};

export const submitNewIncentive = (newIncentive) => (dispatch) => {
  dispatch(submittingIncentive());
  fetch('/api/dealer/incentives', {
    method: 'post',
    body: JSON.stringify(newIncentive),
  }).then((response) => response.json())
    .then((data) => dispatch(receivedSubmitConfirmation()))
    .catch((err) => dispatch(failedSubmitError()));
};

const submittingIncentive = () => (
  {
    type: SUBMITTING_INCENTIVE,
  }
);

const fetchingIncentives = () => (
  {
    type: FETCHING_INCENTIVES,
  }
);

const receivedSubmitConfirmation = (confirmation) => (
  {
    type: SUCCESS_RECEIVED_CONFIRMATION,
    payload: confirmation,
  }
);

const failedSubmitError = (err) => (
  {
    type: FAILURE_RECEIVED_CONFIRMATION,
    payload: err,
  }
);

const receivedIncentives = (incentives) => (
  {
    type: SUCCESS_RECEIVED_INCENTIVES,
    payload: incentives,
  }
);

const failedToFetchIncentives = (err) => (
  {
    type: FAILURE_RECEIVED_INCENTIVES,
    payload: err,
  }
);
