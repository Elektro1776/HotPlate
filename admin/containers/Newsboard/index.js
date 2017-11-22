
/*  eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchNewsBoardStats } from '../../actions/newsboardActions';


class Newsboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loadingArticles: true,
    };
  }

  componentWillMount() {
    this.props.fetchNewsBoardStats();
  }

  componentWillReceiveProps(nextProps) {
    const { news } = nextProps;
    this.setState({
      news,
      loadingArticles: false,
    });
  }

  render() {
    const { loadingArticles } = this.state;
    if (loadingArticles) {
      return (<div> Loading News Articles... </div>);
    } else if (this.state.error) {
      return (<div> There was an error retrieving the Newsboard </div>);
    }
    return (
      <div>
        <div>
          {this.state.news.map((i) => {
            const articleLine = (
              <div key={i.title}>
                <div>
                  <h3> {i.title} </h3>
                  <img src={i.image} alt={i.alt} style={{ height: '200px' }} />
                  <div>
                    <div>
                      {i.date}
                    </div>
                  </div>
                </div>
              </div>
            );
            return articleLine;
          })}
        </div>
      </div>
    );
  }
}

Newsboard.propTypes = {
  news: PropTypes.array,
  fetchNewsBoardStats: PropTypes.func.isRequired,
};

Newsboard.defaultProps = {
  news: [],
};

export default connect((state) => ({
  news: state.news,
}), (dispatch) => ({
  fetchNewsBoardStats: () => dispatch(fetchNewsBoardStats()),
}))(Newsboard);
