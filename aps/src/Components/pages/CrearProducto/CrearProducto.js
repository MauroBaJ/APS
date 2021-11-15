import React from 'react'
import FormProduct from '../../FormProduct/FormProduct'
import './CrearProducto.css'
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'


export default function CrearProducto() {

    const isAdmin = sessionStorage.getItem('privileges') == 'admin'

    return (
        isAdmin?
        <main className='cp_main'>
            <FormProduct 
            address= 'http://localhost:8000/create/createProduct.php'
            mensaje='Agregado'
            />
        </main >
        :<Redirect to='/' />
    )
}
