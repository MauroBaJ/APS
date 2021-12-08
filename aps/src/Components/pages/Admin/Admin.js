import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import './Admin.css'

export default class Admin extends Component {

    

    render() {

        const isAdmin = sessionStorage.getItem('privileges') == 'admin'


        return (
            isAdmin ? <main className='admin__main'>
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
                    <Link to='/admin/ventas/mensuales'>
                        <btn className='btn btn-lg btn-primary adm__btn'>
                            Ventas Mensuales
                        </btn>
                    </Link>
                    {/* <Link to='/admin/careers/applier'>
                        <btn className='btn btn-lg btn-primary adm__btn'>
                            Solicitudes de trabajo
                        </btn>
                    </Link> */}

                </div>
            </main>
            :<Redirect to='/' />
        )
    }
}
