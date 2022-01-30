import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavTitlesProvider from "./NavTitlesContext";
import Navbar from "./Navbar";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./styles.css";

function App() {
  return (
    <>
      <Router>
        <NavTitlesProvider>
          <Navbar />
          <Header />
          <MainContent />
        </NavTitlesProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
