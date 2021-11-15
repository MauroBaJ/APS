import React from 'react'
import { Link } from 'react-router-dom'
import './Opening.css'

export default function Opening(props) {
    return (
        <div className='Opening'>
            <h2>{props.titulo}</h2>
            <p>{`${props.descripcion.substring(0, 120)}...`}</p>
            <Link to={{
                pathname:'/vacante',
                state: props.idVacantes
            }}>
                <btn className='btn btn-lg btn-primary'>Ver Vacante &raquo;</btn>
            </Link>
        </div>
    )
}
