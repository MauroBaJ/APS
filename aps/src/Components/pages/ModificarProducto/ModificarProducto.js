import React from 'react'
import './MP.css'
import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'


export default function ModificarProducto() {

    const [productos, setProductos] = useState([]);

    const isAdmin = sessionStorage.getItem('privileges') == 'admin'

    const pedirProductos = async () =>{
        const res = await fetch(
            'http://localhost:8000/fetch/fetchProductos.php',
            {
                method: 'GET'
            }
        )
        const p = await res.json();
        if(p){
            setProductos(p)
        }
    }

    const deleteProduct = async (id) =>{
        const identifier = JSON.stringify(id);
        const request = await fetch(
            'http://localhost:8000/delete/deleteProduct.php',
            {
                method: 'POST',
                body:   identifier
            }
        )
        const p = await request.json()
        if(p) window.location.reload()
        else alert(`Ocurrio un error al eliminar el producto con el id ${id}`);
    }
    useEffect(
        () =>{ pedirProductos()}, []
    )

    return (
        isAdmin?
        <main className='main'>
        <div className='mp__contenedor'>
            <h1 className='mp__contenedor__h1'>Productos</h1>
            
            <table className='mp__table'>
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Inventario</th>
                    <th>Modificar Producto</th>
                    <th>Eliminar Producto</th>
                </thead>
                <tbody>
                    {productos
                    ?productos.map( (p) =>
                            <tr>
                                <td>{p.idProducto}</td>
                                <td>{p.Nombre}</td>
                                <td>{p.Precio}</td>
                                <td>{p.Inventario}</td>
                                <td>
                                    <Link
                                    to={{
                                        pathname: '/admin/products/modify/product',
                                        state: p.idProducto
                                    }}>
                                        <button className='butn btn_modify'>Modificar producto</button>
                                    </Link>
                                </td>
                                <td><button className='butn btn_delete' onClick={(e) => deleteProduct(p.idProducto)}>Eliminar producto</button></td>

                            </tr>
                    )
                    :<tr></tr>

                    }
                </tbody>
            </table>
        </div>
    </main>
    :<Redirect to='/'/>
    )
}
