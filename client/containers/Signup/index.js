
/*  eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { signupUser } from '../../actions/signupActions';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      password: '',
      email: '',
      company_id: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    // const { news } = nextProps;
    this.setState({
    });
  }

  handleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleUserLogin = () => {
    const accountInformation = this.state;
    this.props.signupUser(accountInformation);
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
        <NavLink to="/login"><button>Log in instead!</button></NavLink>
        <br />
        First name<input htmlFor="first_name" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
        <br />
        Last name<input htmlFor="last_name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
        <br />
        email<input htmlFor="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <br />
        Password<input htmlFor="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <br />
        company id number<input htmlFor="company_id" name="company_id" value={this.state.company_id} onChange={this.handleChange} />
        <button type="none" onClick={this.handleUserLogin}>Login</button>

      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
};

Signup.defaultProps = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  company_id: '',
};

export default connect((state) => ({
  email: state.email,
  first_name: state.first_name,
}), (dispatch) => ({
  signupUser: (
    password,
    email,
    first_name,
    last_name,
    company_id,
  ) => dispatch(
    signupUser(
      password,
      email,
      first_name,
      last_name,
      company_id,
    )),
}))(Signup);
