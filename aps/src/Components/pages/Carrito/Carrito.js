import React from 'react'
import './Carrito.css'
import {Link} from 'react-router-dom'

export default function Carrito() {

    const str = JSON.parse(localStorage.getItem('products'));

    const total = (str) =>{
        let tot = 0
        str.map( item =>{
            tot += (item.cantidad) * (item.precio)
        })
        return tot
    } 

    const delProduct = (productID) =>{
        let productosAlmacenados = JSON.parse(localStorage.getItem('products'));
        let productos = productosAlmacenados.filter( p => p.id != productID);
        localStorage.setItem('products', JSON.stringify(productos));
        window.location.reload();
    } 

    return (
        <main className='carrito__main'>
            <h1 className='carrito__h1'>Tu carrito de compras</h1>
            <table className='carrito__table'>
                <thead>
                    <tr>
                        <th className='carrito__table__head'>Artículo</th>
                        <th className='carrito__table__head'>Nombre</th>
                        <th className='carrito__table__head'>Cantidad</th>
                        <th className='carrito__table__head'>Precio Unitario</th>
                        <th className='carrito__table__head'>Sub Total</th>
                        <th className='carrito__table__head'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {str 
                    ?str.map( item =>
                        <tr className='carrito__table__trow'>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.cantidad}</td>
                            <td>${item.precio}</td>
                            <td>${ ((item.cantidad) * (item.precio)).toFixed(2) }</td>
                            <td>
                                <btn className='btn__delete' value='Delete'
                                onClick={(e) => {delProduct(item.id)} }>
                                    
                                </btn>
                            </td>
                        </tr>
                    )
                       :<tr></tr>
                }
                </tbody>
                <tfoot className='carrito__foot'>
                    <tr>
                        <td>
                            <b> TOTAL</b>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <b>${total(str).toFixed(2)}</b>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

            <Link to='/carrito/pago' >
                <btn className='btn btn-lg btn-primary'>Proceder al pago</btn>
            </Link>

        </main>
    )
}


/*
delete

function removeProduct(productID){

//logic

    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(
        product => product.productID !== productID
    ;)
    
    localStorage.setItem('products', JSON.stringify(products))

}

*/