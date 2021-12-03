import React, { useEffect, useState } from 'react'
import Chart from "react-google-charts"

export default function VentasXEstado(props) {

    const [data, setData] = useState([])

    const meses = ["January", "February", "March",
    "April", "May", "June", "July", "August",
    "September", "October", "November", "December"]
    const currentMonth = new Date();
    let Month = currentMonth.getMonth();

    const getReporteVXE = async () => {
        const body = JSON.stringify({month : meses[Month]})
        const request = await fetch(
            'http://localhost:8000/Reportes/ReporteVentasxEstado.php',
            { method: "POST", body: body }
        ).catch(e => console.log(e))
        const respuesta = await request.json()
        setData(respuesta)
    }

    useEffect( () =>{
        getReporteVXE();
    },[])

    let datos = [
        ['Estado', ['Total']],
    ]
    data.forEach(d =>{
        datos = [...datos, [d.Estado, parseInt(d.Total)]]
    })

    console.log(datos);
    
    return (
        <div>
            <h3 className='display-5'>Ventas x Estado</h3>
            <Chart 
                width={'500px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Cargando Datos</div>}
                data={datos}
                option={{
                    legend:'none',
                    pieSliceText: 'label',
                    title: 'Ventas del Mes por Estado',
                    pieStartAngle: 100
                }}
                rootProps={{ 'data-testid' : 4}}
            />
        </div>
    )
}
