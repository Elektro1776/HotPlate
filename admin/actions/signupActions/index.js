import { tokenCheckSuccess } from '../authenticateUserActions';

export const SIGNING_IN_USER = 'SIGNING_IN_USER';
export const SUCCESS_SIGNED_USER_IN = 'SUCCESS_SIGNED_USER_IN';
export const FAILURE_SIGNED_USER_IN = 'FAILURE_SIGNED_USER_IN';

export const signupUser = (userData) => (dispatch) => {
  dispatch(signingUserIn());
  return fetch('/user/new/signup', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        console.info(`we had an error with our response`);
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((user) => {
      if (user.token) {
        localStorage.setItem('jwt_token', user.token);
        localStorage.setItem('access_token', user.access_token);
      }
      dispatch(successUserSignIn(user));
      dispatch(tokenCheckSuccess(user));
    })
    .catch((err) => {
      dispatch(failureUserSignIn(err));
    });
};

const signingUserIn = () => ({
  type: SIGNING_IN_USER,
});

const successUserSignIn = (user) => ({
  type: SUCCESS_SIGNED_USER_IN,
  payload: user,
});

const failureUserSignIn = (err) => ({
  type: FAILURE_SIGNED_USER_IN,
  payload: err,
});
