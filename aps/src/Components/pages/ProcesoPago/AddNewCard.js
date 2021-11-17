import React, {useState} from 'react'
import './PP.css'
import Tarjeta from './Tarjeta'
import TarjetaBack from './TarjetaBack'

export default function AddNewCard() {

    const [tarjeta,setTarjeta] = useState(
        {numero: '', nombre: '', month: '', year: '', cvv: ''})

    const onChange = (e) => {
        setTarjeta({...tarjeta, [e.target.name]: e.target.value});
        console.log(tarjeta);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const id = sessionStorage.getItem('uID');
        const body = JSON.stringify({
            cardInfo: tarjeta, userID: id
        })
        const request = await fetch(
            'http://localhost:8000/create/createCard.php',
            {
                method: 'POST', body: body
            }
        ).catch(e => console.log(e));
        const response = await request.json()
        if(response){
            alert('Tarjeta agregada con exito');
            window.location = '/carrito/pago'
        }else alert('Algo salio mal')
    }

    return (
        <div className='m'>
            <main className='cont gr'>
                <aside>
                    <Tarjeta 
                    numero={tarjeta.numero}
                    nombre={tarjeta.nombre}
                    mes={tarjeta.month}
                    year={tarjeta.year}
                    />
                    <TarjetaBack
                    cvv={tarjeta.cvv}
                    />
                </aside>
                <section className='formulario__tarjeta'>
                    <form className='formulario' onSubmit={e => onSubmit(e)}>
                        <fieldset className='formulario__fieldset'>
                            <legend>Numero de la tarjeta</legend>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='numero'>Numero</label>
                                <input required='required' onChange={ e => onChange(e)} type='number' id='numero' name='numero' className='w-100' min='0000000000000000' max='9999999999999999'></input>
                            </div>
                        </fieldset>
                        <fieldset className='formulario__fieldset'>
                            <legend>Fecha de Vencimiento</legend>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='month'>Mes</label>
                                <input required='required' onChange={ e => onChange(e)} type='number' id='month' name='month' className='w-50' min='01' max='12'></input>
                            </div>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='year'>Año</label>
                                <input required='required' onChange={ e => onChange(e)} type='number' id='year' name='year' className='w-50' min='21' max='31'></input>
                            </div>
                        </fieldset>
                        <fieldset className='formulario__fieldset'>
                            <legend>Nombre del titular</legend>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='nombre'>Nombre</label>
                                <input required='required' onChange={ e => onChange(e)} type='text' id='nombre' name='nombre' className='w-100'></input>
                            </div>
                        </fieldset>
                        <fieldset className='formulario__fieldset'>
                            <legend>CVV</legend>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='cvv'>CVV</label>
                                <input min='000' max='9999' required='required' onChange={ e => onChange(e)} type='number' id='cvv' name='cvv' className='w-100'></input>
                            </div>
                        </fieldset>
                        <button type='submit' className='btn btn-lg btn-primary w-100'>
                            Agregar Tarjeta
                        </button>
                    </form>
                </section>
            </main>
        </div>
    )
}
