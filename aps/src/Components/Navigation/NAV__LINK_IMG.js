import React from 'react'
import { NavLink, Link, BrowserRouter as Router } from 'react-router-dom';


export default function NAV__LINK(props) {
    return (
        <div>
            <li className="nav-item nav__item_img">
                <Link to={props.link}>
                    <img src={props.img} className='img'></img>
                </Link>
            </li>
        </div>
    )
}