import React from 'react'
// import ',/Carrito.css'

export default function Carrito() {

    const str = JSON.parse(localStorage.getItem('products'));

    return (
        <main className='carrito__main'>
            <table className='carrito__table'>
                <thead>
                    <tr>
                        <th>Artículo</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Sub Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {str.map( item =>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.precio}</td>
                        <td>{ (item.cantidad) * (item.precio) }</td>
                        <td>hola</td>
                    </tr>
                )}
                </tbody>
            </table>
        </main>
    )
}


/*
delete

function removeProduct(productID){

//logic

    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(
        product => product.productID !== productID
    ;)
    
    localStorage.setItem('products', JSON.stringify(products))

}

*/