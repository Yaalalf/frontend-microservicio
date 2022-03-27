import React, { Component } from 'react'
import ButtonFilled from './ButtonFilled';
import ButtonOutlined from './ButtonOutlined';




import './style/AuthForm.css';

export default class AuthForm extends Component {



  render() {
    return (
      <div className='AuthForm'>
          <form >
              <label htmlFor="name">
                <span>Nombre de Usuario</span>
                <input  ref={this.props.nameRef} type="text" name="name" id="name" />
              </label>

              <label htmlFor="password">
                <span>Contraseña</span>
                <input  ref={this.props.passwordRef} type="password" name="password" id="password" />
              </label>

              <ButtonFilled  className='ButtonAceptar' onClick={this.props.onAceptar} text='Aceptar' />
              <ButtonOutlined className='ButtonCancelar' onClick={this.props.onCancelar} text='Cancelar' />
          </form>

         

      </div>
    )
  }


}
