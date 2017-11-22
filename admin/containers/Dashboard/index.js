import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ColumnLeft from '../../components/ColumnLeft';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div> {`I'm alive`} </div>
        {/* <ColumnLeft /> */}
      </div>
    );
  }
}
export default connect((state) => ({
}), (dispatch) => ({
}))(Dashboard);
