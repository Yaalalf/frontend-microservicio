import React, { Component } from 'react'

import './style/HomeContainerDesktop.css';

export default class HomeContainer extends Component {
  render() {
    return (
      <section className='HomeContainer'>

          <div className='LineDecorator'></div>

          <section className='MainContentContainer'>
            <h1>MicroServicio del Assets</h1>

            <article className='FirstPostContainer'>
                <h2>Conectando Puntos estrategicos de Informacion</h2>

                <p>Este Microservico a sido implementado con el objetivo de brindar a clientes de frontends una API para poder consumir datos utiles de la base de datos del Assets. La arquitectura del sistema ha sido creada de forma tal que la escalabilidad a partir de la incorporacion de nuevos EndPoint resulta algo muy sencillo y rapido, gracias a las capas que dividen la aplicacion permitiendo el desacoplamiento de los modulos.</p>

            </article>
            
            <article className='SecondPostContainer'>
                <h2>Uso restringido del servicio mediante permisos a frontends</h2>

                <p>Para utilizar la API  los clientes de Frontend deben pedir un nombre de usuario y password al administrador del servicio  para poder empezar a consumir los EndPoint. Los clientes de frontend deben incorporar el protocolo de autentificacion JsonWebToken para poder conectarse y consumir la API</p>
            </article>
            
            <section className='FeaturesContainer'>
                <div className='FeatureTest'>
                    <h3>Prueba los EndPoint</h3>

                    <a href="./#">Test</a>
                </div>

                <div className='FeatureDocs'>
                    <h3>
                    Documentate <br />
                    sobre la API
                    </h3>
                    
                    <a href="./#">Docs</a>
                </div>
            </section>


          </section>

          <section className='ChangelogSection'>
              <div className='ChangelogContainer'>
                <h2>Registro de Cambios</h2>
                <p>Version 0.2 <br />
                <br />
                  Se ha incorporado autentificacion a traves de Json Web Token <br />
                  <br />
                  EndPoint actuales: Workers
                </p>
              </div>
              
          </section>
      </section>
    )
  }
}
