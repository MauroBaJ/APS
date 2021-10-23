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
                <Link to={{
                    pathname: '/producto',
                    state: props.idProducto
                }}>
                    <button className='btn btn-lg btn-primary d-block w-100 p-3 fs-2 fw-bold mb-2 mt-2'>Ver articulo</button>
                </Link>
            </div>
        </div>
    )
}
