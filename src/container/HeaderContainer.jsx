import React, { Component } from 'react'

import NavBar from '../components/NavBar';

import './style/HeaderContainerDesktop.css';

export default class HeaderContainer extends Component {
 
  constructor(props){
    super(props);
  
    this.state = {selected : 1,
                  fackeState: this.props.fackeState};

  }

  onClick = (e)=>{

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

  }

  render() {
    return (
      <header className='HeaderContainer'>
          <NavBar selected={this.state.selected} onClick={this.onClick} />

          {(this.state.selected === 1) || 
          <div className='SectionInfo'>
            <h2><span>Prueba</span>  el estado de la <span>conexión</span> del microservicio así <br />
            como los <span>distintos endpoints</span> de la <span>API </span> </h2>
            <div className='DecoratedImage'></div>            
          </div>}
          {(this.state.fackeState !== 0)}
      </header>
    );
  }

  componentDidMount(){
    if(this.state.fackeState !== this.props.fackeState){
      this.setState({selected : 2,
        fackeState : this.props.fackeState});
    }
    if(document.URL.includes('test')){
      this.setState({selected:2});
    }
  }
}
