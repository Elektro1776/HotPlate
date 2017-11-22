import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import SpiffSubmit from '../SpiffSubmit/index';
import SpiffHistory from '../../components/SpiffHistory';

// Dummy data
import spiffData from '../../dummyData/spiffs_dummy';

/**
|--------------------------------------------------
Spiff

History
Submitted
Approved
Generate
Shipped/mailed

tracking system - view only - status request form
|--------------------------------------------------
*/

class Spiff extends Component {
  state = {
    spiff: [],
  }

  componentWillMount() {
    this.setState({
      spiff: this.props.spiffs,
    });
  }

  render() {
    return (
      <div>
        <NavLink to="/incentives/submit">
          <button>
            Submit New Spiff
          </button>
        </NavLink>
        <div>
          <span className="spiff-title" >
            Submit Date
          </span>
          <span className="spiff-title" >
            Value
          </span>
          <span className="spiff-title" >
            Status
          </span>
        </div>
        <div className="individual-spiffs">
          <SpiffHistory spiff={this.state.spiff} />
        </div>
      </div>
    );
  }
}

Spiff.propTypes = {
  spiffs: PropTypes.array,
};

Spiff.defaultProps = {
  spiffs: spiffData,
};

export default connect((state) => ({
}), (dispatch) => ({
}))(Spiff);
