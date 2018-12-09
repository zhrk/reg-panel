import React, { Component } from 'react';
import './Upload.css';
import upload from '../../images/Upload/upload.svg';
import file from '../../images/Upload/file.svg';
import trash from '../../images/Upload/trash.svg';

class Upload extends Component {

  renderField() {
    if (this.props.stateStatus !== 'clear') {
      return (
        <div className="upload__field">
          <img src={upload} alt="Загрузить" aria-hidden="true" />
          Загрузить
        </div>
      );
    } else {
      return (
        <div className="upload__field-info">
          <div>
            <img src={file} alt="Имя файла" />
            Photo_pass_2020201.png
          </div>
          <img src={trash} alt="Удалить" />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="upload">
        <div className="upload__label">{this.props.label}</div>
        { this.renderField() }
      </div>
    );
  }

}

export default Upload;