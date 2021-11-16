import { Toast } from 'bootstrap';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './Login.css'

class Login extends Component {State
    constructor(props) {
        super(props);
        this.state = { email : '', password : '', redirect: null  };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.fallo = this.fallo.bind(this);
    }


    render() { 

     if(this.state.redirect) return <Redirect to ={this.state.redirect} />
        return ( 

            <div className='cent'>
                <div className='login__main'>
                    <main className='form-signin text-center'>

                        <form  className='Formulario' onSubmit={this.handleSubmit}>
                            <img className='mb-4 ' width='72' height='57' src='https:ik.imagekit.io/MBJ0523/APS/LOGO_FINAL_vector_w61Idqhz4.jpg?updatedAt=1634498445529' alt='Logotipo APS'></img>
                            <h1 className='h3 mb-3 fw-normal'>Iniciar Sesión</h1>
                                <div class="form-floating form__campo">
                                    <input required type="email" name="email" class="form-control" id="email" onChange={this.handleInputChange}></input>
                                    <label for="email">Direccion de Correo</label>
                                </div>
                                <div class="form-floating form__campo">
                                    <input required type="password" name="password" class="form-control" id="password" onChange={this.handleInputChange}></input>
                                    <label for="password">Contraseña</label>
                                </div>

                                <button className="w-100 btn btn-lg btn-primary login__boton"  type='submit' value='Submit'>Iniciar Sesión</button>
                                
                                <p className='login__register'>No tienes cuenta? <Link to='/register'><span className='createAcc'>Registrate</span></Link></p>
  

                        </form>
                    </main>
                </div>
            </div>
         );
    }

    

    fallo(a){
        if(a){
            alert('Credenciales incorrectas, vuelva a intentarlo por favor');
        }

    }


    async handleSubmit(event) {
        event.preventDefault();

        const carga = JSON.stringify(this.state);
        const respuesta = await fetch('http://localhost:8000/fetch/fetchLogin.php', {
                method: "POST",
                body: carga
            })
            .catch(err => console.log(err.data));

        const exitoso = await respuesta.json();
        if (exitoso) {
            if(exitoso[1] == 'USER'){
                sessionStorage.setItem('state', true)
                sessionStorage.setItem('privileges', 'user')
                sessionStorage.setItem('uID', exitoso[2][0].idUsuario);
            }else{
                sessionStorage.setItem('state', true)
                sessionStorage.setItem('privileges', 'admin')
            }
            this.setState({redirect : '/'})
        } else {
            this.fallo(true);
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
      }



}
 
export default Login;