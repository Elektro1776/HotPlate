
/*  eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import ImageUpload from '../../components/ImageUpload';

// Dummy Data
import news from "../../dummyData/newsboard_dummy.js";

class Newsboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: news
    };
  }

  componentDidMount() {
    // Get articles from CMS/DB
  }

  deletePost = () => {
    // Delete selected article from DB/CMS and remove from view
  }

  render() {
    return (
      <div>

        <ImageUpload />

        <div>
          {this.state.articles.map((i) => {
            return (
              <div key={i.title /*Do stored id instead later*/}>
                <button onClick={this.deletePost}> Delete this article </button>
                <div>
                  <h3> {i.title} </h3>
                  <img src={i.image} alt={i.alt} style={{ height: "200px" }} />
                  <strong> {i.date} </strong>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    );
  }
};


export default connect((state) => ({
}), (dispatch) => ({
}))(Newsboard);
