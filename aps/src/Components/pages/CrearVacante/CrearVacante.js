import './CrearVacante.css'
import React from 'react'
import FormOpening from '../../FormOpening/FormOpening'
import { Redirect } from 'react-router-dom'


export default function CrearVacante() {

    const isAdmin = sessionStorage.getItem('privileges') == 'admin'

    return (
        isAdmin?

        <div className='m'>
            <div >
                <h1 
                className='fw-bold textalign-center text-white display-1'>
                    Crear Nueva Vacante
                </h1>
            </div>

            <div className='cv__container'>
                <FormOpening 
                    link='http://localhost:8000/create/createOpening.php'
                    message='Creado'
                />
            </div>
        </div>
        :<Redirect to='/' />
    )
}
