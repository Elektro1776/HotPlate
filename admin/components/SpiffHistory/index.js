import React from 'react';
import PropTypes from 'prop-types';


const SpiffHistory = (props) => (
  <div>
    {props.spiff.map((i) => {
      /*
      We can alternate styling with a variable here --- maybe state controlled
      Potential changes for a submittal form versus displayed from database
      */
      const spiffLine = (
        <div className="spiff-item" key={i.more}>
          <span className="spiff-date">
            {i.date}
          </span>
          <span className="spiff-value">
            {i.value}
          </span>
          <span className="spiff-status">
            {i.status}
          </span>
          <button className="spiff-show-more">
            Show More
          </button>
        </div>
      );
      return spiffLine;
    })}
  </div>
);

SpiffHistory.propTypes = {
  spiff: PropTypes.array.isRequired,
};

export default SpiffHistory;
