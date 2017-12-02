import Promise from 'bluebird';

export const callAPIMiddleware = ({ dispatch, getState }) => {
  return (next) => (action) => new Promise((resolve, reject) => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      payload = {},
    } = action;
    if (!types) {
      // Normal action: pass it on
      return next(action);
    }
    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every((type) => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    const [requestType, successType, failureType] = types;

    dispatch(
      Object.assign({}, payload, {
        type: requestType,
      }),
    );
    callAPI() // .then((data) => data.json())
      .end((err,response) => {
        console.log('WHAT IS THE ERR', err);
        // console.log('WHAT IS THE RESPONSE', response);
        dispatch(
          Object.assign({}, payload, {
            response: response.body,
            type: successType,
          }),
        );
        resolve();
      })
      // .catch((error) => {
      //   dispatch(
      //     Object.assign({}, payload, {
      //       error,
      //       type: failureType,
      //     }),
      //   );
      //   reject(error);
      // },
      // );
  });
};
