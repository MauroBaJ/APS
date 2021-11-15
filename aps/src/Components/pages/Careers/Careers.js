import React from 'react'
import './Careers.css'
import { Link } from 'react-router-dom'

export default function Careers() {
    return (
        <main className='careers__main'>
            <h1 className='careers__h1'>Encuentra el empleo que buscas</h1>


            <div className='careers_detail'>
                <div className='careers_detail__cont'>
                    <h2>¿Por qué trabajar con nosotros?</h2>
                    <p>Somos una empresa <span className='draw'>socialmente responsable</span></p>
                    <p>Ofrecemos <span className='draw'> oportunidades a todos</span>. No importa tu condición física, economica, social, religiosa o amorosa.</p>
                    <p>Somos una empresa <span className='draw'>100% Mexicana</span>, comprometidos con mejorar el pais a traves de<br></br><span className='draw'>practicas responsables con la sociedad y el medio ambiente.</span></p>
                </div>
                <div className='drop'></div>
                <div className='careers_detail__cont'>
                    <h2>¿Qué te ofrecemos?</h2>
                    <ul className='ul'>
                        <li>
                            <p className='draw d-inline mt-1'>Prestaciones de ley</p>
                        </li>
                        <li>
                            <p className='draw d-inline mt-1'>Sueldo competitivo</p>
                        </li>
                        <li>
                            <p className='draw d-inline mt-1'>Gran ambiente laboral</p>
                        </li>
                        <li>
                            <p className='draw d-inline mt-1'>Vales de despensa</p>
                        </li>

                    </ul>
                </div>
                <div className='drop'></div>
                <div className='careers_detail__cont'>
                    <Link to='/viewJobs'>
                        <btn className='btn btn-lg btn-primary'>Ver las vacantes activas</btn>
                    </Link>
                </div>
            </div>
 
        </main>
    )
}
