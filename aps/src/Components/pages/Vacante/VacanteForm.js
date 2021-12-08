import React, {useState} from 'react'

export default function VacanteForm(props) {
    const [aplicante,
        setAplicante] = useState({
            Name : '',
            ApellidoP: '',
            ApellidoM: '',
            Email: '',
            Telefono: ''
        })

    const idVacante = props.id;
        

    const onChange = (e) => setAplicante({
        ...aplicante,
        [e.target.name]: e.target.value
    })

    const body = { idVacante : idVacante, aplicante: aplicante}

    const onSubmit = async (e) => {
        e.preventDefault()
        const b = { idVacante : idVacante, aplicante: aplicante}
        const body = JSON.stringify(b)
        const request = await fetch(
             'http://localhost:8000/create/createApplier.php',
             {method: 'POST', body: body}
         ).catch(e => console.log(e))
        const response = await request.json()
        if(response){
            alert("Listo, ya entraste a nuestro buzon de aplicantes");
            window.location = "/"
        }
    }
    return (
        <form className='vacante__form__parent' onSubmit={onSubmit}>
            <fieldset>
                <legend>Tus datos personales</legend>
                <div className='vacante__form__input'>
                    <label for='Name'>Tu nombre</label>
                    <input onChange={onChange} required='required' type='text' name='Name' id='Name'></input>
                </div>
                <div className='vacante__form__input'>
                    <label for='ApellidoP'>Tu Apellido Paterno</label>
                    <input onChange={onChange} required='required' type='text' name='ApellidoP' id='ApellidoP'></input>
                </div>
                <div className='vacante__form__input'>
                    <label for='ApellidoM'>Tu Apellido Materno</label>
                    <input onChange={onChange} required='required' type='text' name='ApellidoM' id='ApellidoM'></input>
                </div>
            </fieldset>
            <fieldset>
                <legend>Tus datos de contacto</legend>
                <div className='vacante__form__input'>
                    <label for='Email'>Tu Correo Electronico</label>
                    <input onChange={onChange} required='required' type='email' name='Email' id='Email'></input>
                </div>
                <div className='vacante__form__input'>
                    <label for='Telefono'>Tu Telefono</label>
                    <input onChange={onChange} required='required' type='number' name='Telefono' id='Telefono' min ="1111111111" max='9999999999'></input>
                </div>
            </fieldset>
            <button
                type='submit'
                className='btn btn-lg btn-primary w-100 mt-3'
                value='submit'>Aplicar</button>
        </form>
    )
}
