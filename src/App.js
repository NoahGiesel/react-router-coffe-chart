import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Navigation from "./components/Navigation";
import About from "./components/About";
import Create from "./components/Create";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/" exact component={About} />
        <Route path="/create" component={Create} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
