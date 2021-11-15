import React from 'react';
import {Link} from 'react-router-dom';
export default function CardImage(props) {
    return (
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 c">
        <div className="col-10 col-sm-8 col-lg-6">
            <img src={props.img} alt="Imagen Hero" width="100%"></img>
        </div>
        <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{props.name}</h1>
            <p className="lead main__text">{props.text}
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link to={props.link}>
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 main__button w-100 d-block mt-2">{props.btntxt}&raquo;</button>
                </Link>
            </div>
        </div>
    </div>
    )
}
