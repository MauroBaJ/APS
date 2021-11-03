import React, { Component } from 'react';

import Card from '../../Card/Card';
import CardImage from '../../CardImage/CardImage';
import './MainPage.css';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return (         
            <main className='flex-fill m'>
                
                <div className="container col-xxl-8 px-4 py-5">
                    <CardImage 
                        img='https://ik.imagekit.io/MBJ0523/APS/LOGO_FINAL_vector_w61Idqhz4.jpg?updatedAt=1634498445529'
                        text='Somos una empresa orgullosamente mexicana. Fundados en 1984, nuestra misión siempre ha
                        sido ofrecer
                        a nuestros clientes productos de la más alta calidad, a precios justos. Nuestra cede se encuentra en
                        la ciudad de Guadalajara, Jalisco. Sin embargo, eso no nos detiene de hacer envíos a toda la
                        república.'
                        name='Artefactos Pernos y Seguros'
                        btntxt='Conoce más sobre nosotros'
                        link='/aboutus'
                    ></CardImage>
                </div>
                <div className="container">

                <div className="row">
                <Card text='En nuestra tienda encontrarás todos los productos de nuestra marca,
                    los cuales son químicos de alta calidad. También podrás encontrar
                    una variedad de estuches de insumos para hidráulica.' 
                    titulo='Visita nuestra tienda'
                    buttontext='Ir a la tienda '
                    page='/tienda'
                />
                <Card text='Llena un formulario de contacto con tus datos, y nosotros nos
                    encargaremos de llamarte o escribirte para darle seguimiento
                    a tus dudas, pedidos, o cualquier otro tema.'
                    titulo='Contactanos' 
                    buttontext='Llenar el formulario '
                    page='/contacto'
                />
                <Card titulo='Bolsa de trabajo'
                    text='¿Buscas empleo? Nosotros siempre estamos contratando. Revisa
                    las vacantes disponibles, y selecciona la que más te guste.
                    SI nos gusta tu perfil, te llamaremos para una entrevista.'
                    buttontext='Buscar empleos'
                    page='/careers'
                />
            </div>
        </div> 
        </main>
         );
    }
}
 
export default MainPage;