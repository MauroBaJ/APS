import React, {useEffect, useState} from 'react'

export default function Direcciones() {

    const userID = sessionStorage.getItem('uID');

    const onChange = (e) => {
        setDireccion({...direccion, [e.target.name] : e.target.value})
    }
    const [direccion, setDireccion] = useState({
        calle:'',
        next:'',
        nint: '',
        colonia:'',
        ciudad:'',
        cp:'',
        estado:''
    })


    const submitNewAddress = async (e) => {
        e.preventDefault();
        const addr = `${direccion.calle} ${direccion.next} ${direccion.nint}`;
        const body = JSON.stringify({
            direccion: addr,
            colonia: direccion.colonia,
            ciudad :direccion.ciudad,
            estado : direccion.estado,
            cp: direccion.cp,
            uID: userID
        });
        const request = await fetch(
            'http://localhost:8000/create/createAddress.php',
            {method: 'POST', body: body}
        )
        const response = await request.json()
        if(response) window.location.reload()
        else alert('Algo salio mal')
    }

    return (
                    <form className='formulario' onSubmit={e => submitNewAddress(e)}>
                        <fieldset className='formulario__fieldset'>
                            <legend>Direccion</legend>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='calle' className='m-2'>Calle</label>
                                <input
                                    id='calle'
                                    name='calle'
                                    required='required'
                                    onChange={e => onChange(e)}
                                    className='w-100'
                                    type='text'></input>
                            </div>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='next' className='m-2'>Numero Exterior</label>
                                <input
                                    id='next'
                                    name='next'
                                    required='required'
                                    onChange={e => onChange(e)}
                                    className='w-100'
                                    type='text'></input>
                            </div>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='nint' className='m-2'>Numero Interior *</label>
                                <input
                                    id='nint'
                                    name='nint'
                                    onChange={e => onChange(e)}
                                    className='w-100'
                                    type='text'></input>
                            </div>
                        </fieldset>
                        <fieldset className='formulario__fieldset'>
                            <legend>Ubicacion</legend>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='colonia' className='m-2'>Colonia</label>
                                <input
                                    id='colonia'
                                    name='colonia'
                                    required='required'
                                    onChange={e => onChange(e)}
                                    className='w-100'
                                    type='text'></input>
                            </div>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='ciudad' className='m-2'>Ciudad</label>
                                <input
                                    id='ciudad'
                                    name='ciudad'
                                    required='required'
                                    onChange={e => onChange(e)}
                                    className='w-100'
                                    type='text'></input>
                            </div>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='cp' className='m-2'>CP</label>
                                <input
                                    id='cp'
                                    name='cp'
                                    required='required'
                                    onChange={e => onChange(e)}
                                    className='w-100'
                                    type='number'
                                    min='00001'
                                    max='99999'></input>
                            </div>
                            <div className='formulario__input d-flex justify-content-between'>
                                <label for='estado' className='m-2'>Estado</label>
                                <input
                                    id='estado'
                                    name='estado'
                                    required='required'
                                    onChange={e => onChange(e)}
                                    className='w-100'
                                    type='text'
                                    ></input>
                            </div>
                        </fieldset>
                        <button className='btn btn-lg btn-primary'>Agregar Direccion</button>
                    </form>
    )
}
