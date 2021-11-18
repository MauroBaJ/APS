import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Compra() {


    const [compra, setCompra] = useState([])
    const idUsuario = sessionStorage.getItem('uID');
    const tarjeta = JSON.parse(localStorage.getItem('tarjeta'));
    const direccion = JSON.parse(localStorage.getItem('direccion'))
    const total = localStorage.getItem('Total');
    let datos = {Nombre :'', Numero : '', Direccion: ''}


    const fetchDetails = async () =>
    {
        const body = JSON.stringify({
            idUsuario: idUsuario,
            idTarjeta: tarjeta,
            idDireccion: direccion
        });
        const request = await fetch(
            'http://localhost:8000/fetch/fetchDetails.php',
            {
                method:'POST', body:body
            }
        ).catch((e) => console.log(e))
        const response = await request.json()
        setCompra(response)
        }
    
    useEffect( () =>{
        fetchDetails()
    }, [])

    

    const CancelarCompra = (e) =>{
        localStorage.removeItem('direccion');
        localStorage.removeItem('tarjeta');
        alert('Se ha cancelado su compra');
        window.location = '/carrito'
    }

    return (
        <main className='m'>
            <section className='cont'>
                <h1
                className='fw-bold text-center
                display-2 text-uppercase m-5'>
                    Confirmar su compra
                </h1>

                <div className='container'>
                    <div className='row'>
                        <h3 className='display-4'>
                       {compra? compra.map( (datos) =>
                       `${datos.Nombre}, ha seleccionado pagar $${total}
                        con la tarjeta terminacion
                        ${datos.Numero.slice(-4)}
                        y enviarlo a la direccion
                        ${datos.Direccion}`):
                        'Ha ocurrido un error'}
                        </h3>
                    </div>
                    <div className='row m-5 p-3'>
                        <div className='col'>
                            <Link to='/carrito/compra/realizar'>
                            <button className='btn btn-lg btn-primary'>
                                Si, confirmar compra
                            </button>
                            </Link>
                            
                        </div>
                        <div className='col'>
                            <button className='btn btn-lg btn-danger' onClick={(e) => CancelarCompra(e)}>
                                No, cancelar compra
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}
