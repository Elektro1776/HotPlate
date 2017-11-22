
/*  eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DealerPrices from '../../components/DealerPrices';

// Dummy Data
import itemData from '../../dummyData/priceList_dummy';

/**
|--------------------------------------------------
 Name	 Category	 Available Qty	 Direct Dealer Price	 Ship Price USA
|--------------------------------------------------
*/

class PriceList extends Component {
  state = {
    itemList: [],
  };

  componentWillMount() {
    this.setState({
      itemList: this.props.itemInformation,
    });
  }

  render() {
    return (
      <div>
        <div className="information-labels">
          <span className="name-label">
            Name
          </span>
          <span className="category-label">
            Category
          </span>
          <span className="inventory-quantity-label">
            Available Quantity
          </span>
          <span className="dealer-price-label">
            Item Price
          </span>
          <span className="shipping-price-label">
            Shipping Price
          </span>
        </div>
        <div>
          <DealerPrices itemInformation={this.state.itemList} />
        </div>
      </div>
    );
  }
}

PriceList.propTypes = {
  itemInformation: PropTypes.array,
};

PriceList.defaultProps = {
  itemInformation: itemData,
};

export default connect((state) => ({
}), (dispatch) => ({
}))(PriceList);

