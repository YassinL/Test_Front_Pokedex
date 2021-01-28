import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/organisms/NavBar/NavBar";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
