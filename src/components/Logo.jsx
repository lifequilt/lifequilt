import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    const { altText, path } = this.props;

    return (
      <img src={path} alt={altText} />
    );
  }
}
