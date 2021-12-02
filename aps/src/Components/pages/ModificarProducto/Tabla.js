import React from 'react'
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import FormProduct2 from '../../FormProduct/FormProduct2';

export default function Tabla(props) {


    const [product, setProduct] = useState({})

    const id = props.location.state;
    const isAdmin = sessionStorage.getItem('privileges') == 'admin'


    const pedirProducto = async (id) => {
        const bod = {id: id}
        const load = JSON.stringify(bod);
        const respuesta = await fetch('http://localhost:8000/fetch/fetchProduct.php', {
            method: 'POST',
            body: load
        }).catch(e => console.log(e))

        const exitoso = await respuesta.json()
        setProduct(exitoso[0]);
    };

    useEffect( () => pedirProducto(id), [])

    const {Nombre, Descripcion, Precio, Inventario, Imagen, Categoria} = product;


    return (
        isAdmin?

        <div className='m'>
            <div className='mensaje'>
                <h1>Modificando Producto {Nombre}</h1>
                <p>Sabemos que es tedioso, pero por favor llena todos los campos desde 0.</p>
                <p>Esto lo hacemos para garantizar que el producto quede correctamente formateado.</p>
            </div>
            <FormProduct2
                address = 'http://localhost:8000/update/updateProduct.php'
                mensaje='Modificado'
                id={id}
            />
        </div>
        :<Redirect to='/'/>

    )
}