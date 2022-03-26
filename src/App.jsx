import React, { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";

import NavTitlesProvider from "./NavTitlesContext";
import MobileNavbar from "./MobileNavbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import Navbar from "./Navbar";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

import "./styles.css";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevSideDrawerOpen) => !prevSideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <Router basename="/">
          <NavTitlesProvider>
            <Navbar />
            <MobileNavbar drawerClickHandler={drawerToggleClickHandler} />
            {sideDrawerOpen && (
              <>
                <SideDrawer click={drawerToggleClickHandler} />
                <Backdrop click={backdropClickHandler} />
              </>
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