import React, { Component } from 'react'
import AuthContainer from './AuthContainer';


import './style/TestContainerDesktop.css';

export default class TestContainer extends Component {
  render() {
    return (
      <section className='TestContainer'>

        <section className='AuthAndInfo'>

          <AuthContainer/>

          <section className='SectionInfo'>
            <h3>Información</h3>
          </section>

        </section>
        <section className='TestAPIForm'>

        </section>
        <section className='TestAPIResult'>

        </section>

         
      </section>
    );
  }
}
