import { Component } from "react"
import React, {useEffect, useState} from 'react'

export default function VentasMensuales(props) {

    const [data, setData] = useState([])

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
    const mesesESP = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ]
    const currentMonth = new Date();
    let Month= currentMonth.getMonth();


    JSON.stringify({month: meses[Month]})

    const getReporteMensual = async () => {
            const body = JSON.stringify({month: meses[Month]})
            const request = await fetch('http://localhost:8000/Reportes/ReporteVentaMensual.php', {
                method: "POST",
                body: body
            }).catch(e => console.log(e))
            const respuesta = await request.json()
            setData(respuesta)
        }

    useEffect(() =>{
        getReporteMensual()
    }, [])





        let totalVentas = 0,
            count = 0;

        data.map(d => {
            count++;                                           
            totalVentas += parseFloat(d.Total)
        })

        const recaudacion = totalVentas
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');

        return (
            <div>
                <section className="ventas_total">
                    <h2 className="display-3">
                        Total de ventas del mes de {mesesESP[Month]}
                    </h2>
                    <p className='fw-bold display-5'>${recaudacion}
                    </p>
                </section>
                <section className="ventas_total">
                    <h2 className="display-4">
                        Numero de ventas
                    </h2>
                    <p className='fw-bold display-6'>{count}
                    </p>
                </section>
            </div>
        )
    }
