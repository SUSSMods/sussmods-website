import React from "react";
import { Link } from "react-router-dom";

// import DrawerToggleButton from "./DrawerToggleButton";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "./images/sussmods-logo-secondary.png";
import SearchIcon from '@mui/icons-material/Search';

// TODO: Insert search
export default function MobileNavbar(props) {
  return (
    <header className="mobilenavbar">
      <nav className="mobilenavbar-navigation">
        <div>
          {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
          <MenuIcon fontSize="large" style={{ color: "#fff" }} onClick={props.drawerClickHandler}/>
        </div>
        <div className="spacer" />
        <div className="mobilenavbar-logo">
          <Link to="/">
            <img className="sussmods-logo" src={logo} alt="SUSSMods Logo" />
          </Link>
        </div>
        <div className="spacer" />
        <SearchIcon fontSize="large" style={{ color: "#fff" }} onClick={props.searchClickHandler}/>
      </nav>
    </header>
  );
}
