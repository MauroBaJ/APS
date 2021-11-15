
import './Producto.css'
import React, { useEffect, useState } from 'react';
import ProdForm from './ProdForm';

export default function Producto(props) {

    const [producto, setProducto] = useState({})

    const pedirProducto = async () => {
        const id = {id : props.location.state}
        const load = JSON.stringify(id);

        const respuesta = await fetch('http://localhost:8000/fetch/fetchProduct.php', {
            method: 'POST',
            body: load
        }).catch(e => console.log(e))

        const exitoso = await respuesta.json()
        setProducto(exitoso[0]);
    };

    useEffect(() => {
        pedirProducto()
    }, {});

    const {Nombre, Descripcion, Precio, Inventario, Imagen, Categoria} = producto;

    return (
        <div className='producto__contenedor'>
            <p className='producto__categoria'>Categoria: {Categoria}</p>
            <div className='producto__contenedor__imagen'>
                <img src={Imagen} alt={Nombre}></img>
            </div>
            <div className='producto__contenedor__texto'>
                <h1 className='producto__nombre'>
                    {Nombre}
                </h1>
                <h2 className='producto__precio'><em>${Precio}</em></h2>
                <ProdForm
                idProducto={props.location.state}
                nombre={Nombre}
                inventario={Inventario}
                precio={Precio}
                />

                <p className='producto__descripcion'>{Descripcion}</p>
            </div>
        </div>
    )
}