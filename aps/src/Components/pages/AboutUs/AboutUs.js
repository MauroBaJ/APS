import React, { Component } from 'react';

import CardNoButton from '../../CardNoButton/CardNoButton';
import './AboutUs.css'
import CardImage from '../../CardImage/CardImage';





class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return ( 
            <div className='mc'>
            <main className="m-top-100 container-lg">

            <div className='maincard'>
            <CardImage 
            img='https://ik.imagekit.io/MBJ0523/APS/LOGO_FINAL_vector_w61Idqhz4.jpg?updatedAt=1634498445529'
            text='Desde nuestra fundación en 1984, nos hemos comprometido en 
            ofrecerle a nuestros clientes los productos de más alta calidad, a precios justos y 
            accesibles. Nuestro fuerte son los productos para las indrustrias, el 
            sector agrícola, y el servicio pesado. Somos especialistas en refacciones para equipo
            hidráulico. Nuestra gama de productos de marca propia cumplen con los más altos estándares
            del mercado, y no tienes que romper la alcancía par comprarlos.'
            link='https://ik.imagekit.io/MBJ0523/APS/Screenshot_20211017_200429_abgb5NwEno.png?updatedAt=1634519094123'
            btntxt='Encuentranos en Google Maps'
            />
            </div>

            <div className='row d-flex justify-content-between'>
                        <CardNoButton 
                        titulo='Mision'
                        text ='Vero, magni similique reiciendis repellat minima eum
                        suscipit, fugiat at possimus iusto aspernatur quasi facilis, necessitatibus fugit ab
                        officiis nam autem aperiam hic temporibus repellendus ullam? Numquam dolore neque et!'
                        />
                        
                        <CardNoButton 
                        titulo='Vision'
                        text ='Vero, magni similique reiciendis repellat minima eum
                        suscipit, fugiat at possimus iusto aspernatur quasi facilis, necessitatibus fugit ab
                        officiis nam autem aperiam hic temporibus repellendus ullam? Numquam dolore neque et!'
                        />                        
                        <CardNoButton 
                        titulo='Valores'
                        text ='Vero, magni similique reiciendis repellat minima eum
                        suscipit, fugiat at possimus iusto aspernatur quasi facilis, necessitatibus fugit ab
                        officiis nam autem aperiam hic temporibus repellendus ullam? Numquam dolore neque et!'
                        />
                        

                    
            </div>
        
            </main>

            <section class="container-xl d-lg-flex justify-content-lg-center">
                 <div class="row m-top-100 justify-content-lg-center contenedor__text">

                    <p class="text-center mt-5">
                        <b>Teléfono:</b>33-3810-4006
                    </p>


                    <p class="text-center mt-5">
                        Encuentra nuestro centro de soluciones en Pelícano #969, en la colonia Morelos de Guadalajara, Jalisco
                    </p>

                    <div className='d-flex justify-content-center'>
                        <a href='https://goo.gl/maps/MgeZjTJi6Wn8z9XL6'>
                        <img className='imagen-mapa' src='https://ik.imagekit.io/MBJ0523/APS/Screenshot_20211017_200429_abgb5NwEno.png?updatedAt=1634519094123'></img>
                        </a>
                    </div>
                </div>
            </section>
            </div>
         );
    }
}
 
export default AboutUs;