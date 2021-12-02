import React from 'react'
import './FP.css'
import { useEffect, useState } from 'react'

export default function FormProduct(props) {

    const [product, setProduct] = useState({
        id: props.id,
        nombre: '',
        descripcion: '',
        precio: '',
        inventario: '',
        imagen: '',
        categoria: ''
    })

    const {Nombre, Descripcion, Precio, Inventario, Imagen, Categoria, id} = product;
    const address = props.address, mensaje = props.mensaje;

    const onChange = (e) => setProduct({...product, [e.target.name]: e.target.value});

    const onSubmit = async (e)  =>{
        e.preventDefault();
        const body = JSON.stringify(product);
        console.log(product);
        
        const request = await fetch(
            address,
            {
                method: 'POST',
                body: body
            }
            ).catch((e) => console.log(e));
        const response = await request.json();
        if(response) {
            alert(`Producto ${mensaje} Correctamente`)
            window.location = '/admin'
        }
        else alert('Ocurrio un error agregando el producto')
    }

    return (
        <div className='contenedor_formulario'>
            <form onSubmit={onSubmit}>
                <fieldset className='formulario__fieldset'>
                    <legend>Datos del producto</legend>
                    <div className='formulario__input'>
                        <label for='nombre' className='formulario__input__label'>Nombre del producto</label>
                        <input onChange={onChange} type='text' className='formulario__input__input' required='required' id='nombre' name='nombre'></input>
                    </div>
                    <div className='formulario__input'>
                        <label for='precio' min='0' className='formulario__input__label'>Precio del producto</label>
                        <input onChange={onChange} type='number' className='formulario__input__input' required='required' id='precio' name='precio'></input>
                    </div>
                    <div className='formulario__input'>
                        <label for='categoria' className='formulario__input__label'>Categoria</label>
                        <select className='formulario__input__input' id='categoria' name='categoria' onChange={onChange}>
                            <option disabled='true' selected='selected'>---</option>
                            <option id='quimicos' value='quimicos'>Quimicos</option>
                            <option id='herramienta' value='herramienta'>Herramienta</option>
                            <option id='empaques' value='empaques'>Empaques</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className='formulario__fieldset'>
                    <legend>Gestion del Producto</legend>
                    <div className='formulario__input'>
                        <label for='inventario' className='formulario__input__label'>Inventario del producto</label>
                        <input onChange={onChange} type='number' className='formulario__input__input' required='required' id='inventario' name='inventario'></input>
                    </div>
                    <div className='formulario__input'>


                            <label for='imagen' className='formulario__input__label'>Imagen del producto <a href='https://imagekit.io/dashboard#media-library/folders=L0FQUy9Qcm9kdWN0b3M='>(Mediante CDN)</a></label>
                            <input onChange={onChange} type='text' className='formulario__input__input' required='required' id='imagen' name='imagen'></input>

                    </div>
                </fieldset>
                <fieldset className='formulario__fieldset'>
                    <legend >Descripcion del producto</legend>
                    <textarea onChange={onChange} className='formulario__input__textarea' id='descripcion' name='descripcion'></textarea>
                </fieldset>
                <button className='btn btn-primary btn-lg' value='submit'>
                    Guardar Producto
                </button>
            </form>
        </div>
    )
}