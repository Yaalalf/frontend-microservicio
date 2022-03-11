import React, { Component } from 'react'

import './style/NavBarDesktop.css';
 
export default class NavBar extends Component {

  constructor(props){
    super(props);
  
    this.state = {selected : 1};

  }

  onClick = (e)=>{

    console.log(e);
    if(e.target.classList.contains('first')){
      if(this.state.selected === 1){
        e.stopPropagation();
      }else{
        this.setState({selected:1})
      }
     
    }
    if(e.target.classList.contains('second')){
      if(this.state.selected === 2){
        e.stopPropagation();
      }else{
        this.setState({selected:2})
      }
    }
    if(e.target.classList.contains('third')){
      if(this.state.selected === 3){
        e.stopPropagation();
      }else{
        this.setState({selected:3})
      }
    }

  }

  render() {
    return (
      <nav className='NavBarContainer' onClick={this.onClick}>
        <ul>
            <li className={` ${(this.state.selected===1)? 'Selected' : ''}`}><a href="./#" className='LinkButton'><span className='Logo first'></span></a></li>
            <li className={` ${(this.state.selected===2)? 'Selected' : ''}`}><a href="./#" className='LinkButton second'>Text</a></li>
            <li className={` ${(this.state.selected===3)? 'Selected' : ''}`}><a href="./#" className='LinkButton third'>Docs</a></li>
        </ul>
      </nav>
    );
  }
}
