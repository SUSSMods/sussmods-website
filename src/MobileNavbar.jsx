import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import DrawerToggleButton from "./DrawerToggleButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/sussmods-logo-secondary.png";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar";
import modules from "./data"; // TODO: replace with mod list from api call

export default function MobileNavbar(props) {
  //TODO: Remove duplication with react-responsive
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const [mobileSearchBar, setMobileSearchBar] = useState(false);

  const mobileSearchBarHandler = () => {
    setMobileSearchBar((prevMobileSearchBar) => !prevMobileSearchBar);
  };

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <header className="mobile-header">
      <nav className="mobile-navbar">
        <div>
          <MenuIcon
            fontSize="large"
            style={{ color: "#fff" }}
            onClick={props.drawerClickHandler}
          />
        </div>
        <div className="spacer" />
        <div className="mobile-header-logo">
          <Link to="/">
            <img className="sussmods-logo" src={logo} alt="SUSSMods Logo" />
          </Link>
        </div>
        <div className="spacer" />
        <SearchIcon
          fontSize="large"
          style={{ color: "#fff" }}
          onClick={mobileSearchBarHandler}
        />
      </nav>
      {mobileSearchBar && width <= breakpoint && (
        <SearchBar data={modules} className="mobile-search" />
      )}
    </header>
  );
}
