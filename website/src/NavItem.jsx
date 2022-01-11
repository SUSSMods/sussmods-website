import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem(props) {

    return (
        <Link className="nav-item" to={props.navItemRoute}>
            <i className={props.navItemIcon}></i>
            {props.navItemName}
        </Link>
    )
}
