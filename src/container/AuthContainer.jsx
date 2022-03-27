import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';
import ButtonFilled from '../components/ButtonFilled';
import ErrorModal from './../components/ErrorModal';

import './style/AuthContainerDesktop.css';

export default class AuthContainer extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            isModal: false,
            isModalError: false,
            isAuth: false,
            data : [],
            
        }
      
        this.inputName = React.createRef();
    this.inputPassword = React.createRef();

    }

    onClickCancelar = (e) =>{
        this.setState({isModal : !this.state.isModal});
    }

    onClickAceptar = async (e)=>{
        let data;

        e.preventDefault();
        try{
            let credentials = btoa(`${this.inputName.current.value}:${this.inputPassword.current.value}`, 'base64');
    
            data = await fetch("http://localhost:3000/api/auth/token", {
            "method": "POST",
            "headers": {
            
                "Authorization": `Basic ${credentials}`
            }
            });
            
            data = await data.json();

            if(data.error === true){
                this.setState({data:data,
                    isModalError: true});
            }else{
                window.sessionStorage.setItem("isAuth",true);
                this.setState({ data:data,
                                isModal: false,
                                isAuth:true});
            }
    
            }catch{
         
            }
        }

      onClickAceptarErrorModal = (e)=>{
        this.setState({isModalError: false});

        this.inputName.current.value ='';
        this.inputPassword.current.value ='';
      }


    render() {

    return (
        <section className='SectionAuth'>
        <p>El microservicio utiliza la estrategia de autentificación JsonWebToken para poder consumir los EndPoints debe autentificarse con la clave de administrador</p>
        <div className='Auth'>
          <p className={`${(this.state.isAuth)?"IsAuth":""}`}>{`${(this.state.isAuth)?"Bienvenido que tenga un buen dia":"No sabemos quién es autentíquese"}`}</p>
          {(this.state.isAuth)?undefined:<ButtonFilled onClick={this.onClickCancelar} className='Button' text='Autenticarse' />}
        </div>

       {this.state.isModal && <AuthForm nameRef={this.inputName} passwordRef={this.inputPassword} onAceptar={this.onClickAceptar} onCancelar={this.onClickCancelar} />}
       {this.state.isModalError && <ErrorModal errorMessage={this.state.data.message} onAceptar={this.onClickAceptarErrorModal} />}
      </section>

    );
  }

  componentDidMount(){
      if(window.sessionStorage.getItem("isAuth"))
      this.setState({isAuth:true});
  }

}

    

  
 
