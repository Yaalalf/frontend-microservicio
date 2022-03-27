import React, { Component } from 'react'

import './style/ButtonOutlined.css';

export default class ButtonOutlined extends Component {
  render() {
    return (
        <button className={`ButtonOutlined ${this.props.className}`} onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}
