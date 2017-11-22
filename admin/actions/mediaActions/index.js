export const FETCHING_PART = 'FETCHING_PART';
export const FETCHING_MANUAL = 'FETCHING_MANUAL';
export const FETCHING_BROCHURE = 'FETCHING_BROCHURE';
export const FETCHING_VIDEO = 'FETCHING_VIDEO';
export const SUCCESS_RECEIVED_PART = 'SUCCESS_RECEIVED_PART';
export const FAILURE_RECEIVED_PART = 'FAILURE_RECEIVED_PART';
export const SUCCESS_RECEIVED_MANUAL = 'SUCCESS_RECEIVED_MANUAL';
export const FAILURE_RECEIVED_MANUAL = 'FAILURE_RECEIVED_MANUAL';
export const SUCCESS_RECEIVED_BROCHURE = 'SUCCESS_RECEIVED_BROCHURE';
export const FAILURE_RECEIVED_BROCHURE = 'FAILURE_RECEIVED_BROCHURE';
export const SUCCESS_RECEIVED_VIDEO = 'SUCCESS_RECEIVED_VIDEO';
export const FAILURE_RECEIVED_VIDEO = 'FAILURE_RECEIVED_VIDEO';

export const fetchPartById = (id) => (dispatch) => {
  dispatch(fetchingMedia(`PART`));
  fetch(`/api/media/parts/${id}`)
    .then((data) => data.json())
    .then((part) => dispatch(receivedMedia(`PART`, part)))
    .catch((err) => dispatch(failedToFetchMedia(`PART`, err)));
};

export const fetchManualById = (id) => (dispatch) => {
  dispatch(fetchingMedia(`MANUAL`));
  fetch(`/api/media/manuals/${id}`)
    .then((data) => data.json())
    .then((manual) => dispatch(receivedMedia(`MANUAL`, manual)))
    .catch((err) => dispatch(failedToFetchMedia(`MANUAL`, err)));
};

export const fetchBrochureById = (id) => (dispatch) => {
  dispatch(fetchingMedia(`BROCHURE`));
  fetch(`/api/media/brochures/${id}`)
    .then((data) => data.json())
    .then((brochure) => dispatch(receivedMedia(`BROCHURE`, brochure)))
    .catch((err) => dispatch(failedToFetchMedia(`BROCHURE`, err)));
};

export const fetchVideoById = (id) => (dispatch) => {
  dispatch(fetchingMedia(`VIDEO`));
  fetch(`/api/media/videos/${id}`)
    .then((data) => data.json())
    .then((video) => dispatch(receivedMedia(`VIDEO`, video)))
    .catch((err) => dispatch(failedToFetchMedia(`VIDEO`, err)));
};

const fetchingMedia = (fetchType) => (
  {
    type: `FETCHING_${fetchType}`,
  }
);

const receivedMedia = (mediaType, data) => (
  {
    type: `SUCCESS_RECEIVED_${mediaType}`,
    payload: data,
  }
);

const failedToFetchMedia = (mediaType, err) => (
  {
    type: `FAILURE_RECEIVED_${mediaType}`,
    payload: err,
  }
);
