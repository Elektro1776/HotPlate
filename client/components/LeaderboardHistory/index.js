import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardHistory = (props) => (
  <div>
    {props.leaders.map((i) => {
      /*
      We can alternate styling with a variable here --- maybe state controlled
      Potential changes for a submittal form versus displayed from database
      */
      const salesRepLine = (
        <div className="rep-item" key={i.name}>
          <span className="rep-rank">
            {`${i.rank}. `}
          </span>
          <span className="rep-name">
            {i.name}
          </span>
          <span className="rep-value">
            {`$${i.value}.00`}
          </span>
          <span className="rep-company">
            {i.company}
          </span>
          <span className="rep-town">
            {i.town}
          </span>
        </div>
      );
      return salesRepLine;
    })}
  </div>
);

LeaderboardHistory.propTypes = {
  leaders: PropTypes.array.isRequired,
};

export default LeaderboardHistory;
