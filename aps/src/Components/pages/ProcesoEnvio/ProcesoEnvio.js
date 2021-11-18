import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Direcciones from './Direcciones';

export default function ProcesoEnvio() {

    const [direcciones, setDirecciones] = useState([]);
    const userID = sessionStorage.getItem('uID');
    let pagos = ''


    const fetchDirecciones = async () =>{
        const body = JSON.stringify(userID);
        const request = await fetch(
            'http://localhost:8000/fetch/fetchAddresses.php',
            {method:'POST', body:body}
        )
        const response = await request.json();
        setDirecciones(response);
    }

    const onSubmit =(e)  =>{
        e.preventDefault();
        localStorage.setItem('direccion', JSON.stringify(pagos));

        window.location = '/carrito/compra/confirmar';
    }

    useEffect(() => fetchDirecciones(), []);
    console.log(direcciones);

    const onChange = (e) => pagos = e.target.value;


    return (
        <div className='m'>
            <main
                className='cont d-flex flex-sm-column flex-md-column flex-lg-row  justify-content-between p-5'>
                <section className='w-100'>
                    <h2 className='display-2 fw-bold text-uppercase mb-5'>Elige una de tus direcciones</h2>
                    <form className='d-flex flex-column' onSubmit={ e => onSubmit(e)}>
                    {direcciones
                    ? direcciones.map( (t) =>
                        <div className='border rounded d-flex w-100'>
                            <input 
                            required='required' onChange={e => onChange(e)}
                             type='radio' value={t.idDireccion} name='direccion'>
                            </input>
                            <div>
                                <h3 className='display-3 fw-bold'>{t.Direccion}</h3>
                                <p className='display-4'>{`${t.Colonia}, ${t.Ciudad}, ${t.Estado}. CP.${t.CP}`}</p>
                            </div>
                        </div>
                    )
                    :<p> parece que no tienes direcciones registradas </p>}
                
                        <button type='submit' className=' m-5 btn btn-primary btn-lg'>
                            Seleccionar Direccion
                        </button>
                    </form>
                </section>
                <p>o</p>
                <aside className='w-100'>
                    <h2 className='display-2 fw-bold text-uppercase mb-5'>Agrega una nueva direccion</h2>
                    <Direcciones />
                </aside>
            </main>
        </div>
    )
}
