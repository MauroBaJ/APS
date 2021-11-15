import React, { useState } from 'react'

export default function FormOpening(props) {

    const [opening, setOpening] = useState({
        id: props.id,
        nombre: '',
        departamento: '',
        descripcion: '',
        identifier : ''
    })

    const {link, id, message} = props;


    const onSubmit = async (e) =>{
        e.preventDefault()
        const body = JSON.stringify(opening);

        const request = await fetch(
            link,
            {
                method: 'POST',
                body: body
            }
        ).catch( e => console.log(e));

        const res = await request.json()
        if(res){
            alert(`Vacante ${message} correctamente`);
            window.location = '/admin'
        }else alert('Ha ocurrido un error');
    }

    const onChange = (e) =>{

        setOpening({...opening, [e.target.name]: e.target.value});
    } 

    return (
        <form className='op__form' onSubmit={e => onSubmit(e)}>
            <fieldset className='op__fieldset'>
                <legend>Datos Generales de la Vacante</legend>
                <div className='op__fieldset__div'>
                    <label for='nombre'>Nombre de la vacante</label>
                    <input name='nombre' id='nombre' type='text'
                    required='required' placeholder='Ej. Auxiliar de almacen'
                    onChange={e => onChange(e)}></input>
                </div>
                <div className='op__fieldset__div'>
                    <label for='departamento'>Departamento</label>
                    <select name='departamento' id='departamento' type='text'
                    required='required' placeholder='Ej. Auxiliar de almacen'
                    name='departamento' id='departamento' onChange={e => onChange(e)}>
                        <option disabled='true' selected='default'>--</option>
                        <option value='Ventas'>Ventas</option>
                        <option value='Almacen'>Almacen</option>
                        <option value='Credito'>Credito y Cobranza</option>
                        <option value='Contabilidad'>Contabilidad</option>
                        <option value='Logistica'>Logistica</option>
                        <option value='Administrativo'>Administrativo</option>
                    </select>
                </div>
            </fieldset>
            <fieldset className='op__fieldset'>
                <legend>Descripcion de la Vacante</legend>
                <div className='op__fieldset__div'>
                <textarea required='required'id='descripcion' name='descripcion' onChange={e => onChange(e)}></textarea>
                </div>
            </fieldset>

            <button className='btn btn-lg btn-primary' value='submit'>
                Agregar Vacante
            </button>

        </form>
    )
}
