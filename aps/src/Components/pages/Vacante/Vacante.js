import React, {useEffect, useState} from 'react'
import './Vacante.css'

export default function Vacante(props) {

    const [vacante, setVacante] = useState([]);

    const pedirVacante = async () => {
        const id = {id: props.location.state}
        const load = JSON.stringify(id);

        const res = await fetch('http://localhost:8000/fetch/fetchJob.php', {
            method: 'POST',
            body: load,
        }).catch(e => console.log(e));

        const exitoso = await res.json()
        setVacante(exitoso[0]);
    }

    useEffect( () => {
        pedirVacante()
    }, {})

    const {idVacantes, Nombre, Categoria, Descripcion} = vacante;
    return (
        
        <main className='vacante__main'>
            <div className='vacante__datos'>
                <h1>{Nombre}</h1>
                <h2>Departamento: {Categoria}</h2>
                <p>{Descripcion}</p>
                <p>En Artefactos Pernos y Seguros estamos comprometidos con nuestros empleados.
                Nuestras politicas empresariales cero discriminacion le aseguran a todos los
                empleados que nunca se les rechazara por razones como apariencia y/o condicion fisica, culto
                religioso, nacionalidad, color de piel, sexo o preferencia sexual.
                </p>
            </div>
            <div className='vacante__form'>
                <form className='vacante__form__parent'>
                    <fieldset>
                        <legend>Tus datos personales</legend>
                        <div className='vacante__form__input'>
                            <label for='Nombre'>Tu nombre</label>
                            <input required='required' type='text' name='Nombre' id='Nombre'></input>
                        </div>
                        <div className='vacante__form__input'>
                            <label for='ApellidoP'>Tu Apellido Paterno</label>
                            <input required='required' type='text' name='ApellidoP' id='ApellidoP'></input>
                        </div>
                        <div className='vacante__form__input'>
                            <label for='ApellidoM'>Tu Apellido Materno</label>
                            <input required='required' type='text' name='ApellidoM' id='ApellidoM'></input>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Tus datos de contacto</legend>
                        <div className='vacante__form__input'>
                            <label for='Email'>Tu Correo Electronico</label>
                            <input required='required' type='email' name='Email' id='Email'></input>
                        </div>
                        <div className='vacante__form__input'>
                            <label for='Telefono'>Tu Telefono</label>
                            <input required='required' type='number' name='Telefono' id='Telefono'></input>
                        </div>
                    </fieldset>
                    <button type='submit' className='btn btn-lg btn-primary w-100 mt-3' value='submit'>Aplicar</button>
                </form>
            </div>
        </main>
    )
}
