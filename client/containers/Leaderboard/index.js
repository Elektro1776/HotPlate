
/*  eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
"$ amount
Top 5 Ranking - Name, Company, Town"
|--------------------------------------------------
*/

import { fetchLeaderBoardStats } from '../../actions/leaderBoardActions';
import LeaderboardHistory from '../../components/LeaderboardHistory';


class Leaderboard extends Component {
  state = {
    leaders: [],
    loadingLeaders: true,
  };

  componentWillMount() {
    this.props.fetchLeaderBoardStats();
  }

  componentWillReceiveProps(nextProps) {
    const { leaders } = nextProps.leaderboard;
    this.setState({
      leaders,
      loadingLeaders: false,
    });
  }

  render() {
    console.info('this is our leaders info', this.state.leaders);
    const { loadingLeaders } = this.state;
    if (loadingLeaders) {
      return (<div>Loading leader</div>);
    } else if (this.state.error) {
      return (<div> There was an error retrieving the Leaderboard </div>);
    }
    return (
      <div>
        <div className="information-labels">
          <span className="rank-label">
            Rank
          </span>
          <span className="name-label">
            Name
          </span>
          <span className="sales-value-label">
            Sales
          </span>
          <span className="company-label">
            Company
          </span>
          <span className="town-label">
            Town
          </span>
        </div>
        <div>
          <LeaderboardHistory leaders={this.state.leaders} />
        </div>
      </div>
    );
  }
}

Leaderboard.propTypes = {
  leaderboard: PropTypes.object,
  fetchLeaderBoardStats: PropTypes.func.isRequired,
};

Leaderboard.defaultProps = {
  leaderboard: {},
  leaders: [],
};

export default connect((state) => ({
  leaderboard: state.leaderboard,
}), (dispatch) => ({
  fetchLeaderBoardStats: () => dispatch(fetchLeaderBoardStats()),
}))(Leaderboard);

