
const tokenHelper = () => {
  const that = {};
  function setTokens(token, access_token) {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('access_token');
    localStorage.setItem('jwt_token', token);
    localStorage.setItem('access_token', access_token);
  }
  that.setTokens = setTokens;
  return that;
};

export default tokenHelper();
