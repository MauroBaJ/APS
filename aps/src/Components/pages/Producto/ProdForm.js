import React from 'react'
import { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';

export default function ProdForm(props) {

    const {idProducto, inventario, precio} = props;

    const [cart, setCart] = useState({id : '', cantidad: '', precio: ''});

    const onChange = (e) => {
        setCart( {id : idProducto, cantidad : e.target.value, precio: precio})
    }

    const {id, cantidad} = cart
    
    const onSubmit = (e) =>{
        let product = [];
        e.preventDefault();
        if(localStorage.getItem('products')){
            product = JSON.parse(localStorage.getItem('products'));
        }
        product.push({id: id, cantidad: cantidad, precio: precio})
        localStorage.setItem('products', JSON.stringify(product))
        alert(`Se han agregado ${cantidad} de productos al carrito`)
    }


    return (
        <form className='producto__selector mt-5' onSubmit={(e) => onSubmit(e)}>
        <fieldset className='d-flex p-2 fs justify-content-sb'>
            <label for='cantidad' className='w-25 label'>Cantidad</label>
            <input className='w-75 inp' type='number' value={cantidad || '1'} step='1' id='cantidad' name='cantidad' min='0' max={inventario} onChange={onChange}></input>
        </fieldset>
        <button type='submit' value='submit'
        className='btn btn-lg btn-primary d-block w-100 mt-5'
        >Agregar al carrito</button>
    </form>
    )
}
