import React, { Component } from 'react'

import ButtonOutlined from './ButtonOutlined';

import './style/ErrorModal.css'

export default class ErrorModal extends Component {

  render() {
    return (
      <div className='ErrorModal'>
          
          <div className='ErrorModalContainer'>

            <p>{this.props.errorMessage}</p>

            <ButtonOutlined className='ButtonAceptar' onClick={this.props.onAceptar} text='Aceptar' />

          </div>

      </div>
    )
  }
}
