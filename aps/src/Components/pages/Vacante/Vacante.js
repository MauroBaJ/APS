import React, {useEffect, useState} from 'react'
import './Vacante.css'
import VacanteForm from './VacanteForm';

export default function Vacante(props) {

    const [vacante,
        setVacante] = useState([]);


    const pedirVacante = async() => {
        const id = {
            id: props.location.state
        }
        const load = JSON.stringify(id);

        const res = await fetch('http://localhost:8000/fetch/fetchJob.php', {
            method: 'POST',
            body: load
        }).catch(e => console.log(e));

        const exitoso = await res.json()
        setVacante(exitoso[0]);
    }

    useEffect(() => {
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
                    empleados que nunca se les rechazara por razones como apariencia y/o condicion
                    fisica, culto religioso, nacionalidad, color de piel, sexo o preferencia sexual.
                </p>
            </div>
            <div className='vacante__form'>
                <VacanteForm 
                id={idVacantes}
                />
            </div>
        </main>
    )
}
