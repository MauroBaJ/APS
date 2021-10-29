import React, { useEffect, useState } from 'react';
import './Navigation.css'
import {Link} from 'react-router-dom';
import NAV__LINK from './NAV__LINK';
import NAV__LINK_IMG from './NAV__LINK_IMG'

export default function Navigation() {

    const [user, setUser] = useState({
        userType: '',
        loggedIn: ''
    });

    const fetchUserType = async() =>{
        const res = await fetch('http://localhost:8000/fetch/fetchUserType.php')
        .catch(e => console.log(e));

        const success = await res.json();
        const user = success;
        setUser(user);
    }

    useEffect(()=>( fetchUserType() ), []);

    console.log(user);


    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-primary nav__main'>
                
                <div className="container-fluid">
                    <Link to='/'>
                    <p className='navbar-brand'>
                        <picture>
                            <source srcSet='https://ik.imagekit.io/MBJ0523/APS/blanco_aps_sQT13itUCI.webp?updatedAt=1634498445464' type='image/webp' loading='lazy'></source>
                            <source srcSet='https://ik.imagekit.io/MBJ0523/APS/blanco_aps__KOYoM2DU7.png?updatedAt=1634498445794' type='image/png' loading='lazy'></source>
                            <img src='https://ik.imagekit.io/MBJ0523/APS/blanco_aps__KOYoM2DU7.png?updatedAt=1634498445794' alt="Logo enlace a inicio" width="50"></img>
                        </picture>
                    </p>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav__ul d-flex">
                            
                            <NAV__LINK
                                link='/'
                                name='Inicio'
                            />
                            <NAV__LINK 
                                link='/tienda'
                                name='Tienda'
                            />
                            <NAV__LINK 
                                link='/contacto'
                                name='Contacto'
                            />
                            <NAV__LINK 
                                link='/aboutUs'
                                name='Acerca de Nosotros'
                            />
                            <NAV__LINK 
                                link='/careers'
                                name='Bolsa de Trabajo'
                            />
                            <NAV__LINK 
                                link='/login'
                                name='Iniciar Sesion'
                            />
                            <NAV__LINK_IMG
                                link='#'
                                img='https://ik.imagekit.io/MBJ0523/APS/SVG/shopping-cart-outline-svgrepo-com_dOlCXVq-H.svg?updatedAt=1635469301726'
                            />
                            
                        </ul>
                        
                    </div>
{/* 
                <form className="d-none d-lg-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit" className='lupa'>
                        <img src="https://ik.imagekit.io/MBJ0523/APS/SVG/lupa_gbbdmvHIum.svg?updatedAt=1634499120121"alt="Buscar" ></img>
                    </button>
                </form> */}
                </div>
                
            </nav>
        </header>
    )
}


