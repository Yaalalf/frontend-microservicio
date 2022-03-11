import React, { Component } from 'react'

import NavBar from '../components/NavBar';

import './style/HeaderContainerDesktop.css';

export default class HeaderContainer extends Component {
  render() {
    return (
      <header className='HeaderContainer'>
          <NavBar />
      </header>
    );
  }
}
