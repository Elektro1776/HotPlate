
/*  eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { logUserIn } from '../../actions/loginActions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    // const { news } = nextProps;
    this.setState({
      // news,
    });
  }

  handleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleUserLogin = () => {
    const { email, password } = this.state;
    this.props.logUserIn(email, password);
  }


  render() {
    // const { loadingArticles } = this.state;
    // if (loadingArticles) {
    //   return (<div> Loading News Articles... </div>);
    // } else if (this.state.error) {
    //   return (<div> There was an error retrieving the Newsboard </div>);
    // }
    return (
      <div>
        <NavLink to="/signup"><button>Sign Up!</button></NavLink>
        {`we are trying to log in here
        we have to check these credentials at some point but for now we don't care what login info is used

        will just create a dummy token and check it's auth`}
        <br />
        email<input htmlFor="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <br />
        password<input htmlFor="password" name="password" value={this.state.password} onChange={this.handleChange} />

        <button type="none" onClick={this.handleUserLogin}>Login</button>

      </div>
    );
  }
}

Login.propTypes = {
  logUserIn: PropTypes.func.isRequired,
};

Login.defaultProps = {
  email: '',
  password: '',
};

export default connect((state) => ({
  email: state.email,
  password: state.password,
}), (dispatch) => ({
  logUserIn: (email, password) => dispatch(logUserIn(email, password)),
}))(Login);
