import React from 'react';
import PropTypes from 'prop-types';

const DealerPrices = (props) => (
  <div>
    {props.itemInformation.map((i) => {
      /*
      We can alternate styling with a variable here --- maybe state controlled
      Potential changes for a submittal form versus displayed from database
      */
      const salesRepLine = (
        <div className="rep-item" key={i.name}>
          <span className="rep-name">
            {`${i.name}. `}
          </span>
          <span className="rep-category">
            {i.category}
          </span>
          <span className="rep-quantity">
            {i.quantity}
          </span>
          <span className="rep-price">
            {`$${i.price}.00`}
          </span>
          <span className="rep-shipping">
            {`$${i.shipping}.00`}
          </span>
        </div>
      );
      return salesRepLine;
    })}
  </div>
);

DealerPrices.propTypes = {
  itemInformation: PropTypes.array.isRequired,
};

export default DealerPrices;
