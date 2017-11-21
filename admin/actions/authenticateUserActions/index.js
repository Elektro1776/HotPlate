export const USER_TOKEN = 'USER_TOKEN';
export const USER_TOKEN_SUCCESS = 'USER_TOKEN_SUCCESS';
export const USER_TOKEN_FAILURE = 'USER_TOKEN_FAILURE';
export const USER_TOKEN_NOT_FOUND = 'USER_TOKEN_NOT_FOUND';
// const ROOT_URL = window.location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/auth' : '/auth';
// console.log(' ROOT URL ????', ROOT_URL);
import tokenHelper from '../../util/tokenHelper';

export const checkUserToken = ({ token, access_token }) => (dispatch) => {
  fetch(`/auth/token?access_token=${access_token}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => data.json())
    .then((user) => {
      console.info(`wer are loggin da uzaeer`, user);
      const { token: magicToken, access_token: access_token_magic } = user;
      tokenHelper.setTokens(magicToken, access_token_magic);
      dispatch(tokenCheckSuccess(user));
    })
    .catch((err, other) => {
      console.info(' WE HAVE AN ERROR HUSTON', err);
      const { data } = err.response;
      // console.log(' WHAT IS THE DATA?', data);
      dispatch(tokenCheckFailure(data));
    });
};

export const tokenCheckSuccess = (currentUser) => (
  {
    type: USER_TOKEN_SUCCESS,
    payload: currentUser,
  }
);

export const tokenCheckFailure = (error) => (
  {
    type: USER_TOKEN_FAILURE,
    payload: error,
  }
);

export const userTokenNotFound = () => ({
  type: USER_TOKEN_NOT_FOUND,
});
