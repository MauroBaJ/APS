import React, { Component } from 'react';
import './CardNoButton.css'

export default function Card(props) {
    return (
        <div className="col-md-4">
        <div className="card card__container">
            <div className="card-body">
                <h2 className="card-title card__title">{props.titulo}</h2>
                <p className='card__text'>{props.text}
                </p>
            </div>
        </div>
        </div>
    )
}
