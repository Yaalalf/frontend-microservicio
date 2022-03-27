import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './style/HomeContainerDesktop.css';

export default class HomeContainer extends Component {
  render() {
    return (
      <section className='HomeContainer'>

          <div className='LineDecorator'></div>

          <section className='MainContentContainer'>
            <h1>MicroServicio del Assets</h1>

            <article className='FirstPostContainer'>
                <h2>Conectando Puntos estratégicos de Información</h2>

                <p>Este Microservico a sido implementado con el objetivo de brindar a clientes de frontends una API para poder consumir datos útiles de la base de datos del Assets. La arquitectura del sistema ha sido creada de forma tal que la escalabilidad a partir de la incorporación de nuevos EndPoint resulta algo muy sencillo y rápido, gracias a las capas que dividen la aplicación, permitiendo el desacoplamiento de los módulos.</p>

            </article>
            
            <article className='SecondPostContainer'>
                <h2>Uso restringido del servicio mediante permisos a frontends</h2>

                <p>Para utilizar la API,  los clientes de Frontend deben pedir un nombre de usuario y password al administrador del servicio  para poder empezar a consumir los EndPoint. Los clientes de frontend deben incorporar el protocolo de autentificación JsonWebToken para poder conectarse y consumir la API</p>
            </article>
            
            <section  className='FeaturesContainer'>
                <div className='FeatureTest'>
                    <h3>Prueba los EndPoint</h3>

                    <Link onClick={this.props.onClick} to="/test">Test</Link>
                </div>
            </section>


          </section>

          <section className='ChangelogSection'>
              <div className='ChangelogContainer'>
                <h2>Registro de Cambios</h2>
                <p>Version 0.2 <br />
                <br />
                 Se ha incorporado autentificación a través de Json Web Token <br />
                  <br />
                  EndPoint actuales: Workers
                </p>
              </div>
              
          </section>
      </section>
    )
  }
}
