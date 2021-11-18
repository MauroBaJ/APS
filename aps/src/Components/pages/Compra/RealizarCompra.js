import React, { useEffect } from 'react'

export default function RealizarCompra() {

    const carrito = JSON.parse(localStorage.getItem('products'));
    // const carrito = localStorage.getItem('products');
    let articulos = []

    for(let i = 0; i < carrito.length; i++){
        let mut = {
            id : carrito[i].id, cantidad: carrito[i].cantidad
        }
        articulos.push(mut)
    }

    const idUsuario = sessionStorage.getItem('uID');
    const idTarjeta = JSON.parse(localStorage.getItem('tarjeta'));
    const idDireccion = JSON.parse(localStorage.getItem('direccion'))
    const total = localStorage.getItem('Total');


    const carga = {
        idUsuario: idUsuario, idTarjeta: idTarjeta, idDireccion: idDireccion, Articulos: articulos, Total:total
    }

    const realizarCompra = async () =>{
        const body = JSON.stringify(carga);
        
        const request = await fetch(
            'http://localhost:8000/purchase/purchase.php',
            {
                method: 'POST', body: body
            }
            )
    }
    
    realizarCompra()
    alert('Compra realizada con éxito, su pedido se enviará a la breveda');
    window.location = '/';

    return (
        <main className='m'>
            
        </main>
    )
}
