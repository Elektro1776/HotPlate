
/*  eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class SpiffSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salesName: '',
      serialNumber: '',
      invoiceFile: '',
    };
  }

  handleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  spiffSubmit = (e) => {
    e.preventDefault();
    // pass off to Dealer owner for approval
  }


  render() {
    return (
      <div>
        <form>
          <label htmlFor="spiff-sales-name">
            Sales Representative Name<input type="text" name="salesName" value={this.state.salesName} onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="spiff-serial">
            Product Serial Number<input type="text" name="serialNumber" value={this.state.serialNumber} onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="spiff-invoice">
            <input type="file" name="invoiceFile" accept="image/*" value={this.state.invoiceFile} onChange={this.handleChange} />
          </label>
          {/* Input a preview of the invoice here? */}
          <br />
          <button type="none" onClick={this.spiffSubmit}>Submit Spiff</button>
          <NavLink to="/incentives">
            <button>
              Cancel
            </button>
          </NavLink>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({
}), (dispatch) => ({
}))(SpiffSubmit);
