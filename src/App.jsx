import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';


import HeaderContainer from './container/HeaderContainer';
import HomeContainer from './container/HomeContainer';
import TestContainer from "./container/TestContainer";

class App extends Component  {

  constructor(props){
    super(props);
    this.state = {fackeState : 0};
  }

  onClick= ()=>{
    console.log('Me estoy ejecutando');
    this.setState(this.state.fackeState + 1);
  }

  render(){
    return (
      <div className="App">
         <BrowserRouter>
          <HeaderContainer fackeState={this.state.fackeState} />
         
          <Routes>
            <Route path="/" element={<HomeContainer onClick={this.onClick} />} />
            <Route path="test" element={<TestContainer />} />
  
          </Routes>
            
        </BrowserRouter>
      </div>
    );
  }
 
}

export default App;
