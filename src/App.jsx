import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavTitlesProvider from "./NavTitlesContext";
import MobileNavbar from "./MobileNavbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import Navbar from "./Navbar";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

import SearchBar from "./SearchBar";
import modules from './data' // TODO: replace with mod list from api call 

import "./styles.css";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [mobileSearchBar, setMobileSearchBar] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevSideDrawerOpen) => !prevSideDrawerOpen);
  };

  const mobileSearchBarHandler = () => {
    setMobileSearchBar((prevMobileSearchBar) => !prevMobileSearchBar);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <Router>
          <NavTitlesProvider>
            <Navbar />
            <MobileNavbar drawerClickHandler={drawerToggleClickHandler}  searchClickHandler={mobileSearchBarHandler}/>
            {sideDrawerOpen && (
              <>
                <SideDrawer click={drawerToggleClickHandler} />
                <Backdrop click={backdropClickHandler} />
              </>
            )}
            {mobileSearchBar && width <= breakpoint && (
              <SearchBar data={modules}/>
            )}
            <Header />
            <MainContent />
          </NavTitlesProvider>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
