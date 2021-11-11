import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Admin.css'

export default class Admin extends Component {
    render() {
        return (
            <main className='admin__main'>
                <h1 className='admin__h1'>
                    Panel de Administracion
                </h1>
                <div className='contenedor admin__contenedor'>
                    <Link to='/admin/products/create'>
                        <btn className='btn btn-lg btn-primary adm__btn'>
                            Crear Producto    
                        </btn>
                    </Link>
                    <Link to='/admin/products/modify'>
                        <btn className='btn btn-lg btn-primary adm__btn'>
                            Modificar Producto    
                        </btn>
                    </Link>
                    <Link to='/admin/careers/create'>
                        <btn className='btn btn-lg btn-primary adm__btn'>
                            Crear Vacante    
                        </btn>
                    </Link>
                    <Link to='/admin/careers/modify'>
                        <btn className='btn btn-lg btn-primary adm__btn'>
                            Modificar Vacante
                        </btn>
                    </Link>

                </div>
            </main>
        )
    }
}
