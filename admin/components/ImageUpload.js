/*  eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  imagePreview = () => {
    // using cms to upload
    // preview the uploaded image here
  }

  saveImage = () => {
    // take the preview of the article and save it to the DB/CMS for later display
  }

  render() {
    return (
      <div className="upload-area">
        <div className="upload-guidelines">
          Please make sure to abide by these guidelines for uploads:
          <ul>
            <li>thing</li>
            <li>thing</li>
            <li>thing</li>
            <li>thing</li>
          </ul>
        </div>
        <div className="preview-upload">
          <img width="100px" height="100px" src="/images/icons/128px/zurb.png" id="thumbnail" alt="default" />
        </div>

        <form className="image-upload-form">
          <label htmlFor="image-preview">Upload the news article</label>
          <input type="file" accept="image/*" onChange={this.imagePreview} className="" />
          <button className="button" onClick={this.saveImage}>Save</button>
        </form>
      </div>

    );
  }
}


export default ImageUpload;
