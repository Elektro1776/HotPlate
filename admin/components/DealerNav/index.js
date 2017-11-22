import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
|--------------------------------------------------
Welcome
Internet Pricing Policy
Incentives
My Leads
Sales Support
Media Resources

|--------------------------------------------------
*/

const DealerNav = (props) => (
  <div className="dealer-nav-bar">
    <div className="nav-container">
      <NavLink
        exact
        to="/a"
        activeClassName="active"
      >
        {/* <button className="nav-button-home"> */}
          Home
        {/* </button> */}
      </NavLink>
    </div>
    <div className="nav-container">
      <NavLink to="/news">
        <button className="nav-button-news">
          News
        </button>
      </NavLink>
    </div>
    <div className="nav-container">
      <NavLink to="/products">
        <button className="nav-button-pricing">
          Pricing
        </button>
      </NavLink>
    </div>
    <div className="nav-container">
      <NavLink to="/incentives">
        <button className="nav-button-incentives">
          Incentives
        </button>
      </NavLink>
    </div>
    <div className="nav-container">
      <NavLink to="/leaderboard">
        <button className="nav-button-leaderboard">
          Leaderboard
        </button>
      </NavLink>
    </div>
    <div className="nav-container">
      <NavLink to="/#">
        <button className="nav-button-sales-support">
          Sales Support
        </button>
      </NavLink>
    </div>
    <div className="nav-container">
      <NavLink to="/#">
        <button className="nav-button-media">
          Dealer Media
        </button>
      </NavLink>
    </div>
  </div>
);

DealerNav.propTypes = {

};

export default DealerNav;
