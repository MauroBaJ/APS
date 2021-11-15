import './ModificarVacante.css'
import { Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import FormOpening from '../../FormOpening/FormOpening';

export default function ModificarVacante(props) {

    const [vacante, setVacante] = useState({})

    const id = props.location.state;
    const isAdmin = sessionStorage.getItem('privileges') == 'admin'


    const pedirVacante = async (id) => {
        const load = {id: id}
        const body = JSON.stringify(load);
        const request = await fetch(
            'http://localhost:8000/fetch/fetchJob.php',
            {method: 'POST', body: body}
        ).catch(e => console.log(e));
        const p = await request.json();
        setVacante(p)
    }

    useEffect(() => {
        pedirVacante(id)
    }, [])

    const {Nombre} = vacante;

    return (
        isAdmin?

        <div className='m'>
            <div className='mensaje'>
                <h1>Modificando Vacante {Nombre}</h1>
                <p>Sabemos que es tedioso, pero por favor llena todos los campos desde 0.</p>
                <p>Esto lo hacemos para garantizar que la vacante quede correctamente formateada.</p>
            </div>
            <main className='cv__container'>
            <FormOpening
            link='http://localhost:8000/update/updateVacante.php'
            id={id}
            message='Actualizada'
            />

            </main>
        </div>
                :<Redirect to='/'/>

    )
}
