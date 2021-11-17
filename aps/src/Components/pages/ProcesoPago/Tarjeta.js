import React from 'react'

export default function Tarjeta(props) {

    const numero = formatNum(props.numero)

    return (
        <div className='tar_cont'>
            <h3 className='tar_num'>{numero}</h3>
            <h4 className='tar_name'>{props.nombre}</h4>
            <div className='tar_date'>
                <p className='tar_date_m'>{props.mes}</p>
                <p className='tar_date_slash'>/</p>
                <p className='tar_date_y'>{props.year}</p>
            </div>
        </div>
    )
}


function formatNum(s){
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}