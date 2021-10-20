import React, { Component } from 'react';
import { NavLink, Link, BrowserRouter as Router } from 'react-router-dom';

import './Card.css'

export default function Card(props) {
    return (
        <div className="col-md-4">
        <div className="card card__container">
            <div className="card-body">
                <h2 className="card-title">{props.titulo}</h2>
                <p className='card__text'>{props.text}
                </p>
                <Link to={props.page}>
                <a className="btn btn-block btn-primary card__button" href="contact.php" role="button">{props.buttontext}&raquo;</a>
                </Link>
            </div>
        </div>
        </div>
    )
}
