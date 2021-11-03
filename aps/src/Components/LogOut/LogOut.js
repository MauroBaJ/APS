import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class logOut extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.cerrarSesion = this.cerrarSesion.bind(this)
    }
    render() {
        this.cerrarSesion();
        
        return ( 
            <div>
                <Redirect to='/' />

            </div>
         );
    }

    async cerrarSesion(){
        const r = await fetch(
            'http://localhost:8000/fetch/logOut.php',{
                method: 'GET'
            }
        )
        const res = await r.json();
        if(res){        
            sessionStorage.removeItem('state');
            sessionStorage.removeItem('privileges');
        }
    }
}
 
export default logOut;