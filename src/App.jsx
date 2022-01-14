import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import { BrowserRouter as Router } from "react-router-dom";
import styles from './styles.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <MainContent />
      </Router>
      <Footer />
    </>

  );
}

export default App;
