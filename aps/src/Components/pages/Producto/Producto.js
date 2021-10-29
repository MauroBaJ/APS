
import './Producto.css'
import React, { useEffect, useState } from 'react';

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
                <form className='producto__selector mt-5'>
                    <fieldset className='d-flex p-2 fs justify-content-sb'>
                        <label for='cantidad' className='w-25 label'>Cantidad</label>
                        <input className='w-75 inp' type='number' step='1' min='0' max={Inventario}></input>
                    </fieldset>
                    <button type='submit' value='submit'
                    className='btn btn-lg btn-primary d-block w-100 mt-5'
                    >Agregar al carrito</button>
                </form>

                <p className='producto__descripcion'>{Descripcion}</p>
            </div>
        </div>
    )
}