import React from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "./DrawerToggleButton";
import logo from "./images/sussmods-logo-secondary.png";

export default function MobileNavbar(props) {
  return (
    <header className="mobilenavbar">
      <nav className="mobilenavbar-navigation">
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="spacer" />
        <div className="mobilenavbar-logo">
          <Link to="/">
            <img className="sussmods-logo" src={logo} alt="SUSSMods Logo" />
          </Link>
        </div>
        <div className="spacer" />
        <div className="mobilenavbar-search">search buton here</div>
      </nav>
    </header>
  );
}
