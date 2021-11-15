import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Articulo.css'

export default function Articulo(props) {
    return (
        <div className='articulo__contenedor'>
            <div className='articulo__contenedor__imagen'>
                <img src={props.img} alt={props.nombre}></img>
            </div>
            <div className='articulo__contenedor__texto'>
                <h2>{props.nombre}</h2>
                <h3>Precio: ${props.precio}</h3>
            </div>
            <Link  className='butt' to={{
                    pathname: '/producto',
                    state: props.idProducto
                }}>
                    <button className='btn btn-lg btn-primary p-3 fs-2 fw-bold mb-1 mt-2 b'>Ver articulo</button>
                </Link>
        </div>
    )
}
