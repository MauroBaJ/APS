import './ModificarVacante.css'
import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';

export default function TablaVacantes() {

    const [vacante, setVacante] = useState([]);
    const isAdmin = sessionStorage.getItem('privileges') == 'admin'


    const pedirVacantes = async (e) =>{
        const request = await fetch(
            'http://localhost:8000/fetch/fetchJobs.php',
            { method: 'GET'}
        ).catch(e => console.log(e));
        const p = await request.json()
        if(p) setVacante(p)
    }

    useEffect( () =>{ pedirVacantes();console.log(vacante);}, []);

    const deleteOpening = async (id) =>{
        const identifier = JSON.stringify(id);
        const request = await fetch(
            'http://localhost:8000/delete/deleteOpening.php',
            {
                method: 'POST',
                body:   identifier
            }
        )
        const p = await request.json()
        if(p) window.location.reload()
        else alert(`Ocurrio un error al eliminar la vacante con el id ${id}`);
    }
    

    return (
        isAdmin?

        <div className='m'>
            <main className='mp__contenedor'>
                <h1 className='mp__contenedor__h1'>Vacantes</h1>
                <table className='mp__table'>
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Modificar Vacante</th>
                        <th>Eliminar Vacante</th>
                    </thead>
                    <tbody>
                        {vacante
                            ?vacante.map((v) =>
                                <tr>
                                <td>{v.idVacantes}</td>
                                <td>{v.Nombre}</td>
                                <td>
                                    <Link
                                        to={{
                                            pathname: '/admin/careers/modify/opening',
                                            state: v.idVacantes
                                        }}>
                                            <button className='butn btn-primary'>Modificar Vacante</button>
                                    </Link>
                                </td>
                                <td><button className='butn btn_delete' onClick={(e) => deleteOpening(v.idVacantes)}>Eliminar vacante</button></td>
                                </tr>
                            )
                        :<tr></tr>}
                    </tbody>
                </table>
            </main>
        </div>
            :<Redirect to='/'/>

    )
}
