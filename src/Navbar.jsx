import React from 'react';
import NavItem from './NavItem';
import { Link } from "react-router-dom";
import logo from './images/sussmods-logo-secondary.png'

export default function Navbar() {
    return (
        <>
            <div className="sidenav">
                <Link to="/">
                    <img className="sussmods-logo"
                        src={logo}
                        alt="SUSSMods Logo" />
                </Link>

                <nav className="nav-container">

                    <NavItem
                        navItemRoute="/"
                        navItemIcon="fa fa-fw fa-book icon"
                        navItemName="All Modules"
                    />

                    <NavItem
                        navItemRoute="saved-modules"
                        navItemIcon="fa fa-fw fa-calendar icon"
                        navItemName="Saved Modules"
                    />

                </nav>
            </div>
        </>
    )
}