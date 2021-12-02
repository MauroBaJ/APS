import './ModificarVacante.css'
import { Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import FormOpening2 from '../../FormOpening/FormOpening2';

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
        setVacante(p[0])
    }

    useEffect(() => {
        pedirVacante(id)
    }, [])

    const {idVacantes} = vacante;

    return (
        isAdmin?

        <div className='m'>
            <div className='mensaje'>
                <h1>Modificando Vacante</h1>
            </div>
            <main className='cv__container'>
            <FormOpening2
            link='http://localhost:8000/update/updateVacante.php'
            id={idVacantes}
            message='Actualizada'
            />

            </main>
        </div>
                :<Redirect to='/'/>

    )
}
