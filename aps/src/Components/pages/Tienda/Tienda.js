import React, { Component, useEffect, useState } from 'react';
import Articulo from './Articulo/Articulo';
import './Tienda.css'


function Tienda() {

    const [products, setProducts] = useState([]);

    const pedirProductos = async () => {
        
        const res = await fetch('http://localhost:8000/fetch/fetchProductos.php')
        .catch(error => console.log(error));

        const success = await res.json();
        const products = success
        setProducts(products);
    }

    useEffect(() => (
        pedirProductos()
    ), [])

    return (
        <div className='tienda__main'>
            <h1 className='tienda__titulo'>
                    Nuestra tienda
            </h1>

                <main className='tienda__contenedor'>

                {products.map((product) => 
                    <Articulo 
                        nombre={product.Nombre}
                        descripcion={product.Descripcion}
                        precio={product.precio}
                        inventario={product.Inventario}
                        img={product.Imagen}
                        categoria={product.categoria}
                    />
                )}
                </main>
            
        </div>
    )
}

export default Tienda;