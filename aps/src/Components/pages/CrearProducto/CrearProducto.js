import React from 'react'
import FormProduct from '../../FormProduct/FormProduct'
import './CrearProducto.css'
import { useEffect, useState } from 'react'


export default function CrearProducto() {



    return (
        <main className='cp_main'>
            <FormProduct 
            address= 'http://localhost:8000/create/createProduct.php'
            mensaje='Agregado'
            />
        </main >
    )
}
