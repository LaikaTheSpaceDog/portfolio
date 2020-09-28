import React from 'react';
import './styles/css/styles.min.css';
import About from "./components/About";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => (
  <>
    <About />
    <Projects />
    <Contacts />
    <Footer />
  </>
);

export default App;
