import React, { useState, useEffect } from 'react'


export default function ReporteMejoresClientes() {

    const [data, setData] = useState([])

    const currentMonth = new Date();
    let Month= currentMonth.getMonth();

    const meses = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const getReporteClientes = async () => {
        const body = JSON.stringify({month: meses[Month]})
        const request = await fetch('http://localhost:8000/Reportes/ReporteMejoresClientes.php', {
            method: "POST",
            body: body
        }).catch(e => console.log(e))
        const respuesta = await request.json()
        setData(respuesta)
    }

    console.log(data);

    useEffect(() =>{
        getReporteClientes()
    }, [])
    return (
        <div className='ventas_total'>
            <h2 className="h2-ventas">Mejores Clientes del mes</h2>
            {data?
                data.map(d =>
                    <p className='cantidad-ventas'>
                        <span className='fw-bold'>{d.Nombre}</span>: 
                        Compras realizadas en el mes: {d.Cantidad}.
                        Monto gastado : ${parseFloat(d.Monto)}
                    </p>
                )
                :
                <div>
                <h2>Parece que este mes no has recibido compras</h2>
                </div>
            }
        </div>
    )
}
