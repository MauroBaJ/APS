import React, { useState } from 'react';
import { Redirect } from 'react-router';
import './CreateAccount.css'

export const CreateAccount = () => {

    const [user, setUser] = useState({
        Nombre: '',
        ApellidoP: '',
        ApellidoM: '',
        Email: '',
        Password: '',
        Password2: '',
        Telefono: ''
    });

    const { Nombre, ApellidoP, ApellidoM, Email, Password, Password2, Telefono } = user;
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        if (Password !== Password2) {
            alert('Las contraseñas no coindicen');
            return;
        }
        const newUser = {
            Nombre,
            ApellidoP,
            ApellidoM,
            Email,
            Password,
            Password2,
            Telefono
        };

        const body = JSON.stringify(newUser);
        console.log(body);
        const respuesta = await fetch('http://localhost:8000/create/createUser.php', {
            method: 'POST',
            body: body
        })
        .catch(e = () => console.log(e))

        alert('Usuario registrado, ahora debe iniciar sesion');
        window.location.href = '/login'

    }

    


    return (
        <div className='register__main'>
            <div className='register__cont'>
                <img className='register__cont__img' 
                src='https://ik.imagekit.io/MBJ0523/APS/Login_vLr2phO4m.png?updatedAt=1634498445211'
                alt='Imagen del formulario de registro'
                >
                </img>
            </div>
            <div className='register__cont  form-signin'>
                <form className='register__form ' onSubmit={(e) => onSubmit(e)}>
                    <h1 className='text-center fw-bold mt-3'>Regístrate</h1>

                    
                   <fieldset className='form__campo'>
                        <label for='Nombre' className='form__label' >Ingrese su nombre</label>
                        <input required type='text' name='Nombre' id='Nombre' className='form__input' onChange={onChange}></input>
                    </fieldset>

                    <fieldset className='form__campo'>
                        <label for='ApellidoP' className='form__label' >Ingrese su Apellido Paterno</label>
                        <input required type='text' name='ApellidoP' id='ApellidoP' className='form__input' onChange={onChange}></input>
                    </fieldset>

                    <fieldset className='form__campo'>
                        <label for='ApellidoM' className='form__label' >Ingrese su Apellido Materno*</label>
                        <input type='text' name='ApellidoM' id='ApellidoM' className='form__input' onChange={onChange}></input>
                    </fieldset>
                    
                    <fieldset className='form__campo'>
                        <label for='Email' className='form__label' >Ingrese su Correo Electronico</label>
                        <input required type='email' name='Email' id='Email' className='form__input'onChange={onChange}></input>
                    </fieldset>

                    <fieldset className='form__campo'>
                        <label for='Password' className='form__label' >Ingrese su Contraseña</label>
                        <input required type='password' name='Password' id='Password' className='form__input' onChange={onChange}></input>
                    </fieldset>

                    <fieldset className='form__campo'>
                        <label for='Password2' className='form__label' >Confirme su Contraseña</label>
                        <input required type='password' name='Password2' id='Password2' className='form__input'onChange={onChange} ></input>
                    </fieldset>

                    <fieldset className='form__campo'>
                        <label for='Telefono' className='form__label' >Ingrese su teléfono</label>
                        <input required type='number' name='Telefono' id='Telefono' className='form__input'onChange={onChange}></input>
                    </fieldset>

                    <p><em>* - Opcional</em></p>

                    <button type='submit' value='submit' className='btn btn-large btn-primary d-block w-100 mt-2 mb-2 p-2 fw-bold'>Registrarme</button>
                </form>
            </div>
        </div>
    )
}