import React, { Component } from 'react'

import './style/ButtonFilled.css';

export default class ButtonFilled extends Component {
  render() {
    return (
          <button className={`ButtonFilled ${this.props.className}`} onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}
