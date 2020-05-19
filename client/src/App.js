import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "../src/pages/Directory"
import MainNav from "../src/components/MainNav/index"


function App() {
  return (

    <Router>
      <MainNav>
        <Route exact path="/" component={Directory} />
      </MainNav>
    </Router>
  );
}

export default App;
