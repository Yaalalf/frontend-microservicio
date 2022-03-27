import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style/NavBarDesktop.css';
 
export default class NavBar extends Component {



  render() {
    return (
      <nav className='NavBarContainer' onClick={this.props.onClick}>
        <ul>
            <li className={` ${(this.props.selected===1)? 'Selected' : ''}`}><Link to="/" className='LinkButton'><span className='Logo first'></span></Link></li>
            <li className={` ${(this.props.selected===2)? 'Selected' : ''}`}><Link to="/test" className='LinkButton second'>Test</Link></li>
        </ul>
      </nav>
    );
  }


}
