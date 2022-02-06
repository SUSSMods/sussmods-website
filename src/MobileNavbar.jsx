import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";

const MobileNavbar = (props) => (
  <header className="mobilenavbar">
    <nav className="mobilenavbar-navigation">
      <div>
        <DrawerToggleButton click={props.DrawerClickHandler} />
      </div>
      <div className="spacer" />
      <div className="mobilenavbar-logo">LOGO HERE</div>
      <div className="spacer" />
      <div className="mobilenavbar-search">search buton here</div>
    </nav>
  </header>
);

export default MobileNavbar;
