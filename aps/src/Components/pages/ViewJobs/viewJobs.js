import React, { Component, useEffect, useState } from 'react';
import Opening from './Opening/Opening';
import './viewJobs.css'

function ViewJobs() {

    const [jobs, setJobs] = useState([]);

    const pedirTrabajos = async () => {
        const res = await fetch('http://localhost:8000/fetch/fetchJobs.php')
        .catch(e => console.log(e));
        
        const success = await res.json();
        const trabajos = success;
        setJobs(trabajos);
    }

    useEffect( () => pedirTrabajos(), [])

    

    return (
        
        <div className='portal__main'>
            <h1 className='portal__titulo'>Vacantes Disponibles</h1>
            <main className=' portal__contenedor'>
                {jobs.map(job => 
                    
                    <Opening
                    titulo = {job.Nombre}
                    descripcion = {job.Descripcion}
                    idVacantes = {job.idVacantes}
                    />
                )}
            </main>
        </div>
    )
}

export default ViewJobs;