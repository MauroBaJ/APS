import React, { Component } from 'react';

import './Footer.css'

const today = new Date();
const year = today.getFullYear();

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return (
            <div className='footer d-flex'>

            <p className='footer__text text-center'>Artefactos Pernos y Seguros S.A. de C.V.</p>
            <p className='footer__text text-center'> Todos los derechos Reservados &copy; {year} </p>
            <p className='footer__text text-center'>Aviso de Privacidad</p>
            </div>
          );
    }
}
 
export default Footer;