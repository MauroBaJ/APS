import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './PP.css'
import Tarjeta from './Tarjeta'


export default function ProcesoPago() {

    const [tarjetas, setTarjetas] = useState([]);

    let pagos = ''

    console.log(tarjetas);

    const onChange = (e) => pagos = e.target.value;

    const fetchCards = async () => {
        const userID = sessionStorage.getItem('uID');
        const body = JSON.stringify(userID);
        const request = await fetch(
            'http://localhost:8000/fetch/fetchCards.php',
            { method: 'POST', body: body}
        ).catch( e => console.log(e))
        const cards = await request.json()
        setTarjetas(...tarjetas, cards)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('tarjeta', JSON.stringify(pagos));
        window.location = '/carrito/direccion';
    }

    useEffect( () => fetchCards(), [])

    return (
        <main className='m'>
            <div className='cont'>
                <h1 className='fw-bold text-uppercase mb-3'>Elegir forma de pago</h1>
                <form className='par' onSubmit={ e => onSubmit(e)}>
                    {tarjetas
                    ? tarjetas.map( (t) =>
                        <div className='cont-card'>
                            <input required='required' onChange={e => onChange(e)} type='radio' value={t.idTarjeta} name='tarjeta'></input>
                            <Tarjeta
                            nombre = {t.Nombre}
                            numero = {t.Numero}
                            mes = {t.Month}
                            year = {t.Year}
                            />
                        </div>
                    )
                    :<p> parece que no tienes tarjetas registradas </p>
                    }{
                        tarjetas.length !== 0? <button type='submit' className='btn btn-primary fml'>Usar Tarjeta</button> : <div></div>
                    }
                </form>
                <p className='mt-5'>O</p>
                    <Link to='/carrito/pago/nuevaTarjeta'>
                    <button className='btn btn-lg btn-primary'>
                    Agregar una Tarjeta Nueva
                    </button>
                    </Link>
            </div>
        </main>
    )
}
