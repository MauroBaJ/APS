import React, { useState } from 'react'
import VentasMensuales from './VentasMensuales'
import './Reportes.css'
import VentasXEstado from './VentasXEstado'
import ReporteMejoresClientes from './ReporteMejoresClientes'

export default function Reportes() {

    return (
        <main className='m'>
            <div className='cont'>
               
                <article className='reportes_acomodo'>
                    <div className='contenedor_reporte ra'>
                    <VentasMensuales />
                    </div>

                    <div className='contenedor_reporte rc'>
                    <ReporteMejoresClientes />
                    </div>

                    <div className="contenedor_reporte rb">
                    <VentasXEstado />
                    </div>
                </article>
            </div>
        </main>
    )
}
