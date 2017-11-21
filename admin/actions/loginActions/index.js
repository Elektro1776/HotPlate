import tokenHelper from '../../util/tokenHelper';
import { tokenCheckSuccess } from '../authenticateUserActions';

export const LOGGING_USER_IN = 'LOGGING_USER_IN';
export const SUCCESS_LOGGED_IN_USER = 'SUCCESS_LOGGED_IN_USER';
export const FAILURE_LOGGED_IN_USER = 'FAILURE_LOGGED_IN_USER';

export const logUserIn = (email, password) => (dispatch) => {
  dispatch(loggingUserIn());
  return fetch('/user/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((user) => {
      // console.info(' WHAT IS OUR USER DATA?', user);
      tokenHelper.setTokens(user.token.token, user.token.access_token);
      dispatch(tokenCheckSuccess({ username: user.first_name }));
      dispatch(successLoggedUserIn(user));
    })
    .catch((err) => {
      // console.info('WHAT WAS THE ERROR??', err.response);
      dispatch(failedLogginUserIn(err));
    });
};
export const successLoggedUserIn = (user) => (
  {
    type: SUCCESS_LOGGED_IN_USER,
    user,
  }
);
export const loggingUserIn = () => (
  {
    type: LOGGING_USER_IN,
  }
);

export const failedLogginUserIn = (err) => (
  {
    type: FAILURE_LOGGED_IN_USER,
    err,
  }
);
