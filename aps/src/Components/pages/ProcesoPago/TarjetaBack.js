import React from 'react'

export default function TarjetaBack(props) {
    return (
        <div>
            <div class="tar_cont tar--back">
                <div class="card__strip"></div>
                <div className='con'>
                    <div class="card__signature"></div>
                    <div class="card__ccv">{props.cvv}</div>
                </div>
        </div>
        </div>
    )
}
