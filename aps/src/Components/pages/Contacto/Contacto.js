import './Contacto.css'

import React from 'react'

export default function Contacto() {
    return (
            <main className='contacto__main'>
                <div className='p-5'>
                    <h1 className='text-center fs-1 fw-bold text-uppercase text-white'>Contáctanos</h1>
                    <p className='mt-3 fs-3 text-center text-white'><em>Envíanos un mensaje y nosotros intentaremos
                    responder a la brevedad.</em></p>
                </div>

                <form action='mailto:cm@aps.com.mx' method='GET' encType='text/plain'
                className='contacto__form'>
                    <fieldset className='contacto__fieldset'name='Nombre'>
                        <div className='contacto__lmi'>
                            <input id='name' type='text' name='name' className='contacto__input__text'></input>
                            <label for='name' className='contacto__label'>Ingrese su nombre</label>
                        </div>
                        <div className='contacto__lmi'>
                            <input id='apellidos' type='text' name='apellidos' className='contacto__input__text'></input>
                            <label for='telefono' className='contacto__label'>Ingrese sus apellidos</label>
                        </div>
                    </fieldset>
                    <fieldset className='contacto__fieldset'name='Nombre'>
                        <div className='contacto__lmi'>
                            <input id='email'  type='email' name='email' className='contacto__input__text'></input>
                            <label for='email' className='contacto__label'>Ingrese su correo electronico</label>
                        </div>
                        <div className='contacto__lmi'>
                            <input id='telefono' type='number' name='telefono' className='contacto__input__text'></input>
                            <label for='telefono' className='contacto__label'>Ingrese su telefono</label>
                        </div>
                    </fieldset>
                    <fieldset className='contacto__fieldset'>
                        <h2 className='text-center fs-2 fw-bold text-uppercase ph' >Escribe tu mensaje</h2>
                        <textarea className='contacto__textarea'></textarea>
                    </fieldset>

                    <div className='contacto__fieldset'>
                        <button type='submit' value='submit'
                            className='ph btn btn-primary btn-lg'
                        > Enviar formulario</button>
                    </div>
                </form>
            </main>
    )
}
