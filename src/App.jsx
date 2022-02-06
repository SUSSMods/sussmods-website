import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

function App() {
  state = {
    SideDrawerOpen: false
  };

  DrawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  BackdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  let SideDrawer;
  let Backdrop;

  if (this.state.SideDrawerOpen) {
    SideDrawer = <SideDrawer />;
    Backdrop = <Backdrop click={this.BackdropClickHandler} />;
  }

  return (
    <>
      <div style={{ height: "100%" }}>
        <Router>
          <Navbar />
          <MobileNavbar DrawerClickHandler={this.DrawerToggleClickHandler} />
          {SideDrawer}
          {Backdrop}
          <Header />
          <MainContent />
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
