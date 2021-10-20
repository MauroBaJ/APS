import React, { Component } from 'react';
import GoToTop from '../../GoToTop/GoToTop';
import Card from '../../Card/Card';
import './MainPage.css';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section>
                
            <main className='flex-fill m'>
                
                        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    
                    <picture>
                        <source srcset="https://ik.imagekit.io/MBJ0523/APS/LOGO_FINAL_vector_w61Idqhz4.jpg?updatedAt=1634498445529" type="image/jpeg"></source>
                        <source srcset="https://ik.imagekit.io/MBJ0523/APS/LOGO_FINAL_vector_w61Idqhz4.jpg?updatedAt=1634498445529" type="image/webp"></source>
                        <img src="https://ik.imagekit.io/MBJ0523/APS/LOGO_FINAL_vector_w61Idqhz4.jpg?updatedAt=1634498445529" alt="Imagen Hero" width="100%"></img>
                    </picture>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Artefactos Pernos y Seguros</h1>
                    <p className="lead main__text">Somos una empresa orgullosamente mexicana. Fundados en 1984, nuestra misión siempre ha
                        sido ofrecer
                        a nuestros clientes productos de la más alta calidad, a precios justos. Nuestra cede se encuentra en
                        la ciudad de Guadalajara, Jalisco. Sin embargo, eso no nos detiene de hacer envíos a toda la
                        república.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 main__button">Conoce más sobre nosotros
                            &raquo;</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">

            <div className="row">
                <Card text='En nuestra tienda encontrarás todos los productos de nuestra marca,
                    los cuales son químicos de alta calidad. También podrás encontrar
                    una variedad de estuches de insumos para hidráulica.' 
                    titulo='Visita nuestra tienda'
                    buttontext='Ir a la tienda '
                    page='#'
                />
                <Card text='Llena un formulario de contacto con tus datos, y nosotros nos
                    encargaremos de llamarte o escribirte para darle seguimiento
                    a tus dudas, pedidos, o cualquier otro tema.'
                    titulo='Contactanos' 
                    buttontext='Llenar el formulario '
                    page=''
                />
                <Card titulo='Bolsa de trabajo'
                    text='¿Buscas empleo? Nosotros siempre estamos contratando. Revisa
                    las vacantes disponibles, y selecciona la que más te guste.
                    SI nos gusta tu perfil, te llamaremos para una entrevista.'
                    buttontext='Buscar empleos'
                    page=''
                />
            </div>
        </div> 
        </main>
        
        </section>
         );
    }
}
 
export default MainPage;